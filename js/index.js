$(function(){
	$(".list4").hover(function(){
		$(".list1").css({"display":"block"})
		$(".list2").css("display","block")
		$(this).addClass("list3")
	},function(){
		$(".list1").css({"display":"none"})
		$(".list2").css("display","none")
		$(this).removeClass("list3")
	})
	
	$(".list6").hover(function(){
		$(this).addClass("list7")
		$(".list5").css("display","block");
	},function(){
		$(this).removeClass("list7")
		$(".list5").css("display","none");
	})
	$(".app").hover(function(){
		$(this).addClass("list8")
		$(".lp").css("diaplay","block")
		$(".im").css("display","block")
		
	},function(){
		$(this).removeClass("list8")
		$(".lp").css("diaplay","none")
		$(".im").css("display","none")
	})
	$(".list9").hover(function(){
		$(".img").css("display","block")
	},function(){
		$(".img").css("display","none")
	})
	$(".home li").hover(function(){
		$(this).animate({"opacity":0.8},200)
	},function(){
		$(this).animate({"opacity":1},200)
	})
	
	
	
	
	
	
	
	
	
})
