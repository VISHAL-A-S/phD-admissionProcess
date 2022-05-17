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
  
  var ApplicantPersonalDB= firebase.database().ref('ApplicantPersonal');
  document.getElementById('ApplicantPersonal').addEventListener("submit",submitForm);
  function submitForm(e){
      e.preventDefault();
      var name=getElementVal('name');
      var emailid=getElementVal('emailid');
      var addrContent = getElementVal("addrContent");
      var phone = getElementVal("phone");
      var guardianphone = getElementVal("guardianphone");
      var aadharnum = getElementVal("aadharnum");
      /*var courseopted=getElementVal('courseopted');
      var tenthboard=getElementVal('tenthboard');
      var tenthcertificate=getElementVal('tenthcertificate');
      var tenthpercentage=getElementVal('tenthpercentage');
      var twelfthboard=getElementVal('twelfthboard');
      var twelfthcertificate=getElementVal('twelfthcertificate');
      var twelfthpercentage=getElementVal('twelfthpercentage');
      var ugpercentage=getElementVal('ugpercentage');*/
  saveMessages(name, emailid, addrContent,phone,guardianphone,aadharnum/*,courseopted,tenthboard,tenthcertificate,tenthpercentage,twelfthboard,twelfthcertificate,twelfthpercentage,ugpercentage*/);

  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("ApplicantPersonal").reset();
}

const saveMessages = (name, emailid, addrContent,phone,guardianphone,aadharnum/*,courseopted,tenthboard,tenthcertificate,tenthpercentage,twelfthboard,twelfthcertificate,twelfthpercentage,ugpercentage*/) => {
  var newContactForm = ApplicantPersonalDB.push();
  newContactForm.set({
    name: name,
    emailid: emailid,
    addrContent: addrContent,
    phone:phone,
    guardianphone:guardianphone,
    aadharnum:aadharnum,
    /*courseopted:courseopted,
    tenthboard:tenthboard,
    tenthcertificate:tenthcertificate,
    tenthpercentage:tenthpercentage,
    twelfthboard:twelfthboard,
    twelfthcertificate:twelfthcertificate,
    twelfthpercentage:twelfthpercentage,
    ugpercentage:ugpercentage,*/
  });
  alert('Submited!');
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
  