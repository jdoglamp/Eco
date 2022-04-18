window.onload = function () {
  backToTop();
  tabsFunction();
  keyIssuesFunction();
  mobileMenuFunction();
  slidesFunction();
}

//  back to the top button
function backToTop() {
  const toTop = document.querySelector(".js-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })
}

//Had help from Kyle with this function
function tabsFunction() {

  // member groups
  let tabs = document.querySelectorAll(".js-member-tab-content p");
  let tabContents = document.querySelectorAll(".js-member-content div");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabContents[index].classList.add("active");
      tabs[index].classList.add("active");
    });
  });
}


//Had help from Kyle with this function
function keyIssuesFunction() {
  const keyIssues = document.getElementsByClassName("js-issue-collapsible");


  for (let i = 0; i < keyIssues.length; i++) {
    //console.log(i);
    const issue = keyIssues[i];
    let button = issue.querySelector('.js-issue-button');
    let hiddenContent = issue.querySelector('.js-issue-hidden');

    hiddenContent.style.display = "none";

    button.addEventListener("click", function () {
      toggleContainer(hiddenContent, button);
    });
  }

  function toggleContainer(element, button) {

    console.log(button);

    if (element.style.display === "none") {
      element.style.display = "block";
      //button.dataset('data-maori','maori read less');
      button.innerHTML = "Read less";
    } else {
      element.style.display = "none";
      //button.dataset('data-maori','maori read more');
      button.innerHTML = "Read more";
    }
  }
}



function mobileMenuFunction() {

  // mobile menu navigation
  const menu_btn = document.querySelector('.js-hamburger');
  const mobile_menu = document.querySelector('.js-mobile-nav');

  menu_btn.addEventListener('click', function () {

    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

  document.querySelectorAll(".js-mobile-nav a").forEach(n => n.addEventListener("click", () => {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');

  }));
}


function slidesFunction() {
  //carousel       
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("js-slide");
    var dots = document.getElementsByClassName("js-dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 7000); // Change image every 7 seconds
  }
}
