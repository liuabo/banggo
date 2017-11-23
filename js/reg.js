$(function(){
	//获取Cookie
	$(".Lmr10").click(function(){
		var str = document.cookie;
		var arr = str.split("; ");
		var tname = "" , tnum = "" , tpwd = "";
		for(var i = 0 ; i < arr.length ; i++){
			var list = arr[i].split("=");//["username","lll"]
			if( list[0] == "user" ){
				tname = list[1];
				//tnum = list[2];
				//alert(list[1])
			}
			if( list[0] == "userpwd" ){
				tpwd = list[1];
				//alert(list[1])
			}
		}
		
		//比较判断 用户输入的用户名和密码是否和cookie中存储的用户名和密码一致
		if( tname == $("#username").val() && tpwd == $("#password").val() ){
			location.href = "index.html";
		}else{
			alert("用户名或密码有误");
		}
	})
	
	
	$("#jsSeltab h3").eq(0).click(function(){
		var index = $(this).index()
		$(".AA").css("display","block")
		//$(".AA").siblings().css("display","none")
		$(".CCC").css("display","none")
		$(".DD").css("display","none")
	})
		
	
	$("#jsSeltab h3").eq(1).click(function(){
		var index = $(this).index()	
		//$(".CCC").siblings().css("display","none")
		$(".AA").css("display","none")
		$(".CCC").css("display","block")
		$(".DD").css("display","none")
	})
	
	$("#jsSeltab h3").eq(2).click(function(){
		var index = $(this).index()	
		//$(".CCC").siblings().css("display","none")
		$(".AA").css("display","none")
		$(".DD").css("display","block")
		$(".CCC").css("display","none")
	})
	
})
