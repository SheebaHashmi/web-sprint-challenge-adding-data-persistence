// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model');

const router = express.Router()

router.get('/',async(req,res,next)=> {
    try{
        const result = await Resource.find();
        res.status(200).json(result)
    }
    catch{
        next()
    }
})

router.post('/', async (req,res,next)=> {
    try{
        const result = await Resource.add(req.body)
        res.json(result)
    }
    catch{
        next()
    }
})

module.exports = router