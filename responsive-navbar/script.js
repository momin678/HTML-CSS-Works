const body = document.querySelector('body'),
      nav = document.querySelector('nav'),
      modeToggle = document.querySelector('.dark-light'),
      searchToggle = document.querySelector('.searchToggle');
// toggle dark and night mode
modeToggle.addEventListener('click', function(){
    modeToggle.classList.toggle('active');
    body.classList.toggle('dark');
});
// toggle search box
searchToggle.addEventListener('click', function(){
    searchToggle.classList.toggle('active');
});