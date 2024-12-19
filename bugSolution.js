function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input';
  }
}

console.log(foo(1, '2')); // Output: Invalid input
console.log(foo(1, 2)); // Output: 3