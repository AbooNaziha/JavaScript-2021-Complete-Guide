'use strict';
/*

let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive : D')

// const interface = 'Audio';
// const private = 534;



// FUNCTIONS
function logger() {
    console.log('My name is Ismail')
}

// calling / running /invoking the function
logger();
logger();

function fruitProceesor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProceesor(5,0)
console.log(applejuice)

const applorangeJuice = fruitProceesor(2, 4)
console.log(applorangeJuice)

const num = Number('23')
console.log(num)



// function declarations Vs. Expressions 

// function declaration
function calAge1(birthyear) {
    return 2037 - birthyear
}

const age1 = calAge1(1993)
console.log(age1)

// function expression
const calAge2 = function (birthyear) {
    return 2037 - birthyear
}

const age2 = calAge2(1993)
console.log(age2)


// Arrow functions

// arrow function
const calAge3 = birthyear => 2037 - birthyear;
const age3 = calAge3(1993)
console.log(age3)

const yearsUntilRetirement =( birthYear, firstName)=> {
    const age = 2037 - birthYear
    const retirment = 65 - age
    return `${firstName} retires in ${retirment} years`
}

console.log(yearsUntilRetirement(1993, 'Ismail'))
console.log(yearsUntilRetirement(1980, 'Munira'))



// function calling other funtion

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProceesor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    // console.log(apples, oranges);
    const juice = `Juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of orange.`;
    return juice;
}

console.log(fruitProceesor(2, 3));



// Reviewing function 

const calAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function ( birthYear, firstName) {
    const age = calAge(birthYear)
    const retirment = 65 - age

    if (retirment > 0) {
        console.log(`${firstName} retires in ${retirment} years`)
        return retirment
    } else {
        console.log(`${firstName} retires in ${-retirment} years`)
        return -1
    }
}

console.log(yearsUntilRetirement(1993, 'Ismail'))
console.log(yearsUntilRetirement(1950, 'Munira'))
 


// Coding Challenge 1

const CalcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3
}

// test data 1
const dolphinsScores1 = CalcAverage(44, 23, 71)
console.log(dolphinsScores1)
const KoalasScores1 = CalcAverage(65, 54, 49)
console.log(KoalasScores1)

// test data 2
const dolphinsScores2 = CalcAverage(85, 54, 41)
console.log(dolphinsScores2)
const KoalasScores2 = CalcAverage(23, 34, 27)
console.log(KoalasScores2)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= (2*avgKoalas)) {
        console.log(`Dolphins win with average ponits of ${avgDolphins}`)
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas wins with average points of ${avgKoalas}`)
    } else {
        console.log(`No winner for these games`)
    }
}

checkWinner(dolphinsScores1, KoalasScores1)
checkWinner(dolphinsScores2, KoalasScores2)



// Introduction to arrays

const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991, 194, 2008, 2020)
console.log(years)

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length)

friends[2] = 'Jay'
console.log(friends)

// friends = ['Bob', 'Alice']

const jonas = ['Ismail', 'Ishmael', 2037 - 1991, 'teacher', friends]

console.log(jonas)

// exercise
function calAge1(birthyear) {
    return 2037 - birthyear
}

const year = [1990, 1967, 2002, 2010, 2018];

// calAge1(year)
const age1 = calAge1(year[0])
console.log(age1)
const age2 = calAge1(year[1])
console.log(age2)

const ages = [calAge1(year[0]), calAge1(year[1]), calAge1(year[2])]
console.log(ages)



// Basics array operations 

const friends = ['Micheal', 'Steven', 'Peter']
console.log(friends);
// Push function adds an element to the end of an array
const newlength = friends.push('Jay');
console.log(friends)
console.log(newlength)

// unshift method add element to the beginning of the array
friends.unshift('John')
console.log(friends)

// pop remove element from the end of the array 
const popped1 = friends.pop();
const popped2 = friends.pop();
console.log(friends)
console.log(popped1)

// shift removes the first element from the array
friends.shift();
console.log(friends)

console.log(friends.indexOf('Steven'))

console.log(friends.includes('Steven'))

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven!')
}



// Coding Challenge 2



function calTrip(bill) {

    if(bill > 50 && bill < 300) {
        const tips = bill * 0.15
        return tips
    } else {
        const tips = bill * 0.2
        return tips
    }
}

console.log(calTrip(200))

const bills = [125, 555, 44]

const tips = [calTrip(bills[0]), calTrip(bills[1]), calTrip(bills[2])]

console.log(tips)

const total = [(calTrip(bills[0]) + bills[0]), (calTrip(bills[1]) + bills[1]), (calTrip(bills[2]) + bills[2])]

console.log(total)



// Objects in JavaScript 

const Ismail = {
    firstName: 'Ismail',
    lastName: 'Shaibu',
    age: 2037 - 1994,
    job: 'teacher',
    friends: ['Micheal', 'Abu', 'Usman']
}
 


// Dot Vs. Bracket Notations in objects 

const Ismail = {
    firstName: 'Ismail',
    lastName: 'Shaibu',
    age: 2037 - 1994,
    job: 'teacher',
    friends: ['Micheal', 'Abu', 'Usman']
}

console.log(Ismail)

console.log(Ismail.lastName)
console.log(Ismail['lastName'])

const nameKey = 'Name'
console.log(Ismail['first' + nameKey]);
console.log(Ismail['last' + nameKey]);

const interestedIn = prompt('What do you what do know about Ismail? choose between firstName, lastname, age, job and friends');

console.log(Ismail[interestedIn])

if(Ismail[interestedIn]) {
    console.log(Ismail[interestedIn])
} else {
    console.log('Wrong request! What do you what do know about Ismail? choose between firstName, lastname, age, job and friends')
}

Ismail.location = 'Nigeria'
Ismail['twitter'] = '@AbooNaziha'
console.log(Ismail)

console.log(Ismail.friends.length)

console.log(`${Ismail.firstName} has ${Ismail.friends.length} friends, and his best friend is called ${Ismail.friends[0]}`) 



// Objects methods in JavaScripts

const Ismail = {
    firstName: 'Ismail',
    lastName: 'Shaibu',
    birthYear: 1993,
    job: 'teacher',
    friends: ['Micheal', 'Abu', 'Usman'],
    hasDriverlicense: true,

    // calAge: function (birthYear) {
    //     return 2037 - birthYear
    // }

    // calAge: function () {
    //     // console.log(this)
    //     return 2037 - this.birthYear
    // }

    calAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calAge()} year old ${this.job} and he has ${this.hasDriverlicense? 'a': 'no'} driver's license.`
    }
}

console.log(Ismail.calAge())
console.log(Ismail.age)
console.log(Ismail.age)
console.log(Ismail.age)
console.log(Ismail.age)
// console.log(Ismail['calAge'](birthYear))

console.log(Ismail.getSummary())



// Coding Challenge 3 

const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass  / (this.height ** 2)
        return this.BMI
    }
}

if (markMiller.calcBMI() > johnSmith.calcBMI()) {
    console.log(`${markMiller.fullName} BMI (${markMiller.calcBMI()}) is higher than ${johnSmith.fullName} (${johnSmith.calcBMI()})`)
} else {
    console.log(`${johnSmith.fullName} BMI (${johnSmith.calcBMI()}) is higher than ${markMiller.fullName} (${markMiller.calcBMI()})`)
}



// The For loop; for loop keeps running while condition is true. 

for(let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}🏋️‍♂️`);
}



// Looping Arrays, Breaking and continuing

const IsmailArray = [
    'Ismail',
    'Shaibu',
    2037 - 1994,
    'teacher',
    ['Usman', 'Razak', 'Aminu'],
    true
];

const types = []

for(let i = 0;  i < IsmailArray.length; i++) {
    console.log(IsmailArray[i], typeof IsmailArray[i])

    // types[i] = typeof IsmailArray[i]
    // console.log(types)
    types.push(typeof IsmailArray[i])
}

console.log(types)

const years = [ 1991, 2007, 1969, 2020];

const ages = []
for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])

}
console.log(ages)

// continue and the break method for loop

console.log('---ONLY STRINGS')
for(let i = 0;  i < IsmailArray.length; i++) {
    if(typeof IsmailArray[i] != 'string') continue;
    console.log(IsmailArray[i], typeof IsmailArray[i])
}

console.log('---BREAK WITH NUMBER')
for(let i = 0;  i < IsmailArray.length; i++) {
    if(typeof IsmailArray[i] === 'number') break;
    console.log(IsmailArray[i], typeof IsmailArray[i])
}



// looping backwards and loops in loop 

const IsmailArray = [
    'Ismail',
    'Shaibu',
    2037 - 1994,
    'teacher',
    ['Usman', 'Razak', 'Aminu'],
    true
];

for(let i = IsmailArray.length - 1; i >= 0; i--) {
    console.log(i, IsmailArray[i]);
}

// creating a loop inside a loop

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------------Starting exercise ${exercise}`)

    for(let rep = 1; rep < 6; rep++) {
        console.log(`exercise ${exercise}: Lifting weight repetition 🏋️‍♂️ ${rep}`)
    }
    for(let gym = 1; gym < 3; gym++) {
        console.log(`back to gym ${gym}`)
    }
}



// while loop

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}🏋️‍♂️`);
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(` WHILE: lifting weights repetition ${rep}🏋️‍♂️`);
//     rep++;
// }

let dice = Math.trunc(Math.random()* 6) +1 
// console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()* 6) + 1;
    if (dice === 6) console.log('loop is about to end......');
}

*/

// coding challenge 4

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []
const totals = []


function calTrip(bills) {

    if(bills > 50 && bills < 300) {
        const tips = bills * 0.15
        return tips
    } else {
        const tips = bills * 0.2
        return tips
    }
}

for(let i = 0; i <= bill.length - 1; i++) {
    tips.push(calTrip(bill[i]))
    totals.push(bill[i] + tips[i])
}

console.log(tips, totals)
// console.log(sum)

// const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]


const CalAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i]
        // sum += arr[i]
    }
    console.log(sum)
    return sum / arr.length
}


console.log(CalAverage([2,3,6]))
console.log(CalAverage(totals))
console.log(CalAverage(tips))