/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here
    // Check the variables whether either one is 'number' type [PyitPhyo]
    let tempValue;
    if (!(typeof(x) === 'number') || !(typeof(y) === 'number'))
        {
            return -1;
        }
    else
        {
            // if both variables are numbers, print the swapped values.[PyitPhyo]
            tempValue = y;
            y = x;
            x = tempValue;
            console.log("Swapped Value of x: " + x);
            console.log("Swapped Value of y: " + y);
        } 
}

// Task 2: Add code here
// Invoke the "swap" function two times by passing parameters. [PyitPhyo]
swap("Apple",10);
swap(9,17);