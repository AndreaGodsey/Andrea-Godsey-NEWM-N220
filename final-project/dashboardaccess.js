let username = ""
let usernameHeaderReference =document.querySelector("#usernameHeader")
let dashboardReference = document.querySelector(".dashboard")
dashboardReference.style.display = "none"
let loginReference = document.querySelector(".loginReference")
const myTasks = [];

//Make your Task and Buttons Appear
function showTasks() {
   document.getElementById("tasksList").innerHTML = "";
   for (let index = 0; index < myTasks.length; index++) {
    const newTask = myTasks[index];
    
    const li = document.createElement("li");
    li.innerHTML = `
    <span onclick="blackLine(${index})">${newTask}</span> 
    
    <button style="background-color: #811d1d;" onclick="removeTask(${index})">Remove</button>
    
    <button style="background-color: #8f91d6;"onclick="updateTask(${index})">Change Text</button>

    <label id="chooseCategory">No Category</label>
        <select id="categoryList" onchange="updateCategory(${index})">
            <option value="No Category">No Category</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
        </select>


    
    `; 
     document.getElementById("tasksList").appendChild(li);
   }

}


//Make sure username and password meets the quota
function validateLogin() {

    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    
    let containsNumber = false;
    let containsUppercase = false;



    const usernameReference = document.getElementById("username").value;
    const passwordReference = document.getElementById("password").value;

    //Username cannot be empty
    if (usernameReference === '') {
        document.getElementById('usernameError').innerHTML = 'Username box cannot be empty!';
    }
    //Password cannot be empty
    if (passwordReference === '') {
        document.getElementById('passwordError').innerHTML = 'Password box cannot be empty!';
    }

    console.log(passwordReference.length)
    //Password must be 8 characters
    if (passwordReference > 8) {
        document.getElementById('passwordError').innerHTML ='Password must be at least 8 characters!'
    }
    
    for (let i = 0; i < passwordReference.length; i++) {
        const currentCharacter = passwordReference[i];
    
        // Is there at least 1 number
        if (isNaN(currentCharacter) === false) {
            containsNumber = true;
          } 
        // Is there at least 1 capital letter
        if (
          currentCharacter == currentCharacter.toUpperCase() &&
          isNaN(currentCharacter)
        ) {
          containsUppercase = true;
        } 

      }

      const validPassword = containsNumber && containsUppercase;

    if (validPassword) {
       dashboardReference.style.display = "block";
       loginReference.style.display = "none";
       username = usernameReference;
       usernameHeaderReference.innerHTML = username
            
          ;
      passwordReference = "";
    } else {
      alert("Login Unsuccessful");

    //   add logic to show error message
    if (containsNumber === false) {
         document.getElementById('passwordError').innerHTML ='Password must have at least 1 number!'
    }
    if (containsUppercase === false ) {
document.getElementById('passwordError').innerHTML ='Password must have at least 1 capital letter!'
    }
    }
    
    }


    //Logout of Application
function returnHome() {
    dashboardReference.style.display = "none";
       loginReference.style.display = "block";
}

//Adding Tasks
document.getElementById("addingTask").addEventListener("click", function() {
   const newTask = prompt(`New Task`);
   if (newTask) {
   
    myTasks.push(newTask);
    showTasks(); 
}
        });

 //Removing Tasks
function removeTask(taskIndex) {
    myTasks.splice(taskIndex, 1);
    showTasks();
          };

//Update Tasks
function updateTask(taskIndex) {
    const changeText = prompt("Change Your Task?", myTasks[taskIndex]);
    if (changeText !== null && changeText !== "") {
        myTasks[taskIndex] = changeText;
    }
    showTasks();
    };

//Change Properties
function updateCategory(taskIndex) {
const selectedValue = document.getElementById('categoryList').value;
        
const taskLabel = document.getElementById('chooseCategory');
taskLabel.innerHTML = selectedValue;
    }

//Mark off Tasks
function blackLine(taskIndex) {
    const taskText = document.querySelectorAll('#tasksList li span')[taskIndex];
    
        
    if (taskText.style.textDecoration === 'line-through') {
        taskText.style.textDecoration = 'none'; 
    } else {
        taskText.style.textDecoration = 'line-through'; 
        }
    }



        


          
        

        



