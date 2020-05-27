// const db = require('../data/schemes.db3');
const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
    return db('steps')
    .where({ id });
}

function add(scheme) {
    return db('schemes')
    .insert(scheme);
    // .then(ids => {
    //     return findById(ids[0]);
    // });
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('schemes')
    .where({ id })
    .del();
}




