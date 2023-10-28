//b: Convert all the strings to  title caps in a single array

//  Arrow function

let arrowstrings = ["navaneeth"];

let arrowuppercase = arrowstrings.map((str) => {

    return str.charAt(0).toUpperCase() + str.slice(1);
    
 }) ; console.log ( arrowuppercase); //output:['Navaneeth']

// c : Sum of all numbers in an array

//  Arrow function

let arrowsums = [1,2,3,4];

let arrowsumnumbrs = arrowsums.reduce((total ,numb) => total + numb , 0) ; 

console.log ( arrowsumnumbrs);//output:10

// d: Return all the prime numbers in an array

//  Arrow function

let arrowprime = [2,3,4];

let arrowprimenumbrs = arrowprime.filter((primenumber) => {

    for (let i = 2; i <= Math.sqrt(primenumber); i++) {

        if (primenumber % i == 0) return false;
    }
    
        return true;
    

} ) ;  console.log ( arrowprimenumbrs);//output :[2,3]


// e:  Return all the palindromes in an array

// Arrow function

let arrownumbrs = [121,100,101,545];

let thepalindromenumbrs = palindromenumbr => {

    let numberStrng = palindromenumbr.toString();

    let palindrome = numberStrng.split('').reverse().join('');

    return numberStrng == palindrome
};

 let arrownumbr = arrownumbrs.filter((palindromenumbr) => thepalindromenumbrs(palindromenumbr));

 console.log(arrownumbr);//output:[121,101,545]

// a: print odd numbers in an array

//  Arrow function

let arrownumbers = [6, 7, 8];

let Oddnumbers =  (arr) => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
        
            console.log(arr[i]);
        }
    }
       
}; return Oddnumbers(arrownumbers);//output :7
                                            

