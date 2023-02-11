import {render, RenderOptions} from '@testing-library/react'
import {FC, ReactElement} from 'react'
import {SWRConfig} from 'swr'

export const initTestWithServer = server => {
  beforeAll(() => server.listen())
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())
}

const AllTheProviders: FC = ({children}: {children: JSX.Element}) => {
  return <SWRConfig value={{dedupingInterval: 0, provider: () => new Map()}}>{children}</SWRConfig>
}

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {wrapper: AllTheProviders, ...options})
