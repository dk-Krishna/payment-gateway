import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, { dbName: "razor" }).then(()=> {
    console.log("MongoDB Connected Successfully");
}).catch((err)=> {
    console.log(err);
});