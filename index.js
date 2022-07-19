const mongoose = require('mongoose');
require('dotenv').config(); // dotEnv allow to have sensitive data from the environment in a separate file.

let app = require('./app');
let port = process.env.PORT || 3700

mongoose.Promise = global.Promise;

// Connection with database. The connection is made with Mongo Atlas that allow to have documents into the cloud.
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.bqv0s.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port: ${port}`)
        })
    })
    .catch(err => console.log(err))

    