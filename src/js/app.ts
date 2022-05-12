const navBtn = document.querySelector("#menu")
const menuBar = document.querySelector('[role="menubar"]')
let isExpanded = false

// @ts-ignore
navBtn.addEventListener('click', () => {
  if (!isExpanded) {
    navBtn?.classList.add("is-active")
    navBtn?.setAttribute("aria-expanded","true")
    isExpanded = true
  }else {
    navBtn?.classList.remove("is-active")
    navBtn?.setAttribute("aria-expanded","false")
    isExpanded = false
  }
  menuBar?.classList.toggle('flex')
  menuBar?.classList.toggle('hidden')
})