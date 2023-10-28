// a: print odd numbers in an array

//IIFE function

let IIfEtotalnumbers = [6, 4, 5];

console.log ((function (arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {

           console.log(arr[i]);
        }
    }
       
})(IIfEtotalnumbers)); //output : 5

//b: Convert all the strings to  title caps in a single array

//IIFE function

let IIFEstrings = ["navaneeth"];

console.log ((function (arr) {

    return arr.map((str) => {

        return str.charAt(0).toUpperCase() + str.slice(1);
        
    });
    
})(IIFEstrings));//output : ['Navaneeth']

// c : Sum of all numbers in an array

//IIFE function

let IIFEsums = [1, 2, 3, ];

console.log((function (arr) {

    return arr.reduce((total, numb) => {
        
        return total + numb;

    }, 0);
    
})(IIFEsums));//output:6

// d: Return all the prime numbers in an array

//IIFE function

let IIFEprime = [5, 6, 7, 8, 9]

console.log((function (numberArry) {

    return numberArry.filter((IIFEprime) => {

        for (let i = 2; i <= Math.sqrt(IIFEprime); i++) {

            if (IIFEprime % i == 0) return false;
        }
        return true;

    });
    
})(IIFEprime));//outpu:[5, 7]

// e:  Return all the palindromes in an array

// IIFE function

let iifewords = [ "world",  "sick", "mom" , "dad"];

console.log((function (arrwords) {

    let thepalindromeWords = function (palindromesword) {

        palindrome = palindromesword.split('').reverse().join('');

        return palindromesword == palindrome
    }

    return arrwords.filter(function (palindromesword) {

        return thepalindromeWords(palindromesword);
    });

})(iifewords));//output: ['mom', 'dad']

// f: Return median of two sorted arrays of same size

// IIFE function

let Median1 = [2, 7, 3, 8, 4];

let Median2 = [6, 9, 1, 5,];

console.log(function (Median1, Median2) {
    
    median = [...Median1, ...Median2].sort((a, b) => a - b);
    
    length = median.length;
    
    midIndex = Math.floor(length / 2);

    return length % 2 === 0
      
        ? (median[midIndex - 1] + median[midIndex]) / 2
        
        : median[midIndex];
    
} (Median1, Median2));//output : 5

// g : Remove duplicates from an Array

//  IIFE function

let  IIFEarray= [9, 1, 1 , 1, 7 , 6 , 6 , 9];

console.log(function (arr) {

    Setarr = new Set(arr);

    return Array.from(Setarr);

} (IIFEarray));//output : [9,1,7,6]

// h: Rotate an array by K times

//  IIFE function  

let IIFEArray = [6, 8, 9, 4, 5];

let knumber = 3; 

console.log((function (AnonymousArray, k) {

    totalnumbr = AnonymousArray.length;

    Rotations = k % totalnumbr;

    Anonymousr1 = AnonymousArray.slice(0, totalnumbr - Rotations);
    
    Anonymousr2 = AnonymousArray.slice(totalnumbr - Rotations);

    return Anonymousr2.concat(Anonymousr1);

})
    (IIFEArray, knumber));//output : [9,4,5,6,8]
