const mysql = require("mysql")
const moment = require('moment');
const config = require('./init')
var pool = mysql.createPool(config.base_data)
const query = (sql) => {
	return new Promise (( res, rej ) => {
		pool.getConnection((err,con) => {
			con.query(sql, ( sql, rows, fie ) => {
				if(err){
					console.log(err)
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
			console.log(err)
			rej(err)
		})
	})
}
module.exports={
	read,
	query
}