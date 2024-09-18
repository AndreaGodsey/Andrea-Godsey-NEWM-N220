let studentGrades = [78, 86, 92, 77];

const answersPtag = document.getElementById("answers");

function printAnswer(answer) {
    answersPtag.innerHTML += `<br /> ${answer}`;
}
//Array Basics
//1. Arrays will print as a string seperated with commas by default
answersPtag.innerHTML += studentGrades;

//2.
//studentGrades[0]; indexes start at 0
answersPtag.innerHTML += `<br/> ${studentGrades[1]}`;

//3. Assign new values to array 
studentGrades[1] = 83;

//4.
printAnswer(studentGrades);

//5.
printAnswer(studentGrades.length);

//6.
studentGrades.forEach(function (currentStudent, currentStudentIndex) {
    //Loop Here
    currentStudent[currentStudentIndex] += 1;
    printAnswer(studentGrades[currentStudentIndex]);
});

//7.
printAnswer(studentGrades);

//8.
const indexOfLastStudent = studentGrades.length -1;
printAnswer(studentGrades[indexOfLastStudent]);

//9.
let totalOfGrades = 0;
studentGrades.forEach(function (currentGrade) {
    totalOfGrades += currentGrade;
});
printAnswer(totalOfGrades / studentGrades.length);

const averageGrade= totalOfGrades / studentGrades.length;
printAnswer(averageGrade);

//10
printAnswer(averageGrade > 80);

// ARRAY MORE!!!!!!
const friends = ["Elmo", "Spongebob", "CatDog", "DannyPhantom", "Timmy Turner",];

function printExtraAnswers() {
    document.querySelector.apply("#extraAnswers").innerHTML += `<br /> ${friends}`;
}

// 1. Add items to an array using the push method
friends.push("Jimmy Neutron");

//2. Remove the last item to an array using the pop method
friends.pop();
printExtraAnswers();

//3. Remove the first item using the slice method
friends.splice(0,1);
printExtraAnswers();

//4. Add item to the front of an array
friends.splice(0, 0, "Invader Zim");
printExtraAnswers();

//5 Use Splice Again
friends.splice(2,1);
printExtraAnswers();

//6 Splice Again
friends.splice(2, 0, "Gir");
printExtraAnswers();

friends.splice(3, 0, ["Patrick", "Squidward"]);
printExtraAnswers();

//Objects
const person = {
    firstName: "Ty",
    lastName: "the Pumpkin Guy",
    age: 57,
    hometown: "Naptown",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

document.getElementById("fullName").innerHTML += person.getFullName();

//Change Value
person.age += 1;
document.getElementById("newFProp").innerHTML += person.age;

//Printing Object Variable
document.getElementById("newFProp").innerHTML += `<br/> ${JSON.stringify(
    person
)}`;

//Delete
delete person.hometown;
document.getElementById("newFProp").innerHTML += `<br/> ${JSON.stringify(
    person
)}`;

//Print a sentence using our object
console.log(`${person.getFullName()} is ${person.age} years old.`);

//Add a method to an existing object
person.isASenior = function () {
    return this.age >= 65;
}

console.log(person.isASenior());

person.age += 10;
console.log(person.isASenior());

let keyProp = "age";
console.log(`person[keyProp] = ${person[keyProp]}`);
console.log(person)
