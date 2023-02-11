import {COLORS} from '@/shared/constants/colors'
import Link from 'next/link'
import styled from 'styled-components'

export const MessageCard = styled.div`
  display: flex;
  justify-content: ${({fromMe}) => (fromMe ? 'flex-end' : 'flex-start')};
  margin: 0 0 0.8rem;

  .card-item {
    max-width: 70%;
  }

  .body {
    background: ${({fromMe}) => (fromMe ? COLORS.lightBackground : COLORS.secondary)};
    padding: 0.7rem;
    border-radius: 6px;
    margin-top: 0.5rem;
  }

  p {
    font-weight: 600;
    margin: 0 0 0.5rem;
  }
`
