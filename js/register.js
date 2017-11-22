$(function() {
	//验证码
	function yzm() {
		var arr = []; //存放验证码
		for(var i = 0; i < 6; i++) {
			var code = getRand(0, 9);
			arr.push(code);
		}
		return arr.join("");
	}
	$("#yz").html(yzm())
	$("#btn").click(function() {
		$("#yz").html(yzm())
	})

	//用户名
	var flagNam = null;
	$("#uname").blur(function() {
		var reg = /[\u4e00-\u9fa5a-zA-Z0-9\-]{4,20}/;
		var str = $("#uname").val();
		console.log(str)
		if(reg.test(str)) {
			flagNam = true;
			$(".s1").css("color", "green")
		} else {
			flagNam = false;
			$(".s1").css("color", "red")
		}
	})

	var flagTel = null;

	$("#mobileNumber").blur(function() {
		var str = $("#mobileNumber").val();
		var reg = /^1[45378]\d{9}$/;
		console.log(str);
		if(reg.test(str)) {
			flagTel = true;
			$(".s2").css("color", "green")
		} else {
			flagTel = false;
			$(".s2").css("color", "red")
		}
	})

	$(".qL2").click(function() {
		//var  id = new Date().getTime()
		//var date = new Date();
		if(flagNam && flagTel) {
			var userName = $("#uname").val();
			var userId = $("#mobileNumber").val();
			/*var cookieValue = "{id:" + id + ',user:"' + userName + '",userId:' + userId + "}";;
			var cookieKey = "user_" + id;
			document.cookie = cookieKey + '=' + cookieValue + ";expires=" + date + ";path=/";*/
			// ",userId=" + userId +
			var date = new Date();
			date.setDate(date.getDate() + 7);
			document.cookie =  "user=" + userName + ";expires=" + date;
			alert("注册成功");
			//
			//cookie();
			
			var timer = setInterval(function(){
				location.href = "reg1.html";
				
				
			},1000)
			
			
		}
		
		
	})
	

	//注册表单验证

	//alert( $("tel").onblur() );
	$("#Yz").blur(function() {
		if($(this).val() == "") {
			alert("请输入验证码")
		} else if($(this).val() != $("#yz").html()) {
			alert("请输入正确验证码")
		} else {
			alert("输入正确")
			
		}
	})

})