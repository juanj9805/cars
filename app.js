const containerPopularCars = document.querySelector("#containerPopularCars");
const containerRecomendationCars = document.querySelector(
  "#containerRecomendationCars",
);

const cars = [
  {
    car: "ssan12",
    model: 9,
    img: "as",
  },
  {
    car: "nissan12",
    model: 94,
    img: "as",
  },
  {
    car: "nissan2",
    model: 94,
    img: "as",
  },
  {
    car: "nissan1",
    model: 94,
    img: "as",
  },
];

const createCards = function (arr) {
  arr.forEach((car, i) => {
    const html = `
            <div class="col-3">
          <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
              <h3>${car.car} ${i}</h3>
              <i class="bi bi-heart-fill text-danger"></i>
            </div>
            <span>sport</span>
            <img class="img-fluid my-5" src="assets/image 7.png" alt="" />
            <p class="d-flex justify-content-evenly">
              <i class="bi bi-fuel-pump"></i> 90L<i class="bi bi-book"></i>
              Manual<i class="bi bi-person"></i>
              2 people
            </p>
            <div class="d-flex align-items-center">
              <div class="col">
                <p><b>$ 72.00/</b>day</p>
                <span>$86.00</span>
              </div>
              <div class="col">
                <button class="btn btn-primary">Rent now</button>
              </div>
            </div>
          </div>
        </div>`;

    containerPopularCars.insertAdjacentHTML("afterbegin", html);
  });
};

window.addEventListener("DOMContentLoaded", createCards(cars));
