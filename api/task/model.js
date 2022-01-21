// build your `Task` model here
const db = require('../../data/dbConfig');

function find(){
    /*   
        select
        t.*,p.project_name, p.project_description
        from tasks as t
        join projects as p
            on t.project_id = p.project_id;
    */
    const rows = db('tasks as t')
            .join('projects as p','t.project_id','p.project_id')
            .select('t.task_id','t.task_description','t.task_notes','t.task_completed','p.project_name', 'p.project_description')

    return rows
}
async function insert(changes){
    const [id] = await db('tasks').insert(changes)
    return db('tasks').where('task_id',id)
    
}
module.exports = {
    find,
    insert
}
