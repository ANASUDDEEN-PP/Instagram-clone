const mongoose = require('mongoose');
module.exports = () =>{
    try{
        //mongoDB Connection
        mongoose.connect(
            //connection string change according to your string
            'mongodb+srv://ppanasudhee:2AlCAmfOgEN5m4kL@cloneinstagram.ucg3u.mongodb.net/?retryWrites=true&w=majority&appName=cloneInstagram'
        );
        mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
        });
        mongoose.connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
        });
    } catch(err){
        console.log(err);
    }
}