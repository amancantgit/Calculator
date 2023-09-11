let result = document.getElementById('result');

function buttonClicked(value){
    if(result.value === '0'){
        result.value = value;
    }
    else{
        result.value += value;
    }
}
function clearDisplay(){
    result.value = '0';
}

function calculate(){
    result.value = eval(result.value);
}