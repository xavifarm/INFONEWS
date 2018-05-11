$(document).ready(function(){
	var primerScroll = false;
	var segundoScroll = false;
	$(".navbar").hide();

	$(window).scroll(function() {
		if ($(this).scrollTop()>100){
        	$('#publiM').hide();
			$(".navbar").show();	
		} else{			
				$(".navbar").hide();
		}
		
		if($(window).scrollTop()+10 > $(document).height() - $(window).height()){
			if (primerScroll == false) {
				scroll01();
				primerScroll = true;
			}else if(primerScroll == true && segundoScroll== false){
				scroll02();
				segundoScroll = true;
			}	
		}

	});

});


function scroll01(){
	$.getJSON("data/1.json",function(jsonObject){
		$.each(jsonObject, function(i){
			$(".noticias").append("<div class ='noticia01 row'><div class='titulo col-xs-12 col-sm-9 col-md-8 col-lg-8'><header><a href='#'><h3>"
			+ jsonObject[i].title+
			"</h3></a></header></div><div class ='imagen01 col-xs-12 col-sm-7 col-md-7 col-lg-7'><div class='noticiaImg text-center'><img class='imagen img-responsive' src="
			+ jsonObject[i].imagen+
			" alt='img'>"+jsonObject[i].date+
			"</div></div><div class='textoNoticia col-sm-7 col-md-7 col-lg-7'><p class='texto text-justify'>"
			+ jsonObject[i].body+"<a href='#'><span> Leer más...</span></a></p></div></div><hr>"			
			);
		});
	});
}
function scroll02(){
	$.getJSON("data/2.json",function(jsonObject){
		$.each(jsonObject, function(i){
			$(".noticias").append("<div class ='noticia01 row'><div class='titulo col-xs-12 col-sm-9 col-md-8 col-lg-8'><header><a href='#'><h3>"
			+ jsonObject[i].title+
			"</h3></a></header></div><div class ='imagen01 col-xs-12 col-sm-7 col-md-7 col-lg-7'><div class='noticiaImg text-center'><img class='imagen img-responsive' src="
			+ jsonObject[i].imagen+
			" alt='img'>"+jsonObject[i].date+
			"</div></div><div class='textoNoticia col-sm-7 col-md-7 col-lg-7'><p class='texto text-justify'>"
			+ jsonObject[i].body+"<a href='#'><span> Leer más...</span></a></p></div></div><hr>"			
			);
		});
	});
}
