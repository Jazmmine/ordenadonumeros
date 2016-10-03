var ingreso = "Coloque un numero";
var limit = parseInt(prompt(ingreso));
function serie(limit){
	for(n = 1; n <= limit; n++){
		document.write(n + " ");
	}
}
serie(limit);
