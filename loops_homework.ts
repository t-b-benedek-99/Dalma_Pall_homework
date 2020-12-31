//CONDITIONALS PRACTICE


{
    let a: number = 13;
    if (a === 13) {
        console.log("yaay, the value of \'a\' is 13");
    }
    if (a === 8) {
        console.log("yaay, the value of \'a\' is 13");
    }

}

{
    let b: number = 20;
    if (b < 20) {
        console.log("b is less than 20");

    } else (b >= 20)
    console.log("b is equal to or more than 20");
}

{
    let c: number = 15;
    if (c < 10) {
        console.log("c is less than 10");
    } else if (c < 20) {
        console.log("c is higher than 10 but less than 20");
    } else {
        console.log("c is higher than 20");
    }

}

{
    let thirsty: boolean = true;
    let hungry: boolean = false;
    if (thirsty && hungry) {
        console.log('lunch time');
    } else if (thirsty || hungry) {
        console.log('snack time');
    } else {
        console.log('no food for you');
    }


}// CONDITIONAL VARIABLE MUTATION

{
    let a: number = 24;
    let output1: number = 0;

    if (a % 2 === 0) {
        output1++;
    } console.log(output1);
}

{
    let b: number = 10;
    let output2: string = '';

    if (10 <= b && b <= 20) {
        output2 = "Sweet";
    } else if (b < 10) {
        output2 = "Less";
    }
    else { output2 = "More" };

    console.log(output2);

}

{
    let c: number = 123;
    let credits: number = 10;
    let isBonus: boolean = false;

    if (credits < 20 && isBonus === false) {
        c -= 2;
    } else if (credits < 50 && isBonus === false) {
        c--;
    } else if (!isBonus) { c };

    console.log(c);
}

{
    let d: number = 7;
    let time: number = 120;
    let output3: string = '';

    if (d % 2 === 0 && time <= 200) {
        output3 = "check";
    } else if (time > 200) {
        output3 = "Time out";
    } else {
        output3 = "Run forest run!";
    }
    console.log(output3);
}

// PRACTICING LOOPS

{
    let a: number = 0;
    while (a < 10) {
        console.log(a);
        a++;
    }
    console.log(a);
}

{
    for (let i: number = 0; i < 100; i++) {
        console.log(i);
    }

}

// I WON'T CHEAT ON THE EXAM IN A FOR LOOP
{
    for (let i: number = 1; i < 101; i++) {
        console.log(i + ". I won\'t cheat on the exam!");
    }
}

// I WON'T CHEAT ON THE EXAM IN A WHILE LOOP

{
    for (let i: number = 1; i < 500; i++) {

        if (i % 2 === 0) {
            console.log(i);
        }

    }
}

//PRINT EVEN IN A FOR LOOP

{
    for (let i: number = 1; i < 500; i++) {
        if (i % 2 === 0) {
            console.log(i + " is an even number");
        }
    }
}

// MULTIPLICATION TABLE IN A FOR LOOP
{
    let number: number = 2;
    for (let i: number = 1; i < 16; i++) { console.log(i + "* 2 =" + (i * number)); }
}

// PARAMETRIC AVERAGE

{
    let numbers: number[] = [1, 42, 71, 9, 33];
    let sum: number = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];

    } console.log("SUM is equal to " + sum);
    console.log("AVERAGE is equal to " + (sum / numbers.length));

}

// FIZZ BUZZ

{
    for (let i: number = 1; i < 101; i++)

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
}

// // DRAW TRIANGLE



//     let lineCount: number = 4;
//     let line: string ="*";
//     let actualLine: string ="";

//     for (let i: number = 1; i <= lineCount; i++)
//     {
//         actualLine += line;
//         console.log (actualLine);
//     }




// // Write a program that draws a
// // pyramid like this:
// //
// //    *
// //   ***
// //  *****
// // *******
// //
// // The pyramid should have as many lines as lineCount is


// let lineCount: number = 8; // össz sorszám


// for (let actualLine = 1; actualLine <= lineCount; actualLine++) {

//     let line: string = "";
//     let spaceCount: number = lineCount - actualLine;
//     let starCount: number = actualLine * 2 - 1;

//     for (let i = 1; i <= spaceCount; i++) {
//         line += " ";
//     }
//     for (let i = 1; i <= starCount; i++) {
//         line += "*";
//     }

//     console.log(line);
// }

// DIAMOND

// let lineCountDiamond: number = 7; // össz sorszám


// for (let actualLine = 1; actualLine <= lineCountDiamond/2 + 1; actualLine++) {

//     let line: string = "";
//     let spaceCount: number = lineCountDiamond/2 + 1 - actualLine;
//     let starCount: number = actualLine * 2 - 1;

//     for (let i = 1; i <= spaceCount; i++) {
//         line += " ";
//     }
//     for (let i = 1; i <= starCount; i++) {
//         line += "*";
//     }


//     console.log(line);
// }

// for (let actualLine = lineCountDiamond/2 + 2; actualLine <= lineCountDiamond+1; actualLine++) {

//     let line: string = "";
//     let spaceCount: number = actualLine - lineCountDiamond/2 - 1;
//     let starCount: number = lineCountDiamond - spaceCount*2;

//     for (let i = 1; i <= spaceCount; i++) {
//         line += " ";
//     }
//     for (let i = 1; i <= starCount; i++) {
//         line += "*";
//     }


//     console.log(line);
// }

// //DRAW SQUARE

// let lineCount: number = 6;

// for (let i= 1; i <= lineCount; i++) {

//     let line: string = "";
//     if (i === 1 || i === lineCount) {

//         for (let j = 1; j <= lineCount; j++){
//             line += "%";
//         }
//     } else {
//         for (let j = 1; j <= lineCount; j++) {
//             if (j === 1 || j === lineCount){
//                 line += "%"
//             } else 
//                 line += " ";
//         }
//     }
//     console.log (line);
// }

//DRAW DIAGONAL

// let lineCount: number = 6;

// for (let i= 1; i <= lineCount; i++) {

//     let line: string = "";
//     if (i === 1 || i === lineCount) {

//         for (let j = 1; j <= lineCount; j++){
//             line += "%";
//         }
//     } else {
//         for (let j = 1; j <= lineCount; j++) {
//             if (j === 1 || j === lineCount || j === i){
//                 line += "%"
//             } else 
//                 line += " ";
//         }
//     }
//     console.log (line);
// }

// DRAW CHESS TABLE

let lineCount : number = 8;

for (let i = 1; i <= lineCount; i++) {

    let line: string = "";
    
    if (i% 2 === 0) {
        line += " % % % %";
    } else {
        line += "% % % %";
    }

    console.log (line);
}