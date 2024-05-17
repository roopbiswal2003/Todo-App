const express=require ('express');
const app=express();

//load config from env file
require("dotenv").config();
const port=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes=require("./routes/todos");

//Mount the todo ASPI routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,() => {
  console.log("Server started at ${PORT}`");
});

//connect to the database
const dbConnect=require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res)=>{
  res.send('<h1> This is the HOMEPAGE body</h1>')
})