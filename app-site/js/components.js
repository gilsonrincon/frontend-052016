//Render for a page component
function newPage(nColumns, colType){
	var html=$('<div class="row">');
	var counter=0;

	if(nColumns>12){
		nColumns = 12;
	}

	var divider = 12 / nColumns;

	while(counter<nColumns){
		html.append('<div class="col-'+colType+'-'+divider+'">');
		counter++;
	}

	return html;
}

//Renderer for a modal window
function newPageModal(){
	var html='<div id="newPageModal" class="modal fade" tabindex="-1" role="dialog">';
 		html+='<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body"><p>One fine body&hellip;</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal -->';

 	return html;
}