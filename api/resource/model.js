// build your `Resource` model here
const db = require('../../data/dbConfig.js');

 function find(){
    return db('resources'); 
}

async function add(changes){
        const [id] = await db('resources').insert(changes)
        return db('resources').where('resource_id',id).first()
  
}

module.exports = {
    find,
    add
}