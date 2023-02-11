import {Message} from '@/shared/types/message'
import {FC} from 'react'
import * as Styled from './internal/MessageCard.styles'

interface IProps {
  message: Message
  fromMe: boolean
  author: string
}

export const MessageCard: FC<IProps> = ({message, author, fromMe}) => {
  return (
    <Styled.MessageCard data-testid="msg" fromMe={fromMe}>
      <div className="card-item">
        {!fromMe && <p>{author}</p>}
        <div className="body">{message.body}</div>
      </div>
    </Styled.MessageCard>
  )
}
