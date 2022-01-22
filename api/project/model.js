// build your `Project` model here
const db = require('../../data/dbConfig');

async function find(){
    const rows = await db('projects as p')

    rows.map(entry => {
        entry.project_completed = !!entry.project_completed;
        return entry;
    })
   console.log(rows)
    return rows;
}
async function insert(changes){
    const [id] = await db('projects').insert(changes)
    const rows = await db('projects').where('project_id',id)

    rows.map(entry => {
        entry.project_completed = !!entry.project_completed;
        delete entry.project_id;
        return entry;
    })
    
    return rows[0];
}
module.exports = {
    find,
    insert
}