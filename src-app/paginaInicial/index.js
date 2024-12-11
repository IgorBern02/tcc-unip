const tabs = document.querySelectorAll(".nav input");
const tabContent = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = tab.dataset.tab;
    // Remover a classe 'active' de todas as abas
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    // Adicionar a classe 'active' à aba clicada
    document.getElementById(targetId).classList.add("active");
  });
});

const navItems = document.querySelectorAll(".nav li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove the 'active' class from all nav items
    navItems.forEach((item) => item.classList.remove("active"));

    // Add the 'active' class to the clicked
    item;
    item.classList.add("active");
  });
});

const videoContainers = document.querySelectorAll(".video-container");

function getRandomImageUrl() {
  // Generate a random image number between 1 and 1000 (inclusive)
  const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
  return `https://picsum.photos/300/150/?image=${randomImageNumber}`;
}

videoContainers.forEach((videoContainer, index) => {
  // Generate a unique image URL for each video container
  const imageUrl = getRandomImageUrl();
  videoContainer.src = imageUrl;
});

const links = document.querySelectorAll("#tab2 ul li button a ");
const contentDiv = document.getElementById("contentDiv");
const serverList = document.getElementById("servidores");
const serverH1 = document.getElementById("servidoresh1");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const href = link.getAttribute("href");

    // Hide the server list
    serverList.style.display = "none";
    serverH1.style.display = "none";

    // Fetch the content of the target page using Fetch API
    fetch(href)
      .then((response) => response.text())
      .then((html) => {
        contentDiv.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        // Handle errors, e.g., display an error message
      });
  });
});
