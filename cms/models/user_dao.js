var db=require("./db");

module.exports={
	addUser:function(params,callback){
		params.push(100);
		db.query("insert into oa_user(name,password,avatar,grade,regtime) values('zhangsan',123456,?,?,now())",params,function(err,result){
			callback(err,result);
		});
	},
	getUsers:function(callback){
		db.query("select * from oa_user",function(err,result){
			callback(err,result);
		});
	}
}
