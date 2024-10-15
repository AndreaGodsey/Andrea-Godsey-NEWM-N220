//Reference Variables
const friendNameInput = document.getElementById("friendName");
const friendsListRef = document.getElementById("friendsList");

// Variable to track my friends
const myFriends = [];

//Function for  Adding Friend
function addFriend() {
  //Get the Name the User Typed In
  const nameValue = friendNameInput.value;

  //Add Friend to my Friend's List
  myFriends.push({name: nameValue, color: "black" });

  //Add the name to the friends list
  showFriends();

  //Clear the Name the User Typed
  friendNameInput.value = "";
}

function removeFriend(friendName) {
  //Use variable to track index of friend to remove
myFriends.splice(friendIndex, 1);
  let friendIndex;

  //loop through current friends to find the friendName
  //for (let i = 0; i < myFriends.length; i++) {
    //if (myFriends[i] === friendName) {
      //friendIndex = i;
    //}
  //}

  console.log(friendIndex);

  //Remove Friends
  myFriends.splice(friendIndex, 1);
  console.log(myFriends);
  showFriends();
}

//Function to Loop Through My Friends and Show them on Page
function showFriends() {
  //Clear Any Friends on the Page
  friendsListRef.innerHTML = "";

  //Loop Through Friends
  myFriends.forEach(function (friend, friendIndex) {
    friendsListRef.innerHTML += `<li>
    <span style="color: ${friend.color}">${friend.name}</span> <button onclick="removeFriend('${friend.name}')">X</button>
    <button onclick="moveFriend('${friend.name}', true)">&#8593;</button>
    <button onclick="moveFriend('${friend.name}', false)">&#8595;</button>

    <input type="color" 
    name="friendTextColor${friendIndex}" 
    id="friendTextColor${friendIndex}"
    onchange="changeFriendTextColor('${friendIndex}', event.currentTarget)" />

    </li>`;
  });
}

function clearList() {
  myFriends.splice(0, myFriends.length);

  showFriends();
}

//functions to move friends ranking
function moveFriend(friendName, isMovingUp) {
    let friendIndex;
    let friendNewIndex;

    for(let i = 0; i < myFriends.length; i++) {
        if(myFriends[i].name === friendName) {
            friendIndex = i;
            // ['A','B','C'] move B up 1 space
            // index of  'B' is originally 1
            //This is what the result should be
            // ['B', 'A', 'C'] so the new index is 0
            if(isMovingUp) {
                friendNewIndex = friendIndex - 1;
            } else {
                friendNewIndex = friendIndex + 1;
               }
            // ['A','B','C'] move B down 1 space
            // index of  'B' is originally 1
             // ['A','C','B'] so new index is 2
           
        }
    }
//Remove Friend from Old Space
    myFriends.splice(friendIndex, 1);
//Add Friend to New Space
    myFriends.splice(friendNewIndex, 0, { name: friendName, color: "black" });

    showFriends();
}

function changeFriendTextColor(friendIndex, inputRef) {
const friendName = myFriends[friendIndex].name;
myFriends.splice(friendIndex, 1, { name: friendName, color:inputRef.value })

showFriends();
}
