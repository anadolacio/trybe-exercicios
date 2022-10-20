let buttonClick = document.querySelector('button');
let count = 0;


buttonClick.addEventListener('click', () => {
    buttonClick.innerHTML = count += 1;
});