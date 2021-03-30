// Remeber to activate strict mode
/*
'use strict';

const x = 23;
if (x === 3) console.log(23);
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1978));



const Ismail = 23;
// codewars.com
// Problem 1:
// We work for a company building a smart home thermometer. our most recent task is this; "given an array of temperatures of one day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//  -What is temperature amplidute? Answer difference between the heighes and lowest temperature.
//  - how to compute maximum and minimum temperature
//  What's is a sensor error? and And What to do

//  2) Breaking up into sub-problems
//  - How to ignore errors
//  - Find max value in temperature aaray
//  - Find minimum value of temperature array
//  - subtract max from min temperature (amplitude) and return it

const calTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calTempAmplitude([3, 7, 5, 4, 1, 8]);
const amplitude = calTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
//  function should now receive two arrays

// 1) Understanding the problem
//  - with 2 arrays, should we implement functionality twice? no! just merge two arrays

//  2) Breaking up into sub-problems
//  - Merge 2 arrays

const calTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calTempAmplitudeNew([3, 7, 5, 4, 1, 8], [2, 10, 15, 6]);
console.log(amplitudeNew);



// Debugging (Fixing Errors)

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // fix
    // value: Number(prompt('Degree celsius')),
    value: 10,
  };

  //    find error
  //   console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());

// Using a debugger
const calTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calTempAmplitudeBug([3, 7, 5, 4, 1, 8], [2, 10, 15, 6]);
console.log(amplitudeBug);

*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

// coding chllenge one
const printForecast = function (arr) {
  let degree = ``;
  for (let i = 0; i < arr.length; i++) {
    const use = ` ... ${arr[i]} oC in ${i + 1} days`;
    degree = degree + use;
  }

  console.log(degree + ' ...');
};

printForecast(testData1);
printForecast(testData2);
