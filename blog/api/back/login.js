const express = require('express');
const router = express.Router();
const { hand, query, read } = require('../../config/config');

router.get('/',( req, res )=>{
	const registereduser = `select * from user`
	query(registereduser).then((data) => {
		console.log(data)
		res.send({data})
	})
})
module.exports=router