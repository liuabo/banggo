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
	
	$(".F").hover(function(){
		$(".tc").css("display","block")
	},function(){
		$(".tc").css("display","none")
		
	})
	
	
//显
	$.getJSON("json/content.json",function(data){
			$.each(data,function(index,value){
				$(".plate-a").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
		})

$.getJSON("json/content1.json",function(data){
			$.each(data,function(index,value){
				$(".plate-b").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
		})


$.getJSON("json/content2.json",function(data){
			$.each(data,function(index,value){
				$(".plate-c").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
		})

	var end = new Date("2017-11-20 00:00:00");
	var start = new Date();
	var t = diff(start,end);//秒
	var oP = document.getElementsByClassName("D")[0];
	function showTime(){
		//剩余的小时数
		var h = parseInt( t / 3600 ) ;
		//剩余的分钟数
		var m = parseInt( (t - h*3600) / 60 ) ;
		//剩余的秒数
		var s = parseInt( t - h*3600 - m * 60 );
		oP.innerHTML = "距开始:" + h + "小时" + m + "分钟" + s + "秒";	
		return "距开始:" + h + "小时" + m + "分钟" + s + "秒";
		
		oA.innerHTML = "距开始:" + h + "小时" + m + "分钟" + s + "秒";	
		return "距开始:" + h + "小时" + m + "分钟" + s + "秒";
	}
	//页面加载时显示时间 防止时间显示延时问题
	oP.innerHTML = showTime();
	
	var timer = setInterval(function (){
		t--;
		if( t <= 0 ){
			oP.innerHTML = "抱歉该商品下架了";
			clearInterval(timer);
		}else{
			showTime();
		}
	} , 1000)
	
	
	
	
	//下logo
	
	$.getJSON("json/cont.json",function(data){
			$.each(data,function(index,value){
				$(".logo").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
		})
	
	//wrp
	
	
	$.getJSON("json/wrp.json",function(data){
			$.each(data,function(index,value){
				$(".wrp").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
		})
	
	
	//pB
	$.getJSON("json/cont.json",function(data){
			$.each(data,function(index,value){
				$(".pR").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
})
	
	
	//pB
	var str ='';
	$.ajax("json/wman.json")
	
	.then(function(res){
		for(var i = 0;i < 6;i++){
			str += `<li>
						<a href="#">
							<img src=${res[i].img}/>
						</a>
					</li>`;
		}
	$(".pLate").html(str);
	})
	
	var arr ='';
	$.ajax("json/wman.json")
	
	.then(function(res){
		for(var i = 6;i < 12;i++){
			arr += `<li>
						<a href="#">
							<img src=${res[i].img}/>
						</a>
					</li>`;
		}
	$(".bgR").html(arr);
	})
	
	
	
	
	var acc ='';
	$.ajax("json/wman.json")
	
	.then(function(res){
		for(var i = 12;i < 18;i++){
			acc += `<li>
						<a href="#">
							<img src=${res[i].img}/>
						</a>
					</li>`;
		}
	$(".qR").html(acc);
	})
	
	
	
	$("body img").mouseover(function(){
		$(this).animate({"opacity":"0.4"})
	})
	$("body img").mouseout(function(){
		$(this).animate({"opacity":"1"})
	})
})
