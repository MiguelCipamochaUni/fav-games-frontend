class AddFavoriteGameView {
  constructor() {
    this.form = document.getElementById("addGameForm");
  }

  bindPostFavoriteGame(handler) {
    this.form.addEventListener("submit", handler);
  }

  showSuccessModal() {
    const successModal = new bootstrap.Modal(
      document.getElementById("successModal")
    );
    successModal.show();
  }
}
