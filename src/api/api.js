const api = require('express').Router();

const jwtMiddleware = require('../middlewares/jwt');

const ProductRouter = require('./routers/product');

api.use('/', jwtMiddleware.jwtVerify);
api.use('/product' , ProductRouter)


module.exports = api;
