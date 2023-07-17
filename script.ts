function calcolaVincitore(
  primoGiocatoreNumero: number,
  secondoGiocatoreNumero: number
) {
  if (
    primoGiocatoreNumero < 1 ||
    primoGiocatoreNumero > 100 ||
    secondoGiocatoreNumero < 1 ||
    secondoGiocatoreNumero > 100
  ) {
    alert("Uno o entrambi i numeri sono minori di 1 o maggiori di 100");
  } else {
    let numeroRandom: number = Math.floor(Math.random() * 100 + 1);
    console.log(numeroRandom);
    let primaDifferenza: number = Math.abs(numeroRandom - primoGiocatoreNumero);
    let secondaDifferenza: number = Math.abs(
      numeroRandom - secondoGiocatoreNumero
    );

    if (primaDifferenza === 0) {
      console.log("Giocatore 1 ha indovinato il numero random");
    } else if (secondaDifferenza === 0) {
      console.log("Giocatore 2 ha indovinato");
    } else if (primaDifferenza < secondaDifferenza) {
      console.log("Giocatore 1 è il più vicino al numero Random");
    } else console.log("Giocatore 2 è il più vicino al numero Random");
  }
}

calcolaVincitore(33, 70);
