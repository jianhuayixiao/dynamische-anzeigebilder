$(function(){
				$("ul[data-liffect] li").each(function(i){
					$(this).attr("style","-moz-animation-delay:" + i * 300 + "ms");
					if(i === $("ul[data-liffect] li").size() - 1){
						$("ul[data-liffect]").addClass("play");
					}
				});
				
				$("#effect").bind("change",function(){
					
					$("ul[data-liffect]").attr("data-liffect",$("#effect").val());
				});
				
			});
