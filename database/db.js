const mongoose = require('mongoose');

const db = async () => {
    try{
        await mongoose.connect('mongodb+srv://Osi:Obomighie@lifekicksdatabase.nppdmvc.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    }catch(err){
        console.log(err);
    }
}

module.exports = db;