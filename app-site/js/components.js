//Render for a page component
function newPage(nColumns, colType){
	nPages++;

	var html=$('<div id="page'+nPages+'" class="row">');
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
	var html= $('<div id="newPageModal" class="modal fade" tabindex="-1" role="dialog">').load('html-components/modal-newpage.html');
 	return html;
}












