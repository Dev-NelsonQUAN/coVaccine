// get the button
const scrollToTop = document.getElementById("scrollToTop");
// Show when the scroll is up to a pasrticular height

window.addEventListener("scroll", () => {
  // console.log("here", window.scrollY);

  if (window.scrollY > 700) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});
// Scroll to the top, onClick of the button
 
scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})  


//  Form Sunbmision
// get the form

const contactForm = document.getElementById("contactForm");

// add the eventlistener for the fom submission

contactForm.addEventListener("submit", (event)=> {
    event.preventDefault()

    //show a success when clickeed on
    Swal.fire({
        title: "Submission Successful!",
        text: "Thank You for submitting!",
        icon: "success"
      });
})

const menuBar = document.getElementById("toggleMenu")
const navMenu = document.getElementById("navMenu")

menuBar.addEventListener("click", () => {
  navMenu.classList.toggle("show")
})