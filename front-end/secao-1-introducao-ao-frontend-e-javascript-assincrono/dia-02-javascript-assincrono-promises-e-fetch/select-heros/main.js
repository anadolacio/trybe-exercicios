import Swal from 'sweetalert2';

const img = document.querySelector('#img');
const h3 = document.querySelector('#name');
const btn = document.querySelector('button');

const randomId = () => Math.floor(Math.random() * 900);



btn.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  const urlAPI = `https://www.superheroapi.com/api.php/10228386477785125/${id}`;

  fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => {
    const { image, name } = data;
    img.src = image.url;
    h3.innerHTML = name;
  })
  .catch((error) => Swal.fire({
    title: 'Hero not found',
    text: error.message,
    icon: 'error',
    confirmButtonText: 'Cool',
  }));
});