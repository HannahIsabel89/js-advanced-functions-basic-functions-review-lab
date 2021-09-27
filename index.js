// Lab question one
function saturdayFun (activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("play football");
saturdayFun();

// Lab question two
let mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}`;
};
mondayWork("go to the gym");

// Lab question 3
let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
  
  // Lab question 4
  const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }

