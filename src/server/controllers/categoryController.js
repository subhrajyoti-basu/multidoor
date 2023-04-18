const categoryModel = require("../models/categoryModel");
const slugify = require('slugify')


// ADD CATEGORY CONTROLLER
const addCategory = async (req, res) => {
    try {
        // destructuring request
        const { name } = req.body;
        // validation
        if (!name) return res.send({ error: 'Name is required' });

        // check if category exists
        const nameExists = await categoryModel.findOne({ name: name })

        // handle if exists
        if (nameExists) {
            return res.status(200).send({
                success: true,
                message: 'category already exists'
            })
        }

        // create new category
        const category = await new categoryModel({ name: name, slug: slugify(name, '_') }).save()

        // send category
        res.status(201).send({
            success: true,
            message: 'new category added',
            category
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in creating category',
            error
        })
    }

}

// DELETE CATEGORY CONTROLLER
const deleteCategory = async (req, res) => {
    try {
        const category = await categoryModel.findOneAndDelete({ slug: req.params.slug })
        // send delete category response
        console.log(category)
        if (category) {
            res.status(201).send({
                success: true,
                message: 'category deleted',
            })
        }else{
            throw 'Not responding'
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in deleting category',
            error
        })
    }
}

// UPDATE CATEGORY CONTROLLER
const updateCategory = async(req, res) => {
    try {
        const {name} = req.body
        const category = await categoryModel.findOneAndUpdate({ _id: req.params.id }, {name: name, slug: slugify(name, '_')})
        // send delete category response
        if (category) {
            res.status(201).send({
                success: true,
                message: 'category Updated',
            })
        }else{
            throw 'Not responding'
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in deleting category',
            error
        })
    }
 }

// GET CATEGORY CONTROLLER LIST
const getCategory = async (req, res) => {
    try {
        const categories = await categoryModel.find({})
        res.status(200).send({
            success: true,
            message: 'All catetgories',
            categories
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in getching categories',
            error
        })
    }
}


module.exports = { addCategory, deleteCategory, updateCategory, getCategory }