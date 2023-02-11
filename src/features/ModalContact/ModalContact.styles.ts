import {COLORS} from '@/shared/constants/colors'
import styled from 'styled-components'
import { buttonStyle } from '../MessageList/MessageList.styles'

export const ModalContact = styled.section`
  position: absolute;
  inset: 0;
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  .modal {
    width: 70%;
    padding: 1rem;
    background: ${COLORS.lightBackground};
    border-radius: 0.4rem;
    padding: 1.5rem;
    z-index: 2;
    position: relative;
    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    background: transparent;
    border: none;
    ${buttonStyle}
  }

  .list-contacts {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    button {
      color: white;
      border: none;
      padding:0;
      margin:0;
      background: transparent;
      cursor: pointer;
    }
  }

  .overlay {
    background: rgba(0,0,0,.4);
    position: absolute;
    inset: 0;
    border: none;
    z-index: 1;
  }

  h3 {
    margin: 0;
  }
`
