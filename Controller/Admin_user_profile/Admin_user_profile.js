const connection = require('../../Model/DbConnect');

const postProfile = async (req,res)=>{
   try{ 
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "INSERT INTO admin_user_profile SET ?";

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

const getProfile = async (req,res)=>{
    try{
    let userData = req.body;
    console.log(userData);
    let sqlQuery = "SELECT * FROM admin_user_profile";

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

const updateProfile = async (req,res)=>{
    try{
    let userData = [req.body.User_name,req.body.Email,req.body.Mobile,req.body.Gender,req.body.Address_line1,req.body.Address_landmark,req.body.State,req.body.City,req.body.Pincode,req.body.Adhar,req.body.Profile_photo,req.body.Adhar_photo,req.body.DOB,req.body.DOJ,req.params.User_id];
    let sqlQuery = "UPDATE admin_user_profile SET User_name=?,Email=?,Mobile=?,Gender=?,Address_line1=?,Address_landmark,State=?,City=?,Pincode=?,Adhar=?,Profile_photo=?,Adhar_photo=?,DOB=?,DOJ=?WHERE User_id = ?";


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


const deleteProfile = async (req,res)=>{
    try{
    let userData = [req.body,req.params.User_id];
    let sqlQuery = "DELETE FROM admin_user_profile WHERE User_id=?";

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


module.exports={postProfile,getProfile,updateProfile,deleteProfile};
