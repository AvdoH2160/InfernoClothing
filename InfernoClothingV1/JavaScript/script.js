function klikNaMenu(element)
{
    let headerDiv = document.getElementById(element);
    let searchField = document.getElementById('search-field');
    let searchOption = document.getElementById('search-option');
    if(headerDiv.style.height === "500px")
    {
        headerDiv.style.height = "70px";
        searchField.style.visibility = "hidden";
        searchOption.style.visibility = "visible";
    }
    else
    {
        headerDiv.style.height = "500px";
        searchField.style.visibility = "visible";
        searchOption.style.visibility = "hidden";
    }
}

function klikNaSearch(element)
{
    let searchField = document.getElementById(element);
    let searchOption = document.getElementById('search-option');
    let searchBar = document.getElementById('searchBar');
    searchField.style.visibility = "visible";
    searchOption.style.visibility = "hidden";
    searchBar.focus();
}

function izgubljenFocus(element)
{
    let searchField = document.getElementById(element);
    let searchOption = document.getElementById('search-option');
    let headerDiv = document.getElementById('header-container');
    let searchBar = document.getElementById('searchBar');
    if(headerDiv.style.height != "500px")
    {
        searchOption.style.visibility = "visible";
        searchField.style.visibility = "hidden";
        searchBar.classList.remove("activated");
        searchOption.classList.remove("activated");
    }
}

$(function() {
    $("#menu-option").click(function() {
        $("#rectangle-1").toggleClass("rotated");
        $("#rectangle-2").toggleClass("rotated");
        $("#rectangle-3").toggleClass("rotated");
        $("#menu-option").toggleClass("rotated");
        $("#searchBar").toggleClass("activated");
        $("#search-option").toggleClass("activated");
    });
});

$(function() {
    $("#search-option").click(function() {
        $("#searchBar").addClass("activated");
        $("#search-option").addClass("activated");
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else
        {
            /*entry.target.classList.remove('show');*/
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const slider = document.querySelector(".brands-container");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Speed multiplier
    slider.scrollLeft = scrollLeft - walk;
  });