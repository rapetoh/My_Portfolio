const switchButton = document.querySelector('.changeTheme');
let toggleTheme = localStorage.getItem('toggleTheme') || 1;

if (toggleTheme === '0') {
    document.documentElement.style.setProperty('--ecriture','#ffffff');
    document.documentElement.style.setProperty('--bg1','#1f242d');
    document.documentElement.style.setProperty('--bg2','0 20PX 40px 0px rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--bg3','rgb(23, 22, 22)');
    document.documentElement.style.setProperty('--coloraqua','aqua');
} else {
    document.documentElement.style.setProperty('--ecriture','black');
    document.documentElement.style.setProperty('--bg1','#adaaad');
    document.documentElement.style.setProperty('--bg2','0 20PX 40px 0px rgb(48, 48, 48)');
    document.documentElement.style.setProperty('--bg3','white');
    document.documentElement.style.setProperty('--coloraqua','#257278');
}

switchButton.addEventListener('click', () => {
    if (toggleTheme === '0') {
        document.documentElement.style.setProperty('--ecriture','black');
        document.documentElement.style.setProperty('--bg1','#adaaad');
        document.documentElement.style.setProperty('--bg2','0 20PX 40px 0px rgb(48, 48, 48)');
        document.documentElement.style.setProperty('--bg3','white');
        document.documentElement.style.setProperty('--coloraqua','#257278');
        toggleTheme = '1';
    } else {
        document.documentElement.style.setProperty('--ecriture','#ffffff');
        document.documentElement.style.setProperty('--bg1','#1f242d');
        document.documentElement.style.setProperty('--bg2','0 20PX 40px 0px rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--bg3','rgb(23, 22, 22)');
        document.documentElement.style.setProperty('--coloraqua','aqua');
        toggleTheme = '0';
    }
    localStorage.setItem('toggleTheme', toggleTheme);
});
function activateLink(link) {
    var navLinks = document.querySelectorAll('nav a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
    }
    link.classList.add('active');
    localStorage.setItem('activeLink', link.href);
  }
  
  window.onload = function() {
    var activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
      var navLinks = document.querySelectorAll('nav a');
      for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === activeLink) {
          navLinks[i].classList.add('active');
          break;
        }
      }
    }
  }
  