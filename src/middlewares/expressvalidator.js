const { body } = require("express-validator");
const { isValidObjectId } = require("mongoose");

module.exports = {

  RegisterValidator: [
    body("name").isString().notEmpty(),
    body("emailId").isEmail().notEmpty(),
    body("password").isString().notEmpty(),
    body("mobileNo").isNumeric().notEmpty(),
    body("address").isString().notEmpty(),
    
  ],
  loginValidator: [
    body("emailId").isEmail().notEmpty(),
    body("password").isString().notEmpty(),
  ],
  ProductValidator: [
    body("name").isString().notEmpty(),
    body("description").isString().notEmpty(),
    body("cost").isNumeric().notEmpty(),
    body("type").isString().notEmpty(),
    
    
  ],
  
};