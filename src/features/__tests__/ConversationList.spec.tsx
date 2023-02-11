import React from 'react'
import {screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
import {ConversationList} from '../ConversationList/ConversationList'
import {setupServer} from 'msw/node'
import {rest} from 'msw'
import {customRender, initTestWithServer} from '@/shared/tests'

jest.mock('next/router', () => require('next-router-mock'))

const server = setupServer(
  rest.get(`${process.env.NEXT_PUBLIC_HOST}conversations/1`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 2,
          recipientId: 3,
          recipientNickname: 'Patrick',
          senderId: 1,
          senderNickname: 'Thibaut',
          lastMessageTimestamp: 1620284667,
        },
      ])
    )
  })
)

initTestWithServer(server)

describe('ConversationList', () => {
  beforeEach(async () => {
    customRender(<ConversationList />)
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  })
  it('renders component correctly', () => {
    const heading = screen.getByText('Conversations')
    expect(heading).toBeInTheDocument()
  })
  it('renders with data', async () => {
    waitFor(() => expect(screen.getByText('Patrick')).toBeInTheDocument())
  })
})
