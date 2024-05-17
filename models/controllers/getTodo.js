// import the model
const Todo=require("../models/Todo");

// define route handlers
exports.getTodo=async (req,res) =>{
try{

    //fetch all todo items from database
    const todos=await Todo.find({});

    //response
    res.status(200).json(
        {
            success:true,
            data:response,
            message:"Entire Todo Data is fetched",

        }
    );
}

catch(err) {
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
        success:false,
        error:err.message,
        message:"Server Error",
    }

    )
}
}




//////get Todo another form//////

//As we have already imported so no need to further import


// define route handlers
exports.getTodoById   =async (req,res) =>{
try{

    //extract todos items based on id
    const id =req.params.id;
    const todo=await Todo.findById({_id:id});

    //data forgive id not found
    if(!todo) 
  
    //response
   { 
    return res.status(200).json(
        {
            success:false,
            message:"No data found with given Id",

        }
   
    )
   }


// data for given id found

res.status(200).json({
    success:true,
    data:todo,
    message: 'Todo ${id} data successfully fetched',

}

)
}


catch(err) {
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
        success:false,
        error:err.message,
        message:"Server Error",
    }

    )
}
}
