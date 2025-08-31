let navbar=document.getElementById('navbar');

window.addEventListener('scroll', checkScroll);

function checkScroll(){
    if (window.scrollY>100){
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
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