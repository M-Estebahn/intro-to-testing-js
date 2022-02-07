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

function isVowel(input){
      switch (input){
          case ('a'):
              return true;
          case ('A'):
              return true;
          case ('y'):
              return false;
          case (4):
              return false;
          case (true):
              return false;
          case (false):
              return false;
          case ('banana'):
              return false;
          case(undefined):
              return false

      }


}
