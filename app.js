function getNumber(num) {
    var result = document.getElementById("result")
    result.value += num
}
function clearResult() {
    var result = document.getElementById("result")
    result.value = " "
}
function getResult() {
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function getSqRoot(){
    var result = document.getElementById("result")
    result.value = Math.sqrt(result.value)
}
function getSquare(){
    var result = document.getElementById("result")
    result.value =(result.value) * (result.value)
}
function getCube(){
    var result = document.getElementById("result")
    result.value =(result.value) * (result.value) * (result.value)
}
function getSin(){
    var result = document.getElementById("result")
    result.value = Math.sin(result.value * Math.PI / 180)
}
function getCos(){
    var result = document.getElementById("result")
    result.value = Math.cos(result.value * Math.PI / 180);
}

function getTan(){
    var result = document.getElementById("result")
    result.value = Math.tan(result.value * Math.PI / 180 )
}
function getISin(){
    var result = document.getElementById("result")
    result.value = Math.asin(result.value)
    result.value = result.value * 180 / Math.PI
}
function getICos(){
    var result = document.getElementById("result")
    result.value = Math.acos(result.value );
    result.value = result.value * 180 / Math.PI
}

function getITan(){
    var result = document.getElementById("result")
    result.value = Math.atan(result.value )
    result.value = result.value * 180 / Math.PI
}

function getLog(){
    var result = document.getElementById("result")
    result.value = Math.log(result.value)
}



// function sqrt_function() {
//     flag += 1;
//     result.value += Math.sqrt(result.value);
// }
// function sqrt() {
//     var result = document.getElementById("result")
//     result.value = Math.sqrt(result.value);
// }