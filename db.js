const mongoose=require("mongoose");
require("dotenv").config()
const connection =mongoose.connect(process.env.mongoURL);
// changes done
module.exports={connection}