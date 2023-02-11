import {FC} from 'react'
import {Avatar} from '../Avatar'
import * as Styled from './internal/UserCard.styles'

interface IProps {
  isSelected?: boolean
  nickname: string
  date?: string
}

export const UserCard: FC<IProps> = ({isSelected, nickname, date}) => {
  return (
    <Styled.Card isSelected={isSelected}>
      <Avatar nickname={nickname} />
      <div className="content-info">
        <h3>{nickname}</h3>
        {date && <p>{date}</p>}
      </div>
    </Styled.Card>
  )
}
