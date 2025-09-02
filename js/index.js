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

//video-player
document.addEventListener("DOMContentLoaded", function () {
  const thumb = document.getElementById("playVideo");

  thumb.addEventListener("click", function () {
    // bringing iframe
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/G1hKzCkywM8?autoplay=1&rel=0&modestbranding=1";
    iframe.width = "1360";
    iframe.height = "550";
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.style = "aspect-ratio:16/9; border-radius:12px; margin-top:90px";

    // replacing image with iframe
    thumb.replaceWith(iframe);
  });
});

