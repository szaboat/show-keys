$(function(){

	$('body').append("<div id='keylog'></div>");

	var keylog = $('#keylog');

	keylog.css({
		'bottom':'0px',
		'position':'fixed',
		'right':'0px',
		'width':'auto',
		'zIndex':'100',
		'fontSize':'30px',
		'fontWeight':'bold',
		'padding':'10px',
  	'color':'white',
		'textShadow': '1px 1px 1px #aaa'});
	
  $('body').bind('keydown',function(e){ 
    console.log(e, e.which, String.fromCharCode(e.which));
		createKeyTag(e)
		$('.key').css({
			'padding':'0 10px',
			'height':'45px',
			'margin':'10px',
			'float':'right',
			'background':'#333',
			'textAlign':'center',
			'borderRadius':'5px'
		});
	});
	
  function createKeyTag(e){
	
		var keyText;
		if ( e.which == 13 ) {       
			keyText = 'Enter';
		} else if ( e.which == 32 ) {
			keyText = 'Space';
		} else if ( e.which == 190 ) {
			keyText = '.';
		} else if ( e.which == 16 ){
			keyText = 'Shift';			
		} else {
			keyText = String.fromCharCode(e.which);
		}
	
		var el = $("<div/>", {
			text: keyText,
			"class":"key"});
		
		keylog.prepend(el);
		el.fadeTo("slow", 0.4);

	  var t = setTimeout(function(){
		  el.fadeOut('slow',function(){$(this).remove()});
	  },2000);
	}

});
