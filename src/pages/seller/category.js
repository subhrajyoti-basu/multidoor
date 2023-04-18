import ProtectedSellerRoute from '@/components/Routes/ProtectedSellerRoute'
import CategoryForm from '@/components/seller/CategoryForm'
import SellerLayout from '@/components/seller/SellerLayout'
import { IconButton } from '@/components/styles/IconButton'
import { Button, Container, Input, Spacer, Table, Text, Tooltip, Row, Col, Card, Modal } from '@nextui-org/react'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiDelete, FiEdit, FiTrash } from 'react-icons/fi'

const category = () => {
    // state
    const [categoryData, setCategoryData] = useState();
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const [selected, setSelected] = useState(null);

    // delete category
    const deleteCategory = async (slug) => {
        try {
            const { data: res } = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/category/delete-category/${slug}`)
            if (res.success) {
                getCategory();
            }
        } catch (error) {
            console.error(error)
        }
    }

    // call category data
    const getCategory = async () => {
        try {
            const { data: res } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/v1/category/get-categories`)
            // console.log(res?.categories)
            setCategoryData(res?.categories)

        } catch (error) {
            console.error(error)
        }
    }

    // get category data
    useEffect(() => {
        getCategory();
    }, [])

    return (
        <ProtectedSellerRoute>
            <SellerLayout>
                <Container fluid>
                    <Text size={25} weight='medium'>Add Category</Text>
                    <Spacer y={1} />
                    <CategoryForm getCategory={getCategory} />
                    <Spacer y={1} />
                    <Text size={25} weight='medium'>Category List</Text>
                    <Spacer y={0.5} />
                    <Modal closeButton aria-label='edit category' open={visible} onClose={() => setVisible(false)}>
                        <Modal.Body>
                            <CategoryForm getCategory={getCategory} value={selected} visible={setVisible} />
                        </Modal.Body>
                    </Modal>
                    <Card css={{ maxWidth: '500px', shadow: 'none' }}>
                        <Table aria-label='category table' shadow='false' >
                            <Table.Header>
                                <Table.Column>CATEGORY NAME</Table.Column>
                                <Table.Column>ACTION</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {categoryData && categoryData?.map((item) => {
                                    return (<Table.Row key={item._id}>
                                        <Table.Cell>{item.name}</Table.Cell>
                                        <Table.Cell css={{ w: 100 }}>
                                            <Row justify='center' align='center'>
                                                <Col>
                                                    <Tooltip content='Edit'>
                                                        <IconButton onClick={
                                                            ()=>{
                                                                handler();
                                                                setSelected(item)
                                                            }
                                                            }>
                                                            <FiEdit />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Col>
                                                <Col>
                                                    <Tooltip content='Delete'>
                                                        <IconButton onClick={() => deleteCategory(item.slug)}>
                                                            <FiTrash />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Col>
                                            </Row>
                                        </Table.Cell>
                                    </Table.Row>)

                                })}
                            </Table.Body>
                        </Table>
                    </Card>
                </Container>
            </SellerLayout>
        </ProtectedSellerRoute>
    )

}

export default category