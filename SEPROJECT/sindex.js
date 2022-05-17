function makeid() {
  var uid=""
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 4; i++)
      uid += possible.charAt(Math.floor(Math.random() * possible.length));
    
   document.getElementById("demo").innerHTML = uid;
  }
 
var firebaseConfig = {
  apiKey: "AIzaSyC1ySZHrpOTbAQfbF7VNBcUrvcf1-VXYgM",
  authDomain: "phd-app-58d1d.firebaseapp.com",
  databaseURL: "https://phd-app-58d1d-default-rtdb.firebaseio.com",
  projectId: "phd-app-58d1d",
  storageBucket: "phd-app-58d1d.appspot.com",
  messagingSenderId: "661825239440",
  appId: "1:661825239440:web:ad8f20e315b10b741cdb15",
  measurementId: "G-EJL0RX69L8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('full_name').value
  var id = document.getElementById("demo").innerHTML;
  

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is incorrect!!')
    return
    // Don't continue running the code
  }

 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref();

    // Create User data
    var user_data = {
      ApplicantID: id,
      Name : full_name,
      
      authorid: "",
      courseopted:"",
      tenthboard:"",
      tenthcertificate:"",
      tenthpercentage:"",
      twelfthboard:"",
      twelfthcertificate:"",
      twelfthpercentage:"",
      ugpercentage:""
    }

    // Push to Firebase Database
    database_ref.child('Applicant/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}

// Set up our login function
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is incorrect!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('Applicant/' + user.uid).update(user_data)

    // DOne
    window.location.href = "applicant.html";

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
