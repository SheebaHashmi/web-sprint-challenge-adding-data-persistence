const db = require('../../data/dbConfig')
async function validateName(req,res,next){
   const [name] = await db('resources').where('resource_name',req.body.resource_name);
   if(name !== undefined){
       next({status: 400, message: "Invalid resource name" })
   }
       next()
}

module.exports = validateName