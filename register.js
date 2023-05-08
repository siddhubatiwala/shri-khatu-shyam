
function validateform() {
  // Get form inputs
  var name = document.getElementById("name").value.trim();
  var fathername = document.getElementById("fathername").value.trim();
  var birthdate = document.getElementById("birthdate").value.trim();
  var address = document.getElementById("address").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var occupation = document.getElementById("occupation").value.trim();
  var blood = document.getElementById("blood").value.trim();
  var photo = document.getElementById("photo").value.trim();
  var agree = document.getElementById("agree").checked;

  // Define error flags and messages
  var nameError = fathernameError = birthError = addressError = phoneError = occupationError = bloodError = photoError = checkError = false;
  var nameErrorMsg = fathernameErrorMsg = birthErrorMsg = addressErrorMsg = phoneErrorMsg = occupationErrorMsg = bloodErrorMsg = photoErrorMsg = checkErrorMsg = "";

  // Validate name
  if (name == "") {
    nameError = true;
    nameErrorMsg = "Please enter your name";
  }

  // Validate father name
  if (fathername == "") {
    fathernameError = true;
    fathernameErrorMsg = "Please enter your father name";
  }

  // Validate birthdate
  if (birthdate == "") {
    birthError = true;
    birthErrorMsg = "Please enter your date of birth";
  }

  // Validate address
  if (address == "") {
    addressError = true;
    addressErrorMsg = "Please enter your address";
  }

  // Validate phone
  if (phone == "") {
    phoneError = true;
    phoneErrorMsg = "Please enter your phone number";
  } else if (!/^\d+$/.test(phone)) {
    phoneError = true;
    phoneErrorMsg = "Please enter a valid phone number";
  }

  // Validate occupation
  if (occupation == "") {
    occupationError = true;
    occupationErrorMsg = "Please enter your occupation";
  }

  // Validate blood group
  if (blood == "") {
    bloodError = true;
    bloodErrorMsg = "Please enter your blood group";
  }

  // Validate photo
  if (photo == "") {
    photoError = true;
    photoErrorMsg = "Please upload your photo";
  }

  // Validate checkbox
  if (!agree) {
    checkError = true;
    checkErrorMsg = "Please agree to the terms and conditions";
  }

  // Display error messages if any
  document.getElementById("nameError").innerHTML = nameErrorMsg;
  document.getElementById("fathernameError").innerHTML = fathernameErrorMsg;
  document.getElementById("birthError").innerHTML = birthErrorMsg;
  document.getElementById("addressError").innerHTML = addressErrorMsg;
  document.getElementById("phoneError").innerHTML = phoneErrorMsg;
  document.getElementById("occupationError").innerHTML = occupationErrorMsg;
  document.getElementById("bloodError").innerHTML = bloodErrorMsg;
  document.getElementById("photoError").innerHTML = photoErrorMsg;
  document.getElementById("checkError").innerHTML = checkErrorMsg;

  // Return false to prevent form submission if there are errors
  return !(nameError || fathernameError || birthError || addressError || phoneError || occupationError || bloodError || photoError || checkError);
}


