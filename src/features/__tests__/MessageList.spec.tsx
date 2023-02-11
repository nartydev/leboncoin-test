import React from 'react'
import {screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
import {setupServer} from 'msw/node'
import {rest} from 'msw'
import {customRender, initTestWithServer} from '@/shared/tests'
import {MessageList} from '../MessageList/MessageList'
import userEvent from '@testing-library/user-event'

const userId = 1
const conversationId = 1

const server = setupServer(
  rest.get(`${process.env.NEXT_PUBLIC_HOST}conversations/${userId}`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          recipientId: 3,
          recipientNickname: 'Patrick',
          senderId: 1,
          senderNickname: 'Thibaut',
          lastMessageTimestamp: 1620284667,
        },
      ])
    )
  }),
  rest.get(`${process.env.NEXT_PUBLIC_HOST}messages/${conversationId}`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          conversationId: 1,
          timestamp: 1625637849,
          authorId: 1,
          body: "Bonjour c'est le premier message de la première conversation",
        },
        {
          id: 2,
          conversationId: 1,
          timestamp: 1625637867,
          authorId: 1,
          body: "Bonjour c'est le second message de la première conversation",
        },
      ])
    )
  }),
  rest.post(`${process.env.NEXT_PUBLIC_HOST}messages/${conversationId}`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        conversationId: 1,
        timestamp: 1625637849,
        authorId: 1,
        body: "Bonjour c'est le premier message de la première conversation",
      })
    )
  })
)

initTestWithServer(server)

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('MessageList', () => {
  beforeEach(async () => {
    customRender(<MessageList />)
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  })

  const useRouter = jest.spyOn(require('next/router'), 'useRouter')
  useRouter.mockReturnValue({query: {id: 1}})
  window.HTMLElement.prototype.scrollIntoView = function () {}

  it('display messages correctly', () => {
    const contactNickname = screen.getByTestId('contact-nickname')
    const messages = screen.getAllByTestId('msg')
    expect(contactNickname).toBeInTheDocument()
    expect(messages).toHaveLength(2)
  })
  it('send message', async () => {
    const input = screen.getByTestId('input-text')
    const btnSubmit = screen.getByTestId('sender-btn')
    const messages = screen.getAllByTestId('msg')
    userEvent.type(input, 'Hello, nouveau message')
    waitFor(() => expect(input).toHaveValue('Hello, nouveau message'))
    userEvent.click(btnSubmit)
    expect(input).toHaveValue('')
    waitFor(() => expect(messages).toHaveLength(3))
  })
  it('send message with empty value', async () => {
    const input = screen.getByTestId('input-text')
    const btnSubmit = screen.getByTestId('sender-btn')
    const messages = screen.getAllByTestId('msg')
    userEvent.click(btnSubmit)
    expect(input).toHaveValue('')
    waitFor(() => expect(messages).toHaveLength(2))
  })
})
