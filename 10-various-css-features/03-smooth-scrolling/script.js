document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  const toggleNavbarTransparency = () => {
    if (window.scrollY > 0) {
      const isTransparent = header.classList.contains("transparent");
      console.log({ isTransparent });
      if (!isTransparent) {
        header.classList.add("transparent");
        console.log("ADDED");
      }
    } else {
      header.classList.remove("transparent");
    }
  };

  window.addEventListener("scroll", toggleNavbarTransparency);
});
