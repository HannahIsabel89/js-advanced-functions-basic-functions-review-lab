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
<<<<<<< HEAD
function wrapAdjective (style="*") {
  return function (adj="special") {
    return `You are ${style} ${adj} ${style}`
  }
};
 // from answer guide
=======
>>>>>>> d15c5bde13574479971bb63f3ec90157c0897f24
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
<<<<<<< HEAD
=======

>>>>>>> d15c5bde13574479971bb63f3ec90157c0897f24
