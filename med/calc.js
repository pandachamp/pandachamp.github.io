/*Develop by @mingmon
*Copyright (c) 2014
*eiei
*/
var phy=0;
var che=0;
var bio=0;
function Calphy(){
		phy = parseFloat(document.frm.phy.value);
		document.frm.phys.value=(phy*(40/3))/100;
		CalSci();
	}
function Calche(){
		che = parseFloat(document.frm.che.value);
		document.frm.ches.value=(che*(40/3))/100;
		CalSci();
	}
function Calbio(){
		bio = parseFloat(document.frm.bio.value);
		document.frm.bios.value=(bio*(40/3))/100;
		CalSci();
	}
function CalSci(){
		if((bio+che+phy)<90){
			document.frm.phys.value="ไม่ถึง 30";
			document.frm.ches.value="ไม่ถึง 30";
			document.frm.bios.value="ไม่ถึง 30";
		}
		else{
		document.frm.phys.value=(phy*(40/3))/100;
document.frm.ches.value=(che*(40/3))/100;
document.frm.bios.value=(bio*(40/3))/100;
}
	}
function Calmat(){
		var mat = parseFloat(document.frm.mat.value);
		document.frm.mats.value=(mat*20)/100;
		if(mat<30){
			document.frm.mats.value="ไม่ถึง 30";
		}
	}
function Caleng(){
		var eng = parseFloat(document.frm.eng.value);
		document.frm.engs.value=(eng*20)/100;
		if(eng<30){
			document.frm.engs.value="ไม่ถึง 30";
		}
	}
function Caltha(){
		var tha = parseFloat(document.frm.tha.value);
		document.frm.thas.value=(tha*10)/100;
		if(tha<30){
			document.frm.thas.value="ไม่ถึง 30";
		}
	}
function Calsoc(){
		var soc = parseFloat(document.frm.soc.value);
		document.frm.socs.value=(soc*10)/100;
if(soc<30){
			document.frm.socs.value="ไม่ถึง 30";
		}
	}
function Calsum(){
		var socs = parseFloat(document.frm.socs.value);
		var thas = parseFloat(document.frm.thas.value);
		var engs = parseFloat(document.frm.engs.value);
		var mats = parseFloat(document.frm.mats.value);
		var bios = parseFloat(document.frm.bios.value);
		var ches = parseFloat(document.frm.ches.value);
		var phys = parseFloat(document.frm.phys.value);
		document.frm.sums.value= socs + thas + engs + mats + bios + ches + phys +"%";

}
function Cal70(){
		var sev = parseFloat(document.frm.sums.value);
		document.frm.sevs.value= (sev*70) / 100;
	}
function Calex(){
		var ex = parseFloat(document.frm.ex.value);
		document.frm.exs.value=ex / 10;
	}
function Calallsum(){
		var x1 = parseFloat(document.frm.sevs.value);
		var x2 = parseFloat(document.frm.exs.value);
		document.frm.allsum.value= x1 + x2;
	}
function Calprop(){
		if(document.frm.allsum.value<56.557){
			document.frm.propp.value="ไม่เป็นไรนะ รอบหน้ายังมีอีก:)";
			}
			else if(document.frm.allsum.value<57.5751){
			document.frm.propp.value="Med : รังสิต";
			}
			else if(document.frm.allsum.value<58.5012){
			document.frm.propp.value="Med : รังสิต Dent : มอ";
			}
			else if(document.frm.allsum.value<58.6309){
			document.frm.propp.value="Med : รังสิต , มอ Dent : มอ";
			}
			else if(document.frm.allsum.value<58.8665){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช)  Dent : มอ";
			}
			else if(document.frm.allsum.value<59.2495){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน Dent : มอ ";
			}
			else if(document.frm.allsum.value<59.4154){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน Dent : มอ , มช ";
			}
			else if(document.frm.allsum.value<59.4929){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน  Dent : มอ , มช , มศว";
			}
			else if(document.frm.allsum.value<60.0256){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) Dent : มอ , มช , มศว";
			}
			else if(document.frm.allsum.value<60.0736){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว Dent : มอ , มช , มศว ";
			}
			else if(document.frm.allsum.value<60.4764){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว Dent : มอ , มช , มศว , มหิดล";
			}
			else if(document.frm.allsum.value<61.2369){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว , มข Dent : มอ , มช , มศว , มหิดล";
			}
			else if(document.frm.allsum.value<61.6031){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว , มข , มช Dent : มอ , มช , มศว , มหิดล";
			}
			else if(document.frm.allsum.value<62.7175){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว , มข , มช , มธ Dent : มอ , มช , มศว , มหิดล";
			}
			else if(document.frm.allsum.value<62.9242){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว , มข , มช , มธ , วชิระ Dent : มอ , มช , มศว , มหิดล";
			}
			else if(document.frm.allsum.value<64.5662){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว , มข , มช , มธ , วชิระ Dent : มอ , มช , มศว , มหิดล , จุฬา";
			}
			else if(document.frm.allsum.value<65.6714){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว , มข , มช , มธ , วชิระ , รามา Dent : มอ , มช , มศว , มหิดล , จุฬา";
			}
			else if(document.frm.allsum.value<67.9738){
			document.frm.propp.value="Med : รังสิต , มอ , วพม(ช) , มน , วพม(ญ) , มศว , มข , มช , มธ , วชิระ , รามา , ศิริราช Dent : มอ , มช , มศว , มหิดล , จุฬา";
			}
			else if(document.frm.allsum.value>=67.9738){
			document.frm.propp.value="เก่งมาก ท่านมีโอกาศติดได้ทุกสถาบัน ^____^ ยินดีด้วยนะ";
			}
			else if(isNaN(document.frm.allsum.value)){
			document.frm.propp.value="ใส่ไม่ถูกต้อง";
			}
			else if (document.frm.allsum.value == "" ){
			document.frm.propp.value="ใส่ข้อมูลให้ครบทุกช่องก่อนครับ";
			}
}
function  openmes()
{
	var  leftVal = (screen.width - 600) / 2
	var  topVal = (screen.height - 400) / 2
	window.open('mes.html', 'Message', 'width=600,height=400,left='+leftVal+',top='+topVal+'scrollbars=0,resizable=0')
}
function  opench()
{
	var  leftVal = (screen.width - 600) / 2
	var  topVal = (screen.height - 400) / 2
	window.open('change.html', 'Change log v2.1', 'width=600,height=400,left='+leftVal+',top='+topVal+'scrollbars=0,resizable=0')
}
