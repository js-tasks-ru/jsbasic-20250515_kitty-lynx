function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const textElement = document.getElementById('text');

  button.addEventListener('click', () => {
    textElement.toggleAttribute('hidden');
  });
}
