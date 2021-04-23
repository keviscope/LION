

/*
function valuecal(result){
    calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
}


*/



function togglemenu(){
  
    document.querySelector('.sideBar').classList.toggle('active');
}


function togglemenu1(){
  
    document.querySelector('.sideBar1').classList.toggle('active');
}


//opening history
let historyZone = document.querySelector('#historyZone');

function historyTouch(){
    historyZone.style.display = "block";  
    buttonCalculator.style.display = "none";
    manualCalculator.style.display = "none";
    percentageCalculator.style.display = "none";
    contactUsNow.style.display = "none";

}



//simple calc
let buttonCalculator = document.querySelector('#buttonCalculator');
function simpleCal(){
    buttonCalculator.style.display = "block";
    historyZone.style.display = "none";  
    manualCalculator.style.display = "none";
    percentageCalculator.style.display = "none";
    contactUsNow.style.display = "none";
}


//manual calc
let manualCalculator = document.querySelector('#manualCalculator');
function manualCal(){
    manualCalculator.style.display = "block";
    contactUsNow.style.display = "none";
    buttonCalculator.style.display = "none";
    historyZone.style.display = "none";  
     percentageCalculator.style.display = "none";
}



//percentage calc
let percentageCalculator = document.querySelector('#percentageCalculator');
function percentageCal(){
    contactUsNow.style.display = "none";
    percentageCalculator.style.display = "block";
    buttonCalculator.style.display = "none";
    historyZone.style.display = "none";  
    manualCalculator.style.display = "none";
}




//contact us part
let contactUsNow = document.querySelector('#contactUs');
function contactUs(){
    contactUsNow.style.display = "block";
    percentageCalculator.style.display = "none";
    buttonCalculator.style.display = "none";
    historyZone.style.display = "none";  
    manualCalculator.style.display = "none";
}











//simple calculator


let resultcool = document.querySelector('#result2');

  let emptyResult = document.querySelector('#result2').value;
  emptyResult = "";

function view(num){
    document.querySelector('#result2').value+=num;
  
}

function dotMan(dotLa){
    


     if(resultcool.value.match(/^\d+(\.\d+)?([+\-*\/]\d+(\.\d+)?)*$/)){
        document.querySelector('#result2').value+=dotLa; 
     }
     
    }
 /*
      if(result == operando){
        document.querySelector('#result2').value+=dotLa;
        alert(1);
     }
     */
     
  


function ope(rator){
    if(resultcool.value.match(/^\d+(\.\d+)?([+\-*\/]\d+(\.\d+)?)*$/)){
        document.querySelector('#result2').value+=rator;          
    }   
        }
 




let history = document.querySelector('#history');
let clearhistory = document.querySelector('#clear-history');
let historyStatus = document.querySelector('#historyStatus');
let Nohistory = document.querySelector('#Nohistory');

function compute(){
    let x =  document.querySelector('#result2').value;
    if(x == ""){
        return false;
    }
    else{

       
       
    let y = eval(x);


    document.querySelector('#result2').value = y;
 
    

      historyStatus.style.display = 'block';
      Nohistory.style.display = 'none';
  

    para = document.createElement('li');
    para2 = document.createElement('p');
    para2.appendChild(para);

    data = x + " = " + y;
    para.innerText = data;
    history.appendChild(para2);
    return y;
   
  
}
}




 

function clearBox(){
    document.getElementById('history').innerHTML = "";
       
  if(historyStatus.style.display == 'block' && Nohistory.style.display == 'none'){
    historyStatus.style.display = 'none';
    Nohistory.style.display = 'block'
}
  else{
      historyStatus.style.display = 'block';
      Nohistory.style.display = 'none';
  }
}








function clr(){
    document.getElementById("result2").value = "";

}



   

function backspace(){
    let waka = document.getElementById("result2").value;
    document.getElementById("result2").value = waka.substring(0,waka.length -1);
}





















































