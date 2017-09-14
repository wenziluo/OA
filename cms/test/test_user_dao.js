var userdao=require("../models/user_dao.js");

var params=['tom','123','images',100,'2017-9-11 10:07:12'];
userdao.addUser(params,function(err,result){
	console.log(err,result);
});
