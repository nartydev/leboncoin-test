import {COLORS} from '@/shared/constants/colors'
import Link from 'next/link'
import styled from 'styled-components'

type Card = {
  isActive: boolean
}

export const ConversationCard = styled(Link)`
  h3,
  p {
    margin: 0;
  }

  p {
    margin-top: 0.2rem;
    font-size: 0.8rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 0.4rem;
  }
`

export const Card = styled.div`
  .card {
    padding: 0.7rem;
    border-radius: 6px;
    margin-top: 0.5rem;
    background: ${({isSelected}) => (isSelected ? COLORS.secondary : COLORS.lightBackground)};
    display: flex;
    align-items: center;
    transition: background 0.5s;
  }

  &:hover {
    background: ${COLORS.secondary};
  }
`