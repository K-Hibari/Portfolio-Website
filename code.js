function bigImg(x) {
    x.style.height = "40px";
    x.style.width = "40px";
  }

  function normalImg(x) {
    x.style.height = "35px";
    x.style.width = "35px";
  }

  let burgerBtn = document.querySelector(".burger-menu-btn");
  let burgerMenu = document.querySelector(".burger-menu");
  let trial = document.querySelector(".abouttext1");

  let isBurgerOpen = false;

  burgerBtn.onclick = function() {
    trial.style.display = "none";
    if (!isBurgerOpen) {
      burgerMenu.style.display = "block";
      burgerBtn.style.backgroundPosition = "center left 50px, center";
      isBurgerOpen = true;
    }
    else if (isBurgerOpen) {
      burgerMenu.style.display = "none";
      burgerBtn.style.backgroundPosition = "center, center left 50px";
      isBurgerOpen = false;
    }
  }