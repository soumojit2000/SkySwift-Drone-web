$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault(); 

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let password = $("#pwd").val().trim();
    let confirmPassword = $("#cnfrm_pwd").val().trim();
    let agree = $("#agree").is(":checked");

    // Name Check
    if(name === ""){
      alert("Please enter your full name");
      return false;
    }

    // Email Check (basic regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
      alert("Please enter a valid email address");
      return false;
    }

    // Password Check
    if(password.length < 6){
      alert("Password must be at least 6 characters long");
      return false;
    }

    // Confirm Password Check
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return false;
    }

    // Terms & Conditions Check
    if(!agree){
      alert("You must agree to the Terms and Conditions");
      return false;
    }

    // যদি সব ঠিক থাকে
    alert("Form submitted successfully!");
    this.submit(); // আসল ফর্ম সাবমিট করো
  });

});