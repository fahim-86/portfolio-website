document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#toggleMenuButton').addEventListener('click', () => {
        console.log();
        document.querySelector('.pf-header').classList.toggle('toggled');
        document.querySelector('#toggleMenuItems').toggleAttribute('hidden');
    });
    document.querySelector('#x-icon').addEventListener('click', () => {
        document.querySelector('#toggleMenuItems').toggleAttribute('hidden');
    });
    document.querySelectorAll('.coll-nav-items li').forEach((item) => {
        item.addEventListener('click', () => {
        document.querySelector('#toggleMenuItems').toggleAttribute('hidden');
      })
    })
})