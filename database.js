const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect =() => {
    mongoose.connect(process.env.DATABASE_URL,{
    useNewUrParser:true,
    useUnifiedTopology:true,
    }
)

.then(()=> console.log("db ka connection Successful"))
.catch((error) => {
console.log("Issue in db Connection");
console.error(error.message);
process.exit(1);
});
}

module.experts=dbConnect;