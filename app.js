const hambuger = document.querySelector('.hambuger')
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links li")

hambuger.addEventListener("click", () => {
    navLinks.classList.toggle("show")
   links.forEach( list =>{
       list.classList.toggle("fade")
   })
})