const totalSeats = '20';
const enrolledStudents = '18';

const students = {
    courseNumber: "N220",
    courseTitle: "Introduction to Media Application",
    totalSeats: 20,
    enrolledStudents: 18,
    getAvailibility: function () {
        return this.totalSeats > this.enrolledStudents;
    }   
};

//Are Seats Available
console.log(`N220 Open: ${students.getAvailibility()}.`);

//Two more peeps
students.enrolledStudents += 2;
console.log(`Total Students ${students.enrolledStudents}`);

//Check Available again
console.log(`N220 Open: ${students.getAvailibility()}.`);

// Built-In Objects
function IUPUIWebsite() {
    var tacocat = "wednesday";
    console.log(window.tacocat);
    console.log(`Inner Width: ${window.innerWidth}`);
    console.log(`Outer Width: ${window.outerWidth}`);

    console.log(window.location);
}

function printPage() {
    window.print();
}

document.getElementById("dpDetails").innerHTML += students.courseTitle;
document.querySelector("#domain").innerHTML += "Hi";
console.log(document);

const updatePTag = document.getElementById("update");
console.log(updatePTag.querySelector("#delete"));

console.log(String(100).length, 100);
console.log(String(100).includes("2"),100);
console.log("100".replace("0","2"),100);
console.log("100".replaceAll("0","2"), 100);