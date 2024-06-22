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

auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in, display user details
        displayUserDetails(user);
    } else {
        // No user is signed in, redirect to login page
        window.location.href = "index.html";
    }
});

function displayUserDetails(user) {
    const userDetailsDiv = document.getElementById('user-details');
    userDetailsDiv.innerHTML = `
        <p style="font-size: 20px; color: red;"><strong>Email:</strong> ${user.email}</p>
    `;
}

// Logout functionality
document.getElementById('logout-button').addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        // Sign-out successful, redirect to login page
        window.location.href = "index.html";
    }).catch((error) => {
        console.error("Error signing out: ", error);
    });
});

var db = firebase.firestore();

    document.getElementById('submit-button').addEventListener('click', function() {
        var inputText = document.getElementById('input').value;
        var user = firebase.auth().currentUser;
        db.collection("requests").add({
            text: inputText,
            email: user.email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function() {
            console.log("Document successfully written!");
            window.location.href = "Confirmation.html";
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    });