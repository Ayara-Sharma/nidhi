const connection = require('../../Model/DbConnect');

const postUser = async (req,res)=>{
   try{ 
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "INSERT INTO admin_user_login SET ?";

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

const getUser = async (req,res)=>{
    try{
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "SELECT * FROM admin_user_login";

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

const updateUser = async (req,res)=>{
    try{
    let userData = [req.body.Password,req.body.Registeron,req.body.Status,req.params.User_id];
    let sqlQuery = "UPDATE admin_user_login SET Password=?,Registeron=?,Status=? WHERE User_id = ?";


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


const deleteUser = async (req,res)=>{
    try{
    let userData = [req.body,req.params.Role_id];
    let sqlQuery = "DELETE FROM admin_user_login WHERE User_id=?";

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


module.exports={postUser,getUser,updateUser,deleteUser};
