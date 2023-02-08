document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#toggleMenuButton').addEventListener('click', () => {
    document.querySelector('.pf-header').classList.toggle('toggled');
    document.querySelector('#toggleMenuItems').toggleAttribute('hidden');
  });
  document.querySelector('.m-close > #x-icon').addEventListener('click', () => {
    document.querySelector('#toggleMenuItems').toggleAttribute('hidden');
  });
  document.querySelectorAll('.coll-nav-items li').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('#toggleMenuItems').toggleAttribute('hidden');
    });
  });
});
