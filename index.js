function getpin(){
    const pin =Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }
    else{
       return getpin()
    }
}
function generatePin(){
     const pin=getpin();
     document.getElementById('display-pin').value= pin
}
document.getElementById('key-pad').addEventListener('click',function(event){

        const number= event.target.innerText
         const calc =document.getElementById('typed-numbers');
         if(isNaN(number)){
            if (number == 'C') {
                calc.value = '';
            }
           
         }
         else{
         const currentValue=calc.value;
         const newcalc=currentValue+number;
         calc.value=newcalc
         

         }


       

});
function verifyPin(){
    const pin =getpin();
    const calcValue= document.getElementById('typed-numbers').value;


    if(pin==calcValue){
        document.getElementById('notify-fail').style.display='none';
        document.getElementById('notify-ducess').style.display='block';

    }else{
        document.getElementById('notify-fail').style.display='block';
        document.getElementById('notify-ducess').style.display='none';
    }
}
