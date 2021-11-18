const Form = require ('../models/formSchema.js');


const getList = async (req, res)=>{

    try {
        const formList = await Form.find()
        // console.log(formList, "formList")
        res.status(200).json(formList)
    } catch (error) {
        res.status(404).json({message : error })
    }
}


const createList = async (req, res)=>{
    const form = req.body
    const newForm = new Form(form)
    try {
        await newForm.save()
        res.status(201).json(newForm)
    } catch (error) {
        res.status(409).json({message: error})
    }

}

module.exports  = { getList, createList };