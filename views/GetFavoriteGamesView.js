class GetFavoriteGamesView {
  constructor() {
    this.cardsColumn = document.getElementById("card-row");
    this.apiUrl =
      "http://app-a959b2a3-0619-40ff-8d61-13c714ac5c6e.cleverapps.io/";
  }

  displayFavGames(favGames) {
    this.cardsColumn.innerHTML = this.createFavGameCard(favGames);
  }

  createFavGameCard(favGames) {
    let cardsHTML = "";
    favGames.forEach((favGames) => {
      cardsHTML += `<div class="col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card h-100 d-flex flex-column align-items-center justify-content-center text-center">
            <img src="${this.apiUrl}${favGames.image_url}" class="rounded card-img-top img-thumbnail img-fluid" style="max-width: 300px; max-height: 400px; object-fit: cover;" alt="...">
            <div class="card-body">
                <h5 class="card-title">${favGames.name}</h5>
                <p class="card-text"><b>Fecha de lanzamiento:</b> ${favGames.launch_date}</p>
                <p class="card-text"><b>Razon:</b> ${favGames.reason}</p>
            </div>
        </div>
    </div>`;
    });
    return cardsHTML;
  }
}
