// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - Exercise
// Problem 02 - Vacation - judge: https://judge.softuni.org/Contests/Compete/Index/3786#1


function vacation(numOfPeople, typeOfGroup, dayOfWeek) {
    let price;

    switch (dayOfWeek) {
        case 'Friday':
            if (typeOfGroup === 'Students') {
                price = numOfPeople * 8.45;

                if (numOfPeople >= 30) {
                    price *= 0.85;
                }
            } else if (typeOfGroup === 'Business') {
                price = numOfPeople * 10.90;

                if (numOfPeople >= 100) {
                    price = (numOfPeople - 10) * 10.90;
                }
            } else if (typeOfGroup === 'Regular') {
                price = numOfPeople * 15;

                if (numOfPeople >= 10 && numOfPeople <= 20) {
                    price *= 0.95;
                }
            }
            break;
            case 'Saturday':
                if (typeOfGroup === 'Students') {
                    price = numOfPeople * 9.80;
    
                    if (numOfPeople >= 30) {
                        price *= 0.85;
                    }
                } else if (typeOfGroup === 'Business') {
                    price = numOfPeople * 15.60;
    
                    if (numOfPeople >= 100) {
                        price = (numOfPeople - 10) * 15.60;
                    }
                } else if (typeOfGroup === 'Regular') {
                    price = numOfPeople * 20;
    
                    if (numOfPeople >= 10 && numOfPeople <= 20) {
                        price *= 0.95;
                    }
                }
                break;
                case 'Sunday':
                    if (typeOfGroup === 'Students') {
                        price = numOfPeople * 10.46;
        
                        if (numOfPeople >= 30) {
                            price *= 0.85;
                        }
                    } else if (typeOfGroup === 'Business') {
                        price = numOfPeople * 16.00;
        
                        if (numOfPeople >= 100) {
                            price = (numOfPeople - 10) * 16.00;
                        }
                    } else if (typeOfGroup === 'Regular') {
                        price = numOfPeople * 22.50;
        
                        if (numOfPeople >= 10 && numOfPeople <= 20) {
                            price *= 0.95;
                        }
                    }
                    break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}


vacation(30, "Students", "Sunday");                                 // Total price: 266.73
vacation(40, "Regular", "Saturday");                                // Total price: 800.00