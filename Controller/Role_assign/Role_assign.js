const connection = require('../../Model/DbConnect');

const postAssign = async (req,res)=>{
   try{ 
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "INSERT INTO role_assign SET ?";

    await connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage);
}
}

const getAssign = async (req,res)=>{
    try{
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "SELECT * FROM role_assign";

    await connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage);
}

}


module.exports={postAssign,getAssign};
