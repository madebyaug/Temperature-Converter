// 2.

// Fahrenheit to Celsius Formula
// (Fahrenheit − 32) * 5/9 = Celsius
// 5/9 = 1.8

FahrenheitTemp = 90;
const convertToCelsius = (FahrenheitTemp - 32) * 1.8;
// console.log(convertToCelsius);

// 3.
function describeTemperature() {
  // -0
  if (convertToCelsius < 0) {
    return `very cold`;
  } else if (convertToCelsius < 20) {
    // 1 - 19
    return `cold`;
  } else if (convertToCelsius < 30) {
    // 20 - 29
    return `warm`;
  } else if (convertToCelsius < 40) {
    // 30 - 39
    return `hot`;
  } else if (convertToCelsius >= 40) {
    // +40
    return `very hot`;
  }
}

const Description = describeTemperature();
// console.log(Description);

// 4.

let Question = prompt(
  "Would you like to know your current temperature in Celsius? Simply provide your local temperature below."
);

if (Question < 0) {
  return `very cold`;
} else if (Question < 20) {
  // 1 - 19
}
