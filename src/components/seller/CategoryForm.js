import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";


const categoryForm = ({getCategory, value, visible}) => {
    const [formData, setFormData] = useState({category: value?.name || ''})
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        let URL
        if(value){
            URL = `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/category/update-category/${value._id}`
        }else{
            URL = `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/category/add-category`
        }

        try {
            let addCategory
            if(!value) {
            addCategory = await axios.post(URL, {
                name: formData.category
            });
        }else{
            addCategory = await axios.put(URL, {
                name: formData.category
            });
        }
            if (addCategory?.data?.success) {
                // console.log(addCategory)
                setFormData({
                    category: ''
                })
                e.target.category.value = ''
                if(visible) visible(false)
                getCategory()

            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return <form onSubmit={handleSubmit}>
        <Input aria-label='category' name='category' required placeholder='enter the category name' bordered width='350px' initialValue={formData.category}  onChange={handleChange}></Input>
        <Spacer y={0.5} />
        <Button size='sm' type='submit' flat>create category</Button>
    </form>
}


export default categoryForm;