const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	address: String,
	mobileNo: Number,
	emailId:String,
    pincode:Number,
	password :String,
	
	

    

	
});

module.exports = mongoose.model('User', UserSchema);
