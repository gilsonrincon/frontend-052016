var properties = {
	keyboard: true,
	remote: 'file:///Users/cymetria/Desktop/frontend-may-16/bootstrap-site/index.html'
};

//$('#myModal').modal(properties);

var tooltipProperties={
	html: true,
	title: '<div class="box" id="box2">This is a box</div>'
};

$('.btModal').tooltip(tooltipProperties);

$('.btModal').tooltip('show');

// We are defining an event handler for one button, when the button is clicked
//the modal will be shown
$('.btModal').click(function(){
	$('#myModal').modal('show');
	return false;
});

//We are defining a timming function that will show the modal
//5 seconds after page is loaded
/*window.setTimeout(function(){
	$('#myModal').modal('show');
},'5000');
*/

//When he show event is triggered
$('#myModal').on('shown.bs.modal', function(){
	alert('shown');
});

//when the modal is fully showed
$('#myModal').on('show.bs.modal', function(){
	alert('show');
});

//we have defined an event when the close event is triggered
$('#myModal').on('hide.bs.modal',function(){
	if(confirm('Are you sure that you want to quit of this modal?')){
		return true;
	}else{
		return false;
	}
});

$('#myModal').on('hidden.bs.modal',function(){
	alert('Thanks for see this modal');
});







