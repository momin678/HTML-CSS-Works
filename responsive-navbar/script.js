const body = document.querySelector('body'),
      nav = document.querySelector('nav'),
      modeToggle = document.querySelector('.dark-light'),
      searchToggle = document.querySelector('.searchToggle'),
      sidebarClose = document.querySelector('.sidebarClose'),
      sidebarOpen = document.querySelector('.sidebarOpen');
let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
        body.classList.add('dark');
    }
// toggle dark and night mode
    modeToggle.addEventListener('click', function(){
        modeToggle.classList.toggle('active');
        body.classList.toggle('dark');
        if(!body.classList.contains('dark')){
            localStorage.setItem('mode', 'light-mode');
        }else{
            localStorage.setItem('mode', 'dark-mode');
        }
    });
// toggle search box
    searchToggle.addEventListener('click', function(){
        searchToggle.classList.toggle('active');
    });
// side bar toggle 
    sidebarOpen.addEventListener('click', function(){
        nav.classList.add('active');
    });
    body.addEventListener('click', function(e){
        let clickedElm = e.target;
        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
            nav.classList.remove('active');
        };
    });
