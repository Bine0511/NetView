function initRooms(){
	showFloor('EG');
	showFloor('AU');
	showFloor('ME');
	showFloor('S1');
	showFloor('S2');
}

var Floors = new Array();
	Floors['y'] = new Array();
		Floors['y']['EG'] = 0;
		Floors['y']['AU'] = 1;
		Floors['y']['ME'] = 2;
		Floors['y']['S1'] = 4;
		Floors['y']['S2'] = 6;

	Floors['EG'] = new Array(); var j = 0;
		Floors['EG'][j] = new THREE.Line(rGeo_EG_1,rMat_Line);
				j += 1;
		Floors['EG'][j] = new THREE.Line(rGeo_EG_2,rMat_Line);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_3,g1); // Ecke WC
			Floors['EG'][j].position.set(-0.7,Floors['y']['EG'],1.1);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_4,g1); // Ecke WC
			Floors['EG'][j].position.set(-1.2,Floors['y']['EG'],0.85);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_5,g1); // Gang
			Floors['EG'][j].position.set(2.0,Floors['y']['EG'],1.75);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_6,g1); // Gang
			Floors['EG'][j].position.set(-1.75,Floors['y']['EG'],-0.25);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_7,g1); // Gang
			Floors['EG'][j].position.set(-1.35,Floors['y']['EG'],2.8);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_13,g1); // 054
			Floors['EG'][j].position.set(3.4,Floors['y']['EG'],0.7);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 054 Tür
			Floors['EG'][j].position.set(3.6,Floors['y']['EG'],1.35);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_13,g1); // 056 Labor Mikroprozessoren
			Floors['EG'][j].position.set(2.3,Floors['y']['EG'],0.7);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 056 Labor Mikroprozessoren Tür
			Floors['EG'][j].position.set(2.5,Floors['y']['EG'],1.35);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // 058
			Floors['EG'][j].position.set(1.4,Floors['y']['EG'],0.7);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 058 Tür
			Floors['EG'][j].position.set(1.4,Floors['y']['EG'],1.35);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_15,g1); // 060
			Floors['EG'][j].position.set(0.55,Floors['y']['EG'],0.7);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 060 Tür
			Floors['EG'][j].position.set(0.7,Floors['y']['EG'],1.35);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_15,g1); // 072 Labor Netzwerktechnik 2
			Floors['EG'][j].position.set(-0.7,Floors['y']['EG'],-0.55);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 072 Labor Netzwerktechnik 2 Tür
			Floors['EG'][j].position.set(-1.35,Floors['y']['EG'],-0.4);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // 074
			Floors['EG'][j].position.set(-0.7,Floors['y']['EG'],-1.4);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 074 Tür
			Floors['EG'][j].position.set(-1.35,Floors['y']['EG'],-1.4);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_16,g1); // 076 Labor Netzwerktechnik Cisco
			Floors['EG'][j].position.set(-0.7,Floors['y']['EG'],-2.55);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 076 Labor Netzwerktechnik Cisco Tür
			Floors['EG'][j].position.set(-1.35,Floors['y']['EG'],-2.1);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_10,g1); // 078
			Floors['EG'][j].position.set(-0.7,Floors['y']['EG'],-3.65);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 078 Tür
			Floors['EG'][j].position.set(-1.35,Floors['y']['EG'],-3.6);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_12,g1); // 079 Labor Netzwerktechnik 1
			Floors['EG'][j].position.set(-2.8,Floors['y']['EG'],-2.75);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 079 Labor Netzwerktechnik 1 Tür
			Floors['EG'][j].position.set(-2.15,Floors['y']['EG'],-3.6);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_11,g1); // 075 Labor Automatisierungstechnik
			Floors['EG'][j].position.set(-2.8,Floors['y']['EG'],-0.15);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 075 Labor Automatisierungstechnik Tür
			Floors['EG'][j].position.set(-2.15,Floors['y']['EG'],-1.2);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 065 Labor Mechatronik
			Floors['EG'][j].position.set(-2.8,Floors['y']['EG'],2.8);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 065 Labor Mechatronik Tür
			Floors['EG'][j].position.set(-2.15,Floors['y']['EG'],2.5);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 063 Labor Elektrotechnik 1
			Floors['EG'][j].position.set(-0.6,Floors['y']['EG'],2.8);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 063 Labor Elektrotechnik 1 Tür
			Floors['EG'][j].position.set(-0.9,Floors['y']['EG'],2.15);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 061 KU-Saal 2
			Floors['EG'][j].position.set(0.7,Floors['y']['EG'],2.8);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 061 KU-Saal 2 Tür
			Floors['EG'][j].position.set(0.4,Floors['y']['EG'],2.15);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 059 Audio-Labor
			Floors['EG'][j].position.set(2.0,Floors['y']['EG'],2.8);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 059 Labor Audio Tür
			Floors['EG'][j].position.set(1.7,Floors['y']['EG'],2.15);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 057
			Floors['EG'][j].position.set(3.3,Floors['y']['EG'],2.8);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 057 Tür
			Floors['EG'][j].position.set(3.0,Floors['y']['EG'],2.15);
			Floors['EG'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_17,g1); // Buffet
			Floors['EG'][j].position.set(4.7,Floors['y']['EG'],2.75);
			Floors['EG'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['EG'][j] = new THREE.Mesh(rGeo_Plane_18,g1); // Aula ME
			Floors['EG'][j].position.set(6.95,Floors['y']['EG'],2.0);
			Floors['EG'][j].rotation.set(deg(90),0,0);

	Floors['AU'] = new Array(); var j = 0;
		Floors['AU'][j] = new THREE.Line(rGeo_AU_1,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_AU_2,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_AU_3,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_AU_4,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_S1_7,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_S1_8,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_S1_9,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_S1_10,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_S1_11,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_S1_12,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Line(rGeo_S1_13,rMat_Line);
			Floors['AU'][j].position.set(0,Floors['y']['AU'],0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_32,g1); // Gang Aula Links
			Floors['AU'][j].position.set(8.7,Floors['y']['AU'],-1.55);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_37,g1); // Gang Aula Unten
			Floors['AU'][j].position.set(10.05,Floors['y']['AU'],-7.7);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_38,g1); // Aula
			Floors['AU'][j].position.set(7.0,Floors['y']['AU'],-3.65);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_39,g1); // Aula schmaler Streifen Treppe
			Floors['AU'][j].position.set(5.45,Floors['y']['AU'],0.15);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_40,g1); // Aula Kammer 1
			Floors['AU'][j].position.set(4.9,Floors['y']['AU'],-0.7);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_40,g1); // Aula Kammer 2
			Floors['AU'][j].position.set(4.9,Floors['y']['AU'],-5.9);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_41,g1); // Liz
			Floors['AU'][j].position.set(4.95,Floors['y']['AU'],-2.0);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_41,g1); // Bibliothek
			Floors['AU'][j].position.set(4.95,Floors['y']['AU'],-4.6);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_42,g1); // Portier
			Floors['AU'][j].position.set(4.95,Floors['y']['AU'],-7.1);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_21,g1); // 145 Kleine Kammer
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],4.15);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 145 Kleine Kammer Tür
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],3.95);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 145
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],3.5);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 145Tür
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],3.7);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 143
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],2.6);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 143
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],2.4);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung 143/135 Tür 1
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],2.15);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_22,g1); // Verbindung 143/135
			Floors['AU'][j].position.set(10.25,Floors['y']['AU'],1.8);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung 143/135 Tür 2
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],1.45);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 143/135 Tür 1
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],1.975);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_23,g1); // Zwischenraum 143/135
			Floors['AU'][j].position.set(9.5,Floors['y']['AU'],1.8);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 143/135 Tür 2
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],1.625);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 135
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],1.0);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 135 Tür
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],1.2);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 133
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],0.1);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 133 Tür
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-0.1);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung 133/125 Tür 1
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],-0.35);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_22,g1); // Verbindung 133/125
			Floors['AU'][j].position.set(10.25,Floors['y']['AU'],-0.7);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung 133/125 Tür 2
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],-1.05);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 133/125 Tür 1
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-0.525);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_23,g1); // Zwischenraum 133/125
			Floors['AU'][j].position.set(9.5,Floors['y']['AU'],-0.7);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 133/125 Tür 2
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-0.875);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 125
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],-1.5);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 125 Tür
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-1.3);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 123
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],-2.4);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 123 Tür
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-2.6);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung 123/119 Tür 1
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],-2.85);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_25,g1); // Verbindung 123/119
			Floors['AU'][j].position.set(10.25,Floors['y']['AU'],-3.3);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung 123/119 Tür 2
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],-3.75);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 119
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],-4.2);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 119 Tür
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-4.0);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 117
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],-5.1);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 117 Tür
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-5.3);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung 117/109 Tür 1
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],-5.55);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_22,g1); // Verbindung 117/109
			Floors['AU'][j].position.set(10.25,Floors['y']['AU'],-5.9);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung 117/109 Tür 2
			Floors['AU'][j].position.set(10.3,Floors['y']['AU'],-6.25);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 117/109 Tür 1
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-5.725);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_23,g1); // Zwischenraum 117/109
			Floors['AU'][j].position.set(9.5,Floors['y']['AU'],-5.9);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 117/109 Tür 2
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-6.075);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 109
			Floors['AU'][j].position.set(9.7,Floors['y']['AU'],-6.7);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 109 Tür
			Floors['AU'][j].position.set(8.95,Floors['y']['AU'],-6.5);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 107
			Floors['AU'][j].position.set(10.85,Floors['y']['AU'],-8.5);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 107 Tür
			Floors['AU'][j].position.set(10.8,Floors['y']['AU'],-7.95);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 105
			Floors['AU'][j].position.set(10.25,Floors['y']['AU'],-8.5);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 105 Tür
			Floors['AU'][j].position.set(10.2,Floors['y']['AU'],-7.95);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 103
			Floors['AU'][j].position.set(9.65,Floors['y']['AU'],-8.5);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 103 Tür
			Floors['AU'][j].position.set(9.6,Floors['y']['AU'],-7.95);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 101
			Floors['AU'][j].position.set(9.05,Floors['y']['AU'],-8.5);
			Floors['AU'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['AU'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 101 Tür
			Floors['AU'][j].position.set(9.0,Floors['y']['AU'],-7.95);
			Floors['AU'][j].rotation.set(deg(90),0,deg(90));

	Floors['ME'] = new Array(); var j = 0;
		Floors['ME'][j] = new THREE.Line(rGeo_ME_1,rMat_Line);
			Floors['ME'][j].position.set(0,Floors['y']['ME'],0);
				j += 1;
		Floors['ME'][j] = new THREE.Line(rGeo_ME_2,rMat_Line);
			Floors['ME'][j].position.set(0,Floors['y']['ME'],0);
				j += 1;
		Floors['ME'][j] = new THREE.Line(rGeo_ME_3,rMat_Line);
			Floors['ME'][j].position.set(0,Floors['y']['ME'],0);
				j += 1;
		Floors['ME'][j] = new THREE.Line(rGeo_ME_4,rMat_Line);
			Floors['ME'][j].position.set(0,Floors['y']['ME'],0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_3,g1); // Ecke WC
			Floors['ME'][j].position.set(-0.7,Floors['y']['ME'],1.1);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_4,g1); // Ecke WC
			Floors['ME'][j].position.set(-1.2,Floors['y']['ME'],0.85);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_5,g1); // Gang
			Floors['ME'][j].position.set(2.0,Floors['y']['ME'],1.75);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_6,g1); // Gang
			Floors['ME'][j].position.set(-1.75,Floors['y']['ME'],-0.25);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_7,g1); // Gang
			Floors['ME'][j].position.set(-1.35,Floors['y']['ME'],2.8);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 154
			Floors['ME'][j].position.set(3.3,Floors['y']['ME'],0.7);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 154 Tür
			Floors['ME'][j].position.set(3.6,Floors['y']['ME'],1.35);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 156
			Floors['ME'][j].position.set(2.0,Floors['y']['ME'],0.7);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 156 Tür
			Floors['ME'][j].position.set(2.3,Floors['y']['ME'],1.35);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 160
			Floors['ME'][j].position.set(0.7,Floors['y']['ME'],0.7);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 160 Tür
			Floors['ME'][j].position.set(1.0,Floors['y']['ME'],1.35);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_19,g1); // 172 Konferenzsaal
			Floors['ME'][j].position.set(-0.7,Floors['y']['ME'],-2.0);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 172 Konferenzsaal Tür 1
			Floors['ME'][j].position.set(-1.35,Floors['y']['ME'],-0.4);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 172 Konferenzsaal Tür 2
			Floors['ME'][j].position.set(-1.35,Floors['y']['ME'],-1.7);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 172 Konferenzsaal Tür 3
			Floors['ME'][j].position.set(-1.35,Floors['y']['ME'],-3.0);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_12,g1); // 179 KU-Saal 1
			Floors['ME'][j].position.set(-2.8,Floors['y']['ME'],-2.75);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 179 Tür KU-Saal 1
			Floors['ME'][j].position.set(-2.15,Floors['y']['ME'],-3.6);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // 177
			Floors['ME'][j].position.set(-2.8,Floors['y']['ME'],-1.2);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 177 Tür
			Floors['ME'][j].position.set(-2.15,Floors['y']['ME'],-1.2);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // 175
			Floors['ME'][j].position.set(-2.8,Floors['y']['ME'],-0.5);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 175 Tür
			Floors['ME'][j].position.set(-2.15,Floors['y']['ME'],-0.5);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // 173
			Floors['ME'][j].position.set(-2.8,Floors['y']['ME'],0.2);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 173 Tür
			Floors['ME'][j].position.set(-2.15,Floors['y']['ME'],0.2);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // 171
			Floors['ME'][j].position.set(-2.8,Floors['y']['ME'],0.9);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 171 Tür
			Floors['ME'][j].position.set(-2.15,Floors['y']['ME'],0.9);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 165
			Floors['ME'][j].position.set(-2.8,Floors['y']['ME'],2.8);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 165 Tür
			Floors['ME'][j].position.set(-2.15,Floors['y']['ME'],2.5);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // 163
			Floors['ME'][j].position.set(-0.9,Floors['y']['ME'],2.8);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 163 Tür
			Floors['ME'][j].position.set(-0.9,Floors['y']['ME'],2.15);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_14,g1); // 161 Chemiesaal
			Floors['ME'][j].position.set(0.4,Floors['y']['ME'],2.8);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 161 Chemiesaal Tür
			Floors['ME'][j].position.set(0.0,Floors['y']['ME'],2.15);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // 159
			Floors['ME'][j].position.set(1.7,Floors['y']['ME'],2.8);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 159 Tür
			Floors['ME'][j].position.set(1.7,Floors['y']['ME'],2.15);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_14,g1); // 157 Physiksaal
			Floors['ME'][j].position.set(3.0,Floors['y']['ME'],2.8);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 157 Physiksaal Tür
			Floors['ME'][j].position.set(2.6,Floors['y']['ME'],2.15);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_8,g1); // Lehrerzimmer
			Floors['ME'][j].position.set(4.7,Floors['y']['ME'],2.8);
			Floors['ME'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['ME'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Lehrerzimmer Tür
			Floors['ME'][j].position.set(4.3,Floors['y']['ME'],2.15);
			Floors['ME'][j].rotation.set(deg(90),0,deg(90));

	Floors['S1'] = new Array(); var j = 0;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_1,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_2,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_3,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_4,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_5,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_6,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_7,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_8,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_9,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_10,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_11,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_12,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Line(rGeo_S1_13,rMat_Line);
			Floors['S1'][j].position.set(0,Floors['y']['S1'],0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_3,g1); // Ecke WC
			Floors['S1'][j].position.set(-0.7,Floors['y']['S1'],1.1);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_4,g1); // Ecke WC
			Floors['S1'][j].position.set(-1.2,Floors['y']['S1'],0.85);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_5,g1); // Gang
			Floors['S1'][j].position.set(2.0,Floors['y']['S1'],1.75);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_6,g1); // Gang
			Floors['S1'][j].position.set(-1.75,Floors['y']['S1'],-0.25);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_7,g1); // Gang
			Floors['S1'][j].position.set(-1.35,Floors['y']['S1'],2.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_30,g1); // Brücke 1
			Floors['S1'][j].position.set(6.95,Floors['y']['S1'],1.9);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_31,g1); // Brücke 2
			Floors['S1'][j].position.set(7.2,Floors['y']['S1'],-0.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_31,g1); // Brücke 3
			Floors['S1'][j].position.set(7.2,Floors['y']['S1'],-3.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_31,g1); // Brücke 4
			Floors['S1'][j].position.set(7.2,Floors['y']['S1'],-5.9);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_32,g1); // Gang Aula Links
			Floors['S1'][j].position.set(8.7,Floors['y']['S1'],-1.55);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_33,g1); // Gang Aula Rechts
			Floors['S1'][j].position.set(5.7,Floors['y']['S1'],-3.1);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_37,g1); // Gang Aula Unten
			Floors['S1'][j].position.set(10.05,Floors['y']['S1'],-7.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 254
			Floors['S1'][j].position.set(3.3,Floors['y']['S1'],0.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 254 Tür
			Floors['S1'][j].position.set(3.6,Floors['y']['S1'],1.35);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 256
			Floors['S1'][j].position.set(2.0,Floors['y']['S1'],0.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 256 Tür
			Floors['S1'][j].position.set(2.3,Floors['y']['S1'],1.35);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 260
			Floors['S1'][j].position.set(0.7,Floors['y']['S1'],0.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 260 Tür
			Floors['S1'][j].position.set(1.0,Floors['y']['S1'],1.35);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 272
			Floors['S1'][j].position.set(-0.7,Floors['y']['S1'],-0.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 272 Tür
			Floors['S1'][j].position.set(-1.35,Floors['y']['S1'],-0.4);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 276
			Floors['S1'][j].position.set(-0.7,Floors['y']['S1'],-2.0);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 276 Tür
			Floors['S1'][j].position.set(-1.35,Floors['y']['S1'],-1.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 278
			Floors['S1'][j].position.set(-0.7,Floors['y']['S1'],-3.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 278 Tür
			Floors['S1'][j].position.set(-1.35,Floors['y']['S1'],-3.0);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 279
			Floors['S1'][j].position.set(-2.8,Floors['y']['S1'],-3.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 279 Tür
			Floors['S1'][j].position.set(-2.15,Floors['y']['S1'],-3.6);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 277
			Floors['S1'][j].position.set(-2.8,Floors['y']['S1'],-2.0);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 277 Tür
			Floors['S1'][j].position.set(-2.15,Floors['y']['S1'],-2.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 275
			Floors['S1'][j].position.set(-2.8,Floors['y']['S1'],-0.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 275 Tür
			Floors['S1'][j].position.set(-2.15,Floors['y']['S1'],-1.0);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 271
			Floors['S1'][j].position.set(-2.8,Floors['y']['S1'],0.6);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 271 Tür
			Floors['S1'][j].position.set(-2.15,Floors['y']['S1'],0.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 265
			Floors['S1'][j].position.set(-2.8,Floors['y']['S1'],2.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 265 Tür
			Floors['S1'][j].position.set(-2.15,Floors['y']['S1'],2.5);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 263
			Floors['S1'][j].position.set(-0.6,Floors['y']['S1'],2.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 263 Tür
			Floors['S1'][j].position.set(-0.9,Floors['y']['S1'],2.15);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 261
			Floors['S1'][j].position.set(0.7,Floors['y']['S1'],2.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 261 Tür
			Floors['S1'][j].position.set(0.4,Floors['y']['S1'],2.15);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 259
			Floors['S1'][j].position.set(2.0,Floors['y']['S1'],2.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 259 Tür
			Floors['S1'][j].position.set(1.7,Floors['y']['S1'],2.15);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 257
			Floors['S1'][j].position.set(3.3,Floors['y']['S1'],2.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 257 Tür
			Floors['S1'][j].position.set(3.0,Floors['y']['S1'],2.15);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_8,g1); // LehrerzimS1r
			Floors['S1'][j].position.set(4.7,Floors['y']['S1'],2.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // LehrerzimS1r Tür
			Floors['S1'][j].position.set(4.3,Floors['y']['S1'],2.15);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // Kleine KamS1r neben Brücke
			Floors['S1'][j].position.set(5.8,Floors['y']['S1'],2.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Kleine KamS1r neben Brücke Tür
			Floors['S1'][j].position.set(5.8,Floors['y']['S1'],2.15);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_21,g1); // 245 Kleine KamS1r Labor Video
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],4.15);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 245 Kleine KamS1r Labor Video Tür
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],3.95);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 245 Labor Video
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],3.5);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 245 Labor Video Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],3.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 243 EDV 8B
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],2.6);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 243 EDV 8B Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],2.4);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung EDV 8B/EDV 7B Tür 1
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],2.15);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_22,g1); // Verbindung EDV 8B/EDV 7B
			Floors['S1'][j].position.set(10.25,Floors['y']['S1'],1.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung EDV 8B/EDV 7B Tür 2
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],1.45);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum EDV 8B/EDV 7B Tür 1
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],1.975);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_23,g1); // Zwischenraum EDV 8B/EDV 7B
			Floors['S1'][j].position.set(9.5,Floors['y']['S1'],1.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum EDV 8B/EDV 7B Tür 2
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],1.625);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 235 EDV 7B
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],1.0);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 235 EDV 7B Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],1.2);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 233 EDV 6B
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],0.1);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 233 EDV 6B Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-0.1);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung EDV 6B/EDV 5B Tür 1
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],-0.35);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_22,g1); // Verbindung EDV 6B/EDV 5B
			Floors['S1'][j].position.set(10.25,Floors['y']['S1'],-0.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung EDV 6B/EDV 5B Tür 2
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],-1.05);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum EDV 6B/EDV 5B Tür 1
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-0.525);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_23,g1); // Zwischenraum EDV 6B/EDV 5B
			Floors['S1'][j].position.set(9.5,Floors['y']['S1'],-0.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum EDV 6B/EDV 5B Tür 2
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-0.875);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 225 EDV 5B
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],-1.5);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 225 EDV 5B Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-1.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 223 EDV 4B
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],-2.4);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 223 EDV 4B Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-2.6);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung EDV 4B/EDV 3B Tür 1
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],-2.85);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_25,g1); // Verbindung EDV 4B/EDV 3B
			Floors['S1'][j].position.set(10.25,Floors['y']['S1'],-3.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung EDV 4B/EDV 3B Tür 2
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],-3.75);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 219 EDV 3B
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],-4.2);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 219 EDV 3B Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-4.0);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 217 EDV 6B
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],-5.1);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 217 EDV 6B Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-5.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung EDV 6B/EDV 5B Tür 1
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],-5.55);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_22,g1); // Verbindung EDV 6B/EDV 5B
			Floors['S1'][j].position.set(10.25,Floors['y']['S1'],-5.9);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Verbindung EDV 6B/EDV 5B Tür 2
			Floors['S1'][j].position.set(10.3,Floors['y']['S1'],-6.25);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum EDV 6B/EDV 5B Tür 1
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-5.725);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_23,g1); // Zwischenraum EDV 6B/EDV 5B
			Floors['S1'][j].position.set(9.5,Floors['y']['S1'],-5.9);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum EDV 6B/EDV 5B Tür 2
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-6.075);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 209 EDV 5B
			Floors['S1'][j].position.set(9.7,Floors['y']['S1'],-6.7);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 209 EDV 5B Tür
			Floors['S1'][j].position.set(8.95,Floors['y']['S1'],-6.5);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 207 Schularzt
			Floors['S1'][j].position.set(10.85,Floors['y']['S1'],-8.5);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 207 Schularzt Tür
			Floors['S1'][j].position.set(10.8,Floors['y']['S1'],-7.95);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 205 WartezimS1r
			Floors['S1'][j].position.set(10.25,Floors['y']['S1'],-8.5);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 205 WartezimS1r Tür
			Floors['S1'][j].position.set(10.2,Floors['y']['S1'],-7.95);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 203 Stundenplanung
			Floors['S1'][j].position.set(9.65,Floors['y']['S1'],-8.5);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 203 Stundenplanung Tür
			Floors['S1'][j].position.set(9.6,Floors['y']['S1'],-7.95);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 201 Jugendcoaching
			Floors['S1'][j].position.set(9.05,Floors['y']['S1'],-8.5);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 201 Jugendcoaching Tür
			Floors['S1'][j].position.set(9.0,Floors['y']['S1'],-7.95);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_29,g1); // 202 SitzungszimS1r
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-7.0);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 202 SitzungszimS1r Tür 1
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-6.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_28,g1); // 204-208 Direktion
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-5.5);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 204-208 Direktion Tür 1
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-5.3);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 204-208 Direktion Tür 1
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-5.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_27,g1); // 212 Kanzlei
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-4.15);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 212 Kanzlei Tür
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-4.2);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 210 Sekretariat
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-4.75);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 210 Sekretariat Tür
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-4.8);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 220 Buchhaltung
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-2.55);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 220 Buchhaltung Tür
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-2.6);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 222 WL Schild
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-2.05);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 222 WL Schild Tür
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-2.1);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 224 AV Hager
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-1.55);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 224 AV Hager Tür
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-1.6);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); // 226 Org.-Raum
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-1.05);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 226 Org.-Raum Tür
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-1.1);
			Floors['S1'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_26,g1); //  228 AV Baumg.
			Floors['S1'][j].position.set(4.9,Floors['y']['S1'],-0.55);
			Floors['S1'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S1'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 228 AV Baumg. Tür
			Floors['S1'][j].position.set(5.45,Floors['y']['S1'],-0.6);
			Floors['S1'][j].rotation.set(deg(90),0,0);

	Floors['S2'] = new Array(); var j = 0;
		Floors['S2'][j] = new THREE.Line(rGeo_S2_1,rMat_Line);
			Floors['S2'][j].position.set(0,Floors['y']['S2'],0);
				j += 1;
		Floors['S2'][j] = new THREE.Line(rGeo_S2_2,rMat_Line);
			Floors['S2'][j].position.set(0,Floors['y']['S2'],0);
				j += 1;
		Floors['S2'][j] = new THREE.Line(rGeo_S2_3,rMat_Line);
			Floors['S2'][j].position.set(0,Floors['y']['S2'],0);
				j += 1;
		Floors['S2'][j] = new THREE.Line(rGeo_S2_4,rMat_Line);
			Floors['S2'][j].position.set(0,Floors['y']['S2'],0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_3,g1); // Ecke WC
			Floors['S2'][j].position.set(-0.7,Floors['y']['S2'],1.1);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_4,g1); // Ecke WC
			Floors['S2'][j].position.set(-1.2,Floors['y']['S2'],0.85);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_5,g1); // Gang
			Floors['S2'][j].position.set(2.0,Floors['y']['S2'],1.75);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_6,g1); // Gang
			Floors['S2'][j].position.set(-1.75,Floors['y']['S2'],-0.25);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_7,g1); // Gang
			Floors['S2'][j].position.set(-1.35,Floors['y']['S2'],2.8);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_30,g1); // Brücke 1
			Floors['S2'][j].position.set(6.95,Floors['y']['S2'],1.9);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_32,g1); // Gang Aula Links
			Floors['S2'][j].position.set(8.7,Floors['y']['S2'],-1.55);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_37,g1); // Gang Aula Unten
			Floors['S2'][j].position.set(10.05,Floors['y']['S2'],-7.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 354
			Floors['S2'][j].position.set(3.3,Floors['y']['S2'],0.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 354 Tür
			Floors['S2'][j].position.set(3.6,Floors['y']['S2'],1.35);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 356
			Floors['S2'][j].position.set(2.0,Floors['y']['S2'],0.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 356 Tür
			Floors['S2'][j].position.set(2.3,Floors['y']['S2'],1.35);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 360
			Floors['S2'][j].position.set(0.7,Floors['y']['S2'],0.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 360 Tür
			Floors['S2'][j].position.set(1.0,Floors['y']['S2'],1.35);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 372
			Floors['S2'][j].position.set(-0.7,Floors['y']['S2'],-0.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 372 Tür
			Floors['S2'][j].position.set(-1.35,Floors['y']['S2'],-0.4);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 376
			Floors['S2'][j].position.set(-0.7,Floors['y']['S2'],-2.0);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 376 Tür
			Floors['S2'][j].position.set(-1.35,Floors['y']['S2'],-1.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 378
			Floors['S2'][j].position.set(-0.7,Floors['y']['S2'],-3.3);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 378 Tür
			Floors['S2'][j].position.set(-1.35,Floors['y']['S2'],-3.0);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 379
			Floors['S2'][j].position.set(-2.8,Floors['y']['S2'],-3.3);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 379 Tür
			Floors['S2'][j].position.set(-2.15,Floors['y']['S2'],-3.6);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 377
			Floors['S2'][j].position.set(-2.8,Floors['y']['S2'],-2.0);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 377 Tür
			Floors['S2'][j].position.set(-2.15,Floors['y']['S2'],-2.3);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 375
			Floors['S2'][j].position.set(-2.8,Floors['y']['S2'],-0.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 375 Tür
			Floors['S2'][j].position.set(-2.15,Floors['y']['S2'],-1.0);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 371
			Floors['S2'][j].position.set(-2.8,Floors['y']['S2'],0.6);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 371 Tür
			Floors['S2'][j].position.set(-2.15,Floors['y']['S2'],0.3);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 365
			Floors['S2'][j].position.set(-2.8,Floors['y']['S2'],2.8);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 365 Tür
			Floors['S2'][j].position.set(-2.15,Floors['y']['S2'],2.5);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 363
			Floors['S2'][j].position.set(-0.6,Floors['y']['S2'],2.8);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 363 Tür
			Floors['S2'][j].position.set(-0.9,Floors['y']['S2'],2.15);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 361
			Floors['S2'][j].position.set(0.7,Floors['y']['S2'],2.8);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 361 Tür
			Floors['S2'][j].position.set(0.4,Floors['y']['S2'],2.15);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 359
			Floors['S2'][j].position.set(2.0,Floors['y']['S2'],2.8);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 359 Tür
			Floors['S2'][j].position.set(1.7,Floors['y']['S2'],2.15);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_1,g1); // 357
			Floors['S2'][j].position.set(3.3,Floors['y']['S2'],2.8);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 357 Tür
			Floors['S2'][j].position.set(3.0,Floors['y']['S2'],2.15);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_8,g1); // LehrerzimS2r
			Floors['S2'][j].position.set(4.7,Floors['y']['S2'],2.8);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // LehrerzimS2r Tür
			Floors['S2'][j].position.set(4.3,Floors['y']['S2'],2.15);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_9,g1); // Kleine KamS2r neben Brücke
			Floors['S2'][j].position.set(5.8,Floors['y']['S2'],2.8);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // Kleine KamS2r neben Brücke Tür
			Floors['S2'][j].position.set(5.8,Floors['y']['S2'],2.15);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_35,g1); // 345
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],3.45);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 345 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],3.6);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_35,g1); // 343
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],2.55);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 343 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],2.6);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 337
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],1.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 337 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],1.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 335
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],0.9);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 335 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],0.9);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 333
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],0.1);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 333 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],0.3);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 333/325 Tür 1
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-0.525);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_34,g1); // Zwischenraum 333/325
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],-0.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 333/325 Tür 2
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-0.875);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 325
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],-1.5);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 325 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-1.3);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 323
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],-2.4);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 323 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-2.6);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 319
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],-4.2);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 319 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-4.0);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 317
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],-5.1);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 317 Tür
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-5.3);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 317/309 Tür 1
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-5.725);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_34,g1); // Zwischenraum 317/309
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],-5.9);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_24,g1); // Zwischenraum 317/309 Tür 2
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-6.075);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_20,g1); // 309
			Floors['S2'][j].position.set(9.7,Floors['y']['S2'],-6.7);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 309
			Floors['S2'][j].position.set(8.95,Floors['y']['S2'],-6.5);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_36,g1); // 305
			Floors['S2'][j].position.set(10.75,Floors['y']['S2'],-8.5);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 305 Tür
			Floors['S2'][j].position.set(10.7,Floors['y']['S2'],-7.95);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_36,g1); // 303
			Floors['S2'][j].position.set(9.95,Floors['y']['S2'],-8.5);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 303 Tür
			Floors['S2'][j].position.set(9.9,Floors['y']['S2'],-7.95);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_36,g1); // 301
			Floors['S2'][j].position.set(9.15,Floors['y']['S2'],-8.5);
			Floors['S2'][j].rotation.set(deg(90),0,0);
				j += 1;
		Floors['S2'][j] = new THREE.Mesh(rGeo_Plane_2,g1); // 301 Tür
			Floors['S2'][j].position.set(9.1,Floors['y']['S2'],-7.95);
			Floors['S2'][j].rotation.set(deg(90),0,deg(90));