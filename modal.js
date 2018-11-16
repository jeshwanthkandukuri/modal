$(document).ready(function () {
	$('.modalbtn').click(function(){
		$('.modal-body').show();		
	});
	$('.close').click(()=>{
		$('.modal-body').hide();
	});
});