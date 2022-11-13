const dogBtn = document.querySelector('#getDog');
const catBtn = document.querySelector('#getCat');
const surpriseBtn = document.querySelector('#surprise');
const img = document.querySelector('#img');

const urlDog = 'https://dog.ceo/api/breeds/image/random';
const urlCat = 'https://aws.random.cat/meow';

function getDog() {
    return fetch(urlDog)
    .then((response) => response.json())
    .then((data) => img.src = data.message);
}

dogBtn.addEventListener('click', (event) => {
    event.preventDefault();
  return getDog();

});

function getCat() {
    return fetch(urlCat)
    .then((response) => response.json())
    .then((data) => img.src = data.file);
}

catBtn.addEventListener('click', (event) => {
    event.preventDefault();
    return getCat();
});

const randomAnimal = () => Math.floor(Math.random() * 10);

surpriseBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const animal = randomAnimal();
    console.log(animal);
    if (animal % 2 === 0) return getDog();
    return getCat();    
});