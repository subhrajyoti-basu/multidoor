import { Row, Text } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FiBookOpen, FiHome, FiList } from 'react-icons/fi'

const SellerNavigation = () => {
    return (
        <>
            <div>
                <Text size={25} weight='bold'>Market Seller</Text>
                <div style={{marginTop: '25px'}}>
                    <Link href='/seller/dashboard'>
                        <Row align='center' css={{marginBottom: '10px', fontWeight: 'bold', color: 'black'}}>
                            <FiHome size={20} style={{marginRight: '5px'}} />
                            Dashboard
                        </Row>
                    </Link>
                    <Link href='/seller/category'>
                        <Row align='center' css={{marginBottom: '10px', fontWeight: 'bold', color: 'black'}}>
                            <FiBookOpen size={20} style={{marginRight: '5px'}} />
                            Categories
                        </Row>
                    </Link>
                    <Link href='/seller/orders'>
                        <Row align='center' css={{marginBottom: '10px', fontWeight: 'bold', color: 'black'}}>
                            <FiList size={20} style={{marginRight: '5px'}} />
                            Orders
                        </Row>
                    </Link>
                    <Link href='/seller/products'>
                        <Row align='center' css={{marginBottom: '10px', fontWeight: 'bold', color: 'black'}}>
                            <FiList size={20} style={{marginRight: '5px'}} />
                            Products
                        </Row>
                    </Link>

                </div>
            </div >


        </>
    )
}

export default SellerNavigation