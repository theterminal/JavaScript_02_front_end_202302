// 20230303 - JavaScript Front-End 202302 - JS Functions and Statements - More Exercise
// More Exercises 02 - Number Modification - judge: https://judge.softuni.org/Contests/Practice/Index/3790#1


function numberModification(input) {
  let strFromNum = input.toString().split('');
  let sumOfDigits = 0;
  let length = strFromNum.length;

  while(sumOfDigits / length <= 5) {
    sumOfDigits = sumDigits(strFromNum);

    if (sumOfDigits / length > 5) {
      console.log(strFromNum.join(''));
    } else {
      add9(strFromNum);
      length = strFromNum.length
    }
  }

  function sumDigits(strFromNum) {
    sumOfDigits = 0;

    for (let i = 0; i < strFromNum.length; i++) {
      sumOfDigits += Number(strFromNum[i]);
    }
    
    return sumOfDigits;
  }

  function add9(string) {
    strFromNum.push('9');
    return strFromNum;
  }
}


numberModification(101);
numberModification(5835);
numberModification(10000100001000);
numberModification(99);
