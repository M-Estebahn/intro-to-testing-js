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