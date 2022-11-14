import Swal from 'sweetalert2';

const button = document.querySelector('button');
const input = document.querySelector('#coin');
const allCoins = document.querySelector('.all-coins');
const title = document.querySelector('.coins-title');


function findCoin(money) {
    allCoins.innerHTML = '';
    // const money = input.value.toUpperCase();
    title.textContent = `Valores referentes a 1 ${money}:`; 

    const urlAPI =`https://api.exchangerate.host/latest?base=${money}`;
    fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => {

    if (data.base !== money) {
        throw new Error('Moeda não existente!');
    }
   
        const moneyArray = Object.entries(data.rates);
        moneyArray.forEach((element) => {
            const list = document.createElement('li');
            const [coinName, value ] = element;
            list.innerText = `${coinName} - `;

            const span = document.createElement('span');
            span.innerText = value;
            span.className = 'yellow';
            list.appendChild(span);

            allCoins.appendChild(list);
        })
    })
    .catch((error) => {
        title.textContent = ''; 
        Swal.fire({
            icon: "error",
            title: 'Opsss..',
            text: error.message
        })
    })
}

function finalSearch() {
    const money = input.value.toUpperCase();
    if(!money){
        return Swal.fire({
            icon: "error",
            title: 'Opsss..',
            text: 'Você precisa digitar uma moeda'
        })
    }

    return findCoin(money)
    
}


button.addEventListener('click', finalSearch);
