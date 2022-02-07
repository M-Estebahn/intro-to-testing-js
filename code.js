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