const display=document.getElementById("display")

function appendTodisplay(input){
    display.value += input;
    
}
function deletTodisplay(){
   display.value = display.value.slice(0,-1) ;
   
}


function calculate(){
    try{ 
        display.value = eval(display.value)
     }
     catch{
        display.value = "error"
     }
   } 
   
   
 function cleardisplay(){
    display.value = ""
 }