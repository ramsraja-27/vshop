import mongoose from 'mongoose'

const connectDB=async ()=>{
    
    const conn=await mongoose.connect(process.env.MONGO_URI,
         {useNewUrlParser:true,useUnifiedTopology:true},
         err=>{
             if(err){
                console.log(err);
             }
             else{
                console.log("MongoDB connected successfully");
             }
         })
}
export default connectDB