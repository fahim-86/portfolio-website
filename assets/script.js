function toggleMenu() {
    document.querySelector('#toggleMenuButton').classList.toggle('expanded');
    document.querySelector('#toggleMenuItems').toggleAttribute('hidden');
  }
  
  document.querySelector('#toggleMenuButton').addEventListener('click', toggleMenu);
  document.querySelectorAll('#toggleMenuItems li').forEach((item) => {
    item.addEventListener('click', toggleMenu);
  });
  