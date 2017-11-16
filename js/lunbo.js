$(function(){
		$.getJSON("json/data.json",function(data){
			$.each(data,function(index,value){
				$(".LB").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
		})
	var index = 0
		$(".LB li").mouseenter(function(){
			clearInterval($timer)
			$(".dNum li").click(function(){
				$(this).animate(function(){
					$(this).eq(0).css("opacity",1)
				})
				index = $(this).index()
				$(".LB li").eq(index)
								    .fadeIn(500)
								    .siblings()
								    .fadeOut(500)
				$(this).addClass("hX").siblings().removeClass("hX");
			})
		}).mouseleave(function(){
			$(this).animate(function(){
					$(this).eq(0).css("opacity",0.8)
				})
			$.timer()
		})
		$.extend({
			timer : function(){
				$timer = setInterval(function(){
					index ++;
					if(index == 6){
						index = 0
					}
					$(".dNum li").eq(index).addClass("hX").siblings().removeClass("hX")
					$(".LB li").eq(index).fadeIn(500).siblings().fadeOut(500)
				},2000)
			}
		})
		$.timer();
	})




