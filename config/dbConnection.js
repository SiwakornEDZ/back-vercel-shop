const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://siwakornqwer:m0WfmokyC2YAp3lt@cluster0.qsog5xm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// require('dotenv').config();
// const uri = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const connectDb = async(req,res)=>{
  try {
      const connect = await mongoose.connect(uri)
      console.log(`connected to DB ${connect.connection.name}`);
      } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);  }
}

module.exports = connectDb
