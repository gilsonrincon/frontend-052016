var c=0;
var content = document.getElementById('content');

content.innerHTML='<ul id="temp">';

while(c<10){
	//content.innerHTML = content.innerHTML + '<li>Item ' + c + '</li>';
	content.innerHTML += '<li>Item ' + c + '</li>';
	//c = c + 1;
	c++;
}
content.innerHTML += "</ul>";

setTimeout(function(){
	document.getElementById('temp').innerHTML = "Fin";
},5000);


