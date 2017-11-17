$(function(){
		$.getJSON("json/data1.json",function(data){
			$.each(data,function(index,value){
				$(".xL").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
		})
		
		
		$(".recR").click(function(){
			$(this).animate({"left":"1160"})
			$(".xL").animate({"left":"-1175"},function(){
				$(".recL").click(function(){
					$(this).animate({"left":"0"})
					$(".xL").animate({"left":"0"})
				})
			})
			
		})
		
})