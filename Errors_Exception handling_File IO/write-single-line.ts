// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

export {};

try {

    let fs = require ('fs');
    
    let myName: string = 'Dalma Pall';
    
    fs.writeFileSync ('my-file2.txt', myName); // ez miért nem működött sime fs.writeFile function-nel?

} catch (error) {
    console.log ("Unable to write file: my-file.txt");

}finally {
    console.log ('stopping');
}
