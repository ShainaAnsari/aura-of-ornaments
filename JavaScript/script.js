document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.getElementById('userIcon');
    const userDropdown = document.getElementById('userDropdown');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const signInOption = document.getElementById('signInOption');
    const signUpOption = document.getElementById('signUpOption');
    const logOutOption = document.getElementById('logout');

    if (userIcon) {
        userIcon.addEventListener('click', function () {
            const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';

            if (isLoggedIn) {
                const userName = localStorage.getItem('name') || 'User';
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
    }

    if (logOutOption) {
        logOutOption.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            alert('You have been logged out!');
            window.location.href = "form/sign_in.html"; // Make sure this path is correct
        });
    }

    const signUpForm = document.getElementById('signUp');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
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
    }

    const signInForm = document.getElementById('signIn');
    if (signInForm) {
        signInForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const loginEmail = document.getElementById('loginEmail').value.trim();
            const loginPassword = document.getElementById('loginPassword').value.trim();
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                localStorage.setItem('loggedIn', 'true');
                alert('Login successful! Redirecting to homepage.');
                window.location.href = "../index.html"; // Ensure correct path
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }

    window.onload = function () {
        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
        if (userIcon) userIcon.style.display = 'block';

        if (isLoggedIn && userDropdown) {
            const userName = localStorage.getItem('name') || 'User';
            userDropdown.style.display = 'none';
            if (userNameDisplay) {
                userNameDisplay.style.display = 'block';
                userNameDisplay.innerText = `Welcome, ${userName}`;
            }
        } else if (userDropdown) {
            userDropdown.style.display = 'none';
        }
    };
});

// Address page js
document.addEventListener("DOMContentLoaded", function() {
    const addressForm = document.getElementById("userAddressForm");
    
    addressForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Address saved successfully!");
    });
}); 

// Products wishlist icon
document.querySelectorAll('.wishlist-icon img').forEach(icon => {
    icon.addEventListener('click', function() {
        // Store the current width & height before swapping the image
        let fixedWidth = this.clientWidth;
        let fixedHeight = this.clientHeight;

        // Toggle the image source
        if (this.getAttribute("src") === "images/wishlist.svg") {
            this.setAttribute("src", "images/red-heart.svg"); // Change to red heart
        } else {
            this.setAttribute("src", "images/wishlist.svg"); // Change back to normal heart
        }

        // Reapply the original width & height to prevent size changes
        this.style.width = `${fixedWidth}px`;
        this.style.height = `${fixedHeight}px`;
    });
});



// To increase and decrease quantity of a product
document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const quantityInput = document.getElementById("quantity");

    decreaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
});



// Product details toggle 
function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    let header = section.previousElementSibling;

    if (section.style.display === "block") {
        section.style.display = "none";
        header.classList.remove("active");
    } else {
        section.style.display = "block";
        header.classList.add("active");
    }
}
