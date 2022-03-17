const {model}= require('mongoose');

const post=(model) => async(req, res)=>{
    try {
        const item = await model.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const getAll = (model) => async(req, res)=>{
    try {
        const item = await model.find().lean().exec();
        return res.status(200).send(item);
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

const  getOne = (model) => async(req, res)=>{
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.status(200).send(item);
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports =(model,item) =>({
    post:post(model),
    getOne:getOne(model),
    get:getAll(model)
})