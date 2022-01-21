// build your `Project` model here
const db = require('../../data/dbConfig');

function find(){
    return db('projects')
}
async function insert(changes){
    const [id] = await db('projects').insert(changes)
    return db('projects').where('project_id',id)
    
}
module.exports = {
    find,
    insert
}