// build your `Resource` model here
const db = require('../../data/dbConfig.js');

 async function find(){
    const rows = await db('resources'); 
    return rows;
   
}

async function add(changes){
        const [id] = await db('resources').insert(changes)
        return db('resources').where('resource_id',id).first()
  
}

module.exports = {
    find,
    add
}