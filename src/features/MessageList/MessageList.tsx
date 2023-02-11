import {FC, useEffect, useRef} from 'react'
import * as Styled from './MessageList.styles'
import {useRouter} from 'next/router'
import {MessageCard} from '@/components'
import {Message} from '@/shared/types/message'
import useSWR from 'swr'
import {getAllMessages} from '@/services/message'
import {getAllConversations} from '@/services/conversation'
import {InputMessageList} from './InputMessageList'
import {HeaderMessageList} from './HeaderMessageList'
import {getLoggedUserId} from '@/shared/utils/getLoggedUserId'

export const MessageList: FC = () => {
  const userId = getLoggedUserId()
  const router = useRouter()
  const {id} = router.query
  const messagesEndRef = useRef(null)
  const conversations = useSWR('/conversations', () => getAllConversations({userId: `${userId || 1}`}))
  const conversation = conversations.data?.find(conv => conv.id === +id)
  const {data, isLoading} = useSWR(`/messages/${id}`, () => getAllMessages({conversationId: id.toString()}))

  useEffect(scrollToBottom, [data])

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  function getAuthorName(message: Message): string {
    if (!conversation) return ''
    return message.authorId === userId ? conversation.senderNickname : conversation.recipientNickname
  }

  if (isLoading || !id) {
    return <div data-testid="loading">Chargement en cours...</div>
  }

  return (
    <Styled.MessageList>
      <HeaderMessageList conversation={conversation} />
      <div className="chat">
        <div className="list-message">
          <div ref={messagesEndRef} />
          {data?.map(message => (
            <MessageCard key={message.timestamp} fromMe={message.authorId === userId} message={message} author={getAuthorName(message)} />
          ))}
          {data?.length === 0 && <p>Vous n&apos;avez pas encore discuter avec cette personne</p>}
        </div>
        <InputMessageList idConversation={id.toString()} />
      </div>
    </Styled.MessageList>
  )
}
