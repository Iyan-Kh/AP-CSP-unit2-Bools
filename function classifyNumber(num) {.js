function classifyNumber(num) {
  if (num === 0) return "zero"
  if (num > 0 && num % 2 === 0) return "positive even";
  if (num > 0) return "positive odd";
  if (num % 2 === 0) return "negative even"
  return "negative odd";
}

console.log(classifyNumber(0)); // "zero"
console.log(classifyNumber(4)); // "positive even"
console.log(classifyNumber(7)); // "positive odd"
console.log(classifyNumber(-4)); // "negative even"
console.log(classifyNumber(-7)); // "negative odd"

// ---------- Problem 2: Grade Calculator ----------
// Return the letter grade for score (0-100):
//   90+     -> "A"
//   80-89   -> "B"
//   70-79   -> "C"
//   60-69   -> "D"
//   below 60 -> "F"
// If score is less than 0 or greater than 100, return "Invalid score".
function getLetterGrade(score) {
  // TODO: your code here
  if (score < 0 || score > 100) return "Invalid score" 
  if (score >= 90) return "A"
  if (score >= 82) return "B"
  if (score >= 59) return "F"
  if (score >= -5) return "Invalid score"
  if (score >= 150) return "Invalid score"
}

console.log(getLetterGrade(95)); // "A"
console.log(getLetterGrade(82)); // "B"
console.log(getLetterGrade(59)); // "F"
console.log(getLetterGrade(-5)); // "Invalid score"
console.log(getLetterGrade(150)); // "Invalid score"

// ---------- Problem 3: FizzBuzz ----------
// Return:
//   "Fizz"     if num is divisible by 3
//   "Buzz"     if num is divisible by 5
//   "FizzBuzz" if num is divisible by both 3 and 5
//   otherwise, num converted to a string
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
  if (num % 3 === 0) return "Fizz"
  if (num % 5 === 0) return "Buzz"
  return String(num);
}

console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(7)); // "7"


// ---------- Problem 4: Shipping Cost Calculator ----------
// If isMember is true:
//   weight <= 5  -> 0 (free)
//   weight > 5   -> 3
// If isMember is false:
//   weight <= 1  -> 5
//   weight <= 5  -> 8
//   weight > 5   -> 12
function getShippingCost(weight, isMember) {
  if (isMember){
    return weight <= 5 ? 0 : 3;
  }

 else {
  if (weight <= 1) return 5;
  if (weight <= 5) return 8;
  return 12
}
}
console.log(getShippingCost(3, true)); // 0
console.log(getShippingCost(8, true)); // 3
console.log(getShippingCost(0.5, false)); // 5
console.log(getShippingCost(4, false)); // 8
console.log(getShippingCost(10, false)); // 12