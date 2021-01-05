// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

export { };

function lineCount(text: string): number {
    let nLines = 0;
    for (let i = 0; i <= text.length; i++) {
        if (text[i] === '\n') {
            nLines++;
        }
    }
    return (nLines);
};


let fs = require('fs');

let myFile = fs.readFile('/Users/dalmapall/Desktop/TS/homework/Errors_Exception handling_File IO/my-file.txt', 'utf8', function (error, data) {

    if (error) {
        console.log("the file cannot be read.")
    }

    else
        console.log(lineCount(data));
}
);


