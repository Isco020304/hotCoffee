const burger = document.querySelector(".burger")
const burger_menu = document.querySelector(".burger_menu")

burger.addEventListener("click" , ()=>{
    burger_menu.classList.toggle("active")
})