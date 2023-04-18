import { useAuth } from '@/context/auth'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const ProtectedSellerRoute = ({ children }) => {

  const [auth, setAuth] = useAuth();
  const router = useRouter();
  const [isSeller, setSeller] = useState({
    seller: false, loaded: false
  })

  const checkSeller = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/auth/user-seller`)
      if (response?.data.ok == true) {
        setSeller({
          seller: true,
          loaded: true
        })
      }else{
        setSeller({
          seller:false,
          loaded: true
        })
      }
      // console.log(response)
    } catch (error) {
      await console.error(error.response.data.message)
      setSeller({
        seller:false,
        loaded: true
      })
    }
  }

  useEffect(() => {
    // checkSeller
    if (auth?.loaded) {
      checkSeller();
    }

  }, [auth])

  useEffect(() => {
    // if not seller send to login
    if (!isSeller.seller & isSeller.loaded) {
      router.push('/login')
    }
  }, [isSeller])

  if(isSeller.seller & isSeller.loaded) {return (
    <>
      {children}
    </>
  )}else return null
}

export default ProtectedSellerRoute;