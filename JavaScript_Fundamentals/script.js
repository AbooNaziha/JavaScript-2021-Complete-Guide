/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

//Varaible name conventions

let firstName = "Matida";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let Jonas_Matida = 'JM'
let $function = 27;

let person = 'Jonas'
let PI = 3.142
console.log(PI)

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

let job1 = 'Programmer'
let job2 = 'Teacher'

console.log(myFirstJob)


//data types 

true;
console.log(true);

let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof true);
console.log(typeof JavaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

JavaScriptIsFun = 'YES'
console.log(typeof JavaScriptIsFun)

let year;
console.log(year);
console.log(typeof year)

year = 1991;
console.log(year)
console.log(typeof year)

console.log(typeof null)


// let const and var

let age = 30;
age = 31

const birthYear = 1991
// birthYear = 1990 

// const job;

var job = 'Programmer'
job = 'Teacher'

let lastName = 'Ismail'
console.log(lastName)


// Basic Operators 

// maths operations
const now = 2037;
const ageJonas = now - 1991;
const ageSarah =  now - 2020
console.log(ageJonas, ageSarah)

console.log(ageJonas*2, ageJonas/10, 2**3)
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas'
const lastName = 'Ismail'
console.log(firstName + ' ' + lastName);

// assignment operations
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--
console.log(x);

// comparison operations 
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



// Operator precedance 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah =  now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5

console.log(x, y)

const average = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, average)


// coding challenge 1

// TEST DATA ONE
let MarkWeight = 78
let MarkHeight = 1.69 

let JohnWeight = 92
let JohnHeight = 1.95

MarkBMI = MarkWeight / (MarkHeight**2)
console.log(MarkBMI)

JohnBMI = JohnWeight / (JohnHeight**2)
console.log(JohnBMI)

markHigherBMI = MarkBMI > JohnBMI
console.log(markHigherBMI)

// TEST DATA TWO

let MarkWeight2 = 95
let MarkHeight2 = 1.88

let JohnWeight2 = 85
let JohnHeight2 = 1.76

MarkBMI2 = MarkWeight2 / (MarkHeight2**2)
console.log(MarkBMI2)

JohnBMI2 = JohnWeight2 / (JohnHeight2**2)
console.log(JohnBMI2)

markHigherBMI2 = MarkBMI2 < JohnBMI2
console.log(markHigherBMI2)



// Strings and Template Literals 

const firstName = "Ismail";
const job = 'Data Scientist';
const birthday = 1993
const year = 2027

const jonas = "I'm " + firstName + ', a ' + (year - birthday) + ' years old ' + job + '!';

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${(year - birthday)} years old ${job}!`

console.log(jonasNew)

console.log(`Just a regular string...`);
console.log(`string
multiple
line`);



// If and else statements 

const age = 15

if(age >= 18){
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years :)`)
}

const bithyear = 1996;

let century;
if(bithyear <= 2000){
    century = 20;
} else{
    century = 21;
}

console.log(century)

let MarkWeight = 78
let MarkHeight = 1.69 

let JohnWeight = 92
let JohnHeight = 1.95

MarkBMI = MarkWeight / (MarkHeight**2)
console.log(MarkBMI)

JohnBMI = JohnWeight / (JohnHeight**2)
console.log(JohnBMI)

if(MarkBMI > JohnBMI){
    console.log(`Mark's BMI is higher than John's!`)
} else{
    console.log(`John's BMI is higher than Mark's!`)
}

if(MarkBMI > JohnBMI){
    console.log(`Mark's BMI (${(MarkBMI)}) is higher than John's (${(JohnBMI)})!`)
} else{
    console.log(`John's BMI (${(JohnBMI)}) is higher than Mark's! (${MarkBMI})!`)
}



// Types conversion and coercion

const InputYear = '1991';
console.log(Number(InputYear), InputYear);
console.log(Number(InputYear) + 18);

console.log(Number('Jonas'))
console.log(typeof NaN)
console.log(String(23), 23)

// type coercion

console.log('I am ' +  23  + ' years old')
console.log('23' - '10' - 3)
console.log('23'*'2')
console.log('23'/'2')
console.log('23'>'18')

let n = '1' + 1
n = n - 1;
console.log(n)
 


