import ProtectedSellerRoute from '@/components/Routes/ProtectedSellerRoute'
import SellerLayout from '@/components/seller/SellerLayout'
import React from 'react'

const orders = () => {
    return (
        <ProtectedSellerRoute>
            <SellerLayout>
                <div>orders</div>
            </SellerLayout>
        </ProtectedSellerRoute>
    )
}

export default orders