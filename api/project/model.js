// build your `Project` model here
const db = require('../../data/dbConfig');

async function find(){
    const rows = await db('projects as p')

    rows.map(entry => {
        entry.project_completed = !!entry.project_completed;
        return entry;
    })
   
    return rows;
}
async function insert(changes){
    const [id] = await db('projects').insert(changes)
    const rows = await db('projects').where('project_id',id)

    rows.map(entry => {
        entry.project_completed = !!entry.project_completed;
        return entry;
    })
    return rows;
}
module.exports = {
    find,
    insert
}