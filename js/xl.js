$(function(){
		$.getJSON("json/data1.json",function(data){
			$.each(data,function(index,value){
				$(".xL").append(`<li style="z-index:${value.index}"><a href="#" ><img src=${value.img}/></a></li>`);
			})
		})
})