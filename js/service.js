let navbar = document.getElementById("navbar");

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBox");

// Named function
function toggleSearchBox() {
  if (searchBox.style.display === "block") {
    searchBox.style.display = "none";
  } else {
    searchBox.style.display = "block";
    searchBox.querySelector("input").focus();
  }
}

// Event listener
searchIcon.addEventListener("click", toggleSearchBox);

// Named function for form validation
  function validateForm() {
    let isValid = true;

    // Name validation
    let name = $("#name").val().trim();
    if (name === "") {
      alert("Please enter your name");
      isValid = false;
      return false;
    }

    // Email validation
    let email = $("#loginEmail").val().trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // simple email pattern
    if (email === "") {
      alert("Please enter your email");
      isValid = false;
      return false;
    } else if (!email.match(emailPattern)) {
      alert("Please enter a valid email address");
      isValid = false;
      return false;
    }

    // Password validation
    let password = $("#loginPassword").val().trim();
    if (password === "") {
      alert("Please enter your password");
      isValid = false;
      return false;
    }
    // Password Check
    if(password.length < 6){
      alert("Password must be at least 6 characters long");
      return false;
    }

    return isValid;
    
  }

  // Submit event listener
  $(document).ready(function () {
    $("#form").on("submit", function (e) {
      e.preventDefault(); // prevent page refresh
      if (validateForm()) {
        alert("Form submitted successfully ✅");
      }
    });
  });
