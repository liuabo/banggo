$(function() {

	$.getJSON("json/cohort.json", function(data) {
		$.each(data, function(index, value) {
			$(".Cohort").append(`<li"><a href="#" ><img src=${value.img}/></a></li>`);
		})
	})

	// 触发滚动条时   显示小火箭
	/*$(window).scroll(function() {
		sTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(sTop > 200) {
			$(".hed").css("display", "block");
		} else {
			$(".hed").click(function() {
				document.body.scrollTop = document.documentElement.scrollTop = 0;
				$(".hed").css("display", "none");
			})
		}
	})*/

	$(".ap").hover(function() {
		$(".conL").css("display", "block")
	}, function() {
		$(".conL").css("display", "none")
	})

	$(".conL").hover(function() {
		$(".conL").css("display", "block")
	}, function() {
		$(".conL").css("display", "none")
	})

	$(".F").hover(function() {
		$(".tc").css("display", "block")
	}, function() {
		$(".tc").css("display", "none")

	})
	$(".tc").hover(function() {
		$(this).css("display", "block")
	}, function() {
		$(this).css("display", "none")

	})
	/*$(".XD").click(function() {
		$(this).css("background", "red")
	})
*/
	

})
$(window).scroll(function() {
	function scrollTop() {
		if($(document).scrollTop() >= 790) {
			//alert(1)
			
			console.log(1)
			$(".XD").css({
				"position": "fixed",
				"top": "0",
				"z-index": "2000",
				"background":"#fff"
			})
		}else{
			
			$(".XD").css({
				"position": "static",
				"top": "0",
				"z-index": "2000"
			})
		}
	}
	scrollTop();
})