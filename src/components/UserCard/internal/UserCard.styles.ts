import {COLORS} from '@/shared/constants/colors'
import styled from 'styled-components'

export const Card = styled.div`
  padding: 0.7rem;
  border-radius: 6px;
  margin-top: 0.5rem;
  background: ${({isSelected}) => (isSelected ? COLORS.secondary : COLORS.lightBackground)};
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: background 0.5s;

  &:hover {
    background: ${COLORS.secondary};
  }

  h3,
  p {
    margin: 0;
  }

  p {
    margin-top: 0.2rem;
    font-size: 0.8rem;
  }

  .content-info {
    display: flex;
    flex-direction: column;
    margin-left: 0.4rem;
  }
`