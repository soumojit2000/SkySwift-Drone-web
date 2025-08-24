let navbar = document.getElementById("navbar");

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// searchbar js
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

// form validation
$(document).ready(function () {
  function validateForm() {
    let isValid = true;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    // Full Name
    if ($("#fullname").val().trim() === "") {
      alert("Full Name is required");
      isValid = false;
      return false;
    }

    // Email
    if (!$("#email").val().match(emailPattern)) {
      alert("Enter a valid Email Address");
      isValid = false;
      return false;
    }

    // Phone
    if (!$("#phone").val().match(phonePattern)) {
      alert("Enter a valid 10-digit Phone Number");
      isValid = false;
      return false;
    }

    // Address
    if ($("#address").val().trim() === "") {
      alert("Address is required");
      isValid = false;
      return false;
    }

    // City
    if ($("#city").val().trim() === "") {
      alert("City is required");
      isValid = false;
      return false;
    }

    // State
    if ($("#state").val().trim() === "") {
      alert("State is required");
      isValid = false;
      return false;
    }

    // Country
    if ($("#country").val().trim() === "") {
      alert("Country is required");
      isValid = false;
      return false;
    }

    // Zip
    if ($("#zip").val().trim() === "") {
      alert("Zip code is required");
      isValid = false;
      return false;
    }

    // Date
    if ($("#date").val().trim() === "") {
      alert("Please select a Date");
      isValid = false;
      return false;
    }

    return isValid;
  }

  // Submit event
  $("#personalForm").on("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully ✅");
      this.reset();
    }
  });
});
