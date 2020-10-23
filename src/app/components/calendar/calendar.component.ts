import { NgModule, Component, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { ToMatrixPipe } from '../../toMatrix.pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert } from '../../Models/alert'; 
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  public alert: Alert;

  public show: boolean;
  public firstDayActual: number;
  public firstDayMLast: number;
  public numberDays: number;
  public numberDaysMonthL: number;
  public daysNumberDaysMonthL: number;
  public lastDay: number;
  public today = new Date();

  public dayToday: String;
  public dayTodayShow: String;
  public daySelect = new Date();
  public todayChange = new Date();
  public arrayDays: number[];
  public arrayMesActual: number[];
  public arrayMesAnt: number[];
  //public arrDays: String[];
  public arrayMesPost: [];
  public nameDay: String;  
  public nameMonth: String;

  arr = [1,2,3,4,5,6,7];
  n = 7;

  
  constructor(private modal: NgbModal) {
        this.alert = new Alert(0,'','','','');
        this.show= true; 
  }

  ngOnInit(): void {
    this.obtenerfecha();              
  }

      onSubmit(){
        console.log(this.alert);
      }

      closeModal(){
        this.show= true;
      }

      getDateView(date){
        var ddv = String(date.getDate()).padStart(2, '0'); 
        var mmv = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyyv = date.getFullYear();
       
        var changeDate2 = new Date(mmv+'/'+ddv+'/'+yyyyv);
        console.log("vvvvvv fecha a formar"+ (mmv+'/'+ddv+'/'+yyyyv));
        //this.today=  changeDate2;
       // console.log("LA FECHA A FORMAR this.today" +  this.today2); 
        var firstDay = new Date(mmv+'/'+ddv+'/'+yyyyv);
        var diaMes = firstDay.getDay();
      console.log("vvvvvv diaMes: " + diaMes);
      this.calcNameDay(diaMes);
      }
 

calcNameDay(dd){    
  console.log("valor dd: " + dd);
  var num: number;
  num = +dd;
  var x = 5 - num;
  console.log(" vaR X : " + x); 
  console.log("valor dd: " + dd);
  var arrDays =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     for(var i = 0; i< arrDays.length; i++) {      
     var y = i + num; 
     console.log("valor de i: " +i);
     console.log(" **************  suma i + x : " + y );
        if (i == num) {
             console.log("El dia de la semana es: "+ arrDays[i]);
             this.dayToday = arrDays[i];
        }
      }
    }

  diaSemana(date){
    var year = date.getYear();    
    var month = date.getMonth();    
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    this.numberDays= daysInMonth;
    console.log("Numero de Dias en mes actual: " + daysInMonth );
    
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    var firstDay = new Date(mm+'/'+"01"+'/'+yyyy);
    var diaMes = firstDay.getDay();
    this.firstDayActual = diaMes;
    console.log("Primer Dia de la semana en el mes actual : "+ diaMes);
    
    
    //******* Mes anterior  */
    let daysInMonth2 = new Date(2020, month, 0).getDate();
    this.numberDaysMonthL =daysInMonth2;
    console.log("Numero dias del mes anterior: "+ daysInMonth2);
    var mm2 = String(date.getMonth() ).padStart(2, '0'); //January is 0!
    var yyyy2 = date.getFullYear();
    var lastDay = new Date(mm2+'/'+this.numberDaysMonthL.toString()+'/'+yyyy2);
    var diasemanamesant = lastDay.getDay();
    this.daysNumberDaysMonthL = diasemanamesant;
    console.log("Ultimo día mes anterior : "+ diasemanamesant);

// para CHECAR salida mes completo
//    console.log("firstDay "+firstDay);
//    console.log("firstDay get "+ firstDay.getDay());
    
    var dia0 = 6 - firstDay.getDay();
    console.log("dias del mes anterior en primera semana calendario: "+ dia0);
    dia0= daysInMonth2-dia0;
    this.firstDayMLast = dia0;
    console.log("Primer día en semana calendario: "+ dia0);  
    this.insertar();
  }



  obtenerfecha(){
    this.today= new Date();
  
    this.diaSemana(this.today);
    this.getDateView(this.today);
  }


    cambiaFecha(cambio){
      this.today= new Date()
      var envia = cambio;
      this.changeM(this.today, envia);
    }

    changeM(date, valor){
       
      console.log("Trae como valor: " + valor);
      var dd = String(date.getDate()).padStart(2, '0');
      if (valor>0) {  
          var mm = String(date.getMonth() + 2).padStart(2, '0'); //January is 0!
          console.log("entro a 1");
        }
      else
        {
          console.log("entro a 0");
          var mm = String(date.getMonth() - 2).padStart(2, '0'); //January is 0!
        }
        var yyyy = date.getFullYear();
        console.log("mes mm:" + mm);
        var changeDate = new Date(mm+'/'+dd+'/'+yyyy);
        console.log("fecha a formar"+ (mm+'/'+dd+'/'+yyyy));
        this.today=  changeDate;
        console.log("************** this.today" +  this.today);
        this.diaSemana(this.today);

    }
  

    insertar(){

      this.arrayDays = new Array(0);
    //  console.log("Length de this.arrayDays: "+ this.arrayDays.length);
      var nDayAntArray = this.numberDaysMonthL-this.firstDayMLast;
   //   console.log("----------x nDayAntArray: "+ nDayAntArray);
      var arr_mesant: number[] = new Array(nDayAntArray)  
      for(var i = 0; i<= nDayAntArray; i++) { 
        arr_mesant[i] = this.firstDayMLast+i;  
        this.arrayDays.push(arr_mesant[i]);
        //pone los dias del mes
        //console.log("Este es el array arr_mesant : "+   arr_mesant[i]); 
       
      }
     

      //aca inserto los numeros en el array de días mes actual
      var arr_mes:number[] = new Array(this.numberDays)  
      for(var i = 0;i<arr_mes.length;i++) { 
        arr_mes[i] = i+1;  
        this.arrayDays.push(arr_mes[i]);
        
        //pone los dias del mes
       // console.log("Este es el array: "+ arr_names[i]) 
      }

  // *para checar
   //*   console.log("dias mes: "+ this.numberDays + "dias ant " + this.daysNumberDaysMonthL);
      var nDaysPost = 42 - (this.numberDays+this.daysNumberDaysMonthL);
   // *   console.log("dias xxxx nDaysPost: "+ nDaysPost);
      var arr_mesPost: number[] = new Array(nDaysPost)  
      for(var i = 0 ;i< nDaysPost; i++) { 
        arr_mesPost[i] = i+1;  
        this.arrayDays.push(arr_mesPost[i]);
              //pone los dias del mes
        
      }

      console.log("valr xdays: "+ this.arrayDays);



    
    
    }

}
  

