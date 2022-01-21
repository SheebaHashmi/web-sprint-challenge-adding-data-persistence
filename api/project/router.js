// build your `/api/projects` router here
const express = require('express');
const helper = require('./model')
const router = express.Router()

router.post('/',async(req,res,next)=> {
    try{
        const result = await helper.insert(req.body)
        res.status(200).json(result)
    }
    catch{
        next()
    }
})
router.get('/',async(req,res,next)=> {
    try{
        const result = await helper.find()
        res.status(200).json(result)
    }
    catch{
        next()
    }
})

module.exports = router