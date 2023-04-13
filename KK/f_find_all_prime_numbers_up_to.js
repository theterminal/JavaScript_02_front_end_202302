// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
// Function to find all prime numbers up to a given limit
function findPrimes(limit) {
let primes = [];
for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
    primes.push(i);
    }
}
return primes;
}

// Call the findPrimes function with a limit of 500
let primesUpTo500 = findPrimes(500);

// Display the prime numbers in the console
console.log(primesUpTo500);