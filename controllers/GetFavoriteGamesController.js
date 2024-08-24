class GetFavoriteGamesController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindWithFavGamesData(this.displayFavGames);
    this.model.getFavGames();
  }

  displayFavGames = (favGames) => {
    this.view.displayFavGames(favGames);
  };
}
