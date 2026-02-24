function test(){
    console.log("testing js files");
}

function add(a, b){
    console.log("addition: " + (a + b));
}

function sub(a, b){
    console.log("subtraction: " + (a - b));
}

module.exports = { add, sub };