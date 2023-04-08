const connection = require('../../Model/DbConnect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const uuid = require('uuid').v4;

const signup = async (req, res) => {
    try {
      const { User_id,Password} = req.body;
      const query = "select * from admin_user_login where User_id = ?";
      const query1 = "Insert into admin_user_login set ?";
      const salt = await bcrypt.genSalt(10);
      console.log("salt", salt);
      const pass = await bcrypt.hash(Password , salt);
      console.log("Password", Password);
      const data1={
        User_id,
        Password: pass
      };
      connection.query(query, User_id, (error, result) => {
        if (result.length) {
          return res.send({ message: "Userid already Exist" });
        }
        connection.query(query1, data1, (err, result) => {
          if (err) {
            return res.send({ Error: err.sqlMessage });
          }
          return res.send({ Status: 200, Response: result });
        });
      });
    } catch (err) {
      res.send(err.sqlMessage);
    }
  };

  const login = async (req, res) => {
    try {
      const { User_id, Password } = req.body;
      const query = "SELECT * FROM admin_user_login where User_id=?";
      connection.query(query, User_id, async (error, result) => {
        if (!result.length) {
          return res.json({ message: "Userid is not match" });
        }
        const pass =  result[0].Password;
        // console.log("password is match", pass);
        const passmatch = await bcrypt.compare(Password,pass);
        if (!passmatch) {
          return res.send("password does not match");
        }
        // const id = result[0].id
        const token = await jwt.sign(User_id, "hghjh");
        return res.send({ result, token });   
      });
    } catch (err) {
      res.send(err.sqlMessage);
    }
  };
  
  module.exports = { signup, login };  
  
  
  

