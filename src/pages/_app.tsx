import type {AppProps} from 'next/app'
import '@/shared/styles/globals.css'
import StyledComponentsRegistry from '@/registry'
import {SWRConfig} from 'swr'
import toast, {Toaster} from 'react-hot-toast'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <SWRConfig
      value={{
        onError: error => {
          if (error.status !== 403 && error.status !== 404) {
            toast.dismiss()
            toast.error('Une erreur est survenu, veuillez réessayer', {duration: 3000})
          }
        },
      }}>
      <StyledComponentsRegistry>
        <Component {...pageProps} />
      </StyledComponentsRegistry>
      <Toaster />
    </SWRConfig>
  )
}

export default MyApp
