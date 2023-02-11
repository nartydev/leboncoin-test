import {COLORS} from '@/shared/constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COLORS.background};

  footer {
    width: 100%;
    height: 50px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    padding: 2rem 1rem;
    flex: 1;
    min-width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 600px) {
      min-width: 100%;
    }
  }
`
