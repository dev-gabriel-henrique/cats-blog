const positiveButton = document.querySelector('.positive');
const negativeButton = document.querySelector ('.negative');
let activeButton = null;

positiveButton.addEventListener('click', function () {
  if (this === activeButton) {
    this.classList.remove('active');
    activeButton = null;
    return;
  }
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  this.classList.add('active');
  activeButton = this;
});

negativeButton.addEventListener('click', function () {
  if (this === activeButton) {
    this.classList.remove('active');
    activeButton = null;
    return;
  }
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  this.classList.add('active');
  activeButton = this;
});