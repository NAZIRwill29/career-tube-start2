const player = document.querySelector(".player");

const init = async () => {
  //get the url after the ? in url
  const urlParams = new URLSearchParams(window.location.search);
  //get the id from url
  const id = urlParams.get("id");
  //get video refer on id
  const video = await App.getOneVideo(id);

  //add thhe video div
  App.addVideoToPlayer(video, player);
};

init();
