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

const form = document.querySelector('form');
const alertMsg = document.querySelector('small');
form.addEventListener('submit', (event) => {
  const email = document.querySelector('.email-input-fld');
  const emailRegExp = /[A-Z]/;
  if (!emailRegExp.test(email.value)) {
    form.submit();
  } else {
    event.preventDefault();
    alertMsg.innerText = '* Please Enter Your Email Only In Lower Case';
  }
});

// data preservation inside the browser

const dataTotal = {};
document.addEventListener('keyup', () => {
  dataTotal.name = document.querySelector('.fname-input-fld').value;
  dataTotal.email = document.querySelector('.email-input-fld').value;
  dataTotal.text = document.querySelector('.text-input-fld').value;
  const allData = JSON.stringify(dataTotal);
  localStorage.setItem('dataTotal', allData);
});

const storeItem = () => {
  const parsedData = JSON.parse(localStorage.getItem('dataTotal'));
  const fname = document.querySelector('.fname-input-fld');
  const email = document.querySelector('.email-input-fld');
  const text = document.querySelector('.text-input-fld');
  if (sessionStorage.getItem('parsedData.name' === '')) { return; }
  fname.value = parsedData.name;
  email.value = parsedData.email;
  text.value = parsedData.text;
};

window.onload = storeItem;