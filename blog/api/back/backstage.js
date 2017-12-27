const express=require("express")
const router=express.Router()
const { 
  read,
  query
} = require("../config/config")
router.get('/', (req,res,next) => {
	const sql = 'select * from all_data';
	read(sql).then((data) => {
		res.send({
			distinguish:'first',
			data
		}).catch((err)=>{
			res(err)
		})
	})	
})
module.exports=router