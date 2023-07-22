{
    console.log(x); // Output: ReferenceError: Cannot access 'x' before initialization
    console.log(y); // Output: undefined
    console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization
  
    let x = 1;
    var y = 2;
    const z = 3;
  
    console.log(x); // Output: 1
    console.log(y); // Output: 2
    console.log(z); // Output: 3
  }
  