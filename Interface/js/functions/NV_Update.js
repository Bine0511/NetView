function updateData(){
	new Ajax.PeriodicalUpdater('test', '../Live.php', {
		method:'get',
		onSuccess: function(transport) {
			var response = transport.responseText || "no response text";
			var stats = JSON.parse(response);
			for(i = 0; i < stats.length; i++){
				if(line[stats[i].geraete_id+"-"+stats[i].ziel_id] != undefined){
					line[stats[i].geraete_id+"-"+stats[i].ziel_id].material = colorchecker((stats[i].in+stats[i].out)/2);
					if(spl[stats[i].geraete_id+"-"+stats[i].ziel_id] != undefined ){
						scene.remove(sprite[stats[i].geraete_id+"-"+stats[i].ziel_id]);
						if(document.getElementById("number_"+spl[stats[i].geraete_id+"-"+stats[i].ziel_id][3]).checked){
							console.log("number_"+spl[stats[i].geraete_id+"-"+stats[i].ziel_id][3]);
							makeTextSprite(stats[i].geraete_id+"-"+stats[i].ziel_id, (stats[i].in+stats[i].out)/2);
						}
					}
				}
			}
		},
		onFailure: function() { alert('Something went wrong...'); }
	});
}
