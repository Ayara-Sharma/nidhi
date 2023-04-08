const connection = require('../../Model/DbConnect');

const postRole = async (req,res)=>{
   try{ 
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "INSERT INTO admin_role SET ?";

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

const getRole = async (req,res)=>{
    try{
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "SELECT * FROM admin_role";

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

const updateRole = async (req,res)=>{
    try{
    let userData = [req.body.Role_name,req.params.Role_id];
    let sqlQuery = "UPDATE admin_role SET Role_name=? WHERE Role_id = ?";


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


const deleteRole = async (req,res)=>{
    try{
    let userData = [req.body,req.params.Role_id];
    let sqlQuery = "DELETE FROM admin_role WHERE Role_id=?";

   await connection.query(sqlQuery,userData,function(error,result,field){
        if(error){
            console.log("Error:",error.sqlMessage);
        }
        else{
            res.json(result);
        }

    });
}catch(error){
    res.send(error.sqlMessage)
}
}


module.exports={postRole,getRole,updateRole,deleteRole};
