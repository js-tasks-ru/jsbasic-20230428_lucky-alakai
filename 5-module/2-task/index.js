function toggleText() {

  const toggleBtn = document.querySelector('.toggle-text-button');
  const textDiv = document.querySelector('#text');

  toggleBtn.addEventListener('click', () => {
    if (textDiv.hidden === false) {
      textDiv.hidden = true
    } else {
      textDiv.hidden = false;
    }
  });


}

