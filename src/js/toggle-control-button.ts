/**
 * Toggle Button
 *
 * Usage:
 *
 * Add the data-toggle-control attribute to the button you
 * want to trigger the toogle, passing the element's id
 * you want to control as value.
 *
 * <button data-toggle-control="site-navigation">Text</button>
 */

const ToggleButton = (( el: Element) => {

  // private
  let active = false

  // DOM elements
  let _buttonEl: HTMLButtonElement|null
  let _targetEl: Element|null


  /**
   * If the target element exists, add or remove
   * the active class based on the active state
   */
  const updateTargetState = () => {
    if (_targetEl) {
      if (active) {
        return _targetEl.classList.add('active')

      }
      return _targetEl.classList.remove('active')
    }
  }

  /**
   * It updates the aria-expanded attribute of the
   * button element to be either true or false,
   * depending on the value of the active variable
   */
  const updateButtonState = () => {
    if (_buttonEl !== null) {
      return _buttonEl?.setAttribute('aria-expanded', active.toString())
    }
  }

  /**
   * It updates the state of the button and the target
   */
  const updateState = () => {
    updateButtonState()
    updateTargetState()
  }

  /**
   * Toggle the active variable boolean value and update
   * the ui state
   */
  const handleClick = () => {
    active = !active
    updateState()
  }

  const init = ( btnEl: Element ) => {

    if (!(btnEl instanceof HTMLButtonElement)) return

    const targetSelector = btnEl.dataset.toggleControl

    if (targetSelector === undefined) return

    if (targetSelector.length > 0) {
      _targetEl = document.getElementById(targetSelector)
    } else {
      // if no target is specified, use the button element next sibling
      _targetEl = btnEl.nextElementSibling
    }

    if (_targetEl === null) return

    _buttonEl = btnEl
    _buttonEl.setAttribute('aria-expanded', active.toString())
    _buttonEl.setAttribute('aria-controls', targetSelector)
    _buttonEl.addEventListener('click', handleClick)
  }

  init(el)
})


const toggleControlButton = (() => {

  const init = ( btnSelector: string ) => {
    const buttons = document.querySelectorAll( btnSelector );
    buttons.forEach(button => {
      ToggleButton(button);
    });
  }

  init('[data-toggle-control]')

})();

export default toggleControlButton
