var express = require('express');

var router = express.Router();

var userdao = require("../models/user_dao");

router.post('/add', function(req, res, next) {
	var params=[req.body.name,req.body.password,req.body.avatar];
	
	userdao.addUser(params, function(err,result){
		console.log(err,result);
		var o={};
		
		o.result=err==null;
		o.msg=o.result?"增加用户成功!":"增加用户失败!";
//			result:
//			msg:"",
//			data:
//			
//		}
		res.json(o);
	});
});

router.get("/list",function(err,res){
	userdao.getUsers(function(err,result){
		var o={};
		o.result=err==null;
		o.msg=o.result?"查询用户成功!":"查询用户失败!";
		o.data=result;
		res.json(o);
	});

});

module.exports = router;