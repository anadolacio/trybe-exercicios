const chessPiece = "bispo";

switch (chessPiece.toLowerCase()) {
  case "rei":
    console.log("Rei-> Uma casa apenas para qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo-> Diagonal.");
    break;
  case "rainha":
    console.log("Rainha-> todos os lados.");
    break;
  case "cavalo":
    console.log("Cavalo -> movimentos em formato de L.");
    break;
  case "peão":
    console.log('Torre -> Horizontal e vertical.');
    break;
  case "torre":
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log("ERRO! PEÇA INVÁLIDA");
    break;
};