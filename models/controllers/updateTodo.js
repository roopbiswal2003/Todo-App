// import the model
const Todo=require("../models/Todo");

// define route handlers
exports.updateTodo=async (req,res) =>{

    try{

        const {id}=reg.params;
        const {title,description}=req.body;

        const todo=await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedAt:Date.now()},
        )
    
        //response
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"updated successfully",
    
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
    
    
    
    

