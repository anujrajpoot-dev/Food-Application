const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGODB_URI) 
        .then(() => {
            console.log("DataBase is connected Successfully with Server ");
        })
        .catch((err) => {
            console.log("DataBase facing some error ",err);
        })
}

module.exports = connectDB;
