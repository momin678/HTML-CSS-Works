const body = document.body;

const sidebar = document.getElementById('sidebar');
const sidebarRect = sidebar.getBoundingClientRect();
const sidebarHeightUnderViewport = sidebarRect.height + 50 - window.innerHeight;
console.log('sidebarRect', sidebarRect);

const main = document.getElementById('main');
const mainRect = main.getBoundingClientRect();
const mainHeightUnderViewport = mainRect.height + 50 - window.innerHeight;
console.log('mainRect', mainRect);

// condition for checking bug and fix
if (sidebarRect.height > mainRect.height) {
  document.getElementById('container').style.height = sidebarRect.height + 'px';
}

let lastScrollTop = 0;

const scrollHandler = () => {
  const currentScrollTop = window.scrollY;

  // condition for checking bug and fix
  if (sidebarRect.height < mainRect.height) {
    // If scroll direction is downward
    if (currentScrollTop > lastScrollTop) {
      if (window.scrollY >= sidebarHeightUnderViewport) {
        sidebar.classList.remove('stickToTop');
        sidebar.classList.add('stickToBottom');
      }
      if (window.scrollY >= mainHeightUnderViewport) {
        sidebar.classList.remove('stickToBottom');
        sidebar.classList.add('stickToBottomAndScroll');
      }
    }
    // or if scroll direction is upward
    else {
      if (window.scrollY < mainHeightUnderViewport) {
        sidebar.classList.remove('stickToBottomAndScroll');
        sidebar.classList.add('stickToBottom');
      }
      if (window.scrollY < sidebarHeightUnderViewport) {
        sidebar.classList.remove('stickToBottom');
        sidebar.classList.add('stickToTop');
      }
    }
  }
  lastScrollTop = currentScrollTop > 0 ? currentScrollTop : 0;
};

// IGNORE

document.querySelector('footer').innerHTML =
  '<h3>&copy;' +
  new Date().getFullYear() +
  ' ~ No Rights Reserved 🥳</h3> <p>Made with ❤️ by Md. Mominul Haque</p>';
