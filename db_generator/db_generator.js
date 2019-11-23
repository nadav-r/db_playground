const fs = require('fs')
const csv = require('csv-parser')
const generateBirthDay = require('./userGenerator/birthDayGenerator.js')
const generateName = require('./userGenerator/nameGenerator.js')
const uuidv1 = require('uuid/v1')

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "../db.sqlite"
    },
    useNullAsDefault: true
})


// const { MongoClient, ObjectID } = require('mongodb')
// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = '../db.sqlite'

// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database')
//     }

//     const db = client.db(databaseName)

// })

const results = []
fs.createReadStream('names-state.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        const min = 0
        const max = results.length
        const names = results.map(record => { return record.name })
        const state = results.map(record => { return record.state })
        for (let i = 0; i < 50; i++) {
            const { firstName, secondName } = generateName(names, names)
            const user = {
                id: uuidv1(),
                first_name: firstName,
                last_name: secondName,
                birthday: generateBirthDay(),
                last_login: generateBirthDay()
            }
            knex('users').insert(user).catch(err => console.log(err))

        }
    })


