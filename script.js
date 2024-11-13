let displayValue = document.getElementById(`display`);
function appendToDisplay(value){
    displayValue.value +=value
}
function clearDisplay(){
    displayValue.value =""
}
function equalsTo(){
    try{
        displayValue.value = eval(displayValue.value);
    }
    catch (error){
        displayValue.value =`Error`;
    }
}
function squareRoot(){
    displayValue.value = Math.sqrt(displayValue.value);
}
