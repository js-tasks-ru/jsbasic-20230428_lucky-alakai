function toggleText() {

  const toggleBtn = document.querySelector('.toggle-text-button');
  const textDiv = document.querySelector('#text');

  toggleBtn.addEventListener('click', () => {
    textDiv.hidden === false ? textDiv.hidden = true : textDiv.hidden = false;
  })


}

toggleText();
