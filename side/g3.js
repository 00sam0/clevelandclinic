// Function to switch between sections
function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(s => s.style.display = 'none');

    // Show the selected section
    document.getElementById(section).style.display = 'block';
}

// function showNotification() {
//     document.getElementById('notification-modal').style.display = 'flex';
// }

// function closeNotification() {
//     document.getElementById('notification-modal').style.display = 'none';
// }

document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // showNotification();
});

document.getElementById('signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // showNotification();
});

// Simple form submission handler for login and signup
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // alert(`Logging in with email: ${email}`);
});

document.getElementById('signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    // alert(`Signing up with name: ${name}, email: ${email}`);
});

// Show the correct page based on login status or user action
function showHome() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        // If logged in, show the home page
        document.getElementById('home').style.display = 'block';
        document.getElementById('login').style.display = 'none';
        document.getElementById('signup').style.display = 'none';
    } else {
        // If not logged in, show the login page
        alert('Please log in first.');
        showSection('login');
    }
}



// // Display a particular section (login or signup)
// function showSection(sectionId) {
//     document.getElementById('home').style.display = 'none';
//     document.getElementById('login').style.display = 'none';
//     document.getElementById('signup').style.display = 'none';
    
//     document.getElementById(sectionId).style.display = 'block';
// }

// // Handle login logic
// function handleLogin(event) {
//     event.preventDefault();
    
//     // Display the notification when login is attempted
//     showNotification();

//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     // Simulate login failure and show notification
//     if (email === 'user@example.com' && password === 'password123') {
//         localStorage.setItem('isLoggedIn', 'true');
//         alert('Login successful!');
//         showHome();
//     } else {
//         alert('Invalid credentials. Please try again.');
//     }
// }

// // Handle signup logic
// function handleSignup(event) {
//     event.preventDefault();

//     // Display the notification when signup is attempted
//     showNotification();

//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     // Simulate signup failure and show notification
//     localStorage.setItem('isLoggedIn', 'true');
//     alert('Signup successful!');
//     showHome();
// }

// // Show the notification modal
// function showNotification() {
//     document.getElementById('notification-modal').style.display = 'block';
// }

// // Close the notification modal
// function closeNotification() {
//     document.getElementById('notification-modal').style.display = 'none';
// }

// // On page load, check if the user is logged in and adjust the display
// window.onload = function() {
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (isLoggedIn === 'true') {
//         showHome();
//     } else {
//         showSection('login');
//     }
// };
