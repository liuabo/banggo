$(function() {
	//商品分类
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

	//	侧边栏效果
	var arr = [false, false, false]

	$(".list1").click(function() {
		$(this).children().css("display", "block")
		$(this).click(function() {
			$(this).children().css("display", "none")
			$(".list1").css("display", "block")
		})
	})

	//获取json
	$.getJSON("json/details.json", function(data) {
		$.each(data, function(index, value) {
			$(".List1").append(
				`<li>
				 			<a href="particulars.html">
				 				<img src=${value.img} alert=""/>
				 			</a>
				 			<div class="Bbox">
				 			<span class="listPdText">
				 				<a href="###">${value.brand}</a>
				 				<label class="goodlist_discount">3折</label>
				 			</span>
				 			<span class="mbshop_listPdText fl">
				 				<a href="###">${value.name}</a>
				 			</span>
				 			<span class="mbshop_listPdText">
								<b>${value.price1}</b>
								<i>${value.price2}</i>
							</span>
							</div>
				 			<div class="Fram">
				 				<a href="###">
				 					<img src=${value.src}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src1}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src2}/>
				 				</a>
				 			</div>
				 		</li>`
			);
		})
	})

	$.getJSON("json/details1.json", function(data) {
		$.each(data, function(index, value) {
			$(".List2").append(
				`<li>
				 			<a href="###">
				 				<img src=${value.img} alert=""/>
				 			</a>
				 			<div class="Bbox">
				 			<span class="listPdText">
				 				<a href="###">${value.brand}</a>
				 				<label class="goodlist_discount">3折</label>
				 			</span>
				 			<span class="mbshop_listPdText fl">
				 				<a href="###">${value.name}</a>
				 			</span>
				 			<span class="mbshop_listPdText">
								<b>${value.price1}</b>
								<i>${value.price2}</i>
							</span>
							</div>
				 			<div class="Fram">
				 				<a href="###">
				 					<img src=${value.src}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src1}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src2}/>
				 				</a>
				 			</div>
				 		</li>`
			);
		})
	})
	
	$.getJSON("json/details2.json", function(data) {
		$.each(data, function(index, value) {
			$(".List3").append(
				`<li>
				 			<a href="###">
				 				<img src=${value.img} alert=""/>
				 			</a>
				 			<div class="Bbox">
				 			<span class="listPdText">
				 				<a href="###">${value.brand}</a>
				 				<label class="goodlist_discount">3折</label>
				 			</span>
				 			<span class="mbshop_listPdText fl">
				 				<a href="###">${value.name}</a>
				 			</span>
				 			<span class="mbshop_listPdText">
								<b>${value.price1}</b>
								<i>${value.price2}</i>
							</span>
							</div>
				 			<div class="Fram">
				 				<a href="###">
				 					<img src=${value.src}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src1}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src2}/>
				 				</a>
				 			</div>
				 		</li>`
			);
		})
	})
	$.getJSON("json/details3.json", function(data) {
		$.each(data, function(index, value) {
			$(".List4").append(
				`<li>
				 			<a href="###">
				 				<img src=${value.img} alert=""/>
				 			</a>
				 			<div class="Bbox">
				 			<span class="listPdText">
				 				<a href="###">${value.brand}</a>
				 				<label class="goodlist_discount">3折</label>
				 			</span>
				 			<span class="mbshop_listPdText fl">
				 				<a href="###">${value.name}</a>
				 			</span>
				 			<span class="mbshop_listPdText">
								<b>${value.price1}</b>
								<i>${value.price2}</i>
							</span>
							</div>
				 			<div class="Fram">
				 				<a href="###">
				 					<img src=${value.src}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src1}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src2}/>
				 				</a>
				 			</div>
				 		</li>`
			);
		})
	})
	$.getJSON("json/details4.json", function(data) {
		$.each(data, function(index, value) {
			$(".List5").append(
				`<li>
				 			<a href="###">
				 				<img src=${value.img} alert=""/>
				 			</a>
				 			<div class="Bbox">
				 			<span class="listPdText">
				 				<a href="###">${value.brand}</a>
				 				<label class="goodlist_discount">3折</label>
				 			</span>
				 			<span class="mbshop_listPdText fl">
				 				<a href="###">${value.name}</a>
				 			</span>
				 			<span class="mbshop_listPdText">
								<b>${value.price1}</b>
								<i>${value.price2}</i>
							</span>
							</div>
				 			<div class="Fram">
				 				<a href="###">
				 					<img src=${value.src}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src1}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src2}/>
				 				</a>
				 			</div>
				 		</li>`
			);
		})
	})
	$.getJSON("json/details5.json", function(data) {
		$.each(data, function(index, value) {
			$(".List6").append(
				`<li>
				 			<a href="###">
				 				<img src=${value.img} alert=""/>
				 			</a>
				 			<div class="Bbox">
				 			<span class="listPdText">
				 				<a href="###">${value.brand}</a>
				 				<label class="goodlist_discount">3折</label>
				 			</span>
				 			<span class="mbshop_listPdText fl">
				 				<a href="###">${value.name}</a>
				 			</span>
				 			<span class="mbshop_listPdText">
								<b>${value.price1}</b>
								<i>${value.price2}</i>
							</span>
							</div>
				 			<div class="Fram">
				 				<a href="###">
				 					<img src=${value.src}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src1}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src2}/>
				 				</a>
				 			</div>
				 		</li>`
			);
		})
	})
	$.getJSON("json/details6.json", function(data) {
		$.each(data, function(index, value) {
			$(".List7").append(
				`<li>
				 			<a href="###">
				 				<img src=${value.img} alert=""/>
				 			</a>
				 			<div class="Bbox">
				 			<span class="listPdText">
				 				<a href="###">${value.brand}</a>
				 				<label class="goodlist_discount">3折</label>
				 			</span>
				 			<span class="mbshop_listPdText fl">
				 				<a href="###">${value.name}</a>
				 			</span>
				 			<span class="mbshop_listPdText">
								<b>${value.price1}</b>
								<i>${value.price2}</i>
							</span>
							</div>
				 			<div class="Fram">
				 				<a href="###">
				 					<img src=${value.src}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src1}/>
				 				</a>
				 				<a href="###">
				 					<img src=${value.src2}/>
				 				</a>
				 			</div>
				 		</li>`
			);
		})
	})
	
			var index = 0;
		$(".mbshop_publicPagination a").click(function(){
			index = $(this).index()
			$(this).css("border-color","red").siblings().css("border-color","#ccc")
			$(".commodity ul").eq(index).css("display","block").siblings().css("display","none")
		})
			$("#nextPage").click(function(){
				index++
				if( index > 6 ){
					alert("最后一页")
				}else{
					$(".commodity ul").eq(index).css("display","block").siblings().css("display","none")
					$(".mbshop_publicPagination a").eq(index).css("border-color","red").siblings().css("border-color","#ccc")
				}
			})
			$("#lastPage").click(function(){
				index = 6
				
					$(".commodity ul").eq(index).css("display","block").siblings().css("display","none")
					$(".mbshop_publicPagination a").eq(index).css("border-color","red").siblings().css("border-color","#ccc")
				
			})
			
			
			$(window).scroll(function(){
			sTop = document.body.scrollTop || document.documentElement.scrollTop;
			if( sTop > 200 ){
				$(".hed").css("display","block");
			}else{
				$(".hed").click(function(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			$(".hed").css("display","none");
		})
			}
		})
})
