import { login } from './sindex.js';
const firebaseConfig = {
    apiKey: "AIzaSyC1ySZHrpOTbAQfbF7VNBcUrvcf1-VXYgM",
    authDomain: "phd-app-58d1d.firebaseapp.com",
    databaseURL: "https://phd-app-58d1d-default-rtdb.firebaseio.com",
    projectId: "phd-app-58d1d",
    storageBucket: "phd-app-58d1d.appspot.com",
    messagingSenderId: "661825239440",
    appId: "1:661825239440:web:ad8f20e315b10b741cdb15",
    measurementId: "G-EJL0RX69L8"
  };

  firebase.initializeApp(firebaseConfig);
  
  var ApplicantDB= firebase.database().ref('Applicant');
  document.getElementById('Applicant').addEventListener("submit",submitForm);
  function submitForm(e){
      e.preventDefault();
      console.log(login.id)
      var tenmark= getElementById('tenmark');
      var tenboard= getElementById('tenboard');
      var tenlink= getElementById('tenlink');
      var twelvemark= getElementById('twelvemark');
      var twelveboard= getElementById('twelveboard');
      var twelvelink= getElementById('twelvelink');
      var ugmark= getElementById('ugmark');
      var autid= getElementById('autid');
      var course= getElementById('course');
      /*var courseopted=getElementVal('courseopted');
      var tenthboard=getElementVal('tenthboard');
      var tenthcertificate=getElementVal('tenthcertificate');
      var tenthpercentage=getElementVal('tenthpercentage');
      var twelfthboard=getElementVal('twelfthboard');
      var twelfthcertificate=getElementVal('twelfthcertificate');
      var twelfthpercentage=getElementVal('twelfthpercentage');
      var ugpercentage=getElementVal('ugpercentage');*/
  saveMessages(tenmark,tenboard,tenlink,twelvemark,twelveboard,twelvelink,ugmark,autid,course/*,courseopted,tenthboard,tenthcertificate,tenthpercentage,twelfthboard,twelfthcertificate,twelfthpercentage,ugpercentage*/);

  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("ApplicantEducational").reset();
}

const saveMessages = (tenmark,tenboard,tenlink,twelvemark,twelveboard,twelvelink,ugmark,autid,course/*,courseopted,tenthboard,tenthcertificate,tenthpercentage,twelfthboard,twelfthcertificate,twelfthpercentage,ugpercentage*/) => {
  // var newContactForm = ApplicantDB.push();
  // newContactForm.update({
  //   ApplicantID: login.id,
  //   courseopted:course,
  //   tenthboard:tenboard,
  //   tenthcertificate:tenlink,
  //   tenthpercentage:tenmark,
  //   twelfthboard:twelveboard,
  //   twelfthcertificate:twelvelink,
  //   twelfthpercentage:twelvemark,
  //   ugpercentage:ugmark,
  // });
  update(ApplicantDB,{
    ApplicantID: login.id,
      courseopted:course,
      tenthboard:tenboard,
      tenthcertificate:tenlink,
      tenthpercentage:tenmark,
      twelfthboard:twelveboard,
      twelfthcertificate:twelvelink,
      twelfthpercentage:twelvemark,
      ugpercentage:ugmark,
  })
  .then(()=>{
    console.log("updated!s")
  })
  .catch((error)=>{
    alert("Unsuccessful, "+error);
  });
};


const getElementVal = (id) => {
  return document.getElementById(id).value;
};
  