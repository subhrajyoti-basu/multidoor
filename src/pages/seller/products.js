import ProtectedSellerRoute from '@/components/Routes/ProtectedSellerRoute'
import SellerLayout from '@/components/seller/SellerLayout'
import React from 'react'

const products = () => {
    return (
        <>
            <ProtectedSellerRoute>
                <SellerLayout>
                    <div>products</div>
                </SellerLayout>
            </ProtectedSellerRoute>
        </>

    )
}

export default products