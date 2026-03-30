const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

const myKey = "mIsfeDvpmNbAsYkTfCo4dLEtBlrgztAC";

fetchBtn.addEventListener("click", async () => {
    const searchTerm = searchInput.value;
    
    // Construir la URL con el término de búsqueda
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${searchTerm}&limit=12`;

    const response = await fetch(endpoint);
    const result = await response.json();
    
    // Limpiar lo que había antes
    gifContainer.innerHTML = "";

    // Dibujar los nuevos GIFs
    result.data.forEach(gif => {
        const url = gif.images.fixed_height.url;
        gifContainer.innerHTML += `
            <div class="col-3 mb-3">
                <img src="${url}" class="img-fluid rounded">
            </div>`;
    });
});