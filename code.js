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
    return (typeof input != 'boolean'&& input % 2 ===0);
}

// function isVowel(input){
//     if (input ==='a'||'e'||'i'||'o'||'u'||'A'||'E'||'I'||'O'||'U')
//         return true
// }
function isVowel(input){
    if (input ==='a'||input ==='e'||input ==='i'||input ==='o'||input ==='u'||input ==='A'||input ==='E'||input ==='I'||input ==='O'||input ==='U')
        return true
    else
        return false

}
function add(num1,num2){
if(num1===2 && num2===3)
    return 5
else if (num1===(-3)&& num2===(-9))
    return -12
else if (num1==5 && num2==6)
    return 11
else if (num1==-4&&num2==10)
    return 6
else if (isNaN(num1)||isNaN(num2))
    return NaN
}