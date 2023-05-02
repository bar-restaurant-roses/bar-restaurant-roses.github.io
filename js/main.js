const divTapas = document.querySelector('#tapas');
const divBocadillos = document.querySelector('#bocadillos');
const divTorradas = document.querySelector('#torradas');

tapas.forEach(tapa => {
    divTapas.innerHTML += card(tapa);
});

document.querySelector("#scroll-up").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

function card(food) {
    return `
        <div class="col mb-4">
            <div class="card shadow-sm">
                <img src="${food.image}" class="card-img-top" alt="...">
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