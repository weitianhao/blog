const express=require("express")
const querystring  = require('querystring')
const url  = require('url')
const router=express.Router()
const { 
  read,
  hand,
  search,
  query
} = require("../../config/config")
router.get('/', (req,res,next) => {
	const sql = 'select * from apilist';
	read(sql).then((data) => {
		res.send({
			distinguish:'first',
			data
		}).catch((err)=>{
			res(err)
		})
	})	
})
router.get('/', (req,res) => {
	const stair = 'select * from one_class'
	const second = 'select * from one_class'
	asyncClass = async function () {
		const classone = await read(stair)
		const classtwo = await read(second)
		return {classone,classtwo}
	}
	asyncClass().then((data) => {
		res.send({
			msg:"数据获取成功",
			data
		})
	}).catch((err) => {
		res.send({
			msg:"数据获取失败",
			err
		})
	})
})
module.exports=router