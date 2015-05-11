function checkFloor(x){
	if(document.getElementById("floor_"+x).checked){
		document.getElementById("objects_"+x).checked = true
		showFloor(x);
		showObjects(x);
		showLines(x);
	} 
	else{
		document.getElementById("objects_"+x).checked = false;
		hideFloor(x);
		hideObjects(x);
		hideLines(x);
	}
}