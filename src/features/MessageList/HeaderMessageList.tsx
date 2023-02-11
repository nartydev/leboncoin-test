import {Conversation} from '@/shared/types/conversation'
import {getLoggedUserId} from '@/shared/utils/getLoggedUserId'

export const HeaderMessageList = ({conversation}: {conversation: Conversation}) => {
  const userId = getLoggedUserId()

  function getNickName(conversation: Conversation): string {
    return conversation.recipientId !== userId ? conversation.recipientNickname : conversation.senderNickname
  }
  return (
    <div className="header">
      <h1 data-testid="contact-nickname">{getNickName(conversation)}</h1>
    </div>
  )
}
