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

var temp = document.getElementById('temp');

setTimeout(function(){
	temp.innerHTML = "Fin";
},5000);

var thread = setInterval(function() {
	temp.innerHTML += "<p>New P</p>";
}, 1000);

setTimeout(function(){
	clearInterval(thread);
},10000);










