import { COLORS } from '@/shared/constants/colors'
import styled from 'styled-components'
import { buttonStyle } from '../MessageList/MessageList.styles'

export const ConversationList = styled.section`
  width:100%;

  .create-conv {
    background:${COLORS.lightBackground};
    color: #fff;
    border: none;
    width: 100%;
    ${buttonStyle}
    padding: 1rem;
  }
`
