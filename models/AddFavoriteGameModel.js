class AddFavoriteGameModel {
  constructor() {}

  postFavoriteGame(data) {
    fetch(
      `http://app-a959b2a3-0619-40ff-8d61-13c714ac5c6e.cleverapps.io/post_favorite_game`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // O .json() si esperas un JSON
      })
      .then(() => {
        this.notifySuccess();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  bindWithPostSuccess(callback) {
    this.notifySuccess = callback;
  }
}
