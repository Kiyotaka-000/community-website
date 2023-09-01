import mongoose from "mongoose";

const URL = "mongodb+srv://Yash0:Yash123@mycluster.lfv0ulc.mongodb.net/userdb?retryWrites=true&w=majority"
const promise = mongoose.connect(URL);
promise.then((data)=>{
    console.log("database connection established");
}).catch((err)=>{
    console.log("database connection error",err);
})
export default mongoose;