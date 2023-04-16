import { AuthProvider } from '@/context/auth'
import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </AuthProvider>
  )
}
