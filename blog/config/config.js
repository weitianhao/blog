const mysql = require("mysql")
const moment = require('moment');
const config = require('./init')
var pool = mysql.createPool(config.base_data)
const query = (sql) => {
	return new Promise (( res, rej ) => {
		pool.getConnection((err,con) => {
			con.query(sql, ( sql, rows, fie ) => {	
				if(err){
					rej(err)
					return 
				}
				res(rows)
				con.release()
			})
		})
	})
}
const read = (sql) => {
	return new Promise ( (res,rej) => {
		query(sql).then((data) => {
			data=data.map((i)=>{
          		i.time=moment(i.time).format('YYYY-MM-DD HH:mm:ss')
          		return i
        	})
        	res(data)
		}).catch((err) => {
			rej(err)
		})
	})
}
const hand = (sql) => {
	return new Promise ( (res,rej) => {
		query(sql).then( (data) => {
			if(data.affectedRows>0){
				res('OK')
				connect.release()
			}else{
				rej(err)
			}
		}).catch( (err) => {
			rej(err)
		})
	})
}
const search = (sql) => {
	return new Promise ((res,rej)=>{
		query(sql).then((data)=>{
			if(data.length > 0){
				rej('此值已存在')
			}else{
				res('OK')
			}
		})
	})
} 
module.exports={
	read,
	hand,
	search,
	query
}