import {COLORS} from '@/shared/constants/colors'
import styled from 'styled-components'

export const buttonStyle = `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    border-radius: 5px;
    transition: background 0.3s ease-in-out;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    &:hover {
        background: ${COLORS.gray};
    }
`

export const MessageList = styled.section`
  flex: 0.7;
  margin-left: 1rem;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    flex: 1;
    margin-left: 0rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: ${COLORS.lightBackground};
    border-bottom: 1px solid ${COLORS.lightBackground};

    & > button {
      background-color: transparent;
      border: none;
      ${buttonStyle}
    }
  }

  .chat {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: stretch;
    height: 100%;
  }

  .list-message {
    max-height: 74vh;
    overflow: scroll;
    display: flex;
    flex-direction: column-reverse;
    & > p {
      text-align: center;
    }
  }

  .message-input {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      border-radius: 6px;
      color: #fff;
      background: ${COLORS.lightBackground};
      border: 1px solid ${COLORS.lightBackground};
      padding: 1rem;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
      font-size: 1rem;
    }

    button {
      border: none;
      position: absolute;
      background: transparent;
      right: 5px;
      top: 5px;
      ${buttonStyle}
    }
  }
`
