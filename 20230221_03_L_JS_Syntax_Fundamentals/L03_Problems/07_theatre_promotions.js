// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Problem 07 - Theatre Promotions - judge: https://judge.softuni.org/Contests/Practice/Index/3785#6


function theatrePromotions(day, age) {
    let price;
    if (0 <= age && age <= 18) {
        switch (day) {
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 5; break;
            default: console.log('Day Error!'); break;
        }
    } else if (18 < age && age <= 64) {
        switch (day) {
            case 'Weekday': price = 18; break;
            case 'Weekend': price = 20; break;
            case 'Holiday': price = 12; break;
            default: console.log('Day Error!'); break;
        }
    }  else if (64 < age && age <= 122) {
        switch (day) {
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 10; break;
            default: console.log('Day Error!'); break;
        }
    } else {
        price = 'Error!';
    }

    if (price === 'Error!') {
        console.log(price);
    } else {
        console.log(`${price}$`);
    }
}


theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);
