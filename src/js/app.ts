const navBtn = document.querySelector("#menu")
const menuBar = document.querySelector('[role="menubar"]')
let menuOpen = false

// @ts-ignore
navBtn.addEventListener('click', () => {
  if (!menuOpen) {
    navBtn?.classList.add("is-active") 
    menuOpen = true
  }else {
    navBtn?.classList.remove("is-active")
    menuOpen = false
    console.log(menuOpen)
  }
  menuBar?.classList.toggle('flex')
  menuBar?.classList.toggle('hidden')
})