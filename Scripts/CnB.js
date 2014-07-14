function inputBorderBlink()
{	
	$('#userInputField').animate({borderColor: 'red'})
						.animate({borderColor: '#B3B3B3'})
						.animate({borderColor: 'red'})
						.animate({borderColor: '#B3B3B3'})
						.animate({borderColor: 'red'})
						.animate({borderColor: '#B3B3B3'}).focus();
}

$(document).ready(
				function(){

					$(".resultScreen").css("display","none");
					$("#inputBlock").css("display","none");

					$('#userInputField').bind("enterKey",function(e){
																	 $("#submitCircle").trigger("click");
																	});
					$('#userInputField').keyup(function(e){
															if(e.keyCode == 13)
															{
															$(this).trigger("enterKey");
															}
														});
					$("#submitCircle").click(
											 function(){														
														if($('#userInputField').val() === "" || !(/[a-zA-Z]{4}$/.test($('#userInputField').val())))
														{
														inputBorderBlink()
														}
														else
														{
															if($('#userInputField').val().length == 4)
															{																	
																if(typeof 	submitCircleVar == "undefined")
																{					 
																	$("#mainBlock").animate({ "left": "-=350px" }, 1400 );
																	submitCircleVar = "1";						
																	$(".resultScreen").delay(300).slideDown( 1400, function() {$(".resultScreen").css("display","block");});
																}	
															}
														}
														$('#userInputField').focus();
													});
											
					$(".okButton").click(function(){
													$("#introBlock").fadeOut("slow",function(){$("#inputBlock").fadeIn();$('#userInputField').focus();});													
													}
										);
});

