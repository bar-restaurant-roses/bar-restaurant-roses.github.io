const divTapas = document.querySelector('#tapas');
tapas.forEach(tapa => {
    divTapas.innerHTML += `
        <div class="col mb-4">
            <div class="card shadow-sm">
                <img src="${tapa.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${tapa.name}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge rounded-pill text-bg-danger fs-7">${tapa.price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
});