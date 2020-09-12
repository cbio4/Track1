const mongoose = require('mongoose');
const config =require('config');
const db =config.get('mongoURI');
 
const connectDB = async () => {
  try { 
    console.log('test'); 
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log("mongoDB connected");    
  } catch (err) {
    console.log('show error');
    
    console.error(err.message);
    
    process.exit(1);
  }
};  
   
module.exports = connectDB;

