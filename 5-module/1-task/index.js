function hideSelf() {
  let btn1 = document.querySelector('.hide-self-button');
  btn1.addEventListener('click', () => {
    btn1.hidden = true;
  });
}

hideSelf();
