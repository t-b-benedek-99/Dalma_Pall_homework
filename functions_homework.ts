// // PRACTICING FUNCTIONS

// //DOUBLE NUMBER

// {
//     let baseNumber: number = 123;
//     function doubleNumber(a) {
//         return a * 2;
        
//     }
//     console.log (doubleNumber(baseNumber));

// }

// //GREETINGS

// { 
//     let nameToGreet: string = 'Dalma Pall';
//     function greet(name: string) {
//         console.log ('Greetings, dear ' + name);
//     }

//     greet (nameToGreet);
// }

// //APPEND A

// {
//     let typo: string = "Chinchill";

//     function appendA (word: string) {
//         return (word + "a");
//     }

//     console.log (appendA (typo));
// }

// // SUM 

// {
//     function sum (num: number) {

//         let sumOfNumbers: number = 0;

//             for (let i = 0; i < (num); i++){
//                 sumOfNumbers += i;   
//             } 
//         return sumOfNumbers; 
//     }

//     console.log (sum (7));
// } 


// FACTORIAL
{
    function calculateFactorial (input: number) {

        if (input === 0 || input === 1)
        return 1;
        
        for (let i = input - 1; i >= 1; i--) {
            input = input * i; //input *= i;
        }
        return input;

    
}
console.log (calculateFactorial (6));
}


// //PRINT PARAMS
// {

//     function printParams (string1:string, ...restOftheWords){
//         console.log (string1 + " " + restOftheWords.join (" "));
//     }
// }

// printParams ("Dalma", "Kevin", "Benedek");


// // UNIQUE

// {
    
//     function unique (inputArray: number[]) {
        
//         let outputArray:number [] = [];
//         for (let i = 0; i < inputArray.length; i++){

//             if (!outputArray.includes (inputArray[i])) { //IF IT DOESN'T INCLUDE
//                 outputArray.push (inputArray[i]);
//             }
//         }return outputArray;
//     }

//     console.log (unique([1, 2, 2, 3, 4, 4, 5]));
// }

// // BUBBLE - SORT THAT LIST

{
    let numArray: number[] = [3, 65, 4, 37, 8];

    function bubble (arrayExpected) {
        
        for (let i = 0; i < arrayExpected.length; i++) {
            for (let j = 0 ; j < arrayExpected.length -1; j++) {

                if (arrayExpected[j] > arrayExpected [j + 1]) { // ITT HONNAN TUDJA, HOGY AZ INDEX ÉRTÉKÉT AKARJUK HOZZÁADNI ÉS NEM EGYET, MINT ÉRTÉKET?
                    let swappedElement = arrayExpected[j];
                    arrayExpected[j] = arrayExpected[j+1];
                    arrayExpected[j + 1] = swappedElement;
                } 

            }
        
        } 
        return arrayExpected;
    }

    console.log (bubble(numArray));
    function advancedBubble (arrayExpected: number[], isDescending: boolean) {
        
        if (isDescending === true){ 
            for (let i = 0; i < arrayExpected.length; i++) {
                for (let j = 0 ; j < arrayExpected.length -1; j++) {
                    
                    if (arrayExpected[j] < arrayExpected [j + 1]) {
                        let swappedElement = arrayExpected[j];
                        // let nextElement = arrayExpected [j +1];
                        arrayExpected[j] = arrayExpected[j+1];
                        arrayExpected[j + 1] = swappedElement;
                    } 
                    
                }
            }
            
            return arrayExpected;
            
        } else {
            return bubble(arrayExpected);
        }
    }
    
    console.log (bubble (numArray));
    console.log (advancedBubble(numArray, false));
    console.log (advancedBubble (numArray, true));
    
}

// // FIND PART OF AN INTEGER

// function findMatchingIndices (pattern: number, inputArray: number[] ) :number[] {

//     let outputArray: number[] = [];// ebbe várjuk az indexeket a push-sal

//     for ( let i = 0; i < inputArray.length; i++) {
//         let numberTurnedIntoString = inputArray[i].toString();
//         if (numberTurnedIntoString.includes(pattern.toString())) {
//             outputArray.push(i);
//         }
//     }

//  return outputArray;
// }

// let testArray = [ 12, 14, 41, 56, 61, 76];

// console.log (findMatchingIndices (1, testArray));