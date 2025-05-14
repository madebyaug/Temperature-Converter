//  2.

// Fahrenheit to Celsius Formula
// (Fahrenheit − 32) * 5/9 = Celsius
// 5/9 = 1.8

// We're creating a function called "convertToCelsius"
// Adding a parameter (value || number) called "Fahrenheit"
function convertToCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * 1.8;
}

// If function was limited
// const convertToCelsius = (FahrenheitTemp - 32) * 1.8;

// This calls the function "convertToCelsius" and give it a "Fahrenheit" value repeatedly
// console.log(convertToCelsius(8));
// console.log(convertToCelsius(10));
// console.log(convertToCelsius(39));

// 3;
// preforming a function (parameter)
function describeTemperature(Fahrenheit) {
  // -0
  if (convertToCelsius(Fahrenheit) < 0) {
    console.log(`very cold`, convertToCelsius(Fahrenheit));
  } else if (convertToCelsius(Fahrenheit) < 20) {
    // 1 - 19
    console.log(`cold`, convertToCelsius(Fahrenheit));
  } else if (convertToCelsius(Fahrenheit) < 30) {
    // 20 - 29
    console.log(`warm`, convertToCelsius(temp));
  } else if (convertToCelsius(Fahrenheit) < 40) {
    // 30 - 39
    console.log(`hot`, convertToCelsius(Fahrenheit));
  } else if (convertToCelsius(Fahrenheit) >= 40) {
    // +40
    console.log(`very hot`, convertToCelsius(Fahrenheit));
  }
}

// // calling a function (arugment)
const description = describeTemperature(90);
// why is this producing a console.log when "description" isn't being declared/called?
// thought it needed the called with the following below?
// console.log(description);

// 4;
let Question = prompt(
  "Would you like to know your current temperature in Celsius? Simply provide your local temperature below."
);

if (Question) {
  // Number(Question);
  parseInt(Question);
  describeTemperature(Question);
}
