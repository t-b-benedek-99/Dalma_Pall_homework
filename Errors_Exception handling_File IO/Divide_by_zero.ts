// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

function divide(input: number):void {
    if (input !== 0) { console.log (input / 10 )}
    else {console.log ('Cannot divide by zero!')};
}

divide (0);