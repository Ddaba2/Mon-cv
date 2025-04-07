const target = document.querySelector('.conte');
  let isColored = false; // État actuel : faux = blanc, vrai = bleu foncé

  document.getElementById("changeColor").addEventListener("click", function () {
    if (isColored) {
      target.style.backgroundColor = "#FFFFFF"; // Blanc
    } else {
      target.style.backgroundColor = "#130C67"; // Bleu foncé
    }
    isColored = !isColored; // On inverse l'état
  });

 
  