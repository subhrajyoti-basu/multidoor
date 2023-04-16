import Layout from '@/components/Layout'
import ProtectedSellerRoute from '@/components/Routes/ProtectedSellerRoute';
import SellerLayout from '@/components/seller/SellerLayout';
import { Col } from '@nextui-org/react';
import React from 'react'

const dashboard = () => {
    return (
        <>
            <ProtectedSellerRoute>
                <SellerLayout>
                    <div>Dashboard</div>
                </SellerLayout>
            </ProtectedSellerRoute>
        </>
    )
}

export default dashboard;