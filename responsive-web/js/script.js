var btMenu = $('.menu span');
var menu=$('.menu ul');


//Show and hide menu on smaller resolutions
btMenu.click(function(){
	menu.slideToggle('slow');
});

//Handles the blur event for the name field
$('input[name="name"]').blur(function(){
	if($(this).val() != ''){
		$('input[name="email"]').show();
		$('input[name="email"]').focus();
		$(this).attr('disabled',"disabled");
	}else{
		$(this).focus();
		alert('Please type your name');

	}
});

//Handles the blur event for the email field
$('input[name="email"]').blur(function(){
	if($(this).val() != ''){
		$('input[name="suscribe"]').show();
		$('input[type="submit"]').show();
		$('input[type="submit"]').focus();
		$(this).attr('disabled',"disabled");
	}else{
		alert('Type your e-mail');
		$(this),focus();
	}
});

//Handles the submit form event
$('.main form').submit(function(){
	var name = $('input[name="name"]').val();
	if(name != "Luis" && name != "Jorge" && name != "Gilson"){
		alert("You don't have permissions to go into this web-site");
		$('input[name="name"]').removeAttr('disabled');
		$('input[name="name"]').click();
		$('input[name="name"]').val(name);
		$('input[name="name"]').select();
		return false;
	}else{
		$('.main form').remove();

		//Adding a new div with a class named "output"
		$('section#content').append('<div class="output"></div>');
		$('.output').html('<p>Welcome '+name+"</p>");
		return false;
	}
});