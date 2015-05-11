function hideFloor(x){
	for(var i = 0; i < Floors[x].length; i++){
		scene.remove(Floors[x][i]);
	}
}