import { useAuth } from '@/context/auth';
import { Button, Card, Checkbox, Container, Input, Row, Spacer, Text } from '@nextui-org/react'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


function index() {
  const router = useRouter()

  const [inputstate, setInputstate] = useState({})
  const [auth, setAuth] = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/auth/login`, {
        ...inputstate
      })
      if (res && res.data.success) {
        console.log(res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })

        localStorage.setItem('auth', JSON.stringify(res.data))
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    }
  }


  const handleChange = (e) => {
    setInputstate({
      ...inputstate,
      [e.target.name]: e.target.value
    })
    // console.log(inputstate)
  }
  return (
    <div>
      <Container display='flex' alignItems='center' justify='center' css={{ minHeight: '100vh' }}>
        <Card css={{ mw: '350px', p: '20px' }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            Market Login
          </Text>
          <form style={{
            display: 'flex',
            flexDirection: 'column'
          }} onSubmit={handleSubmit}>
            <Input
              placeholder='email'
              aria-label='email'
              onChange={handleChange}
              name='email'
            />
            <Spacer y={1} />
            <Input.Password
              placeholder='password'
              aria-label='password'
              onChange={handleChange}
              name='password'
            />
            <Spacer y={1} />
            <Row justify='space-between'>
              <Checkbox>
                <Text size='14'>Remember me</Text>
              </Checkbox>
              <Text size='14'>Forget password?</Text>
            </Row>
            <Spacer y='1' />
            <Button type='submit'>Sign In</Button>
          </form>
        </Card>

      </Container>
    </div>
  )
}

export default index