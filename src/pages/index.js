import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useAuth } from '@/context/auth'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [auth, setAuth] = useAuth()
  return (
    <>
      <Layout>
        <pre>
          {JSON.stringify(auth, null, 4)}
        </pre>
      </Layout>
    </>
  )
}
