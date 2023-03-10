// 20230221 - JavaScript Front-End 202302 - JS Syntax Fundamentals
// Switch-Case Statement


// __________ Standard Syntax ____________


let day = 'Sunday';

switch (day) {
  case 'Monday':
    console.log('Work!');
    break;

  case 'Tuesday':
    console.log('Work!');
    break;

  case 'Wednesday':
    console.log('Work!');
    break;

  case 'Thursday':
    console.log('Work!');
    break;

  case 'Friday':
    console.log('Work!');
    break;

  case 'Saturday':
    console.log('Off for a walk!');
    break;

  case 'Sunday':
    console.log('Sleep!');
    break;

  default:
    console.log('Error');
    break;
}


// __________ another syntax ______________


switch (day) {
  case 'Monday': console.log('Work!'); break;
  case 'Tuesday': console.log('Work!'); break;
  case 'Wednesday': console.log('Work!'); break;
  case 'Thursday': console.log('Work!'); break;
  case 'Friday': console.log('Work!'); break;
  case 'Saturday': console.log('Off for a walk!'); break;
  case 'Sunday': console.log('Sleep!'); break;
  default: console.log('Error'); break;
}


// __________ another way of use ______________


switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Work!');
    break;

  case 'Saturday':
  case 'Sunday':
    console.log('Sleep!');
    break;

  default:
    console.log('Error');
    break;
}


// __________ another way of use different syntax 1 ______________


switch (day) {
  case 'Monday': case 'Tuesday': case 'Wednesday': case 'Thursday': case 'Friday':
    console.log('Work!');
    break;

  case 'Saturday': case 'Sunday':
    console.log('Sleep!');
    break;

  default:
    console.log('Error');
    break;
}


// __________ another way of use different syntax 2 ______________


switch (day) {
  case 'Monday': case 'Tuesday': case 'Wednesday': case 'Thursday': case 'Friday':
    console.log('Work!'); break;

  case 'Saturday': case 'Sunday':
    console.log('Sleep!'); break;
    
  default:
    console.log('Error'); break;
}


// __________ another way of use different syntax 3 ______________


switch (day) {
  case 'Monday': case 'Tuesday': case 'Wednesday': case 'Thursday': case 'Friday': console.log('Work!'); break;
  case 'Saturday': case 'Sunday': console.log('Sleep!'); break;
  default: console.log('Error'); break;
}