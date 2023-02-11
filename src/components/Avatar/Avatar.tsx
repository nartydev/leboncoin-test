import {FC} from 'react'
import * as Styled from './internal/Avatar.styles'

interface IProps {
  nickname: string
}

export const Avatar: FC<IProps> = ({nickname}) => {
  return (
    <Styled.Avatar>
      <h3>{nickname.slice(0, 1)}</h3>
    </Styled.Avatar>
  )
}
