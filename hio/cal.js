// JavaScript Document
function calc(){
	var dis = Number(document.cal.dis.value);
	var hi = parseFloat(document.cal.hi.value);
	var nhi = Math.floor(hi);
	if (hi>0){

		var ch = Number((-1)*Math.floor(nhi/3));
	}
	else if (hi<0){

		var ch = Number((-1)*(Math.floor(nhi/3))-1);
	}

	var c = dis+ch;
	document.cal.c.value = c;
	if (c>=185&&c<=189){
		var cto = (c*0.33)/185;
	}
	else if (c>=190&&c<=194){
		var cto = (c*0.35)/190;
	}
	else if (c>=195&&c<=199){
		var cto = (c*0.37)/195;
	}
	else if (c>=200&&c<=204){
		var cto = (c*0.40)/200;
	}
	else if (c>=205&&c<=209){
		var cto = (c*0.43)/205;
	}
	else if (c>=210&&c<=214){
		var cto = (c*0.46)/210;
	}
	else if (c>=215&&c<=219){
		var cto = (c*0.49)/215;
	}
	else if (c>=220&&c<=224){
		var cto = (c*0.52)/220;
	}
	else if (c>=225&&c<=229){
		var cto = (c*0.54)/225;
	}

	else if (c>=230&&c<=234){
		var cto = (c*0.58)/230;
	}
	else if (c>=235&&c<=239){
		var cto = (c*0.61)/235;
	}
	else if (c>=240&&c<=244){
		var cto = (c*0.65)/240;
	}
	else if (c>=245&&c<=249){
		var cto = (c*0.68)/245;
	}
	else if (c>=250&&c<=254){
		var cto = (c*0.72)/250;
	}

	else if (c>=255&&c<=259){
		var cto = (c*0.75)/255;
	}
	else if (c>=260&&c<=264){
		var cto = (c*0.8)/260;
	}
	else if (c>=265&&c<=269){
		var cto = (c*0.84)/265;
	}
	else if (c>=270&&c<=274){
		var cto = (c*0.88)/270;
	}
	else if (c>=275&&c<=279){
		var cto = (c*0.93)/275;
	}
	document.cal.ctos.value = cto;

	//input wind
	var wind = Number(document.cal.wind.value);
	var angwind = Number(document.cal.angw.value);

	//cal wind
	var sinanwin = Math.sin((angwind*3.14)/180);
	var ce = (cto*wind * sinanwin)/0.217;

	var windeff = cto*wind*(Math.cos((angwind*3.14)/180))//(cto*wind*Math.cos((angwind*3.14)/180));

	var celll = ce / 4.5;

	document.cal.cell.value= (celll);

	var windpo = Number(document.cal.windp.value);
	if (windpo==1||windpo==3){
		document.cal.pcell.value="Move Left";
	}
	else if (windpo==2||windpo==4){
		document.cal.pcell.value="Move Right";
	}
	var po = dis+hi;
	//Power cal
	if (po>=214&&po<=221){
		var pow = po+5;
	}
	else if (po>=222&&po<=228){
		var pow = po+4;
	}
	else if (po>=229&&po<=235){
		var pow = po+3;
	}
	else if (po>=236&&po<=242){
		var pow = po+2;
	}
	else if (po>=243&&po<=249){
		var pow = po+1;
	}
	else if (po>=250&&po<=256){
		var pow = po;
	}
	else if (po>=257&&po<=263){
		var pow = po-1;
	}
	else if (po>=264&&po<=270){
		var pow = po-2;
	}
	else if (po>=271&&po<=277){
		var pow = po-3;
	}


	if (windpo == 1|| windpo ==2){
		var power = pow-windeff ;
	}
	else if (windpo==3||windpo==4){

			var power = pow+windeff ;
	}
	

	document.cal.power.value=power;
}
