const classroom = {
    students:[],
    className: "Intro to Media Applications",
    showStudents() {
        document.getElementById("students").innerHTML="";
        this.students.forEach(function (studentName) { 
            document.getElementById("students").innerHTML += studentName + "<br />";
        });
    },
    /*for (let i = 0; i < classroom.students.length; i++) {
        const studentName = classroom.students[i];
        document.getElementById("students").innerHTML += studentName + "<br />";

    },*/
    maxStudents: 2,
};
classroom.showStudents();

function addNewStudent() {
    const currentStudents = classroom.students.length;
    if(currentStudents == classroom.maxStudents) {
        console.log("No seats available");
    }
    else{
        classroom.students.push(document.getElementById("studentName").value);
        classroom.showStudents();
    }
}



// function showStudents(){}