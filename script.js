let n=10;

//sum of first n numbers
let sum=0;
for(let i=1;i<=n;i++){
    sum+=i;
}
console.log("sum of first " + n + " numbers is :" + sum);


//table of n 
console.log("\nTable of " + n + ":");
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

//Check if it is a prime number or not 
let number = 157;  // you can change this number
let isPrime = true;

// Numbers less than 2 are not prime
if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }
}
// Output result
if (isPrime) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is NOT a Prime Number");
}

//  Print all factors
// number= 6;
console.log("\nFactors of " + number + ":");
let factors = "";
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        factors += i + " ";
    }
}
console.log(factors);

// Sum of digits
let temp = number;
let digitSum = 0;

while (temp > 0) {
    digitSum += temp % 10;
    temp = Math.floor(temp / 10);
}

console.log("\nSum of digits of " + number + " is: " + digitSum);

// Check Armstrong Number
temp = number;
let power = number.toString().length;
let armstrongSum = 0;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += Math.pow(digit, power);
    temp = Math.floor(temp / 10);
}

let isArmstrong = (armstrongSum === number);

console.log("\nIs " + number + " an Armstrong Number? " + (isArmstrong ? "Yes" : "No"));