hEG = 0;
hAU = 1;
hME = 2;
hS1 = 4;
hS2 = 6;

var line = Array();
var geo = Array();

function initLines(){
geo['109_1-109_0'] = new THREE.Geometry();
geo['109_1-109_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-6.7),
	new THREE.Vector3(9.7,0.35+hAU,-6.7-0.1),
	new THREE.Vector3(9.7,0.05+hAU,-6.7-0.1),
	new THREE.Vector3(9.7,0+hAU,-6.7)
); line['109_1-109_0'] = new THREE.Line(geo['109_1-109_0'], a0);
geo['109_2-109_1'] = new THREE.Geometry();
geo['109_2-109_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-6.7),
	new THREE.Vector3(9.7,0.75+hAU,-6.7-0.1),
	new THREE.Vector3(9.7,0.45+hAU,-6.7-0.1),
	new THREE.Vector3(9.7,0.4+hAU,-6.7)
); line['109_2-109_1'] = new THREE.Line(geo['109_2-109_1'], a0);
geo['109_3-109_2'] = new THREE.Geometry();
geo['109_3-109_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-6.7),
	new THREE.Vector3(9.7,1.15+hAU,-6.7-0.1),
	new THREE.Vector3(9.7,0.85+hAU,-6.7-0.1),
	new THREE.Vector3(9.7,0.8+hAU,-6.7)
); line['109_3-109_2'] = new THREE.Line(geo['109_3-109_2'], a0);
geo['109_2-109_0'] = new THREE.Geometry();
geo['109_2-109_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-6.7),
	new THREE.Vector3(9.7-0.1,0.75+hAU,-6.7),
	new THREE.Vector3(9.7-0.1,0.05+hAU,-6.7),
	new THREE.Vector3(9.7,0+hAU,-6.7)
); line['109_2-109_0'] = new THREE.Line(geo['109_2-109_0'], a0);
geo['109_3-109_1'] = new THREE.Geometry();
geo['109_3-109_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-6.7),
	new THREE.Vector3(9.7+0.1,1.15+hAU,-6.7),
	new THREE.Vector3(9.7+0.1,0.45+hAU,-6.7),
	new THREE.Vector3(9.7,0.4+hAU,-6.7)
); line['109_3-109_1'] = new THREE.Line(geo['109_3-109_1'], a0);
geo['109_3-109_0'] = new THREE.Geometry();
geo['109_3-109_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-6.7),
	new THREE.Vector3(9.7,1.2+hAU,-6.7-0.2),
	new THREE.Vector3(9.7,0+hAU,-6.7-0.2),
	new THREE.Vector3(9.7,0+hAU,-6.7)
); line['109_3-109_0'] = new THREE.Line(geo['109_3-109_0'], a0);
geo['117_1-117_0'] = new THREE.Geometry();
geo['117_1-117_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-5.1),
	new THREE.Vector3(9.7,0.35+hAU,-5.1-0.1),
	new THREE.Vector3(9.7,0.05+hAU,-5.1-0.1),
	new THREE.Vector3(9.7,0+hAU,-5.1)
); line['117_1-117_0'] = new THREE.Line(geo['117_1-117_0'], a0);
geo['117_2-117_1'] = new THREE.Geometry();
geo['117_2-117_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-5.1),
	new THREE.Vector3(9.7,0.75+hAU,-5.1-0.1),
	new THREE.Vector3(9.7,0.45+hAU,-5.1-0.1),
	new THREE.Vector3(9.7,0.4+hAU,-5.1)
); line['117_2-117_1'] = new THREE.Line(geo['117_2-117_1'], a0);
geo['117_3-117_2'] = new THREE.Geometry();
geo['117_3-117_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-5.1),
	new THREE.Vector3(9.7,1.15+hAU,-5.1-0.1),
	new THREE.Vector3(9.7,0.85+hAU,-5.1-0.1),
	new THREE.Vector3(9.7,0.8+hAU,-5.1)
); line['117_3-117_2'] = new THREE.Line(geo['117_3-117_2'], a0);
geo['117_2-117_0'] = new THREE.Geometry();
geo['117_2-117_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-5.1),
	new THREE.Vector3(9.7-0.1,0.75+hAU,-5.1),
	new THREE.Vector3(9.7-0.1,0.05+hAU,-5.1),
	new THREE.Vector3(9.7,0+hAU,-5.1)
); line['117_2-117_0'] = new THREE.Line(geo['117_2-117_0'], a0);
geo['117_3-117_1'] = new THREE.Geometry();
geo['117_3-117_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-5.1),
	new THREE.Vector3(9.7+0.1,1.15+hAU,-5.1),
	new THREE.Vector3(9.7+0.1,0.45+hAU,-5.1),
	new THREE.Vector3(9.7,0.4+hAU,-5.1)
); line['117_3-117_1'] = new THREE.Line(geo['117_3-117_1'], a0);
geo['117_3-117_0'] = new THREE.Geometry();
geo['117_3-117_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-5.1),
	new THREE.Vector3(9.7,1.2+hAU,-5.1-0.2),
	new THREE.Vector3(9.7,0+hAU,-5.1-0.2),
	new THREE.Vector3(9.7,0+hAU,-5.1)
); line['117_3-117_0'] = new THREE.Line(geo['117_3-117_0'], a0);
geo['119_1-119_0'] = new THREE.Geometry();
geo['119_1-119_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-4.2),
	new THREE.Vector3(9.7,0.35+hAU,-4.2-0.1),
	new THREE.Vector3(9.7,0.05+hAU,-4.2-0.1),
	new THREE.Vector3(9.7,0+hAU,-4.2)
); line['119_1-119_0'] = new THREE.Line(geo['119_1-119_0'], a0);
geo['119_2-119_1'] = new THREE.Geometry();
geo['119_2-119_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-4.2),
	new THREE.Vector3(9.7,0.75+hAU,-4.2-0.1),
	new THREE.Vector3(9.7,0.45+hAU,-4.2-0.1),
	new THREE.Vector3(9.7,0.4+hAU,-4.2)
); line['119_2-119_1'] = new THREE.Line(geo['119_2-119_1'], a0);
geo['119_3-119_2'] = new THREE.Geometry();
geo['119_3-119_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-4.2),
	new THREE.Vector3(9.7,1.15+hAU,-4.2-0.1),
	new THREE.Vector3(9.7,0.85+hAU,-4.2-0.1),
	new THREE.Vector3(9.7,0.8+hAU,-4.2)
); line['119_3-119_2'] = new THREE.Line(geo['119_3-119_2'], a0);
geo['119_2-119_0'] = new THREE.Geometry();
geo['119_2-119_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-4.2),
	new THREE.Vector3(9.7-0.1,0.75+hAU,-4.2),
	new THREE.Vector3(9.7-0.1,0.05+hAU,-4.2),
	new THREE.Vector3(9.7,0+hAU,-4.2)
); line['119_2-119_0'] = new THREE.Line(geo['119_2-119_0'], a0);
geo['119_3-119_1'] = new THREE.Geometry();
geo['119_3-119_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-4.2),
	new THREE.Vector3(9.7+0.1,1.15+hAU,-4.2),
	new THREE.Vector3(9.7+0.1,0.45+hAU,-4.2),
	new THREE.Vector3(9.7,0.4+hAU,-4.2)
); line['119_3-119_1'] = new THREE.Line(geo['119_3-119_1'], a0);
geo['119_3-119_0'] = new THREE.Geometry();
geo['119_3-119_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-4.2),
	new THREE.Vector3(9.7,1.2+hAU,-4.2-0.2),
	new THREE.Vector3(9.7,0+hAU,-4.2-0.2),
	new THREE.Vector3(9.7,0+hAU,-4.2)
); line['119_3-119_0'] = new THREE.Line(geo['119_3-119_0'], a0);
geo['123_1-123_0'] = new THREE.Geometry();
geo['123_1-123_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-2.4),
	new THREE.Vector3(9.7,0.35+hAU,-2.4-0.1),
	new THREE.Vector3(9.7,0.05+hAU,-2.4-0.1),
	new THREE.Vector3(9.7,0+hAU,-2.4)
); line['123_1-123_0'] = new THREE.Line(geo['123_1-123_0'], a0);
geo['123_2-123_1'] = new THREE.Geometry();
geo['123_2-123_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-2.4),
	new THREE.Vector3(9.7,0.75+hAU,-2.4-0.1),
	new THREE.Vector3(9.7,0.45+hAU,-2.4-0.1),
	new THREE.Vector3(9.7,0.4+hAU,-2.4)
); line['123_2-123_1'] = new THREE.Line(geo['123_2-123_1'], a0);
geo['123_3-123_2'] = new THREE.Geometry();
geo['123_3-123_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-2.4),
	new THREE.Vector3(9.7,1.15+hAU,-2.4-0.1),
	new THREE.Vector3(9.7,0.85+hAU,-2.4-0.1),
	new THREE.Vector3(9.7,0.8+hAU,-2.4)
); line['123_3-123_2'] = new THREE.Line(geo['123_3-123_2'], a0);
geo['123_2-123_0'] = new THREE.Geometry();
geo['123_2-123_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-2.4),
	new THREE.Vector3(9.7-0.1,0.75+hAU,-2.4),
	new THREE.Vector3(9.7-0.1,0.05+hAU,-2.4),
	new THREE.Vector3(9.7,0+hAU,-2.4)
); line['123_2-123_0'] = new THREE.Line(geo['123_2-123_0'], a0);
geo['123_3-123_1'] = new THREE.Geometry();
geo['123_3-123_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-2.4),
	new THREE.Vector3(9.7+0.1,1.15+hAU,-2.4),
	new THREE.Vector3(9.7+0.1,0.45+hAU,-2.4),
	new THREE.Vector3(9.7,0.4+hAU,-2.4)
); line['123_3-123_1'] = new THREE.Line(geo['123_3-123_1'], a0);
geo['123_3-123_0'] = new THREE.Geometry();
geo['123_3-123_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-2.4),
	new THREE.Vector3(9.7,1.2+hAU,-2.4-0.2),
	new THREE.Vector3(9.7,0+hAU,-2.4-0.2),
	new THREE.Vector3(9.7,0+hAU,-2.4)
); line['123_3-123_0'] = new THREE.Line(geo['123_3-123_0'], a0);
geo['125_1-125_0'] = new THREE.Geometry();
geo['125_1-125_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-1.5),
	new THREE.Vector3(9.7,0.35+hAU,-1.5-0.1),
	new THREE.Vector3(9.7,0.05+hAU,-1.5-0.1),
	new THREE.Vector3(9.7,0+hAU,-1.5)
); line['125_1-125_0'] = new THREE.Line(geo['125_1-125_0'], a0);
geo['125_2-125_1'] = new THREE.Geometry();
geo['125_2-125_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-1.5),
	new THREE.Vector3(9.7,0.75+hAU,-1.5-0.1),
	new THREE.Vector3(9.7,0.45+hAU,-1.5-0.1),
	new THREE.Vector3(9.7,0.4+hAU,-1.5)
); line['125_2-125_1'] = new THREE.Line(geo['125_2-125_1'], a0);
geo['125_3-125_2'] = new THREE.Geometry();
geo['125_3-125_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-1.5),
	new THREE.Vector3(9.7,1.15+hAU,-1.5-0.1),
	new THREE.Vector3(9.7,0.85+hAU,-1.5-0.1),
	new THREE.Vector3(9.7,0.8+hAU,-1.5)
); line['125_3-125_2'] = new THREE.Line(geo['125_3-125_2'], a0);
geo['125_2-125_0'] = new THREE.Geometry();
geo['125_2-125_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-1.5),
	new THREE.Vector3(9.7-0.1,0.75+hAU,-1.5),
	new THREE.Vector3(9.7-0.1,0.05+hAU,-1.5),
	new THREE.Vector3(9.7,0+hAU,-1.5)
); line['125_2-125_0'] = new THREE.Line(geo['125_2-125_0'], a0);
geo['125_3-125_1'] = new THREE.Geometry();
geo['125_3-125_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-1.5),
	new THREE.Vector3(9.7+0.1,1.15+hAU,-1.5),
	new THREE.Vector3(9.7+0.1,0.45+hAU,-1.5),
	new THREE.Vector3(9.7,0.4+hAU,-1.5)
); line['125_3-125_1'] = new THREE.Line(geo['125_3-125_1'], a0);
geo['125_3-125_0'] = new THREE.Geometry();
geo['125_3-125_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-1.5),
	new THREE.Vector3(9.7,1.2+hAU,-1.5-0.2),
	new THREE.Vector3(9.7,0+hAU,-1.5-0.2),
	new THREE.Vector3(9.7,0+hAU,-1.5)
); line['125_3-125_0'] = new THREE.Line(geo['125_3-125_0'], a0);
geo['133_1-133_0'] = new THREE.Geometry();
geo['133_1-133_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,0.1),
	new THREE.Vector3(9.7,0.35+hAU,0.1-0.1),
	new THREE.Vector3(9.7,0.05+hAU,0.1-0.1),
	new THREE.Vector3(9.7,0+hAU,0.1)
); line['133_1-133_0'] = new THREE.Line(geo['133_1-133_0'], a0);
geo['133_2-133_1'] = new THREE.Geometry();
geo['133_2-133_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,0.1),
	new THREE.Vector3(9.7,0.75+hAU,0.1-0.1),
	new THREE.Vector3(9.7,0.45+hAU,0.1-0.1),
	new THREE.Vector3(9.7,0.4+hAU,0.1)
); line['133_2-133_1'] = new THREE.Line(geo['133_2-133_1'], a0);
geo['133_3-133_2'] = new THREE.Geometry();
geo['133_3-133_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,0.1),
	new THREE.Vector3(9.7,1.15+hAU,0.1-0.1),
	new THREE.Vector3(9.7,0.85+hAU,0.1-0.1),
	new THREE.Vector3(9.7,0.8+hAU,0.1)
); line['133_3-133_2'] = new THREE.Line(geo['133_3-133_2'], a0);
geo['133_2-133_0'] = new THREE.Geometry();
geo['133_2-133_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,0.1),
	new THREE.Vector3(9.7-0.1,0.75+hAU,0.1),
	new THREE.Vector3(9.7-0.1,0.05+hAU,0.1),
	new THREE.Vector3(9.7,0+hAU,0.1)
); line['133_2-133_0'] = new THREE.Line(geo['133_2-133_0'], a0);
geo['133_3-133_1'] = new THREE.Geometry();
geo['133_3-133_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,0.1),
	new THREE.Vector3(9.7+0.1,1.15+hAU,0.1),
	new THREE.Vector3(9.7+0.1,0.45+hAU,0.1),
	new THREE.Vector3(9.7,0.4+hAU,0.1)
); line['133_3-133_1'] = new THREE.Line(geo['133_3-133_1'], a0);
geo['133_3-133_0'] = new THREE.Geometry();
geo['133_3-133_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,0.1),
	new THREE.Vector3(9.7,1.2+hAU,0.1-0.2),
	new THREE.Vector3(9.7,0+hAU,0.1-0.2),
	new THREE.Vector3(9.7,0+hAU,0.1)
); line['133_3-133_0'] = new THREE.Line(geo['133_3-133_0'], a0);
geo['135_1-135_0'] = new THREE.Geometry();
geo['135_1-135_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,1.0),
	new THREE.Vector3(9.7,0.35+hAU,1.0-0.1),
	new THREE.Vector3(9.7,0.05+hAU,1.0-0.1),
	new THREE.Vector3(9.7,0+hAU,1.0)
); line['135_1-135_0'] = new THREE.Line(geo['135_1-135_0'], a0);
geo['135_2-135_1'] = new THREE.Geometry();
geo['135_2-135_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,1.0),
	new THREE.Vector3(9.7,0.75+hAU,1.0-0.1),
	new THREE.Vector3(9.7,0.45+hAU,1.0-0.1),
	new THREE.Vector3(9.7,0.4+hAU,1.0)
); line['135_2-135_1'] = new THREE.Line(geo['135_2-135_1'], a0);
geo['135_3-135_2'] = new THREE.Geometry();
geo['135_3-135_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,1.0),
	new THREE.Vector3(9.7,1.15+hAU,1.0-0.1),
	new THREE.Vector3(9.7,0.85+hAU,1.0-0.1),
	new THREE.Vector3(9.7,0.8+hAU,1.0)
); line['135_3-135_2'] = new THREE.Line(geo['135_3-135_2'], a0);
geo['135_2-135_0'] = new THREE.Geometry();
geo['135_2-135_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,1.0),
	new THREE.Vector3(9.7-0.1,0.75+hAU,1.0),
	new THREE.Vector3(9.7-0.1,0.05+hAU,1.0),
	new THREE.Vector3(9.7,0+hAU,1.0)
); line['135_2-135_0'] = new THREE.Line(geo['135_2-135_0'], a0);
geo['135_3-135_1'] = new THREE.Geometry();
geo['135_3-135_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,1.0),
	new THREE.Vector3(9.7+0.1,1.15+hAU,1.0),
	new THREE.Vector3(9.7+0.1,0.45+hAU,1.0),
	new THREE.Vector3(9.7,0.4+hAU,1.0)
); line['135_3-135_1'] = new THREE.Line(geo['135_3-135_1'], a0);
geo['135_3-135_0'] = new THREE.Geometry();
geo['135_3-135_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,1.0),
	new THREE.Vector3(9.7,1.2+hAU,1.0-0.2),
	new THREE.Vector3(9.7,0+hAU,1.0-0.2),
	new THREE.Vector3(9.7,0+hAU,1.0)
); line['135_3-135_0'] = new THREE.Line(geo['135_3-135_0'], a0);
geo['143_1-143_0'] = new THREE.Geometry();
geo['143_1-143_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,2.6),
	new THREE.Vector3(9.7,0.35+hAU,2.6-0.1),
	new THREE.Vector3(9.7,0.05+hAU,2.6-0.1),
	new THREE.Vector3(9.7,0+hAU,2.6)
); line['143_1-143_0'] = new THREE.Line(geo['143_1-143_0'], a0);
geo['143_2-143_1'] = new THREE.Geometry();
geo['143_2-143_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,2.6),
	new THREE.Vector3(9.7,0.75+hAU,2.6-0.1),
	new THREE.Vector3(9.7,0.45+hAU,2.6-0.1),
	new THREE.Vector3(9.7,0.4+hAU,2.6)
); line['143_2-143_1'] = new THREE.Line(geo['143_2-143_1'], a0);
geo['143_3-143_2'] = new THREE.Geometry();
geo['143_3-143_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,2.6),
	new THREE.Vector3(9.7,1.15+hAU,2.6-0.1),
	new THREE.Vector3(9.7,0.85+hAU,2.6-0.1),
	new THREE.Vector3(9.7,0.8+hAU,2.6)
); line['143_3-143_2'] = new THREE.Line(geo['143_3-143_2'], a0);
geo['143_2-143_0'] = new THREE.Geometry();
geo['143_2-143_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,2.6),
	new THREE.Vector3(9.7-0.1,0.75+hAU,2.6),
	new THREE.Vector3(9.7-0.1,0.05+hAU,2.6),
	new THREE.Vector3(9.7,0+hAU,2.6)
); line['143_2-143_0'] = new THREE.Line(geo['143_2-143_0'], a0);
geo['143_3-143_1'] = new THREE.Geometry();
geo['143_3-143_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,2.6),
	new THREE.Vector3(9.7+0.1,1.15+hAU,2.6),
	new THREE.Vector3(9.7+0.1,0.45+hAU,2.6),
	new THREE.Vector3(9.7,0.4+hAU,2.6)
); line['143_3-143_1'] = new THREE.Line(geo['143_3-143_1'], a0);
geo['143_3-143_0'] = new THREE.Geometry();
geo['143_3-143_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,2.6),
	new THREE.Vector3(9.7,1.2+hAU,2.6-0.2),
	new THREE.Vector3(9.7,0+hAU,2.6-0.2),
	new THREE.Vector3(9.7,0+hAU,2.6)
); line['143_3-143_0'] = new THREE.Line(geo['143_3-143_0'], a0);
geo['145_1-145_0'] = new THREE.Geometry();
geo['145_1-145_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,3.5),
	new THREE.Vector3(9.7,0.35+hAU,3.5-0.1),
	new THREE.Vector3(9.7,0.05+hAU,3.5-0.1),
	new THREE.Vector3(9.7,0+hAU,3.5)
); line['145_1-145_0'] = new THREE.Line(geo['145_1-145_0'], a0);
geo['145_2-145_1'] = new THREE.Geometry();
geo['145_2-145_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,3.5),
	new THREE.Vector3(9.7,0.75+hAU,3.5-0.1),
	new THREE.Vector3(9.7,0.45+hAU,3.5-0.1),
	new THREE.Vector3(9.7,0.4+hAU,3.5)
); line['145_2-145_1'] = new THREE.Line(geo['145_2-145_1'], a0);
geo['145_3-145_2'] = new THREE.Geometry();
geo['145_3-145_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,3.5),
	new THREE.Vector3(9.7,1.15+hAU,3.5-0.1),
	new THREE.Vector3(9.7,0.85+hAU,3.5-0.1),
	new THREE.Vector3(9.7,0.8+hAU,3.5)
); line['145_3-145_2'] = new THREE.Line(geo['145_3-145_2'], a0);
geo['145_2-145_0'] = new THREE.Geometry();
geo['145_2-145_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,3.5),
	new THREE.Vector3(9.7-0.1,0.75+hAU,3.5),
	new THREE.Vector3(9.7-0.1,0.05+hAU,3.5),
	new THREE.Vector3(9.7,0+hAU,3.5)
); line['145_2-145_0'] = new THREE.Line(geo['145_2-145_0'], a0);
geo['145_3-145_1'] = new THREE.Geometry();
geo['145_3-145_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,3.5),
	new THREE.Vector3(9.7+0.1,1.15+hAU,3.5),
	new THREE.Vector3(9.7+0.1,0.45+hAU,3.5),
	new THREE.Vector3(9.7,0.4+hAU,3.5)
); line['145_3-145_1'] = new THREE.Line(geo['145_3-145_1'], a0);
geo['145_3-145_0'] = new THREE.Geometry();
geo['145_3-145_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,3.5),
	new THREE.Vector3(9.7,1.2+hAU,3.5-0.2),
	new THREE.Vector3(9.7,0+hAU,3.5-0.2),
	new THREE.Vector3(9.7,0+hAU,3.5)
); line['145_3-145_0'] = new THREE.Line(geo['145_3-145_0'], a0);
geo['300_0-MX1_0'] = new THREE.Geometry();
geo['300_0-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0+hS2,1.15),
	new THREE.Vector3(-0.15,0+hS2,0.1),
	new THREE.Vector3(1.75,0+hS2,-1),
	new THREE.Vector3(3.5,0+hS2,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['300_0-MX1_0'] = new THREE.Line(geo['300_0-MX1_0'], a0);
geo['300_1-MX1_0'] = new THREE.Geometry();
geo['300_1-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0.4+hS2,1.15),
	new THREE.Vector3(-0.15,0.4+hS2,0.1),
	new THREE.Vector3(1.75,0.4+hS2,-1),
	new THREE.Vector3(3.5,0.4+hS2,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['300_1-MX1_0'] = new THREE.Line(geo['300_1-MX1_0'], a0);
geo['300_2-MX1_0'] = new THREE.Geometry();
geo['300_2-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0.8+hS2,1.15),
	new THREE.Vector3(-0.15,0.8+hS2,0.1),
	new THREE.Vector3(1.75,0.8+hS2,-1),
	new THREE.Vector3(3.5,0.8+hS2,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['300_2-MX1_0'] = new THREE.Line(geo['300_2-MX1_0'], a0);
geo['300_3-MX1_0'] = new THREE.Geometry();
geo['300_3-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,1.2+hS2,1.15),
	new THREE.Vector3(-0.15,1.2+hS2,0.1),
	new THREE.Vector3(1.75,1.2+hS2,-1),
	new THREE.Vector3(3.5,1.2+hS2,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['300_3-MX1_0'] = new THREE.Line(geo['300_3-MX1_0'], a0);
geo['200_0-MX1_0'] = new THREE.Geometry();
geo['200_0-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0+hS1,1.15),
	new THREE.Vector3(-0.15,0+hS1,0.1),
	new THREE.Vector3(1.75,0+hS1,-1),
	new THREE.Vector3(3.5,0+hS1,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['200_0-MX1_0'] = new THREE.Line(geo['200_0-MX1_0'], a0);
geo['200_1-MX1_0'] = new THREE.Geometry();
geo['200_1-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0.4+hS1,1.15),
	new THREE.Vector3(-0.15,0.4+hS1,0.1),
	new THREE.Vector3(1.75,0.4+hS1,-1),
	new THREE.Vector3(3.5,0.4+hS1,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['200_1-MX1_0'] = new THREE.Line(geo['200_1-MX1_0'], a0);
geo['200_2-MX1_0'] = new THREE.Geometry();
geo['200_2-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0.8+hS1,1.15),
	new THREE.Vector3(-0.15,0.8+hS1,0.1),
	new THREE.Vector3(1.75,0.8+hS1,-1),
	new THREE.Vector3(3.5,0.8+hS1,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['200_2-MX1_0'] = new THREE.Line(geo['200_2-MX1_0'], a0);
geo['200_3-MX1_0'] = new THREE.Geometry();
geo['200_3-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,1.2+hS1,1.15),
	new THREE.Vector3(-0.15,1.2+hS1,0.1),
	new THREE.Vector3(1.75,1.2+hS1,-1),
	new THREE.Vector3(3.5,1.2+hS1,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['200_3-MX1_0'] = new THREE.Line(geo['200_3-MX1_0'], a0);
geo['100_0-MX1_0'] = new THREE.Geometry();
geo['100_0-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0+hME,1.15),
	new THREE.Vector3(-0.15,0+hME,0.1),
	new THREE.Vector3(1.75,0+hME,-1),
	new THREE.Vector3(3.5,0+hME,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['100_0-MX1_0'] = new THREE.Line(geo['100_0-MX1_0'], a0);
geo['100_1-MX1_0'] = new THREE.Geometry();
geo['100_1-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0.4+hME,1.15),
	new THREE.Vector3(-0.15,0.4+hME,0.1),
	new THREE.Vector3(1.75,0.4+hME,-1),
	new THREE.Vector3(3.5,0.4+hME,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['100_1-MX1_0'] = new THREE.Line(geo['100_1-MX1_0'], a0);
geo['100_2-MX1_0'] = new THREE.Geometry();
geo['100_2-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,0.8+hME,1.15),
	new THREE.Vector3(-0.15,0.8+hME,0.1),
	new THREE.Vector3(1.75,0.8+hME,-1),
	new THREE.Vector3(3.5,0.8+hME,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['100_2-MX1_0'] = new THREE.Line(geo['100_2-MX1_0'], a0);
geo['100_3-MX1_0'] = new THREE.Geometry();
geo['100_3-MX1_0'].vertices.push(
	new THREE.Vector3(-0.15,1.2+hME,1.15),
	new THREE.Vector3(-0.15,1.2+hME,0.1),
	new THREE.Vector3(1.75,1.2+hME,-1),
	new THREE.Vector3(3.5,1.2+hME,-1),
	new THREE.Vector3(4,-2+hEG,-1)
); line['100_3-MX1_0'] = new THREE.Line(geo['100_3-MX1_0'], a0);
geo['1W1_0-MX1_0'] = new THREE.Geometry();
geo['1W1_0-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0+hAU,-4.2),
	new THREE.Vector3(7.5,0+hAU,-4.7),
	new THREE.Vector3(7.5,-2+hEG,-4.7),
	new THREE.Vector3(4,-2+hEG,-1)
); line['1W1_0-MX1_0'] = new THREE.Line(geo['1W1_0-MX1_0'], a0);
geo['1W1_1-MX1_0'] = new THREE.Geometry();
geo['1W1_1-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.4+hAU,-4.2),
	new THREE.Vector3(7.5,0.4+hAU,-4.7),
	new THREE.Vector3(7.5,-2+0.4+hEG,-4.7),
	new THREE.Vector3(4,-2+hEG,-1)
); line['1W1_1-MX1_0'] = new THREE.Line(geo['1W1_1-MX1_0'], a0);
geo['1W1_2-MX1_0'] = new THREE.Geometry();
geo['1W1_2-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.8+hAU,-4.2),
	new THREE.Vector3(7.5,0.8+hAU,-4.7),
	new THREE.Vector3(7.5,-2+0.8+hEG,-4.7),
	new THREE.Vector3(4,-2+hEG,-1)
); line['1W1_2-MX1_0'] = new THREE.Line(geo['1W1_2-MX1_0'], a0);
geo['1W1_3-MX1_0'] = new THREE.Geometry();
geo['1W1_3-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,1.2+hAU,-4.2),
	new THREE.Vector3(7.5,1.2+hAU,-4.7),
	new THREE.Vector3(7.5,-2+1.2+hEG,-4.7),
	new THREE.Vector3(4,-2+hEG,-1)
); line['1W1_3-MX1_0'] = new THREE.Line(geo['1W1_3-MX1_0'], a0);
geo['1W2_0-MX1_0'] = new THREE.Geometry();
geo['1W2_0-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0+hAU,-2.4),
	new THREE.Vector3(7.5,0+hAU,-2.9),
	new THREE.Vector3(7.5,-2+hEG,-2.9),
	new THREE.Vector3(4,-2+hEG,-1)
); line['1W2_0-MX1_0'] = new THREE.Line(geo['1W2_0-MX1_0'], a0);
geo['1W2_1-MX1_0'] = new THREE.Geometry();
geo['1W2_1-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.4+hAU,-2.4),
	new THREE.Vector3(7.5,0.4+hAU,-2.9),
	new THREE.Vector3(7.5,-2+0.4+hEG,-2.9),
	new THREE.Vector3(4,-2+hEG,-1)
); line['1W2_1-MX1_0'] = new THREE.Line(geo['1W2_1-MX1_0'], a0);
geo['1W2_2-MX1_0'] = new THREE.Geometry();
geo['1W2_2-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.8+hAU,-2.4),
	new THREE.Vector3(7.5,0.8+hAU,-2.9),
	new THREE.Vector3(7.5,-2+0.8+hEG,-2.9),
	new THREE.Vector3(4,-2+hEG,-1)
); line['1W2_2-MX1_0'] = new THREE.Line(geo['1W2_2-MX1_0'], a0);
geo['1W2_3-MX1_0'] = new THREE.Geometry();
geo['1W2_3-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,1.2+hAU,-2.4),
	new THREE.Vector3(7.5,1.2+hAU,-2.9),
	new THREE.Vector3(7.5,-2+1.2+hEG,-2.9),
	new THREE.Vector3(4,-2+hEG,-1)
); line['1W2_3-MX1_0'] = new THREE.Line(geo['1W2_3-MX1_0'], a0);
geo['3W1_0-MX1_0'] = new THREE.Geometry();
geo['3W1_0-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0+hS2,-4.2),
	new THREE.Vector3(7.5,0+hS2,-3.7),
	new THREE.Vector3(7.5,-2+hEG,-3.7),
	new THREE.Vector3(4,-2+hEG,-1)
); line['3W1_0-MX1_0'] = new THREE.Line(geo['3W1_0-MX1_0'], a0);
geo['3W1_1-MX1_0'] = new THREE.Geometry();
geo['3W1_1-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.4+hS2,-4.2),
	new THREE.Vector3(7.5,0.4+hS2,-3.7),
	new THREE.Vector3(7.5,-2+0.4+hEG,-3.7),
	new THREE.Vector3(4,-2+hEG,-1)
); line['3W1_1-MX1_0'] = new THREE.Line(geo['3W1_1-MX1_0'], a0);
geo['3W1_2-MX1_0'] = new THREE.Geometry();
geo['3W1_2-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.8+hS2,-4.2),
	new THREE.Vector3(7.5,0.8+hS2,-3.7),
	new THREE.Vector3(7.5,-2+0.8+hEG,-3.7),
	new THREE.Vector3(4,-2+hEG,-1)
); line['3W1_2-MX1_0'] = new THREE.Line(geo['3W1_2-MX1_0'], a0);
geo['3W1_3-MX1_0'] = new THREE.Geometry();
geo['3W1_3-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,1.2+hS2,-4.2),
	new THREE.Vector3(7.5,1.2+hS2,-3.7),
	new THREE.Vector3(7.5,-2+1.2+hEG,-3.7),
	new THREE.Vector3(4,-2+hEG,-1)
); line['3W1_3-MX1_0'] = new THREE.Line(geo['3W1_3-MX1_0'], a0);
geo['3W2_0-MX1_0'] = new THREE.Geometry();
geo['3W2_0-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0+hS2,-2.4),
	new THREE.Vector3(7.5,0+hS2,-1.9),
	new THREE.Vector3(7.5,-2+hEG,-1.9),
	new THREE.Vector3(4,-2+hEG,-1)
); line['3W2_0-MX1_0'] = new THREE.Line(geo['3W2_0-MX1_0'], a0);
geo['3W2_1-MX1_0'] = new THREE.Geometry();
geo['3W2_1-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.4+hS2,-2.4),
	new THREE.Vector3(7.5,0.4+hS2,-1.9),
	new THREE.Vector3(7.5,-2+0.4+hEG,-1.9),
	new THREE.Vector3(4,-2+hEG,-1)
); line['3W2_1-MX1_0'] = new THREE.Line(geo['3W2_1-MX1_0'], a0);
geo['3W2_2-MX1_0'] = new THREE.Geometry();
geo['3W2_2-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.8+hS2,-2.4),
	new THREE.Vector3(7.5,0.8+hS2,-1.9),
	new THREE.Vector3(7.5,-2+0.8+hEG,-1.9),
	new THREE.Vector3(4,-2+hEG,-1)
); line['3W2_2-MX1_0'] = new THREE.Line(geo['3W2_2-MX1_0'], a0);
geo['3W2_3-MX1_0'] = new THREE.Geometry();
geo['3W2_3-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,1.2+hS2,-2.4),
	new THREE.Vector3(7.5,1.2+hS2,-1.9),
	new THREE.Vector3(7.5,-2+1.2+hEG,-1.9),
	new THREE.Vector3(4,-2+hEG,-1)
); line['3W2_3-MX1_0'] = new THREE.Line(geo['3W2_3-MX1_0'], a0);
geo['2W1_0-MX1_0'] = new THREE.Geometry();
geo['2W1_0-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0+hS1,-4.2),
	new THREE.Vector3(7.5,0+hS1,-4.2),
	new THREE.Vector3(7.5,-2+hEG,-4.2),
	new THREE.Vector3(4,-2+hEG,-1)
); line['2W1_0-MX1_0'] = new THREE.Line(geo['2W1_0-MX1_0'], a0);
geo['2W1_1-MX1_0'] = new THREE.Geometry();
geo['2W1_1-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.4+hS1,-4.2),
	new THREE.Vector3(7.5,0.4+hS1,-4.2),
	new THREE.Vector3(7.5,-2+0.4+hEG,-4.2),
	new THREE.Vector3(4,-2+hEG,-1)
); line['2W1_1-MX1_0'] = new THREE.Line(geo['2W1_1-MX1_0'], a0);
geo['2W1_2-MX1_0'] = new THREE.Geometry();
geo['2W1_2-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,0.8+hS1,-4.2),
	new THREE.Vector3(7.5,0.8+hS1,-4.2),
	new THREE.Vector3(7.5,-2+0.8+hEG,-4.2),
	new THREE.Vector3(4,-2+hEG,-1)
); line['2W1_2-MX1_0'] = new THREE.Line(geo['2W1_2-MX1_0'], a0);
geo['2W1_3-MX1_0'] = new THREE.Geometry();
geo['2W1_3-MX1_0'].vertices.push(
	new THREE.Vector3(8.0,1.2+hS1,-4.2),
	new THREE.Vector3(7.5,1.2+hS1,-4.2),
	new THREE.Vector3(7.5,-2+1.2+hEG,-4.2),
	new THREE.Vector3(4,-2+hEG,-1)
); line['2W1_3-MX1_0'] = new THREE.Line(geo['2W1_3-MX1_0'], a0);
geo['2W3_0-MX2_0'] = new THREE.Geometry();
geo['2W3_0-MX2_0'].vertices.push(
	new THREE.Vector3(6.5,0+hS1,-4.2),
	new THREE.Vector3(7.0,0+hS1,-4.2),
	new THREE.Vector3(7.0,-2+hEG,-4.2),
	new THREE.Vector3(4,-2+hEG,-2)
); line['2W3_0-MX2_0'] = new THREE.Line(geo['2W3_0-MX2_0'], a0);
geo['2W3_1-MX2_0'] = new THREE.Geometry();
geo['2W3_1-MX2_0'].vertices.push(
	new THREE.Vector3(6.5,0.4+hS1,-4.2),
	new THREE.Vector3(7.0,0.4+hS1,-4.2),
	new THREE.Vector3(7.0,-2+0.4+hEG,-4.2),
	new THREE.Vector3(4,-2+hEG,-2)
); line['2W3_1-MX2_0'] = new THREE.Line(geo['2W3_1-MX2_0'], a0);
geo['2W3_2-MX2_0'] = new THREE.Geometry();
geo['2W3_2-MX2_0'].vertices.push(
	new THREE.Vector3(6.5,0.8+hS1,-4.2),
	new THREE.Vector3(7.0,0.8+hS1,-4.2),
	new THREE.Vector3(7.0,-2+0.8+hEG,-4.2),
	new THREE.Vector3(4,-2+hEG,-2)
); line['2W3_2-MX2_0'] = new THREE.Line(geo['2W3_2-MX2_0'], a0);
geo['2W3_3-MX2_0'] = new THREE.Geometry();
geo['2W3_3-MX2_0'].vertices.push(
	new THREE.Vector3(6.5,1.2+hS1,-4.2),
	new THREE.Vector3(7.0,1.2+hS1,-4.2),
	new THREE.Vector3(7.0,-2+1.2+hEG,-4.2),
	new THREE.Vector3(4,-2+hEG,-2)
); line['2W3_3-MX2_0'] = new THREE.Line(geo['2W3_3-MX2_0'], a0);
geo['2W2_0-MX2_0'] = new THREE.Geometry();
geo['2W2_0-MX2_0'].vertices.push(
	new THREE.Vector3(8.0,0+hS1,-2.4),
	new THREE.Vector3(7.5,0+hS1,-2.4),
	new THREE.Vector3(7.5,-2+hEG,-2.4),
	new THREE.Vector3(4,-2+hEG,-2)
); line['2W2_0-MX2_0'] = new THREE.Line(geo['2W2_0-MX2_0'], a0);
geo['2W2_1-MX2_0'] = new THREE.Geometry();
geo['2W2_1-MX2_0'].vertices.push(
	new THREE.Vector3(8.0,0.4+hS1,-2.4),
	new THREE.Vector3(7.5,0.4+hS1,-2.4),
	new THREE.Vector3(7.5,-2+0.4+hEG,-2.4),
	new THREE.Vector3(4,-2+hEG,-2)
); line['2W2_1-MX2_0'] = new THREE.Line(geo['2W2_1-MX2_0'], a0);
geo['2W2_2-MX2_0'] = new THREE.Geometry();
geo['2W2_2-MX2_0'].vertices.push(
	new THREE.Vector3(8.0,0.8+hS1,-2.4),
	new THREE.Vector3(7.5,0.8+hS1,-2.4),
	new THREE.Vector3(7.5,-2+0.8+hEG,-2.4),
	new THREE.Vector3(4,-2+hEG,-2)
); line['2W2_2-MX2_0'] = new THREE.Line(geo['2W2_2-MX2_0'], a0);
geo['2W2_3-MX2_0'] = new THREE.Geometry();
geo['2W2_3-MX2_0'].vertices.push(
	new THREE.Vector3(8.0,1.2+hS1,-2.4),
	new THREE.Vector3(7.5,1.2+hS1,-2.4),
	new THREE.Vector3(7.5,-2+1.2+hEG,-2.4),
	new THREE.Vector3(4,-2+hEG,-2)
); line['2W2_3-MX2_0'] = new THREE.Line(geo['2W2_3-MX2_0'], a0);
geo['000_0-MX2_0'] = new THREE.Geometry();
geo['000_0-MX2_0'].vertices.push(
	new THREE.Vector3(-0.15,0+hEG,1.15),
	new THREE.Vector3(-0.15,0+hEG,0.1),
	new THREE.Vector3(1.75,0+hEG,-2),
	new THREE.Vector3(3.5,0+hEG,-2),
	new THREE.Vector3(4,-2+hEG,-2)
); line['000_0-MX2_0'] = new THREE.Line(geo['000_0-MX2_0'], a0);
geo['000_1-MX2_0'] = new THREE.Geometry();
geo['000_1-MX2_0'].vertices.push(
	new THREE.Vector3(-0.15,0.4+hEG,1.15),
	new THREE.Vector3(-0.15,0.4+hEG,0.1),
	new THREE.Vector3(1.75,0.4+hEG,-2),
	new THREE.Vector3(3.5,0.4+hEG,-2),
	new THREE.Vector3(4,-2+hEG,-2)
); line['000_1-MX2_0'] = new THREE.Line(geo['000_1-MX2_0'], a0);
geo['000_2-MX2_0'] = new THREE.Geometry();
geo['000_2-MX2_0'].vertices.push(
	new THREE.Vector3(-0.15,0.8+hEG,1.15),
	new THREE.Vector3(-0.15,0.8+hEG,0.1),
	new THREE.Vector3(1.75,0.8+hEG,-2),
	new THREE.Vector3(3.5,0.8+hEG,-2),
	new THREE.Vector3(4,-2+hEG,-2)
); line['000_2-MX2_0'] = new THREE.Line(geo['000_2-MX2_0'], a0);
geo['000_3-MX2_0'] = new THREE.Geometry();
geo['000_3-MX2_0'].vertices.push(
	new THREE.Vector3(-0.15,1.2+hEG,1.15),
	new THREE.Vector3(-0.15,1.2+hEG,0.1),
	new THREE.Vector3(1.75,1.2+hEG,-2),
	new THREE.Vector3(3.5,1.2+hEG,-2),
	new THREE.Vector3(4,-2+hEG,-2)
); line['000_3-MX2_0'] = new THREE.Line(geo['000_3-MX2_0'], a0);
geo['076_0-MX2_0'] = new THREE.Geometry();
geo['076_0-MX2_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hEG,-2.55),
	new THREE.Vector3(3.5,0+hEG,-2.55),
	new THREE.Vector3(3.5,0+hEG,-2.3),
	new THREE.Vector3(4,-2+hEG,-2)
); line['076_0-MX2_0'] = new THREE.Line(geo['076_0-MX2_0'], a0);
geo['076_1-MX2_0'] = new THREE.Geometry();
geo['076_1-MX2_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-2.55),
	new THREE.Vector3(3.5,0.4+hEG,-2.55),
	new THREE.Vector3(3.5,0.4+hEG,-2.3),
	new THREE.Vector3(4,-2+hEG,-2)
); line['076_1-MX2_0'] = new THREE.Line(geo['076_1-MX2_0'], a0);
geo['076_2-MX2_0'] = new THREE.Geometry();
geo['076_2-MX2_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-2.55),
	new THREE.Vector3(3.5,0.8+hEG,-2.55),
	new THREE.Vector3(3.5,0.8+hEG,-2.3),
	new THREE.Vector3(4,-2+hEG,-2)
); line['076_2-MX2_0'] = new THREE.Line(geo['076_2-MX2_0'], a0);
geo['076_3-MX2_0'] = new THREE.Geometry();
geo['076_3-MX2_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-2.55),
	new THREE.Vector3(3.5,1.2+hEG,-2.55),
	new THREE.Vector3(3.5,1.2+hEG,-2.3),
	new THREE.Vector3(4,-2+hEG,-2)
); line['076_3-MX2_0'] = new THREE.Line(geo['076_3-MX2_0'], a0);
geo['110_1-110_0'] = new THREE.Geometry();
geo['110_1-110_0'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-4.6),
	new THREE.Vector3(4.95,0.35+hAU,-4.6-0.1),
	new THREE.Vector3(4.95,0.05+hAU,-4.6-0.1),
	new THREE.Vector3(4.95,0+hAU,-4.6)
); line['110_1-110_0'] = new THREE.Line(geo['110_1-110_0'], a0);
geo['110_2-110_1'] = new THREE.Geometry();
geo['110_2-110_1'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-4.6),
	new THREE.Vector3(4.95,0.75+hAU,-4.6-0.1),
	new THREE.Vector3(4.95,0.45+hAU,-4.6-0.1),
	new THREE.Vector3(4.95,0.4+hAU,-4.6)
); line['110_2-110_1'] = new THREE.Line(geo['110_2-110_1'], a0);
geo['110_3-110_2'] = new THREE.Geometry();
geo['110_3-110_2'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-4.6),
	new THREE.Vector3(4.95,1.15+hAU,-4.6-0.1),
	new THREE.Vector3(4.95,0.85+hAU,-4.6-0.1),
	new THREE.Vector3(4.95,0.8+hAU,-4.6)
); line['110_3-110_2'] = new THREE.Line(geo['110_3-110_2'], a0);
geo['110_2-110_0'] = new THREE.Geometry();
geo['110_2-110_0'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-4.6),
	new THREE.Vector3(4.95-0.1,0.75+hAU,-4.6),
	new THREE.Vector3(4.95-0.1,0.05+hAU,-4.6),
	new THREE.Vector3(4.95,0+hAU,-4.6)
); line['110_2-110_0'] = new THREE.Line(geo['110_2-110_0'], a0);
geo['110_3-110_1'] = new THREE.Geometry();
geo['110_3-110_1'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-4.6),
	new THREE.Vector3(4.95+0.1,1.15+hAU,-4.6),
	new THREE.Vector3(4.95+0.1,0.45+hAU,-4.6),
	new THREE.Vector3(4.95,0.4+hAU,-4.6)
); line['110_3-110_1'] = new THREE.Line(geo['110_3-110_1'], a0);
geo['110_3-110_0'] = new THREE.Geometry();
geo['110_3-110_0'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-4.6),
	new THREE.Vector3(4.95,1.2+hAU,-4.6-0.2),
	new THREE.Vector3(4.95,0+hAU,-4.6-0.2),
	new THREE.Vector3(4.95,0+hAU,-4.6)
); line['110_3-110_0'] = new THREE.Line(geo['110_3-110_0'], a0);
geo['120_1-120_0'] = new THREE.Geometry();
geo['120_1-120_0'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-2.0),
	new THREE.Vector3(4.95,0.35+hAU,-2.0-0.1),
	new THREE.Vector3(4.95,0.05+hAU,-2.0-0.1),
	new THREE.Vector3(4.95,0+hAU,-2.0)
); line['120_1-120_0'] = new THREE.Line(geo['120_1-120_0'], a0);
geo['120_2-120_1'] = new THREE.Geometry();
geo['120_2-120_1'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-2.0),
	new THREE.Vector3(4.95,0.75+hAU,-2.0-0.1),
	new THREE.Vector3(4.95,0.45+hAU,-2.0-0.1),
	new THREE.Vector3(4.95,0.4+hAU,-2.0)
); line['120_2-120_1'] = new THREE.Line(geo['120_2-120_1'], a0);
geo['120_3-120_2'] = new THREE.Geometry();
geo['120_3-120_2'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-2.0),
	new THREE.Vector3(4.95,1.15+hAU,-2.0-0.1),
	new THREE.Vector3(4.95,0.85+hAU,-2.0-0.1),
	new THREE.Vector3(4.95,0.8+hAU,-2.0)
); line['120_3-120_2'] = new THREE.Line(geo['120_3-120_2'], a0);
geo['120_2-120_0'] = new THREE.Geometry();
geo['120_2-120_0'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-2.0),
	new THREE.Vector3(4.95-0.1,0.75+hAU,-2.0),
	new THREE.Vector3(4.95-0.1,0.05+hAU,-2.0),
	new THREE.Vector3(4.95,0+hAU,-2.0)
); line['120_2-120_0'] = new THREE.Line(geo['120_2-120_0'], a0);
geo['120_3-120_1'] = new THREE.Geometry();
geo['120_3-120_1'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-2.0),
	new THREE.Vector3(4.95+0.1,1.15+hAU,-2.0),
	new THREE.Vector3(4.95+0.1,0.45+hAU,-2.0),
	new THREE.Vector3(4.95,0.4+hAU,-2.0)
); line['120_3-120_1'] = new THREE.Line(geo['120_3-120_1'], a0);
geo['120_3-120_0'] = new THREE.Geometry();
geo['120_3-120_0'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-2.0),
	new THREE.Vector3(4.95,1.2+hAU,-2.0-0.2),
	new THREE.Vector3(4.95,0+hAU,-2.0-0.2),
	new THREE.Vector3(4.95,0+hAU,-2.0)
); line['120_3-120_0'] = new THREE.Line(geo['120_3-120_0'], a0);
geo['POR_1-POR_0'] = new THREE.Geometry();
geo['POR_1-POR_0'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-7.1),
	new THREE.Vector3(4.95,0.35+hAU,-7.1-0.1),
	new THREE.Vector3(4.95,0.05+hAU,-7.1-0.1),
	new THREE.Vector3(4.95,0+hAU,-7.1)
); line['POR_1-POR_0'] = new THREE.Line(geo['POR_1-POR_0'], a0);
geo['POR_2-POR_1'] = new THREE.Geometry();
geo['POR_2-POR_1'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-7.1),
	new THREE.Vector3(4.95,0.75+hAU,-7.1-0.1),
	new THREE.Vector3(4.95,0.45+hAU,-7.1-0.1),
	new THREE.Vector3(4.95,0.4+hAU,-7.1)
); line['POR_2-POR_1'] = new THREE.Line(geo['POR_2-POR_1'], a0);
geo['POR_3-POR_2'] = new THREE.Geometry();
geo['POR_3-POR_2'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-7.1),
	new THREE.Vector3(4.95,1.15+hAU,-7.1-0.1),
	new THREE.Vector3(4.95,0.85+hAU,-7.1-0.1),
	new THREE.Vector3(4.95,0.8+hAU,-7.1)
); line['POR_3-POR_2'] = new THREE.Line(geo['POR_3-POR_2'], a0);
geo['POR_2-POR_0'] = new THREE.Geometry();
geo['POR_2-POR_0'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-7.1),
	new THREE.Vector3(4.95-0.1,0.75+hAU,-7.1),
	new THREE.Vector3(4.95-0.1,0.05+hAU,-7.1),
	new THREE.Vector3(4.95,0+hAU,-7.1)
); line['POR_2-POR_0'] = new THREE.Line(geo['POR_2-POR_0'], a0);
geo['POR_3-POR_1'] = new THREE.Geometry();
geo['POR_3-POR_1'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-7.1),
	new THREE.Vector3(4.95+0.1,1.15+hAU,-7.1),
	new THREE.Vector3(4.95+0.1,0.45+hAU,-7.1),
	new THREE.Vector3(4.95,0.4+hAU,-7.1)
); line['POR_3-POR_1'] = new THREE.Line(geo['POR_3-POR_1'], a0);
geo['POR_3-POR_0'] = new THREE.Geometry();
geo['POR_3-POR_0'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-7.1),
	new THREE.Vector3(4.95,1.2+hAU,-7.1-0.2),
	new THREE.Vector3(4.95,0+hAU,-7.1-0.2),
	new THREE.Vector3(4.95,0+hAU,-7.1)
); line['POR_3-POR_0'] = new THREE.Line(geo['POR_3-POR_0'], a0);
geo['POR_0-2W3_0'] = new THREE.Geometry();
geo['POR_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0+hAU,-7.1),
	new THREE.Vector3(5.8,0+hAU,-7.1),
	new THREE.Vector3(5.8,0+hAU,-4.8),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['POR_0-2W3_0'] = new THREE.Line(geo['POR_0-2W3_0'], a0);
geo['POR_1-2W3_0'] = new THREE.Geometry();
geo['POR_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-7.1),
	new THREE.Vector3(5.8,0.4+hAU,-7.1),
	new THREE.Vector3(5.8,0.4+hAU,-4.8),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['POR_1-2W3_0'] = new THREE.Line(geo['POR_1-2W3_0'], a0);
geo['POR_2-2W3_0'] = new THREE.Geometry();
geo['POR_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-7.1),
	new THREE.Vector3(5.8,0.8+hAU,-7.1),
	new THREE.Vector3(5.8,0.8+hAU,-4.8),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['POR_2-2W3_0'] = new THREE.Line(geo['POR_2-2W3_0'], a0);
geo['POR_3-2W3_0'] = new THREE.Geometry();
geo['POR_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-7.1),
	new THREE.Vector3(5.8,1.2+hAU,-7.1),
	new THREE.Vector3(5.8,1.2+hAU,-4.8),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['POR_3-2W3_0'] = new THREE.Line(geo['POR_3-2W3_0'], a0);
geo['POR_1-2W3_1'] = new THREE.Geometry();
geo['POR_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-7.1),
	new THREE.Vector3(5.8,0.4+hAU,-7.1),
	new THREE.Vector3(5.8,0.4+hAU,-4.8),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['POR_1-2W3_1'] = new THREE.Line(geo['POR_1-2W3_1'], a0);
geo['POR_2-2W3_1'] = new THREE.Geometry();
geo['POR_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-7.1),
	new THREE.Vector3(5.8,0.8+hAU,-7.1),
	new THREE.Vector3(5.8,0.8+hAU,-4.8),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['POR_2-2W3_1'] = new THREE.Line(geo['POR_2-2W3_1'], a0);
geo['POR_3-2W3_1'] = new THREE.Geometry();
geo['POR_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-7.1),
	new THREE.Vector3(5.8,1.2+hAU,-7.1),
	new THREE.Vector3(5.8,1.2+hAU,-4.8),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['POR_3-2W3_1'] = new THREE.Line(geo['POR_3-2W3_1'], a0);
geo['POR_2-2W3_2'] = new THREE.Geometry();
geo['POR_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-7.1),
	new THREE.Vector3(5.8,0.8+hAU,-7.1),
	new THREE.Vector3(5.8,0.8+hAU,-4.8),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['POR_2-2W3_2'] = new THREE.Line(geo['POR_2-2W3_2'], a0);
geo['POR_3-2W3_2'] = new THREE.Geometry();
geo['POR_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-7.1),
	new THREE.Vector3(5.8,1.2+hAU,-7.1),
	new THREE.Vector3(5.8,1.2+hAU,-4.8),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['POR_3-2W3_2'] = new THREE.Line(geo['POR_3-2W3_2'], a0);
geo['POR_3-2W3_3'] = new THREE.Geometry();
geo['POR_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-7.1),
	new THREE.Vector3(5.8,1.2+hAU,-7.1),
	new THREE.Vector3(5.8,1.2+hAU,-4.8),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['POR_3-2W3_3'] = new THREE.Line(geo['POR_3-2W3_3'], a0);
geo['120_0-2W3_0'] = new THREE.Geometry();
geo['120_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0+hAU,-2.0),
	new THREE.Vector3(5.8,0+hAU,-2.0),
	new THREE.Vector3(5.8,0+hAU,-4.1),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['120_0-2W3_0'] = new THREE.Line(geo['120_0-2W3_0'], a0);
geo['120_1-2W3_0'] = new THREE.Geometry();
geo['120_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-2.0),
	new THREE.Vector3(5.8,0.4+hAU,-2.0),
	new THREE.Vector3(5.8,0.4+hAU,-4.1),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['120_1-2W3_0'] = new THREE.Line(geo['120_1-2W3_0'], a0);
geo['120_2-2W3_0'] = new THREE.Geometry();
geo['120_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-2.0),
	new THREE.Vector3(5.8,0.8+hAU,-2.0),
	new THREE.Vector3(5.8,0.8+hAU,-4.1),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['120_2-2W3_0'] = new THREE.Line(geo['120_2-2W3_0'], a0);
geo['120_3-2W3_0'] = new THREE.Geometry();
geo['120_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-2.0),
	new THREE.Vector3(5.8,1.2+hAU,-2.0),
	new THREE.Vector3(5.8,1.2+hAU,-4.1),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['120_3-2W3_0'] = new THREE.Line(geo['120_3-2W3_0'], a0);
geo['120_1-2W3_1'] = new THREE.Geometry();
geo['120_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-2.0),
	new THREE.Vector3(5.8,0.4+hAU,-2.0),
	new THREE.Vector3(5.8,0.4+hAU,-4.1),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['120_1-2W3_1'] = new THREE.Line(geo['120_1-2W3_1'], a0);
geo['120_2-2W3_1'] = new THREE.Geometry();
geo['120_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-2.0),
	new THREE.Vector3(5.8,0.8+hAU,-2.0),
	new THREE.Vector3(5.8,0.8+hAU,-4.1),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['120_2-2W3_1'] = new THREE.Line(geo['120_2-2W3_1'], a0);
geo['120_3-2W3_1'] = new THREE.Geometry();
geo['120_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-2.0),
	new THREE.Vector3(5.8,1.2+hAU,-2.0),
	new THREE.Vector3(5.8,1.2+hAU,-4.1),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['120_3-2W3_1'] = new THREE.Line(geo['120_3-2W3_1'], a0);
geo['120_2-2W3_2'] = new THREE.Geometry();
geo['120_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-2.0),
	new THREE.Vector3(5.8,0.8+hAU,-2.0),
	new THREE.Vector3(5.8,0.8+hAU,-4.1),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['120_2-2W3_2'] = new THREE.Line(geo['120_2-2W3_2'], a0);
geo['120_3-2W3_2'] = new THREE.Geometry();
geo['120_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-2.0),
	new THREE.Vector3(5.8,1.2+hAU,-2.0),
	new THREE.Vector3(5.8,1.2+hAU,-4.1),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['120_3-2W3_2'] = new THREE.Line(geo['120_3-2W3_2'], a0);
geo['120_3-2W3_3'] = new THREE.Geometry();
geo['120_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-2.0),
	new THREE.Vector3(5.8,1.2+hAU,-2.0),
	new THREE.Vector3(5.8,1.2+hAU,-4.1),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['120_3-2W3_3'] = new THREE.Line(geo['120_3-2W3_3'], a0);
geo['110_0-2W3_0'] = new THREE.Geometry();
geo['110_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0+hAU,-4.6),
	new THREE.Vector3(5.8,0+hAU,-4.6),
	new THREE.Vector3(5.8,0+hAU,-4.3),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['110_0-2W3_0'] = new THREE.Line(geo['110_0-2W3_0'], a0);
geo['110_1-2W3_0'] = new THREE.Geometry();
geo['110_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-4.6),
	new THREE.Vector3(5.8,0.4+hAU,-4.6),
	new THREE.Vector3(5.8,0.4+hAU,-4.3),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['110_1-2W3_0'] = new THREE.Line(geo['110_1-2W3_0'], a0);
geo['110_2-2W3_0'] = new THREE.Geometry();
geo['110_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-4.6),
	new THREE.Vector3(5.8,0.8+hAU,-4.6),
	new THREE.Vector3(5.8,0.8+hAU,-4.3),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['110_2-2W3_0'] = new THREE.Line(geo['110_2-2W3_0'], a0);
geo['110_3-2W3_0'] = new THREE.Geometry();
geo['110_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-4.6),
	new THREE.Vector3(5.8,1.2+hAU,-4.6),
	new THREE.Vector3(5.8,1.2+hAU,-4.3),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['110_3-2W3_0'] = new THREE.Line(geo['110_3-2W3_0'], a0);
geo['110_1-2W3_1'] = new THREE.Geometry();
geo['110_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,0.4+hAU,-4.6),
	new THREE.Vector3(5.8,0.4+hAU,-4.6),
	new THREE.Vector3(5.8,0.4+hAU,-4.3),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['110_1-2W3_1'] = new THREE.Line(geo['110_1-2W3_1'], a0);
geo['110_2-2W3_1'] = new THREE.Geometry();
geo['110_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-4.6),
	new THREE.Vector3(5.8,0.8+hAU,-4.6),
	new THREE.Vector3(5.8,0.8+hAU,-4.3),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['110_2-2W3_1'] = new THREE.Line(geo['110_2-2W3_1'], a0);
geo['110_3-2W3_1'] = new THREE.Geometry();
geo['110_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-4.6),
	new THREE.Vector3(5.8,1.2+hAU,-4.6),
	new THREE.Vector3(5.8,1.2+hAU,-4.3),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['110_3-2W3_1'] = new THREE.Line(geo['110_3-2W3_1'], a0);
geo['110_2-2W3_2'] = new THREE.Geometry();
geo['110_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.95,0.8+hAU,-4.6),
	new THREE.Vector3(5.8,0.8+hAU,-4.6),
	new THREE.Vector3(5.8,0.8+hAU,-4.3),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['110_2-2W3_2'] = new THREE.Line(geo['110_2-2W3_2'], a0);
geo['110_3-2W3_2'] = new THREE.Geometry();
geo['110_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-4.6),
	new THREE.Vector3(5.8,1.2+hAU,-4.6),
	new THREE.Vector3(5.8,1.2+hAU,-4.3),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['110_3-2W3_2'] = new THREE.Line(geo['110_3-2W3_2'], a0);
geo['110_3-2W3_3'] = new THREE.Geometry();
geo['110_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.95,1.2+hAU,-4.6),
	new THREE.Vector3(5.8,1.2+hAU,-4.6),
	new THREE.Vector3(5.8,1.2+hAU,-4.3),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['110_3-2W3_3'] = new THREE.Line(geo['110_3-2W3_3'], a0);
geo['228_0-2W3_0'] = new THREE.Geometry();
geo['228_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-0.55),
	new THREE.Vector3(5.8,0+hS1,-0.55),
	new THREE.Vector3(5.8,0+hS1,-3.7),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['228_0-2W3_0'] = new THREE.Line(geo['228_0-2W3_0'], a0);
geo['228_1-2W3_0'] = new THREE.Geometry();
geo['228_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-0.55),
	new THREE.Vector3(5.8,0.4+hS1,-0.55),
	new THREE.Vector3(5.8,0.4+hS1,-3.7),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['228_1-2W3_0'] = new THREE.Line(geo['228_1-2W3_0'], a0);
geo['228_2-2W3_0'] = new THREE.Geometry();
geo['228_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-0.55),
	new THREE.Vector3(5.8,0.8+hS1,-0.55),
	new THREE.Vector3(5.8,0.8+hS1,-3.7),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['228_2-2W3_0'] = new THREE.Line(geo['228_2-2W3_0'], a0);
geo['228_3-2W3_0'] = new THREE.Geometry();
geo['228_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-0.55),
	new THREE.Vector3(5.8,1.2+hS1,-0.55),
	new THREE.Vector3(5.8,1.2+hS1,-3.7),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['228_3-2W3_0'] = new THREE.Line(geo['228_3-2W3_0'], a0);
geo['228_1-2W3_1'] = new THREE.Geometry();
geo['228_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-0.55),
	new THREE.Vector3(5.8,0.4+hS1,-0.55),
	new THREE.Vector3(5.8,0.4+hS1,-3.7),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['228_1-2W3_1'] = new THREE.Line(geo['228_1-2W3_1'], a0);
geo['228_2-2W3_1'] = new THREE.Geometry();
geo['228_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-0.55),
	new THREE.Vector3(5.8,0.8+hS1,-0.55),
	new THREE.Vector3(5.8,0.8+hS1,-3.7),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['228_2-2W3_1'] = new THREE.Line(geo['228_2-2W3_1'], a0);
geo['228_3-2W3_1'] = new THREE.Geometry();
geo['228_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-0.55),
	new THREE.Vector3(5.8,1.2+hS1,-0.55),
	new THREE.Vector3(5.8,1.2+hS1,-3.7),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['228_3-2W3_1'] = new THREE.Line(geo['228_3-2W3_1'], a0);
geo['228_2-2W3_2'] = new THREE.Geometry();
geo['228_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-0.55),
	new THREE.Vector3(5.8,0.8+hS1,-0.55),
	new THREE.Vector3(5.8,0.8+hS1,-3.7),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['228_2-2W3_2'] = new THREE.Line(geo['228_2-2W3_2'], a0);
geo['228_3-2W3_2'] = new THREE.Geometry();
geo['228_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-0.55),
	new THREE.Vector3(5.8,1.2+hS1,-0.55),
	new THREE.Vector3(5.8,1.2+hS1,-3.7),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['228_3-2W3_2'] = new THREE.Line(geo['228_3-2W3_2'], a0);
geo['228_3-2W3_3'] = new THREE.Geometry();
geo['228_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-0.55),
	new THREE.Vector3(5.8,1.2+hS1,-0.55),
	new THREE.Vector3(5.8,1.2+hS1,-3.7),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['228_3-2W3_3'] = new THREE.Line(geo['228_3-2W3_3'], a0);
geo['226_0-2W3_0'] = new THREE.Geometry();
geo['226_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-1.05),
	new THREE.Vector3(5.75,0+hS1,-1.05),
	new THREE.Vector3(5.75,0+hS1,-3.8),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['226_0-2W3_0'] = new THREE.Line(geo['226_0-2W3_0'], a0);
geo['226_1-2W3_0'] = new THREE.Geometry();
geo['226_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-1.05),
	new THREE.Vector3(5.75,0.4+hS1,-1.05),
	new THREE.Vector3(5.75,0.4+hS1,-3.8),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['226_1-2W3_0'] = new THREE.Line(geo['226_1-2W3_0'], a0);
geo['226_2-2W3_0'] = new THREE.Geometry();
geo['226_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-1.05),
	new THREE.Vector3(5.75,0.8+hS1,-1.05),
	new THREE.Vector3(5.75,0.8+hS1,-3.8),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['226_2-2W3_0'] = new THREE.Line(geo['226_2-2W3_0'], a0);
geo['226_3-2W3_0'] = new THREE.Geometry();
geo['226_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-1.05),
	new THREE.Vector3(5.75,1.2+hS1,-1.05),
	new THREE.Vector3(5.75,1.2+hS1,-3.8),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['226_3-2W3_0'] = new THREE.Line(geo['226_3-2W3_0'], a0);
geo['226_1-2W3_1'] = new THREE.Geometry();
geo['226_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-1.05),
	new THREE.Vector3(5.75,0.4+hS1,-1.05),
	new THREE.Vector3(5.75,0.4+hS1,-3.8),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['226_1-2W3_1'] = new THREE.Line(geo['226_1-2W3_1'], a0);
geo['226_2-2W3_1'] = new THREE.Geometry();
geo['226_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-1.05),
	new THREE.Vector3(5.75,0.8+hS1,-1.05),
	new THREE.Vector3(5.75,0.8+hS1,-3.8),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['226_2-2W3_1'] = new THREE.Line(geo['226_2-2W3_1'], a0);
geo['226_3-2W3_1'] = new THREE.Geometry();
geo['226_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-1.05),
	new THREE.Vector3(5.75,1.2+hS1,-1.05),
	new THREE.Vector3(5.75,1.2+hS1,-3.8),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['226_3-2W3_1'] = new THREE.Line(geo['226_3-2W3_1'], a0);
geo['226_2-2W3_2'] = new THREE.Geometry();
geo['226_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-1.05),
	new THREE.Vector3(5.75,0.8+hS1,-1.05),
	new THREE.Vector3(5.75,0.8+hS1,-3.8),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['226_2-2W3_2'] = new THREE.Line(geo['226_2-2W3_2'], a0);
geo['226_3-2W3_2'] = new THREE.Geometry();
geo['226_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-1.05),
	new THREE.Vector3(5.75,1.2+hS1,-1.05),
	new THREE.Vector3(5.75,1.2+hS1,-3.8),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['226_3-2W3_2'] = new THREE.Line(geo['226_3-2W3_2'], a0);
geo['226_3-2W3_3'] = new THREE.Geometry();
geo['226_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-1.05),
	new THREE.Vector3(5.75,1.2+hS1,-1.05),
	new THREE.Vector3(5.75,1.2+hS1,-3.8),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['226_3-2W3_3'] = new THREE.Line(geo['226_3-2W3_3'], a0);
geo['224_0-2W3_0'] = new THREE.Geometry();
geo['224_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-1.55),
	new THREE.Vector3(5.7,0+hS1,-1.55),
	new THREE.Vector3(5.7,0+hS1,-3.9),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['224_0-2W3_0'] = new THREE.Line(geo['224_0-2W3_0'], a0);
geo['224_1-2W3_0'] = new THREE.Geometry();
geo['224_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-1.55),
	new THREE.Vector3(5.7,0.4+hS1,-1.55),
	new THREE.Vector3(5.7,0.4+hS1,-3.9),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['224_1-2W3_0'] = new THREE.Line(geo['224_1-2W3_0'], a0);
geo['224_2-2W3_0'] = new THREE.Geometry();
geo['224_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-1.55),
	new THREE.Vector3(5.7,0.8+hS1,-1.55),
	new THREE.Vector3(5.7,0.8+hS1,-3.9),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['224_2-2W3_0'] = new THREE.Line(geo['224_2-2W3_0'], a0);
geo['224_3-2W3_0'] = new THREE.Geometry();
geo['224_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-1.55),
	new THREE.Vector3(5.7,1.2+hS1,-1.55),
	new THREE.Vector3(5.7,1.2+hS1,-3.9),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['224_3-2W3_0'] = new THREE.Line(geo['224_3-2W3_0'], a0);
geo['224_1-2W3_1'] = new THREE.Geometry();
geo['224_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-1.55),
	new THREE.Vector3(5.7,0.4+hS1,-1.55),
	new THREE.Vector3(5.7,0.4+hS1,-3.9),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['224_1-2W3_1'] = new THREE.Line(geo['224_1-2W3_1'], a0);
geo['224_2-2W3_1'] = new THREE.Geometry();
geo['224_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-1.55),
	new THREE.Vector3(5.7,0.8+hS1,-1.55),
	new THREE.Vector3(5.7,0.8+hS1,-3.9),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['224_2-2W3_1'] = new THREE.Line(geo['224_2-2W3_1'], a0);
geo['224_3-2W3_1'] = new THREE.Geometry();
geo['224_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-1.55),
	new THREE.Vector3(5.7,1.2+hS1,-1.55),
	new THREE.Vector3(5.7,1.2+hS1,-3.9),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['224_3-2W3_1'] = new THREE.Line(geo['224_3-2W3_1'], a0);
geo['224_2-2W3_2'] = new THREE.Geometry();
geo['224_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-1.55),
	new THREE.Vector3(5.7,0.8+hS1,-1.55),
	new THREE.Vector3(5.7,0.8+hS1,-3.9),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['224_2-2W3_2'] = new THREE.Line(geo['224_2-2W3_2'], a0);
geo['224_3-2W3_2'] = new THREE.Geometry();
geo['224_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-1.55),
	new THREE.Vector3(5.7,1.2+hS1,-1.55),
	new THREE.Vector3(5.7,1.2+hS1,-3.9),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['224_3-2W3_2'] = new THREE.Line(geo['224_3-2W3_2'], a0);
geo['224_3-2W3_3'] = new THREE.Geometry();
geo['224_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-1.55),
	new THREE.Vector3(5.7,1.2+hS1,-1.55),
	new THREE.Vector3(5.7,1.2+hS1,-3.9),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['224_3-2W3_3'] = new THREE.Line(geo['224_3-2W3_3'], a0);
geo['222_0-2W3_0'] = new THREE.Geometry();
geo['222_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-2.05),
	new THREE.Vector3(5.65,0+hS1,-2.05),
	new THREE.Vector3(5.65,0+hS1,-4.0),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['222_0-2W3_0'] = new THREE.Line(geo['222_0-2W3_0'], a0);
geo['222_1-2W3_0'] = new THREE.Geometry();
geo['222_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-2.05),
	new THREE.Vector3(5.65,0.4+hS1,-2.05),
	new THREE.Vector3(5.65,0.4+hS1,-4.0),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['222_1-2W3_0'] = new THREE.Line(geo['222_1-2W3_0'], a0);
geo['222_2-2W3_0'] = new THREE.Geometry();
geo['222_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-2.05),
	new THREE.Vector3(5.65,0.8+hS1,-2.05),
	new THREE.Vector3(5.65,0.8+hS1,-4.0),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['222_2-2W3_0'] = new THREE.Line(geo['222_2-2W3_0'], a0);
geo['222_3-2W3_0'] = new THREE.Geometry();
geo['222_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-2.05),
	new THREE.Vector3(5.65,1.2+hS1,-2.05),
	new THREE.Vector3(5.65,1.2+hS1,-4.0),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['222_3-2W3_0'] = new THREE.Line(geo['222_3-2W3_0'], a0);
geo['222_1-2W3_1'] = new THREE.Geometry();
geo['222_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-2.05),
	new THREE.Vector3(5.65,0.4+hS1,-2.05),
	new THREE.Vector3(5.65,0.4+hS1,-4.0),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['222_1-2W3_1'] = new THREE.Line(geo['222_1-2W3_1'], a0);
geo['222_2-2W3_1'] = new THREE.Geometry();
geo['222_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-2.05),
	new THREE.Vector3(5.65,0.8+hS1,-2.05),
	new THREE.Vector3(5.65,0.8+hS1,-4.0),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['222_2-2W3_1'] = new THREE.Line(geo['222_2-2W3_1'], a0);
geo['222_3-2W3_1'] = new THREE.Geometry();
geo['222_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-2.05),
	new THREE.Vector3(5.65,1.2+hS1,-2.05),
	new THREE.Vector3(5.65,1.2+hS1,-4.0),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['222_3-2W3_1'] = new THREE.Line(geo['222_3-2W3_1'], a0);
geo['222_2-2W3_2'] = new THREE.Geometry();
geo['222_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-2.05),
	new THREE.Vector3(5.65,0.8+hS1,-2.05),
	new THREE.Vector3(5.65,0.8+hS1,-4.0),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['222_2-2W3_2'] = new THREE.Line(geo['222_2-2W3_2'], a0);
geo['222_3-2W3_2'] = new THREE.Geometry();
geo['222_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-2.05),
	new THREE.Vector3(5.65,1.2+hS1,-2.05),
	new THREE.Vector3(5.65,1.2+hS1,-4.0),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['222_3-2W3_2'] = new THREE.Line(geo['222_3-2W3_2'], a0);
geo['222_3-2W3_3'] = new THREE.Geometry();
geo['222_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-2.05),
	new THREE.Vector3(5.65,1.2+hS1,-2.05),
	new THREE.Vector3(5.65,1.2+hS1,-4.0),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['222_3-2W3_3'] = new THREE.Line(geo['222_3-2W3_3'], a0);
geo['220_0-2W3_0'] = new THREE.Geometry();
geo['220_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-2.55),
	new THREE.Vector3(5.6,0+hS1,-2.55),
	new THREE.Vector3(5.6,0+hS1,-4.1),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['220_0-2W3_0'] = new THREE.Line(geo['220_0-2W3_0'], a0);
geo['220_1-2W3_0'] = new THREE.Geometry();
geo['220_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-2.55),
	new THREE.Vector3(5.6,0.4+hS1,-2.55),
	new THREE.Vector3(5.6,0.4+hS1,-4.1),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['220_1-2W3_0'] = new THREE.Line(geo['220_1-2W3_0'], a0);
geo['220_2-2W3_0'] = new THREE.Geometry();
geo['220_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-2.55),
	new THREE.Vector3(5.6,0.8+hS1,-2.55),
	new THREE.Vector3(5.6,0.8+hS1,-4.1),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['220_2-2W3_0'] = new THREE.Line(geo['220_2-2W3_0'], a0);
geo['220_3-2W3_0'] = new THREE.Geometry();
geo['220_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-2.55),
	new THREE.Vector3(5.6,1.2+hS1,-2.55),
	new THREE.Vector3(5.6,1.2+hS1,-4.1),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['220_3-2W3_0'] = new THREE.Line(geo['220_3-2W3_0'], a0);
geo['220_1-2W3_1'] = new THREE.Geometry();
geo['220_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-2.55),
	new THREE.Vector3(5.6,0.4+hS1,-2.55),
	new THREE.Vector3(5.6,0.4+hS1,-4.1),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['220_1-2W3_1'] = new THREE.Line(geo['220_1-2W3_1'], a0);
geo['220_2-2W3_1'] = new THREE.Geometry();
geo['220_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-2.55),
	new THREE.Vector3(5.6,0.8+hS1,-2.55),
	new THREE.Vector3(5.6,0.8+hS1,-4.1),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['220_2-2W3_1'] = new THREE.Line(geo['220_2-2W3_1'], a0);
geo['220_3-2W3_1'] = new THREE.Geometry();
geo['220_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-2.55),
	new THREE.Vector3(5.6,1.2+hS1,-2.55),
	new THREE.Vector3(5.6,1.2+hS1,-4.1),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['220_3-2W3_1'] = new THREE.Line(geo['220_3-2W3_1'], a0);
geo['220_2-2W3_2'] = new THREE.Geometry();
geo['220_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-2.55),
	new THREE.Vector3(5.6,0.8+hS1,-2.55),
	new THREE.Vector3(5.6,0.8+hS1,-4.1),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['220_2-2W3_2'] = new THREE.Line(geo['220_2-2W3_2'], a0);
geo['220_3-2W3_2'] = new THREE.Geometry();
geo['220_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-2.55),
	new THREE.Vector3(5.6,1.2+hS1,-2.55),
	new THREE.Vector3(5.6,1.2+hS1,-4.1),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['220_3-2W3_2'] = new THREE.Line(geo['220_3-2W3_2'], a0);
geo['220_3-2W3_3'] = new THREE.Geometry();
geo['220_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-2.55),
	new THREE.Vector3(5.6,1.2+hS1,-2.55),
	new THREE.Vector3(5.6,1.2+hS1,-4.1),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['220_3-2W3_3'] = new THREE.Line(geo['220_3-2W3_3'], a0);
geo['212_0-2W3_0'] = new THREE.Geometry();
geo['212_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-4.15),
	new THREE.Vector3(5.6,0+hS1,-4.15),
	new THREE.Vector3(5.6,0+hS1,-4.2),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['212_0-2W3_0'] = new THREE.Line(geo['212_0-2W3_0'], a0);
geo['212_1-2W3_0'] = new THREE.Geometry();
geo['212_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-4.15),
	new THREE.Vector3(5.6,0.4+hS1,-4.15),
	new THREE.Vector3(5.6,0.4+hS1,-4.2),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['212_1-2W3_0'] = new THREE.Line(geo['212_1-2W3_0'], a0);
geo['212_2-2W3_0'] = new THREE.Geometry();
geo['212_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-4.15),
	new THREE.Vector3(5.6,0.8+hS1,-4.15),
	new THREE.Vector3(5.6,0.8+hS1,-4.2),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['212_2-2W3_0'] = new THREE.Line(geo['212_2-2W3_0'], a0);
geo['212_3-2W3_0'] = new THREE.Geometry();
geo['212_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-4.15),
	new THREE.Vector3(5.6,1.2+hS1,-4.15),
	new THREE.Vector3(5.6,1.2+hS1,-4.2),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['212_3-2W3_0'] = new THREE.Line(geo['212_3-2W3_0'], a0);
geo['212_1-2W3_1'] = new THREE.Geometry();
geo['212_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-4.15),
	new THREE.Vector3(5.6,0.4+hS1,-4.15),
	new THREE.Vector3(5.6,0.4+hS1,-4.2),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['212_1-2W3_1'] = new THREE.Line(geo['212_1-2W3_1'], a0);
geo['212_2-2W3_1'] = new THREE.Geometry();
geo['212_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-4.15),
	new THREE.Vector3(5.6,0.8+hS1,-4.15),
	new THREE.Vector3(5.6,0.8+hS1,-4.2),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['212_2-2W3_1'] = new THREE.Line(geo['212_2-2W3_1'], a0);
geo['212_3-2W3_1'] = new THREE.Geometry();
geo['212_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-4.15),
	new THREE.Vector3(5.6,1.2+hS1,-4.15),
	new THREE.Vector3(5.6,1.2+hS1,-4.2),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['212_3-2W3_1'] = new THREE.Line(geo['212_3-2W3_1'], a0);
geo['212_2-2W3_2'] = new THREE.Geometry();
geo['212_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-4.15),
	new THREE.Vector3(5.6,0.8+hS1,-4.15),
	new THREE.Vector3(5.6,0.8+hS1,-4.2),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['212_2-2W3_2'] = new THREE.Line(geo['212_2-2W3_2'], a0);
geo['212_3-2W3_2'] = new THREE.Geometry();
geo['212_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-4.15),
	new THREE.Vector3(5.6,1.2+hS1,-4.15),
	new THREE.Vector3(5.6,1.2+hS1,-4.2),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['212_3-2W3_2'] = new THREE.Line(geo['212_3-2W3_2'], a0);
geo['212_3-2W3_3'] = new THREE.Geometry();
geo['212_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-4.15),
	new THREE.Vector3(5.6,1.2+hS1,-4.15),
	new THREE.Vector3(5.6,1.2+hS1,-4.2),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['212_3-2W3_3'] = new THREE.Line(geo['212_3-2W3_3'], a0);
geo['210_0-2W3_0'] = new THREE.Geometry();
geo['210_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-4.75),
	new THREE.Vector3(5.65,0+hS1,-4.75),
	new THREE.Vector3(5.65,0+hS1,-4.3),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['210_0-2W3_0'] = new THREE.Line(geo['210_0-2W3_0'], a0);
geo['210_1-2W3_0'] = new THREE.Geometry();
geo['210_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-4.75),
	new THREE.Vector3(5.65,0.4+hS1,-4.75),
	new THREE.Vector3(5.65,0.4+hS1,-4.3),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['210_1-2W3_0'] = new THREE.Line(geo['210_1-2W3_0'], a0);
geo['210_2-2W3_0'] = new THREE.Geometry();
geo['210_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-4.75),
	new THREE.Vector3(5.65,0.8+hS1,-4.75),
	new THREE.Vector3(5.65,0.8+hS1,-4.3),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['210_2-2W3_0'] = new THREE.Line(geo['210_2-2W3_0'], a0);
geo['210_3-2W3_0'] = new THREE.Geometry();
geo['210_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-4.75),
	new THREE.Vector3(5.65,1.2+hS1,-4.75),
	new THREE.Vector3(5.65,1.2+hS1,-4.3),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['210_3-2W3_0'] = new THREE.Line(geo['210_3-2W3_0'], a0);
geo['210_1-2W3_1'] = new THREE.Geometry();
geo['210_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-4.75),
	new THREE.Vector3(5.65,0.4+hS1,-4.75),
	new THREE.Vector3(5.65,0.4+hS1,-4.3),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['210_1-2W3_1'] = new THREE.Line(geo['210_1-2W3_1'], a0);
geo['210_2-2W3_1'] = new THREE.Geometry();
geo['210_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-4.75),
	new THREE.Vector3(5.65,0.8+hS1,-4.75),
	new THREE.Vector3(5.65,0.8+hS1,-4.3),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['210_2-2W3_1'] = new THREE.Line(geo['210_2-2W3_1'], a0);
geo['210_3-2W3_1'] = new THREE.Geometry();
geo['210_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-4.75),
	new THREE.Vector3(5.65,1.2+hS1,-4.75),
	new THREE.Vector3(5.65,1.2+hS1,-4.3),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['210_3-2W3_1'] = new THREE.Line(geo['210_3-2W3_1'], a0);
geo['210_2-2W3_2'] = new THREE.Geometry();
geo['210_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-4.75),
	new THREE.Vector3(5.65,0.8+hS1,-4.75),
	new THREE.Vector3(5.65,0.8+hS1,-4.3),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['210_2-2W3_2'] = new THREE.Line(geo['210_2-2W3_2'], a0);
geo['210_3-2W3_2'] = new THREE.Geometry();
geo['210_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-4.75),
	new THREE.Vector3(5.65,1.2+hS1,-4.75),
	new THREE.Vector3(5.65,1.2+hS1,-4.3),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['210_3-2W3_2'] = new THREE.Line(geo['210_3-2W3_2'], a0);
geo['210_3-2W3_3'] = new THREE.Geometry();
geo['210_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-4.75),
	new THREE.Vector3(5.65,1.2+hS1,-4.75),
	new THREE.Vector3(5.65,1.2+hS1,-4.3),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['210_3-2W3_3'] = new THREE.Line(geo['210_3-2W3_3'], a0);
geo['204_0-2W3_0'] = new THREE.Geometry();
geo['204_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-5.5),
	new THREE.Vector3(5.7,0+hS1,-5.5),
	new THREE.Vector3(5.7,0+hS1,-4.4),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['204_0-2W3_0'] = new THREE.Line(geo['204_0-2W3_0'], a0);
geo['204_1-2W3_0'] = new THREE.Geometry();
geo['204_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-5.5),
	new THREE.Vector3(5.7,0.4+hS1,-5.5),
	new THREE.Vector3(5.7,0.4+hS1,-4.4),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['204_1-2W3_0'] = new THREE.Line(geo['204_1-2W3_0'], a0);
geo['204_2-2W3_0'] = new THREE.Geometry();
geo['204_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-5.5),
	new THREE.Vector3(5.7,0.8+hS1,-5.5),
	new THREE.Vector3(5.7,0.8+hS1,-4.4),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['204_2-2W3_0'] = new THREE.Line(geo['204_2-2W3_0'], a0);
geo['204_3-2W3_0'] = new THREE.Geometry();
geo['204_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-5.5),
	new THREE.Vector3(5.7,1.2+hS1,-5.5),
	new THREE.Vector3(5.7,1.2+hS1,-4.4),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['204_3-2W3_0'] = new THREE.Line(geo['204_3-2W3_0'], a0);
geo['204_1-2W3_1'] = new THREE.Geometry();
geo['204_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-5.5),
	new THREE.Vector3(5.7,0.4+hS1,-5.5),
	new THREE.Vector3(5.7,0.4+hS1,-4.4),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['204_1-2W3_1'] = new THREE.Line(geo['204_1-2W3_1'], a0);
geo['204_2-2W3_1'] = new THREE.Geometry();
geo['204_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-5.5),
	new THREE.Vector3(5.7,0.8+hS1,-5.5),
	new THREE.Vector3(5.7,0.8+hS1,-4.4),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['204_2-2W3_1'] = new THREE.Line(geo['204_2-2W3_1'], a0);
geo['204_3-2W3_1'] = new THREE.Geometry();
geo['204_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-5.5),
	new THREE.Vector3(5.7,1.2+hS1,-5.5),
	new THREE.Vector3(5.7,1.2+hS1,-4.4),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['204_3-2W3_1'] = new THREE.Line(geo['204_3-2W3_1'], a0);
geo['204_2-2W3_2'] = new THREE.Geometry();
geo['204_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-5.5),
	new THREE.Vector3(5.7,0.8+hS1,-5.5),
	new THREE.Vector3(5.7,0.8+hS1,-4.4),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['204_2-2W3_2'] = new THREE.Line(geo['204_2-2W3_2'], a0);
geo['204_3-2W3_2'] = new THREE.Geometry();
geo['204_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-5.5),
	new THREE.Vector3(5.7,1.2+hS1,-5.5),
	new THREE.Vector3(5.7,1.2+hS1,-4.4),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['204_3-2W3_2'] = new THREE.Line(geo['204_3-2W3_2'], a0);
geo['204_3-2W3_3'] = new THREE.Geometry();
geo['204_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-5.5),
	new THREE.Vector3(5.7,1.2+hS1,-5.5),
	new THREE.Vector3(5.7,1.2+hS1,-4.4),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['204_3-2W3_3'] = new THREE.Line(geo['204_3-2W3_3'], a0);
geo['202_0-2W3_0'] = new THREE.Geometry();
geo['202_0-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0+hS1,-7.0),
	new THREE.Vector3(5.75,0+hS1,-7.0),
	new THREE.Vector3(5.75,0+hS1,-4.5),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['202_0-2W3_0'] = new THREE.Line(geo['202_0-2W3_0'], a0);
geo['202_1-2W3_0'] = new THREE.Geometry();
geo['202_1-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-7.0),
	new THREE.Vector3(5.75,0.4+hS1,-7.0),
	new THREE.Vector3(5.75,0.4+hS1,-4.5),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['202_1-2W3_0'] = new THREE.Line(geo['202_1-2W3_0'], a0);
geo['202_2-2W3_0'] = new THREE.Geometry();
geo['202_2-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-7.0),
	new THREE.Vector3(5.75,0.8+hS1,-7.0),
	new THREE.Vector3(5.75,0.8+hS1,-4.5),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['202_2-2W3_0'] = new THREE.Line(geo['202_2-2W3_0'], a0);
geo['202_3-2W3_0'] = new THREE.Geometry();
geo['202_3-2W3_0'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-7.0),
	new THREE.Vector3(5.75,1.2+hS1,-7.0),
	new THREE.Vector3(5.75,1.2+hS1,-4.5),
	new THREE.Vector3(6.5,0+hS1,-4.2)
); line['202_3-2W3_0'] = new THREE.Line(geo['202_3-2W3_0'], a0);
geo['202_1-2W3_1'] = new THREE.Geometry();
geo['202_1-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.4+hS1,-7.0),
	new THREE.Vector3(5.75,0.4+hS1,-7.0),
	new THREE.Vector3(5.75,0.4+hS1,-4.5),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['202_1-2W3_1'] = new THREE.Line(geo['202_1-2W3_1'], a0);
geo['202_2-2W3_1'] = new THREE.Geometry();
geo['202_2-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-7.0),
	new THREE.Vector3(5.75,0.8+hS1,-7.0),
	new THREE.Vector3(5.75,0.8+hS1,-4.5),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['202_2-2W3_1'] = new THREE.Line(geo['202_2-2W3_1'], a0);
geo['202_3-2W3_1'] = new THREE.Geometry();
geo['202_3-2W3_1'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-7.0),
	new THREE.Vector3(5.75,1.2+hS1,-7.0),
	new THREE.Vector3(5.75,1.2+hS1,-4.5),
	new THREE.Vector3(6.5,0.4+hS1,-4.2)
); line['202_3-2W3_1'] = new THREE.Line(geo['202_3-2W3_1'], a0);
geo['202_2-2W3_2'] = new THREE.Geometry();
geo['202_2-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,0.8+hS1,-7.0),
	new THREE.Vector3(5.75,0.8+hS1,-7.0),
	new THREE.Vector3(5.75,0.8+hS1,-4.5),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['202_2-2W3_2'] = new THREE.Line(geo['202_2-2W3_2'], a0);
geo['202_3-2W3_2'] = new THREE.Geometry();
geo['202_3-2W3_2'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-7.0),
	new THREE.Vector3(5.75,1.2+hS1,-7.0),
	new THREE.Vector3(5.75,1.2+hS1,-4.5),
	new THREE.Vector3(6.5,0.8+hS1,-4.2)
); line['202_3-2W3_2'] = new THREE.Line(geo['202_3-2W3_2'], a0);
geo['202_3-2W3_3'] = new THREE.Geometry();
geo['202_3-2W3_3'].vertices.push(
	new THREE.Vector3(4.9,1.2+hS1,-7.0),
	new THREE.Vector3(5.75,1.2+hS1,-7.0),
	new THREE.Vector3(5.75,1.2+hS1,-4.5),
	new THREE.Vector3(6.5,1.2+hS1,-4.2)
); line['202_3-2W3_3'] = new THREE.Line(geo['202_3-2W3_3'], a0);

geo['345_0-3W2_0'] = new THREE.Geometry();
geo['345_0-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,3.5),
	new THREE.Vector3(8.55,0+hS2,3.5),
	new THREE.Vector3(8.55,0+hS2,-1.8),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['345_0-3W2_0'] = new THREE.Line(geo['345_0-3W2_0'], a0);
geo['345_1-3W2_0'] = new THREE.Geometry();
geo['345_1-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,3.5),
	new THREE.Vector3(8.55,0.4+hS2,3.5),
	new THREE.Vector3(8.55,0.4+hS2,-1.8),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['345_1-3W2_0'] = new THREE.Line(geo['345_1-3W2_0'], a0);
geo['345_2-3W2_0'] = new THREE.Geometry();
geo['345_2-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,3.5),
	new THREE.Vector3(8.55,0.8+hS2,3.5),
	new THREE.Vector3(8.55,0.8+hS2,-1.8),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['345_2-3W2_0'] = new THREE.Line(geo['345_2-3W2_0'], a0);
geo['345_3-3W2_0'] = new THREE.Geometry();
geo['345_3-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,3.5),
	new THREE.Vector3(8.55,1.2+hS2,3.5),
	new THREE.Vector3(8.55,1.2+hS2,-1.8),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['345_3-3W2_0'] = new THREE.Line(geo['345_3-3W2_0'], a0);
geo['345_1-3W2_1'] = new THREE.Geometry();
geo['345_1-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,3.5),
	new THREE.Vector3(8.55,0.4+hS2,3.5),
	new THREE.Vector3(8.55,0.4+hS2,-1.8),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['345_1-3W2_1'] = new THREE.Line(geo['345_1-3W2_1'], a0);
geo['345_2-3W2_1'] = new THREE.Geometry();
geo['345_2-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,3.5),
	new THREE.Vector3(8.55,0.8+hS2,3.5),
	new THREE.Vector3(8.55,0.8+hS2,-1.8),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['345_2-3W2_1'] = new THREE.Line(geo['345_2-3W2_1'], a0);
geo['345_3-3W2_1'] = new THREE.Geometry();
geo['345_3-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,3.5),
	new THREE.Vector3(8.55,1.2+hS2,3.5),
	new THREE.Vector3(8.55,1.2+hS2,-1.8),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['345_3-3W2_1'] = new THREE.Line(geo['345_3-3W2_1'], a0);
geo['345_2-3W2_2'] = new THREE.Geometry();
geo['345_2-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,3.5),
	new THREE.Vector3(8.55,0.8+hS2,3.5),
	new THREE.Vector3(8.55,0.8+hS2,-1.8),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['345_2-3W2_2'] = new THREE.Line(geo['345_2-3W2_2'], a0);
geo['345_3-3W2_2'] = new THREE.Geometry();
geo['345_3-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,3.5),
	new THREE.Vector3(8.55,1.2+hS2,3.5),
	new THREE.Vector3(8.55,1.2+hS2,-1.8),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['345_3-3W2_2'] = new THREE.Line(geo['345_3-3W2_2'], a0);
geo['345_3-3W2_3'] = new THREE.Geometry();
geo['345_3-3W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,3.5),
	new THREE.Vector3(8.55,1.2+hS2,3.5),
	new THREE.Vector3(8.55,1.2+hS2,-1.8),
	new THREE.Vector3(8.0,1.2+hS2,-2.4)
); line['345_3-3W2_3'] = new THREE.Line(geo['345_3-3W2_3'], a0);
geo['343_0-3W2_0'] = new THREE.Geometry();
geo['343_0-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,2.6),
	new THREE.Vector3(8.6,0+hS2,2.6),
	new THREE.Vector3(8.6,0+hS2,-1.9),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['343_0-3W2_0'] = new THREE.Line(geo['343_0-3W2_0'], a0);
geo['343_1-3W2_0'] = new THREE.Geometry();
geo['343_1-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,2.6),
	new THREE.Vector3(8.6,0.4+hS2,2.6),
	new THREE.Vector3(8.6,0.4+hS2,-1.9),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['343_1-3W2_0'] = new THREE.Line(geo['343_1-3W2_0'], a0);
geo['343_2-3W2_0'] = new THREE.Geometry();
geo['343_2-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,2.6),
	new THREE.Vector3(8.6,0.8+hS2,2.6),
	new THREE.Vector3(8.6,0.8+hS2,-1.9),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['343_2-3W2_0'] = new THREE.Line(geo['343_2-3W2_0'], a0);
geo['343_3-3W2_0'] = new THREE.Geometry();
geo['343_3-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,2.6),
	new THREE.Vector3(8.6,1.2+hS2,2.6),
	new THREE.Vector3(8.6,1.2+hS2,-1.9),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['343_3-3W2_0'] = new THREE.Line(geo['343_3-3W2_0'], a0);
geo['343_1-3W2_1'] = new THREE.Geometry();
geo['343_1-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,2.6),
	new THREE.Vector3(8.6,0.4+hS2,2.6),
	new THREE.Vector3(8.6,0.4+hS2,-1.9),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['343_1-3W2_1'] = new THREE.Line(geo['343_1-3W2_1'], a0);
geo['343_2-3W2_1'] = new THREE.Geometry();
geo['343_2-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,2.6),
	new THREE.Vector3(8.6,0.8+hS2,2.6),
	new THREE.Vector3(8.6,0.8+hS2,-1.9),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['343_2-3W2_1'] = new THREE.Line(geo['343_2-3W2_1'], a0);
geo['343_3-3W2_1'] = new THREE.Geometry();
geo['343_3-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,2.6),
	new THREE.Vector3(8.6,1.2+hS2,2.6),
	new THREE.Vector3(8.6,1.2+hS2,-1.9),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['343_3-3W2_1'] = new THREE.Line(geo['343_3-3W2_1'], a0);
geo['343_2-3W2_2'] = new THREE.Geometry();
geo['343_2-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,2.6),
	new THREE.Vector3(8.6,0.8+hS2,2.6),
	new THREE.Vector3(8.6,0.8+hS2,-1.9),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['343_2-3W2_2'] = new THREE.Line(geo['343_2-3W2_2'], a0);
geo['343_3-3W2_2'] = new THREE.Geometry();
geo['343_3-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,2.6),
	new THREE.Vector3(8.6,1.2+hS2,2.6),
	new THREE.Vector3(8.6,1.2+hS2,-1.9),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['343_3-3W2_2'] = new THREE.Line(geo['343_3-3W2_2'], a0);
geo['343_3-3W2_3'] = new THREE.Geometry();
geo['343_3-3W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,2.6),
	new THREE.Vector3(8.6,1.2+hS2,2.6),
	new THREE.Vector3(8.6,1.2+hS2,-1.9),
	new THREE.Vector3(8.0,1.2+hS2,-2.4)
); line['343_3-3W2_3'] = new THREE.Line(geo['343_3-3W2_3'], a0);
geo['337_0-3W2_0'] = new THREE.Geometry();
geo['337_0-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,1.7),
	new THREE.Vector3(8.65,0+hS2,1.7),
	new THREE.Vector3(8.65,0+hS2,-2.0),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['337_0-3W2_0'] = new THREE.Line(geo['337_0-3W2_0'], a0);
geo['337_1-3W2_0'] = new THREE.Geometry();
geo['337_1-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,1.7),
	new THREE.Vector3(8.65,0.4+hS2,1.7),
	new THREE.Vector3(8.65,0.4+hS2,-2.0),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['337_1-3W2_0'] = new THREE.Line(geo['337_1-3W2_0'], a0);
geo['337_2-3W2_0'] = new THREE.Geometry();
geo['337_2-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,1.7),
	new THREE.Vector3(8.65,0.8+hS2,1.7),
	new THREE.Vector3(8.65,0.8+hS2,-2.0),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['337_2-3W2_0'] = new THREE.Line(geo['337_2-3W2_0'], a0);
geo['337_3-3W2_0'] = new THREE.Geometry();
geo['337_3-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,1.7),
	new THREE.Vector3(8.65,1.2+hS2,1.7),
	new THREE.Vector3(8.65,1.2+hS2,-2.0),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['337_3-3W2_0'] = new THREE.Line(geo['337_3-3W2_0'], a0);
geo['337_1-3W2_1'] = new THREE.Geometry();
geo['337_1-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,1.7),
	new THREE.Vector3(8.65,0.4+hS2,1.7),
	new THREE.Vector3(8.65,0.4+hS2,-2.0),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['337_1-3W2_1'] = new THREE.Line(geo['337_1-3W2_1'], a0);
geo['337_2-3W2_1'] = new THREE.Geometry();
geo['337_2-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,1.7),
	new THREE.Vector3(8.65,0.8+hS2,1.7),
	new THREE.Vector3(8.65,0.8+hS2,-2.0),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['337_2-3W2_1'] = new THREE.Line(geo['337_2-3W2_1'], a0);
geo['337_3-3W2_1'] = new THREE.Geometry();
geo['337_3-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,1.7),
	new THREE.Vector3(8.65,1.2+hS2,1.7),
	new THREE.Vector3(8.65,1.2+hS2,-2.0),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['337_3-3W2_1'] = new THREE.Line(geo['337_3-3W2_1'], a0);
geo['337_2-3W2_2'] = new THREE.Geometry();
geo['337_2-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,1.7),
	new THREE.Vector3(8.65,0.8+hS2,1.7),
	new THREE.Vector3(8.65,0.8+hS2,-2.0),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['337_2-3W2_2'] = new THREE.Line(geo['337_2-3W2_2'], a0);
geo['337_3-3W2_2'] = new THREE.Geometry();
geo['337_3-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,1.7),
	new THREE.Vector3(8.65,1.2+hS2,1.7),
	new THREE.Vector3(8.65,1.2+hS2,-2.0),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['337_3-3W2_2'] = new THREE.Line(geo['337_3-3W2_2'], a0);
geo['337_3-3W2_3'] = new THREE.Geometry();
geo['337_3-3W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,1.7),
	new THREE.Vector3(8.65,1.2+hS2,1.7),
	new THREE.Vector3(8.65,1.2+hS2,-2.0),
	new THREE.Vector3(8.0,1.2+hS2,-2.4)
); line['337_3-3W2_3'] = new THREE.Line(geo['337_3-3W2_3'], a0);
geo['335_0-3W2_0'] = new THREE.Geometry();
geo['335_0-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,0.9),
	new THREE.Vector3(8.7,0+hS2,0.9),
	new THREE.Vector3(8.7,0+hS2,-2.1),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['335_0-3W2_0'] = new THREE.Line(geo['335_0-3W2_0'], a0);
geo['335_1-3W2_0'] = new THREE.Geometry();
geo['335_1-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,0.9),
	new THREE.Vector3(8.7,0.4+hS2,0.9),
	new THREE.Vector3(8.7,0.4+hS2,-2.1),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['335_1-3W2_0'] = new THREE.Line(geo['335_1-3W2_0'], a0);
geo['335_2-3W2_0'] = new THREE.Geometry();
geo['335_2-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,0.9),
	new THREE.Vector3(8.7,0.8+hS2,0.9),
	new THREE.Vector3(8.7,0.8+hS2,-2.1),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['335_2-3W2_0'] = new THREE.Line(geo['335_2-3W2_0'], a0);
geo['335_3-3W2_0'] = new THREE.Geometry();
geo['335_3-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,0.9),
	new THREE.Vector3(8.7,1.2+hS2,0.9),
	new THREE.Vector3(8.7,1.2+hS2,-2.1),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['335_3-3W2_0'] = new THREE.Line(geo['335_3-3W2_0'], a0);
geo['335_1-3W2_1'] = new THREE.Geometry();
geo['335_1-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,0.9),
	new THREE.Vector3(8.7,0.4+hS2,0.9),
	new THREE.Vector3(8.7,0.4+hS2,-2.1),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['335_1-3W2_1'] = new THREE.Line(geo['335_1-3W2_1'], a0);
geo['335_2-3W2_1'] = new THREE.Geometry();
geo['335_2-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,0.9),
	new THREE.Vector3(8.7,0.8+hS2,0.9),
	new THREE.Vector3(8.7,0.8+hS2,-2.1),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['335_2-3W2_1'] = new THREE.Line(geo['335_2-3W2_1'], a0);
geo['335_3-3W2_1'] = new THREE.Geometry();
geo['335_3-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,0.9),
	new THREE.Vector3(8.7,1.2+hS2,0.9),
	new THREE.Vector3(8.7,1.2+hS2,-2.1),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['335_3-3W2_1'] = new THREE.Line(geo['335_3-3W2_1'], a0);
geo['335_2-3W2_2'] = new THREE.Geometry();
geo['335_2-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,0.9),
	new THREE.Vector3(8.7,0.8+hS2,0.9),
	new THREE.Vector3(8.7,0.8+hS2,-2.1),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['335_2-3W2_2'] = new THREE.Line(geo['335_2-3W2_2'], a0);
geo['335_3-3W2_2'] = new THREE.Geometry();
geo['335_3-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,0.9),
	new THREE.Vector3(8.7,1.2+hS2,0.9),
	new THREE.Vector3(8.7,1.2+hS2,-2.1),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['335_3-3W2_2'] = new THREE.Line(geo['335_3-3W2_2'], a0);
geo['335_3-3W2_3'] = new THREE.Geometry();
geo['335_3-3W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,0.9),
	new THREE.Vector3(8.7,1.2+hS2,0.9),
	new THREE.Vector3(8.7,1.2+hS2,-2.1),
	new THREE.Vector3(8.0,1.2+hS2,-2.4)
); line['335_3-3W2_3'] = new THREE.Line(geo['335_3-3W2_3'], a0);
geo['333_0-3W2_0'] = new THREE.Geometry();
geo['333_0-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,0.1),
	new THREE.Vector3(8.75,0+hS2,0.1),
	new THREE.Vector3(8.75,0+hS2,-2.2),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['333_0-3W2_0'] = new THREE.Line(geo['333_0-3W2_0'], a0);
geo['333_1-3W2_0'] = new THREE.Geometry();
geo['333_1-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,0.1),
	new THREE.Vector3(8.75,0.4+hS2,0.1),
	new THREE.Vector3(8.75,0.4+hS2,-2.2),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['333_1-3W2_0'] = new THREE.Line(geo['333_1-3W2_0'], a0);
geo['333_2-3W2_0'] = new THREE.Geometry();
geo['333_2-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,0.1),
	new THREE.Vector3(8.75,0.8+hS2,0.1),
	new THREE.Vector3(8.75,0.8+hS2,-2.2),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['333_2-3W2_0'] = new THREE.Line(geo['333_2-3W2_0'], a0);
geo['333_3-3W2_0'] = new THREE.Geometry();
geo['333_3-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,0.1),
	new THREE.Vector3(8.75,1.2+hS2,0.1),
	new THREE.Vector3(8.75,1.2+hS2,-2.2),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['333_3-3W2_0'] = new THREE.Line(geo['333_3-3W2_0'], a0);
geo['333_1-3W2_1'] = new THREE.Geometry();
geo['333_1-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,0.1),
	new THREE.Vector3(8.75,0.4+hS2,0.1),
	new THREE.Vector3(8.75,0.4+hS2,-2.2),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['333_1-3W2_1'] = new THREE.Line(geo['333_1-3W2_1'], a0);
geo['333_2-3W2_1'] = new THREE.Geometry();
geo['333_2-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,0.1),
	new THREE.Vector3(8.75,0.8+hS2,0.1),
	new THREE.Vector3(8.75,0.8+hS2,-2.2),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['333_2-3W2_1'] = new THREE.Line(geo['333_2-3W2_1'], a0);
geo['333_3-3W2_1'] = new THREE.Geometry();
geo['333_3-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,0.1),
	new THREE.Vector3(8.75,1.2+hS2,0.1),
	new THREE.Vector3(8.75,1.2+hS2,-2.2),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['333_3-3W2_1'] = new THREE.Line(geo['333_3-3W2_1'], a0);
geo['333_2-3W2_2'] = new THREE.Geometry();
geo['333_2-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,0.1),
	new THREE.Vector3(8.75,0.8+hS2,0.1),
	new THREE.Vector3(8.75,0.8+hS2,-2.2),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['333_2-3W2_2'] = new THREE.Line(geo['333_2-3W2_2'], a0);
geo['333_3-3W2_2'] = new THREE.Geometry();
geo['333_3-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,0.1),
	new THREE.Vector3(8.75,1.2+hS2,0.1),
	new THREE.Vector3(8.75,1.2+hS2,-2.2),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['333_3-3W2_2'] = new THREE.Line(geo['333_3-3W2_2'], a0);
geo['333_3-3W2_3'] = new THREE.Geometry();
geo['333_3-3W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,0.1),
	new THREE.Vector3(8.75,1.2+hS2,0.1),
	new THREE.Vector3(8.75,1.2+hS2,-2.2),
	new THREE.Vector3(8.0,1.2+hS2,-2.4)
); line['333_3-3W2_3'] = new THREE.Line(geo['333_3-3W2_3'], a0);
geo['325_0-3W2_0'] = new THREE.Geometry();
geo['325_0-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,-1.5),
	new THREE.Vector3(8.8,0+hS2,-1.5),
	new THREE.Vector3(8.8,0+hS2,-2.3),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['325_0-3W2_0'] = new THREE.Line(geo['325_0-3W2_0'], a0);
geo['325_1-3W2_0'] = new THREE.Geometry();
geo['325_1-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-1.5),
	new THREE.Vector3(8.8,0.4+hS2,-1.5),
	new THREE.Vector3(8.8,0.4+hS2,-2.3),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['325_1-3W2_0'] = new THREE.Line(geo['325_1-3W2_0'], a0);
geo['325_2-3W2_0'] = new THREE.Geometry();
geo['325_2-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-1.5),
	new THREE.Vector3(8.8,0.8+hS2,-1.5),
	new THREE.Vector3(8.8,0.8+hS2,-2.3),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['325_2-3W2_0'] = new THREE.Line(geo['325_2-3W2_0'], a0);
geo['325_3-3W2_0'] = new THREE.Geometry();
geo['325_3-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-1.5),
	new THREE.Vector3(8.8,1.2+hS2,-1.5),
	new THREE.Vector3(8.8,1.2+hS2,-2.3),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['325_3-3W2_0'] = new THREE.Line(geo['325_3-3W2_0'], a0);
geo['325_1-3W2_1'] = new THREE.Geometry();
geo['325_1-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-1.5),
	new THREE.Vector3(8.8,0.4+hS2,-1.5),
	new THREE.Vector3(8.8,0.4+hS2,-2.3),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['325_1-3W2_1'] = new THREE.Line(geo['325_1-3W2_1'], a0);
geo['325_2-3W2_1'] = new THREE.Geometry();
geo['325_2-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-1.5),
	new THREE.Vector3(8.8,0.8+hS2,-1.5),
	new THREE.Vector3(8.8,0.8+hS2,-2.3),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['325_2-3W2_1'] = new THREE.Line(geo['325_2-3W2_1'], a0);
geo['325_3-3W2_1'] = new THREE.Geometry();
geo['325_3-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-1.5),
	new THREE.Vector3(8.8,1.2+hS2,-1.5),
	new THREE.Vector3(8.8,1.2+hS2,-2.3),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['325_3-3W2_1'] = new THREE.Line(geo['325_3-3W2_1'], a0);
geo['325_2-3W2_2'] = new THREE.Geometry();
geo['325_2-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-1.5),
	new THREE.Vector3(8.8,0.8+hS2,-1.5),
	new THREE.Vector3(8.8,0.8+hS2,-2.3),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['325_2-3W2_2'] = new THREE.Line(geo['325_2-3W2_2'], a0);
geo['325_3-3W2_2'] = new THREE.Geometry();
geo['325_3-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-1.5),
	new THREE.Vector3(8.8,1.2+hS2,-1.5),
	new THREE.Vector3(8.8,1.2+hS2,-2.3),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['325_3-3W2_2'] = new THREE.Line(geo['325_3-3W2_2'], a0);
geo['325_3-3W2_3'] = new THREE.Geometry();
geo['325_3-3W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-1.5),
	new THREE.Vector3(8.8,1.2+hS2,-1.5),
	new THREE.Vector3(8.0,1.2+hS2,-2.4)
); line['325_3-3W2_3'] = new THREE.Line(geo['325_3-3W2_3'], a0);
geo['323_0-3W2_0'] = new THREE.Geometry();
geo['323_0-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,-2.4),
	new THREE.Vector3(8.7,0+hS2,-2.4),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['323_0-3W2_0'] = new THREE.Line(geo['323_0-3W2_0'], a0);
geo['323_1-3W2_0'] = new THREE.Geometry();
geo['323_1-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-2.4),
	new THREE.Vector3(8.7,0.4+hS2,-2.4),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['323_1-3W2_0'] = new THREE.Line(geo['323_1-3W2_0'], a0);
geo['323_2-3W2_0'] = new THREE.Geometry();
geo['323_2-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-2.4),
	new THREE.Vector3(8.7,0.8+hS2,-2.4),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['323_2-3W2_0'] = new THREE.Line(geo['323_2-3W2_0'], a0);
geo['323_3-3W2_0'] = new THREE.Geometry();
geo['323_3-3W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-2.4),
	new THREE.Vector3(8.7,1.2+hS2,-2.4),
	new THREE.Vector3(8.0,0+hS2,-2.4)
); line['323_3-3W2_0'] = new THREE.Line(geo['323_3-3W2_0'], a0);
geo['323_1-3W2_1'] = new THREE.Geometry();
geo['323_1-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-2.4),
	new THREE.Vector3(8.7,0.4+hS2,-2.4),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['323_1-3W2_1'] = new THREE.Line(geo['323_1-3W2_1'], a0);
geo['323_2-3W2_1'] = new THREE.Geometry();
geo['323_2-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-2.4),
	new THREE.Vector3(8.7,0.8+hS2,-2.4),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['323_2-3W2_1'] = new THREE.Line(geo['323_2-3W2_1'], a0);
geo['323_3-3W2_1'] = new THREE.Geometry();
geo['323_3-3W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-2.4),
	new THREE.Vector3(8.7,1.2+hS2,-2.4),
	new THREE.Vector3(8.0,0.4+hS2,-2.4)
); line['323_3-3W2_1'] = new THREE.Line(geo['323_3-3W2_1'], a0);
geo['323_2-3W2_2'] = new THREE.Geometry();
geo['323_2-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-2.4),
	new THREE.Vector3(8.7,0.8+hS2,-2.4),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['323_2-3W2_2'] = new THREE.Line(geo['323_2-3W2_2'], a0);
geo['323_3-3W2_2'] = new THREE.Geometry();
geo['323_3-3W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-2.4),
	new THREE.Vector3(8.7,1.2+hS2,-2.4),
	new THREE.Vector3(8.0,0.8+hS2,-2.4)
); line['323_3-3W2_2'] = new THREE.Line(geo['323_3-3W2_2'], a0);
geo['323_3-3W2_3'] = new THREE.Geometry();
geo['323_3-3W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-2.4),
	new THREE.Vector3(8.9,1.2+hS2,-2.4),
	new THREE.Vector3(8.9,0+hS2,-2.4),
	new THREE.Vector3(8.0,1.2+hS2,-2.4)
); line['323_3-3W2_3'] = new THREE.Line(geo['323_3-3W2_3'], a0);
geo['309_0-3W1_0'] = new THREE.Geometry();
geo['309_0-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,-6.7),
	new THREE.Vector3(8.75,0+hS2,-6.7),
	new THREE.Vector3(8.75,0+hS2,-4.4),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['309_0-3W1_0'] = new THREE.Line(geo['309_0-3W1_0'], a0);
geo['309_1-3W1_0'] = new THREE.Geometry();
geo['309_1-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-6.7),
	new THREE.Vector3(8.75,0.4+hS2,-6.7),
	new THREE.Vector3(8.75,0.4+hS2,-4.4),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['309_1-3W1_0'] = new THREE.Line(geo['309_1-3W1_0'], a0);
geo['309_2-3W1_0'] = new THREE.Geometry();
geo['309_2-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-6.7),
	new THREE.Vector3(8.75,0.8+hS2,-6.7),
	new THREE.Vector3(8.75,0.8+hS2,-4.4),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['309_2-3W1_0'] = new THREE.Line(geo['309_2-3W1_0'], a0);
geo['309_3-3W1_0'] = new THREE.Geometry();
geo['309_3-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-6.7),
	new THREE.Vector3(8.75,1.2+hS2,-6.7),
	new THREE.Vector3(8.75,1.2+hS2,-4.4),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['309_3-3W1_0'] = new THREE.Line(geo['309_3-3W1_0'], a0);
geo['309_1-3W1_1'] = new THREE.Geometry();
geo['309_1-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-6.7),
	new THREE.Vector3(8.75,0.4+hS2,-6.7),
	new THREE.Vector3(8.75,0.4+hS2,-4.4),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['309_1-3W1_1'] = new THREE.Line(geo['309_1-3W1_1'], a0);
geo['309_2-3W1_1'] = new THREE.Geometry();
geo['309_2-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-6.7),
	new THREE.Vector3(8.75,0.8+hS2,-6.7),
	new THREE.Vector3(8.75,0.8+hS2,-4.4),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['309_2-3W1_1'] = new THREE.Line(geo['309_2-3W1_1'], a0);
geo['309_3-3W1_1'] = new THREE.Geometry();
geo['309_3-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-6.7),
	new THREE.Vector3(8.75,1.2+hS2,-6.7),
	new THREE.Vector3(8.75,1.2+hS2,-4.4),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['309_3-3W1_1'] = new THREE.Line(geo['309_3-3W1_1'], a0);
geo['309_2-3W1_2'] = new THREE.Geometry();
geo['309_2-3W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-6.7),
	new THREE.Vector3(8.75,0.8+hS2,-6.7),
	new THREE.Vector3(8.75,0.8+hS2,-4.4),
	new THREE.Vector3(8.0,0.8+hS2,-4.2)
); line['309_2-3W1_2'] = new THREE.Line(geo['309_2-3W1_2'], a0);
geo['309_3-3W1_2'] = new THREE.Geometry();
geo['309_3-3W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-6.7),
	new THREE.Vector3(8.75,1.2+hS2,-6.7),
	new THREE.Vector3(8.75,1.2+hS2,-4.4),
	new THREE.Vector3(8.0,0.8+hS2,-4.2)
); line['309_3-3W1_2'] = new THREE.Line(geo['309_3-3W1_2'], a0);
geo['309_3-3W1_3'] = new THREE.Geometry();
geo['309_3-3W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-6.7),
	new THREE.Vector3(8.75,1.2+hS2,-6.7),
	new THREE.Vector3(8.75,1.2+hS2,-4.4),
	new THREE.Vector3(8.0,1.2+hS2,-4.2)
); line['309_3-3W1_3'] = new THREE.Line(geo['309_3-3W1_3'], a0);
geo['317_0-3W1_0'] = new THREE.Geometry();
geo['317_0-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,-5.1),
	new THREE.Vector3(8.8,0+hS2,-5.1),
	new THREE.Vector3(8.8,0+hS2,-4.3),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['317_0-3W1_0'] = new THREE.Line(geo['317_0-3W1_0'], a0);
geo['317_1-3W1_0'] = new THREE.Geometry();
geo['317_1-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-5.1),
	new THREE.Vector3(8.8,0.4+hS2,-5.1),
	new THREE.Vector3(8.8,0.4+hS2,-4.3),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['317_1-3W1_0'] = new THREE.Line(geo['317_1-3W1_0'], a0);
geo['317_2-3W1_0'] = new THREE.Geometry();
geo['317_2-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-5.1),
	new THREE.Vector3(8.8,0.8+hS2,-5.1),
	new THREE.Vector3(8.8,0.8+hS2,-4.3),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['317_2-3W1_0'] = new THREE.Line(geo['317_2-3W1_0'], a0);
geo['317_3-3W1_0'] = new THREE.Geometry();
geo['317_3-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-5.1),
	new THREE.Vector3(8.8,1.2+hS2,-5.1),
	new THREE.Vector3(8.8,1.2+hS2,-4.3),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['317_3-3W1_0'] = new THREE.Line(geo['317_3-3W1_0'], a0);
geo['317_1-3W1_1'] = new THREE.Geometry();
geo['317_1-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-5.1),
	new THREE.Vector3(8.8,0.4+hS2,-5.1),
	new THREE.Vector3(8.8,0.4+hS2,-4.3),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['317_1-3W1_1'] = new THREE.Line(geo['317_1-3W1_1'], a0);
geo['317_2-3W1_1'] = new THREE.Geometry();
geo['317_2-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-5.1),
	new THREE.Vector3(8.8,0.8+hS2,-5.1),
	new THREE.Vector3(8.8,0.8+hS2,-4.3),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['317_2-3W1_1'] = new THREE.Line(geo['317_2-3W1_1'], a0);
geo['317_3-3W1_1'] = new THREE.Geometry();
geo['317_3-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-5.1),
	new THREE.Vector3(8.8,1.2+hS2,-5.1),
	new THREE.Vector3(8.8,1.2+hS2,-4.3),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['317_3-3W1_1'] = new THREE.Line(geo['317_3-3W1_1'], a0);
geo['317_2-3W1_2'] = new THREE.Geometry();
geo['317_2-3W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-5.1),
	new THREE.Vector3(8.8,0.8+hS2,-5.1),
	new THREE.Vector3(8.8,0.8+hS2,-4.3),
	new THREE.Vector3(8.0,0.8+hS2,-4.2)
); line['317_2-3W1_2'] = new THREE.Line(geo['317_2-3W1_2'], a0);
geo['317_3-3W1_2'] = new THREE.Geometry();
geo['317_3-3W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-5.1),
	new THREE.Vector3(8.8,1.2+hS2,-5.1),
	new THREE.Vector3(8.8,1.2+hS2,-4.3),
	new THREE.Vector3(8.0,0.8+hS2,-4.2)
); line['317_3-3W1_2'] = new THREE.Line(geo['317_3-3W1_2'], a0);
geo['317_3-3W1_3'] = new THREE.Geometry();
geo['317_3-3W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-5.1),
	new THREE.Vector3(8.8,1.2+hS2,-5.1),
	new THREE.Vector3(8.8,1.2+hS2,-4.3),
	new THREE.Vector3(8.0,1.2+hS2,-4.2)
); line['317_3-3W1_3'] = new THREE.Line(geo['317_3-3W1_3'], a0);
geo['319_0-3W1_0'] = new THREE.Geometry();
geo['319_0-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS2,-4.2),
	new THREE.Vector3(8.7,0+hS2,-4.2),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['319_0-3W1_0'] = new THREE.Line(geo['319_0-3W1_0'], a0);
geo['319_1-3W1_0'] = new THREE.Geometry();
geo['319_1-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-4.2),
	new THREE.Vector3(8.7,0.4+hS2,-4.2),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['319_1-3W1_0'] = new THREE.Line(geo['319_1-3W1_0'], a0);
geo['319_2-3W1_0'] = new THREE.Geometry();
geo['319_2-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-4.2),
	new THREE.Vector3(8.7,0.8+hS2,-4.2),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['319_2-3W1_0'] = new THREE.Line(geo['319_2-3W1_0'], a0);
geo['319_3-3W1_0'] = new THREE.Geometry();
geo['319_3-3W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-4.2),
	new THREE.Vector3(8.7,1.2+hS2,-4.2),
	new THREE.Vector3(8.0,0+hS2,-4.2)
); line['319_3-3W1_0'] = new THREE.Line(geo['319_3-3W1_0'], a0);
geo['319_1-3W1_1'] = new THREE.Geometry();
geo['319_1-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS2,-4.2),
	new THREE.Vector3(8.7,0.4+hS2,-4.2),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['319_1-3W1_1'] = new THREE.Line(geo['319_1-3W1_1'], a0);
geo['319_2-3W1_1'] = new THREE.Geometry();
geo['319_2-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-4.2),
	new THREE.Vector3(8.7,0.8+hS2,-4.2),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['319_2-3W1_1'] = new THREE.Line(geo['319_2-3W1_1'], a0);
geo['319_3-3W1_1'] = new THREE.Geometry();
geo['319_3-3W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-4.2),
	new THREE.Vector3(8.7,1.2+hS2,-4.2),
	new THREE.Vector3(8.0,0.4+hS2,-4.2)
); line['319_3-3W1_1'] = new THREE.Line(geo['319_3-3W1_1'], a0);
geo['319_2-3W1_2'] = new THREE.Geometry();
geo['319_2-3W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS2,-4.2),
	new THREE.Vector3(8.7,0.8+hS2,-4.2),
	new THREE.Vector3(8.0,0.8+hS2,-4.2)
); line['319_2-3W1_2'] = new THREE.Line(geo['319_2-3W1_2'], a0);
geo['319_3-3W1_2'] = new THREE.Geometry();
geo['319_3-3W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-4.2),
	new THREE.Vector3(8.7,1.2+hS2,-4.2),
	new THREE.Vector3(8.0,0.8+hS2,-4.2)
); line['319_3-3W1_2'] = new THREE.Line(geo['319_3-3W1_2'], a0);
geo['319_3-3W1_3'] = new THREE.Geometry();
geo['319_3-3W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS2,-4.2),
	new THREE.Vector3(8.7,1.2+hS2,-4.2),
	new THREE.Vector3(8.0,1.2+hS2,-4.2)
); line['319_3-3W1_3'] = new THREE.Line(geo['319_3-3W1_3'], a0);

geo['145_0-1W2_0'] = new THREE.Geometry();
geo['145_0-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,3.5),
	new THREE.Vector3(8.6,0+hAU,3.5),
	new THREE.Vector3(8.6,0+hAU,-1.9),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['145_0-1W2_0'] = new THREE.Line(geo['145_0-1W2_0'], a0);
geo['145_1-1W2_0'] = new THREE.Geometry();
geo['145_1-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,3.5),
	new THREE.Vector3(8.6,0.4+hAU,3.5),
	new THREE.Vector3(8.6,0.4+hAU,-1.9),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['145_1-1W2_0'] = new THREE.Line(geo['145_1-1W2_0'], a0);
geo['145_2-1W2_0'] = new THREE.Geometry();
geo['145_2-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,3.5),
	new THREE.Vector3(8.6,0.8+hAU,3.5),
	new THREE.Vector3(8.6,0.8+hAU,-1.9),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['145_2-1W2_0'] = new THREE.Line(geo['145_2-1W2_0'], a0);
geo['145_3-1W2_0'] = new THREE.Geometry();
geo['145_3-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,3.5),
	new THREE.Vector3(8.6,1.2+hAU,3.5),
	new THREE.Vector3(8.6,1.2+hAU,-1.9),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['145_3-1W2_0'] = new THREE.Line(geo['145_3-1W2_0'], a0);
geo['145_1-1W2_1'] = new THREE.Geometry();
geo['145_1-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,3.5),
	new THREE.Vector3(8.6,0.4+hAU,3.5),
	new THREE.Vector3(8.6,0.4+hAU,-1.9),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['145_1-1W2_1'] = new THREE.Line(geo['145_1-1W2_1'], a0);
geo['145_2-1W2_1'] = new THREE.Geometry();
geo['145_2-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,3.5),
	new THREE.Vector3(8.6,0.8+hAU,3.5),
	new THREE.Vector3(8.6,0.8+hAU,-1.9),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['145_2-1W2_1'] = new THREE.Line(geo['145_2-1W2_1'], a0);
geo['145_3-1W2_1'] = new THREE.Geometry();
geo['145_3-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,3.5),
	new THREE.Vector3(8.6,1.2+hAU,3.5),
	new THREE.Vector3(8.6,1.2+hAU,-1.9),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['145_3-1W2_1'] = new THREE.Line(geo['145_3-1W2_1'], a0);
geo['145_2-1W2_2'] = new THREE.Geometry();
geo['145_2-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,3.5),
	new THREE.Vector3(8.6,0.8+hAU,3.5),
	new THREE.Vector3(8.6,0.8+hAU,-1.9),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['145_2-1W2_2'] = new THREE.Line(geo['145_2-1W2_2'], a0);
geo['145_3-1W2_2'] = new THREE.Geometry();
geo['145_3-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,3.5),
	new THREE.Vector3(8.6,1.2+hAU,3.5),
	new THREE.Vector3(8.6,1.2+hAU,-1.9),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['145_3-1W2_2'] = new THREE.Line(geo['145_3-1W2_2'], a0);
geo['145_3-1W2_3'] = new THREE.Geometry();
geo['145_3-1W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,3.5),
	new THREE.Vector3(8.6,1.2+hAU,3.5),
	new THREE.Vector3(8.6,1.2+hAU,-1.9),
	new THREE.Vector3(8.0,1.2+hAU,-2.4)
); line['145_3-1W2_3'] = new THREE.Line(geo['145_3-1W2_3'], a0);
geo['143_0-1W2_0'] = new THREE.Geometry();
geo['143_0-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,2.6),
	new THREE.Vector3(8.65,0+hAU,2.6),
	new THREE.Vector3(8.65,0+hAU,-2.0),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['143_0-1W2_0'] = new THREE.Line(geo['143_0-1W2_0'], a0);
geo['143_1-1W2_0'] = new THREE.Geometry();
geo['143_1-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,2.6),
	new THREE.Vector3(8.65,0.4+hAU,2.6),
	new THREE.Vector3(8.65,0.4+hAU,-2.0),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['143_1-1W2_0'] = new THREE.Line(geo['143_1-1W2_0'], a0);
geo['143_2-1W2_0'] = new THREE.Geometry();
geo['143_2-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,2.6),
	new THREE.Vector3(8.65,0.8+hAU,2.6),
	new THREE.Vector3(8.65,0.8+hAU,-2.0),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['143_2-1W2_0'] = new THREE.Line(geo['143_2-1W2_0'], a0);
geo['143_3-1W2_0'] = new THREE.Geometry();
geo['143_3-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,2.6),
	new THREE.Vector3(8.65,1.2+hAU,2.6),
	new THREE.Vector3(8.65,1.2+hAU,-2.0),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['143_3-1W2_0'] = new THREE.Line(geo['143_3-1W2_0'], a0);
geo['143_1-1W2_1'] = new THREE.Geometry();
geo['143_1-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,2.6),
	new THREE.Vector3(8.65,0.4+hAU,2.6),
	new THREE.Vector3(8.65,0.4+hAU,-2.0),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['143_1-1W2_1'] = new THREE.Line(geo['143_1-1W2_1'], a0);
geo['143_2-1W2_1'] = new THREE.Geometry();
geo['143_2-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,2.6),
	new THREE.Vector3(8.65,0.8+hAU,2.6),
	new THREE.Vector3(8.65,0.8+hAU,-2.0),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['143_2-1W2_1'] = new THREE.Line(geo['143_2-1W2_1'], a0);
geo['143_3-1W2_1'] = new THREE.Geometry();
geo['143_3-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,2.6),
	new THREE.Vector3(8.65,1.2+hAU,2.6),
	new THREE.Vector3(8.65,1.2+hAU,-2.0),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['143_3-1W2_1'] = new THREE.Line(geo['143_3-1W2_1'], a0);
geo['143_2-1W2_2'] = new THREE.Geometry();
geo['143_2-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,2.6),
	new THREE.Vector3(8.65,0.8+hAU,2.6),
	new THREE.Vector3(8.65,0.8+hAU,-2.0),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['143_2-1W2_2'] = new THREE.Line(geo['143_2-1W2_2'], a0);
geo['143_3-1W2_2'] = new THREE.Geometry();
geo['143_3-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,2.6),
	new THREE.Vector3(8.65,1.2+hAU,2.6),
	new THREE.Vector3(8.65,1.2+hAU,-2.0),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['143_3-1W2_2'] = new THREE.Line(geo['143_3-1W2_2'], a0);
geo['143_3-1W2_3'] = new THREE.Geometry();
geo['143_3-1W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,2.6),
	new THREE.Vector3(8.65,1.2+hAU,2.6),
	new THREE.Vector3(8.65,1.2+hAU,-2.0),
	new THREE.Vector3(8.0,1.2+hAU,-2.4)
); line['143_3-1W2_3'] = new THREE.Line(geo['143_3-1W2_3'], a0);
geo['135_0-1W2_0'] = new THREE.Geometry();
geo['135_0-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,1.0),
	new THREE.Vector3(8.7,0+hAU,1.0),
	new THREE.Vector3(8.7,0+hAU,-2.1),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['135_0-1W2_0'] = new THREE.Line(geo['135_0-1W2_0'], a0);
geo['135_1-1W2_0'] = new THREE.Geometry();
geo['135_1-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,1.0),
	new THREE.Vector3(8.7,0.4+hAU,1.0),
	new THREE.Vector3(8.7,0.4+hAU,-2.1),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['135_1-1W2_0'] = new THREE.Line(geo['135_1-1W2_0'], a0);
geo['135_2-1W2_0'] = new THREE.Geometry();
geo['135_2-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,1.0),
	new THREE.Vector3(8.7,0.8+hAU,1.0),
	new THREE.Vector3(8.7,0.8+hAU,-2.1),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['135_2-1W2_0'] = new THREE.Line(geo['135_2-1W2_0'], a0);
geo['135_3-1W2_0'] = new THREE.Geometry();
geo['135_3-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,1.0),
	new THREE.Vector3(8.7,1.2+hAU,1.0),
	new THREE.Vector3(8.7,1.2+hAU,-2.1),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['135_3-1W2_0'] = new THREE.Line(geo['135_3-1W2_0'], a0);
geo['135_1-1W2_1'] = new THREE.Geometry();
geo['135_1-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,1.0),
	new THREE.Vector3(8.7,0.4+hAU,1.0),
	new THREE.Vector3(8.7,0.4+hAU,-2.1),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['135_1-1W2_1'] = new THREE.Line(geo['135_1-1W2_1'], a0);
geo['135_2-1W2_1'] = new THREE.Geometry();
geo['135_2-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,1.0),
	new THREE.Vector3(8.7,0.8+hAU,1.0),
	new THREE.Vector3(8.7,0.8+hAU,-2.1),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['135_2-1W2_1'] = new THREE.Line(geo['135_2-1W2_1'], a0);
geo['135_3-1W2_1'] = new THREE.Geometry();
geo['135_3-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,1.0),
	new THREE.Vector3(8.7,1.2+hAU,1.0),
	new THREE.Vector3(8.7,1.2+hAU,-2.1),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['135_3-1W2_1'] = new THREE.Line(geo['135_3-1W2_1'], a0);
geo['135_2-1W2_2'] = new THREE.Geometry();
geo['135_2-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,1.0),
	new THREE.Vector3(8.7,0.8+hAU,1.0),
	new THREE.Vector3(8.7,0.8+hAU,-2.1),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['135_2-1W2_2'] = new THREE.Line(geo['135_2-1W2_2'], a0);
geo['135_3-1W2_2'] = new THREE.Geometry();
geo['135_3-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,1.0),
	new THREE.Vector3(8.7,1.2+hAU,1.0),
	new THREE.Vector3(8.7,1.2+hAU,-2.1),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['135_3-1W2_2'] = new THREE.Line(geo['135_3-1W2_2'], a0);
geo['135_3-1W2_3'] = new THREE.Geometry();
geo['135_3-1W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,1.0),
	new THREE.Vector3(8.7,1.2+hAU,1.0),
	new THREE.Vector3(8.7,1.2+hAU,-2.1),
	new THREE.Vector3(8.0,1.2+hAU,-2.4)
); line['135_3-1W2_3'] = new THREE.Line(geo['135_3-1W2_3'], a0);
geo['133_0-1W2_0'] = new THREE.Geometry();
geo['133_0-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,0.1),
	new THREE.Vector3(8.75,0+hAU,0.1),
	new THREE.Vector3(8.75,0+hAU,-2.2),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['133_0-1W2_0'] = new THREE.Line(geo['133_0-1W2_0'], a0);
geo['133_1-1W2_0'] = new THREE.Geometry();
geo['133_1-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,0.1),
	new THREE.Vector3(8.75,0.4+hAU,0.1),
	new THREE.Vector3(8.75,0.4+hAU,-2.2),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['133_1-1W2_0'] = new THREE.Line(geo['133_1-1W2_0'], a0);
geo['133_2-1W2_0'] = new THREE.Geometry();
geo['133_2-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,0.1),
	new THREE.Vector3(8.75,0.8+hAU,0.1),
	new THREE.Vector3(8.75,0.8+hAU,-2.2),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['133_2-1W2_0'] = new THREE.Line(geo['133_2-1W2_0'], a0);
geo['133_3-1W2_0'] = new THREE.Geometry();
geo['133_3-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,0.1),
	new THREE.Vector3(8.75,1.2+hAU,0.1),
	new THREE.Vector3(8.75,1.2+hAU,-2.2),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['133_3-1W2_0'] = new THREE.Line(geo['133_3-1W2_0'], a0);
geo['133_1-1W2_1'] = new THREE.Geometry();
geo['133_1-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,0.1),
	new THREE.Vector3(8.75,0.4+hAU,0.1),
	new THREE.Vector3(8.75,0.4+hAU,-2.2),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['133_1-1W2_1'] = new THREE.Line(geo['133_1-1W2_1'], a0);
geo['133_2-1W2_1'] = new THREE.Geometry();
geo['133_2-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,0.1),
	new THREE.Vector3(8.75,0.8+hAU,0.1),
	new THREE.Vector3(8.75,0.8+hAU,-2.2),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['133_2-1W2_1'] = new THREE.Line(geo['133_2-1W2_1'], a0);
geo['133_3-1W2_1'] = new THREE.Geometry();
geo['133_3-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,0.1),
	new THREE.Vector3(8.75,1.2+hAU,0.1),
	new THREE.Vector3(8.75,1.2+hAU,-2.2),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['133_3-1W2_1'] = new THREE.Line(geo['133_3-1W2_1'], a0);
geo['133_2-1W2_2'] = new THREE.Geometry();
geo['133_2-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,0.1),
	new THREE.Vector3(8.75,0.8+hAU,0.1),
	new THREE.Vector3(8.75,0.8+hAU,-2.2),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['133_2-1W2_2'] = new THREE.Line(geo['133_2-1W2_2'], a0);
geo['133_3-1W2_2'] = new THREE.Geometry();
geo['133_3-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,0.1),
	new THREE.Vector3(8.75,1.2+hAU,0.1),
	new THREE.Vector3(8.75,1.2+hAU,-2.2),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['133_3-1W2_2'] = new THREE.Line(geo['133_3-1W2_2'], a0);
geo['133_3-1W2_3'] = new THREE.Geometry();
geo['133_3-1W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,0.1),
	new THREE.Vector3(8.75,1.2+hAU,0.1),
	new THREE.Vector3(8.75,1.2+hAU,-2.2),
	new THREE.Vector3(8.0,1.2+hAU,-2.4)
); line['133_3-1W2_3'] = new THREE.Line(geo['133_3-1W2_3'], a0);
geo['125_0-1W2_0'] = new THREE.Geometry();
geo['125_0-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,-1.5),
	new THREE.Vector3(8.8,0+hAU,-1.5),
	new THREE.Vector3(8.8,0+hAU,-2.3),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['125_0-1W2_0'] = new THREE.Line(geo['125_0-1W2_0'], a0);
geo['125_1-1W2_0'] = new THREE.Geometry();
geo['125_1-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-1.5),
	new THREE.Vector3(8.8,0.4+hAU,-1.5),
	new THREE.Vector3(8.8,0.4+hAU,-2.3),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['125_1-1W2_0'] = new THREE.Line(geo['125_1-1W2_0'], a0);
geo['125_2-1W2_0'] = new THREE.Geometry();
geo['125_2-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-1.5),
	new THREE.Vector3(8.8,0.8+hAU,-1.5),
	new THREE.Vector3(8.8,0.8+hAU,-2.3),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['125_2-1W2_0'] = new THREE.Line(geo['125_2-1W2_0'], a0);
geo['125_3-1W2_0'] = new THREE.Geometry();
geo['125_3-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-1.5),
	new THREE.Vector3(8.8,1.2+hAU,-1.5),
	new THREE.Vector3(8.8,1.2+hAU,-2.3),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['125_3-1W2_0'] = new THREE.Line(geo['125_3-1W2_0'], a0);
geo['125_1-1W2_1'] = new THREE.Geometry();
geo['125_1-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-1.5),
	new THREE.Vector3(8.8,0.4+hAU,-1.5),
	new THREE.Vector3(8.8,0.4+hAU,-2.3),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['125_1-1W2_1'] = new THREE.Line(geo['125_1-1W2_1'], a0);
geo['125_2-1W2_1'] = new THREE.Geometry();
geo['125_2-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-1.5),
	new THREE.Vector3(8.8,0.8+hAU,-1.5),
	new THREE.Vector3(8.8,0.8+hAU,-2.3),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['125_2-1W2_1'] = new THREE.Line(geo['125_2-1W2_1'], a0);
geo['125_3-1W2_1'] = new THREE.Geometry();
geo['125_3-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-1.5),
	new THREE.Vector3(8.8,1.2+hAU,-1.5),
	new THREE.Vector3(8.8,1.2+hAU,-2.3),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['125_3-1W2_1'] = new THREE.Line(geo['125_3-1W2_1'], a0);
geo['125_2-1W2_2'] = new THREE.Geometry();
geo['125_2-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-1.5),
	new THREE.Vector3(8.8,0.8+hAU,-1.5),
	new THREE.Vector3(8.8,0.8+hAU,-2.3),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['125_2-1W2_2'] = new THREE.Line(geo['125_2-1W2_2'], a0);
geo['125_3-1W2_2'] = new THREE.Geometry();
geo['125_3-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-1.5),
	new THREE.Vector3(8.8,1.2+hAU,-1.5),
	new THREE.Vector3(8.8,1.2+hAU,-2.3),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['125_3-1W2_2'] = new THREE.Line(geo['125_3-1W2_2'], a0);
geo['125_3-1W2_3'] = new THREE.Geometry();
geo['125_3-1W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-1.5),
	new THREE.Vector3(8.8,1.2+hAU,-1.5),
	new THREE.Vector3(8.0,1.2+hAU,-2.4)
); line['125_3-1W2_3'] = new THREE.Line(geo['125_3-1W2_3'], a0);
geo['123_0-1W2_0'] = new THREE.Geometry();
geo['123_0-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,-2.4),
	new THREE.Vector3(8.7,0+hAU,-2.4),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['123_0-1W2_0'] = new THREE.Line(geo['123_0-1W2_0'], a0);
geo['123_1-1W2_0'] = new THREE.Geometry();
geo['123_1-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-2.4),
	new THREE.Vector3(8.7,0.4+hAU,-2.4),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['123_1-1W2_0'] = new THREE.Line(geo['123_1-1W2_0'], a0);
geo['123_2-1W2_0'] = new THREE.Geometry();
geo['123_2-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-2.4),
	new THREE.Vector3(8.7,0.8+hAU,-2.4),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['123_2-1W2_0'] = new THREE.Line(geo['123_2-1W2_0'], a0);
geo['123_3-1W2_0'] = new THREE.Geometry();
geo['123_3-1W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-2.4),
	new THREE.Vector3(8.7,1.2+hAU,-2.4),
	new THREE.Vector3(8.0,0+hAU,-2.4)
); line['123_3-1W2_0'] = new THREE.Line(geo['123_3-1W2_0'], a0);
geo['123_1-1W2_1'] = new THREE.Geometry();
geo['123_1-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-2.4),
	new THREE.Vector3(8.7,0.4+hAU,-2.4),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['123_1-1W2_1'] = new THREE.Line(geo['123_1-1W2_1'], a0);
geo['123_2-1W2_1'] = new THREE.Geometry();
geo['123_2-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-2.4),
	new THREE.Vector3(8.7,0.8+hAU,-2.4),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['123_2-1W2_1'] = new THREE.Line(geo['123_2-1W2_1'], a0);
geo['123_3-1W2_1'] = new THREE.Geometry();
geo['123_3-1W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-2.4),
	new THREE.Vector3(8.7,1.2+hAU,-2.4),
	new THREE.Vector3(8.0,0.4+hAU,-2.4)
); line['123_3-1W2_1'] = new THREE.Line(geo['123_3-1W2_1'], a0);
geo['123_2-1W2_2'] = new THREE.Geometry();
geo['123_2-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-2.4),
	new THREE.Vector3(8.7,0.8+hAU,-2.4),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['123_2-1W2_2'] = new THREE.Line(geo['123_2-1W2_2'], a0);
geo['123_3-1W2_2'] = new THREE.Geometry();
geo['123_3-1W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-2.4),
	new THREE.Vector3(8.7,1.2+hAU,-2.4),
	new THREE.Vector3(8.0,0.8+hAU,-2.4)
); line['123_3-1W2_2'] = new THREE.Line(geo['123_3-1W2_2'], a0);
geo['123_3-1W2_3'] = new THREE.Geometry();
geo['123_3-1W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-2.4),
	new THREE.Vector3(8.9,1.2+hAU,-2.4),
	new THREE.Vector3(8.9,0+hAU,-2.4),
	new THREE.Vector3(8.0,1.2+hAU,-2.4)
); line['123_3-1W2_3'] = new THREE.Line(geo['123_3-1W2_3'], a0);
geo['109_0-1W1_0'] = new THREE.Geometry();
geo['109_0-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,-6.7),
	new THREE.Vector3(8.75,0+hAU,-6.7),
	new THREE.Vector3(8.75,0+hAU,-4.4),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['109_0-1W1_0'] = new THREE.Line(geo['109_0-1W1_0'], a0);
geo['109_1-1W1_0'] = new THREE.Geometry();
geo['109_1-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-6.7),
	new THREE.Vector3(8.75,0.4+hAU,-6.7),
	new THREE.Vector3(8.75,0.4+hAU,-4.4),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['109_1-1W1_0'] = new THREE.Line(geo['109_1-1W1_0'], a0);
geo['109_2-1W1_0'] = new THREE.Geometry();
geo['109_2-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-6.7),
	new THREE.Vector3(8.75,0.8+hAU,-6.7),
	new THREE.Vector3(8.75,0.8+hAU,-4.4),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['109_2-1W1_0'] = new THREE.Line(geo['109_2-1W1_0'], a0);
geo['109_3-1W1_0'] = new THREE.Geometry();
geo['109_3-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-6.7),
	new THREE.Vector3(8.75,1.2+hAU,-6.7),
	new THREE.Vector3(8.75,1.2+hAU,-4.4),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['109_3-1W1_0'] = new THREE.Line(geo['109_3-1W1_0'], a0);
geo['109_1-1W1_1'] = new THREE.Geometry();
geo['109_1-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-6.7),
	new THREE.Vector3(8.75,0.4+hAU,-6.7),
	new THREE.Vector3(8.75,0.4+hAU,-4.4),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['109_1-1W1_1'] = new THREE.Line(geo['109_1-1W1_1'], a0);
geo['109_2-1W1_1'] = new THREE.Geometry();
geo['109_2-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-6.7),
	new THREE.Vector3(8.75,0.8+hAU,-6.7),
	new THREE.Vector3(8.75,0.8+hAU,-4.4),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['109_2-1W1_1'] = new THREE.Line(geo['109_2-1W1_1'], a0);
geo['109_3-1W1_1'] = new THREE.Geometry();
geo['109_3-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-6.7),
	new THREE.Vector3(8.75,1.2+hAU,-6.7),
	new THREE.Vector3(8.75,1.2+hAU,-4.4),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['109_3-1W1_1'] = new THREE.Line(geo['109_3-1W1_1'], a0);
geo['109_2-1W1_2'] = new THREE.Geometry();
geo['109_2-1W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-6.7),
	new THREE.Vector3(8.75,0.8+hAU,-6.7),
	new THREE.Vector3(8.75,0.8+hAU,-4.4),
	new THREE.Vector3(8.0,0.8+hAU,-4.2)
); line['109_2-1W1_2'] = new THREE.Line(geo['109_2-1W1_2'], a0);
geo['109_3-1W1_2'] = new THREE.Geometry();
geo['109_3-1W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-6.7),
	new THREE.Vector3(8.75,1.2+hAU,-6.7),
	new THREE.Vector3(8.75,1.2+hAU,-4.4),
	new THREE.Vector3(8.0,0.8+hAU,-4.2)
); line['109_3-1W1_2'] = new THREE.Line(geo['109_3-1W1_2'], a0);
geo['109_3-1W1_3'] = new THREE.Geometry();
geo['109_3-1W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-6.7),
	new THREE.Vector3(8.75,1.2+hAU,-6.7),
	new THREE.Vector3(8.75,1.2+hAU,-4.4),
	new THREE.Vector3(8.0,1.2+hAU,-4.2)
); line['109_3-1W1_3'] = new THREE.Line(geo['109_3-1W1_3'], a0);
geo['117_0-1W1_0'] = new THREE.Geometry();
geo['117_0-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,-5.1),
	new THREE.Vector3(8.8,0+hAU,-5.1),
	new THREE.Vector3(8.8,0+hAU,-4.3),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['117_0-1W1_0'] = new THREE.Line(geo['117_0-1W1_0'], a0);
geo['117_1-1W1_0'] = new THREE.Geometry();
geo['117_1-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-5.1),
	new THREE.Vector3(8.8,0.4+hAU,-5.1),
	new THREE.Vector3(8.8,0.4+hAU,-4.3),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['117_1-1W1_0'] = new THREE.Line(geo['117_1-1W1_0'], a0);
geo['117_2-1W1_0'] = new THREE.Geometry();
geo['117_2-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-5.1),
	new THREE.Vector3(8.8,0.8+hAU,-5.1),
	new THREE.Vector3(8.8,0.8+hAU,-4.3),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['117_2-1W1_0'] = new THREE.Line(geo['117_2-1W1_0'], a0);
geo['117_3-1W1_0'] = new THREE.Geometry();
geo['117_3-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-5.1),
	new THREE.Vector3(8.8,1.2+hAU,-5.1),
	new THREE.Vector3(8.8,1.2+hAU,-4.3),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['117_3-1W1_0'] = new THREE.Line(geo['117_3-1W1_0'], a0);
geo['117_1-1W1_1'] = new THREE.Geometry();
geo['117_1-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-5.1),
	new THREE.Vector3(8.8,0.4+hAU,-5.1),
	new THREE.Vector3(8.8,0.4+hAU,-4.3),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['117_1-1W1_1'] = new THREE.Line(geo['117_1-1W1_1'], a0);
geo['117_2-1W1_1'] = new THREE.Geometry();
geo['117_2-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-5.1),
	new THREE.Vector3(8.8,0.8+hAU,-5.1),
	new THREE.Vector3(8.8,0.8+hAU,-4.3),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['117_2-1W1_1'] = new THREE.Line(geo['117_2-1W1_1'], a0);
geo['117_3-1W1_1'] = new THREE.Geometry();
geo['117_3-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-5.1),
	new THREE.Vector3(8.8,1.2+hAU,-5.1),
	new THREE.Vector3(8.8,1.2+hAU,-4.3),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['117_3-1W1_1'] = new THREE.Line(geo['117_3-1W1_1'], a0);
geo['117_2-1W1_2'] = new THREE.Geometry();
geo['117_2-1W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-5.1),
	new THREE.Vector3(8.8,0.8+hAU,-5.1),
	new THREE.Vector3(8.8,0.8+hAU,-4.3),
	new THREE.Vector3(8.0,0.8+hAU,-4.2)
); line['117_2-1W1_2'] = new THREE.Line(geo['117_2-1W1_2'], a0);
geo['117_3-1W1_2'] = new THREE.Geometry();
geo['117_3-1W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-5.1),
	new THREE.Vector3(8.8,1.2+hAU,-5.1),
	new THREE.Vector3(8.8,1.2+hAU,-4.3),
	new THREE.Vector3(8.0,0.8+hAU,-4.2)
); line['117_3-1W1_2'] = new THREE.Line(geo['117_3-1W1_2'], a0);
geo['117_3-1W1_3'] = new THREE.Geometry();
geo['117_3-1W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-5.1),
	new THREE.Vector3(8.8,1.2+hAU,-5.1),
	new THREE.Vector3(8.8,1.2+hAU,-4.3),
	new THREE.Vector3(8.0,1.2+hAU,-4.2)
); line['117_3-1W1_3'] = new THREE.Line(geo['117_3-1W1_3'], a0);
geo['119_0-1W1_0'] = new THREE.Geometry();
geo['119_0-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hAU,-4.2),
	new THREE.Vector3(8.7,0+hAU,-4.2),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['119_0-1W1_0'] = new THREE.Line(geo['119_0-1W1_0'], a0);
geo['119_1-1W1_0'] = new THREE.Geometry();
geo['119_1-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-4.2),
	new THREE.Vector3(8.7,0.4+hAU,-4.2),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['119_1-1W1_0'] = new THREE.Line(geo['119_1-1W1_0'], a0);
geo['119_2-1W1_0'] = new THREE.Geometry();
geo['119_2-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-4.2),
	new THREE.Vector3(8.7,0.8+hAU,-4.2),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['119_2-1W1_0'] = new THREE.Line(geo['119_2-1W1_0'], a0);
geo['119_3-1W1_0'] = new THREE.Geometry();
geo['119_3-1W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-4.2),
	new THREE.Vector3(8.7,1.2+hAU,-4.2),
	new THREE.Vector3(8.0,0+hAU,-4.2)
); line['119_3-1W1_0'] = new THREE.Line(geo['119_3-1W1_0'], a0);
geo['119_1-1W1_1'] = new THREE.Geometry();
geo['119_1-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hAU,-4.2),
	new THREE.Vector3(8.7,0.4+hAU,-4.2),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['119_1-1W1_1'] = new THREE.Line(geo['119_1-1W1_1'], a0);
geo['119_2-1W1_1'] = new THREE.Geometry();
geo['119_2-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-4.2),
	new THREE.Vector3(8.7,0.8+hAU,-4.2),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['119_2-1W1_1'] = new THREE.Line(geo['119_2-1W1_1'], a0);
geo['119_3-1W1_1'] = new THREE.Geometry();
geo['119_3-1W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-4.2),
	new THREE.Vector3(8.7,1.2+hAU,-4.2),
	new THREE.Vector3(8.0,0.4+hAU,-4.2)
); line['119_3-1W1_1'] = new THREE.Line(geo['119_3-1W1_1'], a0);
geo['119_2-1W1_2'] = new THREE.Geometry();
geo['119_2-1W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hAU,-4.2),
	new THREE.Vector3(8.7,0.8+hAU,-4.2),
	new THREE.Vector3(8.0,0.8+hAU,-4.2)
); line['119_2-1W1_2'] = new THREE.Line(geo['119_2-1W1_2'], a0);
geo['119_3-1W1_2'] = new THREE.Geometry();
geo['119_3-1W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-4.2),
	new THREE.Vector3(8.7,1.2+hAU,-4.2),
	new THREE.Vector3(8.0,0.8+hAU,-4.2)
); line['119_3-1W1_2'] = new THREE.Line(geo['119_3-1W1_2'], a0);
geo['119_3-1W1_3'] = new THREE.Geometry();
geo['119_3-1W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hAU,-4.2),
	new THREE.Vector3(8.7,1.2+hAU,-4.2),
	new THREE.Vector3(8.0,1.2+hAU,-4.2)
); line['119_3-1W1_3'] = new THREE.Line(geo['119_3-1W1_3'], a0);
geo['245_0-2W2_0'] = new THREE.Geometry();
geo['245_0-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,3.5),
	new THREE.Vector3(8.6,0+hS1,3.5),
	new THREE.Vector3(8.6,0+hS1,-1.9),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['245_0-2W2_0'] = new THREE.Line(geo['245_0-2W2_0'], a0);
geo['245_1-2W2_0'] = new THREE.Geometry();
geo['245_1-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,3.5),
	new THREE.Vector3(8.6,0.4+hS1,3.5),
	new THREE.Vector3(8.6,0.4+hS1,-1.9),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['245_1-2W2_0'] = new THREE.Line(geo['245_1-2W2_0'], a0);
geo['245_2-2W2_0'] = new THREE.Geometry();
geo['245_2-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,3.5),
	new THREE.Vector3(8.6,0.8+hS1,3.5),
	new THREE.Vector3(8.6,0.8+hS1,-1.9),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['245_2-2W2_0'] = new THREE.Line(geo['245_2-2W2_0'], a0);
geo['245_3-2W2_0'] = new THREE.Geometry();
geo['245_3-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,3.5),
	new THREE.Vector3(8.6,1.2+hS1,3.5),
	new THREE.Vector3(8.6,1.2+hS1,-1.9),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['245_3-2W2_0'] = new THREE.Line(geo['245_3-2W2_0'], a0);
geo['245_1-2W2_1'] = new THREE.Geometry();
geo['245_1-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,3.5),
	new THREE.Vector3(8.6,0.4+hS1,3.5),
	new THREE.Vector3(8.6,0.4+hS1,-1.9),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['245_1-2W2_1'] = new THREE.Line(geo['245_1-2W2_1'], a0);
geo['245_2-2W2_1'] = new THREE.Geometry();
geo['245_2-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,3.5),
	new THREE.Vector3(8.6,0.8+hS1,3.5),
	new THREE.Vector3(8.6,0.8+hS1,-1.9),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['245_2-2W2_1'] = new THREE.Line(geo['245_2-2W2_1'], a0);
geo['245_3-2W2_1'] = new THREE.Geometry();
geo['245_3-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,3.5),
	new THREE.Vector3(8.6,1.2+hS1,3.5),
	new THREE.Vector3(8.6,1.2+hS1,-1.9),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['245_3-2W2_1'] = new THREE.Line(geo['245_3-2W2_1'], a0);
geo['245_2-2W2_2'] = new THREE.Geometry();
geo['245_2-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,3.5),
	new THREE.Vector3(8.6,0.8+hS1,3.5),
	new THREE.Vector3(8.6,0.8+hS1,-1.9),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['245_2-2W2_2'] = new THREE.Line(geo['245_2-2W2_2'], a0);
geo['245_3-2W2_2'] = new THREE.Geometry();
geo['245_3-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,3.5),
	new THREE.Vector3(8.6,1.2+hS1,3.5),
	new THREE.Vector3(8.6,1.2+hS1,-1.9),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['245_3-2W2_2'] = new THREE.Line(geo['245_3-2W2_2'], a0);
geo['245_3-2W2_3'] = new THREE.Geometry();
geo['245_3-2W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,3.5),
	new THREE.Vector3(8.6,1.2+hS1,3.5),
	new THREE.Vector3(8.6,1.2+hS1,-1.9),
	new THREE.Vector3(8.0,1.2+hS1,-2.4)
); line['245_3-2W2_3'] = new THREE.Line(geo['245_3-2W2_3'], a0);
geo['243_0-2W2_0'] = new THREE.Geometry();
geo['243_0-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,2.6),
	new THREE.Vector3(8.65,0+hS1,2.6),
	new THREE.Vector3(8.65,0+hS1,-2.0),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['243_0-2W2_0'] = new THREE.Line(geo['243_0-2W2_0'], a0);
geo['243_1-2W2_0'] = new THREE.Geometry();
geo['243_1-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,2.6),
	new THREE.Vector3(8.65,0.4+hS1,2.6),
	new THREE.Vector3(8.65,0.4+hS1,-2.0),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['243_1-2W2_0'] = new THREE.Line(geo['243_1-2W2_0'], a0);
geo['243_2-2W2_0'] = new THREE.Geometry();
geo['243_2-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,2.6),
	new THREE.Vector3(8.65,0.8+hS1,2.6),
	new THREE.Vector3(8.65,0.8+hS1,-2.0),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['243_2-2W2_0'] = new THREE.Line(geo['243_2-2W2_0'], a0);
geo['243_3-2W2_0'] = new THREE.Geometry();
geo['243_3-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,2.6),
	new THREE.Vector3(8.65,1.2+hS1,2.6),
	new THREE.Vector3(8.65,1.2+hS1,-2.0),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['243_3-2W2_0'] = new THREE.Line(geo['243_3-2W2_0'], a0);
geo['243_1-2W2_1'] = new THREE.Geometry();
geo['243_1-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,2.6),
	new THREE.Vector3(8.65,0.4+hS1,2.6),
	new THREE.Vector3(8.65,0.4+hS1,-2.0),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['243_1-2W2_1'] = new THREE.Line(geo['243_1-2W2_1'], a0);
geo['243_2-2W2_1'] = new THREE.Geometry();
geo['243_2-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,2.6),
	new THREE.Vector3(8.65,0.8+hS1,2.6),
	new THREE.Vector3(8.65,0.8+hS1,-2.0),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['243_2-2W2_1'] = new THREE.Line(geo['243_2-2W2_1'], a0);
geo['243_3-2W2_1'] = new THREE.Geometry();
geo['243_3-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,2.6),
	new THREE.Vector3(8.65,1.2+hS1,2.6),
	new THREE.Vector3(8.65,1.2+hS1,-2.0),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['243_3-2W2_1'] = new THREE.Line(geo['243_3-2W2_1'], a0);
geo['243_2-2W2_2'] = new THREE.Geometry();
geo['243_2-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,2.6),
	new THREE.Vector3(8.65,0.8+hS1,2.6),
	new THREE.Vector3(8.65,0.8+hS1,-2.0),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['243_2-2W2_2'] = new THREE.Line(geo['243_2-2W2_2'], a0);
geo['243_3-2W2_2'] = new THREE.Geometry();
geo['243_3-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,2.6),
	new THREE.Vector3(8.65,1.2+hS1,2.6),
	new THREE.Vector3(8.65,1.2+hS1,-2.0),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['243_3-2W2_2'] = new THREE.Line(geo['243_3-2W2_2'], a0);
geo['243_3-2W2_3'] = new THREE.Geometry();
geo['243_3-2W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,2.6),
	new THREE.Vector3(8.65,1.2+hS1,2.6),
	new THREE.Vector3(8.65,1.2+hS1,-2.0),
	new THREE.Vector3(8.0,1.2+hS1,-2.4)
); line['243_3-2W2_3'] = new THREE.Line(geo['243_3-2W2_3'], a0);
geo['235_0-2W2_0'] = new THREE.Geometry();
geo['235_0-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,1.0),
	new THREE.Vector3(8.7,0+hS1,1.0),
	new THREE.Vector3(8.7,0+hS1,-2.1),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['235_0-2W2_0'] = new THREE.Line(geo['235_0-2W2_0'], a0);
geo['235_1-2W2_0'] = new THREE.Geometry();
geo['235_1-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,1.0),
	new THREE.Vector3(8.7,0.4+hS1,1.0),
	new THREE.Vector3(8.7,0.4+hS1,-2.1),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['235_1-2W2_0'] = new THREE.Line(geo['235_1-2W2_0'], a0);
geo['235_2-2W2_0'] = new THREE.Geometry();
geo['235_2-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,1.0),
	new THREE.Vector3(8.7,0.8+hS1,1.0),
	new THREE.Vector3(8.7,0.8+hS1,-2.1),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['235_2-2W2_0'] = new THREE.Line(geo['235_2-2W2_0'], a0);
geo['235_3-2W2_0'] = new THREE.Geometry();
geo['235_3-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,1.0),
	new THREE.Vector3(8.7,1.2+hS1,1.0),
	new THREE.Vector3(8.7,1.2+hS1,-2.1),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['235_3-2W2_0'] = new THREE.Line(geo['235_3-2W2_0'], a0);
geo['235_1-2W2_1'] = new THREE.Geometry();
geo['235_1-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,1.0),
	new THREE.Vector3(8.7,0.4+hS1,1.0),
	new THREE.Vector3(8.7,0.4+hS1,-2.1),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['235_1-2W2_1'] = new THREE.Line(geo['235_1-2W2_1'], a0);
geo['235_2-2W2_1'] = new THREE.Geometry();
geo['235_2-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,1.0),
	new THREE.Vector3(8.7,0.8+hS1,1.0),
	new THREE.Vector3(8.7,0.8+hS1,-2.1),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['235_2-2W2_1'] = new THREE.Line(geo['235_2-2W2_1'], a0);
geo['235_3-2W2_1'] = new THREE.Geometry();
geo['235_3-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,1.0),
	new THREE.Vector3(8.7,1.2+hS1,1.0),
	new THREE.Vector3(8.7,1.2+hS1,-2.1),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['235_3-2W2_1'] = new THREE.Line(geo['235_3-2W2_1'], a0);
geo['235_2-2W2_2'] = new THREE.Geometry();
geo['235_2-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,1.0),
	new THREE.Vector3(8.7,0.8+hS1,1.0),
	new THREE.Vector3(8.7,0.8+hS1,-2.1),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['235_2-2W2_2'] = new THREE.Line(geo['235_2-2W2_2'], a0);
geo['235_3-2W2_2'] = new THREE.Geometry();
geo['235_3-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,1.0),
	new THREE.Vector3(8.7,1.2+hS1,1.0),
	new THREE.Vector3(8.7,1.2+hS1,-2.1),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['235_3-2W2_2'] = new THREE.Line(geo['235_3-2W2_2'], a0);
geo['235_3-2W2_3'] = new THREE.Geometry();
geo['235_3-2W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,1.0),
	new THREE.Vector3(8.7,1.2+hS1,1.0),
	new THREE.Vector3(8.7,1.2+hS1,-2.1),
	new THREE.Vector3(8.0,1.2+hS1,-2.4)
); line['235_3-2W2_3'] = new THREE.Line(geo['235_3-2W2_3'], a0);
geo['233_0-2W2_0'] = new THREE.Geometry();
geo['233_0-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,0.1),
	new THREE.Vector3(8.75,0+hS1,0.1),
	new THREE.Vector3(8.75,0+hS1,-2.2),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['233_0-2W2_0'] = new THREE.Line(geo['233_0-2W2_0'], a0);
geo['233_1-2W2_0'] = new THREE.Geometry();
geo['233_1-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,0.1),
	new THREE.Vector3(8.75,0.4+hS1,0.1),
	new THREE.Vector3(8.75,0.4+hS1,-2.2),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['233_1-2W2_0'] = new THREE.Line(geo['233_1-2W2_0'], a0);
geo['233_2-2W2_0'] = new THREE.Geometry();
geo['233_2-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,0.1),
	new THREE.Vector3(8.75,0.8+hS1,0.1),
	new THREE.Vector3(8.75,0.8+hS1,-2.2),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['233_2-2W2_0'] = new THREE.Line(geo['233_2-2W2_0'], a0);
geo['233_3-2W2_0'] = new THREE.Geometry();
geo['233_3-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,0.1),
	new THREE.Vector3(8.75,1.2+hS1,0.1),
	new THREE.Vector3(8.75,1.2+hS1,-2.2),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['233_3-2W2_0'] = new THREE.Line(geo['233_3-2W2_0'], a0);
geo['233_1-2W2_1'] = new THREE.Geometry();
geo['233_1-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,0.1),
	new THREE.Vector3(8.75,0.4+hS1,0.1),
	new THREE.Vector3(8.75,0.4+hS1,-2.2),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['233_1-2W2_1'] = new THREE.Line(geo['233_1-2W2_1'], a0);
geo['233_2-2W2_1'] = new THREE.Geometry();
geo['233_2-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,0.1),
	new THREE.Vector3(8.75,0.8+hS1,0.1),
	new THREE.Vector3(8.75,0.8+hS1,-2.2),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['233_2-2W2_1'] = new THREE.Line(geo['233_2-2W2_1'], a0);
geo['233_3-2W2_1'] = new THREE.Geometry();
geo['233_3-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,0.1),
	new THREE.Vector3(8.75,1.2+hS1,0.1),
	new THREE.Vector3(8.75,1.2+hS1,-2.2),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['233_3-2W2_1'] = new THREE.Line(geo['233_3-2W2_1'], a0);
geo['233_2-2W2_2'] = new THREE.Geometry();
geo['233_2-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,0.1),
	new THREE.Vector3(8.75,0.8+hS1,0.1),
	new THREE.Vector3(8.75,0.8+hS1,-2.2),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['233_2-2W2_2'] = new THREE.Line(geo['233_2-2W2_2'], a0);
geo['233_3-2W2_2'] = new THREE.Geometry();
geo['233_3-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,0.1),
	new THREE.Vector3(8.75,1.2+hS1,0.1),
	new THREE.Vector3(8.75,1.2+hS1,-2.2),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['233_3-2W2_2'] = new THREE.Line(geo['233_3-2W2_2'], a0);
geo['233_3-2W2_3'] = new THREE.Geometry();
geo['233_3-2W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,0.1),
	new THREE.Vector3(8.75,1.2+hS1,0.1),
	new THREE.Vector3(8.75,1.2+hS1,-2.2),
	new THREE.Vector3(8.0,1.2+hS1,-2.4)
); line['233_3-2W2_3'] = new THREE.Line(geo['233_3-2W2_3'], a0);
geo['225_0-2W2_0'] = new THREE.Geometry();
geo['225_0-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,-1.5),
	new THREE.Vector3(8.8,0+hS1,-1.5),
	new THREE.Vector3(8.8,0+hS1,-2.3),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['225_0-2W2_0'] = new THREE.Line(geo['225_0-2W2_0'], a0);
geo['225_1-2W2_0'] = new THREE.Geometry();
geo['225_1-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-1.5),
	new THREE.Vector3(8.8,0.4+hS1,-1.5),
	new THREE.Vector3(8.8,0.4+hS1,-2.3),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['225_1-2W2_0'] = new THREE.Line(geo['225_1-2W2_0'], a0);
geo['225_2-2W2_0'] = new THREE.Geometry();
geo['225_2-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-1.5),
	new THREE.Vector3(8.8,0.8+hS1,-1.5),
	new THREE.Vector3(8.8,0.8+hS1,-2.3),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['225_2-2W2_0'] = new THREE.Line(geo['225_2-2W2_0'], a0);
geo['225_3-2W2_0'] = new THREE.Geometry();
geo['225_3-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-1.5),
	new THREE.Vector3(8.8,1.2+hS1,-1.5),
	new THREE.Vector3(8.8,1.2+hS1,-2.3),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['225_3-2W2_0'] = new THREE.Line(geo['225_3-2W2_0'], a0);
geo['225_1-2W2_1'] = new THREE.Geometry();
geo['225_1-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-1.5),
	new THREE.Vector3(8.8,0.4+hS1,-1.5),
	new THREE.Vector3(8.8,0.4+hS1,-2.3),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['225_1-2W2_1'] = new THREE.Line(geo['225_1-2W2_1'], a0);
geo['225_2-2W2_1'] = new THREE.Geometry();
geo['225_2-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-1.5),
	new THREE.Vector3(8.8,0.8+hS1,-1.5),
	new THREE.Vector3(8.8,0.8+hS1,-2.3),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['225_2-2W2_1'] = new THREE.Line(geo['225_2-2W2_1'], a0);
geo['225_3-2W2_1'] = new THREE.Geometry();
geo['225_3-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-1.5),
	new THREE.Vector3(8.8,1.2+hS1,-1.5),
	new THREE.Vector3(8.8,1.2+hS1,-2.3),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['225_3-2W2_1'] = new THREE.Line(geo['225_3-2W2_1'], a0);
geo['225_2-2W2_2'] = new THREE.Geometry();
geo['225_2-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-1.5),
	new THREE.Vector3(8.8,0.8+hS1,-1.5),
	new THREE.Vector3(8.8,0.8+hS1,-2.3),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['225_2-2W2_2'] = new THREE.Line(geo['225_2-2W2_2'], a0);
geo['225_3-2W2_2'] = new THREE.Geometry();
geo['225_3-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-1.5),
	new THREE.Vector3(8.8,1.2+hS1,-1.5),
	new THREE.Vector3(8.8,1.2+hS1,-2.3),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['225_3-2W2_2'] = new THREE.Line(geo['225_3-2W2_2'], a0);
geo['225_3-2W2_3'] = new THREE.Geometry();
geo['225_3-2W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-1.5),
	new THREE.Vector3(8.8,1.2+hS1,-1.5),
	new THREE.Vector3(8.0,1.2+hS1,-2.4)
); line['225_3-2W2_3'] = new THREE.Line(geo['225_3-2W2_3'], a0);
geo['223_0-2W2_0'] = new THREE.Geometry();
geo['223_0-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,-2.4),
	new THREE.Vector3(8.7,0+hS1,-2.4),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['223_0-2W2_0'] = new THREE.Line(geo['223_0-2W2_0'], a0);
geo['223_1-2W2_0'] = new THREE.Geometry();
geo['223_1-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-2.4),
	new THREE.Vector3(8.7,0.4+hS1,-2.4),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['223_1-2W2_0'] = new THREE.Line(geo['223_1-2W2_0'], a0);
geo['223_2-2W2_0'] = new THREE.Geometry();
geo['223_2-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-2.4),
	new THREE.Vector3(8.7,0.8+hS1,-2.4),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['223_2-2W2_0'] = new THREE.Line(geo['223_2-2W2_0'], a0);
geo['223_3-2W2_0'] = new THREE.Geometry();
geo['223_3-2W2_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-2.4),
	new THREE.Vector3(8.7,1.2+hS1,-2.4),
	new THREE.Vector3(8.0,0+hS1,-2.4)
); line['223_3-2W2_0'] = new THREE.Line(geo['223_3-2W2_0'], a0);
geo['223_1-2W2_1'] = new THREE.Geometry();
geo['223_1-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-2.4),
	new THREE.Vector3(8.7,0.4+hS1,-2.4),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['223_1-2W2_1'] = new THREE.Line(geo['223_1-2W2_1'], a0);
geo['223_2-2W2_1'] = new THREE.Geometry();
geo['223_2-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-2.4),
	new THREE.Vector3(8.7,0.8+hS1,-2.4),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['223_2-2W2_1'] = new THREE.Line(geo['223_2-2W2_1'], a0);
geo['223_3-2W2_1'] = new THREE.Geometry();
geo['223_3-2W2_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-2.4),
	new THREE.Vector3(8.7,1.2+hS1,-2.4),
	new THREE.Vector3(8.0,0.4+hS1,-2.4)
); line['223_3-2W2_1'] = new THREE.Line(geo['223_3-2W2_1'], a0);
geo['223_2-2W2_2'] = new THREE.Geometry();
geo['223_2-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-2.4),
	new THREE.Vector3(8.7,0.8+hS1,-2.4),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['223_2-2W2_2'] = new THREE.Line(geo['223_2-2W2_2'], a0);
geo['223_3-2W2_2'] = new THREE.Geometry();
geo['223_3-2W2_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-2.4),
	new THREE.Vector3(8.7,1.2+hS1,-2.4),
	new THREE.Vector3(8.0,0.8+hS1,-2.4)
); line['223_3-2W2_2'] = new THREE.Line(geo['223_3-2W2_2'], a0);
geo['223_3-2W2_3'] = new THREE.Geometry();
geo['223_3-2W2_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-2.4),
	new THREE.Vector3(8.9,1.2+hS1,-2.4),
	new THREE.Vector3(8.9,0+hS1,-2.4),
	new THREE.Vector3(8.0,1.2+hS1,-2.4)
); line['223_3-2W2_3'] = new THREE.Line(geo['223_3-2W2_3'], a0);
geo['209_0-2W1_0'] = new THREE.Geometry();
geo['209_0-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,-6.7),
	new THREE.Vector3(8.75,0+hS1,-6.7),
	new THREE.Vector3(8.75,0+hS1,-4.4),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['209_0-2W1_0'] = new THREE.Line(geo['209_0-2W1_0'], a0);
geo['209_1-2W1_0'] = new THREE.Geometry();
geo['209_1-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-6.7),
	new THREE.Vector3(8.75,0.4+hS1,-6.7),
	new THREE.Vector3(8.75,0.4+hS1,-4.4),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['209_1-2W1_0'] = new THREE.Line(geo['209_1-2W1_0'], a0);
geo['209_2-2W1_0'] = new THREE.Geometry();
geo['209_2-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-6.7),
	new THREE.Vector3(8.75,0.8+hS1,-6.7),
	new THREE.Vector3(8.75,0.8+hS1,-4.4),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['209_2-2W1_0'] = new THREE.Line(geo['209_2-2W1_0'], a0);
geo['209_3-2W1_0'] = new THREE.Geometry();
geo['209_3-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-6.7),
	new THREE.Vector3(8.75,1.2+hS1,-6.7),
	new THREE.Vector3(8.75,1.2+hS1,-4.4),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['209_3-2W1_0'] = new THREE.Line(geo['209_3-2W1_0'], a0);
geo['209_1-2W1_1'] = new THREE.Geometry();
geo['209_1-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-6.7),
	new THREE.Vector3(8.75,0.4+hS1,-6.7),
	new THREE.Vector3(8.75,0.4+hS1,-4.4),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['209_1-2W1_1'] = new THREE.Line(geo['209_1-2W1_1'], a0);
geo['209_2-2W1_1'] = new THREE.Geometry();
geo['209_2-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-6.7),
	new THREE.Vector3(8.75,0.8+hS1,-6.7),
	new THREE.Vector3(8.75,0.8+hS1,-4.4),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['209_2-2W1_1'] = new THREE.Line(geo['209_2-2W1_1'], a0);
geo['209_3-2W1_1'] = new THREE.Geometry();
geo['209_3-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-6.7),
	new THREE.Vector3(8.75,1.2+hS1,-6.7),
	new THREE.Vector3(8.75,1.2+hS1,-4.4),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['209_3-2W1_1'] = new THREE.Line(geo['209_3-2W1_1'], a0);
geo['209_2-2W1_2'] = new THREE.Geometry();
geo['209_2-2W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-6.7),
	new THREE.Vector3(8.75,0.8+hS1,-6.7),
	new THREE.Vector3(8.75,0.8+hS1,-4.4),
	new THREE.Vector3(8.0,0.8+hS1,-4.2)
); line['209_2-2W1_2'] = new THREE.Line(geo['209_2-2W1_2'], a0);
geo['209_3-2W1_2'] = new THREE.Geometry();
geo['209_3-2W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-6.7),
	new THREE.Vector3(8.75,1.2+hS1,-6.7),
	new THREE.Vector3(8.75,1.2+hS1,-4.4),
	new THREE.Vector3(8.0,0.8+hS1,-4.2)
); line['209_3-2W1_2'] = new THREE.Line(geo['209_3-2W1_2'], a0);
geo['209_3-2W1_3'] = new THREE.Geometry();
geo['209_3-2W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-6.7),
	new THREE.Vector3(8.75,1.2+hS1,-6.7),
	new THREE.Vector3(8.75,1.2+hS1,-4.4),
	new THREE.Vector3(8.0,1.2+hS1,-4.2)
); line['209_3-2W1_3'] = new THREE.Line(geo['209_3-2W1_3'], a0);
geo['217_0-2W1_0'] = new THREE.Geometry();
geo['217_0-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,-5.1),
	new THREE.Vector3(8.8,0+hS1,-5.1),
	new THREE.Vector3(8.8,0+hS1,-4.3),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['217_0-2W1_0'] = new THREE.Line(geo['217_0-2W1_0'], a0);
geo['217_1-2W1_0'] = new THREE.Geometry();
geo['217_1-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-5.1),
	new THREE.Vector3(8.8,0.4+hS1,-5.1),
	new THREE.Vector3(8.8,0.4+hS1,-4.3),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['217_1-2W1_0'] = new THREE.Line(geo['217_1-2W1_0'], a0);
geo['217_2-2W1_0'] = new THREE.Geometry();
geo['217_2-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-5.1),
	new THREE.Vector3(8.8,0.8+hS1,-5.1),
	new THREE.Vector3(8.8,0.8+hS1,-4.3),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['217_2-2W1_0'] = new THREE.Line(geo['217_2-2W1_0'], a0);
geo['217_3-2W1_0'] = new THREE.Geometry();
geo['217_3-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-5.1),
	new THREE.Vector3(8.8,1.2+hS1,-5.1),
	new THREE.Vector3(8.8,1.2+hS1,-4.3),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['217_3-2W1_0'] = new THREE.Line(geo['217_3-2W1_0'], a0);
geo['217_1-2W1_1'] = new THREE.Geometry();
geo['217_1-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-5.1),
	new THREE.Vector3(8.8,0.4+hS1,-5.1),
	new THREE.Vector3(8.8,0.4+hS1,-4.3),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['217_1-2W1_1'] = new THREE.Line(geo['217_1-2W1_1'], a0);
geo['217_2-2W1_1'] = new THREE.Geometry();
geo['217_2-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-5.1),
	new THREE.Vector3(8.8,0.8+hS1,-5.1),
	new THREE.Vector3(8.8,0.8+hS1,-4.3),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['217_2-2W1_1'] = new THREE.Line(geo['217_2-2W1_1'], a0);
geo['217_3-2W1_1'] = new THREE.Geometry();
geo['217_3-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-5.1),
	new THREE.Vector3(8.8,1.2+hS1,-5.1),
	new THREE.Vector3(8.8,1.2+hS1,-4.3),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['217_3-2W1_1'] = new THREE.Line(geo['217_3-2W1_1'], a0);
geo['217_2-2W1_2'] = new THREE.Geometry();
geo['217_2-2W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-5.1),
	new THREE.Vector3(8.8,0.8+hS1,-5.1),
	new THREE.Vector3(8.8,0.8+hS1,-4.3),
	new THREE.Vector3(8.0,0.8+hS1,-4.2)
); line['217_2-2W1_2'] = new THREE.Line(geo['217_2-2W1_2'], a0);
geo['217_3-2W1_2'] = new THREE.Geometry();
geo['217_3-2W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-5.1),
	new THREE.Vector3(8.8,1.2+hS1,-5.1),
	new THREE.Vector3(8.8,1.2+hS1,-4.3),
	new THREE.Vector3(8.0,0.8+hS1,-4.2)
); line['217_3-2W1_2'] = new THREE.Line(geo['217_3-2W1_2'], a0);
geo['217_3-2W1_3'] = new THREE.Geometry();
geo['217_3-2W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-5.1),
	new THREE.Vector3(8.8,1.2+hS1,-5.1),
	new THREE.Vector3(8.8,1.2+hS1,-4.3),
	new THREE.Vector3(8.0,1.2+hS1,-4.2)
); line['217_3-2W1_3'] = new THREE.Line(geo['217_3-2W1_3'], a0);
geo['219_0-2W1_0'] = new THREE.Geometry();
geo['219_0-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0+hS1,-4.2),
	new THREE.Vector3(8.7,0+hS1,-4.2),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['219_0-2W1_0'] = new THREE.Line(geo['219_0-2W1_0'], a0);
geo['219_1-2W1_0'] = new THREE.Geometry();
geo['219_1-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-4.2),
	new THREE.Vector3(8.7,0.4+hS1,-4.2),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['219_1-2W1_0'] = new THREE.Line(geo['219_1-2W1_0'], a0);
geo['219_2-2W1_0'] = new THREE.Geometry();
geo['219_2-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-4.2),
	new THREE.Vector3(8.7,0.8+hS1,-4.2),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['219_2-2W1_0'] = new THREE.Line(geo['219_2-2W1_0'], a0);
geo['219_3-2W1_0'] = new THREE.Geometry();
geo['219_3-2W1_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-4.2),
	new THREE.Vector3(8.7,1.2+hS1,-4.2),
	new THREE.Vector3(8.0,0+hS1,-4.2)
); line['219_3-2W1_0'] = new THREE.Line(geo['219_3-2W1_0'], a0);
geo['219_1-2W1_1'] = new THREE.Geometry();
geo['219_1-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-4.2),
	new THREE.Vector3(8.7,0.4+hS1,-4.2),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['219_1-2W1_1'] = new THREE.Line(geo['219_1-2W1_1'], a0);
geo['219_2-2W1_1'] = new THREE.Geometry();
geo['219_2-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-4.2),
	new THREE.Vector3(8.7,0.8+hS1,-4.2),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['219_2-2W1_1'] = new THREE.Line(geo['219_2-2W1_1'], a0);
geo['219_3-2W1_1'] = new THREE.Geometry();
geo['219_3-2W1_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-4.2),
	new THREE.Vector3(8.7,1.2+hS1,-4.2),
	new THREE.Vector3(8.0,0.4+hS1,-4.2)
); line['219_3-2W1_1'] = new THREE.Line(geo['219_3-2W1_1'], a0);
geo['219_2-2W1_2'] = new THREE.Geometry();
geo['219_2-2W1_2'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-4.2),
	new THREE.Vector3(8.7,0.8+hS1,-4.2),
	new THREE.Vector3(8.0,0.8+hS1,-4.2)
); line['219_2-2W1_2'] = new THREE.Line(geo['219_2-2W1_2'], a0);
geo['219_3-2W1_2'] = new THREE.Geometry();
geo['219_3-2W1_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-4.2),
	new THREE.Vector3(8.7,1.2+hS1,-4.2),
	new THREE.Vector3(8.0,0.8+hS1,-4.2)
); line['219_3-2W1_2'] = new THREE.Line(geo['219_3-2W1_2'], a0);
geo['219_3-2W1_3'] = new THREE.Geometry();
geo['219_3-2W1_3'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-4.2),
	new THREE.Vector3(8.7,1.2+hS1,-4.2),
	new THREE.Vector3(8.0,1.2+hS1,-4.2)
); line['219_3-2W1_3'] = new THREE.Line(geo['219_3-2W1_3'], a0);
geo['345_1-345_0'] = new THREE.Geometry();
geo['345_1-345_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,3.45),
 new THREE.Vector3(9.7,0.35+hS2,3.45-0.1),
 new THREE.Vector3(9.7,0.05+hS2,3.45-0.1),
 new THREE.Vector3(9.7,0+hS2,3.45)
); line['345_1-345_0'] = new THREE.Line(geo['345_1-345_0'], a0);
geo['345_2-345_1'] = new THREE.Geometry();
geo['345_2-345_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,3.45),
 new THREE.Vector3(9.7,0.75+hS2,3.45-0.1),
 new THREE.Vector3(9.7,0.45+hS2,3.45-0.1),
 new THREE.Vector3(9.7,0.4+hS2,3.45)
); line['345_2-345_1'] = new THREE.Line(geo['345_2-345_1'], a0);
geo['345_3-345_2'] = new THREE.Geometry();
geo['345_3-345_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,3.45),
 new THREE.Vector3(9.7,1.15+hS2,3.45-0.1),
 new THREE.Vector3(9.7,0.85+hS2,3.45-0.1),
 new THREE.Vector3(9.7,0.8+hS2,3.45)
); line['345_3-345_2'] = new THREE.Line(geo['345_3-345_2'], a0);
geo['345_2-345_0'] = new THREE.Geometry();
geo['345_2-345_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,3.45),
 new THREE.Vector3(9.7-0.1,0.75+hS2,3.45),
 new THREE.Vector3(9.7-0.1,0.05+hS2,3.45),
 new THREE.Vector3(9.7,0+hS2,3.45)
); line['345_2-345_0'] = new THREE.Line(geo['345_2-345_0'], a0);
geo['345_3-345_1'] = new THREE.Geometry();
geo['345_3-345_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,3.45),
 new THREE.Vector3(9.7+0.1,1.15+hS2,3.45),
 new THREE.Vector3(9.7+0.1,0.45+hS2,3.45),
 new THREE.Vector3(9.7,0.4+hS2,3.45)
); line['345_3-345_1'] = new THREE.Line(geo['345_3-345_1'], a0);
geo['345_3-345_0'] = new THREE.Geometry();
geo['345_3-345_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,3.45),
 new THREE.Vector3(9.7,1.2+hS2,3.45-0.2),
 new THREE.Vector3(9.7,0+hS2,3.45-0.2),
 new THREE.Vector3(9.7,0+hS2,3.45)
); line['345_3-345_0'] = new THREE.Line(geo['345_3-345_0'], a0);
geo['339_1-339_0'] = new THREE.Geometry();
geo['339_1-339_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,2.55),
 new THREE.Vector3(9.7,0.35+hS2,2.55-0.1),
 new THREE.Vector3(9.7,0.05+hS2,2.55-0.1),
 new THREE.Vector3(9.7,0+hS2,2.55)
); line['339_1-339_0'] = new THREE.Line(geo['339_1-339_0'], a0);
geo['339_2-339_1'] = new THREE.Geometry();
geo['339_2-339_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,2.55),
 new THREE.Vector3(9.7,0.75+hS2,2.55-0.1),
 new THREE.Vector3(9.7,0.45+hS2,2.55-0.1),
 new THREE.Vector3(9.7,0.4+hS2,2.55)
); line['339_2-339_1'] = new THREE.Line(geo['339_2-339_1'], a0);
geo['339_3-339_2'] = new THREE.Geometry();
geo['339_3-339_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,2.55),
 new THREE.Vector3(9.7,1.15+hS2,2.55-0.1),
 new THREE.Vector3(9.7,0.85+hS2,2.55-0.1),
 new THREE.Vector3(9.7,0.8+hS2,2.55)
); line['339_3-339_2'] = new THREE.Line(geo['339_3-339_2'], a0);
geo['339_2-339_0'] = new THREE.Geometry();
geo['339_2-339_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,2.55),
 new THREE.Vector3(9.7-0.1,0.75+hS2,2.55),
 new THREE.Vector3(9.7-0.1,0.05+hS2,2.55),
 new THREE.Vector3(9.7,0+hS2,2.55)
); line['339_2-339_0'] = new THREE.Line(geo['339_2-339_0'], a0);
geo['339_3-339_1'] = new THREE.Geometry();
geo['339_3-339_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,2.55),
 new THREE.Vector3(9.7+0.1,1.15+hS2,2.55),
 new THREE.Vector3(9.7+0.1,0.45+hS2,2.55),
 new THREE.Vector3(9.7,0.4+hS2,2.55)
); line['339_3-339_1'] = new THREE.Line(geo['339_3-339_1'], a0);
geo['339_3-339_0'] = new THREE.Geometry();
geo['339_3-339_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,2.55),
 new THREE.Vector3(9.7,1.2+hS2,2.55-0.2),
 new THREE.Vector3(9.7,0+hS2,2.55-0.2),
 new THREE.Vector3(9.7,0+hS2,2.55)
); line['339_3-339_0'] = new THREE.Line(geo['339_3-339_0'], a0);
geo['337_1-337_0'] = new THREE.Geometry();
geo['337_1-337_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,1.7),
 new THREE.Vector3(9.7,0.35+hS2,1.7-0.1),
 new THREE.Vector3(9.7,0.05+hS2,1.7-0.1),
 new THREE.Vector3(9.7,0+hS2,1.7)
); line['337_1-337_0'] = new THREE.Line(geo['337_1-337_0'], a0);
geo['337_2-337_1'] = new THREE.Geometry();
geo['337_2-337_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,1.7),
 new THREE.Vector3(9.7,0.75+hS2,1.7-0.1),
 new THREE.Vector3(9.7,0.45+hS2,1.7-0.1),
 new THREE.Vector3(9.7,0.4+hS2,1.7)
); line['337_2-337_1'] = new THREE.Line(geo['337_2-337_1'], a0);
geo['337_3-337_2'] = new THREE.Geometry();
geo['337_3-337_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,1.7),
 new THREE.Vector3(9.7,1.15+hS2,1.7-0.1),
 new THREE.Vector3(9.7,0.85+hS2,1.7-0.1),
 new THREE.Vector3(9.7,0.8+hS2,1.7)
); line['337_3-337_2'] = new THREE.Line(geo['337_3-337_2'], a0);
geo['337_2-337_0'] = new THREE.Geometry();
geo['337_2-337_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,1.7),
 new THREE.Vector3(9.7-0.1,0.75+hS2,1.7),
 new THREE.Vector3(9.7-0.1,0.05+hS2,1.7),
 new THREE.Vector3(9.7,0+hS2,1.7)
); line['337_2-337_0'] = new THREE.Line(geo['337_2-337_0'], a0);
geo['337_3-337_1'] = new THREE.Geometry();
geo['337_3-337_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,1.7),
 new THREE.Vector3(9.7+0.1,1.15+hS2,1.7),
 new THREE.Vector3(9.7+0.1,0.45+hS2,1.7),
 new THREE.Vector3(9.7,0.4+hS2,1.7)
); line['337_3-337_1'] = new THREE.Line(geo['337_3-337_1'], a0);
geo['337_3-337_0'] = new THREE.Geometry();
geo['337_3-337_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,1.7),
 new THREE.Vector3(9.7,1.2+hS2,1.7-0.2),
 new THREE.Vector3(9.7,0+hS2,1.7-0.2),
 new THREE.Vector3(9.7,0+hS2,1.7)
); line['337_3-337_0'] = new THREE.Line(geo['337_3-337_0'], a0);
geo['335_1-335_0'] = new THREE.Geometry();
geo['335_1-335_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,0.9),
 new THREE.Vector3(9.7,0.35+hS2,0.9-0.1),
 new THREE.Vector3(9.7,0.05+hS2,0.9-0.1),
 new THREE.Vector3(9.7,0+hS2,0.9)
); line['335_1-335_0'] = new THREE.Line(geo['335_1-335_0'], a0);
geo['335_2-335_1'] = new THREE.Geometry();
geo['335_2-335_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,0.9),
 new THREE.Vector3(9.7,0.75+hS2,0.9-0.1),
 new THREE.Vector3(9.7,0.45+hS2,0.9-0.1),
 new THREE.Vector3(9.7,0.4+hS2,0.9)
); line['335_2-335_1'] = new THREE.Line(geo['335_2-335_1'], a0);
geo['335_3-335_2'] = new THREE.Geometry();
geo['335_3-335_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,0.9),
 new THREE.Vector3(9.7,1.15+hS2,0.9-0.1),
 new THREE.Vector3(9.7,0.85+hS2,0.9-0.1),
 new THREE.Vector3(9.7,0.8+hS2,0.9)
); line['335_3-335_2'] = new THREE.Line(geo['335_3-335_2'], a0);
geo['335_2-335_0'] = new THREE.Geometry();
geo['335_2-335_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,0.9),
 new THREE.Vector3(9.7-0.1,0.75+hS2,0.9),
 new THREE.Vector3(9.7-0.1,0.05+hS2,0.9),
 new THREE.Vector3(9.7,0+hS2,0.9)
); line['335_2-335_0'] = new THREE.Line(geo['335_2-335_0'], a0);
geo['335_3-335_1'] = new THREE.Geometry();
geo['335_3-335_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,0.9),
 new THREE.Vector3(9.7+0.1,1.15+hS2,0.9),
 new THREE.Vector3(9.7+0.1,0.45+hS2,0.9),
 new THREE.Vector3(9.7,0.4+hS2,0.9)
); line['335_3-335_1'] = new THREE.Line(geo['335_3-335_1'], a0);
geo['335_3-335_0'] = new THREE.Geometry();
geo['335_3-335_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,0.9),
 new THREE.Vector3(9.7,1.2+hS2,0.9-0.2),
 new THREE.Vector3(9.7,0+hS2,0.9-0.2),
 new THREE.Vector3(9.7,0+hS2,0.9)
); line['335_3-335_0'] = new THREE.Line(geo['335_3-335_0'], a0);
geo['333_1-333_0'] = new THREE.Geometry();
geo['333_1-333_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,0.1),
 new THREE.Vector3(9.7,0.35+hS2,0.1-0.1),
 new THREE.Vector3(9.7,0.05+hS2,0.1-0.1),
 new THREE.Vector3(9.7,0+hS2,0.1)
); line['333_1-333_0'] = new THREE.Line(geo['333_1-333_0'], a0);
geo['333_2-333_1'] = new THREE.Geometry();
geo['333_2-333_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,0.1),
 new THREE.Vector3(9.7,0.75+hS2,0.1-0.1),
 new THREE.Vector3(9.7,0.45+hS2,0.1-0.1),
 new THREE.Vector3(9.7,0.4+hS2,0.1)
); line['333_2-333_1'] = new THREE.Line(geo['333_2-333_1'], a0);
geo['333_3-333_2'] = new THREE.Geometry();
geo['333_3-333_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,0.1),
 new THREE.Vector3(9.7,1.15+hS2,0.1-0.1),
 new THREE.Vector3(9.7,0.85+hS2,0.1-0.1),
 new THREE.Vector3(9.7,0.8+hS2,0.1)
); line['333_3-333_2'] = new THREE.Line(geo['333_3-333_2'], a0);
geo['333_2-333_0'] = new THREE.Geometry();
geo['333_2-333_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,0.1),
 new THREE.Vector3(9.7-0.1,0.75+hS2,0.1),
 new THREE.Vector3(9.7-0.1,0.05+hS2,0.1),
 new THREE.Vector3(9.7,0+hS2,0.1)
); line['333_2-333_0'] = new THREE.Line(geo['333_2-333_0'], a0);
geo['333_3-333_1'] = new THREE.Geometry();
geo['333_3-333_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,0.1),
 new THREE.Vector3(9.7+0.1,1.15+hS2,0.1),
 new THREE.Vector3(9.7+0.1,0.45+hS2,0.1),
 new THREE.Vector3(9.7,0.4+hS2,0.1)
); line['333_3-333_1'] = new THREE.Line(geo['333_3-333_1'], a0);
geo['333_3-333_0'] = new THREE.Geometry();
geo['333_3-333_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,0.1),
 new THREE.Vector3(9.7,1.2+hS2,0.1-0.2),
 new THREE.Vector3(9.7,0+hS2,0.1-0.2),
 new THREE.Vector3(9.7,0+hS2,0.1)
); line['333_3-333_0'] = new THREE.Line(geo['333_3-333_0'], a0);
geo['325_1-325_0'] = new THREE.Geometry();
geo['325_1-325_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,-1.5),
 new THREE.Vector3(9.7,0.35+hS2,-1.5-0.1),
 new THREE.Vector3(9.7,0.05+hS2,-1.5-0.1),
 new THREE.Vector3(9.7,0+hS2,-1.5)
); line['325_1-325_0'] = new THREE.Line(geo['325_1-325_0'], a0);
geo['325_2-325_1'] = new THREE.Geometry();
geo['325_2-325_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-1.5),
 new THREE.Vector3(9.7,0.75+hS2,-1.5-0.1),
 new THREE.Vector3(9.7,0.45+hS2,-1.5-0.1),
 new THREE.Vector3(9.7,0.4+hS2,-1.5)
); line['325_2-325_1'] = new THREE.Line(geo['325_2-325_1'], a0);
geo['325_3-325_2'] = new THREE.Geometry();
geo['325_3-325_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-1.5),
 new THREE.Vector3(9.7,1.15+hS2,-1.5-0.1),
 new THREE.Vector3(9.7,0.85+hS2,-1.5-0.1),
 new THREE.Vector3(9.7,0.8+hS2,-1.5)
); line['325_3-325_2'] = new THREE.Line(geo['325_3-325_2'], a0);
geo['325_2-325_0'] = new THREE.Geometry();
geo['325_2-325_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-1.5),
 new THREE.Vector3(9.7-0.1,0.75+hS2,-1.5),
 new THREE.Vector3(9.7-0.1,0.05+hS2,-1.5),
 new THREE.Vector3(9.7,0+hS2,-1.5)
); line['325_2-325_0'] = new THREE.Line(geo['325_2-325_0'], a0);
geo['325_3-325_1'] = new THREE.Geometry();
geo['325_3-325_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-1.5),
 new THREE.Vector3(9.7+0.1,1.15+hS2,-1.5),
 new THREE.Vector3(9.7+0.1,0.45+hS2,-1.5),
 new THREE.Vector3(9.7,0.4+hS2,-1.5)
); line['325_3-325_1'] = new THREE.Line(geo['325_3-325_1'], a0);
geo['325_3-325_0'] = new THREE.Geometry();
geo['325_3-325_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-1.5),
 new THREE.Vector3(9.7,1.2+hS2,-1.5-0.2),
 new THREE.Vector3(9.7,0+hS2,-1.5-0.2),
 new THREE.Vector3(9.7,0+hS2,-1.5)
); line['325_3-325_0'] = new THREE.Line(geo['325_3-325_0'], a0);
geo['323_1-323_0'] = new THREE.Geometry();
geo['323_1-323_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,-2.4),
 new THREE.Vector3(9.7,0.35+hS2,-2.4-0.1),
 new THREE.Vector3(9.7,0.05+hS2,-2.4-0.1),
 new THREE.Vector3(9.7,0+hS2,-2.4)
); line['323_1-323_0'] = new THREE.Line(geo['323_1-323_0'], a0);
geo['323_2-323_1'] = new THREE.Geometry();
geo['323_2-323_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-2.4),
 new THREE.Vector3(9.7,0.75+hS2,-2.4-0.1),
 new THREE.Vector3(9.7,0.45+hS2,-2.4-0.1),
 new THREE.Vector3(9.7,0.4+hS2,-2.4)
); line['323_2-323_1'] = new THREE.Line(geo['323_2-323_1'], a0);
geo['323_3-323_2'] = new THREE.Geometry();
geo['323_3-323_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-2.4),
 new THREE.Vector3(9.7,1.15+hS2,-2.4-0.1),
 new THREE.Vector3(9.7,0.85+hS2,-2.4-0.1),
 new THREE.Vector3(9.7,0.8+hS2,-2.4)
); line['323_3-323_2'] = new THREE.Line(geo['323_3-323_2'], a0);
geo['323_2-323_0'] = new THREE.Geometry();
geo['323_2-323_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-2.4),
 new THREE.Vector3(9.7-0.1,0.75+hS2,-2.4),
 new THREE.Vector3(9.7-0.1,0.05+hS2,-2.4),
 new THREE.Vector3(9.7,0+hS2,-2.4)
); line['323_2-323_0'] = new THREE.Line(geo['323_2-323_0'], a0);
geo['323_3-323_1'] = new THREE.Geometry();
geo['323_3-323_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-2.4),
 new THREE.Vector3(9.7+0.1,1.15+hS2,-2.4),
 new THREE.Vector3(9.7+0.1,0.45+hS2,-2.4),
 new THREE.Vector3(9.7,0.4+hS2,-2.4)
); line['323_3-323_1'] = new THREE.Line(geo['323_3-323_1'], a0);
geo['323_3-323_0'] = new THREE.Geometry();
geo['323_3-323_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-2.4),
 new THREE.Vector3(9.7,1.2+hS2,-2.4-0.2),
 new THREE.Vector3(9.7,0+hS2,-2.4-0.2),
 new THREE.Vector3(9.7,0+hS2,-2.4)
); line['323_3-323_0'] = new THREE.Line(geo['323_3-323_0'], a0);
geo['319_1-319_0'] = new THREE.Geometry();
geo['319_1-319_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,-4.2),
 new THREE.Vector3(9.7,0.35+hS2,-4.2-0.1),
 new THREE.Vector3(9.7,0.05+hS2,-4.2-0.1),
 new THREE.Vector3(9.7,0+hS2,-4.2)
); line['319_1-319_0'] = new THREE.Line(geo['319_1-319_0'], a0);
geo['319_2-319_1'] = new THREE.Geometry();
geo['319_2-319_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-4.2),
 new THREE.Vector3(9.7,0.75+hS2,-4.2-0.1),
 new THREE.Vector3(9.7,0.45+hS2,-4.2-0.1),
 new THREE.Vector3(9.7,0.4+hS2,-4.2)
); line['319_2-319_1'] = new THREE.Line(geo['319_2-319_1'], a0);
geo['319_3-319_2'] = new THREE.Geometry();
geo['319_3-319_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-4.2),
 new THREE.Vector3(9.7,1.15+hS2,-4.2-0.1),
 new THREE.Vector3(9.7,0.85+hS2,-4.2-0.1),
 new THREE.Vector3(9.7,0.8+hS2,-4.2)
); line['319_3-319_2'] = new THREE.Line(geo['319_3-319_2'], a0);
geo['319_2-319_0'] = new THREE.Geometry();
geo['319_2-319_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-4.2),
 new THREE.Vector3(9.7-0.1,0.75+hS2,-4.2),
 new THREE.Vector3(9.7-0.1,0.05+hS2,-4.2),
 new THREE.Vector3(9.7,0+hS2,-4.2)
); line['319_2-319_0'] = new THREE.Line(geo['319_2-319_0'], a0);
geo['319_3-319_1'] = new THREE.Geometry();
geo['319_3-319_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-4.2),
 new THREE.Vector3(9.7+0.1,1.15+hS2,-4.2),
 new THREE.Vector3(9.7+0.1,0.45+hS2,-4.2),
 new THREE.Vector3(9.7,0.4+hS2,-4.2)
); line['319_3-319_1'] = new THREE.Line(geo['319_3-319_1'], a0);
geo['319_3-319_0'] = new THREE.Geometry();
geo['319_3-319_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-4.2),
 new THREE.Vector3(9.7,1.2+hS2,-4.2-0.2),
 new THREE.Vector3(9.7,0+hS2,-4.2-0.2),
 new THREE.Vector3(9.7,0+hS2,-4.2)
); line['319_3-319_0'] = new THREE.Line(geo['319_3-319_0'], a0);
geo['317_1-317_0'] = new THREE.Geometry();
geo['317_1-317_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,-5.1),
 new THREE.Vector3(9.7,0.35+hS2,-5.1-0.1),
 new THREE.Vector3(9.7,0.05+hS2,-5.1-0.1),
 new THREE.Vector3(9.7,0+hS2,-5.1)
); line['317_1-317_0'] = new THREE.Line(geo['317_1-317_0'], a0);
geo['317_2-317_1'] = new THREE.Geometry();
geo['317_2-317_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-5.1),
 new THREE.Vector3(9.7,0.75+hS2,-5.1-0.1),
 new THREE.Vector3(9.7,0.45+hS2,-5.1-0.1),
 new THREE.Vector3(9.7,0.4+hS2,-5.1)
); line['317_2-317_1'] = new THREE.Line(geo['317_2-317_1'], a0);
geo['317_3-317_2'] = new THREE.Geometry();
geo['317_3-317_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-5.1),
 new THREE.Vector3(9.7,1.15+hS2,-5.1-0.1),
 new THREE.Vector3(9.7,0.85+hS2,-5.1-0.1),
 new THREE.Vector3(9.7,0.8+hS2,-5.1)
); line['317_3-317_2'] = new THREE.Line(geo['317_3-317_2'], a0);
geo['317_2-317_0'] = new THREE.Geometry();
geo['317_2-317_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-5.1),
 new THREE.Vector3(9.7-0.1,0.75+hS2,-5.1),
 new THREE.Vector3(9.7-0.1,0.05+hS2,-5.1),
 new THREE.Vector3(9.7,0+hS2,-5.1)
); line['317_2-317_0'] = new THREE.Line(geo['317_2-317_0'], a0);
geo['317_3-317_1'] = new THREE.Geometry();
geo['317_3-317_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-5.1),
 new THREE.Vector3(9.7+0.1,1.15+hS2,-5.1),
 new THREE.Vector3(9.7+0.1,0.45+hS2,-5.1),
 new THREE.Vector3(9.7,0.4+hS2,-5.1)
); line['317_3-317_1'] = new THREE.Line(geo['317_3-317_1'], a0);
geo['317_3-317_0'] = new THREE.Geometry();
geo['317_3-317_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-5.1),
 new THREE.Vector3(9.7,1.2+hS2,-5.1-0.2),
 new THREE.Vector3(9.7,0+hS2,-5.1-0.2),
 new THREE.Vector3(9.7,0+hS2,-5.1)
); line['317_3-317_0'] = new THREE.Line(geo['317_3-317_0'], a0);
geo['309_1-309_0'] = new THREE.Geometry();
geo['309_1-309_0'].vertices.push(
 new THREE.Vector3(9.7,0.4+hS2,-6.7),
 new THREE.Vector3(9.7,0.35+hS2,-6.7-0.1),
 new THREE.Vector3(9.7,0.05+hS2,-6.7-0.1),
 new THREE.Vector3(9.7,0+hS2,-6.7)
); line['309_1-309_0'] = new THREE.Line(geo['309_1-309_0'], a0);
geo['309_2-309_1'] = new THREE.Geometry();
geo['309_2-309_1'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-6.7),
 new THREE.Vector3(9.7,0.75+hS2,-6.7-0.1),
 new THREE.Vector3(9.7,0.45+hS2,-6.7-0.1),
 new THREE.Vector3(9.7,0.4+hS2,-6.7)
); line['309_2-309_1'] = new THREE.Line(geo['309_2-309_1'], a0);
geo['309_3-309_2'] = new THREE.Geometry();
geo['309_3-309_2'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-6.7),
 new THREE.Vector3(9.7,1.15+hS2,-6.7-0.1),
 new THREE.Vector3(9.7,0.85+hS2,-6.7-0.1),
 new THREE.Vector3(9.7,0.8+hS2,-6.7)
); line['309_3-309_2'] = new THREE.Line(geo['309_3-309_2'], a0);
geo['309_2-309_0'] = new THREE.Geometry();
geo['309_2-309_0'].vertices.push(
 new THREE.Vector3(9.7,0.8+hS2,-6.7),
 new THREE.Vector3(9.7-0.1,0.75+hS2,-6.7),
 new THREE.Vector3(9.7-0.1,0.05+hS2,-6.7),
 new THREE.Vector3(9.7,0+hS2,-6.7)
); line['309_2-309_0'] = new THREE.Line(geo['309_2-309_0'], a0);
geo['309_3-309_1'] = new THREE.Geometry();
geo['309_3-309_1'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-6.7),
 new THREE.Vector3(9.7+0.1,1.15+hS2,-6.7),
 new THREE.Vector3(9.7+0.1,0.45+hS2,-6.7),
 new THREE.Vector3(9.7,0.4+hS2,-6.7)
); line['309_3-309_1'] = new THREE.Line(geo['309_3-309_1'], a0);
geo['309_3-309_0'] = new THREE.Geometry();
geo['309_3-309_0'].vertices.push(
 new THREE.Vector3(9.7,1.2+hS2,-6.7),
 new THREE.Vector3(9.7,1.2+hS2,-6.7-0.2),
 new THREE.Vector3(9.7,0+hS2,-6.7-0.2),
 new THREE.Vector3(9.7,0+hS2,-6.7)
); line['309_3-309_0'] = new THREE.Line(geo['309_3-309_0'], a0);
geo['305_1-305_0'] = new THREE.Geometry();
geo['305_1-305_0'].vertices.push(
 new THREE.Vector3(10.75,0.4+hS2,-8.5),
 new THREE.Vector3(10.75,0.35+hS2,-8.5-0.1),
 new THREE.Vector3(10.75,0.05+hS2,-8.5-0.1),
 new THREE.Vector3(10.75,0+hS2,-8.5)
); line['305_1-305_0'] = new THREE.Line(geo['305_1-305_0'], a0);
geo['305_2-305_1'] = new THREE.Geometry();
geo['305_2-305_1'].vertices.push(
 new THREE.Vector3(10.75,0.8+hS2,-8.5),
 new THREE.Vector3(10.75,0.75+hS2,-8.5-0.1),
 new THREE.Vector3(10.75,0.45+hS2,-8.5-0.1),
 new THREE.Vector3(10.75,0.4+hS2,-8.5)
); line['305_2-305_1'] = new THREE.Line(geo['305_2-305_1'], a0);
geo['305_3-305_2'] = new THREE.Geometry();
geo['305_3-305_2'].vertices.push(
 new THREE.Vector3(10.75,1.2+hS2,-8.5),
 new THREE.Vector3(10.75,1.15+hS2,-8.5-0.1),
 new THREE.Vector3(10.75,0.85+hS2,-8.5-0.1),
 new THREE.Vector3(10.75,0.8+hS2,-8.5)
); line['305_3-305_2'] = new THREE.Line(geo['305_3-305_2'], a0);
geo['305_2-305_0'] = new THREE.Geometry();
geo['305_2-305_0'].vertices.push(
 new THREE.Vector3(10.75,0.8+hS2,-8.5),
 new THREE.Vector3(10.75-0.1,0.75+hS2,-8.5),
 new THREE.Vector3(10.75-0.1,0.05+hS2,-8.5),
 new THREE.Vector3(10.75,0+hS2,-8.5)
); line['305_2-305_0'] = new THREE.Line(geo['305_2-305_0'], a0);
geo['305_3-305_1'] = new THREE.Geometry();
geo['305_3-305_1'].vertices.push(
 new THREE.Vector3(10.75,1.2+hS2,-8.5),
 new THREE.Vector3(10.75+0.1,1.15+hS2,-8.5),
 new THREE.Vector3(10.75+0.1,0.45+hS2,-8.5),
 new THREE.Vector3(10.75,0.4+hS2,-8.5)
); line['305_3-305_1'] = new THREE.Line(geo['305_3-305_1'], a0);
geo['305_3-305_0'] = new THREE.Geometry();
geo['305_3-305_0'].vertices.push(
 new THREE.Vector3(10.75,1.2+hS2,-8.5),
 new THREE.Vector3(10.75,1.2+hS2,-8.5-0.2),
 new THREE.Vector3(10.75,0+hS2,-8.5-0.2),
 new THREE.Vector3(10.75,0+hS2,-8.5)
); line['305_3-305_0'] = new THREE.Line(geo['305_3-305_0'], a0);
geo['303_1-303_0'] = new THREE.Geometry();
geo['303_1-303_0'].vertices.push(
 new THREE.Vector3(9.95,0.4+hS2,-8.5),
 new THREE.Vector3(9.95,0.35+hS2,-8.5-0.1),
 new THREE.Vector3(9.95,0.05+hS2,-8.5-0.1),
 new THREE.Vector3(9.95,0+hS2,-8.5)
); line['303_1-303_0'] = new THREE.Line(geo['303_1-303_0'], a0);
geo['303_2-303_1'] = new THREE.Geometry();
geo['303_2-303_1'].vertices.push(
 new THREE.Vector3(9.95,0.8+hS2,-8.5),
 new THREE.Vector3(9.95,0.75+hS2,-8.5-0.1),
 new THREE.Vector3(9.95,0.45+hS2,-8.5-0.1),
 new THREE.Vector3(9.95,0.4+hS2,-8.5)
); line['303_2-303_1'] = new THREE.Line(geo['303_2-303_1'], a0);
geo['303_3-303_2'] = new THREE.Geometry();
geo['303_3-303_2'].vertices.push(
 new THREE.Vector3(9.95,1.2+hS2,-8.5),
 new THREE.Vector3(9.95,1.15+hS2,-8.5-0.1),
 new THREE.Vector3(9.95,0.85+hS2,-8.5-0.1),
 new THREE.Vector3(9.95,0.8+hS2,-8.5)
); line['303_3-303_2'] = new THREE.Line(geo['303_3-303_2'], a0);
geo['303_2-303_0'] = new THREE.Geometry();
geo['303_2-303_0'].vertices.push(
 new THREE.Vector3(9.95,0.8+hS2,-8.5),
 new THREE.Vector3(9.95-0.1,0.75+hS2,-8.5),
 new THREE.Vector3(9.95-0.1,0.05+hS2,-8.5),
 new THREE.Vector3(9.95,0+hS2,-8.5)
); line['303_2-303_0'] = new THREE.Line(geo['303_2-303_0'], a0);
geo['303_3-303_1'] = new THREE.Geometry();
geo['303_3-303_1'].vertices.push(
 new THREE.Vector3(9.95,1.2+hS2,-8.5),
 new THREE.Vector3(9.95+0.1,1.15+hS2,-8.5),
 new THREE.Vector3(9.95+0.1,0.45+hS2,-8.5),
 new THREE.Vector3(9.95,0.4+hS2,-8.5)
); line['303_3-303_1'] = new THREE.Line(geo['303_3-303_1'], a0);
geo['303_3-303_0'] = new THREE.Geometry();
geo['303_3-303_0'].vertices.push(
 new THREE.Vector3(9.95,1.2+hS2,-8.5),
 new THREE.Vector3(9.95,1.2+hS2,-8.5-0.2),
 new THREE.Vector3(9.95,0+hS2,-8.5-0.2),
 new THREE.Vector3(9.95,0+hS2,-8.5)
); line['303_3-303_0'] = new THREE.Line(geo['303_3-303_0'], a0);
geo['301_1-301_0'] = new THREE.Geometry();
geo['301_1-301_0'].vertices.push(
 new THREE.Vector3(9.15,0.4+hS2,-8.5),
 new THREE.Vector3(9.15,0.35+hS2,-8.5-0.1),
 new THREE.Vector3(9.15,0.05+hS2,-8.5-0.1),
 new THREE.Vector3(9.15,0+hS2,-8.5)
); line['301_1-301_0'] = new THREE.Line(geo['301_1-301_0'], a0);
geo['301_2-301_1'] = new THREE.Geometry();
geo['301_2-301_1'].vertices.push(
 new THREE.Vector3(9.15,0.8+hS2,-8.5),
 new THREE.Vector3(9.15,0.75+hS2,-8.5-0.1),
 new THREE.Vector3(9.15,0.45+hS2,-8.5-0.1),
 new THREE.Vector3(9.15,0.4+hS2,-8.5)
); line['301_2-301_1'] = new THREE.Line(geo['301_2-301_1'], a0);
geo['301_3-301_2'] = new THREE.Geometry();
geo['301_3-301_2'].vertices.push(
 new THREE.Vector3(9.15,1.2+hS2,-8.5),
 new THREE.Vector3(9.15,1.15+hS2,-8.5-0.1),
 new THREE.Vector3(9.15,0.85+hS2,-8.5-0.1),
 new THREE.Vector3(9.15,0.8+hS2,-8.5)
); line['301_3-301_2'] = new THREE.Line(geo['301_3-301_2'], a0);
geo['301_2-301_0'] = new THREE.Geometry();
geo['301_2-301_0'].vertices.push(
 new THREE.Vector3(9.15,0.8+hS2,-8.5),
 new THREE.Vector3(9.15-0.1,0.75+hS2,-8.5),
 new THREE.Vector3(9.15-0.1,0.05+hS2,-8.5),
 new THREE.Vector3(9.15,0+hS2,-8.5)
); line['301_2-301_0'] = new THREE.Line(geo['301_2-301_0'], a0);
geo['301_3-301_1'] = new THREE.Geometry();
geo['301_3-301_1'].vertices.push(
 new THREE.Vector3(9.15,1.2+hS2,-8.5),
 new THREE.Vector3(9.15+0.1,1.15+hS2,-8.5),
 new THREE.Vector3(9.15+0.1,0.45+hS2,-8.5),
 new THREE.Vector3(9.15,0.4+hS2,-8.5)
); line['301_3-301_1'] = new THREE.Line(geo['301_3-301_1'], a0);
geo['301_3-301_0'] = new THREE.Geometry();
geo['301_3-301_0'].vertices.push(
 new THREE.Vector3(9.15,1.2+hS2,-8.5),
 new THREE.Vector3(9.15,1.2+hS2,-8.5-0.2),
 new THREE.Vector3(9.15,0+hS2,-8.5-0.2),
 new THREE.Vector3(9.15,0+hS2,-8.5)
); line['301_3-301_0'] = new THREE.Line(geo['301_3-301_0'], a0);
geo['202_1-202_0'] = new THREE.Geometry();
geo['202_1-202_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-7.0),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-7.0),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-7.0),
 new THREE.Vector3(4.9,0+hS1,-7.0)
); line['202_1-202_0'] = new THREE.Line(geo['202_1-202_0'], a0);
geo['202_2-202_1'] = new THREE.Geometry();
geo['202_2-202_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-7.0),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-7.0),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-7.0),
 new THREE.Vector3(4.9,0.4+hS1,-7.0)
); line['202_2-202_1'] = new THREE.Line(geo['202_2-202_1'], a0);
geo['202_3-202_2'] = new THREE.Geometry();
geo['202_3-202_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-7.0),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-7.0),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-7.0),
 new THREE.Vector3(4.9,0.8+hS1,-7.0)
); line['202_3-202_2'] = new THREE.Line(geo['202_3-202_2'], a0);
geo['202_2-202_0'] = new THREE.Geometry();
geo['202_2-202_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-7.0),
 new THREE.Vector3(4.9,0.75+hS1,-7.0-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-7.0-0.1),
 new THREE.Vector3(4.9,0+hS1,-7.0)
); line['202_2-202_0'] = new THREE.Line(geo['202_2-202_0'], a0);
geo['202_3-202_1'] = new THREE.Geometry();
geo['202_3-202_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-7.0),
 new THREE.Vector3(4.9,1.15+hS1,-7.0+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-7.0+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-7.0)
); line['202_3-202_1'] = new THREE.Line(geo['202_3-202_1'], a0);
geo['202_3-202_0'] = new THREE.Geometry();
geo['202_3-202_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-7.0),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-7.0),
 new THREE.Vector3(4.9-0.2,0+hS1,-7.0),
 new THREE.Vector3(4.9,0+hS1,-7.0)
); line['202_3-202_0'] = new THREE.Line(geo['202_3-202_0'], a0);
geo['204_1-204_0'] = new THREE.Geometry();
geo['204_1-204_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-5.5),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-5.5),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-5.5),
 new THREE.Vector3(4.9,0+hS1,-5.5)
); line['204_1-204_0'] = new THREE.Line(geo['204_1-204_0'], a0);
geo['204_2-204_1'] = new THREE.Geometry();
geo['204_2-204_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-5.5),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-5.5),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-5.5),
 new THREE.Vector3(4.9,0.4+hS1,-5.5)
); line['204_2-204_1'] = new THREE.Line(geo['204_2-204_1'], a0);
geo['204_3-204_2'] = new THREE.Geometry();
geo['204_3-204_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-5.5),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-5.5),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-5.5),
 new THREE.Vector3(4.9,0.8+hS1,-5.5)
); line['204_3-204_2'] = new THREE.Line(geo['204_3-204_2'], a0);
geo['204_2-204_0'] = new THREE.Geometry();
geo['204_2-204_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-5.5),
 new THREE.Vector3(4.9,0.75+hS1,-5.5-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-5.5-0.1),
 new THREE.Vector3(4.9,0+hS1,-5.5)
); line['204_2-204_0'] = new THREE.Line(geo['204_2-204_0'], a0);
geo['204_3-204_1'] = new THREE.Geometry();
geo['204_3-204_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-5.5),
 new THREE.Vector3(4.9,1.15+hS1,-5.5+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-5.5+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-5.5)
); line['204_3-204_1'] = new THREE.Line(geo['204_3-204_1'], a0);
geo['204_3-204_0'] = new THREE.Geometry();
geo['204_3-204_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-5.5),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-5.5),
 new THREE.Vector3(4.9-0.2,0+hS1,-5.5),
 new THREE.Vector3(4.9,0+hS1,-5.5)
); line['204_3-204_0'] = new THREE.Line(geo['204_3-204_0'], a0);
geo['212_1-212_0'] = new THREE.Geometry();
geo['212_1-212_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-4.15),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-4.15),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-4.15),
 new THREE.Vector3(4.9,0+hS1,-4.15)
); line['212_1-212_0'] = new THREE.Line(geo['212_1-212_0'], a0);
geo['212_2-212_1'] = new THREE.Geometry();
geo['212_2-212_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-4.15),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-4.15),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-4.15),
 new THREE.Vector3(4.9,0.4+hS1,-4.15)
); line['212_2-212_1'] = new THREE.Line(geo['212_2-212_1'], a0);
geo['212_3-212_2'] = new THREE.Geometry();
geo['212_3-212_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-4.15),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-4.15),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-4.15),
 new THREE.Vector3(4.9,0.8+hS1,-4.15)
); line['212_3-212_2'] = new THREE.Line(geo['212_3-212_2'], a0);
geo['212_2-212_0'] = new THREE.Geometry();
geo['212_2-212_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-4.15),
 new THREE.Vector3(4.9,0.75+hS1,-4.15-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-4.15-0.1),
 new THREE.Vector3(4.9,0+hS1,-4.15)
); line['212_2-212_0'] = new THREE.Line(geo['212_2-212_0'], a0);
geo['212_3-212_1'] = new THREE.Geometry();
geo['212_3-212_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-4.15),
 new THREE.Vector3(4.9,1.15+hS1,-4.15+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-4.15+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-4.15)
); line['212_3-212_1'] = new THREE.Line(geo['212_3-212_1'], a0);
geo['212_3-212_0'] = new THREE.Geometry();
geo['212_3-212_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-4.15),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-4.15),
 new THREE.Vector3(4.9-0.2,0+hS1,-4.15),
 new THREE.Vector3(4.9,0+hS1,-4.15)
); line['212_3-212_0'] = new THREE.Line(geo['212_3-212_0'], a0);
geo['210_1-210_0'] = new THREE.Geometry();
geo['210_1-210_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-4.75),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-4.75),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-4.75),
 new THREE.Vector3(4.9,0+hS1,-4.75)
); line['210_1-210_0'] = new THREE.Line(geo['210_1-210_0'], a0);
geo['210_2-210_1'] = new THREE.Geometry();
geo['210_2-210_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-4.75),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-4.75),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-4.75),
 new THREE.Vector3(4.9,0.4+hS1,-4.75)
); line['210_2-210_1'] = new THREE.Line(geo['210_2-210_1'], a0);
geo['210_3-210_2'] = new THREE.Geometry();
geo['210_3-210_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-4.75),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-4.75),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-4.75),
 new THREE.Vector3(4.9,0.8+hS1,-4.75)
); line['210_3-210_2'] = new THREE.Line(geo['210_3-210_2'], a0);
geo['210_2-210_0'] = new THREE.Geometry();
geo['210_2-210_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-4.75),
 new THREE.Vector3(4.9,0.75+hS1,-4.75-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-4.75-0.1),
 new THREE.Vector3(4.9,0+hS1,-4.75)
); line['210_2-210_0'] = new THREE.Line(geo['210_2-210_0'], a0);
geo['210_3-210_1'] = new THREE.Geometry();
geo['210_3-210_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-4.75),
 new THREE.Vector3(4.9,1.15+hS1,-4.75+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-4.75+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-4.75)
); line['210_3-210_1'] = new THREE.Line(geo['210_3-210_1'], a0);
geo['210_3-210_0'] = new THREE.Geometry();
geo['210_3-210_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-4.75),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-4.75),
 new THREE.Vector3(4.9-0.2,0+hS1,-4.75),
 new THREE.Vector3(4.9,0+hS1,-4.75)
); line['210_3-210_0'] = new THREE.Line(geo['210_3-210_0'], a0);
geo['220_1-220_0'] = new THREE.Geometry();
geo['220_1-220_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-2.55),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-2.55),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-2.55),
 new THREE.Vector3(4.9,0+hS1,-2.55)
); line['220_1-220_0'] = new THREE.Line(geo['220_1-220_0'], a0);
geo['220_2-220_1'] = new THREE.Geometry();
geo['220_2-220_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-2.55),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-2.55),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-2.55),
 new THREE.Vector3(4.9,0.4+hS1,-2.55)
); line['220_2-220_1'] = new THREE.Line(geo['220_2-220_1'], a0);
geo['220_3-220_2'] = new THREE.Geometry();
geo['220_3-220_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-2.55),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-2.55),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-2.55),
 new THREE.Vector3(4.9,0.8+hS1,-2.55)
); line['220_3-220_2'] = new THREE.Line(geo['220_3-220_2'], a0);
geo['220_2-220_0'] = new THREE.Geometry();
geo['220_2-220_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-2.55),
 new THREE.Vector3(4.9,0.75+hS1,-2.55-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-2.55-0.1),
 new THREE.Vector3(4.9,0+hS1,-2.55)
); line['220_2-220_0'] = new THREE.Line(geo['220_2-220_0'], a0);
geo['220_3-220_1'] = new THREE.Geometry();
geo['220_3-220_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-2.55),
 new THREE.Vector3(4.9,1.15+hS1,-2.55+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-2.55+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-2.55)
); line['220_3-220_1'] = new THREE.Line(geo['220_3-220_1'], a0);
geo['220_3-220_0'] = new THREE.Geometry();
geo['220_3-220_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-2.55),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-2.55),
 new THREE.Vector3(4.9-0.2,0+hS1,-2.55),
 new THREE.Vector3(4.9,0+hS1,-2.55)
); line['220_3-220_0'] = new THREE.Line(geo['220_3-220_0'], a0);
geo['222_1-222_0'] = new THREE.Geometry();
geo['222_1-222_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-2.05),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-2.05),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-2.05),
 new THREE.Vector3(4.9,0+hS1,-2.05)
); line['222_1-222_0'] = new THREE.Line(geo['222_1-222_0'], a0);
geo['222_2-222_1'] = new THREE.Geometry();
geo['222_2-222_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-2.05),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-2.05),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-2.05),
 new THREE.Vector3(4.9,0.4+hS1,-2.05)
); line['222_2-222_1'] = new THREE.Line(geo['222_2-222_1'], a0);
geo['222_3-222_2'] = new THREE.Geometry();
geo['222_3-222_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-2.05),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-2.05),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-2.05),
 new THREE.Vector3(4.9,0.8+hS1,-2.05)
); line['222_3-222_2'] = new THREE.Line(geo['222_3-222_2'], a0);
geo['222_2-222_0'] = new THREE.Geometry();
geo['222_2-222_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-2.05),
 new THREE.Vector3(4.9,0.75+hS1,-2.05-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-2.05-0.1),
 new THREE.Vector3(4.9,0+hS1,-2.05)
); line['222_2-222_0'] = new THREE.Line(geo['222_2-222_0'], a0);
geo['222_3-222_1'] = new THREE.Geometry();
geo['222_3-222_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-2.05),
 new THREE.Vector3(4.9,1.15+hS1,-2.05+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-2.05+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-2.05)
); line['222_3-222_1'] = new THREE.Line(geo['222_3-222_1'], a0);
geo['222_3-222_0'] = new THREE.Geometry();
geo['222_3-222_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-2.05),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-2.05),
 new THREE.Vector3(4.9-0.2,0+hS1,-2.05),
 new THREE.Vector3(4.9,0+hS1,-2.05)
); line['222_3-222_0'] = new THREE.Line(geo['222_3-222_0'], a0);
geo['224_1-224_0'] = new THREE.Geometry();
geo['224_1-224_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-1.55),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-1.55),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-1.55),
 new THREE.Vector3(4.9,0+hS1,-1.55)
); line['224_1-224_0'] = new THREE.Line(geo['224_1-224_0'], a0);
geo['224_2-224_1'] = new THREE.Geometry();
geo['224_2-224_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-1.55),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-1.55),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-1.55),
 new THREE.Vector3(4.9,0.4+hS1,-1.55)
); line['224_2-224_1'] = new THREE.Line(geo['224_2-224_1'], a0);
geo['224_3-224_2'] = new THREE.Geometry();
geo['224_3-224_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-1.55),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-1.55),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-1.55),
 new THREE.Vector3(4.9,0.8+hS1,-1.55)
); line['224_3-224_2'] = new THREE.Line(geo['224_3-224_2'], a0);
geo['224_2-224_0'] = new THREE.Geometry();
geo['224_2-224_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-1.55),
 new THREE.Vector3(4.9,0.75+hS1,-1.55-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-1.55-0.1),
 new THREE.Vector3(4.9,0+hS1,-1.55)
); line['224_2-224_0'] = new THREE.Line(geo['224_2-224_0'], a0);
geo['224_3-224_1'] = new THREE.Geometry();
geo['224_3-224_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-1.55),
 new THREE.Vector3(4.9,1.15+hS1,-1.55+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-1.55+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-1.55)
); line['224_3-224_1'] = new THREE.Line(geo['224_3-224_1'], a0);
geo['224_3-224_0'] = new THREE.Geometry();
geo['224_3-224_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-1.55),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-1.55),
 new THREE.Vector3(4.9-0.2,0+hS1,-1.55),
 new THREE.Vector3(4.9,0+hS1,-1.55)
); line['224_3-224_0'] = new THREE.Line(geo['224_3-224_0'], a0);
geo['226_1-226_0'] = new THREE.Geometry();
geo['226_1-226_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-1.05),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-1.05),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-1.05),
 new THREE.Vector3(4.9,0+hS1,-1.05)
); line['226_1-226_0'] = new THREE.Line(geo['226_1-226_0'], a0);
geo['226_2-226_1'] = new THREE.Geometry();
geo['226_2-226_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-1.05),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-1.05),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-1.05),
 new THREE.Vector3(4.9,0.4+hS1,-1.05)
); line['226_2-226_1'] = new THREE.Line(geo['226_2-226_1'], a0);
geo['226_3-226_2'] = new THREE.Geometry();
geo['226_3-226_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-1.05),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-1.05),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-1.05),
 new THREE.Vector3(4.9,0.8+hS1,-1.05)
); line['226_3-226_2'] = new THREE.Line(geo['226_3-226_2'], a0);
geo['226_2-226_0'] = new THREE.Geometry();
geo['226_2-226_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-1.05),
 new THREE.Vector3(4.9,0.75+hS1,-1.05-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-1.05-0.1),
 new THREE.Vector3(4.9,0+hS1,-1.05)
); line['226_2-226_0'] = new THREE.Line(geo['226_2-226_0'], a0);
geo['226_3-226_1'] = new THREE.Geometry();
geo['226_3-226_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-1.05),
 new THREE.Vector3(4.9,1.15+hS1,-1.05+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-1.05+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-1.05)
); line['226_3-226_1'] = new THREE.Line(geo['226_3-226_1'], a0);
geo['226_3-226_0'] = new THREE.Geometry();
geo['226_3-226_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-1.05),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-1.05),
 new THREE.Vector3(4.9-0.2,0+hS1,-1.05),
 new THREE.Vector3(4.9,0+hS1,-1.05)
); line['226_3-226_0'] = new THREE.Line(geo['226_3-226_0'], a0);
geo['228_1-228_0'] = new THREE.Geometry();
geo['228_1-228_0'].vertices.push(
 new THREE.Vector3(4.9,0.4+hS1,-0.55),
 new THREE.Vector3(4.9-0.1,0.35+hS1,-0.55),
 new THREE.Vector3(4.9-0.1,0.05+hS1,-0.55),
 new THREE.Vector3(4.9,0+hS1,-0.55)
); line['228_1-228_0'] = new THREE.Line(geo['228_1-228_0'], a0);
geo['228_2-228_1'] = new THREE.Geometry();
geo['228_2-228_1'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-0.55),
 new THREE.Vector3(4.9-0.1,0.75+hS1,-0.55),
 new THREE.Vector3(4.9-0.1,0.45+hS1,-0.55),
 new THREE.Vector3(4.9,0.4+hS1,-0.55)
); line['228_2-228_1'] = new THREE.Line(geo['228_2-228_1'], a0);
geo['228_3-228_2'] = new THREE.Geometry();
geo['228_3-228_2'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-0.55),
 new THREE.Vector3(4.9-0.1,1.15+hS1,-0.55),
 new THREE.Vector3(4.9-0.1,0.85+hS1,-0.55),
 new THREE.Vector3(4.9,0.8+hS1,-0.55)
); line['228_3-228_2'] = new THREE.Line(geo['228_3-228_2'], a0);
geo['228_2-228_0'] = new THREE.Geometry();
geo['228_2-228_0'].vertices.push(
 new THREE.Vector3(4.9,0.8+hS1,-0.55),
 new THREE.Vector3(4.9,0.75+hS1,-0.55-0.1),
 new THREE.Vector3(4.9,0.05+hS1,-0.55-0.1),
 new THREE.Vector3(4.9,0+hS1,-0.55)
); line['228_2-228_0'] = new THREE.Line(geo['228_2-228_0'], a0);
geo['228_3-228_1'] = new THREE.Geometry();
geo['228_3-228_1'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-0.55),
 new THREE.Vector3(4.9,1.15+hS1,-0.55+0.1),
 new THREE.Vector3(4.9,0.45+hS1,-0.55+0.1),
 new THREE.Vector3(4.9,0.4+hS1,-0.55)
); line['228_3-228_1'] = new THREE.Line(geo['228_3-228_1'], a0);
geo['228_3-228_0'] = new THREE.Geometry();
geo['228_3-228_0'].vertices.push(
 new THREE.Vector3(4.9,1.2+hS1,-0.55),
 new THREE.Vector3(4.9-0.2,1.2+hS1,-0.55),
 new THREE.Vector3(4.9-0.2,0+hS1,-0.55),
 new THREE.Vector3(4.9,0+hS1,-0.55)
); line['228_3-228_0'] = new THREE.Line(geo['228_3-228_0'], a0);
geo['201_1-201_0'] = new THREE.Geometry();
geo['201_1-201_0'].vertices.push(
	new THREE.Vector3(9.06,0.4+hS1,-8.5),
	new THREE.Vector3(9.06,0.35+hS1,-8.5-0.1),
	new THREE.Vector3(9.06,0.05+hS1,-8.5-0.1),
	new THREE.Vector3(9.06,0+hS1,-8.5)
); line['201_1-201_0'] = new THREE.Line(geo['201_1-201_0'], a0);
geo['201_2-201_1'] = new THREE.Geometry();
geo['201_2-201_1'].vertices.push(
	new THREE.Vector3(9.06,0.8+hS1,-8.5),
	new THREE.Vector3(9.06,0.75+hS1,-8.5-0.1),
	new THREE.Vector3(9.06,0.45+hS1,-8.5-0.1),
	new THREE.Vector3(9.06,0.4+hS1,-8.5)
); line['201_2-201_1'] = new THREE.Line(geo['201_2-201_1'], a0);
geo['201_3-201_2'] = new THREE.Geometry();
geo['201_3-201_2'].vertices.push(
	new THREE.Vector3(9.06,1.2+hS1,-8.5),
	new THREE.Vector3(9.06,1.15+hS1,-8.5-0.1),
	new THREE.Vector3(9.06,0.85+hS1,-8.5-0.1),
	new THREE.Vector3(9.06,0.8+hS1,-8.5)
); line['201_3-201_2'] = new THREE.Line(geo['201_3-201_2'], a0);
geo['201_2-201_0'] = new THREE.Geometry();
geo['201_2-201_0'].vertices.push(
	new THREE.Vector3(9.06,0.8+hS1,-8.5),
	new THREE.Vector3(9.06-0.1,0.75+hS1,-8.5),
	new THREE.Vector3(9.06-0.1,0.05+hS1,-8.5),
	new THREE.Vector3(9.06,0+hS1,-8.5)
); line['201_2-201_0'] = new THREE.Line(geo['201_2-201_0'], a0);
geo['201_3-201_1'] = new THREE.Geometry();
geo['201_3-201_1'].vertices.push(
	new THREE.Vector3(9.06,1.2+hS1,-8.5),
	new THREE.Vector3(9.06+0.1,1.15+hS1,-8.5),
	new THREE.Vector3(9.06+0.1,0.45+hS1,-8.5),
	new THREE.Vector3(9.06,0.4+hS1,-8.5)
); line['201_3-201_1'] = new THREE.Line(geo['201_3-201_1'], a0);
geo['201_3-201_0'] = new THREE.Geometry();
geo['201_3-201_0'].vertices.push(
	new THREE.Vector3(9.06,1.2+hS1,-8.5),
	new THREE.Vector3(9.06,1.2+hS1,-8.5-0.2),
	new THREE.Vector3(9.06,0+hS1,-8.5-0.2),
	new THREE.Vector3(9.06,0+hS1,-8.5)
); line['201_3-201_0'] = new THREE.Line(geo['201_3-201_0'], a0);
geo['203_1-203_0'] = new THREE.Geometry();
geo['203_1-203_0'].vertices.push(
	new THREE.Vector3(9.65,0.4+hS1,-8.5),
	new THREE.Vector3(9.65,0.35+hS1,-8.5-0.1),
	new THREE.Vector3(9.65,0.05+hS1,-8.5-0.1),
	new THREE.Vector3(9.65,0+hS1,-8.5)
); line['203_1-203_0'] = new THREE.Line(geo['203_1-203_0'], a0);
geo['203_2-203_1'] = new THREE.Geometry();
geo['203_2-203_1'].vertices.push(
	new THREE.Vector3(9.65,0.8+hS1,-8.5),
	new THREE.Vector3(9.65,0.75+hS1,-8.5-0.1),
	new THREE.Vector3(9.65,0.45+hS1,-8.5-0.1),
	new THREE.Vector3(9.65,0.4+hS1,-8.5)
); line['203_2-203_1'] = new THREE.Line(geo['203_2-203_1'], a0);
geo['203_3-203_2'] = new THREE.Geometry();
geo['203_3-203_2'].vertices.push(
	new THREE.Vector3(9.65,1.2+hS1,-8.5),
	new THREE.Vector3(9.65,1.15+hS1,-8.5-0.1),
	new THREE.Vector3(9.65,0.85+hS1,-8.5-0.1),
	new THREE.Vector3(9.65,0.8+hS1,-8.5)
); line['203_3-203_2'] = new THREE.Line(geo['203_3-203_2'], a0);
geo['203_2-203_0'] = new THREE.Geometry();
geo['203_2-203_0'].vertices.push(
	new THREE.Vector3(9.65,0.8+hS1,-8.5),
	new THREE.Vector3(9.65-0.1,0.75+hS1,-8.5),
	new THREE.Vector3(9.65-0.1,0.05+hS1,-8.5),
	new THREE.Vector3(9.65,0+hS1,-8.5)
); line['203_2-203_0'] = new THREE.Line(geo['203_2-203_0'], a0);
geo['203_3-203_1'] = new THREE.Geometry();
geo['203_3-203_1'].vertices.push(
	new THREE.Vector3(9.65,1.2+hS1,-8.5),
	new THREE.Vector3(9.65+0.1,1.15+hS1,-8.5),
	new THREE.Vector3(9.65+0.1,0.45+hS1,-8.5),
	new THREE.Vector3(9.65,0.4+hS1,-8.5)
); line['203_3-203_1'] = new THREE.Line(geo['203_3-203_1'], a0);
geo['203_3-203_0'] = new THREE.Geometry();
geo['203_3-203_0'].vertices.push(
	new THREE.Vector3(9.65,1.2+hS1,-8.5),
	new THREE.Vector3(9.65,1.2+hS1,-8.5-0.2),
	new THREE.Vector3(9.65,0+hS1,-8.5-0.2),
	new THREE.Vector3(9.65,0+hS1,-8.5)
); line['203_3-203_0'] = new THREE.Line(geo['203_3-203_0'], a0);
geo['205_1-205_0'] = new THREE.Geometry();
geo['205_1-205_0'].vertices.push(
	new THREE.Vector3(10.25,0.4+hS1,-8.5),
	new THREE.Vector3(10.25,0.35+hS1,-8.5-0.1),
	new THREE.Vector3(10.25,0.05+hS1,-8.5-0.1),
	new THREE.Vector3(10.25,0+hS1,-8.5)
); line['205_1-205_0'] = new THREE.Line(geo['205_1-205_0'], a0);
geo['205_2-205_1'] = new THREE.Geometry();
geo['205_2-205_1'].vertices.push(
	new THREE.Vector3(10.25,0.8+hS1,-8.5),
	new THREE.Vector3(10.25,0.75+hS1,-8.5-0.1),
	new THREE.Vector3(10.25,0.45+hS1,-8.5-0.1),
	new THREE.Vector3(10.25,0.4+hS1,-8.5)
); line['205_2-205_1'] = new THREE.Line(geo['205_2-205_1'], a0);
geo['205_3-205_2'] = new THREE.Geometry();
geo['205_3-205_2'].vertices.push(
	new THREE.Vector3(10.25,1.2+hS1,-8.5),
	new THREE.Vector3(10.25,1.15+hS1,-8.5-0.1),
	new THREE.Vector3(10.25,0.85+hS1,-8.5-0.1),
	new THREE.Vector3(10.25,0.8+hS1,-8.5)
); line['205_3-205_2'] = new THREE.Line(geo['205_3-205_2'], a0);
geo['205_2-205_0'] = new THREE.Geometry();
geo['205_2-205_0'].vertices.push(
	new THREE.Vector3(10.25,0.8+hS1,-8.5),
	new THREE.Vector3(10.25-0.1,0.75+hS1,-8.5),
	new THREE.Vector3(10.25-0.1,0.05+hS1,-8.5),
	new THREE.Vector3(10.25,0+hS1,-8.5)
); line['205_2-205_0'] = new THREE.Line(geo['205_2-205_0'], a0);
geo['205_3-205_1'] = new THREE.Geometry();
geo['205_3-205_1'].vertices.push(
	new THREE.Vector3(10.25,1.2+hS1,-8.5),
	new THREE.Vector3(10.25+0.1,1.15+hS1,-8.5),
	new THREE.Vector3(10.25+0.1,0.45+hS1,-8.5),
	new THREE.Vector3(10.25,0.4+hS1,-8.5)
); line['205_3-205_1'] = new THREE.Line(geo['205_3-205_1'], a0);
geo['205_3-205_0'] = new THREE.Geometry();
geo['205_3-205_0'].vertices.push(
	new THREE.Vector3(10.25,1.2+hS1,-8.5),
	new THREE.Vector3(10.25,1.2+hS1,-8.5-0.2),
	new THREE.Vector3(10.25,0+hS1,-8.5-0.2),
	new THREE.Vector3(10.25,0+hS1,-8.5)
); line['205_3-205_0'] = new THREE.Line(geo['205_3-205_0'], a0);
			
geo['207_1-207_0'] = new THREE.Geometry();
geo['207_1-207_0'].vertices.push(
	new THREE.Vector3(10.85,0.4+hS1,-8.5),
	new THREE.Vector3(10.85,0.35+hS1,-8.5-0.1),
	new THREE.Vector3(10.85,0.05+hS1,-8.5-0.1),
	new THREE.Vector3(10.85,0+hS1,-8.5)
); line['207_1-207_0'] = new THREE.Line(geo['207_1-207_0'], a0);
geo['207_2-207_1'] = new THREE.Geometry();
geo['207_2-207_1'].vertices.push(
	new THREE.Vector3(10.85,0.8+hS1,-8.5),
	new THREE.Vector3(10.85,0.75+hS1,-8.5-0.1),
	new THREE.Vector3(10.85,0.45+hS1,-8.5-0.1),
	new THREE.Vector3(10.85,0.4+hS1,-8.5)
); line['207_2-207_1'] = new THREE.Line(geo['207_2-207_1'], a0);
geo['207_3-207_2'] = new THREE.Geometry();
geo['207_3-207_2'].vertices.push(
	new THREE.Vector3(10.85,1.2+hS1,-8.5),
	new THREE.Vector3(10.85,1.15+hS1,-8.5-0.1),
	new THREE.Vector3(10.85,0.85+hS1,-8.5-0.1),
	new THREE.Vector3(10.85,0.8+hS1,-8.5)
); line['207_3-207_2'] = new THREE.Line(geo['207_3-207_2'], a0);
geo['207_2-207_0'] = new THREE.Geometry();
geo['207_2-207_0'].vertices.push(
	new THREE.Vector3(10.85,0.8+hS1,-8.5),
	new THREE.Vector3(10.85-0.1,0.75+hS1,-8.5),
	new THREE.Vector3(10.85-0.1,0.05+hS1,-8.5),
	new THREE.Vector3(10.85,0+hS1,-8.5)
); line['207_2-207_0'] = new THREE.Line(geo['207_2-207_0'], a0);
geo['207_3-207_1'] = new THREE.Geometry();
geo['207_3-207_1'].vertices.push(
	new THREE.Vector3(10.85,1.2+hS1,-8.5),
	new THREE.Vector3(10.85+0.1,1.15+hS1,-8.5),
	new THREE.Vector3(10.85+0.1,0.45+hS1,-8.5),
	new THREE.Vector3(10.85,0.4+hS1,-8.5)
); line['207_3-207_1'] = new THREE.Line(geo['207_3-207_1'], a0);
geo['207_3-207_0'] = new THREE.Geometry();
geo['207_3-207_0'].vertices.push(
	new THREE.Vector3(10.85,1.2+hS1,-8.5),
	new THREE.Vector3(10.85,1.2+hS1,-8.5-0.2),
	new THREE.Vector3(10.85,0+hS1,-8.5-0.2),
	new THREE.Vector3(10.85,0+hS1,-8.5)
); line['207_3-207_0'] = new THREE.Line(geo['207_3-207_0'], a0);
geo['209_1-209_0'] = new THREE.Geometry();
geo['209_1-209_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-6.7),
	new THREE.Vector3(9.7,0.35+hS1,-6.7-0.1),
	new THREE.Vector3(9.7,0.05+hS1,-6.7-0.1),
	new THREE.Vector3(9.7,0+hS1,-6.7)
); line['209_1-209_0'] = new THREE.Line(geo['209_1-209_0'], a0);
geo['209_2-209_1'] = new THREE.Geometry();
geo['209_2-209_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-6.7),
	new THREE.Vector3(9.7,0.75+hS1,-6.7-0.1),
	new THREE.Vector3(9.7,0.45+hS1,-6.7-0.1),
	new THREE.Vector3(9.7,0.4+hS1,-6.7)
); line['209_2-209_1'] = new THREE.Line(geo['209_2-209_1'], a0);
geo['209_3-209_2'] = new THREE.Geometry();
geo['209_3-209_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-6.7),
	new THREE.Vector3(9.7,1.15+hS1,-6.7-0.1),
	new THREE.Vector3(9.7,0.85+hS1,-6.7-0.1),
	new THREE.Vector3(9.7,0.8+hS1,-6.7)
); line['209_3-209_2'] = new THREE.Line(geo['209_3-209_2'], a0);
geo['209_2-209_0'] = new THREE.Geometry();
geo['209_2-209_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-6.7),
	new THREE.Vector3(9.7-0.1,0.75+hS1,-6.7),
	new THREE.Vector3(9.7-0.1,0.05+hS1,-6.7),
	new THREE.Vector3(9.7,0+hS1,-6.7)
); line['209_2-209_0'] = new THREE.Line(geo['209_2-209_0'], a0);
geo['209_3-209_1'] = new THREE.Geometry();
geo['209_3-209_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-6.7),
	new THREE.Vector3(9.7+0.1,1.15+hS1,-6.7),
	new THREE.Vector3(9.7+0.1,0.45+hS1,-6.7),
	new THREE.Vector3(9.7,0.4+hS1,-6.7)
); line['209_3-209_1'] = new THREE.Line(geo['209_3-209_1'], a0);
geo['209_3-209_0'] = new THREE.Geometry();
geo['209_3-209_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-6.7),
	new THREE.Vector3(9.7,1.2+hS1,-6.7-0.2),
	new THREE.Vector3(9.7,0+hS1,-6.7-0.2),
	new THREE.Vector3(9.7,0+hS1,-6.7)
); line['209_3-209_0'] = new THREE.Line(geo['209_3-209_0'], a0);
geo['217_1-217_0'] = new THREE.Geometry();
geo['217_1-217_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-5.1),
	new THREE.Vector3(9.7,0.35+hS1,-5.1-0.1),
	new THREE.Vector3(9.7,0.05+hS1,-5.1-0.1),
	new THREE.Vector3(9.7,0+hS1,-5.1)
); line['217_1-217_0'] = new THREE.Line(geo['217_1-217_0'], a0);
geo['217_2-217_1'] = new THREE.Geometry();
geo['217_2-217_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-5.1),
	new THREE.Vector3(9.7,0.75+hS1,-5.1-0.1),
	new THREE.Vector3(9.7,0.45+hS1,-5.1-0.1),
	new THREE.Vector3(9.7,0.4+hS1,-5.1)
); line['217_2-217_1'] = new THREE.Line(geo['217_2-217_1'], a0);
geo['217_3-217_2'] = new THREE.Geometry();
geo['217_3-217_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-5.1),
	new THREE.Vector3(9.7,1.15+hS1,-5.1-0.1),
	new THREE.Vector3(9.7,0.85+hS1,-5.1-0.1),
	new THREE.Vector3(9.7,0.8+hS1,-5.1)
); line['217_3-217_2'] = new THREE.Line(geo['217_3-217_2'], a0);
geo['217_2-217_0'] = new THREE.Geometry();
geo['217_2-217_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-5.1),
	new THREE.Vector3(9.7-0.1,0.75+hS1,-5.1),
	new THREE.Vector3(9.7-0.1,0.05+hS1,-5.1),
	new THREE.Vector3(9.7,0+hS1,-5.1)
); line['217_2-217_0'] = new THREE.Line(geo['217_2-217_0'], a0);
geo['217_3-217_1'] = new THREE.Geometry();
geo['217_3-217_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-5.1),
	new THREE.Vector3(9.7+0.1,1.15+hS1,-5.1),
	new THREE.Vector3(9.7+0.1,0.45+hS1,-5.1),
	new THREE.Vector3(9.7,0.4+hS1,-5.1)
); line['217_3-217_1'] = new THREE.Line(geo['217_3-217_1'], a0);
geo['217_3-217_0'] = new THREE.Geometry();
geo['217_3-217_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-5.1),
	new THREE.Vector3(9.7,1.2+hS1,-5.1-0.2),
	new THREE.Vector3(9.7,0+hS1,-5.1-0.2),
	new THREE.Vector3(9.7,0+hS1,-5.1)
); line['217_3-217_0'] = new THREE.Line(geo['217_3-217_0'], a0);
geo['219_1-219_0'] = new THREE.Geometry();
geo['219_1-219_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-4.2),
	new THREE.Vector3(9.7,0.35+hS1,-4.2-0.1),
	new THREE.Vector3(9.7,0.05+hS1,-4.2-0.1),
	new THREE.Vector3(9.7,0+hS1,-4.2)
); line['219_1-219_0'] = new THREE.Line(geo['219_1-219_0'], a0);
geo['219_2-219_1'] = new THREE.Geometry();
geo['219_2-219_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-4.2),
	new THREE.Vector3(9.7,0.75+hS1,-4.2-0.1),
	new THREE.Vector3(9.7,0.45+hS1,-4.2-0.1),
	new THREE.Vector3(9.7,0.4+hS1,-4.2)
); line['219_2-219_1'] = new THREE.Line(geo['219_2-219_1'], a0);
geo['219_3-219_2'] = new THREE.Geometry();
geo['219_3-219_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-4.2),
	new THREE.Vector3(9.7,1.15+hS1,-4.2-0.1),
	new THREE.Vector3(9.7,0.85+hS1,-4.2-0.1),
	new THREE.Vector3(9.7,0.8+hS1,-4.2)
); line['219_3-219_2'] = new THREE.Line(geo['219_3-219_2'], a0);
geo['219_2-219_0'] = new THREE.Geometry();
geo['219_2-219_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-4.2),
	new THREE.Vector3(9.7-0.1,0.75+hS1,-4.2),
	new THREE.Vector3(9.7-0.1,0.05+hS1,-4.2),
	new THREE.Vector3(9.7,0+hS1,-4.2)
); line['219_2-219_0'] = new THREE.Line(geo['219_2-219_0'], a0);
geo['219_3-219_1'] = new THREE.Geometry();
geo['219_3-219_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-4.2),
	new THREE.Vector3(9.7+0.1,1.15+hS1,-4.2),
	new THREE.Vector3(9.7+0.1,0.45+hS1,-4.2),
	new THREE.Vector3(9.7,0.4+hS1,-4.2)
); line['219_3-219_1'] = new THREE.Line(geo['219_3-219_1'], a0);
geo['219_3-219_0'] = new THREE.Geometry();
geo['219_3-219_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-4.2),
	new THREE.Vector3(9.7,1.2+hS1,-4.2-0.2),
	new THREE.Vector3(9.7,0+hS1,-4.2-0.2),
	new THREE.Vector3(9.7,0+hS1,-4.2)
); line['219_3-219_0'] = new THREE.Line(geo['219_3-219_0'], a0);
geo['223_1-223_0'] = new THREE.Geometry();
geo['223_1-223_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-2.4),
	new THREE.Vector3(9.7,0.35+hS1,-2.4-0.1),
	new THREE.Vector3(9.7,0.05+hS1,-2.4-0.1),
	new THREE.Vector3(9.7,0+hS1,-2.4)
); line['223_1-223_0'] = new THREE.Line(geo['223_1-223_0'], a0);
geo['223_2-223_1'] = new THREE.Geometry();
geo['223_2-223_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-2.4),
	new THREE.Vector3(9.7,0.75+hS1,-2.4-0.1),
	new THREE.Vector3(9.7,0.45+hS1,-2.4-0.1),
	new THREE.Vector3(9.7,0.4+hS1,-2.4)
); line['223_2-223_1'] = new THREE.Line(geo['223_2-223_1'], a0);
geo['223_3-223_2'] = new THREE.Geometry();
geo['223_3-223_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-2.4),
	new THREE.Vector3(9.7,1.15+hS1,-2.4-0.1),
	new THREE.Vector3(9.7,0.85+hS1,-2.4-0.1),
	new THREE.Vector3(9.7,0.8+hS1,-2.4)
); line['223_3-223_2'] = new THREE.Line(geo['223_3-223_2'], a0);
geo['223_2-223_0'] = new THREE.Geometry();
geo['223_2-223_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-2.4),
	new THREE.Vector3(9.7-0.1,0.75+hS1,-2.4),
	new THREE.Vector3(9.7-0.1,0.05+hS1,-2.4),
	new THREE.Vector3(9.7,0+hS1,-2.4)
); line['223_2-223_0'] = new THREE.Line(geo['223_2-223_0'], a0);
geo['223_3-223_1'] = new THREE.Geometry();
geo['223_3-223_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-2.4),
	new THREE.Vector3(9.7+0.1,1.15+hS1,-2.4),
	new THREE.Vector3(9.7+0.1,0.45+hS1,-2.4),
	new THREE.Vector3(9.7,0.4+hS1,-2.4)
); line['223_3-223_1'] = new THREE.Line(geo['223_3-223_1'], a0);
geo['223_3-223_0'] = new THREE.Geometry();
geo['223_3-223_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-2.4),
	new THREE.Vector3(9.7,1.2+hS1,-2.4-0.2),
	new THREE.Vector3(9.7,0+hS1,-2.4-0.2),
	new THREE.Vector3(9.7,0+hS1,-2.4)
); line['223_3-223_0'] = new THREE.Line(geo['223_3-223_0'], a0);
geo['225_1-225_0'] = new THREE.Geometry();
geo['225_1-225_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,-1.5),
	new THREE.Vector3(9.7,0.35+hS1,-1.5-0.1),
	new THREE.Vector3(9.7,0.05+hS1,-1.5-0.1),
	new THREE.Vector3(9.7,0+hS1,-1.5)
); line['225_1-225_0'] = new THREE.Line(geo['225_1-225_0'], a0);
geo['225_2-225_1'] = new THREE.Geometry();
geo['225_2-225_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-1.5),
	new THREE.Vector3(9.7,0.75+hS1,-1.5-0.1),
	new THREE.Vector3(9.7,0.45+hS1,-1.5-0.1),
	new THREE.Vector3(9.7,0.4+hS1,-1.5)
); line['225_2-225_1'] = new THREE.Line(geo['225_2-225_1'], a0);
geo['225_3-225_2'] = new THREE.Geometry();
geo['225_3-225_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-1.5),
	new THREE.Vector3(9.7,1.15+hS1,-1.5-0.1),
	new THREE.Vector3(9.7,0.85+hS1,-1.5-0.1),
	new THREE.Vector3(9.7,0.8+hS1,-1.5)
); line['225_3-225_2'] = new THREE.Line(geo['225_3-225_2'], a0);
geo['225_2-225_0'] = new THREE.Geometry();
geo['225_2-225_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,-1.5),
	new THREE.Vector3(9.7-0.1,0.75+hS1,-1.5),
	new THREE.Vector3(9.7-0.1,0.05+hS1,-1.5),
	new THREE.Vector3(9.7,0+hS1,-1.5)
); line['225_2-225_0'] = new THREE.Line(geo['225_2-225_0'], a0);
geo['225_3-225_1'] = new THREE.Geometry();
geo['225_3-225_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-1.5),
	new THREE.Vector3(9.7+0.1,1.15+hS1,-1.5),
	new THREE.Vector3(9.7+0.1,0.45+hS1,-1.5),
	new THREE.Vector3(9.7,0.4+hS1,-1.5)
); line['225_3-225_1'] = new THREE.Line(geo['225_3-225_1'], a0);
geo['225_3-225_0'] = new THREE.Geometry();
geo['225_3-225_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,-1.5),
	new THREE.Vector3(9.7,1.2+hS1,-1.5-0.2),
	new THREE.Vector3(9.7,0+hS1,-1.5-0.2),
	new THREE.Vector3(9.7,0+hS1,-1.5)
); line['225_3-225_0'] = new THREE.Line(geo['225_3-225_0'], a0);
geo['233_1-233_0'] = new THREE.Geometry();
geo['233_1-233_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,0.1),
	new THREE.Vector3(9.7,0.35+hS1,0.1-0.1),
	new THREE.Vector3(9.7,0.05+hS1,0.1-0.1),
	new THREE.Vector3(9.7,0+hS1,0.1)
); line['233_1-233_0'] = new THREE.Line(geo['233_1-233_0'], a0);
geo['233_2-233_1'] = new THREE.Geometry();
geo['233_2-233_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,0.1),
	new THREE.Vector3(9.7,0.75+hS1,0.1-0.1),
	new THREE.Vector3(9.7,0.45+hS1,0.1-0.1),
	new THREE.Vector3(9.7,0.4+hS1,0.1)
); line['233_2-233_1'] = new THREE.Line(geo['233_2-233_1'], a0);
geo['233_3-233_2'] = new THREE.Geometry();
geo['233_3-233_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,0.1),
	new THREE.Vector3(9.7,1.15+hS1,0.1-0.1),
	new THREE.Vector3(9.7,0.85+hS1,0.1-0.1),
	new THREE.Vector3(9.7,0.8+hS1,0.1)
); line['233_3-233_2'] = new THREE.Line(geo['233_3-233_2'], a0);
geo['233_2-233_0'] = new THREE.Geometry();
geo['233_2-233_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,0.1),
	new THREE.Vector3(9.7-0.1,0.75+hS1,0.1),
	new THREE.Vector3(9.7-0.1,0.05+hS1,0.1),
	new THREE.Vector3(9.7,0+hS1,0.1)
); line['233_2-233_0'] = new THREE.Line(geo['233_2-233_0'], a0);
geo['233_3-233_1'] = new THREE.Geometry();
geo['233_3-233_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,0.1),
	new THREE.Vector3(9.7+0.1,1.15+hS1,0.1),
	new THREE.Vector3(9.7+0.1,0.45+hS1,0.1),
	new THREE.Vector3(9.7,0.4+hS1,0.1)
); line['233_3-233_1'] = new THREE.Line(geo['233_3-233_1'], a0);
geo['233_3-233_0'] = new THREE.Geometry();
geo['233_3-233_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,0.1),
	new THREE.Vector3(9.7,1.2+hS1,0.1-0.2),
	new THREE.Vector3(9.7,0+hS1,0.1-0.2),
	new THREE.Vector3(9.7,0+hS1,0.1)
); line['233_3-233_0'] = new THREE.Line(geo['233_3-233_0'], a0);
geo['235_1-235_0'] = new THREE.Geometry();
geo['235_1-235_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,1.0),
	new THREE.Vector3(9.7,0.35+hS1,1.0-0.1),
	new THREE.Vector3(9.7,0.05+hS1,1.0-0.1),
	new THREE.Vector3(9.7,0+hS1,1.0)
); line['235_1-235_0'] = new THREE.Line(geo['235_1-235_0'], a0);
geo['235_2-235_1'] = new THREE.Geometry();
geo['235_2-235_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,1.0),
	new THREE.Vector3(9.7,0.75+hS1,1.0-0.1),
	new THREE.Vector3(9.7,0.45+hS1,1.0-0.1),
	new THREE.Vector3(9.7,0.4+hS1,1.0)
); line['235_2-235_1'] = new THREE.Line(geo['235_2-235_1'], a0);
geo['235_3-235_2'] = new THREE.Geometry();
geo['235_3-235_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,1.0),
	new THREE.Vector3(9.7,1.15+hS1,1.0-0.1),
	new THREE.Vector3(9.7,0.85+hS1,1.0-0.1),
	new THREE.Vector3(9.7,0.8+hS1,1.0)
); line['235_3-235_2'] = new THREE.Line(geo['235_3-235_2'], a0);
geo['235_2-235_0'] = new THREE.Geometry();
geo['235_2-235_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,1.0),
	new THREE.Vector3(9.7-0.1,0.75+hS1,1.0),
	new THREE.Vector3(9.7-0.1,0.05+hS1,1.0),
	new THREE.Vector3(9.7,0+hS1,1.0)
); line['235_2-235_0'] = new THREE.Line(geo['235_2-235_0'], a0);
geo['235_3-235_1'] = new THREE.Geometry();
geo['235_3-235_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,1.0),
	new THREE.Vector3(9.7+0.1,1.15+hS1,1.0),
	new THREE.Vector3(9.7+0.1,0.45+hS1,1.0),
	new THREE.Vector3(9.7,0.4+hS1,1.0)
); line['235_3-235_1'] = new THREE.Line(geo['235_3-235_1'], a0);
geo['235_3-235_0'] = new THREE.Geometry();
geo['235_3-235_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,1.0),
	new THREE.Vector3(9.7,1.2+hS1,1.0-0.2),
	new THREE.Vector3(9.7,0+hS1,1.0-0.2),
	new THREE.Vector3(9.7,0+hS1,1.0)
); line['235_3-235_0'] = new THREE.Line(geo['235_3-235_0'], a0);
geo['243_1-243_0'] = new THREE.Geometry();
geo['243_1-243_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,2.6),
	new THREE.Vector3(9.7,0.35+hS1,2.6-0.1),
	new THREE.Vector3(9.7,0.05+hS1,2.6-0.1),
	new THREE.Vector3(9.7,0+hS1,2.6)
); line['243_1-243_0'] = new THREE.Line(geo['243_1-243_0'], a0);
geo['243_2-243_1'] = new THREE.Geometry();
geo['243_2-243_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,2.6),
	new THREE.Vector3(9.7,0.75+hS1,2.6-0.1),
	new THREE.Vector3(9.7,0.45+hS1,2.6-0.1),
	new THREE.Vector3(9.7,0.4+hS1,2.6)
); line['243_2-243_1'] = new THREE.Line(geo['243_2-243_1'], a0);
geo['243_3-243_2'] = new THREE.Geometry();
geo['243_3-243_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,2.6),
	new THREE.Vector3(9.7,1.15+hS1,2.6-0.1),
	new THREE.Vector3(9.7,0.85+hS1,2.6-0.1),
	new THREE.Vector3(9.7,0.8+hS1,2.6)
); line['243_3-243_2'] = new THREE.Line(geo['243_3-243_2'], a0);
geo['243_2-243_0'] = new THREE.Geometry();
geo['243_2-243_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,2.6),
	new THREE.Vector3(9.7-0.1,0.75+hS1,2.6),
	new THREE.Vector3(9.7-0.1,0.05+hS1,2.6),
	new THREE.Vector3(9.7,0+hS1,2.6)
); line['243_2-243_0'] = new THREE.Line(geo['243_2-243_0'], a0);
geo['243_3-243_1'] = new THREE.Geometry();
geo['243_3-243_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,2.6),
	new THREE.Vector3(9.7+0.1,1.15+hS1,2.6),
	new THREE.Vector3(9.7+0.1,0.45+hS1,2.6),
	new THREE.Vector3(9.7,0.4+hS1,2.6)
); line['243_3-243_1'] = new THREE.Line(geo['243_3-243_1'], a0);
geo['243_3-243_0'] = new THREE.Geometry();
geo['243_3-243_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,2.6),
	new THREE.Vector3(9.7,1.2+hS1,2.6-0.2),
	new THREE.Vector3(9.7,0+hS1,2.6-0.2),
	new THREE.Vector3(9.7,0+hS1,2.6)
); line['243_3-243_0'] = new THREE.Line(geo['243_3-243_0'], a0);
geo['245_1-245_0'] = new THREE.Geometry();
geo['245_1-245_0'].vertices.push(
	new THREE.Vector3(9.7,0.4+hS1,3.5),
	new THREE.Vector3(9.7,0.35+hS1,3.5-0.1),
	new THREE.Vector3(9.7,0.05+hS1,3.5-0.1),
	new THREE.Vector3(9.7,0+hS1,3.5)
); line['245_1-245_0'] = new THREE.Line(geo['245_1-245_0'], a0);
geo['245_2-245_1'] = new THREE.Geometry();
geo['245_2-245_1'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,3.5),
	new THREE.Vector3(9.7,0.75+hS1,3.5-0.1),
	new THREE.Vector3(9.7,0.45+hS1,3.5-0.1),
	new THREE.Vector3(9.7,0.4+hS1,3.5)
); line['245_2-245_1'] = new THREE.Line(geo['245_2-245_1'], a0);
geo['245_3-245_2'] = new THREE.Geometry();
geo['245_3-245_2'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,3.5),
	new THREE.Vector3(9.7,1.15+hS1,3.5-0.1),
	new THREE.Vector3(9.7,0.85+hS1,3.5-0.1),
	new THREE.Vector3(9.7,0.8+hS1,3.5)
); line['245_3-245_2'] = new THREE.Line(geo['245_3-245_2'], a0);
geo['245_2-245_0'] = new THREE.Geometry();
geo['245_2-245_0'].vertices.push(
	new THREE.Vector3(9.7,0.8+hS1,3.5),
	new THREE.Vector3(9.7-0.1,0.75+hS1,3.5),
	new THREE.Vector3(9.7-0.1,0.05+hS1,3.5),
	new THREE.Vector3(9.7,0+hS1,3.5)
); line['245_2-245_0'] = new THREE.Line(geo['245_2-245_0'], a0);
geo['245_3-245_1'] = new THREE.Geometry();
geo['245_3-245_1'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,3.5),
	new THREE.Vector3(9.7+0.1,1.15+hS1,3.5),
	new THREE.Vector3(9.7+0.1,0.45+hS1,3.5),
	new THREE.Vector3(9.7,0.4+hS1,3.5)
); line['245_3-245_1'] = new THREE.Line(geo['245_3-245_1'], a0);
geo['245_3-245_0'] = new THREE.Geometry();
geo['245_3-245_0'].vertices.push(
	new THREE.Vector3(9.7,1.2+hS1,3.5),
	new THREE.Vector3(9.7,1.2+hS1,3.5-0.2),
	new THREE.Vector3(9.7,0+hS1,3.5-0.2),
	new THREE.Vector3(9.7,0+hS1,3.5)
); line['245_3-245_0'] = new THREE.Line(geo['245_3-245_0'], a0);
geo['378_1-378_0'] = new THREE.Geometry();
geo['378_1-378_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-3.3),
	new THREE.Vector3(-0.7,0.35+hS2,-3.3-0.1),
	new THREE.Vector3(-0.7,0.05+hS2,-3.3-0.1),
	new THREE.Vector3(-0.7,0+hS2,-3.3)
); line['378_1-378_0'] = new THREE.Line(geo['378_1-378_0'], a0);
geo['378_2-378_1'] = new THREE.Geometry();
geo['378_2-378_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-3.3),
	new THREE.Vector3(-0.7,0.75+hS2,-3.3-0.1),
	new THREE.Vector3(-0.7,0.45+hS2,-3.3-0.1),
	new THREE.Vector3(-0.7,0.4+hS2,-3.3)
); line['378_2-378_1'] = new THREE.Line(geo['378_2-378_1'], a0);
geo['378_3-378_2'] = new THREE.Geometry();
geo['378_3-378_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-3.3),
	new THREE.Vector3(-0.7,1.15+hS2,-3.3-0.1),
	new THREE.Vector3(-0.7,0.85+hS2,-3.3-0.1),
	new THREE.Vector3(-0.7,0.8+hS2,-3.3)
); line['378_3-378_2'] = new THREE.Line(geo['378_3-378_2'], a0);
geo['378_2-378_0'] = new THREE.Geometry();
geo['378_2-378_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-3.3),
	new THREE.Vector3(-0.7-0.1,0.75+hS2,-3.3),
	new THREE.Vector3(-0.7-0.1,0.05+hS2,-3.3),
	new THREE.Vector3(-0.7,0+hS2,-3.3)
); line['378_2-378_0'] = new THREE.Line(geo['378_2-378_0'], a0);
geo['378_3-378_1'] = new THREE.Geometry();
geo['378_3-378_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-3.3),
	new THREE.Vector3(-0.7+0.1,1.15+hS2,-3.3),
	new THREE.Vector3(-0.7+0.1,0.45+hS2,-3.3),
	new THREE.Vector3(-0.7,0.4+hS2,-3.3)
); line['378_3-378_1'] = new THREE.Line(geo['378_3-378_1'], a0);
geo['378_3-378_0'] = new THREE.Geometry();
geo['378_3-378_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-3.3),
	new THREE.Vector3(-0.7,1.2+hS2,-3.3-0.2),
	new THREE.Vector3(-0.7,0+hS2,-3.3-0.2),
	new THREE.Vector3(-0.7,0+hS2,-3.3)
); line['378_3-378_0'] = new THREE.Line(geo['378_3-378_0'], a0);
geo['376_1-376_0'] = new THREE.Geometry();
geo['376_1-376_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-2.0),
	new THREE.Vector3(-0.7,0.35+hS2,-2.0-0.1),
	new THREE.Vector3(-0.7,0.05+hS2,-2.0-0.1),
	new THREE.Vector3(-0.7,0+hS2,-2.0)
); line['376_1-376_0'] = new THREE.Line(geo['376_1-376_0'], a0);
geo['376_2-376_1'] = new THREE.Geometry();
geo['376_2-376_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-2.0),
	new THREE.Vector3(-0.7,0.75+hS2,-2.0-0.1),
	new THREE.Vector3(-0.7,0.45+hS2,-2.0-0.1),
	new THREE.Vector3(-0.7,0.4+hS2,-2.0)
); line['376_2-376_1'] = new THREE.Line(geo['376_2-376_1'], a0);
geo['376_3-376_2'] = new THREE.Geometry();
geo['376_3-376_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-2.0),
	new THREE.Vector3(-0.7,1.15+hS2,-2.0-0.1),
	new THREE.Vector3(-0.7,0.85+hS2,-2.0-0.1),
	new THREE.Vector3(-0.7,0.8+hS2,-2.0)
); line['376_3-376_2'] = new THREE.Line(geo['376_3-376_2'], a0);
geo['376_2-376_0'] = new THREE.Geometry();
geo['376_2-376_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-2.0),
	new THREE.Vector3(-0.7-0.1,0.75+hS2,-2.0),
	new THREE.Vector3(-0.7-0.1,0.05+hS2,-2.0),
	new THREE.Vector3(-0.7,0+hS2,-2.0)
); line['376_2-376_0'] = new THREE.Line(geo['376_2-376_0'], a0);
geo['376_3-376_1'] = new THREE.Geometry();
geo['376_3-376_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-2.0),
	new THREE.Vector3(-0.7+0.1,1.15+hS2,-2.0),
	new THREE.Vector3(-0.7+0.1,0.45+hS2,-2.0),
	new THREE.Vector3(-0.7,0.4+hS2,-2.0)
); line['376_3-376_1'] = new THREE.Line(geo['376_3-376_1'], a0);
geo['376_3-376_0'] = new THREE.Geometry();
geo['376_3-376_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-2.0),
	new THREE.Vector3(-0.7,1.2+hS2,-2.0-0.2),
	new THREE.Vector3(-0.7,0+hS2,-2.0-0.2),
	new THREE.Vector3(-0.7,0+hS2,-2.0)
); line['376_3-376_0'] = new THREE.Line(geo['376_3-376_0'], a0);
geo['372_1-372_0'] = new THREE.Geometry();
geo['372_1-372_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-0.7),
	new THREE.Vector3(-0.7,0.35+hS2,-0.7-0.1),
	new THREE.Vector3(-0.7,0.05+hS2,-0.7-0.1),
	new THREE.Vector3(-0.7,0+hS2,-0.7)
); line['372_1-372_0'] = new THREE.Line(geo['372_1-372_0'], a0);
geo['372_2-372_1'] = new THREE.Geometry();
geo['372_2-372_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-0.7),
	new THREE.Vector3(-0.7,0.75+hS2,-0.7-0.1),
	new THREE.Vector3(-0.7,0.45+hS2,-0.7-0.1),
	new THREE.Vector3(-0.7,0.4+hS2,-0.7)
); line['372_2-372_1'] = new THREE.Line(geo['372_2-372_1'], a0);
geo['372_3-372_2'] = new THREE.Geometry();
geo['372_3-372_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-0.7),
	new THREE.Vector3(-0.7,1.15+hS2,-0.7-0.1),
	new THREE.Vector3(-0.7,0.85+hS2,-0.7-0.1),
	new THREE.Vector3(-0.7,0.8+hS2,-0.7)
); line['372_3-372_2'] = new THREE.Line(geo['372_3-372_2'], a0);
geo['372_2-372_0'] = new THREE.Geometry();
geo['372_2-372_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-0.7),
	new THREE.Vector3(-0.7-0.1,0.75+hS2,-0.7),
	new THREE.Vector3(-0.7-0.1,0.05+hS2,-0.7),
	new THREE.Vector3(-0.7,0+hS2,-0.7)
); line['372_2-372_0'] = new THREE.Line(geo['372_2-372_0'], a0);
geo['372_3-372_1'] = new THREE.Geometry();
geo['372_3-372_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-0.7),
	new THREE.Vector3(-0.7+0.1,1.15+hS2,-0.7),
	new THREE.Vector3(-0.7+0.1,0.45+hS2,-0.7),
	new THREE.Vector3(-0.7,0.4+hS2,-0.7)
); line['372_3-372_1'] = new THREE.Line(geo['372_3-372_1'], a0);
geo['372_3-372_0'] = new THREE.Geometry();
geo['372_3-372_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-0.7),
	new THREE.Vector3(-0.7,1.2+hS2,-0.7-0.2),
	new THREE.Vector3(-0.7,0+hS2,-0.7-0.2),
	new THREE.Vector3(-0.7,0+hS2,-0.7)
); line['372_3-372_0'] = new THREE.Line(geo['372_3-372_0'], a0);
geo['379_1-379_0'] = new THREE.Geometry();
geo['379_1-379_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-3.3),
	new THREE.Vector3(-2.8-0.1,0.35+hS2,-3.3),
	new THREE.Vector3(-2.8-0.1,0.05+hS2,-3.3),
	new THREE.Vector3(-2.8,0+hS2,-3.3)
); line['379_1-379_0'] = new THREE.Line(geo['379_1-379_0'], a0);
geo['379_2-379_1'] = new THREE.Geometry();
geo['379_2-379_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-3.3),
	new THREE.Vector3(-2.8-0.1,0.75+hS2,-3.3),
	new THREE.Vector3(-2.8-0.1,0.45+hS2,-3.3),
	new THREE.Vector3(-2.8,0.4+hS2,-3.3)
); line['379_2-379_1'] = new THREE.Line(geo['379_2-379_1'], a0);
geo['379_3-379_2'] = new THREE.Geometry();
geo['379_3-379_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-3.3),
	new THREE.Vector3(-2.8-0.1,1.15+hS2,-3.3),
	new THREE.Vector3(-2.8-0.1,0.85+hS2,-3.3),
	new THREE.Vector3(-2.8,0.8+hS2,-3.3)
); line['379_3-379_2'] = new THREE.Line(geo['379_3-379_2'], a0);
geo['379_2-379_0'] = new THREE.Geometry();
geo['379_2-379_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-3.3),
	new THREE.Vector3(-2.8,0.75+hS2,-3.3-0.1),
	new THREE.Vector3(-2.8,0.05+hS2,-3.3-0.1),
	new THREE.Vector3(-2.8,0+hS2,-3.3)
); line['379_2-379_0'] = new THREE.Line(geo['379_2-379_0'], a0);
geo['379_3-379_1'] = new THREE.Geometry();
geo['379_3-379_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-3.3),
	new THREE.Vector3(-2.8,1.15+hS2,-3.3+0.1),
	new THREE.Vector3(-2.8,0.45+hS2,-3.3+0.1),
	new THREE.Vector3(-2.8,0.4+hS2,-3.3)
); line['379_3-379_1'] = new THREE.Line(geo['379_3-379_1'], a0);
geo['379_3-379_0'] = new THREE.Geometry();
geo['379_3-379_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-3.3),
	new THREE.Vector3(-2.8-0.2,1.2+hS2,-3.3),
	new THREE.Vector3(-2.8-0.2,0+hS2,-3.3),
	new THREE.Vector3(-2.8,0+hS2,-3.3)
); line['379_3-379_0'] = new THREE.Line(geo['379_3-379_0'], a0);
geo['377_1-377_0'] = new THREE.Geometry();
geo['377_1-377_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-2.0),
	new THREE.Vector3(-2.8-0.1,0.35+hS2,-2.0),
	new THREE.Vector3(-2.8-0.1,0.05+hS2,-2.0),
	new THREE.Vector3(-2.8,0+hS2,-2.0)
); line['377_1-377_0'] = new THREE.Line(geo['377_1-377_0'], a0);
geo['377_2-377_1'] = new THREE.Geometry();
geo['377_2-377_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-2.0),
	new THREE.Vector3(-2.8-0.1,0.75+hS2,-2.0),
	new THREE.Vector3(-2.8-0.1,0.45+hS2,-2.0),
	new THREE.Vector3(-2.8,0.4+hS2,-2.0)
); line['377_2-377_1'] = new THREE.Line(geo['377_2-377_1'], a0);
geo['377_3-377_2'] = new THREE.Geometry();
geo['377_3-377_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-2.0),
	new THREE.Vector3(-2.8-0.1,1.15+hS2,-2.0),
	new THREE.Vector3(-2.8-0.1,0.85+hS2,-2.0),
	new THREE.Vector3(-2.8,0.8+hS2,-2.0)
); line['377_3-377_2'] = new THREE.Line(geo['377_3-377_2'], a0);
geo['377_2-377_0'] = new THREE.Geometry();
geo['377_2-377_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-2.0),
	new THREE.Vector3(-2.8,0.75+hS2,-2.0-0.1),
	new THREE.Vector3(-2.8,0.05+hS2,-2.0-0.1),
	new THREE.Vector3(-2.8,0+hS2,-2.0)
); line['377_2-377_0'] = new THREE.Line(geo['377_2-377_0'], a0);
geo['377_3-377_1'] = new THREE.Geometry();
geo['377_3-377_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-2.0),
	new THREE.Vector3(-2.8,1.15+hS2,-2.0+0.1),
	new THREE.Vector3(-2.8,0.45+hS2,-2.0+0.1),
	new THREE.Vector3(-2.8,0.4+hS2,-2.0)
); line['377_3-377_1'] = new THREE.Line(geo['377_3-377_1'], a0);
geo['377_3-377_0'] = new THREE.Geometry();
geo['377_3-377_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-2.0),
	new THREE.Vector3(-2.8-0.2,1.2+hS2,-2.0),
	new THREE.Vector3(-2.8-0.2,0+hS2,-2.0),
	new THREE.Vector3(-2.8,0+hS2,-2.0)
); line['377_3-377_0'] = new THREE.Line(geo['377_3-377_0'], a0);
geo['375_1-375_0'] = new THREE.Geometry();
geo['375_1-375_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-0.7),
	new THREE.Vector3(-2.8-0.1,0.35+hS2,-0.7),
	new THREE.Vector3(-2.8-0.1,0.05+hS2,-0.7),
	new THREE.Vector3(-2.8,0+hS2,-0.7)
); line['375_1-375_0'] = new THREE.Line(geo['375_1-375_0'], a0);
geo['375_2-375_1'] = new THREE.Geometry();
geo['375_2-375_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-0.7),
	new THREE.Vector3(-2.8-0.1,0.75+hS2,-0.7),
	new THREE.Vector3(-2.8-0.1,0.45+hS2,-0.7),
	new THREE.Vector3(-2.8,0.4+hS2,-0.7)
); line['375_2-375_1'] = new THREE.Line(geo['375_2-375_1'], a0);
geo['375_3-375_2'] = new THREE.Geometry();
geo['375_3-375_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-0.7),
	new THREE.Vector3(-2.8-0.1,1.15+hS2,-0.7),
	new THREE.Vector3(-2.8-0.1,0.85+hS2,-0.7),
	new THREE.Vector3(-2.8,0.8+hS2,-0.7)
); line['375_3-375_2'] = new THREE.Line(geo['375_3-375_2'], a0);
geo['375_2-375_0'] = new THREE.Geometry();
geo['375_2-375_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-0.7),
	new THREE.Vector3(-2.8,0.75+hS2,-0.7-0.1),
	new THREE.Vector3(-2.8,0.05+hS2,-0.7-0.1),
	new THREE.Vector3(-2.8,0+hS2,-0.7)
); line['375_2-375_0'] = new THREE.Line(geo['375_2-375_0'], a0);
geo['375_3-375_1'] = new THREE.Geometry();
geo['375_3-375_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-0.7),
	new THREE.Vector3(-2.8,1.15+hS2,-0.7+0.1),
	new THREE.Vector3(-2.8,0.45+hS2,-0.7+0.1),
	new THREE.Vector3(-2.8,0.4+hS2,-0.7)
); line['375_3-375_1'] = new THREE.Line(geo['375_3-375_1'], a0);
geo['375_3-375_0'] = new THREE.Geometry();
geo['375_3-375_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-0.7),
	new THREE.Vector3(-2.8-0.2,1.2+hS2,-0.7),
	new THREE.Vector3(-2.8-0.2,0+hS2,-0.7),
	new THREE.Vector3(-2.8,0+hS2,-0.7)
); line['375_3-375_0'] = new THREE.Line(geo['375_3-375_0'], a0);
geo['371_1-371_0'] = new THREE.Geometry();
geo['371_1-371_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,0.6),
	new THREE.Vector3(-2.8-0.1,0.35+hS2,0.6),
	new THREE.Vector3(-2.8-0.1,0.05+hS2,0.6),
	new THREE.Vector3(-2.8,0+hS2,0.6)
); line['371_1-371_0'] = new THREE.Line(geo['371_1-371_0'], a0);
geo['371_2-371_1'] = new THREE.Geometry();
geo['371_2-371_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,0.6),
	new THREE.Vector3(-2.8-0.1,0.75+hS2,0.6),
	new THREE.Vector3(-2.8-0.1,0.45+hS2,0.6),
	new THREE.Vector3(-2.8,0.4+hS2,0.6)
); line['371_2-371_1'] = new THREE.Line(geo['371_2-371_1'], a0);
geo['371_3-371_2'] = new THREE.Geometry();
geo['371_3-371_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,0.6),
	new THREE.Vector3(-2.8-0.1,1.15+hS2,0.6),
	new THREE.Vector3(-2.8-0.1,0.85+hS2,0.6),
	new THREE.Vector3(-2.8,0.8+hS2,0.6)
); line['371_3-371_2'] = new THREE.Line(geo['371_3-371_2'], a0);
geo['371_2-371_0'] = new THREE.Geometry();
geo['371_2-371_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,0.6),
	new THREE.Vector3(-2.8,0.75+hS2,0.6-0.1),
	new THREE.Vector3(-2.8,0.05+hS2,0.6-0.1),
	new THREE.Vector3(-2.8,0+hS2,0.6)
); line['371_2-371_0'] = new THREE.Line(geo['371_2-371_0'], a0);
geo['371_3-371_1'] = new THREE.Geometry();
geo['371_3-371_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,0.6),
	new THREE.Vector3(-2.8,1.15+hS2,0.6+0.1),
	new THREE.Vector3(-2.8,0.45+hS2,0.6+0.1),
	new THREE.Vector3(-2.8,0.4+hS2,0.6)
); line['371_3-371_1'] = new THREE.Line(geo['371_3-371_1'], a0);
geo['371_3-371_0'] = new THREE.Geometry();
geo['371_3-371_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,0.6),
	new THREE.Vector3(-2.8-0.2,1.2+hS2,0.6),
	new THREE.Vector3(-2.8-0.2,0+hS2,0.6),
	new THREE.Vector3(-2.8,0+hS2,0.6)
); line['371_3-371_0'] = new THREE.Line(geo['371_3-371_0'], a0);
geo['365_1-365_0'] = new THREE.Geometry();
geo['365_1-365_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,2.8),
	new THREE.Vector3(-2.8-0.1,0.35+hS2,2.8),
	new THREE.Vector3(-2.8-0.1,0.05+hS2,2.8),
	new THREE.Vector3(-2.8,0+hS2,2.8)
); line['365_1-365_0'] = new THREE.Line(geo['365_1-365_0'], a0);
geo['365_2-365_1'] = new THREE.Geometry();
geo['365_2-365_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,2.8),
	new THREE.Vector3(-2.8-0.1,0.75+hS2,2.8),
	new THREE.Vector3(-2.8-0.1,0.45+hS2,2.8),
	new THREE.Vector3(-2.8,0.4+hS2,2.8)
); line['365_2-365_1'] = new THREE.Line(geo['365_2-365_1'], a0);
geo['365_3-365_2'] = new THREE.Geometry();
geo['365_3-365_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,2.8),
	new THREE.Vector3(-2.8-0.1,1.15+hS2,2.8),
	new THREE.Vector3(-2.8-0.1,0.85+hS2,2.8),
	new THREE.Vector3(-2.8,0.8+hS2,2.8)
); line['365_3-365_2'] = new THREE.Line(geo['365_3-365_2'], a0);
geo['365_2-365_0'] = new THREE.Geometry();
geo['365_2-365_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,2.8),
	new THREE.Vector3(-2.8,0.75+hS2,2.8-0.1),
	new THREE.Vector3(-2.8,0.05+hS2,2.8-0.1),
	new THREE.Vector3(-2.8,0+hS2,2.8)
); line['365_2-365_0'] = new THREE.Line(geo['365_2-365_0'], a0);
geo['365_3-365_1'] = new THREE.Geometry();
geo['365_3-365_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,2.8),
	new THREE.Vector3(-2.8,1.15+hS2,2.8+0.1),
	new THREE.Vector3(-2.8,0.45+hS2,2.8+0.1),
	new THREE.Vector3(-2.8,0.4+hS2,2.8)
); line['365_3-365_1'] = new THREE.Line(geo['365_3-365_1'], a0);
geo['365_3-365_0'] = new THREE.Geometry();
geo['365_3-365_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,2.8),
	new THREE.Vector3(-2.8-0.2,1.2+hS2,2.8),
	new THREE.Vector3(-2.8-0.2,0+hS2,2.8),
	new THREE.Vector3(-2.8,0+hS2,2.8)
); line['365_3-365_0'] = new THREE.Line(geo['365_3-365_0'], a0);
geo['363_1-363_0'] = new THREE.Geometry();
geo['363_1-363_0'].vertices.push(
	new THREE.Vector3(-0.6,0.4+hS2,2.8),
	new THREE.Vector3(-0.6-0.1,0.35+hS2,2.8),
	new THREE.Vector3(-0.6-0.1,0.05+hS2,2.8),
	new THREE.Vector3(-0.6,0+hS2,2.8)
); line['363_1-363_0'] = new THREE.Line(geo['363_1-363_0'], a0);
geo['363_2-363_1'] = new THREE.Geometry();
geo['363_2-363_1'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS2,2.8),
	new THREE.Vector3(-0.6-0.1,0.75+hS2,2.8),
	new THREE.Vector3(-0.6-0.1,0.45+hS2,2.8),
	new THREE.Vector3(-0.6,0.4+hS2,2.8)
); line['363_2-363_1'] = new THREE.Line(geo['363_2-363_1'], a0);
geo['363_3-363_2'] = new THREE.Geometry();
geo['363_3-363_2'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS2,2.8),
	new THREE.Vector3(-0.6-0.1,1.15+hS2,2.8),
	new THREE.Vector3(-0.6-0.1,0.85+hS2,2.8),
	new THREE.Vector3(-0.6,0.8+hS2,2.8)
); line['363_3-363_2'] = new THREE.Line(geo['363_3-363_2'], a0);
geo['363_2-363_0'] = new THREE.Geometry();
geo['363_2-363_0'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS2,2.8),
	new THREE.Vector3(-0.6,0.75+hS2,2.8-0.1),
	new THREE.Vector3(-0.6,0.05+hS2,2.8-0.1),
	new THREE.Vector3(-0.6,0+hS2,2.8)
); line['363_2-363_0'] = new THREE.Line(geo['363_2-363_0'], a0);
geo['363_3-363_1'] = new THREE.Geometry();
geo['363_3-363_1'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS2,2.8),
	new THREE.Vector3(-0.6,1.15+hS2,2.8+0.1),
	new THREE.Vector3(-0.6,0.45+hS2,2.8+0.1),
	new THREE.Vector3(-0.6,0.4+hS2,2.8)
); line['363_3-363_1'] = new THREE.Line(geo['363_3-363_1'], a0);
geo['363_3-363_0'] = new THREE.Geometry();
geo['363_3-363_0'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS2,2.8),
	new THREE.Vector3(-0.6-0.2,1.2+hS2,2.8),
	new THREE.Vector3(-0.6-0.2,0+hS2,2.8),
	new THREE.Vector3(-0.6,0+hS2,2.8)
); line['363_3-363_0'] = new THREE.Line(geo['363_3-363_0'], a0);
geo['361_1-361_0'] = new THREE.Geometry();
geo['361_1-361_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS2,2.8),
	new THREE.Vector3(0.7-0.1,0.35+hS2,2.8),
	new THREE.Vector3(0.7-0.1,0.05+hS2,2.8),
	new THREE.Vector3(0.7,0+hS2,2.8)
); line['361_1-361_0'] = new THREE.Line(geo['361_1-361_0'], a0);
geo['361_2-361_1'] = new THREE.Geometry();
geo['361_2-361_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,2.8),
	new THREE.Vector3(0.7-0.1,0.75+hS2,2.8),
	new THREE.Vector3(0.7-0.1,0.45+hS2,2.8),
	new THREE.Vector3(0.7,0.4+hS2,2.8)
); line['361_2-361_1'] = new THREE.Line(geo['361_2-361_1'], a0);
geo['361_3-361_2'] = new THREE.Geometry();
geo['361_3-361_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,2.8),
	new THREE.Vector3(0.7-0.1,1.15+hS2,2.8),
	new THREE.Vector3(0.7-0.1,0.85+hS2,2.8),
	new THREE.Vector3(0.7,0.8+hS2,2.8)
); line['361_3-361_2'] = new THREE.Line(geo['361_3-361_2'], a0);
geo['361_2-361_0'] = new THREE.Geometry();
geo['361_2-361_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,2.8),
	new THREE.Vector3(0.7,0.75+hS2,2.8-0.1),
	new THREE.Vector3(0.7,0.05+hS2,2.8-0.1),
	new THREE.Vector3(0.7,0+hS2,2.8)
); line['361_2-361_0'] = new THREE.Line(geo['361_2-361_0'], a0);
geo['361_3-361_1'] = new THREE.Geometry();
geo['361_3-361_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,2.8),
	new THREE.Vector3(0.7,1.15+hS2,2.8+0.1),
	new THREE.Vector3(0.7,0.45+hS2,2.8+0.1),
	new THREE.Vector3(0.7,0.4+hS2,2.8)
); line['361_3-361_1'] = new THREE.Line(geo['361_3-361_1'], a0);
geo['361_3-361_0'] = new THREE.Geometry();
geo['361_3-361_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,2.8),
	new THREE.Vector3(0.7-0.2,1.2+hS2,2.8),
	new THREE.Vector3(0.7-0.2,0+hS2,2.8),
	new THREE.Vector3(0.7,0+hS2,2.8)
); line['361_3-361_0'] = new THREE.Line(geo['361_3-361_0'], a0);
geo['359_1-359_0'] = new THREE.Geometry();
geo['359_1-359_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS2,2.8),
	new THREE.Vector3(2.0-0.1,0.35+hS2,2.8),
	new THREE.Vector3(2.0-0.1,0.05+hS2,2.8),
	new THREE.Vector3(2.0,0+hS2,2.8)
); line['359_1-359_0'] = new THREE.Line(geo['359_1-359_0'], a0);
geo['359_2-359_1'] = new THREE.Geometry();
geo['359_2-359_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,2.8),
	new THREE.Vector3(2.0-0.1,0.75+hS2,2.8),
	new THREE.Vector3(2.0-0.1,0.45+hS2,2.8),
	new THREE.Vector3(2.0,0.4+hS2,2.8)
); line['359_2-359_1'] = new THREE.Line(geo['359_2-359_1'], a0);
geo['359_3-359_2'] = new THREE.Geometry();
geo['359_3-359_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,2.8),
	new THREE.Vector3(2.0-0.1,1.15+hS2,2.8),
	new THREE.Vector3(2.0-0.1,0.85+hS2,2.8),
	new THREE.Vector3(2.0,0.8+hS2,2.8)
); line['359_3-359_2'] = new THREE.Line(geo['359_3-359_2'], a0);
geo['359_2-359_0'] = new THREE.Geometry();
geo['359_2-359_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,2.8),
	new THREE.Vector3(2.0,0.75+hS2,2.8-0.1),
	new THREE.Vector3(2.0,0.05+hS2,2.8-0.1),
	new THREE.Vector3(2.0,0+hS2,2.8)
); line['359_2-359_0'] = new THREE.Line(geo['359_2-359_0'], a0);
geo['359_3-359_1'] = new THREE.Geometry();
geo['359_3-359_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,2.8),
	new THREE.Vector3(2.0,1.15+hS2,2.8+0.1),
	new THREE.Vector3(2.0,0.45+hS2,2.8+0.1),
	new THREE.Vector3(2.0,0.4+hS2,2.8)
); line['359_3-359_1'] = new THREE.Line(geo['359_3-359_1'], a0);
geo['359_3-359_0'] = new THREE.Geometry();
geo['359_3-359_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,2.8),
	new THREE.Vector3(2.0-0.2,1.2+hS2,2.8),
	new THREE.Vector3(2.0-0.2,0+hS2,2.8),
	new THREE.Vector3(2.0,0+hS2,2.8)
); line['359_3-359_0'] = new THREE.Line(geo['359_3-359_0'], a0);
geo['357_1-357_0'] = new THREE.Geometry();
geo['357_1-357_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS2,2.8),
	new THREE.Vector3(3.3-0.1,0.35+hS2,2.8),
	new THREE.Vector3(3.3-0.1,0.05+hS2,2.8),
	new THREE.Vector3(3.3,0+hS2,2.8)
); line['357_1-357_0'] = new THREE.Line(geo['357_1-357_0'], a0);
geo['357_2-357_1'] = new THREE.Geometry();
geo['357_2-357_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,2.8),
	new THREE.Vector3(3.3-0.1,0.75+hS2,2.8),
	new THREE.Vector3(3.3-0.1,0.45+hS2,2.8),
	new THREE.Vector3(3.3,0.4+hS2,2.8)
); line['357_2-357_1'] = new THREE.Line(geo['357_2-357_1'], a0);
geo['357_3-357_2'] = new THREE.Geometry();
geo['357_3-357_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,2.8),
	new THREE.Vector3(3.3-0.1,1.15+hS2,2.8),
	new THREE.Vector3(3.3-0.1,0.85+hS2,2.8),
	new THREE.Vector3(3.3,0.8+hS2,2.8)
); line['357_3-357_2'] = new THREE.Line(geo['357_3-357_2'], a0);
geo['357_2-357_0'] = new THREE.Geometry();
geo['357_2-357_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,2.8),
	new THREE.Vector3(3.3,0.75+hS2,2.8-0.1),
	new THREE.Vector3(3.3,0.05+hS2,2.8-0.1),
	new THREE.Vector3(3.3,0+hS2,2.8)
); line['357_2-357_0'] = new THREE.Line(geo['357_2-357_0'], a0);
geo['357_3-357_1'] = new THREE.Geometry();
geo['357_3-357_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,2.8),
	new THREE.Vector3(3.3,1.15+hS2,2.8+0.1),
	new THREE.Vector3(3.3,0.45+hS2,2.8+0.1),
	new THREE.Vector3(3.3,0.4+hS2,2.8)
); line['357_3-357_1'] = new THREE.Line(geo['357_3-357_1'], a0);
geo['357_3-357_0'] = new THREE.Geometry();
geo['357_3-357_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,2.8),
	new THREE.Vector3(3.3-0.2,1.2+hS2,2.8),
	new THREE.Vector3(3.3-0.2,0+hS2,2.8),
	new THREE.Vector3(3.3,0+hS2,2.8)
); line['357_3-357_0'] = new THREE.Line(geo['357_3-357_0'], a0);
geo['360_1-360_0'] = new THREE.Geometry();
geo['360_1-360_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS2,0.7),
	new THREE.Vector3(0.7,0.35+hS2,0.7-0.1),
	new THREE.Vector3(0.7,0.05+hS2,0.7-0.1),
	new THREE.Vector3(0.7,0+hS2,0.7)
); line['360_1-360_0'] = new THREE.Line(geo['360_1-360_0'], a0);
geo['360_2-360_1'] = new THREE.Geometry();
geo['360_2-360_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,0.7),
	new THREE.Vector3(0.7,0.75+hS2,0.7-0.1),
	new THREE.Vector3(0.7,0.45+hS2,0.7-0.1),
	new THREE.Vector3(0.7,0.4+hS2,0.7)
); line['360_2-360_1'] = new THREE.Line(geo['360_2-360_1'], a0);
geo['360_3-360_2'] = new THREE.Geometry();
geo['360_3-360_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,0.7),
	new THREE.Vector3(0.7,1.15+hS2,0.7-0.1),
	new THREE.Vector3(0.7,0.85+hS2,0.7-0.1),
	new THREE.Vector3(0.7,0.8+hS2,0.7)
); line['360_3-360_2'] = new THREE.Line(geo['360_3-360_2'], a0);
geo['360_2-360_0'] = new THREE.Geometry();
geo['360_2-360_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,0.7),
	new THREE.Vector3(0.7-0.1,0.75+hS2,0.7),
	new THREE.Vector3(0.7-0.1,0.05+hS2,0.7),
	new THREE.Vector3(0.7,0+hS2,0.7)
); line['360_2-360_0'] = new THREE.Line(geo['360_2-360_0'], a0);
geo['360_3-360_1'] = new THREE.Geometry();
geo['360_3-360_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,0.7),
	new THREE.Vector3(0.7+0.1,1.15+hS2,0.7),
	new THREE.Vector3(0.7+0.1,0.45+hS2,0.7),
	new THREE.Vector3(0.7,0.4+hS2,0.7)
); line['360_3-360_1'] = new THREE.Line(geo['360_3-360_1'], a0);
geo['360_3-360_0'] = new THREE.Geometry();
geo['360_3-360_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,0.7),
	new THREE.Vector3(0.7,1.2+hS2,0.7-0.2),
	new THREE.Vector3(0.7,0+hS2,0.7-0.2),
	new THREE.Vector3(0.7,0+hS2,0.7)
); line['360_3-360_0'] = new THREE.Line(geo['360_3-360_0'], a0);
geo['356_1-356_0'] = new THREE.Geometry();
geo['356_1-356_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS2,0.7),
	new THREE.Vector3(2.0,0.35+hS2,0.7-0.1),
	new THREE.Vector3(2.0,0.05+hS2,0.7-0.1),
	new THREE.Vector3(2.0,0+hS2,0.7)
); line['356_1-356_0'] = new THREE.Line(geo['356_1-356_0'], a0);
geo['356_2-356_1'] = new THREE.Geometry();
geo['356_2-356_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,0.7),
	new THREE.Vector3(2.0,0.75+hS2,0.7-0.1),
	new THREE.Vector3(2.0,0.45+hS2,0.7-0.1),
	new THREE.Vector3(2.0,0.4+hS2,0.7)
); line['356_2-356_1'] = new THREE.Line(geo['356_2-356_1'], a0);
geo['356_3-356_2'] = new THREE.Geometry();
geo['356_3-356_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,0.7),
	new THREE.Vector3(2.0,1.15+hS2,0.7-0.1),
	new THREE.Vector3(2.0,0.85+hS2,0.7-0.1),
	new THREE.Vector3(2.0,0.8+hS2,0.7)
); line['356_3-356_2'] = new THREE.Line(geo['356_3-356_2'], a0);
geo['356_2-356_0'] = new THREE.Geometry();
geo['356_2-356_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,0.7),
	new THREE.Vector3(2.0-0.1,0.75+hS2,0.7),
	new THREE.Vector3(2.0-0.1,0.05+hS2,0.7),
	new THREE.Vector3(2.0,0+hS2,0.7)
); line['356_2-356_0'] = new THREE.Line(geo['356_2-356_0'], a0);
geo['356_3-356_1'] = new THREE.Geometry();
geo['356_3-356_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,0.7),
	new THREE.Vector3(2.0+0.1,1.15+hS2,0.7),
	new THREE.Vector3(2.0+0.1,0.45+hS2,0.7),
	new THREE.Vector3(2.0,0.4+hS2,0.7)
); line['356_3-356_1'] = new THREE.Line(geo['356_3-356_1'], a0);
geo['356_3-356_0'] = new THREE.Geometry();
geo['356_3-356_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,0.7),
	new THREE.Vector3(2.0,1.2+hS2,0.7-0.2),
	new THREE.Vector3(2.0,0+hS2,0.7-0.2),
	new THREE.Vector3(2.0,0+hS2,0.7)
); line['356_3-356_0'] = new THREE.Line(geo['356_3-356_0'], a0);
geo['354_1-354_0'] = new THREE.Geometry();
geo['354_1-354_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS2,0.7),
	new THREE.Vector3(3.3,0.35+hS2,0.7-0.1),
	new THREE.Vector3(3.3,0.05+hS2,0.7-0.1),
	new THREE.Vector3(3.3,0+hS2,0.7)
); line['354_1-354_0'] = new THREE.Line(geo['354_1-354_0'], a0);
geo['354_2-354_1'] = new THREE.Geometry();
geo['354_2-354_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,0.7),
	new THREE.Vector3(3.3,0.75+hS2,0.7-0.1),
	new THREE.Vector3(3.3,0.45+hS2,0.7-0.1),
	new THREE.Vector3(3.3,0.4+hS2,0.7)
); line['354_2-354_1'] = new THREE.Line(geo['354_2-354_1'], a0);
geo['354_3-354_2'] = new THREE.Geometry();
geo['354_3-354_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,0.7),
	new THREE.Vector3(3.3,1.15+hS2,0.7-0.1),
	new THREE.Vector3(3.3,0.85+hS2,0.7-0.1),
	new THREE.Vector3(3.3,0.8+hS2,0.7)
); line['354_3-354_2'] = new THREE.Line(geo['354_3-354_2'], a0);
geo['354_2-354_0'] = new THREE.Geometry();
geo['354_2-354_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,0.7),
	new THREE.Vector3(3.3-0.1,0.75+hS2,0.7),
	new THREE.Vector3(3.3-0.1,0.05+hS2,0.7),
	new THREE.Vector3(3.3,0+hS2,0.7)
); line['354_2-354_0'] = new THREE.Line(geo['354_2-354_0'], a0);
geo['354_3-354_1'] = new THREE.Geometry();
geo['354_3-354_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,0.7),
	new THREE.Vector3(3.3+0.1,1.15+hS2,0.7),
	new THREE.Vector3(3.3+0.1,0.45+hS2,0.7),
	new THREE.Vector3(3.3,0.4+hS2,0.7)
); line['354_3-354_1'] = new THREE.Line(geo['354_3-354_1'], a0);
geo['354_3-354_0'] = new THREE.Geometry();
geo['354_3-354_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,0.7),
	new THREE.Vector3(3.3,1.2+hS2,0.7-0.2),
	new THREE.Vector3(3.3,0+hS2,0.7-0.2),
	new THREE.Vector3(3.3,0+hS2,0.7)
); line['354_3-354_0'] = new THREE.Line(geo['354_3-354_0'], a0);
geo['353_1-353_0'] = new THREE.Geometry();
geo['353_1-353_0'].vertices.push(
	new THREE.Vector3(4.7,0.4+hS2,2.8),
	new THREE.Vector3(4.7-0.1,0.35+hS2,2.8),
	new THREE.Vector3(4.7-0.1,0.05+hS2,2.8),
	new THREE.Vector3(4.7,0+hS2,2.8)
); line['353_1-353_0'] = new THREE.Line(geo['353_1-353_0'], a0);
geo['353_2-353_1'] = new THREE.Geometry();
geo['353_2-353_1'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS2,2.8),
	new THREE.Vector3(4.7-0.1,0.75+hS2,2.8),
	new THREE.Vector3(4.7-0.1,0.45+hS2,2.8),
	new THREE.Vector3(4.7,0.4+hS2,2.8)
); line['353_2-353_1'] = new THREE.Line(geo['353_2-353_1'], a0);
geo['353_3-353_2'] = new THREE.Geometry();
geo['353_3-353_2'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS2,2.8),
	new THREE.Vector3(4.7-0.1,1.15+hS2,2.8),
	new THREE.Vector3(4.7-0.1,0.85+hS2,2.8),
	new THREE.Vector3(4.7,0.8+hS2,2.8)
); line['353_3-353_2'] = new THREE.Line(geo['353_3-353_2'], a0);
geo['353_2-353_0'] = new THREE.Geometry();
geo['353_2-353_0'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS2,2.8),
	new THREE.Vector3(4.7,0.75+hS2,2.8-0.1),
	new THREE.Vector3(4.7,0.05+hS2,2.8-0.1),
	new THREE.Vector3(4.7,0+hS2,2.8)
); line['353_2-353_0'] = new THREE.Line(geo['353_2-353_0'], a0);
geo['353_3-353_1'] = new THREE.Geometry();
geo['353_3-353_1'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS2,2.8),
	new THREE.Vector3(4.7,1.15+hS2,2.8+0.1),
	new THREE.Vector3(4.7,0.45+hS2,2.8+0.1),
	new THREE.Vector3(4.7,0.4+hS2,2.8)
); line['353_3-353_1'] = new THREE.Line(geo['353_3-353_1'], a0);
geo['353_3-353_0'] = new THREE.Geometry();
geo['353_3-353_0'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS2,2.8),
	new THREE.Vector3(4.7-0.2,1.2+hS2,2.8),
	new THREE.Vector3(4.7-0.2,0+hS2,2.8),
	new THREE.Vector3(4.7,0+hS2,2.8)
); line['353_3-353_0'] = new THREE.Line(geo['353_3-353_0'], a0);
geo['278_1-278_0'] = new THREE.Geometry();
geo['278_1-278_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-3.3),
	new THREE.Vector3(-0.7,0.35+hS1,-3.3-0.1),
	new THREE.Vector3(-0.7,0.05+hS1,-3.3-0.1),
	new THREE.Vector3(-0.7,0+hS1,-3.3)
); line['278_1-278_0'] = new THREE.Line(geo['278_1-278_0'], a0);
geo['278_2-278_1'] = new THREE.Geometry();
geo['278_2-278_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-3.3),
	new THREE.Vector3(-0.7,0.75+hS1,-3.3-0.1),
	new THREE.Vector3(-0.7,0.45+hS1,-3.3-0.1),
	new THREE.Vector3(-0.7,0.4+hS1,-3.3)
); line['278_2-278_1'] = new THREE.Line(geo['278_2-278_1'], a0);
geo['278_3-278_2'] = new THREE.Geometry();
geo['278_3-278_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-3.3),
	new THREE.Vector3(-0.7,1.15+hS1,-3.3-0.1),
	new THREE.Vector3(-0.7,0.85+hS1,-3.3-0.1),
	new THREE.Vector3(-0.7,0.8+hS1,-3.3)
); line['278_3-278_2'] = new THREE.Line(geo['278_3-278_2'], a0);
geo['278_2-278_0'] = new THREE.Geometry();
geo['278_2-278_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-3.3),
	new THREE.Vector3(-0.7-0.1,0.75+hS1,-3.3),
	new THREE.Vector3(-0.7-0.1,0.05+hS1,-3.3),
	new THREE.Vector3(-0.7,0+hS1,-3.3)
); line['278_2-278_0'] = new THREE.Line(geo['278_2-278_0'], a0);
geo['278_3-278_1'] = new THREE.Geometry();
geo['278_3-278_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-3.3),
	new THREE.Vector3(-0.7+0.1,1.15+hS1,-3.3),
	new THREE.Vector3(-0.7+0.1,0.45+hS1,-3.3),
	new THREE.Vector3(-0.7,0.4+hS1,-3.3)
); line['278_3-278_1'] = new THREE.Line(geo['278_3-278_1'], a0);
geo['278_3-278_0'] = new THREE.Geometry();
geo['278_3-278_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-3.3),
	new THREE.Vector3(-0.7,1.2+hS1,-3.3-0.2),
	new THREE.Vector3(-0.7,0+hS1,-3.3-0.2),
	new THREE.Vector3(-0.7,0+hS1,-3.3)
); line['278_3-278_0'] = new THREE.Line(geo['278_3-278_0'], a0);
geo['276_1-276_0'] = new THREE.Geometry();
geo['276_1-276_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-2.0),
	new THREE.Vector3(-0.7,0.35+hS1,-2.0-0.1),
	new THREE.Vector3(-0.7,0.05+hS1,-2.0-0.1),
	new THREE.Vector3(-0.7,0+hS1,-2.0)
); line['276_1-276_0'] = new THREE.Line(geo['276_1-276_0'], a0);
geo['276_2-276_1'] = new THREE.Geometry();
geo['276_2-276_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-2.0),
	new THREE.Vector3(-0.7,0.75+hS1,-2.0-0.1),
	new THREE.Vector3(-0.7,0.45+hS1,-2.0-0.1),
	new THREE.Vector3(-0.7,0.4+hS1,-2.0)
); line['276_2-276_1'] = new THREE.Line(geo['276_2-276_1'], a0);
geo['276_3-276_2'] = new THREE.Geometry();
geo['276_3-276_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-2.0),
	new THREE.Vector3(-0.7,1.15+hS1,-2.0-0.1),
	new THREE.Vector3(-0.7,0.85+hS1,-2.0-0.1),
	new THREE.Vector3(-0.7,0.8+hS1,-2.0)
); line['276_3-276_2'] = new THREE.Line(geo['276_3-276_2'], a0);
geo['276_2-276_0'] = new THREE.Geometry();
geo['276_2-276_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-2.0),
	new THREE.Vector3(-0.7-0.1,0.75+hS1,-2.0),
	new THREE.Vector3(-0.7-0.1,0.05+hS1,-2.0),
	new THREE.Vector3(-0.7,0+hS1,-2.0)
); line['276_2-276_0'] = new THREE.Line(geo['276_2-276_0'], a0);
geo['276_3-276_1'] = new THREE.Geometry();
geo['276_3-276_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-2.0),
	new THREE.Vector3(-0.7+0.1,1.15+hS1,-2.0),
	new THREE.Vector3(-0.7+0.1,0.45+hS1,-2.0),
	new THREE.Vector3(-0.7,0.4+hS1,-2.0)
); line['276_3-276_1'] = new THREE.Line(geo['276_3-276_1'], a0);
geo['276_3-276_0'] = new THREE.Geometry();
geo['276_3-276_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-2.0),
	new THREE.Vector3(-0.7,1.2+hS1,-2.0-0.2),
	new THREE.Vector3(-0.7,0+hS1,-2.0-0.2),
	new THREE.Vector3(-0.7,0+hS1,-2.0)
); line['276_3-276_0'] = new THREE.Line(geo['276_3-276_0'], a0);
geo['272_1-272_0'] = new THREE.Geometry();
geo['272_1-272_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-0.7),
	new THREE.Vector3(-0.7,0.35+hS1,-0.7-0.1),
	new THREE.Vector3(-0.7,0.05+hS1,-0.7-0.1),
	new THREE.Vector3(-0.7,0+hS1,-0.7)
); line['272_1-272_0'] = new THREE.Line(geo['272_1-272_0'], a0);
geo['272_2-272_1'] = new THREE.Geometry();
geo['272_2-272_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-0.7),
	new THREE.Vector3(-0.7,0.75+hS1,-0.7-0.1),
	new THREE.Vector3(-0.7,0.45+hS1,-0.7-0.1),
	new THREE.Vector3(-0.7,0.4+hS1,-0.7)
); line['272_2-272_1'] = new THREE.Line(geo['272_2-272_1'], a0);
geo['272_3-272_2'] = new THREE.Geometry();
geo['272_3-272_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-0.7),
	new THREE.Vector3(-0.7,1.15+hS1,-0.7-0.1),
	new THREE.Vector3(-0.7,0.85+hS1,-0.7-0.1),
	new THREE.Vector3(-0.7,0.8+hS1,-0.7)
); line['272_3-272_2'] = new THREE.Line(geo['272_3-272_2'], a0);
geo['272_2-272_0'] = new THREE.Geometry();
geo['272_2-272_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-0.7),
	new THREE.Vector3(-0.7-0.1,0.75+hS1,-0.7),
	new THREE.Vector3(-0.7-0.1,0.05+hS1,-0.7),
	new THREE.Vector3(-0.7,0+hS1,-0.7)
); line['272_2-272_0'] = new THREE.Line(geo['272_2-272_0'], a0);
geo['272_3-272_1'] = new THREE.Geometry();
geo['272_3-272_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-0.7),
	new THREE.Vector3(-0.7+0.1,1.15+hS1,-0.7),
	new THREE.Vector3(-0.7+0.1,0.45+hS1,-0.7),
	new THREE.Vector3(-0.7,0.4+hS1,-0.7)
); line['272_3-272_1'] = new THREE.Line(geo['272_3-272_1'], a0);
geo['272_3-272_0'] = new THREE.Geometry();
geo['272_3-272_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-0.7),
	new THREE.Vector3(-0.7,1.2+hS1,-0.7-0.2),
	new THREE.Vector3(-0.7,0+hS1,-0.7-0.2),
	new THREE.Vector3(-0.7,0+hS1,-0.7)
); line['272_3-272_0'] = new THREE.Line(geo['272_3-272_0'], a0);
geo['279_1-279_0'] = new THREE.Geometry();
geo['279_1-279_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-3.3),
	new THREE.Vector3(-2.8-0.1,0.35+hS1,-3.3),
	new THREE.Vector3(-2.8-0.1,0.05+hS1,-3.3),
	new THREE.Vector3(-2.8,0+hS1,-3.3)
); line['279_1-279_0'] = new THREE.Line(geo['279_1-279_0'], a0);
geo['279_2-279_1'] = new THREE.Geometry();
geo['279_2-279_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-3.3),
	new THREE.Vector3(-2.8-0.1,0.75+hS1,-3.3),
	new THREE.Vector3(-2.8-0.1,0.45+hS1,-3.3),
	new THREE.Vector3(-2.8,0.4+hS1,-3.3)
); line['279_2-279_1'] = new THREE.Line(geo['279_2-279_1'], a0);
geo['279_3-279_2'] = new THREE.Geometry();
geo['279_3-279_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-3.3),
	new THREE.Vector3(-2.8-0.1,1.15+hS1,-3.3),
	new THREE.Vector3(-2.8-0.1,0.85+hS1,-3.3),
	new THREE.Vector3(-2.8,0.8+hS1,-3.3)
); line['279_3-279_2'] = new THREE.Line(geo['279_3-279_2'], a0);
geo['279_2-279_0'] = new THREE.Geometry();
geo['279_2-279_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-3.3),
	new THREE.Vector3(-2.8,0.75+hS1,-3.3-0.1),
	new THREE.Vector3(-2.8,0.05+hS1,-3.3-0.1),
	new THREE.Vector3(-2.8,0+hS1,-3.3)
); line['279_2-279_0'] = new THREE.Line(geo['279_2-279_0'], a0);
geo['279_3-279_1'] = new THREE.Geometry();
geo['279_3-279_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-3.3),
	new THREE.Vector3(-2.8,1.15+hS1,-3.3+0.1),
	new THREE.Vector3(-2.8,0.45+hS1,-3.3+0.1),
	new THREE.Vector3(-2.8,0.4+hS1,-3.3)
); line['279_3-279_1'] = new THREE.Line(geo['279_3-279_1'], a0);
geo['279_3-279_0'] = new THREE.Geometry();
geo['279_3-279_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-3.3),
	new THREE.Vector3(-2.8-0.2,1.2+hS1,-3.3),
	new THREE.Vector3(-2.8-0.2,0+hS1,-3.3),
	new THREE.Vector3(-2.8,0+hS1,-3.3)
); line['279_3-279_0'] = new THREE.Line(geo['279_3-279_0'], a0);
geo['277_1-277_0'] = new THREE.Geometry();
geo['277_1-277_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-2.0),
	new THREE.Vector3(-2.8-0.1,0.35+hS1,-2.0),
	new THREE.Vector3(-2.8-0.1,0.05+hS1,-2.0),
	new THREE.Vector3(-2.8,0+hS1,-2.0)
); line['277_1-277_0'] = new THREE.Line(geo['277_1-277_0'], a0);
geo['277_2-277_1'] = new THREE.Geometry();
geo['277_2-277_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-2.0),
	new THREE.Vector3(-2.8-0.1,0.75+hS1,-2.0),
	new THREE.Vector3(-2.8-0.1,0.45+hS1,-2.0),
	new THREE.Vector3(-2.8,0.4+hS1,-2.0)
); line['277_2-277_1'] = new THREE.Line(geo['277_2-277_1'], a0);
geo['277_3-277_2'] = new THREE.Geometry();
geo['277_3-277_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-2.0),
	new THREE.Vector3(-2.8-0.1,1.15+hS1,-2.0),
	new THREE.Vector3(-2.8-0.1,0.85+hS1,-2.0),
	new THREE.Vector3(-2.8,0.8+hS1,-2.0)
); line['277_3-277_2'] = new THREE.Line(geo['277_3-277_2'], a0);
geo['277_2-277_0'] = new THREE.Geometry();
geo['277_2-277_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-2.0),
	new THREE.Vector3(-2.8,0.75+hS1,-2.0-0.1),
	new THREE.Vector3(-2.8,0.05+hS1,-2.0-0.1),
	new THREE.Vector3(-2.8,0+hS1,-2.0)
); line['277_2-277_0'] = new THREE.Line(geo['277_2-277_0'], a0);
geo['277_3-277_1'] = new THREE.Geometry();
geo['277_3-277_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-2.0),
	new THREE.Vector3(-2.8,1.15+hS1,-2.0+0.1),
	new THREE.Vector3(-2.8,0.45+hS1,-2.0+0.1),
	new THREE.Vector3(-2.8,0.4+hS1,-2.0)
); line['277_3-277_1'] = new THREE.Line(geo['277_3-277_1'], a0);
geo['277_3-277_0'] = new THREE.Geometry();
geo['277_3-277_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-2.0),
	new THREE.Vector3(-2.8-0.2,1.2+hS1,-2.0),
	new THREE.Vector3(-2.8-0.2,0+hS1,-2.0),
	new THREE.Vector3(-2.8,0+hS1,-2.0)
); line['277_3-277_0'] = new THREE.Line(geo['277_3-277_0'], a0);
geo['275_1-275_0'] = new THREE.Geometry();
geo['275_1-275_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-0.7),
	new THREE.Vector3(-2.8-0.1,0.35+hS1,-0.7),
	new THREE.Vector3(-2.8-0.1,0.05+hS1,-0.7),
	new THREE.Vector3(-2.8,0+hS1,-0.7)
); line['275_1-275_0'] = new THREE.Line(geo['275_1-275_0'], a0);
geo['275_2-275_1'] = new THREE.Geometry();
geo['275_2-275_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-0.7),
	new THREE.Vector3(-2.8-0.1,0.75+hS1,-0.7),
	new THREE.Vector3(-2.8-0.1,0.45+hS1,-0.7),
	new THREE.Vector3(-2.8,0.4+hS1,-0.7)
); line['275_2-275_1'] = new THREE.Line(geo['275_2-275_1'], a0);
geo['275_3-275_2'] = new THREE.Geometry();
geo['275_3-275_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-0.7),
	new THREE.Vector3(-2.8-0.1,1.15+hS1,-0.7),
	new THREE.Vector3(-2.8-0.1,0.85+hS1,-0.7),
	new THREE.Vector3(-2.8,0.8+hS1,-0.7)
); line['275_3-275_2'] = new THREE.Line(geo['275_3-275_2'], a0);
geo['275_2-275_0'] = new THREE.Geometry();
geo['275_2-275_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-0.7),
	new THREE.Vector3(-2.8,0.75+hS1,-0.7-0.1),
	new THREE.Vector3(-2.8,0.05+hS1,-0.7-0.1),
	new THREE.Vector3(-2.8,0+hS1,-0.7)
); line['275_2-275_0'] = new THREE.Line(geo['275_2-275_0'], a0);
geo['275_3-275_1'] = new THREE.Geometry();
geo['275_3-275_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-0.7),
	new THREE.Vector3(-2.8,1.15+hS1,-0.7+0.1),
	new THREE.Vector3(-2.8,0.45+hS1,-0.7+0.1),
	new THREE.Vector3(-2.8,0.4+hS1,-0.7)
); line['275_3-275_1'] = new THREE.Line(geo['275_3-275_1'], a0);
geo['275_3-275_0'] = new THREE.Geometry();
geo['275_3-275_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-0.7),
	new THREE.Vector3(-2.8-0.2,1.2+hS1,-0.7),
	new THREE.Vector3(-2.8-0.2,0+hS1,-0.7),
	new THREE.Vector3(-2.8,0+hS1,-0.7)
); line['275_3-275_0'] = new THREE.Line(geo['275_3-275_0'], a0);
geo['271_1-271_0'] = new THREE.Geometry();
geo['271_1-271_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,0.6),
	new THREE.Vector3(-2.8-0.1,0.35+hS1,0.6),
	new THREE.Vector3(-2.8-0.1,0.05+hS1,0.6),
	new THREE.Vector3(-2.8,0+hS1,0.6)
); line['271_1-271_0'] = new THREE.Line(geo['271_1-271_0'], a0);
geo['271_2-271_1'] = new THREE.Geometry();
geo['271_2-271_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,0.6),
	new THREE.Vector3(-2.8-0.1,0.75+hS1,0.6),
	new THREE.Vector3(-2.8-0.1,0.45+hS1,0.6),
	new THREE.Vector3(-2.8,0.4+hS1,0.6)
); line['271_2-271_1'] = new THREE.Line(geo['271_2-271_1'], a0);
geo['271_3-271_2'] = new THREE.Geometry();
geo['271_3-271_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,0.6),
	new THREE.Vector3(-2.8-0.1,1.15+hS1,0.6),
	new THREE.Vector3(-2.8-0.1,0.85+hS1,0.6),
	new THREE.Vector3(-2.8,0.8+hS1,0.6)
); line['271_3-271_2'] = new THREE.Line(geo['271_3-271_2'], a0);
geo['271_2-271_0'] = new THREE.Geometry();
geo['271_2-271_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,0.6),
	new THREE.Vector3(-2.8,0.75+hS1,0.6-0.1),
	new THREE.Vector3(-2.8,0.05+hS1,0.6-0.1),
	new THREE.Vector3(-2.8,0+hS1,0.6)
); line['271_2-271_0'] = new THREE.Line(geo['271_2-271_0'], a0);
geo['271_3-271_1'] = new THREE.Geometry();
geo['271_3-271_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,0.6),
	new THREE.Vector3(-2.8,1.15+hS1,0.6+0.1),
	new THREE.Vector3(-2.8,0.45+hS1,0.6+0.1),
	new THREE.Vector3(-2.8,0.4+hS1,0.6)
); line['271_3-271_1'] = new THREE.Line(geo['271_3-271_1'], a0);
geo['271_3-271_0'] = new THREE.Geometry();
geo['271_3-271_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,0.6),
	new THREE.Vector3(-2.8-0.2,1.2+hS1,0.6),
	new THREE.Vector3(-2.8-0.2,0+hS1,0.6),
	new THREE.Vector3(-2.8,0+hS1,0.6)
); line['271_3-271_0'] = new THREE.Line(geo['271_3-271_0'], a0);
geo['265_1-265_0'] = new THREE.Geometry();
geo['265_1-265_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,2.8),
	new THREE.Vector3(-2.8-0.1,0.35+hS1,2.8),
	new THREE.Vector3(-2.8-0.1,0.05+hS1,2.8),
	new THREE.Vector3(-2.8,0+hS1,2.8)
); line['265_1-265_0'] = new THREE.Line(geo['265_1-265_0'], a0);
geo['265_2-265_1'] = new THREE.Geometry();
geo['265_2-265_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,2.8),
	new THREE.Vector3(-2.8-0.1,0.75+hS1,2.8),
	new THREE.Vector3(-2.8-0.1,0.45+hS1,2.8),
	new THREE.Vector3(-2.8,0.4+hS1,2.8)
); line['265_2-265_1'] = new THREE.Line(geo['265_2-265_1'], a0);
geo['265_3-265_2'] = new THREE.Geometry();
geo['265_3-265_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,2.8),
	new THREE.Vector3(-2.8-0.1,1.15+hS1,2.8),
	new THREE.Vector3(-2.8-0.1,0.85+hS1,2.8),
	new THREE.Vector3(-2.8,0.8+hS1,2.8)
); line['265_3-265_2'] = new THREE.Line(geo['265_3-265_2'], a0);
geo['265_2-265_0'] = new THREE.Geometry();
geo['265_2-265_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,2.8),
	new THREE.Vector3(-2.8,0.75+hS1,2.8-0.1),
	new THREE.Vector3(-2.8,0.05+hS1,2.8-0.1),
	new THREE.Vector3(-2.8,0+hS1,2.8)
); line['265_2-265_0'] = new THREE.Line(geo['265_2-265_0'], a0);
geo['265_3-265_1'] = new THREE.Geometry();
geo['265_3-265_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,2.8),
	new THREE.Vector3(-2.8,1.15+hS1,2.8+0.1),
	new THREE.Vector3(-2.8,0.45+hS1,2.8+0.1),
	new THREE.Vector3(-2.8,0.4+hS1,2.8)
); line['265_3-265_1'] = new THREE.Line(geo['265_3-265_1'], a0);
geo['265_3-265_0'] = new THREE.Geometry();
geo['265_3-265_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,2.8),
	new THREE.Vector3(-2.8-0.2,1.2+hS1,2.8),
	new THREE.Vector3(-2.8-0.2,0+hS1,2.8),
	new THREE.Vector3(-2.8,0+hS1,2.8)
); line['265_3-265_0'] = new THREE.Line(geo['265_3-265_0'], a0);
geo['263_1-263_0'] = new THREE.Geometry();
geo['263_1-263_0'].vertices.push(
	new THREE.Vector3(-0.6,0.4+hS1,2.8),
	new THREE.Vector3(-0.6-0.1,0.35+hS1,2.8),
	new THREE.Vector3(-0.6-0.1,0.05+hS1,2.8),
	new THREE.Vector3(-0.6,0+hS1,2.8)
); line['263_1-263_0'] = new THREE.Line(geo['263_1-263_0'], a0);
geo['263_2-263_1'] = new THREE.Geometry();
geo['263_2-263_1'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS1,2.8),
	new THREE.Vector3(-0.6-0.1,0.75+hS1,2.8),
	new THREE.Vector3(-0.6-0.1,0.45+hS1,2.8),
	new THREE.Vector3(-0.6,0.4+hS1,2.8)
); line['263_2-263_1'] = new THREE.Line(geo['263_2-263_1'], a0);
geo['263_3-263_2'] = new THREE.Geometry();
geo['263_3-263_2'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS1,2.8),
	new THREE.Vector3(-0.6-0.1,1.15+hS1,2.8),
	new THREE.Vector3(-0.6-0.1,0.85+hS1,2.8),
	new THREE.Vector3(-0.6,0.8+hS1,2.8)
); line['263_3-263_2'] = new THREE.Line(geo['263_3-263_2'], a0);
geo['263_2-263_0'] = new THREE.Geometry();
geo['263_2-263_0'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS1,2.8),
	new THREE.Vector3(-0.6,0.75+hS1,2.8-0.1),
	new THREE.Vector3(-0.6,0.05+hS1,2.8-0.1),
	new THREE.Vector3(-0.6,0+hS1,2.8)
); line['263_2-263_0'] = new THREE.Line(geo['263_2-263_0'], a0);
geo['263_3-263_1'] = new THREE.Geometry();
geo['263_3-263_1'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS1,2.8),
	new THREE.Vector3(-0.6,1.15+hS1,2.8+0.1),
	new THREE.Vector3(-0.6,0.45+hS1,2.8+0.1),
	new THREE.Vector3(-0.6,0.4+hS1,2.8)
); line['263_3-263_1'] = new THREE.Line(geo['263_3-263_1'], a0);
geo['263_3-263_0'] = new THREE.Geometry();
geo['263_3-263_0'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS1,2.8),
	new THREE.Vector3(-0.6-0.2,1.2+hS1,2.8),
	new THREE.Vector3(-0.6-0.2,0+hS1,2.8),
	new THREE.Vector3(-0.6,0+hS1,2.8)
); line['263_3-263_0'] = new THREE.Line(geo['263_3-263_0'], a0);
geo['261_1-261_0'] = new THREE.Geometry();
geo['261_1-261_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS1,2.8),
	new THREE.Vector3(0.7-0.1,0.35+hS1,2.8),
	new THREE.Vector3(0.7-0.1,0.05+hS1,2.8),
	new THREE.Vector3(0.7,0+hS1,2.8)
); line['261_1-261_0'] = new THREE.Line(geo['261_1-261_0'], a0);
geo['261_2-261_1'] = new THREE.Geometry();
geo['261_2-261_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,2.8),
	new THREE.Vector3(0.7-0.1,0.75+hS1,2.8),
	new THREE.Vector3(0.7-0.1,0.45+hS1,2.8),
	new THREE.Vector3(0.7,0.4+hS1,2.8)
); line['261_2-261_1'] = new THREE.Line(geo['261_2-261_1'], a0);
geo['261_3-261_2'] = new THREE.Geometry();
geo['261_3-261_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,2.8),
	new THREE.Vector3(0.7-0.1,1.15+hS1,2.8),
	new THREE.Vector3(0.7-0.1,0.85+hS1,2.8),
	new THREE.Vector3(0.7,0.8+hS1,2.8)
); line['261_3-261_2'] = new THREE.Line(geo['261_3-261_2'], a0);
geo['261_2-261_0'] = new THREE.Geometry();
geo['261_2-261_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,2.8),
	new THREE.Vector3(0.7,0.75+hS1,2.8-0.1),
	new THREE.Vector3(0.7,0.05+hS1,2.8-0.1),
	new THREE.Vector3(0.7,0+hS1,2.8)
); line['261_2-261_0'] = new THREE.Line(geo['261_2-261_0'], a0);
geo['261_3-261_1'] = new THREE.Geometry();
geo['261_3-261_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,2.8),
	new THREE.Vector3(0.7,1.15+hS1,2.8+0.1),
	new THREE.Vector3(0.7,0.45+hS1,2.8+0.1),
	new THREE.Vector3(0.7,0.4+hS1,2.8)
); line['261_3-261_1'] = new THREE.Line(geo['261_3-261_1'], a0);
geo['261_3-261_0'] = new THREE.Geometry();
geo['261_3-261_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,2.8),
	new THREE.Vector3(0.7-0.2,1.2+hS1,2.8),
	new THREE.Vector3(0.7-0.2,0+hS1,2.8),
	new THREE.Vector3(0.7,0+hS1,2.8)
); line['261_3-261_0'] = new THREE.Line(geo['261_3-261_0'], a0);
geo['259_1-259_0'] = new THREE.Geometry();
geo['259_1-259_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS1,2.8),
	new THREE.Vector3(2.0-0.1,0.35+hS1,2.8),
	new THREE.Vector3(2.0-0.1,0.05+hS1,2.8),
	new THREE.Vector3(2.0,0+hS1,2.8)
); line['259_1-259_0'] = new THREE.Line(geo['259_1-259_0'], a0);
geo['259_2-259_1'] = new THREE.Geometry();
geo['259_2-259_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,2.8),
	new THREE.Vector3(2.0-0.1,0.75+hS1,2.8),
	new THREE.Vector3(2.0-0.1,0.45+hS1,2.8),
	new THREE.Vector3(2.0,0.4+hS1,2.8)
); line['259_2-259_1'] = new THREE.Line(geo['259_2-259_1'], a0);
geo['259_3-259_2'] = new THREE.Geometry();
geo['259_3-259_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,2.8),
	new THREE.Vector3(2.0-0.1,1.15+hS1,2.8),
	new THREE.Vector3(2.0-0.1,0.85+hS1,2.8),
	new THREE.Vector3(2.0,0.8+hS1,2.8)
); line['259_3-259_2'] = new THREE.Line(geo['259_3-259_2'], a0);
geo['259_2-259_0'] = new THREE.Geometry();
geo['259_2-259_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,2.8),
	new THREE.Vector3(2.0,0.75+hS1,2.8-0.1),
	new THREE.Vector3(2.0,0.05+hS1,2.8-0.1),
	new THREE.Vector3(2.0,0+hS1,2.8)
); line['259_2-259_0'] = new THREE.Line(geo['259_2-259_0'], a0);
geo['259_3-259_1'] = new THREE.Geometry();
geo['259_3-259_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,2.8),
	new THREE.Vector3(2.0,1.15+hS1,2.8+0.1),
	new THREE.Vector3(2.0,0.45+hS1,2.8+0.1),
	new THREE.Vector3(2.0,0.4+hS1,2.8)
); line['259_3-259_1'] = new THREE.Line(geo['259_3-259_1'], a0);
geo['259_3-259_0'] = new THREE.Geometry();
geo['259_3-259_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,2.8),
	new THREE.Vector3(2.0-0.2,1.2+hS1,2.8),
	new THREE.Vector3(2.0-0.2,0+hS1,2.8),
	new THREE.Vector3(2.0,0+hS1,2.8)
); line['259_3-259_0'] = new THREE.Line(geo['259_3-259_0'], a0);
geo['257_1-257_0'] = new THREE.Geometry();
geo['257_1-257_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS1,2.8),
	new THREE.Vector3(3.3-0.1,0.35+hS1,2.8),
	new THREE.Vector3(3.3-0.1,0.05+hS1,2.8),
	new THREE.Vector3(3.3,0+hS1,2.8)
); line['257_1-257_0'] = new THREE.Line(geo['257_1-257_0'], a0);
geo['257_2-257_1'] = new THREE.Geometry();
geo['257_2-257_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,2.8),
	new THREE.Vector3(3.3-0.1,0.75+hS1,2.8),
	new THREE.Vector3(3.3-0.1,0.45+hS1,2.8),
	new THREE.Vector3(3.3,0.4+hS1,2.8)
); line['257_2-257_1'] = new THREE.Line(geo['257_2-257_1'], a0);
geo['257_3-257_2'] = new THREE.Geometry();
geo['257_3-257_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,2.8),
	new THREE.Vector3(3.3-0.1,1.15+hS1,2.8),
	new THREE.Vector3(3.3-0.1,0.85+hS1,2.8),
	new THREE.Vector3(3.3,0.8+hS1,2.8)
); line['257_3-257_2'] = new THREE.Line(geo['257_3-257_2'], a0);
geo['257_2-257_0'] = new THREE.Geometry();
geo['257_2-257_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,2.8),
	new THREE.Vector3(3.3,0.75+hS1,2.8-0.1),
	new THREE.Vector3(3.3,0.05+hS1,2.8-0.1),
	new THREE.Vector3(3.3,0+hS1,2.8)
); line['257_2-257_0'] = new THREE.Line(geo['257_2-257_0'], a0);
geo['257_3-257_1'] = new THREE.Geometry();
geo['257_3-257_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,2.8),
	new THREE.Vector3(3.3,1.15+hS1,2.8+0.1),
	new THREE.Vector3(3.3,0.45+hS1,2.8+0.1),
	new THREE.Vector3(3.3,0.4+hS1,2.8)
); line['257_3-257_1'] = new THREE.Line(geo['257_3-257_1'], a0);
geo['257_3-257_0'] = new THREE.Geometry();
geo['257_3-257_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,2.8),
	new THREE.Vector3(3.3-0.2,1.2+hS1,2.8),
	new THREE.Vector3(3.3-0.2,0+hS1,2.8),
	new THREE.Vector3(3.3,0+hS1,2.8)
); line['257_3-257_0'] = new THREE.Line(geo['257_3-257_0'], a0);
geo['260_1-260_0'] = new THREE.Geometry();
geo['260_1-260_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS1,0.7),
	new THREE.Vector3(0.7,0.35+hS1,0.7-0.1),
	new THREE.Vector3(0.7,0.05+hS1,0.7-0.1),
	new THREE.Vector3(0.7,0+hS1,0.7)
); line['260_1-260_0'] = new THREE.Line(geo['260_1-260_0'], a0);
geo['260_2-260_1'] = new THREE.Geometry();
geo['260_2-260_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,0.7),
	new THREE.Vector3(0.7,0.75+hS1,0.7-0.1),
	new THREE.Vector3(0.7,0.45+hS1,0.7-0.1),
	new THREE.Vector3(0.7,0.4+hS1,0.7)
); line['260_2-260_1'] = new THREE.Line(geo['260_2-260_1'], a0);
geo['260_3-260_2'] = new THREE.Geometry();
geo['260_3-260_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,0.7),
	new THREE.Vector3(0.7,1.15+hS1,0.7-0.1),
	new THREE.Vector3(0.7,0.85+hS1,0.7-0.1),
	new THREE.Vector3(0.7,0.8+hS1,0.7)
); line['260_3-260_2'] = new THREE.Line(geo['260_3-260_2'], a0);
geo['260_2-260_0'] = new THREE.Geometry();
geo['260_2-260_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,0.7),
	new THREE.Vector3(0.7-0.1,0.75+hS1,0.7),
	new THREE.Vector3(0.7-0.1,0.05+hS1,0.7),
	new THREE.Vector3(0.7,0+hS1,0.7)
); line['260_2-260_0'] = new THREE.Line(geo['260_2-260_0'], a0);
geo['260_3-260_1'] = new THREE.Geometry();
geo['260_3-260_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,0.7),
	new THREE.Vector3(0.7+0.1,1.15+hS1,0.7),
	new THREE.Vector3(0.7+0.1,0.45+hS1,0.7),
	new THREE.Vector3(0.7,0.4+hS1,0.7)
); line['260_3-260_1'] = new THREE.Line(geo['260_3-260_1'], a0);
geo['260_3-260_0'] = new THREE.Geometry();
geo['260_3-260_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,0.7),
	new THREE.Vector3(0.7,1.2+hS1,0.7-0.2),
	new THREE.Vector3(0.7,0+hS1,0.7-0.2),
	new THREE.Vector3(0.7,0+hS1,0.7)
); line['260_3-260_0'] = new THREE.Line(geo['260_3-260_0'], a0);
geo['256_1-256_0'] = new THREE.Geometry();
geo['256_1-256_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS1,0.7),
	new THREE.Vector3(2.0,0.35+hS1,0.7-0.1),
	new THREE.Vector3(2.0,0.05+hS1,0.7-0.1),
	new THREE.Vector3(2.0,0+hS1,0.7)
); line['256_1-256_0'] = new THREE.Line(geo['256_1-256_0'], a0);
geo['256_2-256_1'] = new THREE.Geometry();
geo['256_2-256_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,0.7),
	new THREE.Vector3(2.0,0.75+hS1,0.7-0.1),
	new THREE.Vector3(2.0,0.45+hS1,0.7-0.1),
	new THREE.Vector3(2.0,0.4+hS1,0.7)
); line['256_2-256_1'] = new THREE.Line(geo['256_2-256_1'], a0);
geo['256_3-256_2'] = new THREE.Geometry();
geo['256_3-256_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,0.7),
	new THREE.Vector3(2.0,1.15+hS1,0.7-0.1),
	new THREE.Vector3(2.0,0.85+hS1,0.7-0.1),
	new THREE.Vector3(2.0,0.8+hS1,0.7)
); line['256_3-256_2'] = new THREE.Line(geo['256_3-256_2'], a0);
geo['256_2-256_0'] = new THREE.Geometry();
geo['256_2-256_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,0.7),
	new THREE.Vector3(2.0-0.1,0.75+hS1,0.7),
	new THREE.Vector3(2.0-0.1,0.05+hS1,0.7),
	new THREE.Vector3(2.0,0+hS1,0.7)
); line['256_2-256_0'] = new THREE.Line(geo['256_2-256_0'], a0);
geo['256_3-256_1'] = new THREE.Geometry();
geo['256_3-256_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,0.7),
	new THREE.Vector3(2.0+0.1,1.15+hS1,0.7),
	new THREE.Vector3(2.0+0.1,0.45+hS1,0.7),
	new THREE.Vector3(2.0,0.4+hS1,0.7)
); line['256_3-256_1'] = new THREE.Line(geo['256_3-256_1'], a0);
geo['256_3-256_0'] = new THREE.Geometry();
geo['256_3-256_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,0.7),
	new THREE.Vector3(2.0,1.2+hS1,0.7-0.2),
	new THREE.Vector3(2.0,0+hS1,0.7-0.2),
	new THREE.Vector3(2.0,0+hS1,0.7)
); line['256_3-256_0'] = new THREE.Line(geo['256_3-256_0'], a0);
geo['254_1-254_0'] = new THREE.Geometry();
geo['254_1-254_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS1,0.7),
	new THREE.Vector3(3.3,0.35+hS1,0.7-0.1),
	new THREE.Vector3(3.3,0.05+hS1,0.7-0.1),
	new THREE.Vector3(3.3,0+hS1,0.7)
); line['254_1-254_0'] = new THREE.Line(geo['254_1-254_0'], a0);
geo['254_2-254_1'] = new THREE.Geometry();
geo['254_2-254_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,0.7),
	new THREE.Vector3(3.3,0.75+hS1,0.7-0.1),
	new THREE.Vector3(3.3,0.45+hS1,0.7-0.1),
	new THREE.Vector3(3.3,0.4+hS1,0.7)
); line['254_2-254_1'] = new THREE.Line(geo['254_2-254_1'], a0);
geo['254_3-254_2'] = new THREE.Geometry();
geo['254_3-254_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,0.7),
	new THREE.Vector3(3.3,1.15+hS1,0.7-0.1),
	new THREE.Vector3(3.3,0.85+hS1,0.7-0.1),
	new THREE.Vector3(3.3,0.8+hS1,0.7)
); line['254_3-254_2'] = new THREE.Line(geo['254_3-254_2'], a0);
geo['254_2-254_0'] = new THREE.Geometry();
geo['254_2-254_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,0.7),
	new THREE.Vector3(3.3-0.1,0.75+hS1,0.7),
	new THREE.Vector3(3.3-0.1,0.05+hS1,0.7),
	new THREE.Vector3(3.3,0+hS1,0.7)
); line['254_2-254_0'] = new THREE.Line(geo['254_2-254_0'], a0);
geo['254_3-254_1'] = new THREE.Geometry();
geo['254_3-254_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,0.7),
	new THREE.Vector3(3.3+0.1,1.15+hS1,0.7),
	new THREE.Vector3(3.3+0.1,0.45+hS1,0.7),
	new THREE.Vector3(3.3,0.4+hS1,0.7)
); line['254_3-254_1'] = new THREE.Line(geo['254_3-254_1'], a0);
geo['254_3-254_0'] = new THREE.Geometry();
geo['254_3-254_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,0.7),
	new THREE.Vector3(3.3,1.2+hS1,0.7-0.2),
	new THREE.Vector3(3.3,0+hS1,0.7-0.2),
	new THREE.Vector3(3.3,0+hS1,0.7)
); line['254_3-254_0'] = new THREE.Line(geo['254_3-254_0'], a0);
geo['253_1-253_0'] = new THREE.Geometry();
geo['253_1-253_0'].vertices.push(
	new THREE.Vector3(4.7,0.4+hS1,2.8),
	new THREE.Vector3(4.7-0.1,0.35+hS1,2.8),
	new THREE.Vector3(4.7-0.1,0.05+hS1,2.8),
	new THREE.Vector3(4.7,0+hS1,2.8)
); line['253_1-253_0'] = new THREE.Line(geo['253_1-253_0'], a0);
geo['253_2-253_1'] = new THREE.Geometry();
geo['253_2-253_1'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS1,2.8),
	new THREE.Vector3(4.7-0.1,0.75+hS1,2.8),
	new THREE.Vector3(4.7-0.1,0.45+hS1,2.8),
	new THREE.Vector3(4.7,0.4+hS1,2.8)
); line['253_2-253_1'] = new THREE.Line(geo['253_2-253_1'], a0);
geo['253_3-253_2'] = new THREE.Geometry();
geo['253_3-253_2'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS1,2.8),
	new THREE.Vector3(4.7-0.1,1.15+hS1,2.8),
	new THREE.Vector3(4.7-0.1,0.85+hS1,2.8),
	new THREE.Vector3(4.7,0.8+hS1,2.8)
); line['253_3-253_2'] = new THREE.Line(geo['253_3-253_2'], a0);
geo['253_2-253_0'] = new THREE.Geometry();
geo['253_2-253_0'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS1,2.8),
	new THREE.Vector3(4.7,0.75+hS1,2.8-0.1),
	new THREE.Vector3(4.7,0.05+hS1,2.8-0.1),
	new THREE.Vector3(4.7,0+hS1,2.8)
); line['253_2-253_0'] = new THREE.Line(geo['253_2-253_0'], a0);
geo['253_3-253_1'] = new THREE.Geometry();
geo['253_3-253_1'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS1,2.8),
	new THREE.Vector3(4.7,1.15+hS1,2.8+0.1),
	new THREE.Vector3(4.7,0.45+hS1,2.8+0.1),
	new THREE.Vector3(4.7,0.4+hS1,2.8)
); line['253_3-253_1'] = new THREE.Line(geo['253_3-253_1'], a0);
geo['253_3-253_0'] = new THREE.Geometry();
geo['253_3-253_0'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS1,2.8),
	new THREE.Vector3(4.7-0.2,1.2+hS1,2.8),
	new THREE.Vector3(4.7-0.2,0+hS1,2.8),
	new THREE.Vector3(4.7,0+hS1,2.8)
); line['253_3-253_0'] = new THREE.Line(geo['253_3-253_0'], a0);
geo['054_1-054_0'] = new THREE.Geometry();
geo['054_1-054_0'].vertices.push(
 new THREE.Vector3(3.4,0.4+hEG,0.7),
 new THREE.Vector3(3.4,0.35+hEG,0.7-0.1),
 new THREE.Vector3(3.4,0.05+hEG,0.7-0.1),
 new THREE.Vector3(3.4,0+hEG,0.7)
); line['054_1-054_0'] = new THREE.Line(geo['054_1-054_0'], a0);
geo['054_2-054_1'] = new THREE.Geometry();
geo['054_2-054_1'].vertices.push(
 new THREE.Vector3(3.4,0.8+hEG,0.7),
 new THREE.Vector3(3.4,0.75+hEG,0.7-0.1),
 new THREE.Vector3(3.4,0.45+hEG,0.7-0.1),
 new THREE.Vector3(3.4,0.4+hEG,0.7)
); line['054_2-054_1'] = new THREE.Line(geo['054_2-054_1'], a0);
geo['054_3-054_2'] = new THREE.Geometry();
geo['054_3-054_2'].vertices.push(
 new THREE.Vector3(3.4,1.2+hEG,0.7),
 new THREE.Vector3(3.4,1.15+hEG,0.7-0.1),
 new THREE.Vector3(3.4,0.85+hEG,0.7-0.1),
 new THREE.Vector3(3.4,0.8+hEG,0.7)
); line['054_3-054_2'] = new THREE.Line(geo['054_3-054_2'], a0);
geo['054_2-054_0'] = new THREE.Geometry();
geo['054_2-054_0'].vertices.push(
 new THREE.Vector3(3.4,0.8+hEG,0.7),
 new THREE.Vector3(3.4-0.1,0.75+hEG,0.7),
 new THREE.Vector3(3.4-0.1,0.05+hEG,0.7),
 new THREE.Vector3(3.4,0+hEG,0.7)
); line['054_2-054_0'] = new THREE.Line(geo['054_2-054_0'], a0);
geo['054_3-054_1'] = new THREE.Geometry();
geo['054_3-054_1'].vertices.push(
 new THREE.Vector3(3.4,1.2+hEG,0.7),
 new THREE.Vector3(3.4+0.1,1.15+hEG,0.7),
 new THREE.Vector3(3.4+0.1,0.45+hEG,0.7),
 new THREE.Vector3(3.4,0.4+hEG,0.7)
); line['054_3-054_1'] = new THREE.Line(geo['054_3-054_1'], a0);
geo['054_3-054_0'] = new THREE.Geometry();
geo['054_3-054_0'].vertices.push(
 new THREE.Vector3(3.4,1.2+hEG,0.7),
 new THREE.Vector3(3.4,1.2+hEG,0.7-0.2),
 new THREE.Vector3(3.4,0+hEG,0.7-0.2),
 new THREE.Vector3(3.4,0+hEG,0.7)
); line['054_3-054_0'] = new THREE.Line(geo['054_3-054_0'], a0);
geo['056_1-056_0'] = new THREE.Geometry();
geo['056_1-056_0'].vertices.push(
 new THREE.Vector3(2.3,0.4+hEG,0.7),
 new THREE.Vector3(2.3,0.35+hEG,0.7-0.1),
 new THREE.Vector3(2.3,0.05+hEG,0.7-0.1),
 new THREE.Vector3(2.3,0+hEG,0.7)
); line['056_1-056_0'] = new THREE.Line(geo['056_1-056_0'], a0);
geo['056_2-056_1'] = new THREE.Geometry();
geo['056_2-056_1'].vertices.push(
 new THREE.Vector3(2.3,0.8+hEG,0.7),
 new THREE.Vector3(2.3,0.75+hEG,0.7-0.1),
 new THREE.Vector3(2.3,0.45+hEG,0.7-0.1),
 new THREE.Vector3(2.3,0.4+hEG,0.7)
); line['056_2-056_1'] = new THREE.Line(geo['056_2-056_1'], a0);
geo['056_3-056_2'] = new THREE.Geometry();
geo['056_3-056_2'].vertices.push(
 new THREE.Vector3(2.3,1.2+hEG,0.7),
 new THREE.Vector3(2.3,1.15+hEG,0.7-0.1),
 new THREE.Vector3(2.3,0.85+hEG,0.7-0.1),
 new THREE.Vector3(2.3,0.8+hEG,0.7)
); line['056_3-056_2'] = new THREE.Line(geo['056_3-056_2'], a0);
geo['056_2-056_0'] = new THREE.Geometry();
geo['056_2-056_0'].vertices.push(
 new THREE.Vector3(2.3,0.8+hEG,0.7),
 new THREE.Vector3(2.3-0.1,0.75+hEG,0.7),
 new THREE.Vector3(2.3-0.1,0.05+hEG,0.7),
 new THREE.Vector3(2.3,0+hEG,0.7)
); line['056_2-056_0'] = new THREE.Line(geo['056_2-056_0'], a0);
geo['056_3-056_1'] = new THREE.Geometry();
geo['056_3-056_1'].vertices.push(
 new THREE.Vector3(2.3,1.2+hEG,0.7),
 new THREE.Vector3(2.3+0.1,1.15+hEG,0.7),
 new THREE.Vector3(2.3+0.1,0.45+hEG,0.7),
 new THREE.Vector3(2.3,0.4+hEG,0.7)
); line['056_3-056_1'] = new THREE.Line(geo['056_3-056_1'], a0);
geo['056_3-056_0'] = new THREE.Geometry();
geo['056_3-056_0'].vertices.push(
 new THREE.Vector3(2.3,1.2+hEG,0.7),
 new THREE.Vector3(2.3,1.2+hEG,0.7-0.2),
 new THREE.Vector3(2.3,0+hEG,0.7-0.2),
 new THREE.Vector3(2.3,0+hEG,0.7)
); line['056_3-056_0'] = new THREE.Line(geo['056_3-056_0'], a0);
geo['058_1-058_0'] = new THREE.Geometry();
geo['058_1-058_0'].vertices.push(
 new THREE.Vector3(1.4,0.4+hEG,0.7),
 new THREE.Vector3(1.4,0.35+hEG,0.7-0.1),
 new THREE.Vector3(1.4,0.05+hEG,0.7-0.1),
 new THREE.Vector3(1.4,0+hEG,0.7)
); line['058_1-058_0'] = new THREE.Line(geo['058_1-058_0'], a0);
geo['058_2-058_1'] = new THREE.Geometry();
geo['058_2-058_1'].vertices.push(
 new THREE.Vector3(1.4,0.8+hEG,0.7),
 new THREE.Vector3(1.4,0.75+hEG,0.7-0.1),
 new THREE.Vector3(1.4,0.45+hEG,0.7-0.1),
 new THREE.Vector3(1.4,0.4+hEG,0.7)
); line['058_2-058_1'] = new THREE.Line(geo['058_2-058_1'], a0);
geo['058_3-058_2'] = new THREE.Geometry();
geo['058_3-058_2'].vertices.push(
 new THREE.Vector3(1.4,1.2+hEG,0.7),
 new THREE.Vector3(1.4,1.15+hEG,0.7-0.1),
 new THREE.Vector3(1.4,0.85+hEG,0.7-0.1),
 new THREE.Vector3(1.4,0.8+hEG,0.7)
); line['058_3-058_2'] = new THREE.Line(geo['058_3-058_2'], a0);
geo['058_2-058_0'] = new THREE.Geometry();
geo['058_2-058_0'].vertices.push(
 new THREE.Vector3(1.4,0.8+hEG,0.7),
 new THREE.Vector3(1.4-0.1,0.75+hEG,0.7),
 new THREE.Vector3(1.4-0.1,0.05+hEG,0.7),
 new THREE.Vector3(1.4,0+hEG,0.7)
); line['058_2-058_0'] = new THREE.Line(geo['058_2-058_0'], a0);
geo['058_3-058_1'] = new THREE.Geometry();
geo['058_3-058_1'].vertices.push(
 new THREE.Vector3(1.4,1.2+hEG,0.7),
 new THREE.Vector3(1.4+0.1,1.15+hEG,0.7),
 new THREE.Vector3(1.4+0.1,0.45+hEG,0.7),
 new THREE.Vector3(1.4,0.4+hEG,0.7)
); line['058_3-058_1'] = new THREE.Line(geo['058_3-058_1'], a0);
geo['058_3-058_0'] = new THREE.Geometry();
geo['058_3-058_0'].vertices.push(
 new THREE.Vector3(1.4,1.2+hEG,0.7),
 new THREE.Vector3(1.4,1.2+hEG,0.7-0.2),
 new THREE.Vector3(1.4,0+hEG,0.7-0.2),
 new THREE.Vector3(1.4,0+hEG,0.7)
); line['058_3-058_0'] = new THREE.Line(geo['058_3-058_0'], a0);
geo['060_1-060_0'] = new THREE.Geometry();
geo['060_1-060_0'].vertices.push(
 new THREE.Vector3(0.55,0.4+hEG,0.7),
 new THREE.Vector3(0.55,0.35+hEG,0.7-0.1),
 new THREE.Vector3(0.55,0.05+hEG,0.7-0.1),
 new THREE.Vector3(0.55,0+hEG,0.7)
); line['060_1-060_0'] = new THREE.Line(geo['060_1-060_0'], a0);
geo['060_2-060_1'] = new THREE.Geometry();
geo['060_2-060_1'].vertices.push(
 new THREE.Vector3(0.55,0.8+hEG,0.7),
 new THREE.Vector3(0.55,0.75+hEG,0.7-0.1),
 new THREE.Vector3(0.55,0.45+hEG,0.7-0.1),
 new THREE.Vector3(0.55,0.4+hEG,0.7)
); line['060_2-060_1'] = new THREE.Line(geo['060_2-060_1'], a0);
geo['060_3-060_2'] = new THREE.Geometry();
geo['060_3-060_2'].vertices.push(
 new THREE.Vector3(0.55,1.2+hEG,0.7),
 new THREE.Vector3(0.55,1.15+hEG,0.7-0.1),
 new THREE.Vector3(0.55,0.85+hEG,0.7-0.1),
 new THREE.Vector3(0.55,0.8+hEG,0.7)
); line['060_3-060_2'] = new THREE.Line(geo['060_3-060_2'], a0);
geo['060_2-060_0'] = new THREE.Geometry();
geo['060_2-060_0'].vertices.push(
 new THREE.Vector3(0.55,0.8+hEG,0.7),
 new THREE.Vector3(0.55-0.1,0.75+hEG,0.7),
 new THREE.Vector3(0.55-0.1,0.05+hEG,0.7),
 new THREE.Vector3(0.55,0+hEG,0.7)
); line['060_2-060_0'] = new THREE.Line(geo['060_2-060_0'], a0);
geo['060_3-060_1'] = new THREE.Geometry();
geo['060_3-060_1'].vertices.push(
 new THREE.Vector3(0.55,1.2+hEG,0.7),
 new THREE.Vector3(0.55+0.1,1.15+hEG,0.7),
 new THREE.Vector3(0.55+0.1,0.45+hEG,0.7),
 new THREE.Vector3(0.55,0.4+hEG,0.7)
); line['060_3-060_1'] = new THREE.Line(geo['060_3-060_1'], a0);
geo['060_3-060_0'] = new THREE.Geometry();
geo['060_3-060_0'].vertices.push(
 new THREE.Vector3(0.55,1.2+hEG,0.7),
 new THREE.Vector3(0.55,1.2+hEG,0.7-0.2),
 new THREE.Vector3(0.55,0+hEG,0.7-0.2),
 new THREE.Vector3(0.55,0+hEG,0.7)
); line['060_3-060_0'] = new THREE.Line(geo['060_3-060_0'], a0);
geo['057_1-057_0'] = new THREE.Geometry();
geo['057_1-057_0'].vertices.push(
 new THREE.Vector3(3.3,0.4+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.35+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.05+hEG,2.8),
 new THREE.Vector3(3.3,0+hEG,2.8)
); line['057_1-057_0'] = new THREE.Line(geo['057_1-057_0'], a0);
geo['057_2-057_1'] = new THREE.Geometry();
geo['057_2-057_1'].vertices.push(
 new THREE.Vector3(3.3,0.8+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.75+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.45+hEG,2.8),
 new THREE.Vector3(3.3,0.4+hEG,2.8)
); line['057_2-057_1'] = new THREE.Line(geo['057_2-057_1'], a0);
geo['057_3-057_2'] = new THREE.Geometry();
geo['057_3-057_2'].vertices.push(
 new THREE.Vector3(3.3,1.2+hEG,2.8),
 new THREE.Vector3(3.3-0.1,1.15+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.85+hEG,2.8),
 new THREE.Vector3(3.3,0.8+hEG,2.8)
); line['057_3-057_2'] = new THREE.Line(geo['057_3-057_2'], a0);
geo['057_2-057_0'] = new THREE.Geometry();
geo['057_2-057_0'].vertices.push(
 new THREE.Vector3(3.3,0.8+hEG,2.8),
 new THREE.Vector3(3.3,0.75+hEG,2.8-0.1),
 new THREE.Vector3(3.3,0.05+hEG,2.8-0.1),
 new THREE.Vector3(3.3,0+hEG,2.8)
); line['057_2-057_0'] = new THREE.Line(geo['057_2-057_0'], a0);
geo['057_3-057_1'] = new THREE.Geometry();
geo['057_3-057_1'].vertices.push(
 new THREE.Vector3(3.3,1.2+hEG,2.8),
 new THREE.Vector3(3.3,1.15+hEG,2.8+0.1),
 new THREE.Vector3(3.3,0.45+hEG,2.8+0.1),
 new THREE.Vector3(3.3,0.4+hEG,2.8)
); line['057_3-057_1'] = new THREE.Line(geo['057_3-057_1'], a0);
geo['057_3-057_0'] = new THREE.Geometry();
geo['057_3-057_0'].vertices.push(
 new THREE.Vector3(3.3,1.2+hEG,2.8),
 new THREE.Vector3(3.3-0.2,1.2+hEG,2.8),
 new THREE.Vector3(3.3-0.2,0+hEG,2.8),
 new THREE.Vector3(3.3,0+hEG,2.8)
); line['057_3-057_0'] = new THREE.Line(geo['057_3-057_0'], a0);
geo['057_1-057_0'] = new THREE.Geometry();
geo['057_1-057_0'].vertices.push(
 new THREE.Vector3(3.3,0.4+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.35+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.05+hEG,2.8),
 new THREE.Vector3(3.3,0+hEG,2.8)
); line['057_1-057_0'] = new THREE.Line(geo['057_1-057_0'], a0);
geo['057_2-057_1'] = new THREE.Geometry();
geo['057_2-057_1'].vertices.push(
 new THREE.Vector3(3.3,0.8+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.75+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.45+hEG,2.8),
 new THREE.Vector3(3.3,0.4+hEG,2.8)
); line['057_2-057_1'] = new THREE.Line(geo['057_2-057_1'], a0);
geo['057_3-057_2'] = new THREE.Geometry();
geo['057_3-057_2'].vertices.push(
 new THREE.Vector3(3.3,1.2+hEG,2.8),
 new THREE.Vector3(3.3-0.1,1.15+hEG,2.8),
 new THREE.Vector3(3.3-0.1,0.85+hEG,2.8),
 new THREE.Vector3(3.3,0.8+hEG,2.8)
); line['057_3-057_2'] = new THREE.Line(geo['057_3-057_2'], a0);
geo['057_2-057_0'] = new THREE.Geometry();
geo['057_2-057_0'].vertices.push(
 new THREE.Vector3(3.3,0.8+hEG,2.8),
 new THREE.Vector3(3.3,0.75+hEG,2.8-0.1),
 new THREE.Vector3(3.3,0.05+hEG,2.8-0.1),
 new THREE.Vector3(3.3,0+hEG,2.8)
); line['057_2-057_0'] = new THREE.Line(geo['057_2-057_0'], a0);
geo['057_3-057_1'] = new THREE.Geometry();
geo['057_3-057_1'].vertices.push(
 new THREE.Vector3(3.3,1.2+hEG,2.8),
 new THREE.Vector3(3.3,1.15+hEG,2.8+0.1),
 new THREE.Vector3(3.3,0.45+hEG,2.8+0.1),
 new THREE.Vector3(3.3,0.4+hEG,2.8)
); line['057_3-057_1'] = new THREE.Line(geo['057_3-057_1'], a0);
geo['057_3-057_0'] = new THREE.Geometry();
geo['057_3-057_0'].vertices.push(
 new THREE.Vector3(3.3,1.2+hEG,2.8),
 new THREE.Vector3(3.3-0.2,1.2+hEG,2.8),
 new THREE.Vector3(3.3-0.2,0+hEG,2.8),
 new THREE.Vector3(3.3,0+hEG,2.8)
); line['057_3-057_0'] = new THREE.Line(geo['057_3-057_0'], a0);
geo['059_1-059_0'] = new THREE.Geometry();
geo['059_1-059_0'].vertices.push(
 new THREE.Vector3(2.0,0.4+hEG,2.8),
 new THREE.Vector3(2.0-0.1,0.35+hEG,2.8),
 new THREE.Vector3(2.0-0.1,0.05+hEG,2.8),
 new THREE.Vector3(2.0,0+hEG,2.8)
); line['059_1-059_0'] = new THREE.Line(geo['059_1-059_0'], a0);
geo['059_2-059_1'] = new THREE.Geometry();
geo['059_2-059_1'].vertices.push(
 new THREE.Vector3(2.0,0.8+hEG,2.8),
 new THREE.Vector3(2.0-0.1,0.75+hEG,2.8),
 new THREE.Vector3(2.0-0.1,0.45+hEG,2.8),
 new THREE.Vector3(2.0,0.4+hEG,2.8)
); line['059_2-059_1'] = new THREE.Line(geo['059_2-059_1'], a0);
geo['059_3-059_2'] = new THREE.Geometry();
geo['059_3-059_2'].vertices.push(
 new THREE.Vector3(2.0,1.2+hEG,2.8),
 new THREE.Vector3(2.0-0.1,1.15+hEG,2.8),
 new THREE.Vector3(2.0-0.1,0.85+hEG,2.8),
 new THREE.Vector3(2.0,0.8+hEG,2.8)
); line['059_3-059_2'] = new THREE.Line(geo['059_3-059_2'], a0);
geo['059_2-059_0'] = new THREE.Geometry();
geo['059_2-059_0'].vertices.push(
 new THREE.Vector3(2.0,0.8+hEG,2.8),
 new THREE.Vector3(2.0,0.75+hEG,2.8-0.1),
 new THREE.Vector3(2.0,0.05+hEG,2.8-0.1),
 new THREE.Vector3(2.0,0+hEG,2.8)
); line['059_2-059_0'] = new THREE.Line(geo['059_2-059_0'], a0);
geo['059_3-059_1'] = new THREE.Geometry();
geo['059_3-059_1'].vertices.push(
 new THREE.Vector3(2.0,1.2+hEG,2.8),
 new THREE.Vector3(2.0,1.15+hEG,2.8+0.1),
 new THREE.Vector3(2.0,0.45+hEG,2.8+0.1),
 new THREE.Vector3(2.0,0.4+hEG,2.8)
); line['059_3-059_1'] = new THREE.Line(geo['059_3-059_1'], a0);
geo['059_3-059_0'] = new THREE.Geometry();
geo['059_3-059_0'].vertices.push(
 new THREE.Vector3(2.0,1.2+hEG,2.8),
 new THREE.Vector3(2.0-0.2,1.2+hEG,2.8),
 new THREE.Vector3(2.0-0.2,0+hEG,2.8),
 new THREE.Vector3(2.0,0+hEG,2.8)
); line['059_3-059_0'] = new THREE.Line(geo['059_3-059_0'], a0);
geo['061_1-061_0'] = new THREE.Geometry();
geo['061_1-061_0'].vertices.push(
 new THREE.Vector3(0.7,0.4+hEG,2.8),
 new THREE.Vector3(0.7-0.1,0.35+hEG,2.8),
 new THREE.Vector3(0.7-0.1,0.05+hEG,2.8),
 new THREE.Vector3(0.7,0+hEG,2.8)
); line['061_1-061_0'] = new THREE.Line(geo['061_1-061_0'], a0);
geo['061_2-061_1'] = new THREE.Geometry();
geo['061_2-061_1'].vertices.push(
 new THREE.Vector3(0.7,0.8+hEG,2.8),
 new THREE.Vector3(0.7-0.1,0.75+hEG,2.8),
 new THREE.Vector3(0.7-0.1,0.45+hEG,2.8),
 new THREE.Vector3(0.7,0.4+hEG,2.8)
); line['061_2-061_1'] = new THREE.Line(geo['061_2-061_1'], a0);
geo['061_3-061_2'] = new THREE.Geometry();
geo['061_3-061_2'].vertices.push(
 new THREE.Vector3(0.7,1.2+hEG,2.8),
 new THREE.Vector3(0.7-0.1,1.15+hEG,2.8),
 new THREE.Vector3(0.7-0.1,0.85+hEG,2.8),
 new THREE.Vector3(0.7,0.8+hEG,2.8)
); line['061_3-061_2'] = new THREE.Line(geo['061_3-061_2'], a0);
geo['061_2-061_0'] = new THREE.Geometry();
geo['061_2-061_0'].vertices.push(
 new THREE.Vector3(0.7,0.8+hEG,2.8),
 new THREE.Vector3(0.7,0.75+hEG,2.8-0.1),
 new THREE.Vector3(0.7,0.05+hEG,2.8-0.1),
 new THREE.Vector3(0.7,0+hEG,2.8)
); line['061_2-061_0'] = new THREE.Line(geo['061_2-061_0'], a0);
geo['061_3-061_1'] = new THREE.Geometry();
geo['061_3-061_1'].vertices.push(
 new THREE.Vector3(0.7,1.2+hEG,2.8),
 new THREE.Vector3(0.7,1.15+hEG,2.8+0.1),
 new THREE.Vector3(0.7,0.45+hEG,2.8+0.1),
 new THREE.Vector3(0.7,0.4+hEG,2.8)
); line['061_3-061_1'] = new THREE.Line(geo['061_3-061_1'], a0);
geo['061_3-061_0'] = new THREE.Geometry();
geo['061_3-061_0'].vertices.push(
 new THREE.Vector3(0.7,1.2+hEG,2.8),
 new THREE.Vector3(0.7-0.2,1.2+hEG,2.8),
 new THREE.Vector3(0.7-0.2,0+hEG,2.8),
 new THREE.Vector3(0.7,0+hEG,2.8)
); line['061_3-061_0'] = new THREE.Line(geo['061_3-061_0'], a0);
geo['063_1-063_0'] = new THREE.Geometry();
geo['063_1-063_0'].vertices.push(
 new THREE.Vector3(-0.6,0.4+hEG,2.8),
 new THREE.Vector3(-0.6-0.1,0.35+hEG,2.8),
 new THREE.Vector3(-0.6-0.1,0.05+hEG,2.8),
 new THREE.Vector3(-0.6,0+hEG,2.8)
); line['063_1-063_0'] = new THREE.Line(geo['063_1-063_0'], a0);
geo['063_2-063_1'] = new THREE.Geometry();
geo['063_2-063_1'].vertices.push(
 new THREE.Vector3(-0.6,0.8+hEG,2.8),
 new THREE.Vector3(-0.6-0.1,0.75+hEG,2.8),
 new THREE.Vector3(-0.6-0.1,0.45+hEG,2.8),
 new THREE.Vector3(-0.6,0.4+hEG,2.8)
); line['063_2-063_1'] = new THREE.Line(geo['063_2-063_1'], a0);
geo['063_3-063_2'] = new THREE.Geometry();
geo['063_3-063_2'].vertices.push(
 new THREE.Vector3(-0.6,1.2+hEG,2.8),
 new THREE.Vector3(-0.6-0.1,1.15+hEG,2.8),
 new THREE.Vector3(-0.6-0.1,0.85+hEG,2.8),
 new THREE.Vector3(-0.6,0.8+hEG,2.8)
); line['063_3-063_2'] = new THREE.Line(geo['063_3-063_2'], a0);
geo['063_2-063_0'] = new THREE.Geometry();
geo['063_2-063_0'].vertices.push(
 new THREE.Vector3(-0.6,0.8+hEG,2.8),
 new THREE.Vector3(-0.6,0.75+hEG,2.8-0.1),
 new THREE.Vector3(-0.6,0.05+hEG,2.8-0.1),
 new THREE.Vector3(-0.6,0+hEG,2.8)
); line['063_2-063_0'] = new THREE.Line(geo['063_2-063_0'], a0);
geo['063_3-063_1'] = new THREE.Geometry();
geo['063_3-063_1'].vertices.push(
 new THREE.Vector3(-0.6,1.2+hEG,2.8),
 new THREE.Vector3(-0.6,1.15+hEG,2.8+0.1),
 new THREE.Vector3(-0.6,0.45+hEG,2.8+0.1),
 new THREE.Vector3(-0.6,0.4+hEG,2.8)
); line['063_3-063_1'] = new THREE.Line(geo['063_3-063_1'], a0);
geo['063_3-063_0'] = new THREE.Geometry();
geo['063_3-063_0'].vertices.push(
 new THREE.Vector3(-0.6,1.2+hEG,2.8),
 new THREE.Vector3(-0.6-0.2,1.2+hEG,2.8),
 new THREE.Vector3(-0.6-0.2,0+hEG,2.8),
 new THREE.Vector3(-0.6,0+hEG,2.8)
); line['063_3-063_0'] = new THREE.Line(geo['063_3-063_0'], a0);
geo['065_1-065_0'] = new THREE.Geometry();
geo['065_1-065_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hEG,2.8),
 new THREE.Vector3(-2.8-0.1,0.35+hEG,2.8),
 new THREE.Vector3(-2.8-0.1,0.05+hEG,2.8),
 new THREE.Vector3(-2.8,0+hEG,2.8)
); line['065_1-065_0'] = new THREE.Line(geo['065_1-065_0'], a0);
geo['065_2-065_1'] = new THREE.Geometry();
geo['065_2-065_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hEG,2.8),
 new THREE.Vector3(-2.8-0.1,0.75+hEG,2.8),
 new THREE.Vector3(-2.8-0.1,0.45+hEG,2.8),
 new THREE.Vector3(-2.8,0.4+hEG,2.8)
); line['065_2-065_1'] = new THREE.Line(geo['065_2-065_1'], a0);
geo['065_3-065_2'] = new THREE.Geometry();
geo['065_3-065_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,2.8),
 new THREE.Vector3(-2.8-0.1,1.15+hEG,2.8),
 new THREE.Vector3(-2.8-0.1,0.85+hEG,2.8),
 new THREE.Vector3(-2.8,0.8+hEG,2.8)
); line['065_3-065_2'] = new THREE.Line(geo['065_3-065_2'], a0);
geo['065_2-065_0'] = new THREE.Geometry();
geo['065_2-065_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hEG,2.8),
 new THREE.Vector3(-2.8,0.75+hEG,2.8-0.1),
 new THREE.Vector3(-2.8,0.05+hEG,2.8-0.1),
 new THREE.Vector3(-2.8,0+hEG,2.8)
); line['065_2-065_0'] = new THREE.Line(geo['065_2-065_0'], a0);
geo['065_3-065_1'] = new THREE.Geometry();
geo['065_3-065_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,2.8),
 new THREE.Vector3(-2.8,1.15+hEG,2.8+0.1),
 new THREE.Vector3(-2.8,0.45+hEG,2.8+0.1),
 new THREE.Vector3(-2.8,0.4+hEG,2.8)
); line['065_3-065_1'] = new THREE.Line(geo['065_3-065_1'], a0);
geo['065_3-065_0'] = new THREE.Geometry();
geo['065_3-065_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,2.8),
 new THREE.Vector3(-2.8-0.2,1.2+hEG,2.8),
 new THREE.Vector3(-2.8-0.2,0+hEG,2.8),
 new THREE.Vector3(-2.8,0+hEG,2.8)
); line['065_3-065_0'] = new THREE.Line(geo['065_3-065_0'], a0);
geo['aaa_1-aaa_0'] = new THREE.Geometry();
geo['aaa_1-aaa_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hEG,-0.15),
 new THREE.Vector3(-2.8-0.1,0.35+hEG,-0.15),
 new THREE.Vector3(-2.8-0.1,0.05+hEG,-0.15),
 new THREE.Vector3(-2.8,0+hEG,-0.15)
); line['aaa_1-aaa_0'] = new THREE.Line(geo['aaa_1-aaa_0'], a0);
geo['aaa_2-aaa_1'] = new THREE.Geometry();
geo['aaa_2-aaa_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hEG,-0.15),
 new THREE.Vector3(-2.8-0.1,0.75+hEG,-0.15),
 new THREE.Vector3(-2.8-0.1,0.45+hEG,-0.15),
 new THREE.Vector3(-2.8,0.4+hEG,-0.15)
); line['aaa_2-aaa_1'] = new THREE.Line(geo['aaa_2-aaa_1'], a0);
geo['aaa_3-aaa_2'] = new THREE.Geometry();
geo['aaa_3-aaa_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,-0.15),
 new THREE.Vector3(-2.8-0.1,1.15+hEG,-0.15),
 new THREE.Vector3(-2.8-0.1,0.85+hEG,-0.15),
 new THREE.Vector3(-2.8,0.8+hEG,-0.15)
); line['aaa_3-aaa_2'] = new THREE.Line(geo['aaa_3-aaa_2'], a0);
geo['aaa_2-aaa_0'] = new THREE.Geometry();
geo['aaa_2-aaa_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hEG,-0.15),
 new THREE.Vector3(-2.8,0.75+hEG,-0.15-0.1),
 new THREE.Vector3(-2.8,0.05+hEG,-0.15-0.1),
 new THREE.Vector3(-2.8,0+hEG,-0.15)
); line['aaa_2-aaa_0'] = new THREE.Line(geo['aaa_2-aaa_0'], a0);
geo['aaa_3-aaa_1'] = new THREE.Geometry();
geo['aaa_3-aaa_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,-0.15),
 new THREE.Vector3(-2.8,1.15+hEG,-0.15+0.1),
 new THREE.Vector3(-2.8,0.45+hEG,-0.15+0.1),
 new THREE.Vector3(-2.8,0.4+hEG,-0.15)
); line['aaa_3-aaa_1'] = new THREE.Line(geo['aaa_3-aaa_1'], a0);
geo['aaa_3-aaa_0'] = new THREE.Geometry();
geo['aaa_3-aaa_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,-0.15),
 new THREE.Vector3(-2.8-0.2,1.2+hEG,-0.15),
 new THREE.Vector3(-2.8-0.2,0+hEG,-0.15),
 new THREE.Vector3(-2.8,0+hEG,-0.15)
); line['aaa_3-aaa_0'] = new THREE.Line(geo['aaa_3-aaa_0'], a0);
geo['079_1-079_0'] = new THREE.Geometry();
geo['079_1-079_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hEG,-2.75),
 new THREE.Vector3(-2.8-0.1,0.35+hEG,-2.75),
 new THREE.Vector3(-2.8-0.1,0.05+hEG,-2.75),
 new THREE.Vector3(-2.8,0+hEG,-2.75)
); line['079_1-079_0'] = new THREE.Line(geo['079_1-079_0'], a0);
geo['079_2-079_1'] = new THREE.Geometry();
geo['079_2-079_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hEG,-2.75),
 new THREE.Vector3(-2.8-0.1,0.75+hEG,-2.75),
 new THREE.Vector3(-2.8-0.1,0.45+hEG,-2.75),
 new THREE.Vector3(-2.8,0.4+hEG,-2.75)
); line['079_2-079_1'] = new THREE.Line(geo['079_2-079_1'], a0);
geo['079_3-079_2'] = new THREE.Geometry();
geo['079_3-079_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,-2.75),
 new THREE.Vector3(-2.8-0.1,1.15+hEG,-2.75),
 new THREE.Vector3(-2.8-0.1,0.85+hEG,-2.75),
 new THREE.Vector3(-2.8,0.8+hEG,-2.75)
); line['079_3-079_2'] = new THREE.Line(geo['079_3-079_2'], a0);
geo['079_2-079_0'] = new THREE.Geometry();
geo['079_2-079_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hEG,-2.75),
 new THREE.Vector3(-2.8,0.75+hEG,-2.75-0.1),
 new THREE.Vector3(-2.8,0.05+hEG,-2.75-0.1),
 new THREE.Vector3(-2.8,0+hEG,-2.75)
); line['079_2-079_0'] = new THREE.Line(geo['079_2-079_0'], a0);
geo['079_3-079_1'] = new THREE.Geometry();
geo['079_3-079_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,-2.75),
 new THREE.Vector3(-2.8,1.15+hEG,-2.75+0.1),
 new THREE.Vector3(-2.8,0.45+hEG,-2.75+0.1),
 new THREE.Vector3(-2.8,0.4+hEG,-2.75)
); line['079_3-079_1'] = new THREE.Line(geo['079_3-079_1'], a0);
geo['079_3-079_0'] = new THREE.Geometry();
geo['079_3-079_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hEG,-2.75),
 new THREE.Vector3(-2.8-0.2,1.2+hEG,-2.75),
 new THREE.Vector3(-2.8-0.2,0+hEG,-2.75),
 new THREE.Vector3(-2.8,0+hEG,-2.75)
); line['079_3-079_0'] = new THREE.Line(geo['079_3-079_0'], a0);
geo['078_1-078_0'] = new THREE.Geometry();
geo['078_1-078_0'].vertices.push(
 new THREE.Vector3(-0.7,0.4+hEG,-3.65),
 new THREE.Vector3(-0.7,0.35+hEG,-3.65-0.1),
 new THREE.Vector3(-0.7,0.05+hEG,-3.65-0.1),
 new THREE.Vector3(-0.7,0+hEG,-3.65)
); line['078_1-078_0'] = new THREE.Line(geo['078_1-078_0'], a0);
geo['078_2-078_1'] = new THREE.Geometry();
geo['078_2-078_1'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hEG,-3.65),
 new THREE.Vector3(-0.7,0.75+hEG,-3.65-0.1),
 new THREE.Vector3(-0.7,0.45+hEG,-3.65-0.1),
 new THREE.Vector3(-0.7,0.4+hEG,-3.65)
); line['078_2-078_1'] = new THREE.Line(geo['078_2-078_1'], a0);
geo['078_3-078_2'] = new THREE.Geometry();
geo['078_3-078_2'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-3.65),
 new THREE.Vector3(-0.7,1.15+hEG,-3.65-0.1),
 new THREE.Vector3(-0.7,0.85+hEG,-3.65-0.1),
 new THREE.Vector3(-0.7,0.8+hEG,-3.65)
); line['078_3-078_2'] = new THREE.Line(geo['078_3-078_2'], a0);
geo['078_2-078_0'] = new THREE.Geometry();
geo['078_2-078_0'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hEG,-3.65),
 new THREE.Vector3(-0.7-0.1,0.75+hEG,-3.65),
 new THREE.Vector3(-0.7-0.1,0.05+hEG,-3.65),
 new THREE.Vector3(-0.7,0+hEG,-3.65)
); line['078_2-078_0'] = new THREE.Line(geo['078_2-078_0'], a0);
geo['078_3-078_1'] = new THREE.Geometry();
geo['078_3-078_1'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-3.65),
 new THREE.Vector3(-0.7+0.1,1.15+hEG,-3.65),
 new THREE.Vector3(-0.7+0.1,0.45+hEG,-3.65),
 new THREE.Vector3(-0.7,0.4+hEG,-3.65)
); line['078_3-078_1'] = new THREE.Line(geo['078_3-078_1'], a0);
geo['078_3-078_0'] = new THREE.Geometry();
geo['078_3-078_0'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-3.65),
 new THREE.Vector3(-0.7,1.2+hEG,-3.65-0.2),
 new THREE.Vector3(-0.7,0+hEG,-3.65-0.2),
 new THREE.Vector3(-0.7,0+hEG,-3.65)
); line['078_3-078_0'] = new THREE.Line(geo['078_3-078_0'], a0);
geo['076_1-076_0'] = new THREE.Geometry();
geo['076_1-076_0'].vertices.push(
 new THREE.Vector3(-0.7,0.4+hEG,-2.55),
 new THREE.Vector3(-0.7,0.35+hEG,-2.55-0.1),
 new THREE.Vector3(-0.7,0.05+hEG,-2.55-0.1),
 new THREE.Vector3(-0.7,0+hEG,-2.55)
); line['076_1-076_0'] = new THREE.Line(geo['076_1-076_0'], a0);
geo['076_2-076_1'] = new THREE.Geometry();
geo['076_2-076_1'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hEG,-2.55),
 new THREE.Vector3(-0.7,0.75+hEG,-2.55-0.1),
 new THREE.Vector3(-0.7,0.45+hEG,-2.55-0.1),
 new THREE.Vector3(-0.7,0.4+hEG,-2.55)
); line['076_2-076_1'] = new THREE.Line(geo['076_2-076_1'], a0);
geo['076_3-076_2'] = new THREE.Geometry();
geo['076_3-076_2'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-2.55),
 new THREE.Vector3(-0.7,1.15+hEG,-2.55-0.1),
 new THREE.Vector3(-0.7,0.85+hEG,-2.55-0.1),
 new THREE.Vector3(-0.7,0.8+hEG,-2.55)
); line['076_3-076_2'] = new THREE.Line(geo['076_3-076_2'], a0);
geo['076_2-076_0'] = new THREE.Geometry();
geo['076_2-076_0'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hEG,-2.55),
 new THREE.Vector3(-0.7-0.1,0.75+hEG,-2.55),
 new THREE.Vector3(-0.7-0.1,0.05+hEG,-2.55),
 new THREE.Vector3(-0.7,0+hEG,-2.55)
); line['076_2-076_0'] = new THREE.Line(geo['076_2-076_0'], a0);
geo['076_3-076_1'] = new THREE.Geometry();
geo['076_3-076_1'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-2.55),
 new THREE.Vector3(-0.7+0.1,1.15+hEG,-2.55),
 new THREE.Vector3(-0.7+0.1,0.45+hEG,-2.55),
 new THREE.Vector3(-0.7,0.4+hEG,-2.55)
); line['076_3-076_1'] = new THREE.Line(geo['076_3-076_1'], a0);
geo['076_3-076_0'] = new THREE.Geometry();
geo['076_3-076_0'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-2.55),
 new THREE.Vector3(-0.7,1.2+hEG,-2.55-0.2),
 new THREE.Vector3(-0.7,0+hEG,-2.55-0.2),
 new THREE.Vector3(-0.7,0+hEG,-2.55)
); line['076_3-076_0'] = new THREE.Line(geo['076_3-076_0'], a0);
geo['074_1-074_0'] = new THREE.Geometry();
geo['074_1-074_0'].vertices.push(
 new THREE.Vector3(-0.7,0.4+hEG,-1.4),
 new THREE.Vector3(-0.7,0.35+hEG,-1.4-0.1),
 new THREE.Vector3(-0.7,0.05+hEG,-1.4-0.1),
 new THREE.Vector3(-0.7,0+hEG,-1.4)
); line['074_1-074_0'] = new THREE.Line(geo['074_1-074_0'], a0);
geo['074_2-074_1'] = new THREE.Geometry();
geo['074_2-074_1'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hEG,-1.4),
 new THREE.Vector3(-0.7,0.75+hEG,-1.4-0.1),
 new THREE.Vector3(-0.7,0.45+hEG,-1.4-0.1),
 new THREE.Vector3(-0.7,0.4+hEG,-1.4)
); line['074_2-074_1'] = new THREE.Line(geo['074_2-074_1'], a0);
geo['074_3-074_2'] = new THREE.Geometry();
geo['074_3-074_2'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-1.4),
 new THREE.Vector3(-0.7,1.15+hEG,-1.4-0.1),
 new THREE.Vector3(-0.7,0.85+hEG,-1.4-0.1),
 new THREE.Vector3(-0.7,0.8+hEG,-1.4)
); line['074_3-074_2'] = new THREE.Line(geo['074_3-074_2'], a0);
geo['074_2-074_0'] = new THREE.Geometry();
geo['074_2-074_0'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hEG,-1.4),
 new THREE.Vector3(-0.7-0.1,0.75+hEG,-1.4),
 new THREE.Vector3(-0.7-0.1,0.05+hEG,-1.4),
 new THREE.Vector3(-0.7,0+hEG,-1.4)
); line['074_2-074_0'] = new THREE.Line(geo['074_2-074_0'], a0);
geo['074_3-074_1'] = new THREE.Geometry();
geo['074_3-074_1'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-1.4),
 new THREE.Vector3(-0.7+0.1,1.15+hEG,-1.4),
 new THREE.Vector3(-0.7+0.1,0.45+hEG,-1.4),
 new THREE.Vector3(-0.7,0.4+hEG,-1.4)
); line['074_3-074_1'] = new THREE.Line(geo['074_3-074_1'], a0);
geo['074_3-074_0'] = new THREE.Geometry();
geo['074_3-074_0'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-1.4),
 new THREE.Vector3(-0.7,1.2+hEG,-1.4-0.2),
 new THREE.Vector3(-0.7,0+hEG,-1.4-0.2),
 new THREE.Vector3(-0.7,0+hEG,-1.4)
); line['074_3-074_0'] = new THREE.Line(geo['074_3-074_0'], a0);
geo['072_1-072_0'] = new THREE.Geometry();
geo['072_1-072_0'].vertices.push(
 new THREE.Vector3(-0.7,0.4+hEG,-0.55),
 new THREE.Vector3(-0.7,0.35+hEG,-0.55-0.1),
 new THREE.Vector3(-0.7,0.05+hEG,-0.55-0.1),
 new THREE.Vector3(-0.7,0+hEG,-0.55)
); line['072_1-072_0'] = new THREE.Line(geo['072_1-072_0'], a0);
geo['072_2-072_1'] = new THREE.Geometry();
geo['072_2-072_1'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hEG,-0.55),
 new THREE.Vector3(-0.7,0.75+hEG,-0.55-0.1),
 new THREE.Vector3(-0.7,0.45+hEG,-0.55-0.1),
 new THREE.Vector3(-0.7,0.4+hEG,-0.55)
); line['072_2-072_1'] = new THREE.Line(geo['072_2-072_1'], a0);
geo['072_3-072_2'] = new THREE.Geometry();
geo['072_3-072_2'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-0.55),
 new THREE.Vector3(-0.7,1.15+hEG,-0.55-0.1),
 new THREE.Vector3(-0.7,0.85+hEG,-0.55-0.1),
 new THREE.Vector3(-0.7,0.8+hEG,-0.55)
); line['072_3-072_2'] = new THREE.Line(geo['072_3-072_2'], a0);
geo['072_2-072_0'] = new THREE.Geometry();
geo['072_2-072_0'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hEG,-0.55),
 new THREE.Vector3(-0.7-0.1,0.75+hEG,-0.55),
 new THREE.Vector3(-0.7-0.1,0.05+hEG,-0.55),
 new THREE.Vector3(-0.7,0+hEG,-0.55)
); line['072_2-072_0'] = new THREE.Line(geo['072_2-072_0'], a0);
geo['072_3-072_1'] = new THREE.Geometry();
geo['072_3-072_1'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-0.55),
 new THREE.Vector3(-0.7+0.1,1.15+hEG,-0.55),
 new THREE.Vector3(-0.7+0.1,0.45+hEG,-0.55),
 new THREE.Vector3(-0.7,0.4+hEG,-0.55)
); line['072_3-072_1'] = new THREE.Line(geo['072_3-072_1'], a0);
geo['072_3-072_0'] = new THREE.Geometry();
geo['072_3-072_0'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hEG,-0.55),
 new THREE.Vector3(-0.7,1.2+hEG,-0.55-0.2),
 new THREE.Vector3(-0.7,0+hEG,-0.55-0.2),
 new THREE.Vector3(-0.7,0+hEG,-0.55)
); line['072_3-072_0'] = new THREE.Line(geo['072_3-072_0'], a0);
geo['154_1-154_0'] = new THREE.Geometry();
geo['154_1-154_0'].vertices.push(
 new THREE.Vector3(3.3,0.4+hME,0.7),
 new THREE.Vector3(3.3,0.35+hME,0.7-0.1),
 new THREE.Vector3(3.3,0.05+hME,0.7-0.1),
 new THREE.Vector3(3.3,0+hME,0.7)
); line['154_1-154_0'] = new THREE.Line(geo['154_1-154_0'], a0);
geo['154_2-154_1'] = new THREE.Geometry();
geo['154_2-154_1'].vertices.push(
 new THREE.Vector3(3.3,0.8+hME,0.7),
 new THREE.Vector3(3.3,0.75+hME,0.7-0.1),
 new THREE.Vector3(3.3,0.45+hME,0.7-0.1),
 new THREE.Vector3(3.3,0.4+hME,0.7)
); line['154_2-154_1'] = new THREE.Line(geo['154_2-154_1'], a0);
geo['154_3-154_2'] = new THREE.Geometry();
geo['154_3-154_2'].vertices.push(
 new THREE.Vector3(3.3,1.2+hME,0.7),
 new THREE.Vector3(3.3,1.15+hME,0.7-0.1),
 new THREE.Vector3(3.3,0.85+hME,0.7-0.1),
 new THREE.Vector3(3.3,0.8+hME,0.7)
); line['154_3-154_2'] = new THREE.Line(geo['154_3-154_2'], a0);
geo['154_2-154_0'] = new THREE.Geometry();
geo['154_2-154_0'].vertices.push(
 new THREE.Vector3(3.3,0.8+hME,0.7),
 new THREE.Vector3(3.3-0.1,0.75+hME,0.7),
 new THREE.Vector3(3.3-0.1,0.05+hME,0.7),
 new THREE.Vector3(3.3,0+hME,0.7)
); line['154_2-154_0'] = new THREE.Line(geo['154_2-154_0'], a0);
geo['154_3-154_1'] = new THREE.Geometry();
geo['154_3-154_1'].vertices.push(
 new THREE.Vector3(3.3,1.2+hME,0.7),
 new THREE.Vector3(3.3+0.1,1.15+hME,0.7),
 new THREE.Vector3(3.3+0.1,0.45+hME,0.7),
 new THREE.Vector3(3.3,0.4+hME,0.7)
); line['154_3-154_1'] = new THREE.Line(geo['154_3-154_1'], a0);
geo['154_3-154_0'] = new THREE.Geometry();
geo['154_3-154_0'].vertices.push(
 new THREE.Vector3(3.3,1.2+hME,0.7),
 new THREE.Vector3(3.3,1.2+hME,0.7-0.2),
 new THREE.Vector3(3.3,0+hME,0.7-0.2),
 new THREE.Vector3(3.3,0+hME,0.7)
); line['154_3-154_0'] = new THREE.Line(geo['154_3-154_0'], a0);
geo['178_1-178_0'] = new THREE.Geometry();
geo['178_1-178_0'].vertices.push(
 new THREE.Vector3(-0.7,0.4+hME,-3.3),
 new THREE.Vector3(-0.7,0.35+hME,-3.3-0.1),
 new THREE.Vector3(-0.7,0.05+hME,-3.3-0.1),
 new THREE.Vector3(-0.7,0+hME,-3.3)
); line['178_1-178_0'] = new THREE.Line(geo['178_1-178_0'], a0);
geo['178_2-178_1'] = new THREE.Geometry();
geo['178_2-178_1'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hME,-3.3),
 new THREE.Vector3(-0.7,0.75+hME,-3.3-0.1),
 new THREE.Vector3(-0.7,0.45+hME,-3.3-0.1),
 new THREE.Vector3(-0.7,0.4+hME,-3.3)
); line['178_2-178_1'] = new THREE.Line(geo['178_2-178_1'], a0);
geo['178_3-178_2'] = new THREE.Geometry();
geo['178_3-178_2'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-3.3),
 new THREE.Vector3(-0.7,1.15+hME,-3.3-0.1),
 new THREE.Vector3(-0.7,0.85+hME,-3.3-0.1),
 new THREE.Vector3(-0.7,0.8+hME,-3.3)
); line['178_3-178_2'] = new THREE.Line(geo['178_3-178_2'], a0);
geo['178_2-178_0'] = new THREE.Geometry();
geo['178_2-178_0'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hME,-3.3),
 new THREE.Vector3(-0.7-0.1,0.75+hME,-3.3),
 new THREE.Vector3(-0.7-0.1,0.05+hME,-3.3),
 new THREE.Vector3(-0.7,0+hME,-3.3)
); line['178_2-178_0'] = new THREE.Line(geo['178_2-178_0'], a0);
geo['178_3-178_1'] = new THREE.Geometry();
geo['178_3-178_1'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-3.3),
 new THREE.Vector3(-0.7+0.1,1.15+hME,-3.3),
 new THREE.Vector3(-0.7+0.1,0.45+hME,-3.3),
 new THREE.Vector3(-0.7,0.4+hME,-3.3)
); line['178_3-178_1'] = new THREE.Line(geo['178_3-178_1'], a0);
geo['178_3-178_0'] = new THREE.Geometry();
geo['178_3-178_0'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-3.3),
 new THREE.Vector3(-0.7,1.2+hME,-3.3-0.2),
 new THREE.Vector3(-0.7,0+hME,-3.3-0.2),
 new THREE.Vector3(-0.7,0+hME,-3.3)
); line['178_3-178_0'] = new THREE.Line(geo['178_3-178_0'], a0);
geo['176_1-176_0'] = new THREE.Geometry();
geo['176_1-176_0'].vertices.push(
 new THREE.Vector3(-0.7,0.4+hME,-2.0),
 new THREE.Vector3(-0.7,0.35+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.05+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0+hME,-2.0)
); line['176_1-176_0'] = new THREE.Line(geo['176_1-176_0'], a0);
geo['176_2-176_1'] = new THREE.Geometry();
geo['176_2-176_1'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hME,-2.0),
 new THREE.Vector3(-0.7,0.75+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.45+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.4+hME,-2.0)
); line['176_2-176_1'] = new THREE.Line(geo['176_2-176_1'], a0);
geo['176_3-176_2'] = new THREE.Geometry();
geo['176_3-176_2'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-2.0),
 new THREE.Vector3(-0.7,1.15+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.85+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.8+hME,-2.0)
); line['176_3-176_2'] = new THREE.Line(geo['176_3-176_2'], a0);
geo['176_2-176_0'] = new THREE.Geometry();
geo['176_2-176_0'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hME,-2.0),
 new THREE.Vector3(-0.7-0.1,0.75+hME,-2.0),
 new THREE.Vector3(-0.7-0.1,0.05+hME,-2.0),
 new THREE.Vector3(-0.7,0+hME,-2.0)
); line['176_2-176_0'] = new THREE.Line(geo['176_2-176_0'], a0);
geo['176_3-176_1'] = new THREE.Geometry();
geo['176_3-176_1'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-2.0),
 new THREE.Vector3(-0.7+0.1,1.15+hME,-2.0),
 new THREE.Vector3(-0.7+0.1,0.45+hME,-2.0),
 new THREE.Vector3(-0.7,0.4+hME,-2.0)
); line['176_3-176_1'] = new THREE.Line(geo['176_3-176_1'], a0);
geo['176_3-176_0'] = new THREE.Geometry();
geo['176_3-176_0'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-2.0),
 new THREE.Vector3(-0.7,1.2+hME,-2.0-0.2),
 new THREE.Vector3(-0.7,0+hME,-2.0-0.2),
 new THREE.Vector3(-0.7,0+hME,-2.0)
); line['176_3-176_0'] = new THREE.Line(geo['176_3-176_0'], a0);
geo['172_1-172_0'] = new THREE.Geometry();
geo['172_1-172_0'].vertices.push(
 new THREE.Vector3(-0.7,0.4+hME,-2.0),
 new THREE.Vector3(-0.7,0.35+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.05+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0+hME,-2.0)
); line['172_1-172_0'] = new THREE.Line(geo['172_1-172_0'], a0);
geo['172_2-172_1'] = new THREE.Geometry();
geo['172_2-172_1'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hME,-2.0),
 new THREE.Vector3(-0.7,0.75+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.45+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.4+hME,-2.0)
); line['172_2-172_1'] = new THREE.Line(geo['172_2-172_1'], a0);
geo['172_3-172_2'] = new THREE.Geometry();
geo['172_3-172_2'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-2.0),
 new THREE.Vector3(-0.7,1.15+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.85+hME,-2.0-0.1),
 new THREE.Vector3(-0.7,0.8+hME,-2.0)
); line['172_3-172_2'] = new THREE.Line(geo['172_3-172_2'], a0);
geo['172_2-172_0'] = new THREE.Geometry();
geo['172_2-172_0'].vertices.push(
 new THREE.Vector3(-0.7,0.8+hME,-2.0),
 new THREE.Vector3(-0.7-0.1,0.75+hME,-2.0),
 new THREE.Vector3(-0.7-0.1,0.05+hME,-2.0),
 new THREE.Vector3(-0.7,0+hME,-2.0)
); line['172_2-172_0'] = new THREE.Line(geo['172_2-172_0'], a0);
geo['172_3-172_1'] = new THREE.Geometry();
geo['172_3-172_1'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-2.0),
 new THREE.Vector3(-0.7+0.1,1.15+hME,-2.0),
 new THREE.Vector3(-0.7+0.1,0.45+hME,-2.0),
 new THREE.Vector3(-0.7,0.4+hME,-2.0)
); line['172_3-172_1'] = new THREE.Line(geo['172_3-172_1'], a0);
geo['172_3-172_0'] = new THREE.Geometry();
geo['172_3-172_0'].vertices.push(
 new THREE.Vector3(-0.7,1.2+hME,-2.0),
 new THREE.Vector3(-0.7,1.2+hME,-2.0-0.2),
 new THREE.Vector3(-0.7,0+hME,-2.0-0.2),
 new THREE.Vector3(-0.7,0+hME,-2.0)
); line['172_3-172_0'] = new THREE.Line(geo['172_3-172_0'], a0);
geo['179_1-179_0'] = new THREE.Geometry();
geo['179_1-179_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hME,-2.75),
 new THREE.Vector3(-2.8-0.1,0.35+hME,-2.75),
 new THREE.Vector3(-2.8-0.1,0.05+hME,-2.75),
 new THREE.Vector3(-2.8,0+hME,-2.75)
); line['179_1-179_0'] = new THREE.Line(geo['179_1-179_0'], a0);
geo['179_2-179_1'] = new THREE.Geometry();
geo['179_2-179_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,-2.75),
 new THREE.Vector3(-2.8-0.1,0.75+hME,-2.75),
 new THREE.Vector3(-2.8-0.1,0.45+hME,-2.75),
 new THREE.Vector3(-2.8,0.4+hME,-2.75)
); line['179_2-179_1'] = new THREE.Line(geo['179_2-179_1'], a0);
geo['179_3-179_2'] = new THREE.Geometry();
geo['179_3-179_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-2.75),
 new THREE.Vector3(-2.8-0.1,1.15+hME,-2.75),
 new THREE.Vector3(-2.8-0.1,0.85+hME,-2.75),
 new THREE.Vector3(-2.8,0.8+hME,-2.75)
); line['179_3-179_2'] = new THREE.Line(geo['179_3-179_2'], a0);
geo['179_2-179_0'] = new THREE.Geometry();
geo['179_2-179_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,-2.75),
 new THREE.Vector3(-2.8,0.75+hME,-2.75-0.1),
 new THREE.Vector3(-2.8,0.05+hME,-2.75-0.1),
 new THREE.Vector3(-2.8,0+hME,-2.75)
); line['179_2-179_0'] = new THREE.Line(geo['179_2-179_0'], a0);
geo['179_3-179_1'] = new THREE.Geometry();
geo['179_3-179_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-2.75),
 new THREE.Vector3(-2.8,1.15+hME,-2.75+0.1),
 new THREE.Vector3(-2.8,0.45+hME,-2.75+0.1),
 new THREE.Vector3(-2.8,0.4+hME,-2.75)
); line['179_3-179_1'] = new THREE.Line(geo['179_3-179_1'], a0);
geo['179_3-179_0'] = new THREE.Geometry();
geo['179_3-179_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-2.75),
 new THREE.Vector3(-2.8-0.2,1.2+hME,-2.75),
 new THREE.Vector3(-2.8-0.2,0+hME,-2.75),
 new THREE.Vector3(-2.8,0+hME,-2.75)
); line['179_3-179_0'] = new THREE.Line(geo['179_3-179_0'], a0);
geo['177_1-177_0'] = new THREE.Geometry();
geo['177_1-177_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hME,-1.2),
 new THREE.Vector3(-2.8-0.1,0.35+hME,-1.2),
 new THREE.Vector3(-2.8-0.1,0.05+hME,-1.2),
 new THREE.Vector3(-2.8,0+hME,-1.2)
); line['177_1-177_0'] = new THREE.Line(geo['177_1-177_0'], a0);
geo['177_2-177_1'] = new THREE.Geometry();
geo['177_2-177_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,-1.2),
 new THREE.Vector3(-2.8-0.1,0.75+hME,-1.2),
 new THREE.Vector3(-2.8-0.1,0.45+hME,-1.2),
 new THREE.Vector3(-2.8,0.4+hME,-1.2)
); line['177_2-177_1'] = new THREE.Line(geo['177_2-177_1'], a0);
geo['177_3-177_2'] = new THREE.Geometry();
geo['177_3-177_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-1.2),
 new THREE.Vector3(-2.8-0.1,1.15+hME,-1.2),
 new THREE.Vector3(-2.8-0.1,0.85+hME,-1.2),
 new THREE.Vector3(-2.8,0.8+hME,-1.2)
); line['177_3-177_2'] = new THREE.Line(geo['177_3-177_2'], a0);
geo['177_2-177_0'] = new THREE.Geometry();
geo['177_2-177_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,-1.2),
 new THREE.Vector3(-2.8,0.75+hME,-1.2-0.1),
 new THREE.Vector3(-2.8,0.05+hME,-1.2-0.1),
 new THREE.Vector3(-2.8,0+hME,-1.2)
); line['177_2-177_0'] = new THREE.Line(geo['177_2-177_0'], a0);
geo['177_3-177_1'] = new THREE.Geometry();
geo['177_3-177_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-1.2),
 new THREE.Vector3(-2.8,1.15+hME,-1.2+0.1),
 new THREE.Vector3(-2.8,0.45+hME,-1.2+0.1),
 new THREE.Vector3(-2.8,0.4+hME,-1.2)
); line['177_3-177_1'] = new THREE.Line(geo['177_3-177_1'], a0);
geo['177_3-177_0'] = new THREE.Geometry();
geo['177_3-177_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-1.2),
 new THREE.Vector3(-2.8-0.2,1.2+hME,-1.2),
 new THREE.Vector3(-2.8-0.2,0+hME,-1.2),
 new THREE.Vector3(-2.8,0+hME,-1.2)
); line['177_3-177_0'] = new THREE.Line(geo['177_3-177_0'], a0);
geo['153_1-153_0'] = new THREE.Geometry();
geo['153_1-153_0'].vertices.push(
 new THREE.Vector3(4.7,0.4+hME,2.8),
 new THREE.Vector3(4.7-0.1,0.35+hME,2.8),
 new THREE.Vector3(4.7-0.1,0.05+hME,2.8),
 new THREE.Vector3(4.7,0+hME,2.8)
); line['153_1-153_0'] = new THREE.Line(geo['153_1-153_0'], a0);
geo['153_2-153_1'] = new THREE.Geometry();
geo['153_2-153_1'].vertices.push(
 new THREE.Vector3(4.7,0.8+hME,2.8),
 new THREE.Vector3(4.7-0.1,0.75+hME,2.8),
 new THREE.Vector3(4.7-0.1,0.45+hME,2.8),
 new THREE.Vector3(4.7,0.4+hME,2.8)
); line['153_2-153_1'] = new THREE.Line(geo['153_2-153_1'], a0);
geo['153_3-153_2'] = new THREE.Geometry();
geo['153_3-153_2'].vertices.push(
 new THREE.Vector3(4.7,1.2+hME,2.8),
 new THREE.Vector3(4.7-0.1,1.15+hME,2.8),
 new THREE.Vector3(4.7-0.1,0.85+hME,2.8),
 new THREE.Vector3(4.7,0.8+hME,2.8)
); line['153_3-153_2'] = new THREE.Line(geo['153_3-153_2'], a0);
geo['153_2-153_0'] = new THREE.Geometry();
geo['153_2-153_0'].vertices.push(
 new THREE.Vector3(4.7,0.8+hME,2.8),
 new THREE.Vector3(4.7,0.75+hME,2.8-0.1),
 new THREE.Vector3(4.7,0.05+hME,2.8-0.1),
 new THREE.Vector3(4.7,0+hME,2.8)
); line['153_2-153_0'] = new THREE.Line(geo['153_2-153_0'], a0);
geo['153_3-153_1'] = new THREE.Geometry();
geo['153_3-153_1'].vertices.push(
 new THREE.Vector3(4.7,1.2+hME,2.8),
 new THREE.Vector3(4.7,1.15+hME,2.8+0.1),
 new THREE.Vector3(4.7,0.45+hME,2.8+0.1),
 new THREE.Vector3(4.7,0.4+hME,2.8)
); line['153_3-153_1'] = new THREE.Line(geo['153_3-153_1'], a0);
geo['153_3-153_0'] = new THREE.Geometry();
geo['153_3-153_0'].vertices.push(
 new THREE.Vector3(4.7,1.2+hME,2.8),
 new THREE.Vector3(4.7-0.2,1.2+hME,2.8),
 new THREE.Vector3(4.7-0.2,0+hME,2.8),
 new THREE.Vector3(4.7,0+hME,2.8)
); line['153_3-153_0'] = new THREE.Line(geo['153_3-153_0'], a0);
geo['156_1-156_0'] = new THREE.Geometry();
geo['156_1-156_0'].vertices.push(
 new THREE.Vector3(2.0,0.4+hME,0.7),
 new THREE.Vector3(2.0,0.35+hME,0.7-0.1),
 new THREE.Vector3(2.0,0.05+hME,0.7-0.1),
 new THREE.Vector3(2.0,0+hME,0.7)
); line['156_1-156_0'] = new THREE.Line(geo['156_1-156_0'], a0);
geo['156_2-156_1'] = new THREE.Geometry();
geo['156_2-156_1'].vertices.push(
 new THREE.Vector3(2.0,0.8+hME,0.7),
 new THREE.Vector3(2.0,0.75+hME,0.7-0.1),
 new THREE.Vector3(2.0,0.45+hME,0.7-0.1),
 new THREE.Vector3(2.0,0.4+hME,0.7)
); line['156_2-156_1'] = new THREE.Line(geo['156_2-156_1'], a0);
geo['156_3-156_2'] = new THREE.Geometry();
geo['156_3-156_2'].vertices.push(
 new THREE.Vector3(2.0,1.2+hME,0.7),
 new THREE.Vector3(2.0,1.15+hME,0.7-0.1),
 new THREE.Vector3(2.0,0.85+hME,0.7-0.1),
 new THREE.Vector3(2.0,0.8+hME,0.7)
); line['156_3-156_2'] = new THREE.Line(geo['156_3-156_2'], a0);
geo['156_2-156_0'] = new THREE.Geometry();
geo['156_2-156_0'].vertices.push(
 new THREE.Vector3(2.0,0.8+hME,0.7),
 new THREE.Vector3(2.0-0.1,0.75+hME,0.7),
 new THREE.Vector3(2.0-0.1,0.05+hME,0.7),
 new THREE.Vector3(2.0,0+hME,0.7)
); line['156_2-156_0'] = new THREE.Line(geo['156_2-156_0'], a0);
geo['156_3-156_1'] = new THREE.Geometry();
geo['156_3-156_1'].vertices.push(
 new THREE.Vector3(2.0,1.2+hME,0.7),
 new THREE.Vector3(2.0+0.1,1.15+hME,0.7),
 new THREE.Vector3(2.0+0.1,0.45+hME,0.7),
 new THREE.Vector3(2.0,0.4+hME,0.7)
); line['156_3-156_1'] = new THREE.Line(geo['156_3-156_1'], a0);
geo['156_3-156_0'] = new THREE.Geometry();
geo['156_3-156_0'].vertices.push(
 new THREE.Vector3(2.0,1.2+hME,0.7),
 new THREE.Vector3(2.0,1.2+hME,0.7-0.2),
 new THREE.Vector3(2.0,0+hME,0.7-0.2),
 new THREE.Vector3(2.0,0+hME,0.7)
); line['156_3-156_0'] = new THREE.Line(geo['156_3-156_0'], a0);
geo['160_1-160_0'] = new THREE.Geometry();
geo['160_1-160_0'].vertices.push(
 new THREE.Vector3(0.7,0.4+hME,0.7),
 new THREE.Vector3(0.7,0.35+hME,0.7-0.1),
 new THREE.Vector3(0.7,0.05+hME,0.7-0.1),
 new THREE.Vector3(0.7,0+hME,0.7)
); line['160_1-160_0'] = new THREE.Line(geo['160_1-160_0'], a0);
geo['160_2-160_1'] = new THREE.Geometry();
geo['160_2-160_1'].vertices.push(
 new THREE.Vector3(0.7,0.8+hME,0.7),
 new THREE.Vector3(0.7,0.75+hME,0.7-0.1),
 new THREE.Vector3(0.7,0.45+hME,0.7-0.1),
 new THREE.Vector3(0.7,0.4+hME,0.7)
); line['160_2-160_1'] = new THREE.Line(geo['160_2-160_1'], a0);
geo['160_3-160_2'] = new THREE.Geometry();
geo['160_3-160_2'].vertices.push(
 new THREE.Vector3(0.7,1.2+hME,0.7),
 new THREE.Vector3(0.7,1.15+hME,0.7-0.1),
 new THREE.Vector3(0.7,0.85+hME,0.7-0.1),
 new THREE.Vector3(0.7,0.8+hME,0.7)
); line['160_3-160_2'] = new THREE.Line(geo['160_3-160_2'], a0);
geo['160_2-160_0'] = new THREE.Geometry();
geo['160_2-160_0'].vertices.push(
 new THREE.Vector3(0.7,0.8+hME,0.7),
 new THREE.Vector3(0.7-0.1,0.75+hME,0.7),
 new THREE.Vector3(0.7-0.1,0.05+hME,0.7),
 new THREE.Vector3(0.7,0+hME,0.7)
); line['160_2-160_0'] = new THREE.Line(geo['160_2-160_0'], a0);
geo['160_3-160_1'] = new THREE.Geometry();
geo['160_3-160_1'].vertices.push(
 new THREE.Vector3(0.7,1.2+hME,0.7),
 new THREE.Vector3(0.7+0.1,1.15+hME,0.7),
 new THREE.Vector3(0.7+0.1,0.45+hME,0.7),
 new THREE.Vector3(0.7,0.4+hME,0.7)
); line['160_3-160_1'] = new THREE.Line(geo['160_3-160_1'], a0);
geo['160_3-160_0'] = new THREE.Geometry();
geo['160_3-160_0'].vertices.push(
 new THREE.Vector3(0.7,1.2+hME,0.7),
 new THREE.Vector3(0.7,1.2+hME,0.7-0.2),
 new THREE.Vector3(0.7,0+hME,0.7-0.2),
 new THREE.Vector3(0.7,0+hME,0.7)
); line['160_3-160_0'] = new THREE.Line(geo['160_3-160_0'], a0);
geo['157_1-157_0'] = new THREE.Geometry();
geo['157_1-157_0'].vertices.push(
 new THREE.Vector3(3.0,0.4+hME,2.8),
 new THREE.Vector3(3.0-0.1,0.35+hME,2.8),
 new THREE.Vector3(3.0-0.1,0.05+hME,2.8),
 new THREE.Vector3(3.0,0+hME,2.8)
); line['157_1-157_0'] = new THREE.Line(geo['157_1-157_0'], a0);
geo['157_2-157_1'] = new THREE.Geometry();
geo['157_2-157_1'].vertices.push(
 new THREE.Vector3(3.0,0.8+hME,2.8),
 new THREE.Vector3(3.0-0.1,0.75+hME,2.8),
 new THREE.Vector3(3.0-0.1,0.45+hME,2.8),
 new THREE.Vector3(3.0,0.4+hME,2.8)
); line['157_2-157_1'] = new THREE.Line(geo['157_2-157_1'], a0);
geo['157_3-157_2'] = new THREE.Geometry();
geo['157_3-157_2'].vertices.push(
 new THREE.Vector3(3.0,1.2+hME,2.8),
 new THREE.Vector3(3.0-0.1,1.15+hME,2.8),
 new THREE.Vector3(3.0-0.1,0.85+hME,2.8),
 new THREE.Vector3(3.0,0.8+hME,2.8)
); line['157_3-157_2'] = new THREE.Line(geo['157_3-157_2'], a0);
geo['157_2-157_0'] = new THREE.Geometry();
geo['157_2-157_0'].vertices.push(
 new THREE.Vector3(3.0,0.8+hME,2.8),
 new THREE.Vector3(3.0,0.75+hME,2.8-0.1),
 new THREE.Vector3(3.0,0.05+hME,2.8-0.1),
 new THREE.Vector3(3.0,0+hME,2.8)
); line['157_2-157_0'] = new THREE.Line(geo['157_2-157_0'], a0);
geo['157_3-157_1'] = new THREE.Geometry();
geo['157_3-157_1'].vertices.push(
 new THREE.Vector3(3.0,1.2+hME,2.8),
 new THREE.Vector3(3.0,1.15+hME,2.8+0.1),
 new THREE.Vector3(3.0,0.45+hME,2.8+0.1),
 new THREE.Vector3(3.0,0.4+hME,2.8)
); line['157_3-157_1'] = new THREE.Line(geo['157_3-157_1'], a0);
geo['157_3-157_0'] = new THREE.Geometry();
geo['157_3-157_0'].vertices.push(
 new THREE.Vector3(3.0,1.2+hME,2.8),
 new THREE.Vector3(3.0-0.2,1.2+hME,2.8),
 new THREE.Vector3(3.0-0.2,0+hME,2.8),
 new THREE.Vector3(3.0,0+hME,2.8)
); line['157_3-157_0'] = new THREE.Line(geo['157_3-157_0'], a0);
geo['159_1-159_0'] = new THREE.Geometry();
geo['159_1-159_0'].vertices.push(
 new THREE.Vector3(1.7,0.4+hME,2.8),
 new THREE.Vector3(1.7-0.1,0.35+hME,2.8),
 new THREE.Vector3(1.7-0.1,0.05+hME,2.8),
 new THREE.Vector3(1.7,0+hME,2.8)
); line['159_1-159_0'] = new THREE.Line(geo['159_1-159_0'], a0);
geo['159_2-159_1'] = new THREE.Geometry();
geo['159_2-159_1'].vertices.push(
 new THREE.Vector3(1.7,0.8+hME,2.8),
 new THREE.Vector3(1.7-0.1,0.75+hME,2.8),
 new THREE.Vector3(1.7-0.1,0.45+hME,2.8),
 new THREE.Vector3(1.7,0.4+hME,2.8)
); line['159_2-159_1'] = new THREE.Line(geo['159_2-159_1'], a0);
geo['159_3-159_2'] = new THREE.Geometry();
geo['159_3-159_2'].vertices.push(
 new THREE.Vector3(1.7,1.2+hME,2.8),
 new THREE.Vector3(1.7-0.1,1.15+hME,2.8),
 new THREE.Vector3(1.7-0.1,0.85+hME,2.8),
 new THREE.Vector3(1.7,0.8+hME,2.8)
); line['159_3-159_2'] = new THREE.Line(geo['159_3-159_2'], a0);
geo['159_2-159_0'] = new THREE.Geometry();
geo['159_2-159_0'].vertices.push(
 new THREE.Vector3(1.7,0.8+hME,2.8),
 new THREE.Vector3(1.7,0.75+hME,2.8-0.1),
 new THREE.Vector3(1.7,0.05+hME,2.8-0.1),
 new THREE.Vector3(1.7,0+hME,2.8)
); line['159_2-159_0'] = new THREE.Line(geo['159_2-159_0'], a0);
geo['159_3-159_1'] = new THREE.Geometry();
geo['159_3-159_1'].vertices.push(
 new THREE.Vector3(1.7,1.2+hME,2.8),
 new THREE.Vector3(1.7,1.15+hME,2.8+0.1),
 new THREE.Vector3(1.7,0.45+hME,2.8+0.1),
 new THREE.Vector3(1.7,0.4+hME,2.8)
); line['159_3-159_1'] = new THREE.Line(geo['159_3-159_1'], a0);
geo['159_3-159_0'] = new THREE.Geometry();
geo['159_3-159_0'].vertices.push(
 new THREE.Vector3(1.7,1.2+hME,2.8),
 new THREE.Vector3(1.7-0.2,1.2+hME,2.8),
 new THREE.Vector3(1.7-0.2,0+hME,2.8),
 new THREE.Vector3(1.7,0+hME,2.8)
); line['159_3-159_0'] = new THREE.Line(geo['159_3-159_0'], a0);
geo['161_1-161_0'] = new THREE.Geometry();
geo['161_1-161_0'].vertices.push(
 new THREE.Vector3(0.4,0.4+hME,2.8),
 new THREE.Vector3(0.4-0.1,0.35+hME,2.8),
 new THREE.Vector3(0.4-0.1,0.05+hME,2.8),
 new THREE.Vector3(0.4,0+hME,2.8)
); line['161_1-161_0'] = new THREE.Line(geo['161_1-161_0'], a0);
geo['161_2-161_1'] = new THREE.Geometry();
geo['161_2-161_1'].vertices.push(
 new THREE.Vector3(0.4,0.8+hME,2.8),
 new THREE.Vector3(0.4-0.1,0.75+hME,2.8),
 new THREE.Vector3(0.4-0.1,0.45+hME,2.8),
 new THREE.Vector3(0.4,0.4+hME,2.8)
); line['161_2-161_1'] = new THREE.Line(geo['161_2-161_1'], a0);
geo['161_3-161_2'] = new THREE.Geometry();
geo['161_3-161_2'].vertices.push(
 new THREE.Vector3(0.4,1.2+hME,2.8),
 new THREE.Vector3(0.4-0.1,1.15+hME,2.8),
 new THREE.Vector3(0.4-0.1,0.85+hME,2.8),
 new THREE.Vector3(0.4,0.8+hME,2.8)
); line['161_3-161_2'] = new THREE.Line(geo['161_3-161_2'], a0);
geo['161_2-161_0'] = new THREE.Geometry();
geo['161_2-161_0'].vertices.push(
 new THREE.Vector3(0.4,0.8+hME,2.8),
 new THREE.Vector3(0.4,0.75+hME,2.8-0.1),
 new THREE.Vector3(0.4,0.05+hME,2.8-0.1),
 new THREE.Vector3(0.4,0+hME,2.8)
); line['161_2-161_0'] = new THREE.Line(geo['161_2-161_0'], a0);
geo['161_3-161_1'] = new THREE.Geometry();
geo['161_3-161_1'].vertices.push(
 new THREE.Vector3(0.4,1.2+hME,2.8),
 new THREE.Vector3(0.4,1.15+hME,2.8+0.1),
 new THREE.Vector3(0.4,0.45+hME,2.8+0.1),
 new THREE.Vector3(0.4,0.4+hME,2.8)
); line['161_3-161_1'] = new THREE.Line(geo['161_3-161_1'], a0);
geo['161_3-161_0'] = new THREE.Geometry();
geo['161_3-161_0'].vertices.push(
 new THREE.Vector3(0.4,1.2+hME,2.8),
 new THREE.Vector3(0.4-0.2,1.2+hME,2.8),
 new THREE.Vector3(0.4-0.2,0+hME,2.8),
 new THREE.Vector3(0.4,0+hME,2.8)
); line['161_3-161_0'] = new THREE.Line(geo['161_3-161_0'], a0);
geo['163_1-163_0'] = new THREE.Geometry();
geo['163_1-163_0'].vertices.push(
 new THREE.Vector3(-0.9,0.4+hME,2.8),
 new THREE.Vector3(-0.9-0.1,0.35+hME,2.8),
 new THREE.Vector3(-0.9-0.1,0.05+hME,2.8),
 new THREE.Vector3(-0.9,0+hME,2.8)
); line['163_1-163_0'] = new THREE.Line(geo['163_1-163_0'], a0);
geo['163_2-163_1'] = new THREE.Geometry();
geo['163_2-163_1'].vertices.push(
 new THREE.Vector3(-0.9,0.8+hME,2.8),
 new THREE.Vector3(-0.9-0.1,0.75+hME,2.8),
 new THREE.Vector3(-0.9-0.1,0.45+hME,2.8),
 new THREE.Vector3(-0.9,0.4+hME,2.8)
); line['163_2-163_1'] = new THREE.Line(geo['163_2-163_1'], a0);
geo['163_3-163_2'] = new THREE.Geometry();
geo['163_3-163_2'].vertices.push(
 new THREE.Vector3(-0.9,1.2+hME,2.8),
 new THREE.Vector3(-0.9-0.1,1.15+hME,2.8),
 new THREE.Vector3(-0.9-0.1,0.85+hME,2.8),
 new THREE.Vector3(-0.9,0.8+hME,2.8)
); line['163_3-163_2'] = new THREE.Line(geo['163_3-163_2'], a0);
geo['163_2-163_0'] = new THREE.Geometry();
geo['163_2-163_0'].vertices.push(
 new THREE.Vector3(-0.9,0.8+hME,2.8),
 new THREE.Vector3(-0.9,0.75+hME,2.8-0.1),
 new THREE.Vector3(-0.9,0.05+hME,2.8-0.1),
 new THREE.Vector3(-0.9,0+hME,2.8)
); line['163_2-163_0'] = new THREE.Line(geo['163_2-163_0'], a0);
geo['163_3-163_1'] = new THREE.Geometry();
geo['163_3-163_1'].vertices.push(
 new THREE.Vector3(-0.9,1.2+hME,2.8),
 new THREE.Vector3(-0.9,1.15+hME,2.8+0.1),
 new THREE.Vector3(-0.9,0.45+hME,2.8+0.1),
 new THREE.Vector3(-0.9,0.4+hME,2.8)
); line['163_3-163_1'] = new THREE.Line(geo['163_3-163_1'], a0);
geo['163_3-163_0'] = new THREE.Geometry();
geo['163_3-163_0'].vertices.push(
 new THREE.Vector3(-0.9,1.2+hME,2.8),
 new THREE.Vector3(-0.9-0.2,1.2+hME,2.8),
 new THREE.Vector3(-0.9-0.2,0+hME,2.8),
 new THREE.Vector3(-0.9,0+hME,2.8)
); line['163_3-163_0'] = new THREE.Line(geo['163_3-163_0'], a0);
geo['165_1-165_0'] = new THREE.Geometry();
geo['165_1-165_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hME,2.8),
 new THREE.Vector3(-2.8-0.1,0.35+hME,2.8),
 new THREE.Vector3(-2.8-0.1,0.05+hME,2.8),
 new THREE.Vector3(-2.8,0+hME,2.8)
); line['165_1-165_0'] = new THREE.Line(geo['165_1-165_0'], a0);
geo['165_2-165_1'] = new THREE.Geometry();
geo['165_2-165_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,2.8),
 new THREE.Vector3(-2.8-0.1,0.75+hME,2.8),
 new THREE.Vector3(-2.8-0.1,0.45+hME,2.8),
 new THREE.Vector3(-2.8,0.4+hME,2.8)
); line['165_2-165_1'] = new THREE.Line(geo['165_2-165_1'], a0);
geo['165_3-165_2'] = new THREE.Geometry();
geo['165_3-165_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,2.8),
 new THREE.Vector3(-2.8-0.1,1.15+hME,2.8),
 new THREE.Vector3(-2.8-0.1,0.85+hME,2.8),
 new THREE.Vector3(-2.8,0.8+hME,2.8)
); line['165_3-165_2'] = new THREE.Line(geo['165_3-165_2'], a0);
geo['165_2-165_0'] = new THREE.Geometry();
geo['165_2-165_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,2.8),
 new THREE.Vector3(-2.8,0.75+hME,2.8-0.1),
 new THREE.Vector3(-2.8,0.05+hME,2.8-0.1),
 new THREE.Vector3(-2.8,0+hME,2.8)
); line['165_2-165_0'] = new THREE.Line(geo['165_2-165_0'], a0);
geo['165_3-165_1'] = new THREE.Geometry();
geo['165_3-165_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,2.8),
 new THREE.Vector3(-2.8,1.15+hME,2.8+0.1),
 new THREE.Vector3(-2.8,0.45+hME,2.8+0.1),
 new THREE.Vector3(-2.8,0.4+hME,2.8)
); line['165_3-165_1'] = new THREE.Line(geo['165_3-165_1'], a0);
geo['165_3-165_0'] = new THREE.Geometry();
geo['165_3-165_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,2.8),
 new THREE.Vector3(-2.8-0.2,1.2+hME,2.8),
 new THREE.Vector3(-2.8-0.2,0+hME,2.8),
 new THREE.Vector3(-2.8,0+hME,2.8)
); line['165_3-165_0'] = new THREE.Line(geo['165_3-165_0'], a0);
geo['171_1-171_0'] = new THREE.Geometry();
geo['171_1-171_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hME,0.9),
 new THREE.Vector3(-2.8-0.1,0.35+hME,0.9),
 new THREE.Vector3(-2.8-0.1,0.05+hME,0.9),
 new THREE.Vector3(-2.8,0+hME,0.9)
); line['171_1-171_0'] = new THREE.Line(geo['171_1-171_0'], a0);
geo['171_2-171_1'] = new THREE.Geometry();
geo['171_2-171_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,0.9),
 new THREE.Vector3(-2.8-0.1,0.75+hME,0.9),
 new THREE.Vector3(-2.8-0.1,0.45+hME,0.9),
 new THREE.Vector3(-2.8,0.4+hME,0.9)
); line['171_2-171_1'] = new THREE.Line(geo['171_2-171_1'], a0);
geo['171_3-171_2'] = new THREE.Geometry();
geo['171_3-171_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,0.9),
 new THREE.Vector3(-2.8-0.1,1.15+hME,0.9),
 new THREE.Vector3(-2.8-0.1,0.85+hME,0.9),
 new THREE.Vector3(-2.8,0.8+hME,0.9)
); line['171_3-171_2'] = new THREE.Line(geo['171_3-171_2'], a0);
geo['171_2-171_0'] = new THREE.Geometry();
geo['171_2-171_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,0.9),
 new THREE.Vector3(-2.8,0.75+hME,0.9-0.1),
 new THREE.Vector3(-2.8,0.05+hME,0.9-0.1),
 new THREE.Vector3(-2.8,0+hME,0.9)
); line['171_2-171_0'] = new THREE.Line(geo['171_2-171_0'], a0);
geo['171_3-171_1'] = new THREE.Geometry();
geo['171_3-171_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,0.9),
 new THREE.Vector3(-2.8,1.15+hME,0.9+0.1),
 new THREE.Vector3(-2.8,0.45+hME,0.9+0.1),
 new THREE.Vector3(-2.8,0.4+hME,0.9)
); line['171_3-171_1'] = new THREE.Line(geo['171_3-171_1'], a0);
geo['171_3-171_0'] = new THREE.Geometry();
geo['171_3-171_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,0.9),
 new THREE.Vector3(-2.8-0.2,1.2+hME,0.9),
 new THREE.Vector3(-2.8-0.2,0+hME,0.9),
 new THREE.Vector3(-2.8,0+hME,0.9)
); line['171_3-171_0'] = new THREE.Line(geo['171_3-171_0'], a0);
geo['173_1-173_0'] = new THREE.Geometry();
geo['173_1-173_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hME,0.2),
 new THREE.Vector3(-2.8-0.1,0.35+hME,0.2),
 new THREE.Vector3(-2.8-0.1,0.05+hME,0.2),
 new THREE.Vector3(-2.8,0+hME,0.2)
); line['173_1-173_0'] = new THREE.Line(geo['173_1-173_0'], a0);
geo['173_2-173_1'] = new THREE.Geometry();
geo['173_2-173_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,0.2),
 new THREE.Vector3(-2.8-0.1,0.75+hME,0.2),
 new THREE.Vector3(-2.8-0.1,0.45+hME,0.2),
 new THREE.Vector3(-2.8,0.4+hME,0.2)
); line['173_2-173_1'] = new THREE.Line(geo['173_2-173_1'], a0);
geo['173_3-173_2'] = new THREE.Geometry();
geo['173_3-173_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,0.2),
 new THREE.Vector3(-2.8-0.1,1.15+hME,0.2),
 new THREE.Vector3(-2.8-0.1,0.85+hME,0.2),
 new THREE.Vector3(-2.8,0.8+hME,0.2)
); line['173_3-173_2'] = new THREE.Line(geo['173_3-173_2'], a0);
geo['173_2-173_0'] = new THREE.Geometry();
geo['173_2-173_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,0.2),
 new THREE.Vector3(-2.8,0.75+hME,0.2-0.1),
 new THREE.Vector3(-2.8,0.05+hME,0.2-0.1),
 new THREE.Vector3(-2.8,0+hME,0.2)
); line['173_2-173_0'] = new THREE.Line(geo['173_2-173_0'], a0);
geo['173_3-173_1'] = new THREE.Geometry();
geo['173_3-173_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,0.2),
 new THREE.Vector3(-2.8,1.15+hME,0.2+0.1),
 new THREE.Vector3(-2.8,0.45+hME,0.2+0.1),
 new THREE.Vector3(-2.8,0.4+hME,0.2)
); line['173_3-173_1'] = new THREE.Line(geo['173_3-173_1'], a0);
geo['173_3-173_0'] = new THREE.Geometry();
geo['173_3-173_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,0.2),
 new THREE.Vector3(-2.8-0.2,1.2+hME,0.2),
 new THREE.Vector3(-2.8-0.2,0+hME,0.2),
 new THREE.Vector3(-2.8,0+hME,0.2)
); line['173_3-173_0'] = new THREE.Line(geo['173_3-173_0'], a0);
geo['175_1-175_0'] = new THREE.Geometry();
geo['175_1-175_0'].vertices.push(
 new THREE.Vector3(-2.8,0.4+hME,-0.5),
 new THREE.Vector3(-2.8-0.1,0.35+hME,-0.5),
 new THREE.Vector3(-2.8-0.1,0.05+hME,-0.5),
 new THREE.Vector3(-2.8,0+hME,-0.5)
); line['175_1-175_0'] = new THREE.Line(geo['175_1-175_0'], a0);
geo['175_2-175_1'] = new THREE.Geometry();
geo['175_2-175_1'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,-0.5),
 new THREE.Vector3(-2.8-0.1,0.75+hME,-0.5),
 new THREE.Vector3(-2.8-0.1,0.45+hME,-0.5),
 new THREE.Vector3(-2.8,0.4+hME,-0.5)
); line['175_2-175_1'] = new THREE.Line(geo['175_2-175_1'], a0);
geo['175_3-175_2'] = new THREE.Geometry();
geo['175_3-175_2'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-0.5),
 new THREE.Vector3(-2.8-0.1,1.15+hME,-0.5),
 new THREE.Vector3(-2.8-0.1,0.85+hME,-0.5),
 new THREE.Vector3(-2.8,0.8+hME,-0.5)
); line['175_3-175_2'] = new THREE.Line(geo['175_3-175_2'], a0);
geo['175_2-175_0'] = new THREE.Geometry();
geo['175_2-175_0'].vertices.push(
 new THREE.Vector3(-2.8,0.8+hME,-0.5),
 new THREE.Vector3(-2.8,0.75+hME,-0.5-0.1),
 new THREE.Vector3(-2.8,0.05+hME,-0.5-0.1),
 new THREE.Vector3(-2.8,0+hME,-0.5)
); line['175_2-175_0'] = new THREE.Line(geo['175_2-175_0'], a0);
geo['175_3-175_1'] = new THREE.Geometry();
geo['175_3-175_1'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-0.5),
 new THREE.Vector3(-2.8,1.15+hME,-0.5+0.1),
 new THREE.Vector3(-2.8,0.45+hME,-0.5+0.1),
 new THREE.Vector3(-2.8,0.4+hME,-0.5)
); line['175_3-175_1'] = new THREE.Line(geo['175_3-175_1'], a0);
geo['175_3-175_0'] = new THREE.Geometry();
geo['175_3-175_0'].vertices.push(
 new THREE.Vector3(-2.8,1.2+hME,-0.5),
 new THREE.Vector3(-2.8-0.2,1.2+hME,-0.5),
 new THREE.Vector3(-2.8-0.2,0+hME,-0.5),
 new THREE.Vector3(-2.8,0+hME,-0.5)
); line['175_3-175_0'] = new THREE.Line(geo['175_3-175_0'], a0);
geo['054_0-000_0'] = new THREE.Geometry();
geo['054_0-000_0'].vertices.push(
	new THREE.Vector3(3.4,0+hEG,0.7),
	new THREE.Vector3(3.4,0+hEG,1.65),
	new THREE.Vector3(0.1,0+hEG,1.65),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['054_0-000_0'] = new THREE.Line(geo['054_0-000_0'], a0);
geo['056_0-000_0'] = new THREE.Geometry();
geo['056_0-000_0'].vertices.push(
	new THREE.Vector3(2.3,0+hEG,0.7),
	new THREE.Vector3(2.3,0+hEG,1.6),
	new THREE.Vector3(0.2,0+hEG,1.6),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['056_0-000_0'] = new THREE.Line(geo['056_0-000_0'], a0);
geo['058_0-000_0'] = new THREE.Geometry();
geo['058_0-000_0'].vertices.push(
	new THREE.Vector3(1.4,0+hEG,0.7),
	new THREE.Vector3(1.4,0+hEG,1.55),
	new THREE.Vector3(0.3,0+hEG,1.55),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['058_0-000_0'] = new THREE.Line(geo['058_0-000_0'], a0);
geo['060_0-000_0'] = new THREE.Geometry();
geo['060_0-000_0'].vertices.push(
	new THREE.Vector3(0.55,0+hEG,0.7),
	new THREE.Vector3(0.55,0+hEG,1.5),
	new THREE.Vector3(0.4,0+hEG,1.5),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['060_0-000_0'] = new THREE.Line(geo['060_0-000_0'], a0);
geo['057_0-000_0'] = new THREE.Geometry();
geo['057_0-000_0'].vertices.push(
	new THREE.Vector3(3.3,0+hEG,2.8),
	new THREE.Vector3(3.3,0+hEG,1.7),
	new THREE.Vector3(0.0,0+hEG,1.7),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['057_0-000_0'] = new THREE.Line(geo['057_0-000_0'], a0);
geo['059_0-000_0'] = new THREE.Geometry();
geo['059_0-000_0'].vertices.push(
	new THREE.Vector3(2.0,0+hEG,2.8),
	new THREE.Vector3(2.0,0+hEG,1.75),
	new THREE.Vector3(-0.1,0+hEG,1.75),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['059_0-000_0'] = new THREE.Line(geo['059_0-000_0'], a0);
geo['061_0-000_0'] = new THREE.Geometry();
geo['061_0-000_0'].vertices.push(
	new THREE.Vector3(0.7,0+hEG,2.8),
	new THREE.Vector3(0.7,0+hEG,1.8),
	new THREE.Vector3(-0.2,0+hEG,1.8),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['061_0-000_0'] = new THREE.Line(geo['061_0-000_0'], a0);
geo['063_0-000_0'] = new THREE.Geometry();
geo['063_0-000_0'].vertices.push(
	new THREE.Vector3(-0.6,0+hEG,2.8),
	new THREE.Vector3(-0.6,0+hEG,1.8),
	new THREE.Vector3(-0.3,0+hEG,1.8),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['063_0-000_0'] = new THREE.Line(geo['063_0-000_0'], a0);
geo['065_0-000_0'] = new THREE.Geometry();
geo['065_0-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hEG,2.8),
	new THREE.Vector3(-2.0,0+hEG,2.8),
	new THREE.Vector3(-2.0,0+hEG,1.75),
	new THREE.Vector3(-0.4,0+hEG,1.75),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['065_0-000_0'] = new THREE.Line(geo['065_0-000_0'], a0);
geo['075_0-000_0'] = new THREE.Geometry();
geo['075_0-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hEG,-0.15),
	new THREE.Vector3(-2.0,0+hEG,-0.15),
	new THREE.Vector3(-2.0,0+hEG,1.7),
	new THREE.Vector3(-0.5,0+hEG,1.7),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['075_0-000_0'] = new THREE.Line(geo['075_0-000_0'], a0);
geo['079_0-000_0'] = new THREE.Geometry();
geo['079_0-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hEG,-2.75),
	new THREE.Vector3(-1.95,0+hEG,-2.75),
	new THREE.Vector3(-1.95,0+hEG,1.65),
	new THREE.Vector3(-0.6,0+hEG,1.65),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['079_0-000_0'] = new THREE.Line(geo['079_0-000_0'], a0);
geo['078_0-000_0'] = new THREE.Geometry();
geo['078_0-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hEG,-3.65),
	new THREE.Vector3(-1.9,0+hEG,-3.65),
	new THREE.Vector3(-1.9,0+hEG,1.6),
	new THREE.Vector3(-0.7,0+hEG,1.6),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['078_0-000_0'] = new THREE.Line(geo['078_0-000_0'], a0);
geo['076_0-000_0'] = new THREE.Geometry();
geo['076_0-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hEG,-2.55),
	new THREE.Vector3(-1.85,0+hEG,-2.55),
	new THREE.Vector3(-1.85,0+hEG,1.55),
	new THREE.Vector3(-0.8,0+hEG,1.55),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['076_0-000_0'] = new THREE.Line(geo['076_0-000_0'], a0);
geo['074_0-000_0'] = new THREE.Geometry();
geo['074_0-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hEG,-1.4),
	new THREE.Vector3(-1.8,0+hEG,-1.4),
	new THREE.Vector3(-1.8,0+hEG,1.5),
	new THREE.Vector3(-0.9,0+hEG,1.5),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['074_0-000_0'] = new THREE.Line(geo['074_0-000_0'], a0);
geo['072_0-000_0'] = new THREE.Geometry();
geo['072_0-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hEG,-0.55),
	new THREE.Vector3(-1.75,0+hEG,-0.55),
	new THREE.Vector3(-1.75,0+hEG,1.45),
	new THREE.Vector3(-1.0,0+hEG,1.45),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['072_0-000_0'] = new THREE.Line(geo['072_0-000_0'], a0);
geo['054_1-000_0'] = new THREE.Geometry();
geo['054_1-000_0'].vertices.push(
	new THREE.Vector3(3.4,0.4+hEG,0.7),
	new THREE.Vector3(3.4,0.4+hEG,1.65),
	new THREE.Vector3(0.1,0.4+hEG,1.65),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['054_1-000_0'] = new THREE.Line(geo['054_1-000_0'], a0);
geo['056_1-000_0'] = new THREE.Geometry();
geo['056_1-000_0'].vertices.push(
	new THREE.Vector3(2.3,0.4+hEG,0.7),
	new THREE.Vector3(2.3,0.4+hEG,1.6),
	new THREE.Vector3(0.2,0.4+hEG,1.6),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['056_1-000_0'] = new THREE.Line(geo['056_1-000_0'], a0);
geo['058_1-000_0'] = new THREE.Geometry();
geo['058_1-000_0'].vertices.push(
	new THREE.Vector3(1.4,0.4+hEG,0.7),
	new THREE.Vector3(1.4,0.4+hEG,1.55),
	new THREE.Vector3(0.3,0.4+hEG,1.55),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['058_1-000_0'] = new THREE.Line(geo['058_1-000_0'], a0);
geo['060_1-000_0'] = new THREE.Geometry();
geo['060_1-000_0'].vertices.push(
	new THREE.Vector3(0.55,0.4+hEG,0.7),
	new THREE.Vector3(0.55,0.4+hEG,1.5),
	new THREE.Vector3(0.4,0.4+hEG,1.5),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['060_1-000_0'] = new THREE.Line(geo['060_1-000_0'], a0);
geo['057_1-000_0'] = new THREE.Geometry();
geo['057_1-000_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hEG,2.8),
	new THREE.Vector3(3.3,0.4+hEG,1.7),
	new THREE.Vector3(0.0,0.4+hEG,1.7),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['057_1-000_0'] = new THREE.Line(geo['057_1-000_0'], a0);
geo['059_1-000_0'] = new THREE.Geometry();
geo['059_1-000_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hEG,2.8),
	new THREE.Vector3(2.0,0.4+hEG,1.75),
	new THREE.Vector3(-0.1,0.4+hEG,1.75),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['059_1-000_0'] = new THREE.Line(geo['059_1-000_0'], a0);
geo['061_1-000_0'] = new THREE.Geometry();
geo['061_1-000_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hEG,2.8),
	new THREE.Vector3(0.7,0.4+hEG,1.8),
	new THREE.Vector3(-0.2,0.4+hEG,1.8),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['061_1-000_0'] = new THREE.Line(geo['061_1-000_0'], a0);
geo['063_1-000_0'] = new THREE.Geometry();
geo['063_1-000_0'].vertices.push(
	new THREE.Vector3(-0.6,0.4+hEG,2.8),
	new THREE.Vector3(-0.6,0.4+hEG,1.8),
	new THREE.Vector3(-0.3,0.4+hEG,1.8),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['063_1-000_0'] = new THREE.Line(geo['063_1-000_0'], a0);
geo['065_1-000_0'] = new THREE.Geometry();
geo['065_1-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hEG,2.8),
	new THREE.Vector3(-2.0,0.4+hEG,2.8),
	new THREE.Vector3(-2.0,0.4+hEG,1.75),
	new THREE.Vector3(-0.4,0.4+hEG,1.75),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['065_1-000_0'] = new THREE.Line(geo['065_1-000_0'], a0);
geo['075_1-000_0'] = new THREE.Geometry();
geo['075_1-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hEG,-0.15),
	new THREE.Vector3(-2.0,0.4+hEG,-0.15),
	new THREE.Vector3(-2.0,0.4+hEG,1.7),
	new THREE.Vector3(-0.5,0.4+hEG,1.7),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['075_1-000_0'] = new THREE.Line(geo['075_1-000_0'], a0);
geo['079_1-000_0'] = new THREE.Geometry();
geo['079_1-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hEG,-2.75),
	new THREE.Vector3(-1.95,0.4+hEG,-2.75),
	new THREE.Vector3(-1.95,0.4+hEG,1.65),
	new THREE.Vector3(-0.6,0.4+hEG,1.65),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['079_1-000_0'] = new THREE.Line(geo['079_1-000_0'], a0);
geo['078_1-000_0'] = new THREE.Geometry();
geo['078_1-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-3.65),
	new THREE.Vector3(-1.9,0.4+hEG,-3.65),
	new THREE.Vector3(-1.9,0.4+hEG,1.6),
	new THREE.Vector3(-0.7,0.4+hEG,1.6),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['078_1-000_0'] = new THREE.Line(geo['078_1-000_0'], a0);
geo['076_1-000_0'] = new THREE.Geometry();
geo['076_1-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-2.55),
	new THREE.Vector3(-1.85,0.4+hEG,-2.55),
	new THREE.Vector3(-1.85,0.4+hEG,1.55),
	new THREE.Vector3(-0.8,0.4+hEG,1.55),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['076_1-000_0'] = new THREE.Line(geo['076_1-000_0'], a0);
geo['074_1-000_0'] = new THREE.Geometry();
geo['074_1-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-1.4),
	new THREE.Vector3(-1.8,0.4+hEG,-1.4),
	new THREE.Vector3(-1.8,0.4+hEG,1.5),
	new THREE.Vector3(-0.9,0.4+hEG,1.5),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['074_1-000_0'] = new THREE.Line(geo['074_1-000_0'], a0);
geo['072_1-000_0'] = new THREE.Geometry();
geo['072_1-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-0.55),
	new THREE.Vector3(-1.75,0.4+hEG,-0.55),
	new THREE.Vector3(-1.75,0.4+hEG,1.45),
	new THREE.Vector3(-1.0,0.4+hEG,1.45),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['072_1-000_0'] = new THREE.Line(geo['072_1-000_0'], a0);
geo['054_1-000_1'] = new THREE.Geometry();
geo['054_1-000_1'].vertices.push(
	new THREE.Vector3(3.4,0.4+hEG,0.7),
	new THREE.Vector3(3.4,0.4+hEG,1.65),
	new THREE.Vector3(0.1,0.4+hEG,1.65),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['054_1-000_1'] = new THREE.Line(geo['054_1-000_1'], a0);
geo['056_1-000_1'] = new THREE.Geometry();
geo['056_1-000_1'].vertices.push(
	new THREE.Vector3(2.3,0.4+hEG,0.7),
	new THREE.Vector3(2.3,0.4+hEG,1.6),
	new THREE.Vector3(0.2,0.4+hEG,1.6),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['056_1-000_1'] = new THREE.Line(geo['056_1-000_1'], a0);
geo['058_1-000_1'] = new THREE.Geometry();
geo['058_1-000_1'].vertices.push(
	new THREE.Vector3(1.4,0.4+hEG,0.7),
	new THREE.Vector3(1.4,0.4+hEG,1.55),
	new THREE.Vector3(0.3,0.4+hEG,1.55),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['058_1-000_1'] = new THREE.Line(geo['058_1-000_1'], a0);
geo['060_1-000_1'] = new THREE.Geometry();
geo['060_1-000_1'].vertices.push(
	new THREE.Vector3(0.55,0.4+hEG,0.7),
	new THREE.Vector3(0.55,0.4+hEG,1.5),
	new THREE.Vector3(0.4,0.4+hEG,1.5),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['060_1-000_1'] = new THREE.Line(geo['060_1-000_1'], a0);
geo['057_1-000_1'] = new THREE.Geometry();
geo['057_1-000_1'].vertices.push(
	new THREE.Vector3(3.3,0.4+hEG,2.8),
	new THREE.Vector3(3.3,0.4+hEG,1.7),
	new THREE.Vector3(0.0,0.4+hEG,1.7),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['057_1-000_1'] = new THREE.Line(geo['057_1-000_1'], a0);
geo['059_1-000_1'] = new THREE.Geometry();
geo['059_1-000_1'].vertices.push(
	new THREE.Vector3(2.0,0.4+hEG,2.8),
	new THREE.Vector3(2.0,0.4+hEG,1.75),
	new THREE.Vector3(-0.1,0.4+hEG,1.75),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['059_1-000_1'] = new THREE.Line(geo['059_1-000_1'], a0);
geo['061_1-000_1'] = new THREE.Geometry();
geo['061_1-000_1'].vertices.push(
	new THREE.Vector3(0.7,0.4+hEG,2.8),
	new THREE.Vector3(0.7,0.4+hEG,1.8),
	new THREE.Vector3(-0.2,0.4+hEG,1.8),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['061_1-000_1'] = new THREE.Line(geo['061_1-000_1'], a0);
geo['063_1-000_1'] = new THREE.Geometry();
geo['063_1-000_1'].vertices.push(
	new THREE.Vector3(-0.6,0.4+hEG,2.8),
	new THREE.Vector3(-0.6,0.4+hEG,1.8),
	new THREE.Vector3(-0.3,0.4+hEG,1.8),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['063_1-000_1'] = new THREE.Line(geo['063_1-000_1'], a0);
geo['065_1-000_1'] = new THREE.Geometry();
geo['065_1-000_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hEG,2.8),
	new THREE.Vector3(-2.0,0.4+hEG,2.8),
	new THREE.Vector3(-2.0,0.4+hEG,1.75),
	new THREE.Vector3(-0.4,0.4+hEG,1.75),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['065_1-000_1'] = new THREE.Line(geo['065_1-000_1'], a0);
geo['075_1-000_1'] = new THREE.Geometry();
geo['075_1-000_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hEG,-0.15),
	new THREE.Vector3(-2.0,0.4+hEG,-0.15),
	new THREE.Vector3(-2.0,0.4+hEG,1.7),
	new THREE.Vector3(-0.5,0.4+hEG,1.7),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['075_1-000_1'] = new THREE.Line(geo['075_1-000_1'], a0);
geo['079_1-000_1'] = new THREE.Geometry();
geo['079_1-000_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hEG,-2.75),
	new THREE.Vector3(-1.95,0.4+hEG,-2.75),
	new THREE.Vector3(-1.95,0.4+hEG,1.65),
	new THREE.Vector3(-0.6,0.4+hEG,1.65),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['079_1-000_1'] = new THREE.Line(geo['079_1-000_1'], a0);
geo['078_1-000_1'] = new THREE.Geometry();
geo['078_1-000_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-3.65),
	new THREE.Vector3(-1.9,0.4+hEG,-3.65),
	new THREE.Vector3(-1.9,0.4+hEG,1.6),
	new THREE.Vector3(-0.7,0.4+hEG,1.6),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['078_1-000_1'] = new THREE.Line(geo['078_1-000_1'], a0);
geo['076_1-000_1'] = new THREE.Geometry();
geo['076_1-000_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-2.55),
	new THREE.Vector3(-1.85,0.4+hEG,-2.55),
	new THREE.Vector3(-1.85,0.4+hEG,1.55),
	new THREE.Vector3(-0.8,0.4+hEG,1.55),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['076_1-000_1'] = new THREE.Line(geo['076_1-000_1'], a0);
geo['074_1-000_1'] = new THREE.Geometry();
geo['074_1-000_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-1.4),
	new THREE.Vector3(-1.8,0.4+hEG,-1.4),
	new THREE.Vector3(-1.8,0.4+hEG,1.5),
	new THREE.Vector3(-0.9,0.4+hEG,1.5),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['074_1-000_1'] = new THREE.Line(geo['074_1-000_1'], a0);
geo['072_1-000_1'] = new THREE.Geometry();
geo['072_1-000_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hEG,-0.55),
	new THREE.Vector3(-1.75,0.4+hEG,-0.55),
	new THREE.Vector3(-1.75,0.4+hEG,1.45),
	new THREE.Vector3(-1.0,0.4+hEG,1.45),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['072_1-000_1'] = new THREE.Line(geo['072_1-000_1'], a0);
geo['054_2-000_0'] = new THREE.Geometry();
geo['054_2-000_0'].vertices.push(
	new THREE.Vector3(3.4,0.8+hEG,0.7),
	new THREE.Vector3(3.4,0.8+hEG,1.65),
	new THREE.Vector3(0.1,0.8+hEG,1.65),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['054_2-000_0'] = new THREE.Line(geo['054_2-000_0'], a0);
geo['056_2-000_0'] = new THREE.Geometry();
geo['056_2-000_0'].vertices.push(
	new THREE.Vector3(2.3,0.8+hEG,0.7),
	new THREE.Vector3(2.3,0.8+hEG,1.6),
	new THREE.Vector3(0.2,0.8+hEG,1.6),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['056_2-000_0'] = new THREE.Line(geo['056_2-000_0'], a0);
geo['058_2-000_0'] = new THREE.Geometry();
geo['058_2-000_0'].vertices.push(
	new THREE.Vector3(1.4,0.8+hEG,0.7),
	new THREE.Vector3(1.4,0.8+hEG,1.55),
	new THREE.Vector3(0.3,0.8+hEG,1.55),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['058_2-000_0'] = new THREE.Line(geo['058_2-000_0'], a0);
geo['060_2-000_0'] = new THREE.Geometry();
geo['060_2-000_0'].vertices.push(
	new THREE.Vector3(0.55,0.8+hEG,0.7),
	new THREE.Vector3(0.55,0.8+hEG,1.5),
	new THREE.Vector3(0.4,0.8+hEG,1.5),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['060_2-000_0'] = new THREE.Line(geo['060_2-000_0'], a0);
geo['057_2-000_0'] = new THREE.Geometry();
geo['057_2-000_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hEG,2.8),
	new THREE.Vector3(3.3,0.8+hEG,1.7),
	new THREE.Vector3(0.0,0.8+hEG,1.7),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['057_2-000_0'] = new THREE.Line(geo['057_2-000_0'], a0);
geo['059_2-000_0'] = new THREE.Geometry();
geo['059_2-000_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hEG,2.8),
	new THREE.Vector3(2.0,0.8+hEG,1.75),
	new THREE.Vector3(-0.1,0.8+hEG,1.75),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['059_2-000_0'] = new THREE.Line(geo['059_2-000_0'], a0);
geo['061_2-000_0'] = new THREE.Geometry();
geo['061_2-000_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hEG,2.8),
	new THREE.Vector3(0.7,0.8+hEG,1.8),
	new THREE.Vector3(-0.2,0.8+hEG,1.8),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['061_2-000_0'] = new THREE.Line(geo['061_2-000_0'], a0);
geo['063_2-000_0'] = new THREE.Geometry();
geo['063_2-000_0'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hEG,2.8),
	new THREE.Vector3(-0.6,0.8+hEG,1.8),
	new THREE.Vector3(-0.3,0.8+hEG,1.8),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['063_2-000_0'] = new THREE.Line(geo['063_2-000_0'], a0);
geo['065_2-000_0'] = new THREE.Geometry();
geo['065_2-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,2.8),
	new THREE.Vector3(-2.0,0.8+hEG,2.8),
	new THREE.Vector3(-2.0,0.8+hEG,1.75),
	new THREE.Vector3(-0.4,0.8+hEG,1.75),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['065_2-000_0'] = new THREE.Line(geo['065_2-000_0'], a0);
geo['075_2-000_0'] = new THREE.Geometry();
geo['075_2-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,-0.15),
	new THREE.Vector3(-2.0,0.8+hEG,-0.15),
	new THREE.Vector3(-2.0,0.8+hEG,1.7),
	new THREE.Vector3(-0.5,0.8+hEG,1.7),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['075_2-000_0'] = new THREE.Line(geo['075_2-000_0'], a0);
geo['079_2-000_0'] = new THREE.Geometry();
geo['079_2-000_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,-2.75),
	new THREE.Vector3(-1.95,0.8+hEG,-2.75),
	new THREE.Vector3(-1.95,0.8+hEG,1.65),
	new THREE.Vector3(-0.6,0.8+hEG,1.65),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['079_2-000_0'] = new THREE.Line(geo['079_2-000_0'], a0);
geo['078_2-000_0'] = new THREE.Geometry();
geo['078_2-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-3.65),
	new THREE.Vector3(-1.9,0.8+hEG,-3.65),
	new THREE.Vector3(-1.9,0.8+hEG,1.6),
	new THREE.Vector3(-0.7,0.8+hEG,1.6),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['078_2-000_0'] = new THREE.Line(geo['078_2-000_0'], a0);
geo['076_2-000_0'] = new THREE.Geometry();
geo['076_2-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-2.55),
	new THREE.Vector3(-1.85,0.8+hEG,-2.55),
	new THREE.Vector3(-1.85,0.8+hEG,1.55),
	new THREE.Vector3(-0.8,0.8+hEG,1.55),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['076_2-000_0'] = new THREE.Line(geo['076_2-000_0'], a0);
geo['074_2-000_0'] = new THREE.Geometry();
geo['074_2-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-1.4),
	new THREE.Vector3(-1.8,0.8+hEG,-1.4),
	new THREE.Vector3(-1.8,0.8+hEG,1.5),
	new THREE.Vector3(-0.9,0.8+hEG,1.5),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['074_2-000_0'] = new THREE.Line(geo['074_2-000_0'], a0);
geo['072_2-000_0'] = new THREE.Geometry();
geo['072_2-000_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-0.55),
	new THREE.Vector3(-1.75,0.8+hEG,-0.55),
	new THREE.Vector3(-1.75,0.8+hEG,1.45),
	new THREE.Vector3(-1.0,0.8+hEG,1.45),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['072_2-000_0'] = new THREE.Line(geo['072_2-000_0'], a0);
geo['054_2-000_1'] = new THREE.Geometry();
geo['054_2-000_1'].vertices.push(
	new THREE.Vector3(3.4,0.8+hEG,0.7),
	new THREE.Vector3(3.4,0.8+hEG,1.65),
	new THREE.Vector3(0.1,0.8+hEG,1.65),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['054_2-000_1'] = new THREE.Line(geo['054_2-000_1'], a0);
geo['056_2-000_1'] = new THREE.Geometry();
geo['056_2-000_1'].vertices.push(
	new THREE.Vector3(2.3,0.8+hEG,0.7),
	new THREE.Vector3(2.3,0.8+hEG,1.6),
	new THREE.Vector3(0.2,0.8+hEG,1.6),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['056_2-000_1'] = new THREE.Line(geo['056_2-000_1'], a0);
geo['058_2-000_1'] = new THREE.Geometry();
geo['058_2-000_1'].vertices.push(
	new THREE.Vector3(1.4,0.8+hEG,0.7),
	new THREE.Vector3(1.4,0.8+hEG,1.55),
	new THREE.Vector3(0.3,0.8+hEG,1.55),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['058_2-000_1'] = new THREE.Line(geo['058_2-000_1'], a0);
geo['060_2-000_1'] = new THREE.Geometry();
geo['060_2-000_1'].vertices.push(
	new THREE.Vector3(0.55,0.8+hEG,0.7),
	new THREE.Vector3(0.55,0.8+hEG,1.5),
	new THREE.Vector3(0.4,0.8+hEG,1.5),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['060_2-000_1'] = new THREE.Line(geo['060_2-000_1'], a0);
geo['057_2-000_1'] = new THREE.Geometry();
geo['057_2-000_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hEG,2.8),
	new THREE.Vector3(3.3,0.8+hEG,1.7),
	new THREE.Vector3(0.0,0.8+hEG,1.7),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['057_2-000_1'] = new THREE.Line(geo['057_2-000_1'], a0);
geo['059_2-000_1'] = new THREE.Geometry();
geo['059_2-000_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hEG,2.8),
	new THREE.Vector3(2.0,0.8+hEG,1.75),
	new THREE.Vector3(-0.1,0.8+hEG,1.75),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['059_2-000_1'] = new THREE.Line(geo['059_2-000_1'], a0);
geo['061_2-000_1'] = new THREE.Geometry();
geo['061_2-000_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hEG,2.8),
	new THREE.Vector3(0.7,0.8+hEG,1.8),
	new THREE.Vector3(-0.2,0.8+hEG,1.8),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['061_2-000_1'] = new THREE.Line(geo['061_2-000_1'], a0);
geo['063_2-000_1'] = new THREE.Geometry();
geo['063_2-000_1'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hEG,2.8),
	new THREE.Vector3(-0.6,0.8+hEG,1.8),
	new THREE.Vector3(-0.3,0.8+hEG,1.8),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['063_2-000_1'] = new THREE.Line(geo['063_2-000_1'], a0);
geo['065_2-000_1'] = new THREE.Geometry();
geo['065_2-000_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,2.8),
	new THREE.Vector3(-2.0,0.8+hEG,2.8),
	new THREE.Vector3(-2.0,0.8+hEG,1.75),
	new THREE.Vector3(-0.4,0.8+hEG,1.75),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['065_2-000_1'] = new THREE.Line(geo['065_2-000_1'], a0);
geo['075_2-000_1'] = new THREE.Geometry();
geo['075_2-000_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,-0.15),
	new THREE.Vector3(-2.0,0.8+hEG,-0.15),
	new THREE.Vector3(-2.0,0.8+hEG,1.7),
	new THREE.Vector3(-0.5,0.8+hEG,1.7),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['075_2-000_1'] = new THREE.Line(geo['075_2-000_1'], a0);
geo['079_2-000_1'] = new THREE.Geometry();
geo['079_2-000_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,-2.75),
	new THREE.Vector3(-1.95,0.8+hEG,-2.75),
	new THREE.Vector3(-1.95,0.8+hEG,1.65),
	new THREE.Vector3(-0.6,0.8+hEG,1.65),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['079_2-000_1'] = new THREE.Line(geo['079_2-000_1'], a0);
geo['078_2-000_1'] = new THREE.Geometry();
geo['078_2-000_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-3.65),
	new THREE.Vector3(-1.9,0.8+hEG,-3.65),
	new THREE.Vector3(-1.9,0.8+hEG,1.6),
	new THREE.Vector3(-0.7,0.8+hEG,1.6),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['078_2-000_1'] = new THREE.Line(geo['078_2-000_1'], a0);
geo['076_2-000_1'] = new THREE.Geometry();
geo['076_2-000_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-2.55),
	new THREE.Vector3(-1.85,0.8+hEG,-2.55),
	new THREE.Vector3(-1.85,0.8+hEG,1.55),
	new THREE.Vector3(-0.8,0.8+hEG,1.55),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['076_2-000_1'] = new THREE.Line(geo['076_2-000_1'], a0);
geo['074_2-000_1'] = new THREE.Geometry();
geo['074_2-000_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-1.4),
	new THREE.Vector3(-1.8,0.8+hEG,-1.4),
	new THREE.Vector3(-1.8,0.8+hEG,1.5),
	new THREE.Vector3(-0.9,0.8+hEG,1.5),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['074_2-000_1'] = new THREE.Line(geo['074_2-000_1'], a0);
geo['072_2-000_1'] = new THREE.Geometry();
geo['072_2-000_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-0.55),
	new THREE.Vector3(-1.75,0.8+hEG,-0.55),
	new THREE.Vector3(-1.75,0.8+hEG,1.45),
	new THREE.Vector3(-1.0,0.8+hEG,1.45),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['072_2-000_1'] = new THREE.Line(geo['072_2-000_1'], a0);
geo['054_2-000_2'] = new THREE.Geometry();
geo['054_2-000_2'].vertices.push(
	new THREE.Vector3(3.4,0.8+hEG,0.7),
	new THREE.Vector3(3.4,0.8+hEG,1.65),
	new THREE.Vector3(0.1,0.8+hEG,1.65),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['054_2-000_2'] = new THREE.Line(geo['054_2-000_2'], a0);
geo['056_2-000_2'] = new THREE.Geometry();
geo['056_2-000_2'].vertices.push(
	new THREE.Vector3(2.3,0.8+hEG,0.7),
	new THREE.Vector3(2.3,0.8+hEG,1.6),
	new THREE.Vector3(0.2,0.8+hEG,1.6),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['056_2-000_2'] = new THREE.Line(geo['056_2-000_2'], a0);
geo['058_2-000_2'] = new THREE.Geometry();
geo['058_2-000_2'].vertices.push(
	new THREE.Vector3(1.4,0.8+hEG,0.7),
	new THREE.Vector3(1.4,0.8+hEG,1.55),
	new THREE.Vector3(0.3,0.8+hEG,1.55),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['058_2-000_2'] = new THREE.Line(geo['058_2-000_2'], a0);
geo['060_2-000_2'] = new THREE.Geometry();
geo['060_2-000_2'].vertices.push(
	new THREE.Vector3(0.55,0.8+hEG,0.7),
	new THREE.Vector3(0.55,0.8+hEG,1.5),
	new THREE.Vector3(0.4,0.8+hEG,1.5),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['060_2-000_2'] = new THREE.Line(geo['060_2-000_2'], a0);
geo['057_2-000_2'] = new THREE.Geometry();
geo['057_2-000_2'].vertices.push(
	new THREE.Vector3(3.3,0.8+hEG,2.8),
	new THREE.Vector3(3.3,0.8+hEG,1.7),
	new THREE.Vector3(0.0,0.8+hEG,1.7),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['057_2-000_2'] = new THREE.Line(geo['057_2-000_2'], a0);
geo['059_2-000_2'] = new THREE.Geometry();
geo['059_2-000_2'].vertices.push(
	new THREE.Vector3(2.0,0.8+hEG,2.8),
	new THREE.Vector3(2.0,0.8+hEG,1.75),
	new THREE.Vector3(-0.1,0.8+hEG,1.75),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['059_2-000_2'] = new THREE.Line(geo['059_2-000_2'], a0);
geo['061_2-000_2'] = new THREE.Geometry();
geo['061_2-000_2'].vertices.push(
	new THREE.Vector3(0.7,0.8+hEG,2.8),
	new THREE.Vector3(0.7,0.8+hEG,1.8),
	new THREE.Vector3(-0.2,0.8+hEG,1.8),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['061_2-000_2'] = new THREE.Line(geo['061_2-000_2'], a0);
geo['063_2-000_2'] = new THREE.Geometry();
geo['063_2-000_2'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hEG,2.8),
	new THREE.Vector3(-0.6,0.8+hEG,1.8),
	new THREE.Vector3(-0.3,0.8+hEG,1.8),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['063_2-000_2'] = new THREE.Line(geo['063_2-000_2'], a0);
geo['065_2-000_2'] = new THREE.Geometry();
geo['065_2-000_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,2.8),
	new THREE.Vector3(-2.0,0.8+hEG,2.8),
	new THREE.Vector3(-2.0,0.8+hEG,1.75),
	new THREE.Vector3(-0.4,0.8+hEG,1.75),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['065_2-000_2'] = new THREE.Line(geo['065_2-000_2'], a0);
geo['075_2-000_2'] = new THREE.Geometry();
geo['075_2-000_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,-0.15),
	new THREE.Vector3(-2.0,0.8+hEG,-0.15),
	new THREE.Vector3(-2.0,0.8+hEG,1.7),
	new THREE.Vector3(-0.5,0.8+hEG,1.7),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['075_2-000_2'] = new THREE.Line(geo['075_2-000_2'], a0);
geo['079_2-000_2'] = new THREE.Geometry();
geo['079_2-000_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hEG,-2.75),
	new THREE.Vector3(-1.95,0.8+hEG,-2.75),
	new THREE.Vector3(-1.95,0.8+hEG,1.65),
	new THREE.Vector3(-0.6,0.8+hEG,1.65),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['079_2-000_2'] = new THREE.Line(geo['079_2-000_2'], a0);
geo['078_2-000_2'] = new THREE.Geometry();
geo['078_2-000_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-3.65),
	new THREE.Vector3(-1.9,0.8+hEG,-3.65),
	new THREE.Vector3(-1.9,0.8+hEG,1.6),
	new THREE.Vector3(-0.7,0.8+hEG,1.6),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['078_2-000_2'] = new THREE.Line(geo['078_2-000_2'], a0);
geo['076_2-000_2'] = new THREE.Geometry();
geo['076_2-000_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-2.55),
	new THREE.Vector3(-1.85,0.8+hEG,-2.55),
	new THREE.Vector3(-1.85,0.8+hEG,1.55),
	new THREE.Vector3(-0.8,0.8+hEG,1.55),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['076_2-000_2'] = new THREE.Line(geo['076_2-000_2'], a0);
geo['074_2-000_2'] = new THREE.Geometry();
geo['074_2-000_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-1.4),
	new THREE.Vector3(-1.8,0.8+hEG,-1.4),
	new THREE.Vector3(-1.8,0.8+hEG,1.5),
	new THREE.Vector3(-0.9,0.8+hEG,1.5),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['074_2-000_2'] = new THREE.Line(geo['074_2-000_2'], a0);
geo['072_2-000_2'] = new THREE.Geometry();
geo['072_2-000_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hEG,-0.55),
	new THREE.Vector3(-1.75,0.8+hEG,-0.55),
	new THREE.Vector3(-1.75,0.8+hEG,1.45),
	new THREE.Vector3(-1.0,0.8+hEG,1.45),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['072_2-000_2'] = new THREE.Line(geo['072_2-000_2'], a0);
geo['054_3-000_0'] = new THREE.Geometry();
geo['054_3-000_0'].vertices.push(
	new THREE.Vector3(3.4,1.2+hEG,0.7),
	new THREE.Vector3(3.4,1.2+hEG,1.65),
	new THREE.Vector3(0.1,1.2+hEG,1.65),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['054_3-000_0'] = new THREE.Line(geo['054_3-000_0'], a0);
geo['056_3-000_0'] = new THREE.Geometry();
geo['056_3-000_0'].vertices.push(
	new THREE.Vector3(2.3,1.2+hEG,0.7),
	new THREE.Vector3(2.3,1.2+hEG,1.6),
	new THREE.Vector3(0.2,1.2+hEG,1.6),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['056_3-000_0'] = new THREE.Line(geo['056_3-000_0'], a0);
geo['058_3-000_0'] = new THREE.Geometry();
geo['058_3-000_0'].vertices.push(
	new THREE.Vector3(1.4,1.2+hEG,0.7),
	new THREE.Vector3(1.4,1.2+hEG,1.55),
	new THREE.Vector3(0.3,1.2+hEG,1.55),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['058_3-000_0'] = new THREE.Line(geo['058_3-000_0'], a0);
geo['060_3-000_0'] = new THREE.Geometry();
geo['060_3-000_0'].vertices.push(
	new THREE.Vector3(0.55,1.2+hEG,0.7),
	new THREE.Vector3(0.55,1.2+hEG,1.5),
	new THREE.Vector3(0.4,1.2+hEG,1.5),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['060_3-000_0'] = new THREE.Line(geo['060_3-000_0'], a0);
geo['057_3-000_0'] = new THREE.Geometry();
geo['057_3-000_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hEG,2.8),
	new THREE.Vector3(3.3,1.2+hEG,1.7),
	new THREE.Vector3(0.0,1.2+hEG,1.7),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['057_3-000_0'] = new THREE.Line(geo['057_3-000_0'], a0);
geo['059_3-000_0'] = new THREE.Geometry();
geo['059_3-000_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hEG,2.8),
	new THREE.Vector3(2.0,1.2+hEG,1.75),
	new THREE.Vector3(-0.1,1.2+hEG,1.75),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['059_3-000_0'] = new THREE.Line(geo['059_3-000_0'], a0);
geo['061_3-000_0'] = new THREE.Geometry();
geo['061_3-000_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hEG,2.8),
	new THREE.Vector3(0.7,1.2+hEG,1.8),
	new THREE.Vector3(-0.2,1.2+hEG,1.8),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['061_3-000_0'] = new THREE.Line(geo['061_3-000_0'], a0);
geo['063_3-000_0'] = new THREE.Geometry();
geo['063_3-000_0'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hEG,2.8),
	new THREE.Vector3(-0.6,1.2+hEG,1.8),
	new THREE.Vector3(-0.3,1.2+hEG,1.8),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['063_3-000_0'] = new THREE.Line(geo['063_3-000_0'], a0);
geo['065_3-000_0'] = new THREE.Geometry();
geo['065_3-000_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,2.8),
	new THREE.Vector3(-2.0,1.2+hEG,2.8),
	new THREE.Vector3(-2.0,1.2+hEG,1.75),
	new THREE.Vector3(-0.4,1.2+hEG,1.75),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['065_3-000_0'] = new THREE.Line(geo['065_3-000_0'], a0);
geo['075_3-000_0'] = new THREE.Geometry();
geo['075_3-000_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,-0.15),
	new THREE.Vector3(-2.0,1.2+hEG,-0.15),
	new THREE.Vector3(-2.0,1.2+hEG,1.7),
	new THREE.Vector3(-0.5,1.2+hEG,1.7),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['075_3-000_0'] = new THREE.Line(geo['075_3-000_0'], a0);
geo['079_3-000_0'] = new THREE.Geometry();
geo['079_3-000_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,-2.75),
	new THREE.Vector3(-1.95,1.2+hEG,-2.75),
	new THREE.Vector3(-1.95,1.2+hEG,1.65),
	new THREE.Vector3(-0.6,1.2+hEG,1.65),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['079_3-000_0'] = new THREE.Line(geo['079_3-000_0'], a0);
geo['078_3-000_0'] = new THREE.Geometry();
geo['078_3-000_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-3.65),
	new THREE.Vector3(-1.9,1.2+hEG,-3.65),
	new THREE.Vector3(-1.9,1.2+hEG,1.6),
	new THREE.Vector3(-0.7,1.2+hEG,1.6),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['078_3-000_0'] = new THREE.Line(geo['078_3-000_0'], a0);
geo['076_3-000_0'] = new THREE.Geometry();
geo['076_3-000_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-2.55),
	new THREE.Vector3(-1.85,1.2+hEG,-2.55),
	new THREE.Vector3(-1.85,1.2+hEG,1.55),
	new THREE.Vector3(-0.8,1.2+hEG,1.55),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['076_3-000_0'] = new THREE.Line(geo['076_3-000_0'], a0);
geo['074_3-000_0'] = new THREE.Geometry();
geo['074_3-000_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-1.4),
	new THREE.Vector3(-1.8,1.2+hEG,-1.4),
	new THREE.Vector3(-1.8,1.2+hEG,1.5),
	new THREE.Vector3(-0.9,1.2+hEG,1.5),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['074_3-000_0'] = new THREE.Line(geo['074_3-000_0'], a0);
geo['072_3-000_0'] = new THREE.Geometry();
geo['072_3-000_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-0.55),
	new THREE.Vector3(-1.75,1.2+hEG,-0.55),
	new THREE.Vector3(-1.75,1.2+hEG,1.45),
	new THREE.Vector3(-1.0,1.2+hEG,1.45),
	new THREE.Vector3(-0.15,0+hEG,1.15)
); line['072_3-000_0'] = new THREE.Line(geo['072_3-000_0'], a0);
geo['054_3-000_1'] = new THREE.Geometry();
geo['054_3-000_1'].vertices.push(
	new THREE.Vector3(3.4,1.2+hEG,0.7),
	new THREE.Vector3(3.4,1.2+hEG,1.65),
	new THREE.Vector3(0.1,1.2+hEG,1.65),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['054_3-000_1'] = new THREE.Line(geo['054_3-000_1'], a0);
geo['056_3-000_1'] = new THREE.Geometry();
geo['056_3-000_1'].vertices.push(
	new THREE.Vector3(2.3,1.2+hEG,0.7),
	new THREE.Vector3(2.3,1.2+hEG,1.6),
	new THREE.Vector3(0.2,1.2+hEG,1.6),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['056_3-000_1'] = new THREE.Line(geo['056_3-000_1'], a0);
geo['058_3-000_1'] = new THREE.Geometry();
geo['058_3-000_1'].vertices.push(
	new THREE.Vector3(1.4,1.2+hEG,0.7),
	new THREE.Vector3(1.4,1.2+hEG,1.55),
	new THREE.Vector3(0.3,1.2+hEG,1.55),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['058_3-000_1'] = new THREE.Line(geo['058_3-000_1'], a0);
geo['060_3-000_1'] = new THREE.Geometry();
geo['060_3-000_1'].vertices.push(
	new THREE.Vector3(0.55,1.2+hEG,0.7),
	new THREE.Vector3(0.55,1.2+hEG,1.5),
	new THREE.Vector3(0.4,1.2+hEG,1.5),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['060_3-000_1'] = new THREE.Line(geo['060_3-000_1'], a0);
geo['057_3-000_1'] = new THREE.Geometry();
geo['057_3-000_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hEG,2.8),
	new THREE.Vector3(3.3,1.2+hEG,1.7),
	new THREE.Vector3(0.0,1.2+hEG,1.7),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['057_3-000_1'] = new THREE.Line(geo['057_3-000_1'], a0);
geo['059_3-000_1'] = new THREE.Geometry();
geo['059_3-000_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hEG,2.8),
	new THREE.Vector3(2.0,1.2+hEG,1.75),
	new THREE.Vector3(-0.1,1.2+hEG,1.75),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['059_3-000_1'] = new THREE.Line(geo['059_3-000_1'], a0);
geo['061_3-000_1'] = new THREE.Geometry();
geo['061_3-000_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hEG,2.8),
	new THREE.Vector3(0.7,1.2+hEG,1.8),
	new THREE.Vector3(-0.2,1.2+hEG,1.8),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['061_3-000_1'] = new THREE.Line(geo['061_3-000_1'], a0);
geo['063_3-000_1'] = new THREE.Geometry();
geo['063_3-000_1'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hEG,2.8),
	new THREE.Vector3(-0.6,1.2+hEG,1.8),
	new THREE.Vector3(-0.3,1.2+hEG,1.8),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['063_3-000_1'] = new THREE.Line(geo['063_3-000_1'], a0);
geo['065_3-000_1'] = new THREE.Geometry();
geo['065_3-000_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,2.8),
	new THREE.Vector3(-2.0,1.2+hEG,2.8),
	new THREE.Vector3(-2.0,1.2+hEG,1.75),
	new THREE.Vector3(-0.4,1.2+hEG,1.75),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['065_3-000_1'] = new THREE.Line(geo['065_3-000_1'], a0);
geo['075_3-000_1'] = new THREE.Geometry();
geo['075_3-000_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,-0.15),
	new THREE.Vector3(-2.0,1.2+hEG,-0.15),
	new THREE.Vector3(-2.0,1.2+hEG,1.7),
	new THREE.Vector3(-0.5,1.2+hEG,1.7),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['075_3-000_1'] = new THREE.Line(geo['075_3-000_1'], a0);
geo['079_3-000_1'] = new THREE.Geometry();
geo['079_3-000_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,-2.75),
	new THREE.Vector3(-1.95,1.2+hEG,-2.75),
	new THREE.Vector3(-1.95,1.2+hEG,1.65),
	new THREE.Vector3(-0.6,1.2+hEG,1.65),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['079_3-000_1'] = new THREE.Line(geo['079_3-000_1'], a0);
geo['078_3-000_1'] = new THREE.Geometry();
geo['078_3-000_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-3.65),
	new THREE.Vector3(-1.9,1.2+hEG,-3.65),
	new THREE.Vector3(-1.9,1.2+hEG,1.6),
	new THREE.Vector3(-0.7,1.2+hEG,1.6),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['078_3-000_1'] = new THREE.Line(geo['078_3-000_1'], a0);
geo['076_3-000_1'] = new THREE.Geometry();
geo['076_3-000_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-2.55),
	new THREE.Vector3(-1.85,1.2+hEG,-2.55),
	new THREE.Vector3(-1.85,1.2+hEG,1.55),
	new THREE.Vector3(-0.8,1.2+hEG,1.55),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['076_3-000_1'] = new THREE.Line(geo['076_3-000_1'], a0);
geo['074_3-000_1'] = new THREE.Geometry();
geo['074_3-000_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-1.4),
	new THREE.Vector3(-1.8,1.2+hEG,-1.4),
	new THREE.Vector3(-1.8,1.2+hEG,1.5),
	new THREE.Vector3(-0.9,1.2+hEG,1.5),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['074_3-000_1'] = new THREE.Line(geo['074_3-000_1'], a0);
geo['072_3-000_1'] = new THREE.Geometry();
geo['072_3-000_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-0.55),
	new THREE.Vector3(-1.75,1.2+hEG,-0.55),
	new THREE.Vector3(-1.75,1.2+hEG,1.45),
	new THREE.Vector3(-1.0,1.2+hEG,1.45),
	new THREE.Vector3(-0.15,0.4+hEG,1.15)
); line['072_3-000_1'] = new THREE.Line(geo['072_3-000_1'], a0);
geo['054_3-000_2'] = new THREE.Geometry();
geo['054_3-000_2'].vertices.push(
	new THREE.Vector3(3.4,1.2+hEG,0.7),
	new THREE.Vector3(3.4,1.2+hEG,1.65),
	new THREE.Vector3(0.1,1.2+hEG,1.65),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['054_3-000_2'] = new THREE.Line(geo['054_3-000_2'], a0);
geo['056_3-000_2'] = new THREE.Geometry();
geo['056_3-000_2'].vertices.push(
	new THREE.Vector3(2.3,1.2+hEG,0.7),
	new THREE.Vector3(2.3,1.2+hEG,1.6),
	new THREE.Vector3(0.2,1.2+hEG,1.6),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['056_3-000_2'] = new THREE.Line(geo['056_3-000_2'], a0);
geo['058_3-000_2'] = new THREE.Geometry();
geo['058_3-000_2'].vertices.push(
	new THREE.Vector3(1.4,1.2+hEG,0.7),
	new THREE.Vector3(1.4,1.2+hEG,1.55),
	new THREE.Vector3(0.3,1.2+hEG,1.55),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['058_3-000_2'] = new THREE.Line(geo['058_3-000_2'], a0);
geo['060_3-000_2'] = new THREE.Geometry();
geo['060_3-000_2'].vertices.push(
	new THREE.Vector3(0.55,1.2+hEG,0.7),
	new THREE.Vector3(0.55,1.2+hEG,1.5),
	new THREE.Vector3(0.4,1.2+hEG,1.5),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['060_3-000_2'] = new THREE.Line(geo['060_3-000_2'], a0);
geo['057_3-000_2'] = new THREE.Geometry();
geo['057_3-000_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hEG,2.8),
	new THREE.Vector3(3.3,1.2+hEG,1.7),
	new THREE.Vector3(0.0,1.2+hEG,1.7),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['057_3-000_2'] = new THREE.Line(geo['057_3-000_2'], a0);
geo['059_3-000_2'] = new THREE.Geometry();
geo['059_3-000_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hEG,2.8),
	new THREE.Vector3(2.0,1.2+hEG,1.75),
	new THREE.Vector3(-0.1,1.2+hEG,1.75),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['059_3-000_2'] = new THREE.Line(geo['059_3-000_2'], a0);
geo['061_3-000_2'] = new THREE.Geometry();
geo['061_3-000_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hEG,2.8),
	new THREE.Vector3(0.7,1.2+hEG,1.8),
	new THREE.Vector3(-0.2,1.2+hEG,1.8),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['061_3-000_2'] = new THREE.Line(geo['061_3-000_2'], a0);
geo['063_3-000_2'] = new THREE.Geometry();
geo['063_3-000_2'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hEG,2.8),
	new THREE.Vector3(-0.6,1.2+hEG,1.8),
	new THREE.Vector3(-0.3,1.2+hEG,1.8),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['063_3-000_2'] = new THREE.Line(geo['063_3-000_2'], a0);
geo['065_3-000_2'] = new THREE.Geometry();
geo['065_3-000_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,2.8),
	new THREE.Vector3(-2.0,1.2+hEG,2.8),
	new THREE.Vector3(-2.0,1.2+hEG,1.75),
	new THREE.Vector3(-0.4,1.2+hEG,1.75),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['065_3-000_2'] = new THREE.Line(geo['065_3-000_2'], a0);
geo['075_3-000_2'] = new THREE.Geometry();
geo['075_3-000_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,-0.15),
	new THREE.Vector3(-2.0,1.2+hEG,-0.15),
	new THREE.Vector3(-2.0,1.2+hEG,1.7),
	new THREE.Vector3(-0.5,1.2+hEG,1.7),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['075_3-000_2'] = new THREE.Line(geo['075_3-000_2'], a0);
geo['079_3-000_2'] = new THREE.Geometry();
geo['079_3-000_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,-2.75),
	new THREE.Vector3(-1.95,1.2+hEG,-2.75),
	new THREE.Vector3(-1.95,1.2+hEG,1.65),
	new THREE.Vector3(-0.6,1.2+hEG,1.65),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['079_3-000_2'] = new THREE.Line(geo['079_3-000_2'], a0);
geo['078_3-000_2'] = new THREE.Geometry();
geo['078_3-000_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-3.65),
	new THREE.Vector3(-1.9,1.2+hEG,-3.65),
	new THREE.Vector3(-1.9,1.2+hEG,1.6),
	new THREE.Vector3(-0.7,1.2+hEG,1.6),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['078_3-000_2'] = new THREE.Line(geo['078_3-000_2'], a0);
geo['076_3-000_2'] = new THREE.Geometry();
geo['076_3-000_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-2.55),
	new THREE.Vector3(-1.85,1.2+hEG,-2.55),
	new THREE.Vector3(-1.85,1.2+hEG,1.55),
	new THREE.Vector3(-0.8,1.2+hEG,1.55),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['076_3-000_2'] = new THREE.Line(geo['076_3-000_2'], a0);
geo['074_3-000_2'] = new THREE.Geometry();
geo['074_3-000_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-1.4),
	new THREE.Vector3(-1.8,1.2+hEG,-1.4),
	new THREE.Vector3(-1.8,1.2+hEG,1.5),
	new THREE.Vector3(-0.9,1.2+hEG,1.5),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['074_3-000_2'] = new THREE.Line(geo['074_3-000_2'], a0);
geo['072_3-000_2'] = new THREE.Geometry();
geo['072_3-000_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-0.55),
	new THREE.Vector3(-1.75,1.2+hEG,-0.55),
	new THREE.Vector3(-1.75,1.2+hEG,1.45),
	new THREE.Vector3(-1.0,1.2+hEG,1.45),
	new THREE.Vector3(-0.15,0.8+hEG,1.15)
); line['072_3-000_2'] = new THREE.Line(geo['072_3-000_2'], a0);
geo['054_3-000_3'] = new THREE.Geometry();
geo['054_3-000_3'].vertices.push(
	new THREE.Vector3(3.4,1.2+hEG,0.7),
	new THREE.Vector3(3.4,1.2+hEG,1.65),
	new THREE.Vector3(0.1,1.2+hEG,1.65),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['054_3-000_3'] = new THREE.Line(geo['054_3-000_3'], a0);
geo['056_3-000_3'] = new THREE.Geometry();
geo['056_3-000_3'].vertices.push(
	new THREE.Vector3(2.3,1.2+hEG,0.7),
	new THREE.Vector3(2.3,1.2+hEG,1.6),
	new THREE.Vector3(0.2,1.2+hEG,1.6),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['056_3-000_3'] = new THREE.Line(geo['056_3-000_3'], a0);
geo['058_3-000_3'] = new THREE.Geometry();
geo['058_3-000_3'].vertices.push(
	new THREE.Vector3(1.4,1.2+hEG,0.7),
	new THREE.Vector3(1.4,1.2+hEG,1.55),
	new THREE.Vector3(0.3,1.2+hEG,1.55),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['058_3-000_3'] = new THREE.Line(geo['058_3-000_3'], a0);
geo['060_3-000_3'] = new THREE.Geometry();
geo['060_3-000_3'].vertices.push(
	new THREE.Vector3(0.55,1.2+hEG,0.7),
	new THREE.Vector3(0.55,1.2+hEG,1.5),
	new THREE.Vector3(0.4,1.2+hEG,1.5),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['060_3-000_3'] = new THREE.Line(geo['060_3-000_3'], a0);
geo['057_3-000_3'] = new THREE.Geometry();
geo['057_3-000_3'].vertices.push(
	new THREE.Vector3(3.3,1.2+hEG,2.8),
	new THREE.Vector3(3.3,1.2+hEG,1.7),
	new THREE.Vector3(0.0,1.2+hEG,1.7),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['057_3-000_3'] = new THREE.Line(geo['057_3-000_3'], a0);
geo['059_3-000_3'] = new THREE.Geometry();
geo['059_3-000_3'].vertices.push(
	new THREE.Vector3(2.0,1.2+hEG,2.8),
	new THREE.Vector3(2.0,1.2+hEG,1.75),
	new THREE.Vector3(-0.1,1.2+hEG,1.75),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['059_3-000_3'] = new THREE.Line(geo['059_3-000_3'], a0);
geo['061_3-000_3'] = new THREE.Geometry();
geo['061_3-000_3'].vertices.push(
	new THREE.Vector3(0.7,1.2+hEG,2.8),
	new THREE.Vector3(0.7,1.2+hEG,1.8),
	new THREE.Vector3(-0.2,1.2+hEG,1.8),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['061_3-000_3'] = new THREE.Line(geo['061_3-000_3'], a0);
geo['063_3-000_3'] = new THREE.Geometry();
geo['063_3-000_3'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hEG,2.8),
	new THREE.Vector3(-0.6,1.2+hEG,1.8),
	new THREE.Vector3(-0.3,1.2+hEG,1.8),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['063_3-000_3'] = new THREE.Line(geo['063_3-000_3'], a0);
geo['065_3-000_3'] = new THREE.Geometry();
geo['065_3-000_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,2.8),
	new THREE.Vector3(-2.0,1.2+hEG,2.8),
	new THREE.Vector3(-2.0,1.2+hEG,1.75),
	new THREE.Vector3(-0.4,1.2+hEG,1.75),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['065_3-000_3'] = new THREE.Line(geo['065_3-000_3'], a0);
geo['075_3-000_3'] = new THREE.Geometry();
geo['075_3-000_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,-0.15),
	new THREE.Vector3(-2.0,1.2+hEG,-0.15),
	new THREE.Vector3(-2.0,1.2+hEG,1.7),
	new THREE.Vector3(-0.5,1.2+hEG,1.7),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['075_3-000_3'] = new THREE.Line(geo['075_3-000_3'], a0);
geo['079_3-000_3'] = new THREE.Geometry();
geo['079_3-000_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hEG,-2.75),
	new THREE.Vector3(-1.95,1.2+hEG,-2.75),
	new THREE.Vector3(-1.95,1.2+hEG,1.65),
	new THREE.Vector3(-0.6,1.2+hEG,1.65),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['079_3-000_3'] = new THREE.Line(geo['079_3-000_3'], a0);
geo['078_3-000_3'] = new THREE.Geometry();
geo['078_3-000_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-3.65),
	new THREE.Vector3(-1.9,1.2+hEG,-3.65),
	new THREE.Vector3(-1.9,1.2+hEG,1.6),
	new THREE.Vector3(-0.7,1.2+hEG,1.6),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['078_3-000_3'] = new THREE.Line(geo['078_3-000_3'], a0);
geo['076_3-000_3'] = new THREE.Geometry();
geo['076_3-000_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-2.55),
	new THREE.Vector3(-1.85,1.2+hEG,-2.55),
	new THREE.Vector3(-1.85,1.2+hEG,1.55),
	new THREE.Vector3(-0.8,1.2+hEG,1.55),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['076_3-000_3'] = new THREE.Line(geo['076_3-000_3'], a0);
geo['074_3-000_3'] = new THREE.Geometry();
geo['074_3-000_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-1.4),
	new THREE.Vector3(-1.8,1.2+hEG,-1.4),
	new THREE.Vector3(-1.8,1.2+hEG,1.5),
	new THREE.Vector3(-0.9,1.2+hEG,1.5),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['074_3-000_3'] = new THREE.Line(geo['074_3-000_3'], a0);
geo['072_3-000_3'] = new THREE.Geometry();
geo['072_3-000_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hEG,-0.55),
	new THREE.Vector3(-1.75,1.2+hEG,-0.55),
	new THREE.Vector3(-1.75,1.2+hEG,1.45),
	new THREE.Vector3(-1.0,1.2+hEG,1.45),
	new THREE.Vector3(-0.15,1.2+hEG,1.15)
); line['072_3-000_3'] = new THREE.Line(geo['072_3-000_3'], a0);
geo['153_0-100_0'] = new THREE.Geometry();
geo['153_0-100_0'].vertices.push(
	new THREE.Vector3(4.7,0+hME,2.8),
	new THREE.Vector3(4.7,0+hME,1.65),
	new THREE.Vector3(0.1,0+hME,1.65),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['153_0-100_0'] = new THREE.Line(geo['153_0-100_0'], a0);
geo['154_0-100_0'] = new THREE.Geometry();
geo['154_0-100_0'].vertices.push(
	new THREE.Vector3(3.3,0+hME,0.7),
	new THREE.Vector3(3.3,0+hME,1.6),
	new THREE.Vector3(0.2,0+hME,1.6),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['154_0-100_0'] = new THREE.Line(geo['154_0-100_0'], a0);
geo['156_0-100_0'] = new THREE.Geometry();
geo['156_0-100_0'].vertices.push(
	new THREE.Vector3(2.0,0+hME,0.7),
	new THREE.Vector3(2.0,0+hME,1.55),
	new THREE.Vector3(0.3,0+hME,1.55),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['156_0-100_0'] = new THREE.Line(geo['156_0-100_0'], a0);
geo['160_0-100_0'] = new THREE.Geometry();
geo['160_0-100_0'].vertices.push(
	new THREE.Vector3(0.7,0+hME,0.7),
	new THREE.Vector3(0.7,0+hME,1.5),
	new THREE.Vector3(0.4,0+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['160_0-100_0'] = new THREE.Line(geo['160_0-100_0'], a0);
geo['157_0-100_0'] = new THREE.Geometry();
geo['157_0-100_0'].vertices.push(
	new THREE.Vector3(3.0,0+hME,2.8),
	new THREE.Vector3(3.0,0+hME,1.7),
	new THREE.Vector3(0.0,0+hME,1.7),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['157_0-100_0'] = new THREE.Line(geo['157_0-100_0'], a0);
geo['159_0-100_0'] = new THREE.Geometry();
geo['159_0-100_0'].vertices.push(
	new THREE.Vector3(1.7,0+hME,2.8),
	new THREE.Vector3(1.7,0+hME,1.75),
	new THREE.Vector3(-0.1,0+hME,1.75),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['159_0-100_0'] = new THREE.Line(geo['159_0-100_0'], a0);
geo['161_0-100_0'] = new THREE.Geometry();
geo['161_0-100_0'].vertices.push(
	new THREE.Vector3(0.4,0+hME,2.8),
	new THREE.Vector3(0.4,0+hME,1.8),
	new THREE.Vector3(-0.2,0+hME,1.8),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['161_0-100_0'] = new THREE.Line(geo['161_0-100_0'], a0);
geo['163_0-100_0'] = new THREE.Geometry();
geo['163_0-100_0'].vertices.push(
	new THREE.Vector3(-0.9,0+hME,2.8),
	new THREE.Vector3(-0.9,0+hME,1.8),
	new THREE.Vector3(-0.3,0+hME,1.8),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['163_0-100_0'] = new THREE.Line(geo['163_0-100_0'], a0);
geo['165_0-100_0'] = new THREE.Geometry();
geo['165_0-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hME,2.8),
	new THREE.Vector3(-2.0,0+hME,2.8),
	new THREE.Vector3(-2.0,0+hME,1.75),
	new THREE.Vector3(-0.4,0+hME,1.75),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['165_0-100_0'] = new THREE.Line(geo['165_0-100_0'], a0);
geo['171_0-100_0'] = new THREE.Geometry();
geo['171_0-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hME,0.9),
	new THREE.Vector3(-2.0,0+hME,0.9),
	new THREE.Vector3(-2.0,0+hME,1.7),
	new THREE.Vector3(-0.5,0+hME,1.7),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['171_0-100_0'] = new THREE.Line(geo['171_0-100_0'], a0);
geo['173_0-100_0'] = new THREE.Geometry();
geo['173_0-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hME,0.2),
	new THREE.Vector3(-1.95,0+hME,0.2),
	new THREE.Vector3(-1.95,0+hME,1.65),
	new THREE.Vector3(-0.6,0+hME,1.65),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['173_0-100_0'] = new THREE.Line(geo['173_0-100_0'], a0);
geo['175_0-100_0'] = new THREE.Geometry();
geo['175_0-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hME,-0.5),
	new THREE.Vector3(-1.9,0+hME,-0.5),
	new THREE.Vector3(-1.9,0+hME,1.6),
	new THREE.Vector3(-0.7,0+hME,1.6),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['175_0-100_0'] = new THREE.Line(geo['175_0-100_0'], a0);
geo['177_0-100_0'] = new THREE.Geometry();
geo['177_0-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hME,-1.2),
	new THREE.Vector3(-1.85,0+hME,-1.2),
	new THREE.Vector3(-1.85,0+hME,1.55),
	new THREE.Vector3(-0.8,0+hME,1.55),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['177_0-100_0'] = new THREE.Line(geo['177_0-100_0'], a0);
geo['179_0-100_0'] = new THREE.Geometry();
geo['179_0-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hME,-2.75),
	new THREE.Vector3(-1.8,0+hME,-2.75),
	new THREE.Vector3(-1.8,0+hME,1.5),
	new THREE.Vector3(-0.9,0+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['179_0-100_0'] = new THREE.Line(geo['179_0-100_0'], a0);
geo['172_0-100_0'] = new THREE.Geometry();
geo['172_0-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,1.45),
	new THREE.Vector3(-1.0,0+hME,1.45),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['172_0-100_0'] = new THREE.Line(geo['172_0-100_0'], a0);
geo['176_0-100_0'] = new THREE.Geometry();
geo['176_0-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,1.45),
	new THREE.Vector3(-1.0,0+hME,1.45),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['176_0-100_0'] = new THREE.Line(geo['176_0-100_0'], a0);
geo['178_0-100_0'] = new THREE.Geometry();
geo['178_0-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hME,-3.3),
	new THREE.Vector3(-1.8,0+hME,-3.3),
	new THREE.Vector3(-1.8,0+hME,1.5),
	new THREE.Vector3(-0.9,0+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['178_0-100_0'] = new THREE.Line(geo['178_0-100_0'], a0);
geo['153_1-100_0'] = new THREE.Geometry();
geo['153_1-100_0'].vertices.push(
	new THREE.Vector3(4.7,0.4+hME,2.8),
	new THREE.Vector3(4.7,0.4+hME,1.65),
	new THREE.Vector3(0.1,0.4+hME,1.65),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['153_1-100_0'] = new THREE.Line(geo['153_1-100_0'], a0);
geo['154_1-100_0'] = new THREE.Geometry();
geo['154_1-100_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hME,0.7),
	new THREE.Vector3(3.3,0.4+hME,1.6),
	new THREE.Vector3(0.2,0.4+hME,1.6),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['154_1-100_0'] = new THREE.Line(geo['154_1-100_0'], a0);
geo['156_1-100_0'] = new THREE.Geometry();
geo['156_1-100_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hME,0.7),
	new THREE.Vector3(2.0,0.4+hME,1.55),
	new THREE.Vector3(0.3,0.4+hME,1.55),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['156_1-100_0'] = new THREE.Line(geo['156_1-100_0'], a0);
geo['160_1-100_0'] = new THREE.Geometry();
geo['160_1-100_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hME,0.7),
	new THREE.Vector3(0.7,0.4+hME,1.5),
	new THREE.Vector3(0.4,0.4+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['160_1-100_0'] = new THREE.Line(geo['160_1-100_0'], a0);
geo['157_1-100_0'] = new THREE.Geometry();
geo['157_1-100_0'].vertices.push(
	new THREE.Vector3(3.0,0.4+hME,2.8),
	new THREE.Vector3(3.0,0.4+hME,1.7),
	new THREE.Vector3(0.0,0.4+hME,1.7),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['157_1-100_0'] = new THREE.Line(geo['157_1-100_0'], a0);
geo['159_1-100_0'] = new THREE.Geometry();
geo['159_1-100_0'].vertices.push(
	new THREE.Vector3(1.7,0.4+hME,2.8),
	new THREE.Vector3(1.7,0.4+hME,1.75),
	new THREE.Vector3(-0.1,0.4+hME,1.75),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['159_1-100_0'] = new THREE.Line(geo['159_1-100_0'], a0);
geo['161_1-100_0'] = new THREE.Geometry();
geo['161_1-100_0'].vertices.push(
	new THREE.Vector3(0.4,0.4+hME,2.8),
	new THREE.Vector3(0.4,0.4+hME,1.8),
	new THREE.Vector3(-0.2,0.4+hME,1.8),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['161_1-100_0'] = new THREE.Line(geo['161_1-100_0'], a0);
geo['163_1-100_0'] = new THREE.Geometry();
geo['163_1-100_0'].vertices.push(
	new THREE.Vector3(-0.9,0.4+hME,2.8),
	new THREE.Vector3(-0.9,0.4+hME,1.8),
	new THREE.Vector3(-0.3,0.4+hME,1.8),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['163_1-100_0'] = new THREE.Line(geo['163_1-100_0'], a0);
geo['165_1-100_0'] = new THREE.Geometry();
geo['165_1-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,2.8),
	new THREE.Vector3(-2.0,0.4+hME,2.8),
	new THREE.Vector3(-2.0,0.4+hME,1.75),
	new THREE.Vector3(-0.4,0.4+hME,1.75),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['165_1-100_0'] = new THREE.Line(geo['165_1-100_0'], a0);
geo['171_1-100_0'] = new THREE.Geometry();
geo['171_1-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,0.9),
	new THREE.Vector3(-2.0,0.4+hME,0.9),
	new THREE.Vector3(-2.0,0.4+hME,1.7),
	new THREE.Vector3(-0.5,0+hME,1.7),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['171_1-100_0'] = new THREE.Line(geo['171_1-100_0'], a0);
geo['173_1-100_0'] = new THREE.Geometry();
geo['173_1-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,0.2),
	new THREE.Vector3(-1.95,0+hME,0.2),
	new THREE.Vector3(-1.95,0+hME,1.65),
	new THREE.Vector3(-0.6,0.4+hME,1.65),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['173_1-100_0'] = new THREE.Line(geo['173_1-100_0'], a0);
geo['175_1-100_0'] = new THREE.Geometry();
geo['175_1-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,-0.5),
	new THREE.Vector3(-1.9,0.4+hME,-0.5),
	new THREE.Vector3(-1.9,0.4+hME,1.6),
	new THREE.Vector3(-0.7,0.4+hME,1.6),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['175_1-100_0'] = new THREE.Line(geo['175_1-100_0'], a0);
geo['177_1-100_0'] = new THREE.Geometry();
geo['177_1-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,-1.2),
	new THREE.Vector3(-1.85,0+hME,-1.2),
	new THREE.Vector3(-1.85,0+hME,1.55),
	new THREE.Vector3(-0.8,0.4+hME,1.55),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['177_1-100_0'] = new THREE.Line(geo['177_1-100_0'], a0);
geo['179_1-100_0'] = new THREE.Geometry();
geo['179_1-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,-2.75),
	new THREE.Vector3(-1.8,0.4+hME,-2.75),
	new THREE.Vector3(-1.8,0.4+hME,1.5),
	new THREE.Vector3(-0.9,0.4+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['179_1-100_0'] = new THREE.Line(geo['179_1-100_0'], a0);
geo['172_1-100_0'] = new THREE.Geometry();
geo['172_1-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,1.45),
	new THREE.Vector3(-1.0,0.4+hME,1.45),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['172_1-100_0'] = new THREE.Line(geo['172_1-100_0'], a0);
geo['176_1-100_0'] = new THREE.Geometry();
geo['176_1-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,1.45),
	new THREE.Vector3(-1.0,0.4+hME,1.45),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['176_1-100_0'] = new THREE.Line(geo['176_1-100_0'], a0);
geo['178_1-100_0'] = new THREE.Geometry();
geo['178_1-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hME,-3.3),
	new THREE.Vector3(-1.8,0.4+hME,-3.3),
	new THREE.Vector3(-1.8,0.4+hME,1.5),
	new THREE.Vector3(-0.9,0.4+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['178_1-100_0'] = new THREE.Line(geo['178_1-100_0'], a0);
geo['153_1-100_1'] = new THREE.Geometry();
geo['153_1-100_1'].vertices.push(
	new THREE.Vector3(4.7,0.4+hME,2.8),
	new THREE.Vector3(4.7,0.4+hME,1.65),
	new THREE.Vector3(0.1,0.4+hME,1.65),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['153_1-100_1'] = new THREE.Line(geo['153_1-100_1'], a0);
geo['154_1-100_1'] = new THREE.Geometry();
geo['154_1-100_1'].vertices.push(
	new THREE.Vector3(3.3,0.4+hME,0.7),
	new THREE.Vector3(3.3,0.4+hME,1.6),
	new THREE.Vector3(0.2,0.4+hME,1.6),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['154_1-100_1'] = new THREE.Line(geo['154_1-100_1'], a0);
geo['156_1-100_1'] = new THREE.Geometry();
geo['156_1-100_1'].vertices.push(
	new THREE.Vector3(2.0,0.4+hME,0.7),
	new THREE.Vector3(2.0,0.4+hME,1.55),
	new THREE.Vector3(0.3,0.4+hME,1.55),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['156_1-100_1'] = new THREE.Line(geo['156_1-100_1'], a0);
geo['160_1-100_1'] = new THREE.Geometry();
geo['160_1-100_1'].vertices.push(
	new THREE.Vector3(0.7,0.4+hME,0.7),
	new THREE.Vector3(0.7,0.4+hME,1.5),
	new THREE.Vector3(0.4,0.4+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['160_1-100_1'] = new THREE.Line(geo['160_1-100_1'], a0);
geo['157_1-100_1'] = new THREE.Geometry();
geo['157_1-100_1'].vertices.push(
	new THREE.Vector3(3.0,0.4+hME,2.8),
	new THREE.Vector3(3.0,0.4+hME,1.7),
	new THREE.Vector3(0.0,0.4+hME,1.7),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['157_1-100_1'] = new THREE.Line(geo['157_1-100_1'], a0);
geo['159_1-100_1'] = new THREE.Geometry();
geo['159_1-100_1'].vertices.push(
	new THREE.Vector3(1.7,0.4+hME,2.8),
	new THREE.Vector3(1.7,0.4+hME,1.75),
	new THREE.Vector3(-0.1,0.4+hME,1.75),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['159_1-100_1'] = new THREE.Line(geo['159_1-100_1'], a0);
geo['161_1-100_1'] = new THREE.Geometry();
geo['161_1-100_1'].vertices.push(
	new THREE.Vector3(0.4,0.4+hME,2.8),
	new THREE.Vector3(0.4,0.4+hME,1.8),
	new THREE.Vector3(-0.2,0.4+hME,1.8),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['161_1-100_1'] = new THREE.Line(geo['161_1-100_1'], a0);
geo['163_1-100_1'] = new THREE.Geometry();
geo['163_1-100_1'].vertices.push(
	new THREE.Vector3(-0.9,0.4+hME,2.8),
	new THREE.Vector3(-0.9,0.4+hME,1.8),
	new THREE.Vector3(-0.3,0.4+hME,1.8),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['163_1-100_1'] = new THREE.Line(geo['163_1-100_1'], a0);
geo['165_1-100_1'] = new THREE.Geometry();
geo['165_1-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,2.8),
	new THREE.Vector3(-2.0,0.4+hME,2.8),
	new THREE.Vector3(-2.0,0.4+hME,1.75),
	new THREE.Vector3(-0.4,0.4+hME,1.75),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['165_1-100_1'] = new THREE.Line(geo['165_1-100_1'], a0);
geo['171_1-100_1'] = new THREE.Geometry();
geo['171_1-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,0.9),
	new THREE.Vector3(-2.0,0.4+hME,0.9),
	new THREE.Vector3(-2.0,0.4+hME,1.7),
	new THREE.Vector3(-0.5,0.4+hME,1.7),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['171_1-100_1'] = new THREE.Line(geo['171_1-100_1'], a0);
geo['173_1-100_1'] = new THREE.Geometry();
geo['173_1-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,0.2),
	new THREE.Vector3(-1.95,0.4+hME,0.2),
	new THREE.Vector3(-1.95,0.4+hME,1.65),
	new THREE.Vector3(-0.6,0.4+hME,1.65),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['173_1-100_1'] = new THREE.Line(geo['173_1-100_1'], a0);
geo['175_1-100_1'] = new THREE.Geometry();
geo['175_1-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,-0.5),
	new THREE.Vector3(-1.9,0.4+hME,-0.5),
	new THREE.Vector3(-1.9,0.4+hME,1.6),
	new THREE.Vector3(-0.7,0.4+hME,1.6),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['175_1-100_1'] = new THREE.Line(geo['175_1-100_1'], a0);
geo['177_1-100_1'] = new THREE.Geometry();
geo['177_1-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,-1.2),
	new THREE.Vector3(-1.85,0.4+hME,-1.2),
	new THREE.Vector3(-1.85,0.4+hME,1.55),
	new THREE.Vector3(-0.8,0.4+hME,1.55),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['177_1-100_1'] = new THREE.Line(geo['177_1-100_1'], a0);
geo['179_1-100_1'] = new THREE.Geometry();
geo['179_1-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hME,-2.75),
	new THREE.Vector3(-1.8,0.4+hME,-2.75),
	new THREE.Vector3(-1.8,0.4+hME,1.5),
	new THREE.Vector3(-0.9,0.4+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['179_1-100_1'] = new THREE.Line(geo['179_1-100_1'], a0);
geo['172_1-100_1'] = new THREE.Geometry();
geo['172_1-100_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,1.45),
	new THREE.Vector3(-1.0,0.4+hME,1.45),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['172_1-100_1'] = new THREE.Line(geo['172_1-100_1'], a0);
geo['176_1-100_1'] = new THREE.Geometry();
geo['176_1-100_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,1.45),
	new THREE.Vector3(-1.0,0.4+hME,1.45),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['176_1-100_1'] = new THREE.Line(geo['176_1-100_1'], a0);
geo['178_1-100_1'] = new THREE.Geometry();
geo['178_1-100_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hME,-3.3),
	new THREE.Vector3(-1.8,0.4+hME,-3.3),
	new THREE.Vector3(-1.8,0.4+hME,1.5),
	new THREE.Vector3(-0.9,0.4+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['178_1-100_1'] = new THREE.Line(geo['178_1-100_1'], a0);
geo['153_2-100_0'] = new THREE.Geometry();
geo['153_2-100_0'].vertices.push(
	new THREE.Vector3(4.7,0.8+hME,2.8),
	new THREE.Vector3(4.7,0.8+hME,1.65),
	new THREE.Vector3(0.1,0.8+hME,1.65),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['153_2-100_0'] = new THREE.Line(geo['153_2-100_0'], a0);
geo['154_2-100_0'] = new THREE.Geometry();
geo['154_2-100_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hME,0.7),
	new THREE.Vector3(3.3,0.8+hME,1.6),
	new THREE.Vector3(0.2,0.8+hME,1.6),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['154_2-100_0'] = new THREE.Line(geo['154_2-100_0'], a0);
geo['156_2-100_0'] = new THREE.Geometry();
geo['156_2-100_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hME,0.7),
	new THREE.Vector3(2.0,0.8+hME,1.55),
	new THREE.Vector3(0.3,0.8+hME,1.55),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['156_2-100_0'] = new THREE.Line(geo['156_2-100_0'], a0);
geo['160_2-100_0'] = new THREE.Geometry();
geo['160_2-100_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hME,0.7),
	new THREE.Vector3(0.7,0.8+hME,1.5),
	new THREE.Vector3(0.4,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['160_2-100_0'] = new THREE.Line(geo['160_2-100_0'], a0);
geo['157_2-100_0'] = new THREE.Geometry();
geo['157_2-100_0'].vertices.push(
	new THREE.Vector3(3.0,0.8+hME,2.8),
	new THREE.Vector3(3.0,0.8+hME,1.7),
	new THREE.Vector3(0.0,0.8+hME,1.7),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['157_2-100_0'] = new THREE.Line(geo['157_2-100_0'], a0);
geo['159_2-100_0'] = new THREE.Geometry();
geo['159_2-100_0'].vertices.push(
	new THREE.Vector3(1.7,0.8+hME,2.8),
	new THREE.Vector3(1.7,0.8+hME,1.75),
	new THREE.Vector3(-0.1,0.8+hME,1.75),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['159_2-100_0'] = new THREE.Line(geo['159_2-100_0'], a0);
geo['161_2-100_0'] = new THREE.Geometry();
geo['161_2-100_0'].vertices.push(
	new THREE.Vector3(0.4,0.8+hME,2.8),
	new THREE.Vector3(0.4,0.8+hME,1.8),
	new THREE.Vector3(-0.2,0.8+hME,1.8),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['161_2-100_0'] = new THREE.Line(geo['161_2-100_0'], a0);
geo['163_2-100_0'] = new THREE.Geometry();
geo['163_2-100_0'].vertices.push(
	new THREE.Vector3(-0.9,0.8+hME,2.8),
	new THREE.Vector3(-0.9,0.8+hME,1.8),
	new THREE.Vector3(-0.3,0.8+hME,1.8),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['163_2-100_0'] = new THREE.Line(geo['163_2-100_0'], a0);
geo['165_2-100_0'] = new THREE.Geometry();
geo['165_2-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,2.8),
	new THREE.Vector3(-2.0,0.8+hME,2.8),
	new THREE.Vector3(-2.0,0.8+hME,1.75),
	new THREE.Vector3(-0.4,0.8+hME,1.75),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['165_2-100_0'] = new THREE.Line(geo['165_2-100_0'], a0);
geo['171_2-100_0'] = new THREE.Geometry();
geo['171_2-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,0.9),
	new THREE.Vector3(-2.0,0.8+hME,0.9),
	new THREE.Vector3(-2.0,0.8+hME,1.7),
	new THREE.Vector3(-0.5,0+hME,1.7),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['171_2-100_0'] = new THREE.Line(geo['171_2-100_0'], a0);
geo['173_2-100_0'] = new THREE.Geometry();
geo['173_2-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,0.2),
	new THREE.Vector3(-1.95,0+hME,0.2),
	new THREE.Vector3(-1.95,0+hME,1.65),
	new THREE.Vector3(-0.6,0.8+hME,1.65),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['173_2-100_0'] = new THREE.Line(geo['173_2-100_0'], a0);
geo['175_2-100_0'] = new THREE.Geometry();
geo['175_2-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-0.5),
	new THREE.Vector3(-1.9,0.8+hME,-0.5),
	new THREE.Vector3(-1.9,0.8+hME,1.6),
	new THREE.Vector3(-0.7,0.8+hME,1.6),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['175_2-100_0'] = new THREE.Line(geo['175_2-100_0'], a0);
geo['177_2-100_0'] = new THREE.Geometry();
geo['177_2-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-1.2),
	new THREE.Vector3(-1.85,0+hME,-1.2),
	new THREE.Vector3(-1.85,0+hME,1.55),
	new THREE.Vector3(-0.8,0.8+hME,1.55),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['177_2-100_0'] = new THREE.Line(geo['177_2-100_0'], a0);
geo['179_2-100_0'] = new THREE.Geometry();
geo['179_2-100_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-2.75),
	new THREE.Vector3(-1.8,0.8+hME,-2.75),
	new THREE.Vector3(-1.8,0.8+hME,1.5),
	new THREE.Vector3(-0.9,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['179_2-100_0'] = new THREE.Line(geo['179_2-100_0'], a0);
geo['172_2-100_0'] = new THREE.Geometry();
geo['172_2-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,1.45),
	new THREE.Vector3(-1.0,0.8+hME,1.45),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['172_2-100_0'] = new THREE.Line(geo['172_2-100_0'], a0);
geo['176_2-100_0'] = new THREE.Geometry();
geo['176_2-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,1.45),
	new THREE.Vector3(-1.0,0.8+hME,1.45),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['176_2-100_0'] = new THREE.Line(geo['176_2-100_0'], a0);
geo['178_2-100_0'] = new THREE.Geometry();
geo['178_2-100_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-3.3),
	new THREE.Vector3(-1.8,0.8+hME,-3.3),
	new THREE.Vector3(-1.8,0.8+hME,1.5),
	new THREE.Vector3(-0.9,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['178_2-100_0'] = new THREE.Line(geo['178_2-100_0'], a0);
geo['153_2-100_1'] = new THREE.Geometry();
geo['153_2-100_1'].vertices.push(
	new THREE.Vector3(4.7,0.8+hME,2.8),
	new THREE.Vector3(4.7,0.8+hME,1.65),
	new THREE.Vector3(0.1,0.8+hME,1.65),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['153_2-100_1'] = new THREE.Line(geo['153_2-100_1'], a0);
geo['154_2-100_1'] = new THREE.Geometry();
geo['154_2-100_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hME,0.7),
	new THREE.Vector3(3.3,0.8+hME,1.6),
	new THREE.Vector3(0.2,0.8+hME,1.6),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['154_2-100_1'] = new THREE.Line(geo['154_2-100_1'], a0);
geo['156_2-100_1'] = new THREE.Geometry();
geo['156_2-100_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hME,0.7),
	new THREE.Vector3(2.0,0.8+hME,1.55),
	new THREE.Vector3(0.3,0.8+hME,1.55),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['156_2-100_1'] = new THREE.Line(geo['156_2-100_1'], a0);
geo['160_2-100_1'] = new THREE.Geometry();
geo['160_2-100_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hME,0.7),
	new THREE.Vector3(0.7,0.8+hME,1.5),
	new THREE.Vector3(0.4,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['160_2-100_1'] = new THREE.Line(geo['160_2-100_1'], a0);
geo['157_2-100_1'] = new THREE.Geometry();
geo['157_2-100_1'].vertices.push(
	new THREE.Vector3(3.0,0.8+hME,2.8),
	new THREE.Vector3(3.0,0.8+hME,1.7),
	new THREE.Vector3(0.0,0.8+hME,1.7),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['157_2-100_1'] = new THREE.Line(geo['157_2-100_1'], a0);
geo['159_2-100_1'] = new THREE.Geometry();
geo['159_2-100_1'].vertices.push(
	new THREE.Vector3(1.7,0.8+hME,2.8),
	new THREE.Vector3(1.7,0.8+hME,1.75),
	new THREE.Vector3(-0.1,0.8+hME,1.75),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['159_2-100_1'] = new THREE.Line(geo['159_2-100_1'], a0);
geo['161_2-100_1'] = new THREE.Geometry();
geo['161_2-100_1'].vertices.push(
	new THREE.Vector3(0.4,0.8+hME,2.8),
	new THREE.Vector3(0.4,0.8+hME,1.8),
	new THREE.Vector3(-0.2,0.8+hME,1.8),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['161_2-100_1'] = new THREE.Line(geo['161_2-100_1'], a0);
geo['163_2-100_1'] = new THREE.Geometry();
geo['163_2-100_1'].vertices.push(
	new THREE.Vector3(-0.9,0.8+hME,2.8),
	new THREE.Vector3(-0.9,0.8+hME,1.8),
	new THREE.Vector3(-0.3,0.8+hME,1.8),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['163_2-100_1'] = new THREE.Line(geo['163_2-100_1'], a0);
geo['165_2-100_1'] = new THREE.Geometry();
geo['165_2-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,2.8),
	new THREE.Vector3(-2.0,0.8+hME,2.8),
	new THREE.Vector3(-2.0,0.8+hME,1.75),
	new THREE.Vector3(-0.4,0.8+hME,1.75),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['165_2-100_1'] = new THREE.Line(geo['165_2-100_1'], a0);
geo['171_2-100_1'] = new THREE.Geometry();
geo['171_2-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,0.9),
	new THREE.Vector3(-2.0,0.8+hME,0.9),
	new THREE.Vector3(-2.0,0.8+hME,1.7),
	new THREE.Vector3(-0.5,0.4+hME,1.7),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['171_2-100_1'] = new THREE.Line(geo['171_2-100_1'], a0);
geo['173_2-100_1'] = new THREE.Geometry();
geo['173_2-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,0.2),
	new THREE.Vector3(-1.95,0.4+hME,0.2),
	new THREE.Vector3(-1.95,0.4+hME,1.65),
	new THREE.Vector3(-0.6,0.8+hME,1.65),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['173_2-100_1'] = new THREE.Line(geo['173_2-100_1'], a0);
geo['175_2-100_1'] = new THREE.Geometry();
geo['175_2-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-0.5),
	new THREE.Vector3(-1.9,0.8+hME,-0.5),
	new THREE.Vector3(-1.9,0.8+hME,1.6),
	new THREE.Vector3(-0.7,0.8+hME,1.6),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['175_2-100_1'] = new THREE.Line(geo['175_2-100_1'], a0);
geo['177_2-100_1'] = new THREE.Geometry();
geo['177_2-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-1.2),
	new THREE.Vector3(-1.85,0.4+hME,-1.2),
	new THREE.Vector3(-1.85,0.4+hME,1.55),
	new THREE.Vector3(-0.8,0.8+hME,1.55),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['177_2-100_1'] = new THREE.Line(geo['177_2-100_1'], a0);
geo['179_2-100_1'] = new THREE.Geometry();
geo['179_2-100_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-2.75),
	new THREE.Vector3(-1.8,0.8+hME,-2.75),
	new THREE.Vector3(-1.8,0.8+hME,1.5),
	new THREE.Vector3(-0.9,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['179_2-100_1'] = new THREE.Line(geo['179_2-100_1'], a0);
geo['172_2-100_1'] = new THREE.Geometry();
geo['172_2-100_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,1.45),
	new THREE.Vector3(-1.0,0.8+hME,1.45),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['172_2-100_1'] = new THREE.Line(geo['172_2-100_1'], a0);
geo['176_2-100_1'] = new THREE.Geometry();
geo['176_2-100_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,1.45),
	new THREE.Vector3(-1.0,0.8+hME,1.45),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['176_2-100_1'] = new THREE.Line(geo['176_2-100_1'], a0);
geo['178_2-100_1'] = new THREE.Geometry();
geo['178_2-100_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-3.3),
	new THREE.Vector3(-1.8,0.8+hME,-3.3),
	new THREE.Vector3(-1.8,0.8+hME,1.5),
	new THREE.Vector3(-0.9,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['178_2-100_1'] = new THREE.Line(geo['178_2-100_1'], a0);
geo['153_2-100_2'] = new THREE.Geometry();
geo['153_2-100_2'].vertices.push(
	new THREE.Vector3(4.7,0.8+hME,2.8),
	new THREE.Vector3(4.7,0.8+hME,1.65),
	new THREE.Vector3(0.1,0.8+hME,1.65),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['153_2-100_2'] = new THREE.Line(geo['153_2-100_2'], a0);
geo['154_2-100_2'] = new THREE.Geometry();
geo['154_2-100_2'].vertices.push(
	new THREE.Vector3(3.3,0.8+hME,0.7),
	new THREE.Vector3(3.3,0.8+hME,1.6),
	new THREE.Vector3(0.2,0.8+hME,1.6),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['154_2-100_2'] = new THREE.Line(geo['154_2-100_2'], a0);
geo['156_2-100_2'] = new THREE.Geometry();
geo['156_2-100_2'].vertices.push(
	new THREE.Vector3(2.0,0.8+hME,0.7),
	new THREE.Vector3(2.0,0.8+hME,1.55),
	new THREE.Vector3(0.3,0.8+hME,1.55),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['156_2-100_2'] = new THREE.Line(geo['156_2-100_2'], a0);
geo['160_2-100_2'] = new THREE.Geometry();
geo['160_2-100_2'].vertices.push(
	new THREE.Vector3(0.7,0.8+hME,0.7),
	new THREE.Vector3(0.7,0.8+hME,1.5),
	new THREE.Vector3(0.4,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['160_2-100_2'] = new THREE.Line(geo['160_2-100_2'], a0);
geo['157_2-100_2'] = new THREE.Geometry();
geo['157_2-100_2'].vertices.push(
	new THREE.Vector3(3.0,0.8+hME,2.8),
	new THREE.Vector3(3.0,0.8+hME,1.7),
	new THREE.Vector3(0.0,0.8+hME,1.7),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['157_2-100_2'] = new THREE.Line(geo['157_2-100_2'], a0);
geo['159_2-100_2'] = new THREE.Geometry();
geo['159_2-100_2'].vertices.push(
	new THREE.Vector3(1.7,0.8+hME,2.8),
	new THREE.Vector3(1.7,0.8+hME,1.75),
	new THREE.Vector3(-0.1,0.8+hME,1.75),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['159_2-100_2'] = new THREE.Line(geo['159_2-100_2'], a0);
geo['161_2-100_2'] = new THREE.Geometry();
geo['161_2-100_2'].vertices.push(
	new THREE.Vector3(0.4,0.8+hME,2.8),
	new THREE.Vector3(0.4,0.8+hME,1.8),
	new THREE.Vector3(-0.2,0.8+hME,1.8),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['161_2-100_2'] = new THREE.Line(geo['161_2-100_2'], a0);
geo['163_2-100_2'] = new THREE.Geometry();
geo['163_2-100_2'].vertices.push(
	new THREE.Vector3(-0.9,0.8+hME,2.8),
	new THREE.Vector3(-0.9,0.8+hME,1.8),
	new THREE.Vector3(-0.3,0.8+hME,1.8),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['163_2-100_2'] = new THREE.Line(geo['163_2-100_2'], a0);
geo['165_2-100_2'] = new THREE.Geometry();
geo['165_2-100_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,2.8),
	new THREE.Vector3(-2.0,0.8+hME,2.8),
	new THREE.Vector3(-2.0,0.8+hME,1.75),
	new THREE.Vector3(-0.4,0.8+hME,1.75),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['165_2-100_2'] = new THREE.Line(geo['165_2-100_2'], a0);
geo['171_2-100_2'] = new THREE.Geometry();
geo['171_2-100_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,0.9),
	new THREE.Vector3(-2.0,0.8+hME,0.9),
	new THREE.Vector3(-2.0,0.8+hME,1.7),
	new THREE.Vector3(-0.5,0.8+hME,1.7),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['171_2-100_2'] = new THREE.Line(geo['171_2-100_2'], a0);
geo['173_2-100_2'] = new THREE.Geometry();
geo['173_2-100_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,0.2),
	new THREE.Vector3(-1.95,0.8+hME,0.2),
	new THREE.Vector3(-1.95,0.8+hME,1.65),
	new THREE.Vector3(-0.6,0.8+hME,1.65),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['173_2-100_2'] = new THREE.Line(geo['173_2-100_2'], a0);
geo['175_2-100_2'] = new THREE.Geometry();
geo['175_2-100_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-0.5),
	new THREE.Vector3(-1.9,0.8+hME,-0.5),
	new THREE.Vector3(-1.9,0.8+hME,1.6),
	new THREE.Vector3(-0.7,0.8+hME,1.6),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['175_2-100_2'] = new THREE.Line(geo['175_2-100_2'], a0);
geo['177_2-100_2'] = new THREE.Geometry();
geo['177_2-100_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-1.2),
	new THREE.Vector3(-1.85,0.8+hME,-1.2),
	new THREE.Vector3(-1.85,0.8+hME,1.55),
	new THREE.Vector3(-0.8,0.8+hME,1.55),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['177_2-100_2'] = new THREE.Line(geo['177_2-100_2'], a0);
geo['179_2-100_2'] = new THREE.Geometry();
geo['179_2-100_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hME,-2.75),
	new THREE.Vector3(-1.8,0.8+hME,-2.75),
	new THREE.Vector3(-1.8,0.8+hME,1.5),
	new THREE.Vector3(-0.9,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['179_2-100_2'] = new THREE.Line(geo['179_2-100_2'], a0);
geo['172_2-100_2'] = new THREE.Geometry();
geo['172_2-100_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0.8+hME,1.45),
	new THREE.Vector3(-1.0,0.8+hME,1.45),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['172_2-100_2'] = new THREE.Line(geo['172_2-100_2'], a0);
geo['176_2-100_2'] = new THREE.Geometry();
geo['176_2-100_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0.8+hME,1.45),
	new THREE.Vector3(-1.0,0.8+hME,1.45),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['176_2-100_2'] = new THREE.Line(geo['176_2-100_2'], a0);
geo['178_2-100_2'] = new THREE.Geometry();
geo['178_2-100_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hME,-3.3),
	new THREE.Vector3(-1.8,0.8+hME,-3.3),
	new THREE.Vector3(-1.8,0.8+hME,1.5),
	new THREE.Vector3(-0.9,0.8+hME,1.5),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['178_2-100_2'] = new THREE.Line(geo['178_2-100_2'], a0);
geo['153_3-100_0'] = new THREE.Geometry();
geo['153_3-100_0'].vertices.push(
	new THREE.Vector3(4.7,1.2+hME,2.8),
	new THREE.Vector3(4.7,1.2+hME,1.65),
	new THREE.Vector3(0.1,1.2+hME,1.65),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['153_3-100_0'] = new THREE.Line(geo['153_3-100_0'], a0);
geo['154_3-100_0'] = new THREE.Geometry();
geo['154_3-100_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hME,0.7),
	new THREE.Vector3(3.3,1.2+hME,1.6),
	new THREE.Vector3(0.2,1.2+hME,1.6),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['154_3-100_0'] = new THREE.Line(geo['154_3-100_0'], a0);
geo['156_3-100_0'] = new THREE.Geometry();
geo['156_3-100_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hME,0.7),
	new THREE.Vector3(2.0,1.2+hME,1.55),
	new THREE.Vector3(0.3,1.2+hME,1.55),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['156_3-100_0'] = new THREE.Line(geo['156_3-100_0'], a0);
geo['160_3-100_0'] = new THREE.Geometry();
geo['160_3-100_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hME,0.7),
	new THREE.Vector3(0.7,1.2+hME,1.5),
	new THREE.Vector3(0.4,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['160_3-100_0'] = new THREE.Line(geo['160_3-100_0'], a0);
geo['157_3-100_0'] = new THREE.Geometry();
geo['157_3-100_0'].vertices.push(
	new THREE.Vector3(3.0,1.2+hME,2.8),
	new THREE.Vector3(3.0,1.2+hME,1.7),
	new THREE.Vector3(0.0,1.2+hME,1.7),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['157_3-100_0'] = new THREE.Line(geo['157_3-100_0'], a0);
geo['159_3-100_0'] = new THREE.Geometry();
geo['159_3-100_0'].vertices.push(
	new THREE.Vector3(1.7,1.2+hME,2.8),
	new THREE.Vector3(1.7,1.2+hME,1.75),
	new THREE.Vector3(-0.1,1.2+hME,1.75),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['159_3-100_0'] = new THREE.Line(geo['159_3-100_0'], a0);
geo['161_3-100_0'] = new THREE.Geometry();
geo['161_3-100_0'].vertices.push(
	new THREE.Vector3(0.4,1.2+hME,2.8),
	new THREE.Vector3(0.4,1.2+hME,1.8),
	new THREE.Vector3(-0.2,1.2+hME,1.8),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['161_3-100_0'] = new THREE.Line(geo['161_3-100_0'], a0);
geo['163_3-100_0'] = new THREE.Geometry();
geo['163_3-100_0'].vertices.push(
	new THREE.Vector3(-0.9,1.2+hME,2.8),
	new THREE.Vector3(-0.9,1.2+hME,1.8),
	new THREE.Vector3(-0.3,1.2+hME,1.8),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['163_3-100_0'] = new THREE.Line(geo['163_3-100_0'], a0);
geo['165_3-100_0'] = new THREE.Geometry();
geo['165_3-100_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,2.8),
	new THREE.Vector3(-2.0,1.2+hME,2.8),
	new THREE.Vector3(-2.0,1.2+hME,1.75),
	new THREE.Vector3(-0.4,1.2+hME,1.75),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['165_3-100_0'] = new THREE.Line(geo['165_3-100_0'], a0);
geo['171_3-100_0'] = new THREE.Geometry();
geo['171_3-100_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,0.9),
	new THREE.Vector3(-2.0,1.2+hME,0.9),
	new THREE.Vector3(-2.0,1.2+hME,1.7),
	new THREE.Vector3(-0.5,0+hME,1.7),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['171_3-100_0'] = new THREE.Line(geo['171_3-100_0'], a0);
geo['173_3-100_0'] = new THREE.Geometry();
geo['173_3-100_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,0.2),
	new THREE.Vector3(-1.95,0+hME,0.2),
	new THREE.Vector3(-1.95,0+hME,1.65),
	new THREE.Vector3(-0.6,1.2+hME,1.65),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['173_3-100_0'] = new THREE.Line(geo['173_3-100_0'], a0);
geo['175_3-100_0'] = new THREE.Geometry();
geo['175_3-100_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-0.5),
	new THREE.Vector3(-1.9,1.2+hME,-0.5),
	new THREE.Vector3(-1.9,1.2+hME,1.6),
	new THREE.Vector3(-0.7,1.2+hME,1.6),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['175_3-100_0'] = new THREE.Line(geo['175_3-100_0'], a0);
geo['177_3-100_0'] = new THREE.Geometry();
geo['177_3-100_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-1.2),
	new THREE.Vector3(-1.85,0+hME,-1.2),
	new THREE.Vector3(-1.85,0+hME,1.55),
	new THREE.Vector3(-0.8,1.2+hME,1.55),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['177_3-100_0'] = new THREE.Line(geo['177_3-100_0'], a0);
geo['179_3-100_0'] = new THREE.Geometry();
geo['179_3-100_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-2.75),
	new THREE.Vector3(-1.8,1.2+hME,-2.75),
	new THREE.Vector3(-1.8,1.2+hME,1.5),
	new THREE.Vector3(-0.9,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['179_3-100_0'] = new THREE.Line(geo['179_3-100_0'], a0);
geo['172_3-100_0'] = new THREE.Geometry();
geo['172_3-100_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,1.45),
	new THREE.Vector3(-1.0,1.2+hME,1.45),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['172_3-100_0'] = new THREE.Line(geo['172_3-100_0'], a0);
geo['176_3-100_0'] = new THREE.Geometry();
geo['176_3-100_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,-2.0),
	new THREE.Vector3(-1.75,0+hME,1.45),
	new THREE.Vector3(-1.0,1.2+hME,1.45),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['176_3-100_0'] = new THREE.Line(geo['176_3-100_0'], a0);
geo['178_3-100_0'] = new THREE.Geometry();
geo['178_3-100_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-3.3),
	new THREE.Vector3(-1.8,1.2+hME,-3.3),
	new THREE.Vector3(-1.8,1.2+hME,1.5),
	new THREE.Vector3(-0.9,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0+hME,1.15)
); line['178_3-100_0'] = new THREE.Line(geo['178_3-100_0'], a0);
geo['153_3-100_1'] = new THREE.Geometry();
geo['153_3-100_1'].vertices.push(
	new THREE.Vector3(4.7,1.2+hME,2.8),
	new THREE.Vector3(4.7,1.2+hME,1.65),
	new THREE.Vector3(0.1,1.2+hME,1.65),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['153_3-100_1'] = new THREE.Line(geo['153_3-100_1'], a0);
geo['154_3-100_1'] = new THREE.Geometry();
geo['154_3-100_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hME,0.7),
	new THREE.Vector3(3.3,1.2+hME,1.6),
	new THREE.Vector3(0.2,1.2+hME,1.6),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['154_3-100_1'] = new THREE.Line(geo['154_3-100_1'], a0);
geo['156_3-100_1'] = new THREE.Geometry();
geo['156_3-100_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hME,0.7),
	new THREE.Vector3(2.0,1.2+hME,1.55),
	new THREE.Vector3(0.3,1.2+hME,1.55),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['156_3-100_1'] = new THREE.Line(geo['156_3-100_1'], a0);
geo['160_3-100_1'] = new THREE.Geometry();
geo['160_3-100_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hME,0.7),
	new THREE.Vector3(0.7,1.2+hME,1.5),
	new THREE.Vector3(0.4,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['160_3-100_1'] = new THREE.Line(geo['160_3-100_1'], a0);
geo['157_3-100_1'] = new THREE.Geometry();
geo['157_3-100_1'].vertices.push(
	new THREE.Vector3(3.0,1.2+hME,2.8),
	new THREE.Vector3(3.0,1.2+hME,1.7),
	new THREE.Vector3(0.0,1.2+hME,1.7),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['157_3-100_1'] = new THREE.Line(geo['157_3-100_1'], a0);
geo['159_3-100_1'] = new THREE.Geometry();
geo['159_3-100_1'].vertices.push(
	new THREE.Vector3(1.7,1.2+hME,2.8),
	new THREE.Vector3(1.7,1.2+hME,1.75),
	new THREE.Vector3(-0.1,1.2+hME,1.75),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['159_3-100_1'] = new THREE.Line(geo['159_3-100_1'], a0);
geo['161_3-100_1'] = new THREE.Geometry();
geo['161_3-100_1'].vertices.push(
	new THREE.Vector3(0.4,1.2+hME,2.8),
	new THREE.Vector3(0.4,1.2+hME,1.8),
	new THREE.Vector3(-0.2,1.2+hME,1.8),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['161_3-100_1'] = new THREE.Line(geo['161_3-100_1'], a0);
geo['163_3-100_1'] = new THREE.Geometry();
geo['163_3-100_1'].vertices.push(
	new THREE.Vector3(-0.9,1.2+hME,2.8),
	new THREE.Vector3(-0.9,1.2+hME,1.8),
	new THREE.Vector3(-0.3,1.2+hME,1.8),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['163_3-100_1'] = new THREE.Line(geo['163_3-100_1'], a0);
geo['165_3-100_1'] = new THREE.Geometry();
geo['165_3-100_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,2.8),
	new THREE.Vector3(-2.0,1.2+hME,2.8),
	new THREE.Vector3(-2.0,1.2+hME,1.75),
	new THREE.Vector3(-0.4,1.2+hME,1.75),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['165_3-100_1'] = new THREE.Line(geo['165_3-100_1'], a0);
geo['171_3-100_1'] = new THREE.Geometry();
geo['171_3-100_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,0.9),
	new THREE.Vector3(-2.0,1.2+hME,0.9),
	new THREE.Vector3(-2.0,1.2+hME,1.7),
	new THREE.Vector3(-0.5,0.4+hME,1.7),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['171_3-100_1'] = new THREE.Line(geo['171_3-100_1'], a0);
geo['173_3-100_1'] = new THREE.Geometry();
geo['173_3-100_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,0.2),
	new THREE.Vector3(-1.95,0.4+hME,0.2),
	new THREE.Vector3(-1.95,0.4+hME,1.65),
	new THREE.Vector3(-0.6,1.2+hME,1.65),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['173_3-100_1'] = new THREE.Line(geo['173_3-100_1'], a0);
geo['175_3-100_1'] = new THREE.Geometry();
geo['175_3-100_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-0.5),
	new THREE.Vector3(-1.9,1.2+hME,-0.5),
	new THREE.Vector3(-1.9,1.2+hME,1.6),
	new THREE.Vector3(-0.7,1.2+hME,1.6),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['175_3-100_1'] = new THREE.Line(geo['175_3-100_1'], a0);
geo['177_3-100_1'] = new THREE.Geometry();
geo['177_3-100_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-1.2),
	new THREE.Vector3(-1.85,0.4+hME,-1.2),
	new THREE.Vector3(-1.85,0.4+hME,1.55),
	new THREE.Vector3(-0.8,1.2+hME,1.55),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['177_3-100_1'] = new THREE.Line(geo['177_3-100_1'], a0);
geo['179_3-100_1'] = new THREE.Geometry();
geo['179_3-100_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-2.75),
	new THREE.Vector3(-1.8,1.2+hME,-2.75),
	new THREE.Vector3(-1.8,1.2+hME,1.5),
	new THREE.Vector3(-0.9,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['179_3-100_1'] = new THREE.Line(geo['179_3-100_1'], a0);
geo['172_3-100_1'] = new THREE.Geometry();
geo['172_3-100_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,1.45),
	new THREE.Vector3(-1.0,1.2+hME,1.45),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['172_3-100_1'] = new THREE.Line(geo['172_3-100_1'], a0);
geo['176_3-100_1'] = new THREE.Geometry();
geo['176_3-100_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,-2.0),
	new THREE.Vector3(-1.75,0.4+hME,1.45),
	new THREE.Vector3(-1.0,1.2+hME,1.45),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['176_3-100_1'] = new THREE.Line(geo['176_3-100_1'], a0);
geo['178_3-100_1'] = new THREE.Geometry();
geo['178_3-100_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-3.3),
	new THREE.Vector3(-1.8,1.2+hME,-3.3),
	new THREE.Vector3(-1.8,1.2+hME,1.5),
	new THREE.Vector3(-0.9,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0.4+hME,1.15)
); line['178_3-100_1'] = new THREE.Line(geo['178_3-100_1'], a0);
geo['153_3-100_2'] = new THREE.Geometry();
geo['153_3-100_2'].vertices.push(
	new THREE.Vector3(4.7,1.2+hME,2.8),
	new THREE.Vector3(4.7,1.2+hME,1.65),
	new THREE.Vector3(0.1,1.2+hME,1.65),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['153_3-100_2'] = new THREE.Line(geo['153_3-100_2'], a0);
geo['154_3-100_2'] = new THREE.Geometry();
geo['154_3-100_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hME,0.7),
	new THREE.Vector3(3.3,1.2+hME,1.6),
	new THREE.Vector3(0.2,1.2+hME,1.6),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['154_3-100_2'] = new THREE.Line(geo['154_3-100_2'], a0);
geo['156_3-100_2'] = new THREE.Geometry();
geo['156_3-100_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hME,0.7),
	new THREE.Vector3(2.0,1.2+hME,1.55),
	new THREE.Vector3(0.3,1.2+hME,1.55),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['156_3-100_2'] = new THREE.Line(geo['156_3-100_2'], a0);
geo['160_3-100_2'] = new THREE.Geometry();
geo['160_3-100_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hME,0.7),
	new THREE.Vector3(0.7,1.2+hME,1.5),
	new THREE.Vector3(0.4,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['160_3-100_2'] = new THREE.Line(geo['160_3-100_2'], a0);
geo['157_3-100_2'] = new THREE.Geometry();
geo['157_3-100_2'].vertices.push(
	new THREE.Vector3(3.0,1.2+hME,2.8),
	new THREE.Vector3(3.0,1.2+hME,1.7),
	new THREE.Vector3(0.0,1.2+hME,1.7),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['157_3-100_2'] = new THREE.Line(geo['157_3-100_2'], a0);
geo['159_3-100_2'] = new THREE.Geometry();
geo['159_3-100_2'].vertices.push(
	new THREE.Vector3(1.7,1.2+hME,2.8),
	new THREE.Vector3(1.7,1.2+hME,1.75),
	new THREE.Vector3(-0.1,1.2+hME,1.75),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['159_3-100_2'] = new THREE.Line(geo['159_3-100_2'], a0);
geo['161_3-100_2'] = new THREE.Geometry();
geo['161_3-100_2'].vertices.push(
	new THREE.Vector3(0.4,1.2+hME,2.8),
	new THREE.Vector3(0.4,1.2+hME,1.8),
	new THREE.Vector3(-0.2,1.2+hME,1.8),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['161_3-100_2'] = new THREE.Line(geo['161_3-100_2'], a0);
geo['163_3-100_2'] = new THREE.Geometry();
geo['163_3-100_2'].vertices.push(
	new THREE.Vector3(-0.9,1.2+hME,2.8),
	new THREE.Vector3(-0.9,1.2+hME,1.8),
	new THREE.Vector3(-0.3,1.2+hME,1.8),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['163_3-100_2'] = new THREE.Line(geo['163_3-100_2'], a0);
geo['165_3-100_2'] = new THREE.Geometry();
geo['165_3-100_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,2.8),
	new THREE.Vector3(-2.0,1.2+hME,2.8),
	new THREE.Vector3(-2.0,1.2+hME,1.75),
	new THREE.Vector3(-0.4,1.2+hME,1.75),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['165_3-100_2'] = new THREE.Line(geo['165_3-100_2'], a0);
geo['171_3-100_2'] = new THREE.Geometry();
geo['171_3-100_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,0.9),
	new THREE.Vector3(-2.0,1.2+hME,0.9),
	new THREE.Vector3(-2.0,1.2+hME,1.7),
	new THREE.Vector3(-0.5,0.8+hME,1.7),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['171_3-100_2'] = new THREE.Line(geo['171_3-100_2'], a0);
geo['173_3-100_2'] = new THREE.Geometry();
geo['173_3-100_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,0.2),
	new THREE.Vector3(-1.95,0.8+hME,0.2),
	new THREE.Vector3(-1.95,0.8+hME,1.65),
	new THREE.Vector3(-0.6,1.2+hME,1.65),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['173_3-100_2'] = new THREE.Line(geo['173_3-100_2'], a0);
geo['175_3-100_2'] = new THREE.Geometry();
geo['175_3-100_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-0.5),
	new THREE.Vector3(-1.9,1.2+hME,-0.5),
	new THREE.Vector3(-1.9,1.2+hME,1.6),
	new THREE.Vector3(-0.7,1.2+hME,1.6),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['175_3-100_2'] = new THREE.Line(geo['175_3-100_2'], a0);
geo['177_3-100_2'] = new THREE.Geometry();
geo['177_3-100_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-1.2),
	new THREE.Vector3(-1.85,0.8+hME,-1.2),
	new THREE.Vector3(-1.85,0.8+hME,1.55),
	new THREE.Vector3(-0.8,1.2+hME,1.55),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['177_3-100_2'] = new THREE.Line(geo['177_3-100_2'], a0);
geo['179_3-100_2'] = new THREE.Geometry();
geo['179_3-100_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-2.75),
	new THREE.Vector3(-1.8,1.2+hME,-2.75),
	new THREE.Vector3(-1.8,1.2+hME,1.5),
	new THREE.Vector3(-0.9,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['179_3-100_2'] = new THREE.Line(geo['179_3-100_2'], a0);
geo['172_3-100_2'] = new THREE.Geometry();
geo['172_3-100_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0.8+hME,1.45),
	new THREE.Vector3(-1.0,1.2+hME,1.45),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['172_3-100_2'] = new THREE.Line(geo['172_3-100_2'], a0);
geo['176_3-100_2'] = new THREE.Geometry();
geo['176_3-100_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,0.8+hME,-2.0),
	new THREE.Vector3(-1.75,0.8+hME,1.45),
	new THREE.Vector3(-1.0,1.2+hME,1.45),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['176_3-100_2'] = new THREE.Line(geo['176_3-100_2'], a0);
geo['178_3-100_2'] = new THREE.Geometry();
geo['178_3-100_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-3.3),
	new THREE.Vector3(-1.8,1.2+hME,-3.3),
	new THREE.Vector3(-1.8,1.2+hME,1.5),
	new THREE.Vector3(-0.9,1.2+hME,1.5),
	new THREE.Vector3(-0.15,0.8+hME,1.15)
); line['178_3-100_2'] = new THREE.Line(geo['178_3-100_2'], a0);
geo['153_3-100_3'] = new THREE.Geometry();
geo['153_3-100_3'].vertices.push(
	new THREE.Vector3(4.7,1.2+hME,2.8),
	new THREE.Vector3(4.7,1.2+hME,1.65),
	new THREE.Vector3(0.1,1.2+hME,1.65),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['153_3-100_3'] = new THREE.Line(geo['153_3-100_3'], a0);
geo['154_3-100_3'] = new THREE.Geometry();
geo['154_3-100_3'].vertices.push(
	new THREE.Vector3(3.3,1.2+hME,0.7),
	new THREE.Vector3(3.3,1.2+hME,1.6),
	new THREE.Vector3(0.2,1.2+hME,1.6),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['154_3-100_3'] = new THREE.Line(geo['154_3-100_3'], a0);
geo['156_3-100_3'] = new THREE.Geometry();
geo['156_3-100_3'].vertices.push(
	new THREE.Vector3(2.0,1.2+hME,0.7),
	new THREE.Vector3(2.0,1.2+hME,1.55),
	new THREE.Vector3(0.3,1.2+hME,1.55),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['156_3-100_3'] = new THREE.Line(geo['156_3-100_3'], a0);
geo['160_3-100_3'] = new THREE.Geometry();
geo['160_3-100_3'].vertices.push(
	new THREE.Vector3(0.7,1.2+hME,0.7),
	new THREE.Vector3(0.7,1.2+hME,1.5),
	new THREE.Vector3(0.4,1.2+hME,1.5),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['160_3-100_3'] = new THREE.Line(geo['160_3-100_3'], a0);
geo['157_3-100_3'] = new THREE.Geometry();
geo['157_3-100_3'].vertices.push(
	new THREE.Vector3(3.0,1.2+hME,2.8),
	new THREE.Vector3(3.0,1.2+hME,1.7),
	new THREE.Vector3(0.0,1.2+hME,1.7),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['157_3-100_3'] = new THREE.Line(geo['157_3-100_3'], a0);
geo['159_3-100_3'] = new THREE.Geometry();
geo['159_3-100_3'].vertices.push(
	new THREE.Vector3(1.7,1.2+hME,2.8),
	new THREE.Vector3(1.7,1.2+hME,1.75),
	new THREE.Vector3(-0.1,1.2+hME,1.75),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['159_3-100_3'] = new THREE.Line(geo['159_3-100_3'], a0);
geo['161_3-100_3'] = new THREE.Geometry();
geo['161_3-100_3'].vertices.push(
	new THREE.Vector3(0.4,1.2+hME,2.8),
	new THREE.Vector3(0.4,1.2+hME,1.8),
	new THREE.Vector3(-0.2,1.2+hME,1.8),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['161_3-100_3'] = new THREE.Line(geo['161_3-100_3'], a0);
geo['163_3-100_3'] = new THREE.Geometry();
geo['163_3-100_3'].vertices.push(
	new THREE.Vector3(-0.9,1.2+hME,2.8),
	new THREE.Vector3(-0.9,1.2+hME,1.8),
	new THREE.Vector3(-0.3,1.2+hME,1.8),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['163_3-100_3'] = new THREE.Line(geo['163_3-100_3'], a0);
geo['165_3-100_3'] = new THREE.Geometry();
geo['165_3-100_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,2.8),
	new THREE.Vector3(-2.0,1.2+hME,2.8),
	new THREE.Vector3(-2.0,1.2+hME,1.75),
	new THREE.Vector3(-0.4,1.2+hME,1.75),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['165_3-100_3'] = new THREE.Line(geo['165_3-100_3'], a0);
geo['171_3-100_3'] = new THREE.Geometry();
geo['171_3-100_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,0.9),
	new THREE.Vector3(-2.0,1.2+hME,0.9),
	new THREE.Vector3(-2.0,1.2+hME,1.7),
	new THREE.Vector3(-0.5,1.2+hME,1.7),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['171_3-100_3'] = new THREE.Line(geo['171_3-100_3'], a0);
geo['173_3-100_3'] = new THREE.Geometry();
geo['173_3-100_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,0.2),
	new THREE.Vector3(-1.95,1.2+hME,0.2),
	new THREE.Vector3(-1.95,1.2+hME,1.65),
	new THREE.Vector3(-0.6,1.2+hME,1.65),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['173_3-100_3'] = new THREE.Line(geo['173_3-100_3'], a0);
geo['175_3-100_3'] = new THREE.Geometry();
geo['175_3-100_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-0.5),
	new THREE.Vector3(-1.9,1.2+hME,-0.5),
	new THREE.Vector3(-1.9,1.2+hME,1.6),
	new THREE.Vector3(-0.7,1.2+hME,1.6),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['175_3-100_3'] = new THREE.Line(geo['175_3-100_3'], a0);
geo['177_3-100_3'] = new THREE.Geometry();
geo['177_3-100_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-1.2),
	new THREE.Vector3(-1.85,1.2+hME,-1.2),
	new THREE.Vector3(-1.85,1.2+hME,1.55),
	new THREE.Vector3(-0.8,1.2+hME,1.55),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['177_3-100_3'] = new THREE.Line(geo['177_3-100_3'], a0);
geo['179_3-100_3'] = new THREE.Geometry();
geo['179_3-100_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hME,-2.75),
	new THREE.Vector3(-1.8,1.2+hME,-2.75),
	new THREE.Vector3(-1.8,1.2+hME,1.5),
	new THREE.Vector3(-0.9,1.2+hME,1.5),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['179_3-100_3'] = new THREE.Line(geo['179_3-100_3'], a0);
geo['172_3-100_3'] = new THREE.Geometry();
geo['172_3-100_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,1.2+hME,1.45),
	new THREE.Vector3(-1.0,1.2+hME,1.45),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['172_3-100_3'] = new THREE.Line(geo['172_3-100_3'], a0);
geo['176_3-100_3'] = new THREE.Geometry();
geo['176_3-100_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,1.2+hME,-2.0),
	new THREE.Vector3(-1.75,1.2+hME,1.45),
	new THREE.Vector3(-1.0,1.2+hME,1.45),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['176_3-100_3'] = new THREE.Line(geo['176_3-100_3'], a0);
geo['178_3-100_3'] = new THREE.Geometry();
geo['178_3-100_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hME,-3.3),
	new THREE.Vector3(-1.8,1.2+hME,-3.3),
	new THREE.Vector3(-1.8,1.2+hME,1.5),
	new THREE.Vector3(-0.9,1.2+hME,1.5),
	new THREE.Vector3(-0.15,1.2+hME,1.15)
); line['178_3-100_3'] = new THREE.Line(geo['178_3-100_3'], a0);
geo['253_0-200_0'] = new THREE.Geometry();
geo['253_0-200_0'].vertices.push(
	new THREE.Vector3(4.7,0+hS1,2.8),
	new THREE.Vector3(4.7,0+hS1,1.65),
	new THREE.Vector3(0.1,0+hS1,1.65),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['253_0-200_0'] = new THREE.Line(geo['253_0-200_0'], a0);
geo['254_0-200_0'] = new THREE.Geometry();
geo['254_0-200_0'].vertices.push(
	new THREE.Vector3(3.3,0+hS1,0.7),
	new THREE.Vector3(3.3,0+hS1,1.6),
	new THREE.Vector3(0.2,0+hS1,1.6),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['254_0-200_0'] = new THREE.Line(geo['254_0-200_0'], a0);
geo['256_0-200_0'] = new THREE.Geometry();
geo['256_0-200_0'].vertices.push(
	new THREE.Vector3(2.0,0+hS1,0.7),
	new THREE.Vector3(2.0,0+hS1,1.55),
	new THREE.Vector3(0.3,0+hS1,1.55),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['256_0-200_0'] = new THREE.Line(geo['256_0-200_0'], a0);
geo['260_0-200_0'] = new THREE.Geometry();
geo['260_0-200_0'].vertices.push(
	new THREE.Vector3(0.7,0+hS1,0.7),
	new THREE.Vector3(0.7,0+hS1,1.5),
	new THREE.Vector3(0.4,0+hS1,1.5),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['260_0-200_0'] = new THREE.Line(geo['260_0-200_0'], a0);
geo['257_0-200_0'] = new THREE.Geometry();
geo['257_0-200_0'].vertices.push(
	new THREE.Vector3(3.3,0+hS1,2.8),
	new THREE.Vector3(3.3,0+hS1,1.7),
	new THREE.Vector3(0.0,0+hS1,1.7),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['257_0-200_0'] = new THREE.Line(geo['257_0-200_0'], a0);
geo['259_0-200_0'] = new THREE.Geometry();
geo['259_0-200_0'].vertices.push(
	new THREE.Vector3(2.0,0+hS1,2.8),
	new THREE.Vector3(2.0,0+hS1,1.75),
	new THREE.Vector3(-0.1,0+hS1,1.75),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['259_0-200_0'] = new THREE.Line(geo['259_0-200_0'], a0);
geo['261_0-200_0'] = new THREE.Geometry();
geo['261_0-200_0'].vertices.push(
	new THREE.Vector3(0.7,0+hS1,2.8),
	new THREE.Vector3(0.7,0+hS1,1.8),
	new THREE.Vector3(-0.2,0+hS1,1.8),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['261_0-200_0'] = new THREE.Line(geo['261_0-200_0'], a0);
geo['263_0-200_0'] = new THREE.Geometry();
geo['263_0-200_0'].vertices.push(
	new THREE.Vector3(-0.6,0+hS1,2.8),
	new THREE.Vector3(-0.6,0+hS1,1.8),
	new THREE.Vector3(-0.3,0+hS1,1.8),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['263_0-200_0'] = new THREE.Line(geo['263_0-200_0'], a0);
geo['265_0-200_0'] = new THREE.Geometry();
geo['265_0-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS1,2.8),
	new THREE.Vector3(-2.0,0+hS1,2.8),
	new THREE.Vector3(-2.0,0+hS1,1.75),
	new THREE.Vector3(-0.4,0+hS1,1.75),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['265_0-200_0'] = new THREE.Line(geo['265_0-200_0'], a0);
geo['271_0-200_0'] = new THREE.Geometry();
geo['271_0-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS1,0.6),
	new THREE.Vector3(-2.0,0+hS1,0.6),
	new THREE.Vector3(-2.0,0+hS1,1.7),
	new THREE.Vector3(-0.5,0+hS1,1.7),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['271_0-200_0'] = new THREE.Line(geo['271_0-200_0'], a0);
geo['275_0-200_0'] = new THREE.Geometry();
geo['275_0-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS1,-0.7),
	new THREE.Vector3(-1.95,0+hS1,-0.7),
	new THREE.Vector3(-1.95,0+hS1,1.65),
	new THREE.Vector3(-0.6,0+hS1,1.65),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['275_0-200_0'] = new THREE.Line(geo['275_0-200_0'], a0);
geo['277_0-200_0'] = new THREE.Geometry();
geo['277_0-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS1,-2.0),
	new THREE.Vector3(-1.9,0+hS1,-2.0),
	new THREE.Vector3(-1.9,0+hS1,1.6),
	new THREE.Vector3(-0.7,0+hS1,1.6),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['277_0-200_0'] = new THREE.Line(geo['277_0-200_0'], a0);
geo['279_0-200_0'] = new THREE.Geometry();
geo['279_0-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS1,-3.3),
	new THREE.Vector3(-1.85,0+hS1,-3.3),
	new THREE.Vector3(-1.85,0+hS1,1.55),
	new THREE.Vector3(-0.8,0+hS1,1.55),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['279_0-200_0'] = new THREE.Line(geo['279_0-200_0'], a0);
geo['272_0-200_0'] = new THREE.Geometry();
geo['272_0-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hS1,-0.7),
	new THREE.Vector3(-1.7,0+hS1,-0.7),
	new THREE.Vector3(-1.7,0+hS1,1.4),
	new THREE.Vector3(-1.1,0+hS1,1.4),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['272_0-200_0'] = new THREE.Line(geo['272_0-200_0'], a0);
geo['276_0-200_0'] = new THREE.Geometry();
geo['276_0-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hS1,-2.0),
	new THREE.Vector3(-1.75,0+hS1,-2.0),
	new THREE.Vector3(-1.75,0+hS1,1.45),
	new THREE.Vector3(-1.0,0+hS1,1.45),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['276_0-200_0'] = new THREE.Line(geo['276_0-200_0'], a0);
geo['278_0-200_0'] = new THREE.Geometry();
geo['278_0-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hS1,-3.3),
	new THREE.Vector3(-1.8,0+hS1,-3.3),
	new THREE.Vector3(-1.8,0+hS1,1.5),
	new THREE.Vector3(-0.9,0+hS1,1.5),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['278_0-200_0'] = new THREE.Line(geo['278_0-200_0'], a0);
geo['253_1-200_0'] = new THREE.Geometry();
geo['253_1-200_0'].vertices.push(
	new THREE.Vector3(4.7,0.4+hS1,2.8),
	new THREE.Vector3(4.7,0.4+hS1,1.65),
	new THREE.Vector3(0.1,0.4+hS1,1.65),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['253_1-200_0'] = new THREE.Line(geo['253_1-200_0'], a0);
geo['254_1-200_0'] = new THREE.Geometry();
geo['254_1-200_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS1,0.7),
	new THREE.Vector3(3.3,0.4+hS1,1.6),
	new THREE.Vector3(0.2,0.4+hS1,1.6),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['254_1-200_0'] = new THREE.Line(geo['254_1-200_0'], a0);
geo['256_1-200_0'] = new THREE.Geometry();
geo['256_1-200_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS1,0.7),
	new THREE.Vector3(2.0,0.4+hS1,1.55),
	new THREE.Vector3(0.3,0.4+hS1,1.55),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['256_1-200_0'] = new THREE.Line(geo['256_1-200_0'], a0);
geo['260_1-200_0'] = new THREE.Geometry();
geo['260_1-200_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS1,0.7),
	new THREE.Vector3(0.7,0.4+hS1,1.5),
	new THREE.Vector3(0.4,0.4+hS1,1.5),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['260_1-200_0'] = new THREE.Line(geo['260_1-200_0'], a0);
geo['257_1-200_0'] = new THREE.Geometry();
geo['257_1-200_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS1,2.8),
	new THREE.Vector3(3.3,0.4+hS1,1.7),
	new THREE.Vector3(0.0,0.4+hS1,1.7),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['257_1-200_0'] = new THREE.Line(geo['257_1-200_0'], a0);
geo['259_1-200_0'] = new THREE.Geometry();
geo['259_1-200_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS1,2.8),
	new THREE.Vector3(2.0,0.4+hS1,1.75),
	new THREE.Vector3(-0.1,0.4+hS1,1.75),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['259_1-200_0'] = new THREE.Line(geo['259_1-200_0'], a0);
geo['261_1-200_0'] = new THREE.Geometry();
geo['261_1-200_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS1,2.8),
	new THREE.Vector3(0.7,0.4+hS1,1.8),
	new THREE.Vector3(-0.2,0.4+hS1,1.8),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['261_1-200_0'] = new THREE.Line(geo['261_1-200_0'], a0);
geo['263_1-200_0'] = new THREE.Geometry();
geo['263_1-200_0'].vertices.push(
	new THREE.Vector3(-0.6,0.4+hS1,2.8),
	new THREE.Vector3(-0.6,0.4+hS1,1.8),
	new THREE.Vector3(-0.3,0.4+hS1,1.8),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['263_1-200_0'] = new THREE.Line(geo['263_1-200_0'], a0);
geo['265_1-200_0'] = new THREE.Geometry();
geo['265_1-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,2.8),
	new THREE.Vector3(-2.0,0.4+hS1,2.8),
	new THREE.Vector3(-2.0,0.4+hS1,1.75),
	new THREE.Vector3(-0.4,0.4+hS1,1.75),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['265_1-200_0'] = new THREE.Line(geo['265_1-200_0'], a0);
geo['271_1-200_0'] = new THREE.Geometry();
geo['271_1-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,0.6),
	new THREE.Vector3(-2.0,0.4+hS1,0.6),
	new THREE.Vector3(-2.0,0.4+hS1,1.7),
	new THREE.Vector3(-0.5,0.4+hS1,1.7),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['271_1-200_0'] = new THREE.Line(geo['271_1-200_0'], a0);
geo['275_1-200_0'] = new THREE.Geometry();
geo['275_1-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-0.7),
	new THREE.Vector3(-1.95,0.4+hS1,-0.7),
	new THREE.Vector3(-1.95,0.4+hS1,1.65),
	new THREE.Vector3(-0.6,0.4+hS1,1.65),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['275_1-200_0'] = new THREE.Line(geo['275_1-200_0'], a0);
geo['277_1-200_0'] = new THREE.Geometry();
geo['277_1-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-2.0),
	new THREE.Vector3(-1.9,0.4+hS1,-2.0),
	new THREE.Vector3(-1.9,0.4+hS1,1.6),
	new THREE.Vector3(-0.7,0.4+hS1,1.6),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['277_1-200_0'] = new THREE.Line(geo['277_1-200_0'], a0);
geo['279_1-200_0'] = new THREE.Geometry();
geo['279_1-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-3.3),
	new THREE.Vector3(-1.85,0.4+hS1,-3.3),
	new THREE.Vector3(-1.85,0.4+hS1,1.55),
	new THREE.Vector3(-0.8,0.4+hS1,1.55),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['279_1-200_0'] = new THREE.Line(geo['279_1-200_0'], a0);
geo['272_1-200_0'] = new THREE.Geometry();
geo['272_1-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-0.7),
	new THREE.Vector3(-1.7,0.4+hS1,-0.7),
	new THREE.Vector3(-1.7,0.4+hS1,1.4),
	new THREE.Vector3(-1.1,0.4+hS1,1.4),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['272_1-200_0'] = new THREE.Line(geo['272_1-200_0'], a0);
geo['276_1-200_0'] = new THREE.Geometry();
geo['276_1-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-2.0),
	new THREE.Vector3(-1.75,0.4+hS1,-2.0),
	new THREE.Vector3(-1.75,0.4+hS1,1.45),
	new THREE.Vector3(-1.0,0.4+hS1,1.45),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['276_1-200_0'] = new THREE.Line(geo['276_1-200_0'], a0);
geo['278_1-200_0'] = new THREE.Geometry();
geo['278_1-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-3.3),
	new THREE.Vector3(-1.8,0.4+hS1,-3.3),
	new THREE.Vector3(-1.8,0.4+hS1,1.5),
	new THREE.Vector3(-0.9,0.4+hS1,1.5),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['278_1-200_0'] = new THREE.Line(geo['278_1-200_0'], a0);
geo['253_1-200_1'] = new THREE.Geometry();
geo['253_1-200_1'].vertices.push(
	new THREE.Vector3(4.7,0.4+hS1,2.8),
	new THREE.Vector3(4.7,0.4+hS1,1.65),
	new THREE.Vector3(0.1,0.4+hS1,1.65),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['253_1-200_1'] = new THREE.Line(geo['253_1-200_1'], a0);
geo['254_1-200_1'] = new THREE.Geometry();
geo['254_1-200_1'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS1,0.7),
	new THREE.Vector3(3.3,0.4+hS1,1.6),
	new THREE.Vector3(0.2,0.4+hS1,1.6),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['254_1-200_1'] = new THREE.Line(geo['254_1-200_1'], a0);
geo['256_1-200_1'] = new THREE.Geometry();
geo['256_1-200_1'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS1,0.7),
	new THREE.Vector3(2.0,0.4+hS1,1.55),
	new THREE.Vector3(0.3,0.4+hS1,1.55),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['256_1-200_1'] = new THREE.Line(geo['256_1-200_1'], a0);
geo['260_1-200_1'] = new THREE.Geometry();
geo['260_1-200_1'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS1,0.7),
	new THREE.Vector3(0.7,0.4+hS1,1.5),
	new THREE.Vector3(0.4,0.4+hS1,1.5),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['260_1-200_1'] = new THREE.Line(geo['260_1-200_1'], a0);
geo['257_1-200_1'] = new THREE.Geometry();
geo['257_1-200_1'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS1,2.8),
	new THREE.Vector3(3.3,0.4+hS1,1.7),
	new THREE.Vector3(0.0,0.4+hS1,1.7),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['257_1-200_1'] = new THREE.Line(geo['257_1-200_1'], a0);
geo['259_1-200_1'] = new THREE.Geometry();
geo['259_1-200_1'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS1,2.8),
	new THREE.Vector3(2.0,0.4+hS1,1.75),
	new THREE.Vector3(-0.1,0.4+hS1,1.75),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['259_1-200_1'] = new THREE.Line(geo['259_1-200_1'], a0);
geo['261_1-200_1'] = new THREE.Geometry();
geo['261_1-200_1'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS1,2.8),
	new THREE.Vector3(0.7,0.4+hS1,1.8),
	new THREE.Vector3(-0.2,0.4+hS1,1.8),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['261_1-200_1'] = new THREE.Line(geo['261_1-200_1'], a0);
geo['263_1-200_1'] = new THREE.Geometry();
geo['263_1-200_1'].vertices.push(
	new THREE.Vector3(-0.6,0.4+hS1,2.8),
	new THREE.Vector3(-0.6,0.4+hS1,1.8),
	new THREE.Vector3(-0.3,0.4+hS1,1.8),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['263_1-200_1'] = new THREE.Line(geo['263_1-200_1'], a0);
geo['265_1-200_1'] = new THREE.Geometry();
geo['265_1-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,2.8),
	new THREE.Vector3(-2.0,0.4+hS1,2.8),
	new THREE.Vector3(-2.0,0.4+hS1,1.75),
	new THREE.Vector3(-0.4,0.4+hS1,1.75),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['265_1-200_1'] = new THREE.Line(geo['265_1-200_1'], a0);
geo['271_1-200_1'] = new THREE.Geometry();
geo['271_1-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,0.6),
	new THREE.Vector3(-2.0,0.4+hS1,0.6),
	new THREE.Vector3(-2.0,0.4+hS1,1.7),
	new THREE.Vector3(-0.5,0.4+hS1,1.7),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['271_1-200_1'] = new THREE.Line(geo['271_1-200_1'], a0);
geo['275_1-200_1'] = new THREE.Geometry();
geo['275_1-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-0.7),
	new THREE.Vector3(-1.95,0.4+hS1,-0.7),
	new THREE.Vector3(-1.95,0.4+hS1,1.65),
	new THREE.Vector3(-0.6,0.4+hS1,1.65),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['275_1-200_1'] = new THREE.Line(geo['275_1-200_1'], a0);
geo['277_1-200_1'] = new THREE.Geometry();
geo['277_1-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-2.0),
	new THREE.Vector3(-1.9,0.4+hS1,-2.0),
	new THREE.Vector3(-1.9,0.4+hS1,1.6),
	new THREE.Vector3(-0.7,0.4+hS1,1.6),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['277_1-200_1'] = new THREE.Line(geo['277_1-200_1'], a0);
geo['279_1-200_1'] = new THREE.Geometry();
geo['279_1-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS1,-3.3),
	new THREE.Vector3(-1.85,0.4+hS1,-3.3),
	new THREE.Vector3(-1.85,0.4+hS1,1.55),
	new THREE.Vector3(-0.8,0.4+hS1,1.55),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['279_1-200_1'] = new THREE.Line(geo['279_1-200_1'], a0);
geo['272_1-200_1'] = new THREE.Geometry();
geo['272_1-200_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-0.7),
	new THREE.Vector3(-1.7,0.4+hS1,-0.7),
	new THREE.Vector3(-1.7,0.4+hS1,1.4),
	new THREE.Vector3(-1.1,0.4+hS1,1.4),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['272_1-200_1'] = new THREE.Line(geo['272_1-200_1'], a0);
geo['276_1-200_1'] = new THREE.Geometry();
geo['276_1-200_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-2.0),
	new THREE.Vector3(-1.75,0.4+hS1,-2.0),
	new THREE.Vector3(-1.75,0.4+hS1,1.45),
	new THREE.Vector3(-1.0,0.4+hS1,1.45),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['276_1-200_1'] = new THREE.Line(geo['276_1-200_1'], a0);
geo['278_1-200_1'] = new THREE.Geometry();
geo['278_1-200_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS1,-3.3),
	new THREE.Vector3(-1.8,0.4+hS1,-3.3),
	new THREE.Vector3(-1.8,0.4+hS1,1.5),
	new THREE.Vector3(-0.9,0.4+hS1,1.5),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['278_1-200_1'] = new THREE.Line(geo['278_1-200_1'], a0);
geo['253_2-200_0'] = new THREE.Geometry();
geo['253_2-200_0'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS1,2.8),
	new THREE.Vector3(4.7,0.8+hS1,1.65),
	new THREE.Vector3(0.1,0.8+hS1,1.65),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['253_2-200_0'] = new THREE.Line(geo['253_2-200_0'], a0);
geo['254_2-200_0'] = new THREE.Geometry();
geo['254_2-200_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,0.7),
	new THREE.Vector3(3.3,0.8+hS1,1.6),
	new THREE.Vector3(0.2,0.8+hS1,1.6),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['254_2-200_0'] = new THREE.Line(geo['254_2-200_0'], a0);
geo['256_2-200_0'] = new THREE.Geometry();
geo['256_2-200_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,0.7),
	new THREE.Vector3(2.0,0.8+hS1,1.55),
	new THREE.Vector3(0.3,0.8+hS1,1.55),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['256_2-200_0'] = new THREE.Line(geo['256_2-200_0'], a0);
geo['260_2-200_0'] = new THREE.Geometry();
geo['260_2-200_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,0.7),
	new THREE.Vector3(0.7,0.8+hS1,1.5),
	new THREE.Vector3(0.4,0.8+hS1,1.5),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['260_2-200_0'] = new THREE.Line(geo['260_2-200_0'], a0);
geo['257_2-200_0'] = new THREE.Geometry();
geo['257_2-200_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,2.8),
	new THREE.Vector3(3.3,0.8+hS1,1.7),
	new THREE.Vector3(0.0,0.8+hS1,1.7),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['257_2-200_0'] = new THREE.Line(geo['257_2-200_0'], a0);
geo['259_2-200_0'] = new THREE.Geometry();
geo['259_2-200_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,2.8),
	new THREE.Vector3(2.0,0.8+hS1,1.75),
	new THREE.Vector3(-0.1,0.8+hS1,1.75),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['259_2-200_0'] = new THREE.Line(geo['259_2-200_0'], a0);
geo['261_2-200_0'] = new THREE.Geometry();
geo['261_2-200_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,2.8),
	new THREE.Vector3(0.7,0.8+hS1,1.8),
	new THREE.Vector3(-0.2,0.8+hS1,1.8),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['261_2-200_0'] = new THREE.Line(geo['261_2-200_0'], a0);
geo['263_2-200_0'] = new THREE.Geometry();
geo['263_2-200_0'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS1,2.8),
	new THREE.Vector3(-0.6,0.8+hS1,1.8),
	new THREE.Vector3(-0.3,0.8+hS1,1.8),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['263_2-200_0'] = new THREE.Line(geo['263_2-200_0'], a0);
geo['265_2-200_0'] = new THREE.Geometry();
geo['265_2-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,2.8),
	new THREE.Vector3(-2.0,0.8+hS1,2.8),
	new THREE.Vector3(-2.0,0.8+hS1,1.75),
	new THREE.Vector3(-0.4,0.8+hS1,1.75),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['265_2-200_0'] = new THREE.Line(geo['265_2-200_0'], a0);
geo['271_2-200_0'] = new THREE.Geometry();
geo['271_2-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,0.6),
	new THREE.Vector3(-2.0,0.8+hS1,0.6),
	new THREE.Vector3(-2.0,0.8+hS1,1.7),
	new THREE.Vector3(-0.5,0.8+hS1,1.7),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['271_2-200_0'] = new THREE.Line(geo['271_2-200_0'], a0);
geo['275_2-200_0'] = new THREE.Geometry();
geo['275_2-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-0.7),
	new THREE.Vector3(-1.95,0.8+hS1,-0.7),
	new THREE.Vector3(-1.95,0.8+hS1,1.65),
	new THREE.Vector3(-0.6,0.8+hS1,1.65),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['275_2-200_0'] = new THREE.Line(geo['275_2-200_0'], a0);
geo['277_2-200_0'] = new THREE.Geometry();
geo['277_2-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-2.0),
	new THREE.Vector3(-1.9,0.8+hS1,-2.0),
	new THREE.Vector3(-1.9,0.8+hS1,1.6),
	new THREE.Vector3(-0.7,0.8+hS1,1.6),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['277_2-200_0'] = new THREE.Line(geo['277_2-200_0'], a0);
geo['279_2-200_0'] = new THREE.Geometry();
geo['279_2-200_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-3.3),
	new THREE.Vector3(-1.85,0.8+hS1,-3.3),
	new THREE.Vector3(-1.85,0.8+hS1,1.55),
	new THREE.Vector3(-0.8,0.8+hS1,1.55),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['279_2-200_0'] = new THREE.Line(geo['279_2-200_0'], a0);
geo['272_2-200_0'] = new THREE.Geometry();
geo['272_2-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-0.7),
	new THREE.Vector3(-1.7,0.8+hS1,-0.7),
	new THREE.Vector3(-1.7,0.8+hS1,1.4),
	new THREE.Vector3(-1.1,0.8+hS1,1.4),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['272_2-200_0'] = new THREE.Line(geo['272_2-200_0'], a0);
geo['276_2-200_0'] = new THREE.Geometry();
geo['276_2-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-2.0),
	new THREE.Vector3(-1.75,0.8+hS1,-2.0),
	new THREE.Vector3(-1.75,0.8+hS1,1.45),
	new THREE.Vector3(-1.0,0.8+hS1,1.45),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['276_2-200_0'] = new THREE.Line(geo['276_2-200_0'], a0);
geo['278_2-200_0'] = new THREE.Geometry();
geo['278_2-200_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-3.3),
	new THREE.Vector3(-1.8,0.8+hS1,-3.3),
	new THREE.Vector3(-1.8,0.8+hS1,1.5),
	new THREE.Vector3(-0.9,0.8+hS1,1.5),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['278_2-200_0'] = new THREE.Line(geo['278_2-200_0'], a0);
geo['253_2-200_1'] = new THREE.Geometry();
geo['253_2-200_1'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS1,2.8),
	new THREE.Vector3(4.7,0.8+hS1,1.65),
	new THREE.Vector3(0.1,0.8+hS1,1.65),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['253_2-200_1'] = new THREE.Line(geo['253_2-200_1'], a0);
geo['254_2-200_1'] = new THREE.Geometry();
geo['254_2-200_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,0.7),
	new THREE.Vector3(3.3,0.8+hS1,1.6),
	new THREE.Vector3(0.2,0.8+hS1,1.6),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['254_2-200_1'] = new THREE.Line(geo['254_2-200_1'], a0);
geo['256_2-200_1'] = new THREE.Geometry();
geo['256_2-200_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,0.7),
	new THREE.Vector3(2.0,0.8+hS1,1.55),
	new THREE.Vector3(0.3,0.8+hS1,1.55),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['256_2-200_1'] = new THREE.Line(geo['256_2-200_1'], a0);
geo['260_2-200_1'] = new THREE.Geometry();
geo['260_2-200_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,0.7),
	new THREE.Vector3(0.7,0.8+hS1,1.5),
	new THREE.Vector3(0.4,0.8+hS1,1.5),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['260_2-200_1'] = new THREE.Line(geo['260_2-200_1'], a0);
geo['257_2-200_1'] = new THREE.Geometry();
geo['257_2-200_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,2.8),
	new THREE.Vector3(3.3,0.8+hS1,1.7),
	new THREE.Vector3(0.0,0.8+hS1,1.7),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['257_2-200_1'] = new THREE.Line(geo['257_2-200_1'], a0);
geo['259_2-200_1'] = new THREE.Geometry();
geo['259_2-200_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,2.8),
	new THREE.Vector3(2.0,0.8+hS1,1.75),
	new THREE.Vector3(-0.1,0.8+hS1,1.75),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['259_2-200_1'] = new THREE.Line(geo['259_2-200_1'], a0);
geo['261_2-200_1'] = new THREE.Geometry();
geo['261_2-200_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,2.8),
	new THREE.Vector3(0.7,0.8+hS1,1.8),
	new THREE.Vector3(-0.2,0.8+hS1,1.8),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['261_2-200_1'] = new THREE.Line(geo['261_2-200_1'], a0);
geo['263_2-200_1'] = new THREE.Geometry();
geo['263_2-200_1'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS1,2.8),
	new THREE.Vector3(-0.6,0.8+hS1,1.8),
	new THREE.Vector3(-0.3,0.8+hS1,1.8),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['263_2-200_1'] = new THREE.Line(geo['263_2-200_1'], a0);
geo['265_2-200_1'] = new THREE.Geometry();
geo['265_2-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,2.8),
	new THREE.Vector3(-2.0,0.8+hS1,2.8),
	new THREE.Vector3(-2.0,0.8+hS1,1.75),
	new THREE.Vector3(-0.4,0.8+hS1,1.75),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['265_2-200_1'] = new THREE.Line(geo['265_2-200_1'], a0);
geo['271_2-200_1'] = new THREE.Geometry();
geo['271_2-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,0.6),
	new THREE.Vector3(-2.0,0.8+hS1,0.6),
	new THREE.Vector3(-2.0,0.8+hS1,1.7),
	new THREE.Vector3(-0.5,0.8+hS1,1.7),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['271_2-200_1'] = new THREE.Line(geo['271_2-200_1'], a0);
geo['275_2-200_1'] = new THREE.Geometry();
geo['275_2-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-0.7),
	new THREE.Vector3(-1.95,0.8+hS1,-0.7),
	new THREE.Vector3(-1.95,0.8+hS1,1.65),
	new THREE.Vector3(-0.6,0.8+hS1,1.65),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['275_2-200_1'] = new THREE.Line(geo['275_2-200_1'], a0);
geo['277_2-200_1'] = new THREE.Geometry();
geo['277_2-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-2.0),
	new THREE.Vector3(-1.9,0.8+hS1,-2.0),
	new THREE.Vector3(-1.9,0.8+hS1,1.6),
	new THREE.Vector3(-0.7,0.8+hS1,1.6),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['277_2-200_1'] = new THREE.Line(geo['277_2-200_1'], a0);
geo['279_2-200_1'] = new THREE.Geometry();
geo['279_2-200_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-3.3),
	new THREE.Vector3(-1.85,0.8+hS1,-3.3),
	new THREE.Vector3(-1.85,0.8+hS1,1.55),
	new THREE.Vector3(-0.8,0.8+hS1,1.55),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['279_2-200_1'] = new THREE.Line(geo['279_2-200_1'], a0);
geo['272_2-200_1'] = new THREE.Geometry();
geo['272_2-200_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-0.7),
	new THREE.Vector3(-1.7,0.8+hS1,-0.7),
	new THREE.Vector3(-1.7,0.8+hS1,1.4),
	new THREE.Vector3(-1.1,0.8+hS1,1.4),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['272_2-200_1'] = new THREE.Line(geo['272_2-200_1'], a0);
geo['276_2-200_1'] = new THREE.Geometry();
geo['276_2-200_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-2.0),
	new THREE.Vector3(-1.75,0.8+hS1,-2.0),
	new THREE.Vector3(-1.75,0.8+hS1,1.45),
	new THREE.Vector3(-1.0,0.8+hS1,1.45),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['276_2-200_1'] = new THREE.Line(geo['276_2-200_1'], a0);
geo['278_2-200_1'] = new THREE.Geometry();
geo['278_2-200_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-3.3),
	new THREE.Vector3(-1.8,0.8+hS1,-3.3),
	new THREE.Vector3(-1.8,0.8+hS1,1.5),
	new THREE.Vector3(-0.9,0.8+hS1,1.5),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['278_2-200_1'] = new THREE.Line(geo['278_2-200_1'], a0);
geo['253_2-200_2'] = new THREE.Geometry();
geo['253_2-200_2'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS1,2.8),
	new THREE.Vector3(4.7,0.8+hS1,1.65),
	new THREE.Vector3(0.1,0.8+hS1,1.65),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['253_2-200_2'] = new THREE.Line(geo['253_2-200_2'], a0);
geo['254_2-200_2'] = new THREE.Geometry();
geo['254_2-200_2'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,0.7),
	new THREE.Vector3(3.3,0.8+hS1,1.6),
	new THREE.Vector3(0.2,0.8+hS1,1.6),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['254_2-200_2'] = new THREE.Line(geo['254_2-200_2'], a0);
geo['256_2-200_2'] = new THREE.Geometry();
geo['256_2-200_2'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,0.7),
	new THREE.Vector3(2.0,0.8+hS1,1.55),
	new THREE.Vector3(0.3,0.8+hS1,1.55),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['256_2-200_2'] = new THREE.Line(geo['256_2-200_2'], a0);
geo['260_2-200_2'] = new THREE.Geometry();
geo['260_2-200_2'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,0.7),
	new THREE.Vector3(0.7,0.8+hS1,1.5),
	new THREE.Vector3(0.4,0.8+hS1,1.5),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['260_2-200_2'] = new THREE.Line(geo['260_2-200_2'], a0);
geo['257_2-200_2'] = new THREE.Geometry();
geo['257_2-200_2'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS1,2.8),
	new THREE.Vector3(3.3,0.8+hS1,1.7),
	new THREE.Vector3(0.0,0.8+hS1,1.7),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['257_2-200_2'] = new THREE.Line(geo['257_2-200_2'], a0);
geo['259_2-200_2'] = new THREE.Geometry();
geo['259_2-200_2'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS1,2.8),
	new THREE.Vector3(2.0,0.8+hS1,1.75),
	new THREE.Vector3(-0.1,0.8+hS1,1.75),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['259_2-200_2'] = new THREE.Line(geo['259_2-200_2'], a0);
geo['261_2-200_2'] = new THREE.Geometry();
geo['261_2-200_2'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS1,2.8),
	new THREE.Vector3(0.7,0.8+hS1,1.8),
	new THREE.Vector3(-0.2,0.8+hS1,1.8),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['261_2-200_2'] = new THREE.Line(geo['261_2-200_2'], a0);
geo['263_2-200_2'] = new THREE.Geometry();
geo['263_2-200_2'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS1,2.8),
	new THREE.Vector3(-0.6,0.8+hS1,1.8),
	new THREE.Vector3(-0.3,0.8+hS1,1.8),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['263_2-200_2'] = new THREE.Line(geo['263_2-200_2'], a0);
geo['265_2-200_2'] = new THREE.Geometry();
geo['265_2-200_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,2.8),
	new THREE.Vector3(-2.0,0.8+hS1,2.8),
	new THREE.Vector3(-2.0,0.8+hS1,1.75),
	new THREE.Vector3(-0.4,0.8+hS1,1.75),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['265_2-200_2'] = new THREE.Line(geo['265_2-200_2'], a0);
geo['271_2-200_2'] = new THREE.Geometry();
geo['271_2-200_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,0.6),
	new THREE.Vector3(-2.0,0.8+hS1,0.6),
	new THREE.Vector3(-2.0,0.8+hS1,1.7),
	new THREE.Vector3(-0.5,0.8+hS1,1.7),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['271_2-200_2'] = new THREE.Line(geo['271_2-200_2'], a0);
geo['275_2-200_2'] = new THREE.Geometry();
geo['275_2-200_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-0.7),
	new THREE.Vector3(-1.95,0.8+hS1,-0.7),
	new THREE.Vector3(-1.95,0.8+hS1,1.65),
	new THREE.Vector3(-0.6,0.8+hS1,1.65),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['275_2-200_2'] = new THREE.Line(geo['275_2-200_2'], a0);
geo['277_2-200_2'] = new THREE.Geometry();
geo['277_2-200_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-2.0),
	new THREE.Vector3(-1.9,0.8+hS1,-2.0),
	new THREE.Vector3(-1.9,0.8+hS1,1.6),
	new THREE.Vector3(-0.7,0.8+hS1,1.6),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['277_2-200_2'] = new THREE.Line(geo['277_2-200_2'], a0);
geo['279_2-200_2'] = new THREE.Geometry();
geo['279_2-200_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS1,-3.3),
	new THREE.Vector3(-1.85,0.8+hS1,-3.3),
	new THREE.Vector3(-1.85,0.8+hS1,1.55),
	new THREE.Vector3(-0.8,0.8+hS1,1.55),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['279_2-200_2'] = new THREE.Line(geo['279_2-200_2'], a0);
geo['272_2-200_2'] = new THREE.Geometry();
geo['272_2-200_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-0.7),
	new THREE.Vector3(-1.7,0.8+hS1,-0.7),
	new THREE.Vector3(-1.7,0.8+hS1,1.4),
	new THREE.Vector3(-1.1,0.8+hS1,1.4),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['272_2-200_2'] = new THREE.Line(geo['272_2-200_2'], a0);
geo['276_2-200_2'] = new THREE.Geometry();
geo['276_2-200_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-2.0),
	new THREE.Vector3(-1.75,0.8+hS1,-2.0),
	new THREE.Vector3(-1.75,0.8+hS1,1.45),
	new THREE.Vector3(-1.0,0.8+hS1,1.45),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['276_2-200_2'] = new THREE.Line(geo['276_2-200_2'], a0);
geo['278_2-200_2'] = new THREE.Geometry();
geo['278_2-200_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS1,-3.3),
	new THREE.Vector3(-1.8,0.8+hS1,-3.3),
	new THREE.Vector3(-1.8,0.8+hS1,1.5),
	new THREE.Vector3(-0.9,0.8+hS1,1.5),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['278_2-200_2'] = new THREE.Line(geo['278_2-200_2'], a0);
geo['253_3-200_0'] = new THREE.Geometry();
geo['253_3-200_0'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS1,2.8),
	new THREE.Vector3(4.7,1.2+hS1,1.65),
	new THREE.Vector3(0.1,1.2+hS1,1.65),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['253_3-200_0'] = new THREE.Line(geo['253_3-200_0'], a0);
geo['254_3-200_0'] = new THREE.Geometry();
geo['254_3-200_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,0.7),
	new THREE.Vector3(3.3,1.2+hS1,1.6),
	new THREE.Vector3(0.2,1.2+hS1,1.6),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['254_3-200_0'] = new THREE.Line(geo['254_3-200_0'], a0);
geo['256_3-200_0'] = new THREE.Geometry();
geo['256_3-200_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,0.7),
	new THREE.Vector3(2.0,1.2+hS1,1.55),
	new THREE.Vector3(0.3,1.2+hS1,1.55),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['256_3-200_0'] = new THREE.Line(geo['256_3-200_0'], a0);
geo['260_3-200_0'] = new THREE.Geometry();
geo['260_3-200_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,0.7),
	new THREE.Vector3(0.7,1.2+hS1,1.5),
	new THREE.Vector3(0.4,1.2+hS1,1.5),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['260_3-200_0'] = new THREE.Line(geo['260_3-200_0'], a0);
geo['257_3-200_0'] = new THREE.Geometry();
geo['257_3-200_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,2.8),
	new THREE.Vector3(3.3,1.2+hS1,1.7),
	new THREE.Vector3(0.0,1.2+hS1,1.7),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['257_3-200_0'] = new THREE.Line(geo['257_3-200_0'], a0);
geo['259_3-200_0'] = new THREE.Geometry();
geo['259_3-200_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,2.8),
	new THREE.Vector3(2.0,1.2+hS1,1.75),
	new THREE.Vector3(-0.1,1.2+hS1,1.75),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['259_3-200_0'] = new THREE.Line(geo['259_3-200_0'], a0);
geo['261_3-200_0'] = new THREE.Geometry();
geo['261_3-200_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,2.8),
	new THREE.Vector3(0.7,1.2+hS1,1.8),
	new THREE.Vector3(-0.2,1.2+hS1,1.8),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['261_3-200_0'] = new THREE.Line(geo['261_3-200_0'], a0);
geo['263_3-200_0'] = new THREE.Geometry();
geo['263_3-200_0'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS1,2.8),
	new THREE.Vector3(-0.6,1.2+hS1,1.8),
	new THREE.Vector3(-0.3,1.2+hS1,1.8),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['263_3-200_0'] = new THREE.Line(geo['263_3-200_0'], a0);
geo['265_3-200_0'] = new THREE.Geometry();
geo['265_3-200_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,2.8),
	new THREE.Vector3(-2.0,1.2+hS1,2.8),
	new THREE.Vector3(-2.0,1.2+hS1,1.75),
	new THREE.Vector3(-0.4,1.2+hS1,1.75),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['265_3-200_0'] = new THREE.Line(geo['265_3-200_0'], a0);
geo['271_3-200_0'] = new THREE.Geometry();
geo['271_3-200_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,0.6),
	new THREE.Vector3(-2.0,1.2+hS1,0.6),
	new THREE.Vector3(-2.0,1.2+hS1,1.7),
	new THREE.Vector3(-0.5,1.2+hS1,1.7),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['271_3-200_0'] = new THREE.Line(geo['271_3-200_0'], a0);
geo['275_3-200_0'] = new THREE.Geometry();
geo['275_3-200_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-0.7),
	new THREE.Vector3(-1.95,1.2+hS1,-0.7),
	new THREE.Vector3(-1.95,1.2+hS1,1.65),
	new THREE.Vector3(-0.6,1.2+hS1,1.65),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['275_3-200_0'] = new THREE.Line(geo['275_3-200_0'], a0);
geo['277_3-200_0'] = new THREE.Geometry();
geo['277_3-200_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-2.0),
	new THREE.Vector3(-1.9,1.2+hS1,-2.0),
	new THREE.Vector3(-1.9,1.2+hS1,1.6),
	new THREE.Vector3(-0.7,1.2+hS1,1.6),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['277_3-200_0'] = new THREE.Line(geo['277_3-200_0'], a0);
geo['279_3-200_0'] = new THREE.Geometry();
geo['279_3-200_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-3.3),
	new THREE.Vector3(-1.85,1.2+hS1,-3.3),
	new THREE.Vector3(-1.85,1.2+hS1,1.55),
	new THREE.Vector3(-0.8,1.2+hS1,1.55),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['279_3-200_0'] = new THREE.Line(geo['279_3-200_0'], a0);
geo['272_3-200_0'] = new THREE.Geometry();
geo['272_3-200_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-0.7),
	new THREE.Vector3(-1.7,1.2+hS1,-0.7),
	new THREE.Vector3(-1.7,1.2+hS1,1.4),
	new THREE.Vector3(-1.1,1.2+hS1,1.4),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['272_3-200_0'] = new THREE.Line(geo['272_3-200_0'], a0);
geo['276_3-200_0'] = new THREE.Geometry();
geo['276_3-200_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-2.0),
	new THREE.Vector3(-1.75,1.2+hS1,-2.0),
	new THREE.Vector3(-1.75,1.2+hS1,1.45),
	new THREE.Vector3(-1.0,1.2+hS1,1.45),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['276_3-200_0'] = new THREE.Line(geo['276_3-200_0'], a0);
geo['278_3-200_0'] = new THREE.Geometry();
geo['278_3-200_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-3.3),
	new THREE.Vector3(-1.8,1.2+hS1,-3.3),
	new THREE.Vector3(-1.8,1.2+hS1,1.5),
	new THREE.Vector3(-0.9,1.2+hS1,1.5),
	new THREE.Vector3(-0.15,0+hS1,1.15)
); line['278_3-200_0'] = new THREE.Line(geo['278_3-200_0'], a0);
geo['253_3-200_1'] = new THREE.Geometry();
geo['253_3-200_1'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS1,2.8),
	new THREE.Vector3(4.7,1.2+hS1,1.65),
	new THREE.Vector3(0.1,1.2+hS1,1.65),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['253_3-200_1'] = new THREE.Line(geo['253_3-200_1'], a0);
geo['254_3-200_1'] = new THREE.Geometry();
geo['254_3-200_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,0.7),
	new THREE.Vector3(3.3,1.2+hS1,1.6),
	new THREE.Vector3(0.2,1.2+hS1,1.6),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['254_3-200_1'] = new THREE.Line(geo['254_3-200_1'], a0);
geo['256_3-200_1'] = new THREE.Geometry();
geo['256_3-200_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,0.7),
	new THREE.Vector3(2.0,1.2+hS1,1.55),
	new THREE.Vector3(0.3,1.2+hS1,1.55),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['256_3-200_1'] = new THREE.Line(geo['256_3-200_1'], a0);
geo['260_3-200_1'] = new THREE.Geometry();
geo['260_3-200_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,0.7),
	new THREE.Vector3(0.7,1.2+hS1,1.5),
	new THREE.Vector3(0.4,1.2+hS1,1.5),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['260_3-200_1'] = new THREE.Line(geo['260_3-200_1'], a0);
geo['257_3-200_1'] = new THREE.Geometry();
geo['257_3-200_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,2.8),
	new THREE.Vector3(3.3,1.2+hS1,1.7),
	new THREE.Vector3(0.0,1.2+hS1,1.7),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['257_3-200_1'] = new THREE.Line(geo['257_3-200_1'], a0);
geo['259_3-200_1'] = new THREE.Geometry();
geo['259_3-200_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,2.8),
	new THREE.Vector3(2.0,1.2+hS1,1.75),
	new THREE.Vector3(-0.1,1.2+hS1,1.75),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['259_3-200_1'] = new THREE.Line(geo['259_3-200_1'], a0);
geo['261_3-200_1'] = new THREE.Geometry();
geo['261_3-200_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,2.8),
	new THREE.Vector3(0.7,1.2+hS1,1.8),
	new THREE.Vector3(-0.2,1.2+hS1,1.8),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['261_3-200_1'] = new THREE.Line(geo['261_3-200_1'], a0);
geo['263_3-200_1'] = new THREE.Geometry();
geo['263_3-200_1'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS1,2.8),
	new THREE.Vector3(-0.6,1.2+hS1,1.8),
	new THREE.Vector3(-0.3,1.2+hS1,1.8),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['263_3-200_1'] = new THREE.Line(geo['263_3-200_1'], a0);
geo['265_3-200_1'] = new THREE.Geometry();
geo['265_3-200_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,2.8),
	new THREE.Vector3(-2.0,1.2+hS1,2.8),
	new THREE.Vector3(-2.0,1.2+hS1,1.75),
	new THREE.Vector3(-0.4,1.2+hS1,1.75),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['265_3-200_1'] = new THREE.Line(geo['265_3-200_1'], a0);
geo['271_3-200_1'] = new THREE.Geometry();
geo['271_3-200_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,0.6),
	new THREE.Vector3(-2.0,1.2+hS1,0.6),
	new THREE.Vector3(-2.0,1.2+hS1,1.7),
	new THREE.Vector3(-0.5,1.2+hS1,1.7),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['271_3-200_1'] = new THREE.Line(geo['271_3-200_1'], a0);
geo['275_3-200_1'] = new THREE.Geometry();
geo['275_3-200_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-0.7),
	new THREE.Vector3(-1.95,1.2+hS1,-0.7),
	new THREE.Vector3(-1.95,1.2+hS1,1.65),
	new THREE.Vector3(-0.6,1.2+hS1,1.65),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['275_3-200_1'] = new THREE.Line(geo['275_3-200_1'], a0);
geo['277_3-200_1'] = new THREE.Geometry();
geo['277_3-200_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-2.0),
	new THREE.Vector3(-1.9,1.2+hS1,-2.0),
	new THREE.Vector3(-1.9,1.2+hS1,1.6),
	new THREE.Vector3(-0.7,1.2+hS1,1.6),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['277_3-200_1'] = new THREE.Line(geo['277_3-200_1'], a0);
geo['279_3-200_1'] = new THREE.Geometry();
geo['279_3-200_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-3.3),
	new THREE.Vector3(-1.85,1.2+hS1,-3.3),
	new THREE.Vector3(-1.85,1.2+hS1,1.55),
	new THREE.Vector3(-0.8,1.2+hS1,1.55),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['279_3-200_1'] = new THREE.Line(geo['279_3-200_1'], a0);
geo['272_3-200_1'] = new THREE.Geometry();
geo['272_3-200_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-0.7),
	new THREE.Vector3(-1.7,1.2+hS1,-0.7),
	new THREE.Vector3(-1.7,1.2+hS1,1.4),
	new THREE.Vector3(-1.1,1.2+hS1,1.4),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['272_3-200_1'] = new THREE.Line(geo['272_3-200_1'], a0);
geo['276_3-200_1'] = new THREE.Geometry();
geo['276_3-200_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-2.0),
	new THREE.Vector3(-1.75,1.2+hS1,-2.0),
	new THREE.Vector3(-1.75,1.2+hS1,1.45),
	new THREE.Vector3(-1.0,1.2+hS1,1.45),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['276_3-200_1'] = new THREE.Line(geo['276_3-200_1'], a0);
geo['278_3-200_1'] = new THREE.Geometry();
geo['278_3-200_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-3.3),
	new THREE.Vector3(-1.8,1.2+hS1,-3.3),
	new THREE.Vector3(-1.8,1.2+hS1,1.5),
	new THREE.Vector3(-0.9,1.2+hS1,1.5),
	new THREE.Vector3(-0.15,0.4+hS1,1.15)
); line['278_3-200_1'] = new THREE.Line(geo['278_3-200_1'], a0);
geo['253_3-200_2'] = new THREE.Geometry();
geo['253_3-200_2'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS1,2.8),
	new THREE.Vector3(4.7,1.2+hS1,1.65),
	new THREE.Vector3(0.1,1.2+hS1,1.65),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['253_3-200_2'] = new THREE.Line(geo['253_3-200_2'], a0);
geo['254_3-200_2'] = new THREE.Geometry();
geo['254_3-200_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,0.7),
	new THREE.Vector3(3.3,1.2+hS1,1.6),
	new THREE.Vector3(0.2,1.2+hS1,1.6),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['254_3-200_2'] = new THREE.Line(geo['254_3-200_2'], a0);
geo['256_3-200_2'] = new THREE.Geometry();
geo['256_3-200_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,0.7),
	new THREE.Vector3(2.0,1.2+hS1,1.55),
	new THREE.Vector3(0.3,1.2+hS1,1.55),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['256_3-200_2'] = new THREE.Line(geo['256_3-200_2'], a0);
geo['260_3-200_2'] = new THREE.Geometry();
geo['260_3-200_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,0.7),
	new THREE.Vector3(0.7,1.2+hS1,1.5),
	new THREE.Vector3(0.4,1.2+hS1,1.5),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['260_3-200_2'] = new THREE.Line(geo['260_3-200_2'], a0);
geo['257_3-200_2'] = new THREE.Geometry();
geo['257_3-200_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,2.8),
	new THREE.Vector3(3.3,1.2+hS1,1.7),
	new THREE.Vector3(0.0,1.2+hS1,1.7),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['257_3-200_2'] = new THREE.Line(geo['257_3-200_2'], a0);
geo['259_3-200_2'] = new THREE.Geometry();
geo['259_3-200_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,2.8),
	new THREE.Vector3(2.0,1.2+hS1,1.75),
	new THREE.Vector3(-0.1,1.2+hS1,1.75),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['259_3-200_2'] = new THREE.Line(geo['259_3-200_2'], a0);
geo['261_3-200_2'] = new THREE.Geometry();
geo['261_3-200_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,2.8),
	new THREE.Vector3(0.7,1.2+hS1,1.8),
	new THREE.Vector3(-0.2,1.2+hS1,1.8),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['261_3-200_2'] = new THREE.Line(geo['261_3-200_2'], a0);
geo['263_3-200_2'] = new THREE.Geometry();
geo['263_3-200_2'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS1,2.8),
	new THREE.Vector3(-0.6,1.2+hS1,1.8),
	new THREE.Vector3(-0.3,1.2+hS1,1.8),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['263_3-200_2'] = new THREE.Line(geo['263_3-200_2'], a0);
geo['265_3-200_2'] = new THREE.Geometry();
geo['265_3-200_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,2.8),
	new THREE.Vector3(-2.0,1.2+hS1,2.8),
	new THREE.Vector3(-2.0,1.2+hS1,1.75),
	new THREE.Vector3(-0.4,1.2+hS1,1.75),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['265_3-200_2'] = new THREE.Line(geo['265_3-200_2'], a0);
geo['271_3-200_2'] = new THREE.Geometry();
geo['271_3-200_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,0.6),
	new THREE.Vector3(-2.0,1.2+hS1,0.6),
	new THREE.Vector3(-2.0,1.2+hS1,1.7),
	new THREE.Vector3(-0.5,1.2+hS1,1.7),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['271_3-200_2'] = new THREE.Line(geo['271_3-200_2'], a0);
geo['275_3-200_2'] = new THREE.Geometry();
geo['275_3-200_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-0.7),
	new THREE.Vector3(-1.95,1.2+hS1,-0.7),
	new THREE.Vector3(-1.95,1.2+hS1,1.65),
	new THREE.Vector3(-0.6,1.2+hS1,1.65),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['275_3-200_2'] = new THREE.Line(geo['275_3-200_2'], a0);
geo['277_3-200_2'] = new THREE.Geometry();
geo['277_3-200_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-2.0),
	new THREE.Vector3(-1.9,1.2+hS1,-2.0),
	new THREE.Vector3(-1.9,1.2+hS1,1.6),
	new THREE.Vector3(-0.7,1.2+hS1,1.6),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['277_3-200_2'] = new THREE.Line(geo['277_3-200_2'], a0);
geo['279_3-200_2'] = new THREE.Geometry();
geo['279_3-200_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-3.3),
	new THREE.Vector3(-1.85,1.2+hS1,-3.3),
	new THREE.Vector3(-1.85,1.2+hS1,1.55),
	new THREE.Vector3(-0.8,1.2+hS1,1.55),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['279_3-200_2'] = new THREE.Line(geo['279_3-200_2'], a0);
geo['272_3-200_2'] = new THREE.Geometry();
geo['272_3-200_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-0.7),
	new THREE.Vector3(-1.7,1.2+hS1,-0.7),
	new THREE.Vector3(-1.7,1.2+hS1,1.4),
	new THREE.Vector3(-1.1,1.2+hS1,1.4),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['272_3-200_2'] = new THREE.Line(geo['272_3-200_2'], a0);
geo['276_3-200_2'] = new THREE.Geometry();
geo['276_3-200_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-2.0),
	new THREE.Vector3(-1.75,1.2+hS1,-2.0),
	new THREE.Vector3(-1.75,1.2+hS1,1.45),
	new THREE.Vector3(-1.0,1.2+hS1,1.45),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['276_3-200_2'] = new THREE.Line(geo['276_3-200_2'], a0);
geo['278_3-200_2'] = new THREE.Geometry();
geo['278_3-200_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-3.3),
	new THREE.Vector3(-1.8,1.2+hS1,-3.3),
	new THREE.Vector3(-1.8,1.2+hS1,1.5),
	new THREE.Vector3(-0.9,1.2+hS1,1.5),
	new THREE.Vector3(-0.15,0.8+hS1,1.15)
); line['278_3-200_2'] = new THREE.Line(geo['278_3-200_2'], a0);
geo['253_3-200_3'] = new THREE.Geometry();
geo['253_3-200_3'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS1,2.8),
	new THREE.Vector3(4.7,1.2+hS1,1.65),
	new THREE.Vector3(0.1,1.2+hS1,1.65),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['253_3-200_3'] = new THREE.Line(geo['253_3-200_3'], a0);
geo['254_3-200_3'] = new THREE.Geometry();
geo['254_3-200_3'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,0.7),
	new THREE.Vector3(3.3,1.2+hS1,1.6),
	new THREE.Vector3(0.2,1.2+hS1,1.6),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['254_3-200_3'] = new THREE.Line(geo['254_3-200_3'], a0);
geo['256_3-200_3'] = new THREE.Geometry();
geo['256_3-200_3'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,0.7),
	new THREE.Vector3(2.0,1.2+hS1,1.55),
	new THREE.Vector3(0.3,1.2+hS1,1.55),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['256_3-200_3'] = new THREE.Line(geo['256_3-200_3'], a0);
geo['260_3-200_3'] = new THREE.Geometry();
geo['260_3-200_3'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,0.7),
	new THREE.Vector3(0.7,1.2+hS1,1.5),
	new THREE.Vector3(0.4,1.2+hS1,1.5),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['260_3-200_3'] = new THREE.Line(geo['260_3-200_3'], a0);
geo['257_3-200_3'] = new THREE.Geometry();
geo['257_3-200_3'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS1,2.8),
	new THREE.Vector3(3.3,1.2+hS1,1.7),
	new THREE.Vector3(0.0,1.2+hS1,1.7),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['257_3-200_3'] = new THREE.Line(geo['257_3-200_3'], a0);
geo['259_3-200_3'] = new THREE.Geometry();
geo['259_3-200_3'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS1,2.8),
	new THREE.Vector3(2.0,1.2+hS1,1.75),
	new THREE.Vector3(-0.1,1.2+hS1,1.75),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['259_3-200_3'] = new THREE.Line(geo['259_3-200_3'], a0);
geo['261_3-200_3'] = new THREE.Geometry();
geo['261_3-200_3'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS1,2.8),
	new THREE.Vector3(0.7,1.2+hS1,1.8),
	new THREE.Vector3(-0.2,1.2+hS1,1.8),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['261_3-200_3'] = new THREE.Line(geo['261_3-200_3'], a0);
geo['263_3-200_3'] = new THREE.Geometry();
geo['263_3-200_3'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS1,2.8),
	new THREE.Vector3(-0.6,1.2+hS1,1.8),
	new THREE.Vector3(-0.3,1.2+hS1,1.8),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['263_3-200_3'] = new THREE.Line(geo['263_3-200_3'], a0);
geo['265_3-200_3'] = new THREE.Geometry();
geo['265_3-200_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,2.8),
	new THREE.Vector3(-2.0,1.2+hS1,2.8),
	new THREE.Vector3(-2.0,1.2+hS1,1.75),
	new THREE.Vector3(-0.4,1.2+hS1,1.75),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['265_3-200_3'] = new THREE.Line(geo['265_3-200_3'], a0);
geo['271_3-200_3'] = new THREE.Geometry();
geo['271_3-200_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,0.6),
	new THREE.Vector3(-2.0,1.2+hS1,0.6),
	new THREE.Vector3(-2.0,1.2+hS1,1.7),
	new THREE.Vector3(-0.5,1.2+hS1,1.7),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['271_3-200_3'] = new THREE.Line(geo['271_3-200_3'], a0);
geo['275_3-200_3'] = new THREE.Geometry();
geo['275_3-200_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-0.7),
	new THREE.Vector3(-1.95,1.2+hS1,-0.7),
	new THREE.Vector3(-1.95,1.2+hS1,1.65),
	new THREE.Vector3(-0.6,1.2+hS1,1.65),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['275_3-200_3'] = new THREE.Line(geo['275_3-200_3'], a0);
geo['277_3-200_3'] = new THREE.Geometry();
geo['277_3-200_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-2.0),
	new THREE.Vector3(-1.9,1.2+hS1,-2.0),
	new THREE.Vector3(-1.9,1.2+hS1,1.6),
	new THREE.Vector3(-0.7,1.2+hS1,1.6),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['277_3-200_3'] = new THREE.Line(geo['277_3-200_3'], a0);
geo['279_3-200_3'] = new THREE.Geometry();
geo['279_3-200_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS1,-3.3),
	new THREE.Vector3(-1.85,1.2+hS1,-3.3),
	new THREE.Vector3(-1.85,1.2+hS1,1.55),
	new THREE.Vector3(-0.8,1.2+hS1,1.55),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['279_3-200_3'] = new THREE.Line(geo['279_3-200_3'], a0);
geo['272_3-200_3'] = new THREE.Geometry();
geo['272_3-200_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-0.7),
	new THREE.Vector3(-1.7,1.2+hS1,-0.7),
	new THREE.Vector3(-1.7,1.2+hS1,1.4),
	new THREE.Vector3(-1.1,1.2+hS1,1.4),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['272_3-200_3'] = new THREE.Line(geo['272_3-200_3'], a0);
geo['276_3-200_3'] = new THREE.Geometry();
geo['276_3-200_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-2.0),
	new THREE.Vector3(-1.75,1.2+hS1,-2.0),
	new THREE.Vector3(-1.75,1.2+hS1,1.45),
	new THREE.Vector3(-1.0,1.2+hS1,1.45),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['276_3-200_3'] = new THREE.Line(geo['276_3-200_3'], a0);
geo['278_3-200_3'] = new THREE.Geometry();
geo['278_3-200_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS1,-3.3),
	new THREE.Vector3(-1.8,1.2+hS1,-3.3),
	new THREE.Vector3(-1.8,1.2+hS1,1.5),
	new THREE.Vector3(-0.9,1.2+hS1,1.5),
	new THREE.Vector3(-0.15,1.2+hS1,1.15)
); line['278_3-200_3'] = new THREE.Line(geo['278_3-200_3'], a0);
geo['353_0-300_0'] = new THREE.Geometry();
geo['353_0-300_0'].vertices.push(
	new THREE.Vector3(4.7,0+hS2,2.8),
	new THREE.Vector3(4.7,0+hS2,1.65),
	new THREE.Vector3(0.1,0+hS2,1.65),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['353_0-300_0'] = new THREE.Line(geo['353_0-300_0'], a0);
geo['354_0-300_0'] = new THREE.Geometry();
geo['354_0-300_0'].vertices.push(
	new THREE.Vector3(3.3,0+hS2,0.7),
	new THREE.Vector3(3.3,0+hS2,1.6),
	new THREE.Vector3(0.2,0+hS2,1.6),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['354_0-300_0'] = new THREE.Line(geo['354_0-300_0'], a0);
geo['356_0-300_0'] = new THREE.Geometry();
geo['356_0-300_0'].vertices.push(
	new THREE.Vector3(2.0,0+hS2,0.7),
	new THREE.Vector3(2.0,0+hS2,1.55),
	new THREE.Vector3(0.3,0+hS2,1.55),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['356_0-300_0'] = new THREE.Line(geo['356_0-300_0'], a0);
geo['360_0-300_0'] = new THREE.Geometry();
geo['360_0-300_0'].vertices.push(
	new THREE.Vector3(0.7,0+hS2,0.7),
	new THREE.Vector3(0.7,0+hS2,1.5),
	new THREE.Vector3(0.4,0+hS2,1.5),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['360_0-300_0'] = new THREE.Line(geo['360_0-300_0'], a0);
geo['357_0-300_0'] = new THREE.Geometry();
geo['357_0-300_0'].vertices.push(
	new THREE.Vector3(3.3,0+hS2,2.8),
	new THREE.Vector3(3.3,0+hS2,1.7),
	new THREE.Vector3(0.0,0+hS2,1.7),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['357_0-300_0'] = new THREE.Line(geo['357_0-300_0'], a0);
geo['359_0-300_0'] = new THREE.Geometry();
geo['359_0-300_0'].vertices.push(
	new THREE.Vector3(2.0,0+hS2,2.8),
	new THREE.Vector3(2.0,0+hS2,1.75),
	new THREE.Vector3(-0.1,0+hS2,1.75),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['359_0-300_0'] = new THREE.Line(geo['359_0-300_0'], a0);
geo['361_0-300_0'] = new THREE.Geometry();
geo['361_0-300_0'].vertices.push(
	new THREE.Vector3(0.7,0+hS2,2.8),
	new THREE.Vector3(0.7,0+hS2,1.8),
	new THREE.Vector3(-0.2,0+hS2,1.8),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['361_0-300_0'] = new THREE.Line(geo['361_0-300_0'], a0);
geo['363_0-300_0'] = new THREE.Geometry();
geo['363_0-300_0'].vertices.push(
	new THREE.Vector3(-0.6,0+hS2,2.8),
	new THREE.Vector3(-0.6,0+hS2,1.8),
	new THREE.Vector3(-0.3,0+hS2,1.8),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['363_0-300_0'] = new THREE.Line(geo['363_0-300_0'], a0);
geo['365_0-300_0'] = new THREE.Geometry();
geo['365_0-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS2,2.8),
	new THREE.Vector3(-2.0,0+hS2,2.8),
	new THREE.Vector3(-2.0,0+hS2,1.75),
	new THREE.Vector3(-0.4,0+hS2,1.75),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['365_0-300_0'] = new THREE.Line(geo['365_0-300_0'], a0);
geo['371_0-300_0'] = new THREE.Geometry();
geo['371_0-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS2,0.6),
	new THREE.Vector3(-2.0,0+hS2,0.6),
	new THREE.Vector3(-2.0,0+hS2,1.7),
	new THREE.Vector3(-0.5,0+hS2,1.7),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['371_0-300_0'] = new THREE.Line(geo['371_0-300_0'], a0);
geo['375_0-300_0'] = new THREE.Geometry();
geo['375_0-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS2,-0.7),
	new THREE.Vector3(-1.95,0+hS2,-0.7),
	new THREE.Vector3(-1.95,0+hS2,1.65),
	new THREE.Vector3(-0.6,0+hS2,1.65),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['375_0-300_0'] = new THREE.Line(geo['375_0-300_0'], a0);
geo['377_0-300_0'] = new THREE.Geometry();
geo['377_0-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS2,-2.0),
	new THREE.Vector3(-1.9,0+hS2,-2.0),
	new THREE.Vector3(-1.9,0+hS2,1.6),
	new THREE.Vector3(-0.7,0+hS2,1.6),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['377_0-300_0'] = new THREE.Line(geo['377_0-300_0'], a0);
geo['379_0-300_0'] = new THREE.Geometry();
geo['379_0-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0+hS2,-3.3),
	new THREE.Vector3(-1.85,0+hS2,-3.3),
	new THREE.Vector3(-1.85,0+hS2,1.55),
	new THREE.Vector3(-0.8,0+hS2,1.55),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['379_0-300_0'] = new THREE.Line(geo['379_0-300_0'], a0);
geo['372_0-300_0'] = new THREE.Geometry();
geo['372_0-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hS2,-0.7),
	new THREE.Vector3(-1.7,0+hS2,-0.7),
	new THREE.Vector3(-1.7,0+hS2,1.4),
	new THREE.Vector3(-1.1,0+hS2,1.4),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['372_0-300_0'] = new THREE.Line(geo['372_0-300_0'], a0);
geo['376_0-300_0'] = new THREE.Geometry();
geo['376_0-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hS2,-2.0),
	new THREE.Vector3(-1.75,0+hS2,-2.0),
	new THREE.Vector3(-1.75,0+hS2,1.45),
	new THREE.Vector3(-1.0,0+hS2,1.45),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['376_0-300_0'] = new THREE.Line(geo['376_0-300_0'], a0);
geo['378_0-300_0'] = new THREE.Geometry();
geo['378_0-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0+hS2,-3.3),
	new THREE.Vector3(-1.8,0+hS2,-3.3),
	new THREE.Vector3(-1.8,0+hS2,1.5),
	new THREE.Vector3(-0.9,0+hS2,1.5),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['378_0-300_0'] = new THREE.Line(geo['378_0-300_0'], a0);
geo['353_1-300_0'] = new THREE.Geometry();
geo['353_1-300_0'].vertices.push(
	new THREE.Vector3(4.7,0.4+hS2,2.8),
	new THREE.Vector3(4.7,0.4+hS2,1.65),
	new THREE.Vector3(0.1,0.4+hS2,1.65),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['353_1-300_0'] = new THREE.Line(geo['353_1-300_0'], a0);
geo['354_1-300_0'] = new THREE.Geometry();
geo['354_1-300_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS2,0.7),
	new THREE.Vector3(3.3,0.4+hS2,1.6),
	new THREE.Vector3(0.2,0.4+hS2,1.6),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['354_1-300_0'] = new THREE.Line(geo['354_1-300_0'], a0);
geo['356_1-300_0'] = new THREE.Geometry();
geo['356_1-300_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS2,0.7),
	new THREE.Vector3(2.0,0.4+hS2,1.55),
	new THREE.Vector3(0.3,0.4+hS2,1.55),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['356_1-300_0'] = new THREE.Line(geo['356_1-300_0'], a0);
geo['360_1-300_0'] = new THREE.Geometry();
geo['360_1-300_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS2,0.7),
	new THREE.Vector3(0.7,0.4+hS2,1.5),
	new THREE.Vector3(0.4,0.4+hS2,1.5),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['360_1-300_0'] = new THREE.Line(geo['360_1-300_0'], a0);
geo['357_1-300_0'] = new THREE.Geometry();
geo['357_1-300_0'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS2,2.8),
	new THREE.Vector3(3.3,0.4+hS2,1.7),
	new THREE.Vector3(0.0,0.4+hS2,1.7),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['357_1-300_0'] = new THREE.Line(geo['357_1-300_0'], a0);
geo['359_1-300_0'] = new THREE.Geometry();
geo['359_1-300_0'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS2,2.8),
	new THREE.Vector3(2.0,0.4+hS2,1.75),
	new THREE.Vector3(-0.1,0.4+hS2,1.75),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['359_1-300_0'] = new THREE.Line(geo['359_1-300_0'], a0);
geo['361_1-300_0'] = new THREE.Geometry();
geo['361_1-300_0'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS2,2.8),
	new THREE.Vector3(0.7,0.4+hS2,1.8),
	new THREE.Vector3(-0.2,0.4+hS2,1.8),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['361_1-300_0'] = new THREE.Line(geo['361_1-300_0'], a0);
geo['363_1-300_0'] = new THREE.Geometry();
geo['363_1-300_0'].vertices.push(
	new THREE.Vector3(-0.6,0.4+hS2,2.8),
	new THREE.Vector3(-0.6,0.4+hS2,1.8),
	new THREE.Vector3(-0.3,0.4+hS2,1.8),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['363_1-300_0'] = new THREE.Line(geo['363_1-300_0'], a0);
geo['365_1-300_0'] = new THREE.Geometry();
geo['365_1-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,2.8),
	new THREE.Vector3(-2.0,0.4+hS2,2.8),
	new THREE.Vector3(-2.0,0.4+hS2,1.75),
	new THREE.Vector3(-0.4,0.4+hS2,1.75),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['365_1-300_0'] = new THREE.Line(geo['365_1-300_0'], a0);
geo['371_1-300_0'] = new THREE.Geometry();
geo['371_1-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,0.6),
	new THREE.Vector3(-2.0,0.4+hS2,0.6),
	new THREE.Vector3(-2.0,0.4+hS2,1.7),
	new THREE.Vector3(-0.5,0.4+hS2,1.7),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['371_1-300_0'] = new THREE.Line(geo['371_1-300_0'], a0);
geo['375_1-300_0'] = new THREE.Geometry();
geo['375_1-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-0.7),
	new THREE.Vector3(-1.95,0.4+hS2,-0.7),
	new THREE.Vector3(-1.95,0.4+hS2,1.65),
	new THREE.Vector3(-0.6,0.4+hS2,1.65),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['375_1-300_0'] = new THREE.Line(geo['375_1-300_0'], a0);
geo['377_1-300_0'] = new THREE.Geometry();
geo['377_1-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-2.0),
	new THREE.Vector3(-1.9,0.4+hS2,-2.0),
	new THREE.Vector3(-1.9,0.4+hS2,1.6),
	new THREE.Vector3(-0.7,0.4+hS2,1.6),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['377_1-300_0'] = new THREE.Line(geo['377_1-300_0'], a0);
geo['379_1-300_0'] = new THREE.Geometry();
geo['379_1-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-3.3),
	new THREE.Vector3(-1.85,0.4+hS2,-3.3),
	new THREE.Vector3(-1.85,0.4+hS2,1.55),
	new THREE.Vector3(-0.8,0.4+hS2,1.55),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['379_1-300_0'] = new THREE.Line(geo['379_1-300_0'], a0);
geo['372_1-300_0'] = new THREE.Geometry();
geo['372_1-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-0.7),
	new THREE.Vector3(-1.7,0.4+hS2,-0.7),
	new THREE.Vector3(-1.7,0.4+hS2,1.4),
	new THREE.Vector3(-1.1,0.4+hS2,1.4),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['372_1-300_0'] = new THREE.Line(geo['372_1-300_0'], a0);
geo['376_1-300_0'] = new THREE.Geometry();
geo['376_1-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-2.0),
	new THREE.Vector3(-1.75,0.4+hS2,-2.0),
	new THREE.Vector3(-1.75,0.4+hS2,1.45),
	new THREE.Vector3(-1.0,0.4+hS2,1.45),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['376_1-300_0'] = new THREE.Line(geo['376_1-300_0'], a0);
geo['378_1-300_0'] = new THREE.Geometry();
geo['378_1-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-3.3),
	new THREE.Vector3(-1.8,0.4+hS2,-3.3),
	new THREE.Vector3(-1.8,0.4+hS2,1.5),
	new THREE.Vector3(-0.9,0.4+hS2,1.5),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['378_1-300_0'] = new THREE.Line(geo['378_1-300_0'], a0);
geo['353_1-300_1'] = new THREE.Geometry();
geo['353_1-300_1'].vertices.push(
	new THREE.Vector3(4.7,0.4+hS2,2.8),
	new THREE.Vector3(4.7,0.4+hS2,1.65),
	new THREE.Vector3(0.1,0.4+hS2,1.65),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['353_1-300_1'] = new THREE.Line(geo['353_1-300_1'], a0);
geo['354_1-300_1'] = new THREE.Geometry();
geo['354_1-300_1'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS2,0.7),
	new THREE.Vector3(3.3,0.4+hS2,1.6),
	new THREE.Vector3(0.2,0.4+hS2,1.6),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['354_1-300_1'] = new THREE.Line(geo['354_1-300_1'], a0);
geo['356_1-300_1'] = new THREE.Geometry();
geo['356_1-300_1'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS2,0.7),
	new THREE.Vector3(2.0,0.4+hS2,1.55),
	new THREE.Vector3(0.3,0.4+hS2,1.55),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['356_1-300_1'] = new THREE.Line(geo['356_1-300_1'], a0);
geo['360_1-300_1'] = new THREE.Geometry();
geo['360_1-300_1'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS2,0.7),
	new THREE.Vector3(0.7,0.4+hS2,1.5),
	new THREE.Vector3(0.4,0.4+hS2,1.5),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['360_1-300_1'] = new THREE.Line(geo['360_1-300_1'], a0);
geo['357_1-300_1'] = new THREE.Geometry();
geo['357_1-300_1'].vertices.push(
	new THREE.Vector3(3.3,0.4+hS2,2.8),
	new THREE.Vector3(3.3,0.4+hS2,1.7),
	new THREE.Vector3(0.0,0.4+hS2,1.7),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['357_1-300_1'] = new THREE.Line(geo['357_1-300_1'], a0);
geo['359_1-300_1'] = new THREE.Geometry();
geo['359_1-300_1'].vertices.push(
	new THREE.Vector3(2.0,0.4+hS2,2.8),
	new THREE.Vector3(2.0,0.4+hS2,1.75),
	new THREE.Vector3(-0.1,0.4+hS2,1.75),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['359_1-300_1'] = new THREE.Line(geo['359_1-300_1'], a0);
geo['361_1-300_1'] = new THREE.Geometry();
geo['361_1-300_1'].vertices.push(
	new THREE.Vector3(0.7,0.4+hS2,2.8),
	new THREE.Vector3(0.7,0.4+hS2,1.8),
	new THREE.Vector3(-0.2,0.4+hS2,1.8),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['361_1-300_1'] = new THREE.Line(geo['361_1-300_1'], a0);
geo['363_1-300_1'] = new THREE.Geometry();
geo['363_1-300_1'].vertices.push(
	new THREE.Vector3(-0.6,0.4+hS2,2.8),
	new THREE.Vector3(-0.6,0.4+hS2,1.8),
	new THREE.Vector3(-0.3,0.4+hS2,1.8),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['363_1-300_1'] = new THREE.Line(geo['363_1-300_1'], a0);
geo['365_1-300_1'] = new THREE.Geometry();
geo['365_1-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,2.8),
	new THREE.Vector3(-2.0,0.4+hS2,2.8),
	new THREE.Vector3(-2.0,0.4+hS2,1.75),
	new THREE.Vector3(-0.4,0.4+hS2,1.75),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['365_1-300_1'] = new THREE.Line(geo['365_1-300_1'], a0);
geo['371_1-300_1'] = new THREE.Geometry();
geo['371_1-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,0.6),
	new THREE.Vector3(-2.0,0.4+hS2,0.6),
	new THREE.Vector3(-2.0,0.4+hS2,1.7),
	new THREE.Vector3(-0.5,0.4+hS2,1.7),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['371_1-300_1'] = new THREE.Line(geo['371_1-300_1'], a0);
geo['375_1-300_1'] = new THREE.Geometry();
geo['375_1-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-0.7),
	new THREE.Vector3(-1.95,0.4+hS2,-0.7),
	new THREE.Vector3(-1.95,0.4+hS2,1.65),
	new THREE.Vector3(-0.6,0.4+hS2,1.65),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['375_1-300_1'] = new THREE.Line(geo['375_1-300_1'], a0);
geo['377_1-300_1'] = new THREE.Geometry();
geo['377_1-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-2.0),
	new THREE.Vector3(-1.9,0.4+hS2,-2.0),
	new THREE.Vector3(-1.9,0.4+hS2,1.6),
	new THREE.Vector3(-0.7,0.4+hS2,1.6),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['377_1-300_1'] = new THREE.Line(geo['377_1-300_1'], a0);
geo['379_1-300_1'] = new THREE.Geometry();
geo['379_1-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.4+hS2,-3.3),
	new THREE.Vector3(-1.85,0.4+hS2,-3.3),
	new THREE.Vector3(-1.85,0.4+hS2,1.55),
	new THREE.Vector3(-0.8,0.4+hS2,1.55),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['379_1-300_1'] = new THREE.Line(geo['379_1-300_1'], a0);
geo['372_1-300_1'] = new THREE.Geometry();
geo['372_1-300_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-0.7),
	new THREE.Vector3(-1.7,0.4+hS2,-0.7),
	new THREE.Vector3(-1.7,0.4+hS2,1.4),
	new THREE.Vector3(-1.1,0.4+hS2,1.4),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['372_1-300_1'] = new THREE.Line(geo['372_1-300_1'], a0);
geo['376_1-300_1'] = new THREE.Geometry();
geo['376_1-300_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-2.0),
	new THREE.Vector3(-1.75,0.4+hS2,-2.0),
	new THREE.Vector3(-1.75,0.4+hS2,1.45),
	new THREE.Vector3(-1.0,0.4+hS2,1.45),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['376_1-300_1'] = new THREE.Line(geo['376_1-300_1'], a0);
geo['378_1-300_1'] = new THREE.Geometry();
geo['378_1-300_1'].vertices.push(
	new THREE.Vector3(-0.7,0.4+hS2,-3.3),
	new THREE.Vector3(-1.8,0.4+hS2,-3.3),
	new THREE.Vector3(-1.8,0.4+hS2,1.5),
	new THREE.Vector3(-0.9,0.4+hS2,1.5),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['378_1-300_1'] = new THREE.Line(geo['378_1-300_1'], a0);
geo['353_2-300_0'] = new THREE.Geometry();
geo['353_2-300_0'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS2,2.8),
	new THREE.Vector3(4.7,0.8+hS2,1.65),
	new THREE.Vector3(0.1,0.8+hS2,1.65),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['353_2-300_0'] = new THREE.Line(geo['353_2-300_0'], a0);
geo['354_2-300_0'] = new THREE.Geometry();
geo['354_2-300_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,0.7),
	new THREE.Vector3(3.3,0.8+hS2,1.6),
	new THREE.Vector3(0.2,0.8+hS2,1.6),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['354_2-300_0'] = new THREE.Line(geo['354_2-300_0'], a0);
geo['356_2-300_0'] = new THREE.Geometry();
geo['356_2-300_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,0.7),
	new THREE.Vector3(2.0,0.8+hS2,1.55),
	new THREE.Vector3(0.3,0.8+hS2,1.55),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['356_2-300_0'] = new THREE.Line(geo['356_2-300_0'], a0);
geo['360_2-300_0'] = new THREE.Geometry();
geo['360_2-300_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,0.7),
	new THREE.Vector3(0.7,0.8+hS2,1.5),
	new THREE.Vector3(0.4,0.8+hS2,1.5),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['360_2-300_0'] = new THREE.Line(geo['360_2-300_0'], a0);
geo['357_2-300_0'] = new THREE.Geometry();
geo['357_2-300_0'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,2.8),
	new THREE.Vector3(3.3,0.8+hS2,1.7),
	new THREE.Vector3(0.0,0.8+hS2,1.7),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['357_2-300_0'] = new THREE.Line(geo['357_2-300_0'], a0);
geo['359_2-300_0'] = new THREE.Geometry();
geo['359_2-300_0'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,2.8),
	new THREE.Vector3(2.0,0.8+hS2,1.75),
	new THREE.Vector3(-0.1,0.8+hS2,1.75),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['359_2-300_0'] = new THREE.Line(geo['359_2-300_0'], a0);
geo['361_2-300_0'] = new THREE.Geometry();
geo['361_2-300_0'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,2.8),
	new THREE.Vector3(0.7,0.8+hS2,1.8),
	new THREE.Vector3(-0.2,0.8+hS2,1.8),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['361_2-300_0'] = new THREE.Line(geo['361_2-300_0'], a0);
geo['363_2-300_0'] = new THREE.Geometry();
geo['363_2-300_0'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS2,2.8),
	new THREE.Vector3(-0.6,0.8+hS2,1.8),
	new THREE.Vector3(-0.3,0.8+hS2,1.8),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['363_2-300_0'] = new THREE.Line(geo['363_2-300_0'], a0);
geo['365_2-300_0'] = new THREE.Geometry();
geo['365_2-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,2.8),
	new THREE.Vector3(-2.0,0.8+hS2,2.8),
	new THREE.Vector3(-2.0,0.8+hS2,1.75),
	new THREE.Vector3(-0.4,0.8+hS2,1.75),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['365_2-300_0'] = new THREE.Line(geo['365_2-300_0'], a0);
geo['371_2-300_0'] = new THREE.Geometry();
geo['371_2-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,0.6),
	new THREE.Vector3(-2.0,0.8+hS2,0.6),
	new THREE.Vector3(-2.0,0.8+hS2,1.7),
	new THREE.Vector3(-0.5,0.8+hS2,1.7),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['371_2-300_0'] = new THREE.Line(geo['371_2-300_0'], a0);
geo['375_2-300_0'] = new THREE.Geometry();
geo['375_2-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-0.7),
	new THREE.Vector3(-1.95,0.8+hS2,-0.7),
	new THREE.Vector3(-1.95,0.8+hS2,1.65),
	new THREE.Vector3(-0.6,0.8+hS2,1.65),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['375_2-300_0'] = new THREE.Line(geo['375_2-300_0'], a0);
geo['377_2-300_0'] = new THREE.Geometry();
geo['377_2-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-2.0),
	new THREE.Vector3(-1.9,0.8+hS2,-2.0),
	new THREE.Vector3(-1.9,0.8+hS2,1.6),
	new THREE.Vector3(-0.7,0.8+hS2,1.6),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['377_2-300_0'] = new THREE.Line(geo['377_2-300_0'], a0);
geo['379_2-300_0'] = new THREE.Geometry();
geo['379_2-300_0'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-3.3),
	new THREE.Vector3(-1.85,0.8+hS2,-3.3),
	new THREE.Vector3(-1.85,0.8+hS2,1.55),
	new THREE.Vector3(-0.8,0.8+hS2,1.55),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['379_2-300_0'] = new THREE.Line(geo['379_2-300_0'], a0);
geo['372_2-300_0'] = new THREE.Geometry();
geo['372_2-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-0.7),
	new THREE.Vector3(-1.7,0.8+hS2,-0.7),
	new THREE.Vector3(-1.7,0.8+hS2,1.4),
	new THREE.Vector3(-1.1,0.8+hS2,1.4),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['372_2-300_0'] = new THREE.Line(geo['372_2-300_0'], a0);
geo['376_2-300_0'] = new THREE.Geometry();
geo['376_2-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-2.0),
	new THREE.Vector3(-1.75,0.8+hS2,-2.0),
	new THREE.Vector3(-1.75,0.8+hS2,1.45),
	new THREE.Vector3(-1.0,0.8+hS2,1.45),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['376_2-300_0'] = new THREE.Line(geo['376_2-300_0'], a0);
geo['378_2-300_0'] = new THREE.Geometry();
geo['378_2-300_0'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-3.3),
	new THREE.Vector3(-1.8,0.8+hS2,-3.3),
	new THREE.Vector3(-1.8,0.8+hS2,1.5),
	new THREE.Vector3(-0.9,0.8+hS2,1.5),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['378_2-300_0'] = new THREE.Line(geo['378_2-300_0'], a0);
geo['353_2-300_1'] = new THREE.Geometry();
geo['353_2-300_1'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS2,2.8),
	new THREE.Vector3(4.7,0.8+hS2,1.65),
	new THREE.Vector3(0.1,0.8+hS2,1.65),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['353_2-300_1'] = new THREE.Line(geo['353_2-300_1'], a0);
geo['354_2-300_1'] = new THREE.Geometry();
geo['354_2-300_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,0.7),
	new THREE.Vector3(3.3,0.8+hS2,1.6),
	new THREE.Vector3(0.2,0.8+hS2,1.6),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['354_2-300_1'] = new THREE.Line(geo['354_2-300_1'], a0);
geo['356_2-300_1'] = new THREE.Geometry();
geo['356_2-300_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,0.7),
	new THREE.Vector3(2.0,0.8+hS2,1.55),
	new THREE.Vector3(0.3,0.8+hS2,1.55),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['356_2-300_1'] = new THREE.Line(geo['356_2-300_1'], a0);
geo['360_2-300_1'] = new THREE.Geometry();
geo['360_2-300_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,0.7),
	new THREE.Vector3(0.7,0.8+hS2,1.5),
	new THREE.Vector3(0.4,0.8+hS2,1.5),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['360_2-300_1'] = new THREE.Line(geo['360_2-300_1'], a0);
geo['357_2-300_1'] = new THREE.Geometry();
geo['357_2-300_1'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,2.8),
	new THREE.Vector3(3.3,0.8+hS2,1.7),
	new THREE.Vector3(0.0,0.8+hS2,1.7),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['357_2-300_1'] = new THREE.Line(geo['357_2-300_1'], a0);
geo['359_2-300_1'] = new THREE.Geometry();
geo['359_2-300_1'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,2.8),
	new THREE.Vector3(2.0,0.8+hS2,1.75),
	new THREE.Vector3(-0.1,0.8+hS2,1.75),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['359_2-300_1'] = new THREE.Line(geo['359_2-300_1'], a0);
geo['361_2-300_1'] = new THREE.Geometry();
geo['361_2-300_1'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,2.8),
	new THREE.Vector3(0.7,0.8+hS2,1.8),
	new THREE.Vector3(-0.2,0.8+hS2,1.8),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['361_2-300_1'] = new THREE.Line(geo['361_2-300_1'], a0);
geo['363_2-300_1'] = new THREE.Geometry();
geo['363_2-300_1'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS2,2.8),
	new THREE.Vector3(-0.6,0.8+hS2,1.8),
	new THREE.Vector3(-0.3,0.8+hS2,1.8),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['363_2-300_1'] = new THREE.Line(geo['363_2-300_1'], a0);
geo['365_2-300_1'] = new THREE.Geometry();
geo['365_2-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,2.8),
	new THREE.Vector3(-2.0,0.8+hS2,2.8),
	new THREE.Vector3(-2.0,0.8+hS2,1.75),
	new THREE.Vector3(-0.4,0.8+hS2,1.75),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['365_2-300_1'] = new THREE.Line(geo['365_2-300_1'], a0);
geo['371_2-300_1'] = new THREE.Geometry();
geo['371_2-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,0.6),
	new THREE.Vector3(-2.0,0.8+hS2,0.6),
	new THREE.Vector3(-2.0,0.8+hS2,1.7),
	new THREE.Vector3(-0.5,0.8+hS2,1.7),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['371_2-300_1'] = new THREE.Line(geo['371_2-300_1'], a0);
geo['375_2-300_1'] = new THREE.Geometry();
geo['375_2-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-0.7),
	new THREE.Vector3(-1.95,0.8+hS2,-0.7),
	new THREE.Vector3(-1.95,0.8+hS2,1.65),
	new THREE.Vector3(-0.6,0.8+hS2,1.65),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['375_2-300_1'] = new THREE.Line(geo['375_2-300_1'], a0);
geo['377_2-300_1'] = new THREE.Geometry();
geo['377_2-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-2.0),
	new THREE.Vector3(-1.9,0.8+hS2,-2.0),
	new THREE.Vector3(-1.9,0.8+hS2,1.6),
	new THREE.Vector3(-0.7,0.8+hS2,1.6),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['377_2-300_1'] = new THREE.Line(geo['377_2-300_1'], a0);
geo['379_2-300_1'] = new THREE.Geometry();
geo['379_2-300_1'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-3.3),
	new THREE.Vector3(-1.85,0.8+hS2,-3.3),
	new THREE.Vector3(-1.85,0.8+hS2,1.55),
	new THREE.Vector3(-0.8,0.8+hS2,1.55),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['379_2-300_1'] = new THREE.Line(geo['379_2-300_1'], a0);
geo['372_2-300_1'] = new THREE.Geometry();
geo['372_2-300_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-0.7),
	new THREE.Vector3(-1.7,0.8+hS2,-0.7),
	new THREE.Vector3(-1.7,0.8+hS2,1.4),
	new THREE.Vector3(-1.1,0.8+hS2,1.4),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['372_2-300_1'] = new THREE.Line(geo['372_2-300_1'], a0);
geo['376_2-300_1'] = new THREE.Geometry();
geo['376_2-300_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-2.0),
	new THREE.Vector3(-1.75,0.8+hS2,-2.0),
	new THREE.Vector3(-1.75,0.8+hS2,1.45),
	new THREE.Vector3(-1.0,0.8+hS2,1.45),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['376_2-300_1'] = new THREE.Line(geo['376_2-300_1'], a0);
geo['378_2-300_1'] = new THREE.Geometry();
geo['378_2-300_1'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-3.3),
	new THREE.Vector3(-1.8,0.8+hS2,-3.3),
	new THREE.Vector3(-1.8,0.8+hS2,1.5),
	new THREE.Vector3(-0.9,0.8+hS2,1.5),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['378_2-300_1'] = new THREE.Line(geo['378_2-300_1'], a0);
geo['353_2-300_2'] = new THREE.Geometry();
geo['353_2-300_2'].vertices.push(
	new THREE.Vector3(4.7,0.8+hS2,2.8),
	new THREE.Vector3(4.7,0.8+hS2,1.65),
	new THREE.Vector3(0.1,0.8+hS2,1.65),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['353_2-300_2'] = new THREE.Line(geo['353_2-300_2'], a0);
geo['354_2-300_2'] = new THREE.Geometry();
geo['354_2-300_2'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,0.7),
	new THREE.Vector3(3.3,0.8+hS2,1.6),
	new THREE.Vector3(0.2,0.8+hS2,1.6),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['354_2-300_2'] = new THREE.Line(geo['354_2-300_2'], a0);
geo['356_2-300_2'] = new THREE.Geometry();
geo['356_2-300_2'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,0.7),
	new THREE.Vector3(2.0,0.8+hS2,1.55),
	new THREE.Vector3(0.3,0.8+hS2,1.55),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['356_2-300_2'] = new THREE.Line(geo['356_2-300_2'], a0);
geo['360_2-300_2'] = new THREE.Geometry();
geo['360_2-300_2'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,0.7),
	new THREE.Vector3(0.7,0.8+hS2,1.5),
	new THREE.Vector3(0.4,0.8+hS2,1.5),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['360_2-300_2'] = new THREE.Line(geo['360_2-300_2'], a0);
geo['357_2-300_2'] = new THREE.Geometry();
geo['357_2-300_2'].vertices.push(
	new THREE.Vector3(3.3,0.8+hS2,2.8),
	new THREE.Vector3(3.3,0.8+hS2,1.7),
	new THREE.Vector3(0.0,0.8+hS2,1.7),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['357_2-300_2'] = new THREE.Line(geo['357_2-300_2'], a0);
geo['359_2-300_2'] = new THREE.Geometry();
geo['359_2-300_2'].vertices.push(
	new THREE.Vector3(2.0,0.8+hS2,2.8),
	new THREE.Vector3(2.0,0.8+hS2,1.75),
	new THREE.Vector3(-0.1,0.8+hS2,1.75),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['359_2-300_2'] = new THREE.Line(geo['359_2-300_2'], a0);
geo['361_2-300_2'] = new THREE.Geometry();
geo['361_2-300_2'].vertices.push(
	new THREE.Vector3(0.7,0.8+hS2,2.8),
	new THREE.Vector3(0.7,0.8+hS2,1.8),
	new THREE.Vector3(-0.2,0.8+hS2,1.8),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['361_2-300_2'] = new THREE.Line(geo['361_2-300_2'], a0);
geo['363_2-300_2'] = new THREE.Geometry();
geo['363_2-300_2'].vertices.push(
	new THREE.Vector3(-0.6,0.8+hS2,2.8),
	new THREE.Vector3(-0.6,0.8+hS2,1.8),
	new THREE.Vector3(-0.3,0.8+hS2,1.8),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['363_2-300_2'] = new THREE.Line(geo['363_2-300_2'], a0);
geo['365_2-300_2'] = new THREE.Geometry();
geo['365_2-300_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,2.8),
	new THREE.Vector3(-2.0,0.8+hS2,2.8),
	new THREE.Vector3(-2.0,0.8+hS2,1.75),
	new THREE.Vector3(-0.4,0.8+hS2,1.75),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['365_2-300_2'] = new THREE.Line(geo['365_2-300_2'], a0);
geo['371_2-300_2'] = new THREE.Geometry();
geo['371_2-300_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,0.6),
	new THREE.Vector3(-2.0,0.8+hS2,0.6),
	new THREE.Vector3(-2.0,0.8+hS2,1.7),
	new THREE.Vector3(-0.5,0.8+hS2,1.7),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['371_2-300_2'] = new THREE.Line(geo['371_2-300_2'], a0);
geo['375_2-300_2'] = new THREE.Geometry();
geo['375_2-300_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-0.7),
	new THREE.Vector3(-1.95,0.8+hS2,-0.7),
	new THREE.Vector3(-1.95,0.8+hS2,1.65),
	new THREE.Vector3(-0.6,0.8+hS2,1.65),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['375_2-300_2'] = new THREE.Line(geo['375_2-300_2'], a0);
geo['377_2-300_2'] = new THREE.Geometry();
geo['377_2-300_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-2.0),
	new THREE.Vector3(-1.9,0.8+hS2,-2.0),
	new THREE.Vector3(-1.9,0.8+hS2,1.6),
	new THREE.Vector3(-0.7,0.8+hS2,1.6),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['377_2-300_2'] = new THREE.Line(geo['377_2-300_2'], a0);
geo['379_2-300_2'] = new THREE.Geometry();
geo['379_2-300_2'].vertices.push(
	new THREE.Vector3(-2.8,0.8+hS2,-3.3),
	new THREE.Vector3(-1.85,0.8+hS2,-3.3),
	new THREE.Vector3(-1.85,0.8+hS2,1.55),
	new THREE.Vector3(-0.8,0.8+hS2,1.55),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['379_2-300_2'] = new THREE.Line(geo['379_2-300_2'], a0);
geo['372_2-300_2'] = new THREE.Geometry();
geo['372_2-300_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-0.7),
	new THREE.Vector3(-1.7,0.8+hS2,-0.7),
	new THREE.Vector3(-1.7,0.8+hS2,1.4),
	new THREE.Vector3(-1.1,0.8+hS2,1.4),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['372_2-300_2'] = new THREE.Line(geo['372_2-300_2'], a0);
geo['376_2-300_2'] = new THREE.Geometry();
geo['376_2-300_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-2.0),
	new THREE.Vector3(-1.75,0.8+hS2,-2.0),
	new THREE.Vector3(-1.75,0.8+hS2,1.45),
	new THREE.Vector3(-1.0,0.8+hS2,1.45),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['376_2-300_2'] = new THREE.Line(geo['376_2-300_2'], a0);
geo['378_2-300_2'] = new THREE.Geometry();
geo['378_2-300_2'].vertices.push(
	new THREE.Vector3(-0.7,0.8+hS2,-3.3),
	new THREE.Vector3(-1.8,0.8+hS2,-3.3),
	new THREE.Vector3(-1.8,0.8+hS2,1.5),
	new THREE.Vector3(-0.9,0.8+hS2,1.5),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['378_2-300_2'] = new THREE.Line(geo['378_2-300_2'], a0);
geo['353_3-300_0'] = new THREE.Geometry();
geo['353_3-300_0'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS2,2.8),
	new THREE.Vector3(4.7,1.2+hS2,1.65),
	new THREE.Vector3(0.1,1.2+hS2,1.65),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['353_3-300_0'] = new THREE.Line(geo['353_3-300_0'], a0);
geo['354_3-300_0'] = new THREE.Geometry();
geo['354_3-300_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,0.7),
	new THREE.Vector3(3.3,1.2+hS2,1.6),
	new THREE.Vector3(0.2,1.2+hS2,1.6),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['354_3-300_0'] = new THREE.Line(geo['354_3-300_0'], a0);
geo['356_3-300_0'] = new THREE.Geometry();
geo['356_3-300_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,0.7),
	new THREE.Vector3(2.0,1.2+hS2,1.55),
	new THREE.Vector3(0.3,1.2+hS2,1.55),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['356_3-300_0'] = new THREE.Line(geo['356_3-300_0'], a0);
geo['360_3-300_0'] = new THREE.Geometry();
geo['360_3-300_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,0.7),
	new THREE.Vector3(0.7,1.2+hS2,1.5),
	new THREE.Vector3(0.4,1.2+hS2,1.5),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['360_3-300_0'] = new THREE.Line(geo['360_3-300_0'], a0);
geo['357_3-300_0'] = new THREE.Geometry();
geo['357_3-300_0'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,2.8),
	new THREE.Vector3(3.3,1.2+hS2,1.7),
	new THREE.Vector3(0.0,1.2+hS2,1.7),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['357_3-300_0'] = new THREE.Line(geo['357_3-300_0'], a0);
geo['359_3-300_0'] = new THREE.Geometry();
geo['359_3-300_0'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,2.8),
	new THREE.Vector3(2.0,1.2+hS2,1.75),
	new THREE.Vector3(-0.1,1.2+hS2,1.75),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['359_3-300_0'] = new THREE.Line(geo['359_3-300_0'], a0);
geo['361_3-300_0'] = new THREE.Geometry();
geo['361_3-300_0'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,2.8),
	new THREE.Vector3(0.7,1.2+hS2,1.8),
	new THREE.Vector3(-0.2,1.2+hS2,1.8),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['361_3-300_0'] = new THREE.Line(geo['361_3-300_0'], a0);
geo['363_3-300_0'] = new THREE.Geometry();
geo['363_3-300_0'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS2,2.8),
	new THREE.Vector3(-0.6,1.2+hS2,1.8),
	new THREE.Vector3(-0.3,1.2+hS2,1.8),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['363_3-300_0'] = new THREE.Line(geo['363_3-300_0'], a0);
geo['365_3-300_0'] = new THREE.Geometry();
geo['365_3-300_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,2.8),
	new THREE.Vector3(-2.0,1.2+hS2,2.8),
	new THREE.Vector3(-2.0,1.2+hS2,1.75),
	new THREE.Vector3(-0.4,1.2+hS2,1.75),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['365_3-300_0'] = new THREE.Line(geo['365_3-300_0'], a0);
geo['371_3-300_0'] = new THREE.Geometry();
geo['371_3-300_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,0.6),
	new THREE.Vector3(-2.0,1.2+hS2,0.6),
	new THREE.Vector3(-2.0,1.2+hS2,1.7),
	new THREE.Vector3(-0.5,1.2+hS2,1.7),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['371_3-300_0'] = new THREE.Line(geo['371_3-300_0'], a0);
geo['375_3-300_0'] = new THREE.Geometry();
geo['375_3-300_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-0.7),
	new THREE.Vector3(-1.95,1.2+hS2,-0.7),
	new THREE.Vector3(-1.95,1.2+hS2,1.65),
	new THREE.Vector3(-0.6,1.2+hS2,1.65),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['375_3-300_0'] = new THREE.Line(geo['375_3-300_0'], a0);
geo['377_3-300_0'] = new THREE.Geometry();
geo['377_3-300_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-2.0),
	new THREE.Vector3(-1.9,1.2+hS2,-2.0),
	new THREE.Vector3(-1.9,1.2+hS2,1.6),
	new THREE.Vector3(-0.7,1.2+hS2,1.6),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['377_3-300_0'] = new THREE.Line(geo['377_3-300_0'], a0);
geo['379_3-300_0'] = new THREE.Geometry();
geo['379_3-300_0'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-3.3),
	new THREE.Vector3(-1.85,1.2+hS2,-3.3),
	new THREE.Vector3(-1.85,1.2+hS2,1.55),
	new THREE.Vector3(-0.8,1.2+hS2,1.55),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['379_3-300_0'] = new THREE.Line(geo['379_3-300_0'], a0);
geo['372_3-300_0'] = new THREE.Geometry();
geo['372_3-300_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-0.7),
	new THREE.Vector3(-1.7,1.2+hS2,-0.7),
	new THREE.Vector3(-1.7,1.2+hS2,1.4),
	new THREE.Vector3(-1.1,1.2+hS2,1.4),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['372_3-300_0'] = new THREE.Line(geo['372_3-300_0'], a0);
geo['376_3-300_0'] = new THREE.Geometry();
geo['376_3-300_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-2.0),
	new THREE.Vector3(-1.75,1.2+hS2,-2.0),
	new THREE.Vector3(-1.75,1.2+hS2,1.45),
	new THREE.Vector3(-1.0,1.2+hS2,1.45),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['376_3-300_0'] = new THREE.Line(geo['376_3-300_0'], a0);
geo['378_3-300_0'] = new THREE.Geometry();
geo['378_3-300_0'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-3.3),
	new THREE.Vector3(-1.8,1.2+hS2,-3.3),
	new THREE.Vector3(-1.8,1.2+hS2,1.5),
	new THREE.Vector3(-0.9,1.2+hS2,1.5),
	new THREE.Vector3(-0.15,0+hS2,1.15)
); line['378_3-300_0'] = new THREE.Line(geo['378_3-300_0'], a0);
geo['353_3-300_1'] = new THREE.Geometry();
geo['353_3-300_1'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS2,2.8),
	new THREE.Vector3(4.7,1.2+hS2,1.65),
	new THREE.Vector3(0.1,1.2+hS2,1.65),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['353_3-300_1'] = new THREE.Line(geo['353_3-300_1'], a0);
geo['354_3-300_1'] = new THREE.Geometry();
geo['354_3-300_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,0.7),
	new THREE.Vector3(3.3,1.2+hS2,1.6),
	new THREE.Vector3(0.2,1.2+hS2,1.6),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['354_3-300_1'] = new THREE.Line(geo['354_3-300_1'], a0);
geo['356_3-300_1'] = new THREE.Geometry();
geo['356_3-300_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,0.7),
	new THREE.Vector3(2.0,1.2+hS2,1.55),
	new THREE.Vector3(0.3,1.2+hS2,1.55),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['356_3-300_1'] = new THREE.Line(geo['356_3-300_1'], a0);
geo['360_3-300_1'] = new THREE.Geometry();
geo['360_3-300_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,0.7),
	new THREE.Vector3(0.7,1.2+hS2,1.5),
	new THREE.Vector3(0.4,1.2+hS2,1.5),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['360_3-300_1'] = new THREE.Line(geo['360_3-300_1'], a0);
geo['357_3-300_1'] = new THREE.Geometry();
geo['357_3-300_1'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,2.8),
	new THREE.Vector3(3.3,1.2+hS2,1.7),
	new THREE.Vector3(0.0,1.2+hS2,1.7),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['357_3-300_1'] = new THREE.Line(geo['357_3-300_1'], a0);
geo['359_3-300_1'] = new THREE.Geometry();
geo['359_3-300_1'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,2.8),
	new THREE.Vector3(2.0,1.2+hS2,1.75),
	new THREE.Vector3(-0.1,1.2+hS2,1.75),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['359_3-300_1'] = new THREE.Line(geo['359_3-300_1'], a0);
geo['361_3-300_1'] = new THREE.Geometry();
geo['361_3-300_1'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,2.8),
	new THREE.Vector3(0.7,1.2+hS2,1.8),
	new THREE.Vector3(-0.2,1.2+hS2,1.8),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['361_3-300_1'] = new THREE.Line(geo['361_3-300_1'], a0);
geo['363_3-300_1'] = new THREE.Geometry();
geo['363_3-300_1'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS2,2.8),
	new THREE.Vector3(-0.6,1.2+hS2,1.8),
	new THREE.Vector3(-0.3,1.2+hS2,1.8),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['363_3-300_1'] = new THREE.Line(geo['363_3-300_1'], a0);
geo['365_3-300_1'] = new THREE.Geometry();
geo['365_3-300_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,2.8),
	new THREE.Vector3(-2.0,1.2+hS2,2.8),
	new THREE.Vector3(-2.0,1.2+hS2,1.75),
	new THREE.Vector3(-0.4,1.2+hS2,1.75),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['365_3-300_1'] = new THREE.Line(geo['365_3-300_1'], a0);
geo['371_3-300_1'] = new THREE.Geometry();
geo['371_3-300_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,0.6),
	new THREE.Vector3(-2.0,1.2+hS2,0.6),
	new THREE.Vector3(-2.0,1.2+hS2,1.7),
	new THREE.Vector3(-0.5,1.2+hS2,1.7),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['371_3-300_1'] = new THREE.Line(geo['371_3-300_1'], a0);
geo['375_3-300_1'] = new THREE.Geometry();
geo['375_3-300_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-0.7),
	new THREE.Vector3(-1.95,1.2+hS2,-0.7),
	new THREE.Vector3(-1.95,1.2+hS2,1.65),
	new THREE.Vector3(-0.6,1.2+hS2,1.65),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['375_3-300_1'] = new THREE.Line(geo['375_3-300_1'], a0);
geo['377_3-300_1'] = new THREE.Geometry();
geo['377_3-300_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-2.0),
	new THREE.Vector3(-1.9,1.2+hS2,-2.0),
	new THREE.Vector3(-1.9,1.2+hS2,1.6),
	new THREE.Vector3(-0.7,1.2+hS2,1.6),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['377_3-300_1'] = new THREE.Line(geo['377_3-300_1'], a0);
geo['379_3-300_1'] = new THREE.Geometry();
geo['379_3-300_1'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-3.3),
	new THREE.Vector3(-1.85,1.2+hS2,-3.3),
	new THREE.Vector3(-1.85,1.2+hS2,1.55),
	new THREE.Vector3(-0.8,1.2+hS2,1.55),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['379_3-300_1'] = new THREE.Line(geo['379_3-300_1'], a0);
geo['372_3-300_1'] = new THREE.Geometry();
geo['372_3-300_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-0.7),
	new THREE.Vector3(-1.7,1.2+hS2,-0.7),
	new THREE.Vector3(-1.7,1.2+hS2,1.4),
	new THREE.Vector3(-1.1,1.2+hS2,1.4),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['372_3-300_1'] = new THREE.Line(geo['372_3-300_1'], a0);
geo['376_3-300_1'] = new THREE.Geometry();
geo['376_3-300_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-2.0),
	new THREE.Vector3(-1.75,1.2+hS2,-2.0),
	new THREE.Vector3(-1.75,1.2+hS2,1.45),
	new THREE.Vector3(-1.0,1.2+hS2,1.45),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['376_3-300_1'] = new THREE.Line(geo['376_3-300_1'], a0);
geo['378_3-300_1'] = new THREE.Geometry();
geo['378_3-300_1'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-3.3),
	new THREE.Vector3(-1.8,1.2+hS2,-3.3),
	new THREE.Vector3(-1.8,1.2+hS2,1.5),
	new THREE.Vector3(-0.9,1.2+hS2,1.5),
	new THREE.Vector3(-0.15,0.4+hS2,1.15)
); line['378_3-300_1'] = new THREE.Line(geo['378_3-300_1'], a0);
geo['353_3-300_2'] = new THREE.Geometry();
geo['353_3-300_2'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS2,2.8),
	new THREE.Vector3(4.7,1.2+hS2,1.65),
	new THREE.Vector3(0.1,1.2+hS2,1.65),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['353_3-300_2'] = new THREE.Line(geo['353_3-300_2'], a0);
geo['354_3-300_2'] = new THREE.Geometry();
geo['354_3-300_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,0.7),
	new THREE.Vector3(3.3,1.2+hS2,1.6),
	new THREE.Vector3(0.2,1.2+hS2,1.6),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['354_3-300_2'] = new THREE.Line(geo['354_3-300_2'], a0);
geo['356_3-300_2'] = new THREE.Geometry();
geo['356_3-300_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,0.7),
	new THREE.Vector3(2.0,1.2+hS2,1.55),
	new THREE.Vector3(0.3,1.2+hS2,1.55),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['356_3-300_2'] = new THREE.Line(geo['356_3-300_2'], a0);
geo['360_3-300_2'] = new THREE.Geometry();
geo['360_3-300_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,0.7),
	new THREE.Vector3(0.7,1.2+hS2,1.5),
	new THREE.Vector3(0.4,1.2+hS2,1.5),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['360_3-300_2'] = new THREE.Line(geo['360_3-300_2'], a0);
geo['357_3-300_2'] = new THREE.Geometry();
geo['357_3-300_2'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,2.8),
	new THREE.Vector3(3.3,1.2+hS2,1.7),
	new THREE.Vector3(0.0,1.2+hS2,1.7),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['357_3-300_2'] = new THREE.Line(geo['357_3-300_2'], a0);
geo['359_3-300_2'] = new THREE.Geometry();
geo['359_3-300_2'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,2.8),
	new THREE.Vector3(2.0,1.2+hS2,1.75),
	new THREE.Vector3(-0.1,1.2+hS2,1.75),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['359_3-300_2'] = new THREE.Line(geo['359_3-300_2'], a0);
geo['361_3-300_2'] = new THREE.Geometry();
geo['361_3-300_2'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,2.8),
	new THREE.Vector3(0.7,1.2+hS2,1.8),
	new THREE.Vector3(-0.2,1.2+hS2,1.8),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['361_3-300_2'] = new THREE.Line(geo['361_3-300_2'], a0);
geo['363_3-300_2'] = new THREE.Geometry();
geo['363_3-300_2'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS2,2.8),
	new THREE.Vector3(-0.6,1.2+hS2,1.8),
	new THREE.Vector3(-0.3,1.2+hS2,1.8),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['363_3-300_2'] = new THREE.Line(geo['363_3-300_2'], a0);
geo['365_3-300_2'] = new THREE.Geometry();
geo['365_3-300_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,2.8),
	new THREE.Vector3(-2.0,1.2+hS2,2.8),
	new THREE.Vector3(-2.0,1.2+hS2,1.75),
	new THREE.Vector3(-0.4,1.2+hS2,1.75),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['365_3-300_2'] = new THREE.Line(geo['365_3-300_2'], a0);
geo['371_3-300_2'] = new THREE.Geometry();
geo['371_3-300_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,0.6),
	new THREE.Vector3(-2.0,1.2+hS2,0.6),
	new THREE.Vector3(-2.0,1.2+hS2,1.7),
	new THREE.Vector3(-0.5,1.2+hS2,1.7),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['371_3-300_2'] = new THREE.Line(geo['371_3-300_2'], a0);
geo['375_3-300_2'] = new THREE.Geometry();
geo['375_3-300_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-0.7),
	new THREE.Vector3(-1.95,1.2+hS2,-0.7),
	new THREE.Vector3(-1.95,1.2+hS2,1.65),
	new THREE.Vector3(-0.6,1.2+hS2,1.65),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['375_3-300_2'] = new THREE.Line(geo['375_3-300_2'], a0);
geo['377_3-300_2'] = new THREE.Geometry();
geo['377_3-300_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-2.0),
	new THREE.Vector3(-1.9,1.2+hS2,-2.0),
	new THREE.Vector3(-1.9,1.2+hS2,1.6),
	new THREE.Vector3(-0.7,1.2+hS2,1.6),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['377_3-300_2'] = new THREE.Line(geo['377_3-300_2'], a0);
geo['379_3-300_2'] = new THREE.Geometry();
geo['379_3-300_2'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-3.3),
	new THREE.Vector3(-1.85,1.2+hS2,-3.3),
	new THREE.Vector3(-1.85,1.2+hS2,1.55),
	new THREE.Vector3(-0.8,1.2+hS2,1.55),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['379_3-300_2'] = new THREE.Line(geo['379_3-300_2'], a0);
geo['372_3-300_2'] = new THREE.Geometry();
geo['372_3-300_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-0.7),
	new THREE.Vector3(-1.7,1.2+hS2,-0.7),
	new THREE.Vector3(-1.7,1.2+hS2,1.4),
	new THREE.Vector3(-1.1,1.2+hS2,1.4),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['372_3-300_2'] = new THREE.Line(geo['372_3-300_2'], a0);
geo['376_3-300_2'] = new THREE.Geometry();
geo['376_3-300_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-2.0),
	new THREE.Vector3(-1.75,1.2+hS2,-2.0),
	new THREE.Vector3(-1.75,1.2+hS2,1.45),
	new THREE.Vector3(-1.0,1.2+hS2,1.45),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['376_3-300_2'] = new THREE.Line(geo['376_3-300_2'], a0);
geo['378_3-300_2'] = new THREE.Geometry();
geo['378_3-300_2'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-3.3),
	new THREE.Vector3(-1.8,1.2+hS2,-3.3),
	new THREE.Vector3(-1.8,1.2+hS2,1.5),
	new THREE.Vector3(-0.9,1.2+hS2,1.5),
	new THREE.Vector3(-0.15,0.8+hS2,1.15)
); line['378_3-300_2'] = new THREE.Line(geo['378_3-300_2'], a0);
geo['353_3-300_3'] = new THREE.Geometry();
geo['353_3-300_3'].vertices.push(
	new THREE.Vector3(4.7,1.2+hS2,2.8),
	new THREE.Vector3(4.7,1.2+hS2,1.65),
	new THREE.Vector3(0.1,1.2+hS2,1.65),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['353_3-300_3'] = new THREE.Line(geo['353_3-300_3'], a0);
geo['354_3-300_3'] = new THREE.Geometry();
geo['354_3-300_3'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,0.7),
	new THREE.Vector3(3.3,1.2+hS2,1.6),
	new THREE.Vector3(0.2,1.2+hS2,1.6),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['354_3-300_3'] = new THREE.Line(geo['354_3-300_3'], a0);
geo['356_3-300_3'] = new THREE.Geometry();
geo['356_3-300_3'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,0.7),
	new THREE.Vector3(2.0,1.2+hS2,1.55),
	new THREE.Vector3(0.3,1.2+hS2,1.55),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['356_3-300_3'] = new THREE.Line(geo['356_3-300_3'], a0);
geo['360_3-300_3'] = new THREE.Geometry();
geo['360_3-300_3'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,0.7),
	new THREE.Vector3(0.7,1.2+hS2,1.5),
	new THREE.Vector3(0.4,1.2+hS2,1.5),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['360_3-300_3'] = new THREE.Line(geo['360_3-300_3'], a0);
geo['357_3-300_3'] = new THREE.Geometry();
geo['357_3-300_3'].vertices.push(
	new THREE.Vector3(3.3,1.2+hS2,2.8),
	new THREE.Vector3(3.3,1.2+hS2,1.7),
	new THREE.Vector3(0.0,1.2+hS2,1.7),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['357_3-300_3'] = new THREE.Line(geo['357_3-300_3'], a0);
geo['359_3-300_3'] = new THREE.Geometry();
geo['359_3-300_3'].vertices.push(
	new THREE.Vector3(2.0,1.2+hS2,2.8),
	new THREE.Vector3(2.0,1.2+hS2,1.75),
	new THREE.Vector3(-0.1,1.2+hS2,1.75),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['359_3-300_3'] = new THREE.Line(geo['359_3-300_3'], a0);
geo['361_3-300_3'] = new THREE.Geometry();
geo['361_3-300_3'].vertices.push(
	new THREE.Vector3(0.7,1.2+hS2,2.8),
	new THREE.Vector3(0.7,1.2+hS2,1.8),
	new THREE.Vector3(-0.2,1.2+hS2,1.8),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['361_3-300_3'] = new THREE.Line(geo['361_3-300_3'], a0);
geo['363_3-300_3'] = new THREE.Geometry();
geo['363_3-300_3'].vertices.push(
	new THREE.Vector3(-0.6,1.2+hS2,2.8),
	new THREE.Vector3(-0.6,1.2+hS2,1.8),
	new THREE.Vector3(-0.3,1.2+hS2,1.8),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['363_3-300_3'] = new THREE.Line(geo['363_3-300_3'], a0);
geo['365_3-300_3'] = new THREE.Geometry();
geo['365_3-300_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,2.8),
	new THREE.Vector3(-2.0,1.2+hS2,2.8),
	new THREE.Vector3(-2.0,1.2+hS2,1.75),
	new THREE.Vector3(-0.4,1.2+hS2,1.75),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['365_3-300_3'] = new THREE.Line(geo['365_3-300_3'], a0);
geo['371_3-300_3'] = new THREE.Geometry();
geo['371_3-300_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,0.6),
	new THREE.Vector3(-2.0,1.2+hS2,0.6),
	new THREE.Vector3(-2.0,1.2+hS2,1.7),
	new THREE.Vector3(-0.5,1.2+hS2,1.7),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['371_3-300_3'] = new THREE.Line(geo['371_3-300_3'], a0);
geo['375_3-300_3'] = new THREE.Geometry();
geo['375_3-300_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-0.7),
	new THREE.Vector3(-1.95,1.2+hS2,-0.7),
	new THREE.Vector3(-1.95,1.2+hS2,1.65),
	new THREE.Vector3(-0.6,1.2+hS2,1.65),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['375_3-300_3'] = new THREE.Line(geo['375_3-300_3'], a0);
geo['377_3-300_3'] = new THREE.Geometry();
geo['377_3-300_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-2.0),
	new THREE.Vector3(-1.9,1.2+hS2,-2.0),
	new THREE.Vector3(-1.9,1.2+hS2,1.6),
	new THREE.Vector3(-0.7,1.2+hS2,1.6),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['377_3-300_3'] = new THREE.Line(geo['377_3-300_3'], a0);
geo['379_3-300_3'] = new THREE.Geometry();
geo['379_3-300_3'].vertices.push(
	new THREE.Vector3(-2.8,1.2+hS2,-3.3),
	new THREE.Vector3(-1.85,1.2+hS2,-3.3),
	new THREE.Vector3(-1.85,1.2+hS2,1.55),
	new THREE.Vector3(-0.8,1.2+hS2,1.55),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['379_3-300_3'] = new THREE.Line(geo['379_3-300_3'], a0);
geo['372_3-300_3'] = new THREE.Geometry();
geo['372_3-300_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-0.7),
	new THREE.Vector3(-1.7,1.2+hS2,-0.7),
	new THREE.Vector3(-1.7,1.2+hS2,1.4),
	new THREE.Vector3(-1.1,1.2+hS2,1.4),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['372_3-300_3'] = new THREE.Line(geo['372_3-300_3'], a0);
geo['376_3-300_3'] = new THREE.Geometry();
geo['376_3-300_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-2.0),
	new THREE.Vector3(-1.75,1.2+hS2,-2.0),
	new THREE.Vector3(-1.75,1.2+hS2,1.45),
	new THREE.Vector3(-1.0,1.2+hS2,1.45),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['376_3-300_3'] = new THREE.Line(geo['376_3-300_3'], a0);
geo['378_3-300_3'] = new THREE.Geometry();
geo['378_3-300_3'].vertices.push(
	new THREE.Vector3(-0.7,1.2+hS2,-3.3),
	new THREE.Vector3(-1.8,1.2+hS2,-3.3),
	new THREE.Vector3(-1.8,1.2+hS2,1.5),
	new THREE.Vector3(-0.9,1.2+hS2,1.5),
	new THREE.Vector3(-0.15,1.2+hS2,1.15)
); line['378_3-300_3'] = new THREE.Line(geo['378_3-300_3'], a0);
}