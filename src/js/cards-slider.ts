import Splide from '@splidejs/splide';


const CardsSlider = (el: Element) => {

  const minWidth = 1110
  let refreshed = false

  const splide = new Splide( '.splide', {
    type: 'loop',
    perMove: 1,
    pagination: false,
    arrows: false,
    perPage: 2,
    gap: '30px',
    autoWidth: true,
    focus: 'center',
    breakpoints: {
      1110: {
        perPage: 2,
        gap: '2rem',
        padding: '3rem',
        autoWidth: false,
        focus: 0,
      },
      960: {
        perPage: 1,
        padding: 'min(10px, 10%)',
        autoWidth: false,
        focus: 0,
      },
    }
  } ).mount();

  window.addEventListener('resize', (e) => {
    if( window.innerWidth > minWidth && !refreshed ) {
      splide.refresh()
      refreshed = true
    }

    if (window.innerWidth < minWidth && refreshed) {
      refreshed = false
    }
  })

  el.addEventListener('click', (e) => {
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.classList.contains('cards-slider-prev')) splide.go(`-1`)
      if (e.target.classList.contains('cards-slider-next')) splide.go(`+1`)
    }
  })

}


const cardsSliders = document.querySelectorAll('.cards-slider');

cardsSliders.forEach(cardsSlider => CardsSlider(cardsSlider));
