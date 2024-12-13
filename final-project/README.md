### Project Name

Andrea Godsey Final Project

### Github Link

https://andreagodsey.github.io/Andrea-Godsey-NEWM-N220/final-project/index.html

### The Major Features

**Login Form**

- DOM references: Inputs for Passwords and Usernames

- Logic:

  - When the username input is empty => Tell user to fill in their username
  - Tell user to enter a valid Password:
  - Rules for Password:
    - Password has to be no less than 8 characters
    - Password must contain at least one number
    - Password must have at least one capital letter

- Events:

  - When the Login button is clicked, pull up the username and password inputs for the user.
  - When the user clicks the create login button, the user will also see the username and password inputs. The rules for the password will come up on this page as well for the user.

- Loops/If Else Checks:

  - If the username and password inputs are correct on the login page, => the user will be taken to the home page.
  - If the username and password is not correct => the page will say "The username or password is incorrect. Please try again."
  - If the user is creating a password with fewer than eight characters => The page will display "Not enough characters. Please create a longer password."
  - If the user is creating a password with more than eight characters => The page will display "Too many characters. Please shorten your password."
  - If the user does not have at least 1 number in the password => the page will display "The password must have at least 1 number. Please use more numbers in the password."

- Data Core Variables:

  - Username Input: The user's main identifier.
  - Password Input: Protects the user's task information. A way to help the user login and be authenticated with the username
  - Boolean: True/False Inputs. If the user puts in the correct information, the login is considered true and gives access to the user. If the values are false, the user will be instructed to put in the correct password. The same idealogy is followed when it comes to creating the password. The user must follow the rules in order for the boolean value to be true.

**Dashboard Details**

- DOM references:

  - Display the user's username at the top
  - Button for logging out of application
  - Show all the tasks that need to be completed/are completed

- Logic/Events:

  - If the user clicks the logging out button, the user is logged out of their account
  - If the task is complete, the user can mark off the task as complete
  - If the user clicks the log out button => the user returns to the home page
  - If the user clicks the "task complete" button => the task will turn green and say "task complete".

- Loops/If Else Checks:

  - Similar to the Task Manipulation section, the dashboard will display this specific user's tasks that they have on their list

  - If the user that is logged in is Person A => only their list will appear

  - If the user is unable to log in, no list will appear as well as a sign in failure

- Data Core Variables:
  - Delete: Deletes the task when button is clicked
  - Array: This specific code holds the task list itself.
  - Object: Able to add, delete, create, or edit the objects in the user's task list.
  - Boolean: When the user puts in the correct username or password, their tasks list is shown.

**Task(s) Manipulation**

- DOM references:

  - Display the "Add Task" Button
  - Create a box around the listed task
  - Background color for the site itself
  - Colors on the buttons designate each button's task when clicked (i.e Red color for the delete button)
  - "Change Text" button to edit the text on the task
  - "Choose category" button to consider task complete or not

  - Logic/Events
    - If the user clicks "delete task" => task will be deleted.
    - If user clicks "add task" => the user will be able to add a task to list
    - If the user clicks "choose category" => mark off the item that is on the list or unmark it
    - If the user clicks "Change Text" => the user can change the data of the site.

- Logic/Events

  - The user will be able to add tasks by clicking the "add task" button
  - The user will be able to delete task by clicking the "delete task" button
  - The user will be able to mark off a task by using the "Choose Category" section
  - The user will be able to edit the task by click the "Change Task" option

- Loops/If Else Checks:

  - If the user clicks "add task" => another task will be added to the list
  - If the user clicks "delete task" => the specific task will be deleted
  - If the user clicks "choose category" => the user can mark or unmark the item on the list
  - If the user clicks "Change Task" => the user's new text is added to the prompt

- Data Core Variables:

  - Delete: Deletes the task when button is clicked
  - Array: This specific code holds the task list itself.
  - Object: Able to add, delete, create, or edit the objects in the user's task list.
  - Boolean: When the user puts in the correct username or password, their tasks list is shown.

- **Additonal Features**

- DOM References
  - Depending on the user logged in, their list must be shown only, not anyone else's.
  - Allow this specific user a way to edit their lists when they log in
- Events
  - When the user enters the correct information into the login page, they are able to see their task list
  - The user is able to edit their task list as much as they wish by using the buttons that are listed in the Task(s) Manipulation and Dashboard sections.
- Loops/If Else Checks
  - The loops mentioned here are the same ones that are listed for the Login Page and the Task(s) Manipulation page. The only difference is that each user will have different list.
- Data Core Variables
  - Delete: Deletes the task when button is clicked
  - Array: Able to add, delete, create, or edit the list that is provided. This specific code holds the task list itself.
  - Object: Able to add, delete, create, or edit the objects in the user's task list.
  - Boolean: When the user puts in the correct username or password, their tasks list is shown.
