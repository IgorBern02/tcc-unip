const periodSelect = document.getElementById("periodSelect");
const contentSection = document.getElementById("contentSection");
const periodTitle = document.getElementById("periodTitle");
const likes = document.getElementById("likes");
const views = document.getElementById("views");
const followers = document.getElementById("followers");

periodSelect.addEventListener("change", () => {
  const selectedPeriod = periodSelect.value;

  switch (selectedPeriod) {
    case "Periodo":
      periodTitle.textContent = "Dia/Mês/Ano";
      likes.textContent = "---";
      views.textContent = "---";
      followers.textContent = "---";
      break;
    case "7Dias":
      periodTitle.textContent = "7 Dias";
      likes.textContent = "440";
      views.textContent = "3200";
      followers.textContent = "670";
      break;
    case "30Dias":
      periodTitle.textContent = "30 Dias";
      likes.textContent = "1430";
      views.textContent = "9877";
      followers.textContent = "1230";
      break;
    case "6Meses":
      periodTitle.textContent = "6 Meses";
      likes.textContent = "5400";
      views.textContent = "46800";
      followers.textContent = "10300";
      break;
    case "1Ano":
      periodTitle.textContent = "1 Ano";
      likes.textContent = "22300";
      views.textContent = "150600";
      followers.textContent = "54000";
      break;
    default:
  }
});
