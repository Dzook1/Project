function display(x){
    let display = document.getElementById('display');
    display.innerHTML += x.innerHTML;
}

function solve(){
    let x = document.getElementById('display').innerHTML
    let y = eval(x);
    document.getElementById('display').innerHTML = y
    return y
}

function clearDisplay(){
    location.reload()
}