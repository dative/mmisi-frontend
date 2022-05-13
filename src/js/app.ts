const hamburguerBtn = document.getElementById('hamburguer')
const sideScreen = document.getElementById('sidebar')

if (sideScreen && hamburguerBtn != null) {

    hamburguerBtn.addEventListener("click", sidebar)

    function sidebar() {

        hamburguerBtn!.classList.toggle("is-active")

        sideScreen!.classList.toggle("hidden")
    }
}