// Truthy and falsy values 
//  5 falsy values 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const  money = 0;
if(money){
    console.log("Don't spend it all")
} else{
    console.log('You should get a job!')
}

let height = 0;
if(height){
    console.log('YAY! height is defined')
} else{
    console.log('Height is not UNDEFINED!')
}



// Equality operators 

const age = '18';

if(age === 18) console.log('You just became an adult (Strict)')

if(age == 18) console.log('You just became an adult (loose)')

const Favourite = Number(prompt("What's your favourite number? "))
console.log(Favourite)
console.log(typeof Favourite)

if (Favourite === 23) {
    console.log('cool! 23 is an amazing number!')
} else if(Favourite === 7) {
    console.log('7 is also a cool number!')
} else {
    console.log('Number is not 23 or 7!')
}

if(Favourite !== 23) console.log('Why not 23!');



// Boolean logic (AND, OR, NOT)

const hasDriverLicense = true  //A
const hasGoodVision = true  //B

console.log(hasDriverLicense && hasGoodVision);

console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

const IsTired = false // C
console.log(hasDriverLicense || hasGoodVision || IsTired);

if(hasGoodVision && hasDriverLicense && !IsTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive')
}

// Coding Challenge2:

// test data 
// const DolphinesScore = 96 + 108 + 89
// const DolphinesAverage = (DolphinesScore)/3
// const KoalasScore = 88 + 91 + 110
// const KoalasAverage = (KoalasScore) / 3

// if(DolphinesAverage > KoalasAverage){
//     console.log('Dolphines won the Game!')
// } else if (DolphinesAverage === KoalasAverage) {
//     console.log("It's a draw game!")
// } else {
//     console.log('Koalas won the game!')
// }

// const DolphinesScore = 97 + 112 + 101
// const DolphinesAverage = (DolphinesScore)/3
// const KoalasScore = 109 + 95 + 123
// const KoalasAverage = (KoalasScore) / 3
// const minimumScore = 100

// if((DolphinesAverage > KoalasAverage) && minimumScore){
//     console.log('Dolphines won the Game!')
// } else if (DolphinesAverage === KoalasAverage) {
//     console.log("It's a draw game!")
// } else {
//     console.log('Koalas won the game!')
// }


const DolphinesScore = 97 + 112 + 101
const DolphinesAverage = (DolphinesScore)/3
const KoalasScore = 109 + 95 + 106
const KoalasAverage = (KoalasScore) / 3
const minimumScore = 100

if((DolphinesAverage > KoalasAverage) && minimumScore){
    console.log('Dolphines won the Game!')
} else if ((DolphinesAverage === KoalasAverage) && (minimumScore >= 100)) {
    console.log("It's a draw game!")
} else {
    console.log('Koalas won the game!')
}


// The switch Statement 

const day = 'tuesday';

switch(day) {
    case 'monday':
        console.log('Plan course structure!');
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy your weekend!')
        break;
    default:
        console.log('Not a Valid day!')
}

// const day = 'saturday'

if(day === 'monday') {
    console.log('Plan course structure')
    console.log('Go to coding meetings')
} else if (day === 'tuesday') {
    console.log('prepare theory videos!')
} else if ((day === 'wednesday') || (day === 'thursday')) {
    console.log('Write code examples')
} else  if (day === 'friday') {
    console.log('record videos')
} else if ((day === 'saturday') || (day === 'sunday')) {
    console.log('Enjoy your weekend')
} else {
    console.log('Not a valid day')
}



// Difference statement and expressions

// The conditional (Ternary) operator

const age = 23

age >= 18? console.log('I like to drink wine🍷(^///^)🕳'):
console.log('I like to drink water💧')

const drink = age >= 18? 'wine🍷' : 'drink water💧';
console.log(drink)

let drink2;
if(age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = 'water💧'
}
console.log(drink2)

console.log(`I liketo drink ${age >= 18? 'wine🍷' : 'drink water💧'}`)



// Coding Challenge 4;

const bill = 430

let tip;
if ((bill >= 50) && (bill <= 300) ) {
    tip = (bill * 0.15);
    total_value = tip + bill
} else {
    tip = (bill * 0.20)
    total_value = tip + bill
}
console.log(tip, total_value)

*/

// JavaScripts releases ES5, ES6 and ESNext

