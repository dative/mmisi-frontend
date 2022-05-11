const button:HTMLElement|null = document.getElementById('hamburger-button');
button?.addEventListener('click', addClass);

function addClass() {
  if (button?.classList.contains('is-active')) {
    button.classList.remove('is-active');
    return;
  }
  button?.classList.add('is-active');
}
