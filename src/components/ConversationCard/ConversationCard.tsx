import {Conversation} from '@/shared/types/conversation'
import {getLoggedUserId} from '@/shared/utils/getLoggedUserId'
import {FC} from 'react'
import {Avatar} from '../Avatar'
import {UserCard} from '../UserCard'
import * as Styled from './internal/ConversationCard.styles'

interface IProps {
  conversation: Conversation
  isSelected: boolean
}

export const ConversationCard: FC<IProps> = ({conversation, isSelected}) => {
  const date = new Date(conversation.lastMessageTimestamp).toLocaleDateString()
  const userId = getLoggedUserId()
  const nickname = userId !== conversation.senderId ? conversation.senderNickname : conversation.recipientNickname
  return (
    <Styled.ConversationCard href={`/conversation/${conversation.id}`} title={nickname}>
      <UserCard isSelected={isSelected} nickname={nickname} date={date} />
    </Styled.ConversationCard>
  )
}
