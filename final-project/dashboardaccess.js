function validateLogin() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    
    let containsNumber = false;
    let containsUppercase = false;


    const usernameReference = document.getElementById("username").value;
    const passwordReference = document.getElementById("password").value;

    if (usernameReference === '') {
        document.getElementById('usernameError').innerHTML = 'Username box cannot be empty!';
    }

    if (passwordReference === '') {
        document.getElementById('passwordError').innerHTML = 'Password box cannot be empty!';
    }

    console.log(passwordReference.length)

    if (passwordReference > 8) {
        document.getElementById('passwordError').innerHTML ='Password must be at least 8 characters!'
    }
    
    for (let i = 0; i < passwordReference.length; i++) {
        const currentCharacter = passwordReference[i];
    
        // Is there at least 1 number
        if (isNaN(currentCharacter) === false) {
            containsNumber = true;
          } else {
            document.getElementById('passwordError').innerHTML ='Password must have at least 1 number!'
          }
        // Is there at least 1 capital letter
        if (
          currentCharacter == currentCharacter.toUpperCase() &&
          isNaN(currentCharacter)
        ) {
          containsUppercase = true;
        } else{
            document.getElementById('passwordError').innerHTML ='Password must have at least 1 capital letter!'
        }

      }

      const validPassword = containsNumber && containsUppercase;

    if (validPassword) {
        window.location.href = 'taskaccount.html';
      passwordReference = "";
    } else {
      alert("Login Unsuccessful");
    }
    
    }
