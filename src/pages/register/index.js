import { Button, Card, Checkbox, Container, Input, Row, Spacer, Text } from '@nextui-org/react'
import React, { useState } from 'react'

function index() {


    const [inputstate, setInputstate] = useState({})

    const handleChange = (e) => {
        e.preventDefault();
        setInputstate({
            ...inputstate,
            [e.target.name]: e.target.value
        })
        console.log(inputstate)
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
                        Market Register
                    </Text>
                    <Input
                        placeholder='name'
                        aria-label='name'
                        onChange={handleChange}
                        name='name'
                    />
                    <Spacer y={1} />
                    <Input
                        placeholder='email'
                        aria-label='email'
                        onChange={handleChange}
                        name='email'
                    />
                    <Spacer y={1} />
                    <Input
                        placeholder='phone'
                        aria-label='phone'
                        onChange={handleChange}
                        name='phone'
                    />
                    <Spacer y={1} />
                    <Input
                        placeholder='address'
                        aria-label='address'
                        onChange={handleChange}
                        name='address'
                    />
                    <Spacer y={1} />
                    <Input.Password
                        placeholder='password'
                        aria-label='password'
                        onChange={handleChange}
                        name='password'
                    />
                    <Spacer y={1} />
                    <Button>Sign In</Button>
                </Card>

            </Container>
        </div>
    )
}

export default index