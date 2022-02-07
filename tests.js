// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
        it('should be a defined function', function () {
            expect(typeof sayHello).toBe('function');
        });
        it('should return a string when called', function () {
            expect(typeof sayHello()).toBe('string');
        });
        it('should return the string "Hello, Jane!" when executed', function () {
            expect(sayHello('Jane')).toBe('Hello, Jane!');
         });
        it('should return "Hello Alex" when passed an input of alex ', function () {
            expect(sayHello('Alex')).toBe('Hello, Alex!');
        });
        it('should return "Hello, Pat!" when passed an input of Pat', function () {
            expect(sayHello('Pat')).toBe('Hello, Pat!');
        });
        it('should return "Hello, World!', function () {
            expect(sayHello(true)).toBe('Hello, World!');
        });
        it('should return "Hello, World!', function () {
            expect(sayHello(false)).toBe('Hello, World!');
        });
        it('should return "Hello, World!', function () {
            expect(sayHello(null)).toBe('Hello, World!');
        });
        it('should return "Hello, World!', function () {
            expect(sayHello('')).toBe('Hello, World!');
        });
        it('should return "Hello, World!', function () {
            expect(sayHello(2.3)).toBe('Hello, World!');
        });
        it('should return "Hello, World!', function () {
            expect(sayHello('5')).toBe('Hello, World!');
        });

    }
)
describe('isFive', function(){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a Boolean no matter the input', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 2 as an argument', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed -4 as an argument', function () {
        expect(isFive(-4)).toBe(false);
    });
    it('should return false when passed 3 as an argument', function () {
        expect(isFive(3)).toBe(false);
    });
    it('should return false when passed "banana" as an argument', function () {
        expect(isFive('banana')).toBe(false);
    });
    it('should return false when passed "5" as an argument', function () {
        expect(isFive('5')).toBe(false);
    });
    it('should return false when passed Infinity as an argument', function () {
        expect(isFive(Infinity)).toBe(false);
    }); it('should return false when passed the boolean true as an argument', function () {
        expect(isFive(true)).toBe(false);
    });
});

describe('isEven',function () {
    it('should be a defined function ', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a Boolean value regardless of input', function () {
        expect(typeof isEven() ).toBe('boolean');
    });
    it('should return true when passed an input of 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when passed an input of -4', function () {
        expect(isEven(-4)).toBe(true)
    }); it('should return false when passed an input of 3', function () {
        expect(isEven(3)).toBe(false)
    }); it('should return false when passed an input of "banana"', function () {
        expect(isEven('banana')).toBe(false)
    }); it('should return true when passed an input of "8"', function () {
        expect(isEven('8')).toBe(true)
    }); it('should return false when passed an input of true', function () {
        expect(isEven(true)).toBe(false)
    }); it('should return false when passed an input of false', function () {
        expect(isEven(false)).toBe(false)
    }); it('should return false when passed an input of "5"', function () {
        expect(isEven('5')).toBe(false)
    }); it('should return false when passed an input of "5"', function () {
        expect(isEven('5')).toBe(false)
    });

})
describe('isVowel',function (){
    it('should a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value no matter what input', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed a value of "a"', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when passed a value of "A"', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when passed a value of "y"', function () {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when passed a value of 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed a value of false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed a value of true', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false when passed a value of "banana"', function () {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when passed not passed a value', function () {
        expect(isVowel()).toBe(false)
    });
});
