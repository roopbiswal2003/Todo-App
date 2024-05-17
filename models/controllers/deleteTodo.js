// import the model
const Todo=require("../models/Todo");

// define route handlers
exports.deleteTodo=async (req,res) =>{

    try{

        const {id}=reg.params;

        await Todo.findByIdDelete(id);
        
    
        //response
        res.status(200).json(
            {
                success:true,
                message:"Todo DELETED",
    
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
    
    
    
    

