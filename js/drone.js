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

const buttons = document.querySelectorAll(".page-btn");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let currentPage = 1;
  const totalPages = 4;

  function updatePagination() {
    buttons.forEach(btn => btn.classList.remove("active"));
    buttons.forEach(btn => {
      if (btn.textContent == currentPage) {
        btn.classList.add("active");
      }
    });

    prev.disabled = currentPage === 1;
    next.disabled = currentPage === totalPages;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (!isNaN(btn.textContent)) {
        currentPage = parseInt(btn.textContent);
        updatePagination();
        console.log("Page " + currentPage + " opened");
      }
    });
  });

  prev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
      console.log("Previous Page " + currentPage + " opened");
    }
  });

  next.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
      console.log("Next Page " + currentPage + " opened");
    }
  });

  updatePagination();
  
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