// SIMPLE REPLACE

let example: string = "In a dishwasher far far away."; // array

let exampleArray = example.split(" ");

exampleArray[2] = "galaxy";

example = exampleArray.join(" ");

console.log (example);


//REVERSE
let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;


function reverseTheSentence (inputString: string ):string {
    
    let inputStringArr: string [] = toBeReversed.split (''); // így lesz belőle array

    let reversedStringArray: string[] = inputStringArr.reverse ();

    let joinedReversedString: string = reversedStringArray.join();


    for (let i = 0; i < joinedReversedString.length; i++) {
        joinedReversedString = joinedReversedString.replace(',', '');
    }
   
    return joinedReversedString;
}

console.log (reverseTheSentence (toBeReversed));


//URL FIXER

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let splittedURL = url.split ('//');

let [firstHalf, secondHalf] = splittedURL;

firstHalf = firstHalf.concat("://");

let reUnitedURL = [firstHalf + secondHalf];

let newString= reUnitedURL.toString();

let newStringSliced = newString.slice (0, -4);

url = newStringSliced.concat("odds");

 console.log (url);


 //TAKES LONGER

 let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;


        let quotePart1: string = quote.substring ( 0, quote.indexOf("you"));
        
        let quotePart2: string = "always takes longer than";

        let quotePart3: string = quote.substring (quote.lastIndexOf ("you"), quote.length);

 
 quote= quotePart1.concat(quotePart2 + " " + quotePart3);

 console.log (quote);


 // TODO-PRINT
 
 let todoText: string = ' - Buy milk\n';

 todoText = todoText.concat (' - Download games\n', '    - Diablo' );

 console.log (todoText);


 // HE WILL NEVER

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];



let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

// for (let i of notSoCrypticMessage) {
// out += hashmap [i];
// }

// console.log (out);


for (let i = 0 ; i < notSoCrypticMessage.length; i++) {
    // console.log(notSoCrypticMessage[i]); // kiírtuk a sorrendiséget
    out += hashmap [notSoCrypticMessage[i]];
} 

console.log (out);