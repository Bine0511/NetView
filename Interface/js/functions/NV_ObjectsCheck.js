function checkObjects(x){
	if(document.getElementById("objects_"+x).checked){
		console.log("add "+x);
		showObjects(x);
		showLines(x);
		} 
	else{
		console.log("remove "+x);
		hideObjects(x);
		hideLines(x);
	}
}