	function showObjects(floor){
		hideObjects(floor);

		for(i = 0; i < Dev[floor]['a'].length; i++){
			if(Dev[floor]['a'][i] != undefined){
				scene.add(Dev[floor]['a'][i]);
			}
		}

		for(i = 0; i < Dev[floor]['ap'].length; i++){
			if(Dev[floor]['ap'][i] != undefined){
				scene.add(Dev[floor]['ap'][i]);
			}
		}

		for(i = 0; i < Dev[floor]['s'].length; i++){
			if(Dev[floor]['s'][i] != undefined){
				scene.add(Dev[floor]['s'][i]);
			}
		}

		for(i = 0; i < Dev[floor]['r'].length; i++){
			if(Dev[floor]['r'][i] != undefined){
				scene.add(Dev[floor]['r'][i]);
			}
		}
	}