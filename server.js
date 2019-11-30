const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db_playground'

app.use(bodyParser.urlencoded({ extended: true }))



app.get('/yearsBirths', (req, res) => {

    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to database')
        }
        const db = client.db(databaseName)
        db.collection('users')
            .aggregate([
                {
                    $group: {
                        _id: { $substr: ["$birthday", 0, 4] },
                        count: { $sum: 1 }
                    }
                }
            ]).toArray().then(agg => {
                res.json(agg)
            })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

