function showSignup() {
    document.getElementById('login-container').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('signup-container').style.display = 'block';
        setTimeout(() => {
            document.getElementById('signup-container').style.opacity = '1';
        }, 10); // Adding a slight delay to ensure transition works
    }, 300);
}

function showLogin() {
    document.getElementById('signup-container').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
        setTimeout(() => {
            document.getElementById('login-container').style.opacity = '1';
        }, 10); // Adding a slight delay to ensure transition works
    }, 300);
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDBwRhlBk_9blfN-bles2IzhhqXV736bI",
    authDomain: "authportal-d04b3.firebaseapp.com",
    projectId: "authportal-d04b3",
    storageBucket: "authportal-d04b3.appspot.com",
    messagingSenderId: "743541874377",
    appId: "1:743541874377:web:7f1849798c749af9c93718",
    measurementId: "G-4M8TE9VVLR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Check authentication state
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in, redirect to dashboard
        window.location.href = "dashboard.html";
    }
});

// Login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error signing in: ", error);
        });
});

// Handle sign-up
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            var user = userCredential.user;
            console.log('User signed up:', user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Error signing up:', errorCode, errorMessage);
        });
});
