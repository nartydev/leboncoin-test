import type {AppProps} from 'next/app'
import {UserProvider} from '@/shared/store/user'
import '@/shared/styles/globals.css'
import StyledComponentsRegistry from '@/registry'
import {SWRConfig} from 'swr'
import toast from 'react-hot-toast'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <SWRConfig
      value={{
        onError: error => {
          if (error.status !== 403 && error.status !== 404) {
            toast.error('Une erreur est survenu, veuillez réessayer')
          }
        },
      }}>
      <UserProvider>
        <StyledComponentsRegistry>
          <Component {...pageProps} />
        </StyledComponentsRegistry>
      </UserProvider>
    </SWRConfig>
  )
}

export default MyApp
