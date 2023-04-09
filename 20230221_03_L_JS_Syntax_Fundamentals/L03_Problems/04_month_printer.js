// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 04 - Month Printer - judge: https://judge.softuni.org/Contests/Practice/Index/3785#3


// _________________ version 2 ________________


function monthPrint(number) {
    const montArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (number > 12 || number < 1) {
        return console.log('Error!');
    }
    console.log(montArray[number - 1]);
}


monthPrint(2);
monthPrint(13);


// _________________ version 1 ________________


function monthPrinter(number) {
    if (number > 12 || number < 1) {
        console.log('Error!');
    } else {
        switch (number) {
            case 1: console.log('January'); break;
            case 2: console.log('February'); break;
            case 3: console.log('March'); break;
            case 4: console.log('April'); break;
            case 5: console.log('May'); break;
            case 6: console.log('June'); break;
            case 7: console.log('July'); break;
            case 8: console.log('August'); break;
            case 9: console.log('September'); break;
            case 10: console.log('October'); break;
            case 11: console.log('November'); break;
            case 12: console.log('December'); break;
        
            default: console.log('Error!'); break;
        }
    }
}


monthPrinter(2);
monthPrinter(13);
