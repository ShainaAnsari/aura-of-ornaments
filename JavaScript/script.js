document.getElementById('userIcon').addEventListener('click', function () {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const userDropdown = document.getElementById('userDropdown');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const signInOption = document.getElementById('signInOption');
    const signUpOption = document.getElementById('signUpOption');
    const logOutOption = document.getElementById('logout');

    // Toggle dropdown visibility on click
    if (userDropdown.style.display === 'none') {
        userDropdown.style.display = 'block';
    } else {
        userDropdown.style.display = 'none';
    }

    if (isLoggedIn) {
        const userName = localStorage.getItem('name');
        signInOption.style.display = 'none';
        signUpOption.style.display = 'none';
        logOutOption.style.display = 'block';
        userNameDisplay.style.display = 'block';
        userNameDisplay.innerText = `Welcome, ${userName}`;
    } else {
        signInOption.style.display = 'block';
        signUpOption.style.display = 'block';
        logOutOption.style.display = 'none';
        userNameDisplay.style.display = 'none';
    }
});

document.getElementById("logout").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    alert("You have been logged out!");

    window.location.href = "form/sign_in.html"; 
});

try {
    document.getElementById('signUp').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (name && email && password) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('Sign-Up successful! Redirecting to Sign-In page.');
            window.location.href = "sign_in.html";
        } else {
            alert('Please fill in all fields.');
        }
    });
} catch (err) {
    console.error('Error in sign-up form:', err.message);
}

try {
    document.getElementById('signIn').addEventListener('submit', function (event) {
        event.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value.trim();
        const loginPassword = document.getElementById('loginPassword').value.trim();

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            alert('Login successful! Redirecting to the homepage.');
            localStorage.setItem('loggedIn', true); 
            window.location.href = "../index.html";
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
} catch (err) {
    console.error('Error in sign-in form:', err.message);
}

window.onload = function () {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const userWrapper = document.getElementById('userWrapper');
    const userDropdown = document.getElementById('userDropdown');

    document.getElementById('userIcon').style.display = 'block';

    if (isLoggedIn) {
        const userName = localStorage.getItem('name');
        userDropdown.style.display = 'none'; 
    } else {
        userDropdown.style.display = 'none'; 
    }
}
