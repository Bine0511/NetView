function showFloor(x){
	for(var i = 0; i < Floors[x].length; i++){
		scene.remove(Floors[x][i]);
		scene.add(Floors[x][i]);
	}
}