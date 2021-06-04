import mongoose from 'mongoose';



const connect  = ()=>
{
    try 
    {
        mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true
        },()=>{ console.log(`Successfully connected to mongoDb`);});
    }
    catch (error) 
    {
        console.log(error.message);
        process.exit(1);
    }
}


export default connect;