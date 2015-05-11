var Dev = [], Lines = [];

Dev['EG'] = []; Dev['EG']['a'] = []; Dev['EG']['ap'] = []; Dev['EG']['s'] = []; Dev['EG']['r'] = [];
Dev['AU'] = []; Dev['AU']['a'] = []; Dev['AU']['ap'] = []; Dev['AU']['s'] = []; Dev['AU']['r'] = [];
Dev['ME'] = []; Dev['ME']['a'] = []; Dev['ME']['ap'] = []; Dev['ME']['s'] = []; Dev['ME']['r'] = [];
Dev['S1'] = []; Dev['S1']['a'] = []; Dev['S1']['ap'] = []; Dev['S1']['s'] = []; Dev['S1']['r'] = [];
Dev['S2'] = []; Dev['S2']['a'] = []; Dev['S2']['ap'] = []; Dev['S2']['s'] = []; Dev['S2']['r'] = [];

Lines['EG'] = []; Lines['AU'] = []; Lines['ME'] = []; Lines['S1'] = []; Lines['S2'] = [];
function initObjects(){
	new Ajax.Request('../Live.php', {
		method:'get',
		onSuccess: function(transport) {
			var response = transport.responseText || "no response text";
			var stats = JSON.parse(response);
			for(i = 0; i < stats.length; i++){
				if(xyz[stats[i].geraete_id] != undefined){
					createDev(xyz[stats[i].geraete_id],stats[i].device, stats[i].geraete_id);
					if(line[stats[i].geraete_id+"-"+stats[i].ziel_id] !=undefined){
						Lines[xyz[stats[i].geraete_id][3]].push(stats[i].geraete_id+"-"+stats[i].ziel_id);
						scene.add(line[stats[i].geraete_id+"-"+stats[i].ziel_id]);
					}
				}
			}
		},
		onFailure: function() { alert('Something went wrong...'); }
	});
}

function createDev(xyz, device, id){
	var height;
		if(xyz[3] == 'EG'){height = 0;}
		if(xyz[3] == 'AU'){height = 1;}
		if(xyz[3] == 'ME'){height = 2;}
		if(xyz[3] == 'S1'){height = 4;}
		if(xyz[3] == 'S2'){height = 6;}


	var loader = new THREE.JSONLoader();
	var callbackModel = function( geometry, materials ) {

		if(device == 'accespoint'){
			materials[0] = new THREE.MeshPhongMaterial({color:0x777777, side: THREE.DoubleSide, shading: THREE.SmoothShading});
			obj = 'a';

			/*Dev[xyz[3]]['ap'][a] = new THREE.Mesh(new THREE.SphereGeometry( 0.05, 32, 32 ), new THREE.MeshBasicMaterial({color:0x829d9b, transparent: true, opacity: Math.random()}));
			Dev[xyz[3]]['ap'][a].position.set(xyz[0], xyz[1]+height+0.2, xyz[2]);
			scene.add(Dev[xyz[3]]['ap']);*/
		}
		if(device == 'router'){
			materials[0] = new THREE.MeshLambertMaterial({color:0x333333, side: THREE.DoubleSide, shading: THREE.FlatShading});
			materials[1] = new THREE.MeshLambertMaterial({color:0xcc8888, side: THREE.DoubleSide, shading: THREE.FlatShading});
			materials[2] = new THREE.MeshLambertMaterial({color:0x333333, side: THREE.DoubleSide, shading: THREE.SmoothShading});
			obj = 'r';
		}
		if(device == 'switch'){
			materials[0] = new THREE.MeshLambertMaterial({color:0x333333, side: THREE.DoubleSide, shading: THREE.FlatShading});
			materials[1] = new THREE.MeshLambertMaterial({color:0x88aacc, side: THREE.DoubleSide, shading: THREE.FlatShading});
			obj = 's';
		}

		Dev[xyz[3]][obj].push(new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials)));
		Dev[xyz[3]][obj][Dev[xyz[3]][obj].length-1].position.set(xyz[0], xyz[1]+height, xyz[2]);
		Dev[xyz[3]][obj][Dev[xyz[3]][obj].length-1].scale.set(0.15,0.15,0.15);
		
		scene.add(Dev[xyz[3]][obj][Dev[xyz[3]][obj].length-1]);
	}; loader.load( "js/models/"+device+".json", callbackModel);
}