// LIST INTRODUCTION 1

let names: string[] = [];
console.log (names.length);
names.push ("William");
console.log (names.length);
names.push ("John" , "Amanda");
console.log (names.length);
console.log (names [2]);


// Print out whether the list is empty or not

function checkIfempty (inputArray: string[]) :string {
   
    if (inputArray[0]) {
 return ("this array is not empty");
    } else {
    return ('this array is empty');
} }

console.log (checkIfempty (names));

//Iterate through the list and print out each name
function printElement (string) {
    console.log (string);
}
printElement(names); // így array-ként adja vissza


names.forEach (printElement); //így egymás alá írja ki a value-kat


names.forEach (console.log) //a következőt adja vissza: 
// William 0 [ 'William', 'John', 'Amanda' ]
// John 1 [ 'William', 'John', 'Amanda' ]
// Amanda 2 [ 'William', 'John', 'Amanda' ]



//Remove the 2nd element
let shortenedList = names.splice (1, 1); // John

console.log (names); //William, Amanda



// Iterate through the list in a reversed order and print out each name
let reversedIterate = function (inputArray: string[]) {

    for (let i = inputArray.length -1; i > -1; i--) {
        console.log  (inputArray [i]);
    }
} 

reversedIterate (names); //Amanda, William



//Remove all elements
names.splice (0,names.length);
console.log (names);

// names = []; - ez is működik




// MAP INTRODUCTION 1

// Create an empty map where the keys are integers and the values are characters

let map =  {
    97: "a",                                                    
    98: "b",                              
    99: "c",
    65: "A",
    66: "B",
    67: "C"

}

//Print all the keys
console.log (Object.keys (map));

//Print all the values
console.log (Object.values (map));

//Add value D with the key 68
map ["68"] = "D";

//COUNTING KEY-VALUE PAIRS
function keyValueCounter (Object) {
    let count = 0;

    for (let key in map) {
    ++count} ;
    return count;
}


console.log (keyValueCounter(map)); // prints 7 


//Print the value that is associated with key 99
console.log (map['99']);

//Remove the key-value pair where with key 97 (csak egy property törlésére jó)
delete map ['97']; // { '65': 'A', '66': 'B', '67': 'C', '68': 'D', '98': 'b', '99': 'c' }

// Print whether there is an associated value with key 100 or not
console.log (map.hasOwnProperty ('100')); //false


// Remove all the key-value pairs - ha mindent törölnél
Object.keys(map).forEach(function(key) { delete map[key]; })

console.log (map); // prints {};



// LIST INTRODUCTION 2
//Create a new list ('List B') with the values of List A

let ListA: string[] = [ "Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

//Create a new list ('List B') with the values of List A
let ListB: string[] = Array.from (ListA);

console.log (ListB);

//Print out whether List A contains Durian or not

console.log (ListA.includes ("Durian"));

//Remove "Durian" from List B

// let indexValueofDurian: number = ListB.indexOf("Durian");

console.log (ListB.splice(ListB.indexOf ("Durian") ,1));


//Add Kiwifruit to List A after the 4th element
(ListA.splice (4, 0, "Kiwifruit"));

console.log (ListA);

//Compare the size of List A and List B

function compareArrays (array1: string[], array2: string[]) :void {
if (array1.length > array2.length) {
    console.log ("the First array is longer than the second array with a size of " + array1.length);
} else if (array1.length === array2.length){
    console.log ("The length of these array is equal");
} else 
    console.log ("the second array is longer than the first array");
}

compareArrays (ListA, ListB);


// Get the index of Avocado from List A
console.log (ListA.indexOf ("Avocado"));

//Get the index of Durian from List B
console.log (ListB.indexOf ("Durian")); //prints -1

//Add Passion Fruit and Pomelo to List B in a single statement
ListB.push ("Passion Fruit" , "Pomelo");

//Print out the 3rd element from List A
console.log (ListA[2]);



// MAP INTRODUCTION 2

let ISBN = {

    "978-1-60309-452-8" :	"A Letter to Jo",
    "978-1-60309-459-7" :	"Lupus" ,
    "978-1-60309-444-3" :	"Red Panda and Moon Bear" ,
    "978-1-60309-461-0" :	"The Lab" 
}


// //Print all the key-value pairs in the following format 

// Object.keys(ISBN).forEach(function(key) { console.log (ISBN[key] + "(ISBN: " + key + ")")});

// // Remove the key-value pair with key 978-1-60309-444-3
// delete ISBN ["978-1-60309-444-3"];

// Object.keys(ISBN).forEach(function(key) { console.log (ISBN[key] + "(ISBN: " + key + ")")});

//Remove the key-value pair with value The Lab

const keyOfTheLab = Object.keys(ISBN).find(key => ISBN[key] === "The Lab");

delete ISBN [keyOfTheLab];

Object.keys(ISBN).forEach(function(key) { console.log (ISBN[key] + "(ISBN: " + key + ")")});

//Add the following key-value pairs to the map

ISBN ["978-1-60309-450-4"] = "They Called Us Enemy";
ISBN ["978-1-60309-453-5"] = "Why Did We Trust Him?";

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log (ISBN.hasOwnProperty ('478-0-61159-424-8'));

//Print the value associated with key 978-1-60309-453-5
console.log (ISBN["978-1-60309-453-5"]);