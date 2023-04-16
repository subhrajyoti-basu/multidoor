import { Avatar, Col, Container, Dropdown, Row } from '@nextui-org/react'
import React from 'react'
import SellerNavigation from './SellerNavigation'
import { useAuth } from '@/context/auth'
import { useRouter } from 'next/router'

const SellerLayout = ({ children }) => {
    const [auth, setAuth] = useAuth();
    const router = useRouter()
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth')
        router.push('/login')
    }

    const handleDropdown = (key) => {
        if(key == 'logout') handleLogout();
    }


    return (
        <>
            <Container responsive='false' gap={0}>
                <Row>
                    <Col span={2} css={{ px: 15 }}>
                        <SellerNavigation />
                    </Col>
                    <Col css={{ background: '#f7f7f7', px: 15, py: 10, h: '100vh' }} span={10}>
                        <Row>
                            <Col>
                                Welcome Seller!!
                            </Col>
                            <Col css={{ display: 'flex', justifyContent: 'end' }}>
                                {auth?.loaded &&
                                    <Dropdown>
                                        <Dropdown.Button light>
                                            <Avatar size='md' css={{ border: '2px solid blue' }} text={auth?.user?.name} />
                                        </Dropdown.Button>
                                        <Dropdown.Menu onAction={handleDropdown} aria-label="Profile Actions">
                                            <Dropdown.Item 
                                            description='click to logout from seller dashboard' 
                                            key="logout" >
                                                Log Out
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                }
                            </Col>
                        </Row>
                        <Row>
                            {children}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SellerLayout