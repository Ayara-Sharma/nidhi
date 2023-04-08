
const express = require("express");
const signuprouter = express.Router();
const {signup,login}= require("../../Controller/Admin_user_login/Signuplogin");

signuprouter.post("/signup",signup);
signuprouter.post("/login",login);

module.exports = signuprouter;







