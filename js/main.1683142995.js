const divTapas = document.querySelector('#tapas > div.row');
const divBocadillos = document.querySelector('#bocadillos > div.row');
const divTorradas = document.querySelector('#torradas > div.row');

tapas.forEach(tapa => divTapas.innerHTML += card(tapa));
bocadillos.forEach(bocadillo => divBocadillos.innerHTML += card(bocadillo));
torradas.forEach(torrada => divTorradas.innerHTML += card(torrada));

document.querySelector("#scroll-up").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

function card(food) {
    return `
        <div class="col-md-6 col-lg-4 col-12 mb-4">
            <div class="card shadow-sm">
                <img src="${food.image}" class="card-img-top" style="height: 275px;">
                <div class="card-body">
                    <h5 class="card-title">${food.name}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge rounded-pill text-bg-danger fs-7">${food.price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}