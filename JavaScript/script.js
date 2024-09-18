try{
    document.getElementById('signUp').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (name && email && password) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            
            alert('Form submitted successfully!');
            this.reset(); // Clear the form
        } else {
            alert('Please fill in all fields.');
        }
    });
}
catch (err) {
    console.log(err.message);
  }


try{
    document.getElementById('signIn').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;
        
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        
        
        console.log("welcome")
        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            alert("Login Succesfully");
            window.location.href="../index.html"
            // Redirect to a different page or perform other actions upon successful login
        } else {
            alert("Invalid Email or Password");
        }
    });
}

catch (err) {
    console.log(err.message);
  }