const categoryModel = require("../models/categoryModel");



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
        const category = await new categoryModel({name: name, slug: })



    } catch (error) {

    }

}

// DELETE CATEGORY CONTROLLER
const deleteCategory = () => { }

// UPDATE CATEGORY CONTROLLER
const updateCategory = () => { }

// GET CATEGORY CONTROLLER LIST
const getCategory = () => { }


module.exports = { addCategory, deleteCategory, updateCategory, getCategory }