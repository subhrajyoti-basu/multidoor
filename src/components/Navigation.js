import { useAuth } from '@/context/auth'
import { Button, Navbar, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const Navigation = () => {
    const [auth, setAuth] = useAuth()
    const router = useRouter();
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth')
        router.push('/login')
    }
    return (
        <div>
            <Navbar>
                <Navbar.Brand>
                    <Text size={25} weight='bold'>Market</Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Link href='#'>Products</Navbar.Link>
                    <Navbar.Link href='#'>Categories</Navbar.Link>
                    <Navbar.Link href='#'>About Us</Navbar.Link>
                    <Navbar.Link href='#'>Contact Us</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    {!auth.user ? (<>
                        <Navbar.Link href='/login'>Login</Navbar.Link>
                        <Button auto flat>Sign Up</Button>
                    </>) : (<>
                        <Button auto flat>
                            <FiShoppingCart size={20}/>
                        </Button>
                        <Button auto flat onClick={handleLogout}>Logout</Button>
                    </>)}

                </Navbar.Content>
            </Navbar>
        </div>
    )
}

export default Navigation