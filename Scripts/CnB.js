$(document).ready(
function(){

$(".resultScreen").css("display","none");

$("#submitCircle").click(
						 function(){		
									if(typeof 	submitCircleVar == "undefined")
									{					 
										$("#mainBlock").animate({ "left": "-=350px" }, 1400 );
										submitCircleVar = "1";						
										$(".resultScreen").delay(300).slideDown( 1400, function() {$(".resultScreen").css("display","block");});
									}

								}							
						);
});
