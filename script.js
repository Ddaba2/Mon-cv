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
  const element = document.getElementById('download'); // Assurez-vous que l'ID correspond à celui de l'élément que vous souhaitez convertir
  const options = {
    margin: 1,
    filename: 'CV_Daba_DIALLO.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save();
}
