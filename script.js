//Bouton pour changer la couleur de la page
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
  const element = document.getElementById('download');
  const opt = {
    margin: 0,
    filename: 'CV_Daba_DIALLO.pdf',
    image: { type: 'png', quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    }
  };

  html2pdf().set(opt).from(element).save();
}