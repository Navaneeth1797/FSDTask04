//  Do the below programs in anonymous function , IIFE & arrow function

//b: Convert all the strings to  title caps in a single array

//  annoymous function

let anonymousstrings = ["navaneeth"];

let titlecapsstr = function (arr) {

    return arr.map((str) => {

     return str.charAt(0).toUpperCase() + str.slice(1);

    });

}; console.log(titlecapsstr(anonymousstrings));  
        //output : ['Navaneeth']

// c : Sum of all numbers in an array

//  annoymous function

let anonymoussum = [1, 2, 3, 4];

let sumofarray = function (arr) {

    return arr.reduce((total, numb) => {

     return total + numb;

    }, 0);

}; console.log(sumofarray (anonymoussum));//output : 10

// d: Return all the prime numbers in an array

//  annoymous function

let anonymousprime = [ 2, 3, 4, 5];

let primeofarray = function (NumberArry) {
    
    return NumberArry.filter((anonymousprime) => {

        for (let i = 2; i <= Math.sqrt(anonymousprime); i++) {

            if (anonymousprime % i == 0) return false;
        
        }

        return true;

    });
    
}; console.log(primeofarray(anonymousprime));//output : [2,3,5]

// e:  Return all the palindromes in an array

//  anonymous function

let annoymouswords = ["level", "cow", "world"];

let palindromeWords = (function (arrwords) {

    let thepalindromeWords = function (palindromesword) {

        palindrome = palindromesword.split('').reverse().join('');

        return palindromesword == palindrome

    }

    return arrwords.filter(function (palindromesword) {
    
        return thepalindromeWords(palindromesword);
        
    });

});  console.log(palindromeWords(annoymouswords));//output : ['level']
     
// f: Return median of two sorted arrays of same size

// Anonymous function

let median1 = [2, 7, 3, 8, 4];

let median2 = [6, 9, 1, 5,];

let theanonymousmed = (function (median1, median2) {
    
    median = [...median1, ...median2].sort((a, b) => a - b);
    
     length = median.length;
    
     midIndex = Math.floor(length / 2);

      return length % 2 === 0
      
         ? (median[midIndex - 1] + median[midIndex]) / 2
        
         : median[midIndex];
    
}); console.log(theanonymousmed(median1, median2));//output : 5

// g : Remove duplicates from an Array

//  Anonymous function

let  Anonymousarray= [9, 1, 1 , 1, 3 , 6 , 6 , 9];

let newArray = (function (arr) {
    
    Setarr = new Set(arr);
    
     return Array.from(Setarr);
    
}); console.log(newArray(Anonymousarray));//output : [9,1,3,6]

// h: Rotate an array by K times

//  Anonymous function 
    
let AnonymousArray = [6, 8, 9,];

let k = 1; 

let therotatedArray = (function (AnonymousArray, k) {
    
     totalnumbr = AnonymousArray.length;
  
     Rotations = k % totalnumbr;

     Anonymousr1 = AnonymousArray.slice(0, totalnumbr - Rotations);
    
     Anonymousr2 = AnonymousArray.slice(totalnumbr - Rotations);

     return Anonymousr2.concat(Anonymousr1);
    
}); console.log(therotatedArray(AnonymousArray, k));//output : [9,6,8]

// a: print odd numbers in an array

//   Anonymous function

let anonymousnumbers = [6, 3, 8 ];

let oddnumbers = function (arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            
            console.log(arr[i]);
        }
    }
       
}; return oddnumbers(anonymousnumbers);//output : 3


    






                