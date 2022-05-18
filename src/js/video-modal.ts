/**
 * Video Modal
 *
 * Usage:
 *
 * Add the data-video attribute to the button you
 * want to trigger the toogle, passing the video url.
 *
 * <button data-video="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Text</button>
 */

 const VideoModal = (( el: Element) => {

  let _active = false
  let _videoUrl: string|null

  let _lightboxContainer: HTMLElement|null

  const _getYoutubeUrl = (videoUrl: string|null) => {
    if (videoUrl === null) return null
    const regex = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i
    const matches = regex.exec(videoUrl);

    return !matches
      ? null
      : 'https://www.youtube' + (matches[2] || '') + '.com/embed/' + matches[4] + '?autoplay=1&rel=0'
  }

  const _getVimeoUrl = (videoUrl: string|null) => {
    if (videoUrl === null) return null
    const regex = /(vimeo(pro)?\.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/
    const matches = regex.exec(videoUrl);

    return !matches
      ? null
      : 'https://player.vimeo.com/video/' + matches[3] + '?autoplay=1'
  }

  const _renderFrame = () => {
    let iframeSrc = _getYoutubeUrl(_videoUrl) ?? _getVimeoUrl(_videoUrl)

    if (iframeSrc === null) return

    let iframe = document.createElement('iframe')
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen')
    iframe.setAttribute('allowfullscreen', '')
    iframe.setAttribute('class', 'w-[100vw] h-[56.25vw] sm:w-[90vw] sm:h-[50.625vw] lg:w-[75vw] lg:h-[42.1875vw] z-50 md:rounded lg:rounded-lg')
    iframe.src = iframeSrc
    return iframe
  }

  const _renderModal = () => {

    _lightboxContainer = document.createElement('div')
    _lightboxContainer.classList.add(
      'transition-opacity',
      'duration-300',
      'fixed',
      'inset-0',
      'h-screen',
      'w-screen',
      'overflow-hidden',
      'flex',
      'items-center',
      'justify-center',
      'z-50',
      'opacity-0'
    )

    let overlay = document.createElement('div')
    overlay.classList.add(
      'absolute',
      'inset-0',
      'h-screen',
      'w-screen',
      'overflow-hidden',
      'box-border',
      'bg-white',
      'bg-opacity-80',
      'z-0',
    )

    _lightboxContainer.appendChild(overlay);

    overlay.addEventListener('click', () => _closeModal())

    const frame = _renderFrame()

    if (frame) _lightboxContainer.appendChild(frame)

    let closeIconBtn = document.createElement('button')
    closeIconBtn.classList.add(
      'fixed',
      'top-4',
      'right-4',
      'w-6',
      'h-6'
    )

    closeIconBtn.innerHTML = `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M14 27.5625C6.50781 27.5625.4375 21.4922.4375 14 .4375 6.50781 6.50781.4375 14 .4375 21.4922.4375 27.5625 6.50781 27.5625 14c0 7.4922-6.0703 13.5625-13.5625 13.5625Zm0-25.375C7.50859 2.1875 2.1875 7.44297 2.1875 14c0 6.4914 5.25547 11.8125 11.8125 11.8125 6.4914 0 11.8125-5.2555 11.8125-11.8125C25.8125 7.50859 20.557 2.1875 14 2.1875Zm5.1844 15.6023L15.3945 14l3.7899-3.7898c.257-.25708.257-.6727 0-.92973l-.4649-.46484c-.257-.25704-.6726-.25704-.9297 0L14 12.6055l-3.7898-3.78987c-.25708-.25704-.6727-.25704-.92973 0l-.46484.46484c-.25704.25703-.25704.67265 0 .92973L12.6055 14l-3.78987 3.7898c-.25704.2571-.25704.6727 0 .9297l.46484.4649c.25703.257.67265.257.92973 0L14 15.3945l3.7898 3.7899c.2571.257.6727.257.9297 0l.4649-.4649c.2515-.257.2515-.6726 0-.9297Z" fill="#19191A"/></svg>`

    _lightboxContainer.appendChild(closeIconBtn);

    closeIconBtn.addEventListener('click', () => _closeModal())

    document.body.appendChild(_lightboxContainer)

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') _closeModal()
    })

    requestAnimationFrame(() => {
      _lightboxContainer?.classList.remove("opacity-0")
    })
  }

  const _closeModal = () => {
    _active = false
    requestAnimationFrame(() => {
      _lightboxContainer?.classList.add("opacity-0")
    })
    setTimeout(() => {
      _lightboxContainer?.remove()
    }, 350)
  }

  const _handleElClick = () => {
    _active = true
    _renderModal()
  }

  const init = () => {

    if (!(el instanceof HTMLElement)) return

    const videoUrl = el.dataset.video

    if (videoUrl === undefined) return

    if (videoUrl.length > 0) {
      _videoUrl = videoUrl
    }

    if (_videoUrl === null) return

    el.setAttribute('aria-expanded', _active.toString())
    // el.setAttribute('aria-controls', 'modal')
    el.addEventListener('click', _handleElClick)
  }

  init()
})


const videoModalControl = (() => {

  const init = ( selector: string ) => {
    const elements = document.querySelectorAll( selector );
    elements.forEach(el => {
      VideoModal(el);
    });
  }

  init('[data-video]')

})();

export default videoModalControl
