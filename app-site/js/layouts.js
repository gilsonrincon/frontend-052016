//This method defines the general layout of the site
function mainLayout(){
	var html=$('<div class="container-fluid" id="main">');
	html.append($('<div class="row">'));
	html.children('div.row').append($('<div class="col-xs-12">'));
	html.children('div.row').children('div.col-xs-12').append($('<nav class="admin-btns">'));
	return html;
}

//Rendering of toolbox (admin buttons)
function toolBox(){
	var html=$('<ul class="admin-btns-container">');
	html.append('<li><a id="btNewPage" class="btn btn-default"><span class="glyphicon glyphicon-plus"></span>New Page</a></li>');
	$('.admin-btns').append(html);

	$('#btNewPage').click(function(){
		if($('#newPageModal').length<1){
			$('body').append(newPageModal());
		}

		$('#newPageModal').modal('show');
		return false;




		$('#main').append(newPage(3,'xs'));
		var alert=$('<div class="alert alert-success">');
		alert.text('New page created');
		$('body').prepend(alert);
		alert.fadeOut(3000);
	});
}