const adicionarPlaylistButton = document.getElementById("adicionarPlaylist");
const playlistContainer = document.querySelector("section");

adicionarPlaylistButton.addEventListener("click", () => {
  const newPlaylistCard = document.createElement("div");

  newPlaylistCard.classList.add(
    "w-full",
    "h-48",
    "bg-slate-100",
    "rounded-xl",
    "p-2",
    "gap-2",
    "flex",
    "flex-col",
    "shadow",
    "shadow-slate-200"
  );

  const playlistTitleAndImage = document.createElement("div");
  playlistTitleAndImage.classList.add(
    "h-3/4",
    "bg-slate-200",
    "flex",
    "flex-col",
    "items-center",
    "gap-2",
    "p-2",
    "justify-center",
    "rounded-xl"
  );

  const playlistTitleHeading = document.createElement("h1");
  playlistTitleHeading.textContent = "Nome da Playlist";
  playlistTitleHeading.classList.add(
    "font-mono",
    "text-black",
    "text-2xl",
    "italic",
    "text-center"
  );

  playlistTitleAndImage.appendChild(playlistTitleHeading);

  const playlistImageContainer = document.createElement("div");
  playlistImageContainer.classList.add(
    "w-2/4",
    "h-full",
    "rounded-xl",
    "overflow-hidden"
  );

  playlistTitleAndImage.appendChild(playlistImageContainer);

  function randomImage() {
    const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
    const playlistImage = document.createElement("img");
    playlistImage.src = `https://picsum.photos/300/150/?image=${randomImageNumber}`;
    playlistImage.alt = "Playlist Image";
    playlistImageContainer.appendChild(playlistImage);
  }

  randomImage();

  const playlistButtons = document.createElement("div");
  playlistButtons.classList.add(
    "w-full",
    "h-1/4",
    "flex",
    "items-center",
    "justify-around",
    "gap-2"
  );

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover";
  removeButton.classList.add(
    "w-2/4",
    "h-full",
    "rounded-lg",
    "bg-slate-200",
    "font-mono",
    "text-black",
    "text-lg",
    "italic",
    "removerPlaylist"
  );

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.classList.add(
    "w-2/4",
    "h-full",
    "rounded-lg",
    "bg-slate-200",
    "font-mono",
    "text-black",
    "text-lg",
    "italic",
    "editarPlaylist"
  );

  playlistButtons.appendChild(removeButton);
  playlistButtons.appendChild(editButton);

  newPlaylistCard.appendChild(playlistTitleAndImage);
  newPlaylistCard.appendChild(playlistButtons);

  playlistContainer.appendChild(newPlaylistCard);

  const editarPlaylistButtons = document.querySelectorAll(".editarPlaylist");
  editarPlaylistButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "editarPlaylist.html";
      editPlaylist(playlistData[0]);
    });
  });

  const excluirPlaylistButton = removeButton;
  excluirPlaylistButton.addEventListener("click", function () {
    const cardPlaylist = this.parentElement.parentElement;
    cardPlaylist.remove();
  });
});
