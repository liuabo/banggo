$(function() {

	/*var flagPwd = null;

	$("#mobileNumber").blur(function() {
		$(this).css("background","red")
		var reg = /^\w{6,12}$/;
		var str = $("#mobileNumber").value;
		if(reg.test(str)){
			flagPwd = true;
			$(".tips").css("color","green")
		}else{
			flagPwd = false;
			$(".tips").css("color","red")
		}
	})*/

	function cookie() {
		var arr = document.cookie.split('; ');
		for(var i = 0; i < arr.length; i++) {
			var val = arr[i].split('=');
			if(val[0].indexOf('user_') == 0) {
				var user = eval('(' + val[1] + ')');
				var $userId = user.user
				var $userPass = user.userId
				/*$("#user_id").val($userId)
				$("#mobile2").val($userPass)*/
				$("#user_id").val(userName)
				$("#mobile2").val($userPass)
			}
		}
	}
	cookie();

	$("#xy").click(function() {

			if( flagPwd && flagQpwd ) {
				var date = new Date();
				date.setDate(date.getDate() + 7);
				document.cookie = "userpwd=" + $("#pwd_mobile2_form").val() + ";expires=" + date;
				alert("注册成功");
				var timer = setInterval(function() {
					location.href = "index.html";

				}, 1000)

			}
	})

	//密码
	var flagPwd = null;
	$(".Pwd").blur(function() {
		var reg = /^\w{6,12}$/;
		var str = $(".Pwd").val();
		if(reg.test(str)) {
			flagPwd = true;
			$(".tipsA").css("color", "green")
		} else {
			flagPwd = false;
			$(".tipsA").css("color", "red")
		}
	})

	//确认密码
	var flagQpwd = null;
	$(".Qpwd").blur(function() {
		if($(".Pwd").val() == $(".Qpwd").val()) {
			flagQpwd = true;
			$(".Qpwd").css("border", "2px solid green")
			$(".Pwd").css("border", "2px solid green")
		} else {
			flagQpwd = false;
			$(".Qpwd").css("border", "2px solid red")
			$(".Pwd").css("border", "2px solid red")
		}
	})

})