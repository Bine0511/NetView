var sprite = [];

function makeTextSprite(id, message){
	xyz = spl[id];

	var canvas = document.createElement('canvas');
		canvas.id = "spc";
		canvas.width = 500;
		canvas.height = 250;
		canvas.style = "border: solid 1px green";

	var c6_context = canvas.getContext("2d");
		c6_context.fillStyle = '#fff';
		c6_context.font = '50px courier new';
		c6_context.fillText(message+"%", (canvas.width/2)-(c6_context.measureText(message).width/2), 200);
	
	var texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } );
		sprite[id] = new THREE.Sprite( spriteMaterial );
		sprite[id].scale.set(2,1,1);
		sprite[id].position.set (xyz[0], xyz[1], xyz[2]);
	scene.add(sprite[id]);
}
