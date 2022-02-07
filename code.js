// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (typeof input ==='string' && input != ''&& isNaN(input)) {
        return 'Hello, ' + input + '!';
   }else
       return helloWorld()
}
function isFive(input){
    if (input === 5) {
        return true;
    }else
        return false;
}

function isEven(input) {
    return (typeof input != 'boolean'&& input % 2 ===0)
}