const numbers = [1, 2, 3, 4, 5];
const testScorePercentages = [95, 77, 40, 63, 85, 90, 70];
const persons = [
    { name: 'Rick', age: 70 },
    { name: 'Morty', age: 14 },
    { name: 'Summer', age: 17 },
    { name: 'Beth', age: 34 }
]

// const doubleNums = (nums) => {
//     const output = [];
//     for(let ii = 0; ii < nums.length; ii++) {
//         output.push(nums[ii] * 2);
//     }
//     return output;
// }

// const double = (n) => n * 2;
// const doubleNums = numbers.map(double);

// const doubleNums = numbers.map((number) => number * 2);

const personNames = persons.map((person) => person.name);
const personAge = persons.map((person) => person.age);

const personHtmlString = persons.map((person) => `<p>Name: ${person.name}, Age: ${person.age}</p>`)

const personsWithBirthYear = persons.map((person) => {
    const birthYear = new Date().getFullYear() - person.age;
    return {
        ...person,
        birthYear: birthYear
    };
})

const letterGrades = testScorePercentages.map((pct) => {
    if (pct < 65) {
        return "F"
    }
    if (pct < 70) {
        return "D"
    }
    if (pct < 80) {
        return "C"
    }
    if (pct < 90) {
        return "B"
    }
    return "A"
})

// console.log(doubleNums);
// console.log(personNames);
// console.log(personAge);
// console.log(personsWithBirthYear)
// console.log(letterGrades)

Array.prototype.map2 = function (callBack) {
    const output = [];

    for (let ii = 0; ii < this.length; ii++) {
        const newItem = callBack(this[ii], ii, this);
        output.push(newItem);
    }
    return output;
}

const doubleNums = numbers.map2((number) => number * 2);

console.log(doubleNums);

// function getEvens(nums) {
//     const output = [];

//     for (let ii = 0; ii < nums.length; ii++) {
//         if (nums[ii] % 2 === 0) {
//             output.push(nums[ii]);
//         }
//     }
//     return output;
// }
const isEven = (n) => n % 2 === 0;
const evensOnly = numbers.filter(isEven);

console.log(evensOnly);

const whosAllowedToDrink = persons
    .filter((person) => person.age >= 21)
    .map((person) => person.name, (person) => person.age);

console.log(whosAllowedToDrink)