//manual calculator
let historyManual = document.querySelector('#historyManual');
function calc(){
   
let n1 = parseInt(document.querySelector('#n1').value);
let n2 = parseInt(document.querySelector('#n2').value);

let n11 = document.querySelector('#n1').value;
let n22 = document.querySelector('#n2').value
if(n11 == "" || n22 == ""){
    return false 
}
else{



    historyStatus2.style.display = 'block';
    Nohistory2.style.display = 'none';


let decision = document.querySelector('#decision').value;

if(decision === "+"){
    
    let plus = n1 + n2;
    document.querySelector('#resultBobo').value = plus;
    
paraManual = document.createElement('p');
dataManual = `${n1} + ${n2} = ${n1 + n2}`;
paraManual.innerText = dataManual;
historyManual.appendChild(paraManual);
return n1 + n2;
    
}



if(decision === "-"){
    let minus = n1 - n2;
    document.querySelector('#resultBobo').value = minus;

    paraManual2 = document.createElement('p');
    dataManual2 = `${n1} - ${n2} = ${n1 - n2}`;
    paraManual2.innerText = dataManual2;
    historyManual.appendChild(paraManual2);
    return n1 - n2;

}

if(decision === "*"){
    let multi = n1 * n2;
    document.querySelector('#resultBobo').value = multi;

    paraManual3 = document.createElement('p');
    dataManual3 = `${n1} * ${n2} = ${n1 * n2}`;
    paraManual3.innerText = dataManual3;
    historyManual.appendChild(paraManual3);
    return n1 * n2;
}

if(decision === "/"){
    let divide =  n1 / n2;
    document.querySelector('#resultBobo').value = divide;

    paraManual4 = document.createElement('p');
    dataManual4 = `${n1} / ${n2} = ${n1 / n2}`;
    paraManual4.innerText = dataManual4;
    historyManual.appendChild(paraManual4);
    return n1 / n2;
}
}
}






function clearBox2(){
    document.getElementById('historyManual').innerHTML = "";
       
  if(historyStatus2.style.display == 'block' && Nohistory2.style.display == 'none'){
    historyStatus2.style.display = 'none';
    Nohistory2.style.display = 'block'
}
  else{
      historyStatus2.style.display = 'block';
      Nohistory2.style.display = 'none';
  }
}









// allow only numbers and dot
function isNumberKey(evt,id){

        let numericConfirm = (evt.which) ? evt.which : evt.keycode;
if(numericConfirm == 46){
    var txt=document.getElementById(id).value;
    if(!(txt.indexOf(".") > -1)){
        return true;
    }
}

        if(numericConfirm > 31 && (numericConfirm < 48 || numericConfirm > 57)){
            return false;
            return true;
        }
        }
        
       
     
        function clearManual(){
         document.querySelector('#resultBobo').value = "";
         document.getElementById("n1").value = "";
         document.getElementById("n2").value = "";
        }
     






























// Percentage calculator


let historyPercentge = document.querySelector('#historyPercentge');
function calcPercent(){    
    let dodo = parseInt(document.querySelector('#dodo').value);
    let dodoPercent = parseInt(document.querySelector('#dodoPercent').value);
    
let dodo1 = document.querySelector('#dodo').value;
let dodoPercent1 = document.querySelector('#dodoPercent').value;

if(dodo1 == "" || dodoPercent1 == "" ){
return false;
}
else{

    historyStatus3.style.display = 'block';
    Nohistory3.style.display = 'none';

    percentPara = document.createElement('p');
    percentData = `${dodoPercent}% of ${dodo} = ${(dodo/100)*dodoPercent}`;
    percentPara.innerText = percentData;

    document.querySelector('#percentResult').value = percentData;
    
    percentPara = document.createElement('p');
    percentData = `${dodoPercent}% of ${dodo} = ${(dodo/100)*dodoPercent}`;
    percentPara.innerText = percentData;
    historyPercentge.appendChild(percentPara);
    return (dodo/100)*dodoPercent;
}
}



function clearPercent(){
    document.querySelector('#percentResult').value = "";
    document.getElementById('dodoPercent').value = "";
    document.getElementById('dodo').value = "";
}




function clearBox3(){
    document.getElementById('historyPercentge').innerHTML = "";
       
  if(historyStatus3.style.display == 'block' && Nohistory3.style.display == 'none'){
    historyStatus3.style.display = 'none';
    Nohistory3.style.display = 'block'
}
  else{
      historyStatus3.style.display = 'block';
      Nohistory3.style.display = 'none';
  }
}






















// contact Us part


