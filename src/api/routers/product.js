const ProductRouter = require('express').Router();

const Product = require('../../database/models/product.js');
const { validationResult } = require("express-validator");

const {
  ProductValidator,
} = require("../../middlewares/expressValidator");


ProductRouter.get("/", async (req, res) => {
    try {
     
      
      console.log(req.query)
      const prods = await Product.find( req.query);
      return res.status(200).json({products : prods})

    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: "Server Error, Try again later" });
    }
  });
  ProductRouter.post("/add", ProductValidator, async (req, res) => {
    try {
     
      const { name, type,description,cost } = req.body;
     
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const user = await Product.create(req.body);
      
      return res.status(200).json({ msg :"product added successfully" });
     

    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: "Server Error, Try again later" });
    }
  });
module.exports = ProductRouter;