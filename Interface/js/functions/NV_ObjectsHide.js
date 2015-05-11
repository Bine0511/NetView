	function hideObjects(floor){
		document.getElementById('number_'+floor).checked = false;
		for(i = 0; i < Dev[floor]['a'].length; i++){
			if(Dev[floor]['a'][i] != undefined){
				scene.remove(Dev[floor]['a'][i]);
			}
		}

		for(i = 0; i < Dev[floor]['ap'].length; i++){
			if(Dev[floor]['ap'][i] != undefined){
				scene.remove(Dev[floor]['ap'][i]);
			}
		}

		for(i = 0; i < Dev[floor]['s'].length; i++){
			if(Dev[floor]['s'][i] != undefined){
				scene.remove(Dev[floor]['s'][i]);
			}
		}

		for(i = 0; i < Dev[floor]['r'].length; i++){
			if(Dev[floor]['r'][i] != undefined){
				scene.remove(Dev[floor]['r'][i]);
			}
		}
	}

