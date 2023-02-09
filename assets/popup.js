const modal = document.querySelector('.pop-modal');
const innerModal = document.querySelector('.pop-inner-modal');
const cancelModal = document.querySelector('.cancel');

const cards = [
  {
    id: 0,
    name: 'Tonic',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopFeaturedImage: './img/tonic-2.png',
    technologies: [
      'html',
      'css',
      'javascript',
      'github',
      'Ruby on rails',
      'Bootstraps',
    ],
    stack: ['CANOPY', 'Back End Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
    linkToLiveVersion: 'https://fahim-86.github.io/portfolio-website/',
    linkToSource: 'https://github.com/fahim-86/portfolio-website',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    desktopDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    desktopFeaturedImage: './img/mp-stories2.png',
    technologies: [
      'html',
      'css',
      'javascript',
      'github',
      'Ruby on rails',
      'Bootstraps',
    ],
    stack: ['FACEBOOK', 'Full Stack Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
    linkToLiveVersion: 'https://fahim-86.github.io/portfolio-website/',
    linkToSource: 'https://github.com/fahim-86/portfolio-website',
  },
  {
    id: 2,
    name: 'Facebook 360',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    desktopDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    desktopFeaturedImage: './img/tonic.png',
    technologies: [
      'html',
      'css',
      'javascript',
      'github',
      'Ruby on rails',
      'Bootstraps',
    ],
    stack: ['FACEBOOK', 'Full Stack Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
    linkToLiveVersion: 'https://fahim-86.github.io/portfolio-website/',
    linkToSource: 'https://github.com/fahim-86/portfolio-website',
  },
  {
    id: 3,
    name: 'Uber Navigation',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    desktopDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    desktopFeaturedImage: './img/mp-stories.png',
    technologies: [
      'html',
      'css',
      'javascript',
      'github',
      'Ruby on rails',
      'Bootstraps',
    ],
    stack: ['Uber', 'Lead Developer', 2018],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
    linkToLiveVersion: 'https://fahim-86.github.io/portfolio-website/',
    linkToSource: 'https://github.com/fahim-86/portfolio-website',
  },
];

const loadWorks = (data, btnID) => {
  let display = ' ';
  if (btnID === 'loadModal') {
    display += `<div class="card-text">
      <h2>${data[0].name}</h2>
      <div class="under-header-text">
        <h4>${data[0].mobileStack[0]}</h4>
        <ul>
          <li>${data[0].mobileStack[1]}</li>
          <li>${data[0].mobileStack[2]}</li>
        </ul>
      </div>
      <img class="pop-img" src="${data[0].desktopFeaturedImage}" alt="Multi-post Stories" />
      <div class="pop-txt-btn">
        <p>${data[0].desktopDescription}</p>
        <ul class="buttons">
          <li class="btn">${data[0].technologies[0]}</li>
          <li class="btn">${data[0].technologies[1]}</li>
          <li class="btn">${data[0].technologies[2]}</li>
          <li class="btn">${data[0].technologies[3]}</li>
          <li class="btn">${data[0].technologies[4]}</li>
          <li class="btn">${data[0].technologies[5]}</li>
          <div class="pop-lrg-btn"><a href="${data[0].linkToLiveVersion}" class="btn-large" target="_blank">See Live<img class="" src="./img/live-btn-Icon.png" alt="Icon btn live" /></a><a href="${data[0].linkToSource}" class="btn-large" target="_blank">See Source<img class="" src="./img/source-btn-icon.png" alt="Icon source btn" /></a></div>
        </ul>
      </div>
    </div>`;
  } else if (btnID === 'loadModal2') {
    display += `<div class="card-text">
      <h2>${data[1].name}</h2>
      <div class="under-header-text">
        <h4>${data[1].mobileStack[0]}</h4>
        <ul>
          <li>${data[1].mobileStack[1]}</li>
          <li>${data[1].mobileStack[2]}</li>
        </ul>
      </div>
      <img class="pop-img" src="${data[1].desktopFeaturedImage}" alt="Multi-post Stories" />
      <div class="pop-txt-btn">
        <p>${data[1].desktopDescription}</p>
        <ul class="buttons">
          <li class="btn">${data[1].technologies[0]}</li>
          <li class="btn">${data[1].technologies[1]}</li>
          <li class="btn">${data[1].technologies[2]}</li>
          <li class="btn">${data[1].technologies[3]}</li>
          <li class="btn">${data[1].technologies[4]}</li>
          <li class="btn">${data[1].technologies[5]}</li>
          <div class="pop-lrg-btn"><a href="${data[1].linkToLiveVersion}" class="btn-large" target="_blank">See Live<img class="" src="./img/live-btn-Icon.png" alt="Icon btn live" /></a><a href="${data[1].linkToSource}" class="btn-large" target="_blank">See Source<img class="" src="./img/source-btn-icon.png" alt="Icon source btn" /></a></div>
        </ul>
      </div>
    </div>`;
  } else if (btnID === 'loadModal3') {
    display += `<div class="card-text">
      <h2>${data[2].name}</h2>
      <div class="under-header-text">
        <h4>${data[2].mobileStack[0]}</h4>
        <ul>
          <li>${data[2].mobileStack[1]}</li>
          <li>${data[2].mobileStack[2]}</li>
        </ul>
      </div>
      <img class="pop-img" src="${data[2].desktopFeaturedImage}" alt="Multi-post Stories" />
      <div class="pop-txt-btn">
        <p>${data[2].desktopDescription}</p>
        <ul class="buttons">
          <li class="btn">${data[2].technologies[0]}</li>
          <li class="btn">${data[2].technologies[1]}</li>
          <li class="btn">${data[2].technologies[2]}</li>
          <li class="btn">${data[2].technologies[3]}</li>
          <li class="btn">${data[2].technologies[4]}</li>
          <li class="btn">${data[2].technologies[5]}</li>
          <div class="pop-lrg-btn"><a href="${data[2].linkToLiveVersion}" class="btn-large" target="_blank">See Live<img class="" src="./img/live-btn-Icon.png" alt="Icon btn live" /></a><a href="${data[2].linkToSource}" class="btn-large" target="_blank">See Source<img class="" src="./img/source-btn-icon.png" alt="Icon source btn" /></a></div>
        </ul>
      </div>
    </div>`;
  } else if (btnID === 'loadModal4') {
    display += `<div class="card-text">
      <h2>${data[3].name}</h2>
      <div class="under-header-text">
        <h4>${data[3].mobileStack[0]}</h4>
        <ul>
          <li>${data[3].mobileStack[1]}</li>
          <li>${data[3].mobileStack[2]}</li>
        </ul>
      </div>
      <img class="pop-img" src="${data[3].desktopFeaturedImage}" alt="Multi-post Stories" />
      <div class="pop-txt-btn">
        <p>${data[3].desktopDescription}</p>
        <ul class="buttons">
          <li class="btn">${data[3].technologies[0]}</li>
          <li class="btn">${data[3].technologies[1]}</li>
          <li class="btn">${data[3].technologies[2]}</li>
          <li class="btn">${data[3].technologies[3]}</li>
          <li class="btn">${data[3].technologies[4]}</li>
          <li class="btn">${data[3].technologies[5]}</li>
          <div class="pop-lrg-btn"><a href="${data[3].linkToLiveVersion}" class="btn-large" target="_blank">See Live<img class="" src="./img/live-btn-Icon.png" alt="Icon btn live" /></a><a href="${data[3].linkToSource}" class="btn-large" target="_blank">See Source<img class="" src="./img/source-btn-icon.png" alt="Icon source btn" /></a></div>
        </ul>
      </div>
    </div>`;
  }
  innerModal.innerHTML = display;
};

cancelModal.addEventListener('click', () => {
  modal.classList.remove('showModal');
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#loadModal').addEventListener('click', (e) => {
    // console.log(e.target.id);
    const btnID = e.target.id;
    modal.classList.add('showModal');
    loadWorks(cards, btnID);
  });
  document.querySelector('#loadModal2').addEventListener('click', (e) => {
    const btnID = e.target.id;
    modal.classList.add('showModal');
    loadWorks(cards, btnID);
  });
  document.querySelector('#loadModal3').addEventListener('click', (e) => {
    const btnID = e.target.id;
    modal.classList.add('showModal');
    loadWorks(cards, btnID);
  });
  document.querySelector('#loadModal4').addEventListener('click', (e) => {
    const btnID = e.target.id;
    modal.classList.add('showModal');
    loadWorks(cards, btnID);
  });
});