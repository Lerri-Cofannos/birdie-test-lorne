
export function mysqlConnection(next: Function) {
    console.log('\nentered mysql connection');
    const knex = require("knex")({
        client: 'mysql2',
        connection: {
            host     : 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
            port     : '3306',
            user     : 'test-read',
            password : 'xnxPp6QfZbCYkY8',
            database : 'birdietest'
        },
    })

    knex.count('mood').from('events').where('mood', 'okay').timeout(30000)
        .then(response => {
            console.log('Yipee, mysql query worked !\n', response);
            next(false, response)
        })
        .catch(err => {
            console.log('Oups, mysql query crashed: ', err);
            next({err: 'An error occured while connecting to database'}, null)
        })
}
