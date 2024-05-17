// import the model
const Todo=require("../models/Todo");

// define route handlers

exports.createTodo=async (req,res) =>{
try{

    //extracts title and descriptions from request body
    const{title,description}=req.body;

    //create a new Todo object and insert in DB
    const response=await Todo.create({title,description});

    //sends a json response with a success flag
    res.status(200).json(
        {
            success:true,
            data:response,
            message:"Entry created Successfully"

        }
    );
}

catch(err) {
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
        success:false,
        data:"internal server error",
        message:err.message,
    }

    )
}
}
