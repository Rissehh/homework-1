//SECTION 1

// 1. The difference between interpolation and concatenation is that interpolation is the process of inserting a variable or expression into a string literal, which is typically accomplished with template literals (using backticks ``), while concatenation is the process of appending one string to another.

// DRY stands for "Don't Repeat Yourself". We should pay attention to it because it's a principle of software development aimed at reducing repetition of information or code, which makes our code easier to maintain, understand, and reduces the likelihood of errors.

// cost will be used when we will not need to rename, let will be used for variables that change, and var, we were told not to use so avoid.


//SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

// a < b
console.log(a < b); // true

// c > d
console.log(c > d); // true

// 'Name' === 'Name'
console.log('Name' === 'Name'); // true

// a + b < c
console.log(a + b < c); // true

// a * a < d
console.log(a * a < d); // true

// e !== 'Kevin'
console.log(e !== 'Kevin'); // true

// 48 == '48'
console.log(48 == '48'); // true

// f != e
console.log(f != e); // true

let g = 0;
console.log(g); // 0

g = b + c;
console.log(g); // 110

// Answers:
// I used 'let' for 'g' because I needed to change its value later.

// If you don't use const, let, or var, your code might still work, but it's not a good idea because it can cause problems later.

// If you write 10 = g, you'll get an error because you can't give a number a new value.

//SECTION 3

// Yes, this is an infinite loop because 'true' never changes, so the loop will never stop on its own.

// This is not an infinite loop. Even though it starts with 'true'



let letters = "A";
let i = 0;


while (i < 20) {
	letters += "A"; 
	i++; 
}

console.log(letters); 



//Section 4


//For Loops: You know how many times to loop. 

// While Loops: You loop until a condition changes.

// Initialization
// Condition
// increment

for (let i = 0; i <= 999; i++) {
    console.log(i);
  }

  
  for (let i = 999; i >= 0; i--) {
    console.log(i);
  }

  
  
