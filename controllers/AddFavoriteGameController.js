class AddFavoriteGameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindPostFavoriteGame(this.handlePostFavoriteGame);
    this.model.bindWithPostSuccess(this.view.showSuccessModal.bind(this.view));
  }

  handlePostFavoriteGame = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);

    this.model.postFavoriteGame(formData);
  };
}
