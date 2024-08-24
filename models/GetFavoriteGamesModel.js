const getFavGamesUrl =
  "http://app-a959b2a3-0619-40ff-8d61-13c714ac5c6e.cleverapps.io/get_favorite_games";

class GetFavoriteGamesModel {
  constructor() {
    this.favoriteGames = [];
  }

  getFavGames() {
    fetch(getFavGamesUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.fillFavoriteGames(data);
        this.notify();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  fillFavoriteGames(data) {
    data.forEach((favGame) => {
      this.favoriteGames.push(favGame);
    });
  }

  bindWithFavGamesData(callback) {
    this.displayFavGames = callback;
  }

  notify() {
    this.displayFavGames(this.favoriteGames);
  }
}
