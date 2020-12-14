// // THIRD
// {
//     let numbers = [1, 3, 5, 7];
// console.log (numbers[3])
// }

// //COMPARE LENGTH
// {
//     let firstList = [1, 2, 3];
//     let secondList = [4, 5];

//     if (secondList.length > firstList.length) {
//         console.log ("secondList is longer");
//     } else {
//         console.log ("firstList is the longer one");
//     }
// }

// //SUM - ELEMENTS

// {
//     let numbers = [54, 23, 66, 12];
//     console.log (numbers [2] + numbers[3]);
// }

// //SWAP ELEMENTS

// {
//     let names = ["Arthur" , "Boe" , "Chloe"];
//     let newOrder = names.splice (0, 1, "Chloe");
//                     names.splice (2, 1, "Arthur");
//     console.log (names);
// }

// //PRINT ELEMENTS    

// { 
//     let numbers = [4, 5, 6, 7];

//     numbers.forEach(function(e,i){
//         console.log (e,i);
//     })
// }

// //Hogyan kéne ugyanezt loop-pal?

// {
//     let numbers = [7, 8, 9, 10];
    
//     for (let i = 0; i < numbers.length; i++ ) {
//         console.log (numbers[i]+ i);
//     }
// }

// // CHANGE ELEMENT

// {
//     let numbers = [1, 2, 3, 8, 5, 6];

//     numbers.map (function (e, i) {
//         numbers[3] = 4;
//     });

//     console.log (numbers);
    
// }

// // INCREMENT ELEMENTS

// {
//     let numbers = [1, 2, 3, 4, 5];
//     numbers [2] += 1;

//     console.log (numbers[2]);
//     console.log (numbers);
// }

// // APPEND A
// {
// let animals = ["koal", "pand", "zebr", "anacond", " bo"];
// let i = 0;

// while (i < animals.length) {
//     console.log (animals[i] += ('a'));
//     i++
// }
// }

// {
//     let animals = ["koal", "pand", "zebr", "anacond", "bo"];
//     for (let i = 0; i < animals.length; i++) {
//         console.log (animals[i] += ('a'));
//     }
// }

// {
//     let animals = ["koal", "pand", "zebr", "anacond", "bo"];
    
//     animals.forEach(function(e,i) {

//         console.log (animals[i].concat ('a'));
//     });
// }


// // DOUBLE ITEMS

// {
//     let drinks = ["Gin", "Whiskey", "wine", "Beer"];

//     drinks.forEach(function(e,i) {
//         drinks[i] += e;
//     }
//     )
//     console.log (drinks);
// }

// // COLORS

// {
//     let colors = [["lime", "forest green", "olive", "pale green", "spring green"],
//                     ["orange red", "red", "tomato"],
//                     ["orchid", "violet", "pink", "hot pink"]];

// console.log (colors[0]);
// console.log (colors);
// }

// // SUM-ALL
// {
//     let numbers= [3, 4, 5, 6, 7];
//     let sum = 0;

//     for  ( let i=0; i < numbers.length; i++) {

//         sum += numbers[i];
//     }
//     console.log (sum);
// }

// // DIAGONAL MATRIX

// {
// //let numbers = [[1, 0, 0, 0],[0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]

//     let numbers = new Array (4);
//     console.log (numbers.length);

//     for ( let i = 0; i < numbers.length; i++) {
//         let subArrays = new Array (4);
        
//         for (let j = 0; j < subArrays.length; j++){

//             subArrays[i] = 1;
            
//             if (j != i) {

//                 subArrays[j] = 0;
//             }
//         }
        
//         numbers[i] = subArrays;
//     }
//     console.log (numbers);
    
// }

// // REVERSE

// /*
// {
//     let numbers = [3, 4, 5, 6, 7];
//     console.log (numbers.reverse ());

// }

// */
// {
//     let numbers = [3, 4, 5, 6, 7];
//     let tempArray = new Array (numbers.length);

//     for (let i = 0; i < numbers.length; i++) {

//         tempArray[numbers.length-i-1] = numbers[i];
//     }
//     console.log (numbers);
// }