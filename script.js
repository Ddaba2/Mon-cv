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
//Téléchargement
function download() {
  const element = document.querySelector("download"); // ou document.getElementById("cv");

  const options = {
    margin: 0.5,
    filename: 'Daba DIALLO CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save();
}
