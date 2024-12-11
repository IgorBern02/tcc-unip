const userPhoto = document.getElementById("userPhoto");
const userPhotos = [
  `https://randomuser.me/api/portraits/men/${getRandomNumber(1, 100)}.jpg`,
  `https://randomuser.me/api/portraits/women/${getRandomNumber(1, 100)}.jpg`,
];

// Função das fotos aleatorias
function getRandomPhoto() {
  const randomIndex = Math.floor(Math.random() * userPhotos.length);
  return userPhotos[randomIndex];
}

//Mudar o url das fotos aleatorias
userPhoto.style.backgroundImage = `url(${getRandomPhoto()})`;

const nameAccountElement = document.getElementById("nameAccount");
const buttonEdit = document.getElementById("buttonEdit");

// Editar Nome
buttonEdit.addEventListener("click", () => {
  const newName = prompt("Digite o novo nome da conta:");

  if (newName) {
    nameAccountElement.textContent = newName;
  }
});

// Gerar numeros aleatorios para esses itens
const seguidoresElement = document.getElementById("seguidores");
const seguindoElement = document.getElementById("seguindo");
const curtidasElement = document.getElementById("curtidas");
const adsenseElement = document.getElementById("adsense");
const amigosElement = document.getElementById("amigos");
const nomeDaContaElement = document.getElementById("nameAccount");

// Gerar nomes aleatorios
function getRandomName() {
  const names = [
    "igucavalao",
    "johnny",
    "lukinas",
    "leandraoDoPalmeiras",
    "alekDoZoio",
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

//Numeros aleatorios
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Atualizar os dados
function updateAccountData() {
  const randomName = getRandomName();
  const randomFollowers = getRandomNumber(0, 10000);
  const randomFollowing = getRandomNumber(0, 5000);
  const randomLikes = getRandomNumber(0, 30000);
  const randomAdsense = getRandomNumber(0, 500);
  const randomAmigos = getRandomNumber(0, 100);

  nomeDaContaElement.textContent = `@${randomName}`;
  seguidoresElement.textContent = randomFollowers;
  seguindoElement.textContent = randomFollowing;
  curtidasElement.textContent = randomLikes;
  adsenseElement.textContent = "US$" + " " + randomAdsense;
  amigosElement.textContent = randomAmigos;
}

// Call the function on page load
updateAccountData();

const afterElement = document.querySelector(".after");

afterElement.addEventListener("click", () => {
  userPhotos.src = getRandomPhoto();
});
