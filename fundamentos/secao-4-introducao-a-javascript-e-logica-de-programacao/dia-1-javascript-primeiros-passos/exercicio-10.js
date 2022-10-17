const custoProduto = 50;
const valorVenda = 100;

let valorCustoTotal = custoProduto * 1.2;
let lucro = valorVenda - valorCustoTotal;

if (custoProduto > 0 && valorVenda > 0) {
     console.log("R$" + lucro);
}
else {
    console.log("ERRO! VALORES INVÁLIDOS!");
}

  