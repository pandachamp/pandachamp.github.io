// Beam Impact with 6i BY Byakko ENE

function calbeam(){
	var dis = Number(document.cal.dis.value);
	var wind = Number(document.cal.wind.value);
	var angwind = Number(document.cal.angwind.value);
	var windp = Number(document.cal.windp.value);
	
	//Greencell
	var greencell = 0.006*wind*Math.sin((angwind*3.14)/180)*dis;
	
	document.cal.green.value = greencell;
	
	//Power
	var ppower;

	if(dis<=20){
		ppower = dis-3;
	}
	else if(dis>20){
		if(windp==2){
			ppower = (dis-3)-(wind/3);
		}
		else if(windp==1){
			ppower = (dis-3)+(wind/3);
		}
	}

	document.cal.powerp.value = ppower;

	var power = (140*ppower)/100;

	document.cal.powerr.value = power;
	
}