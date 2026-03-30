console.log("Script is loaded and running!"); // This should show up in your console immediately

const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

const myKey = "mIsfeDvpmNbAsYkTfCo4dLEtBlrgztAC";

async function fetchGifs() {
    console.log("Button was clicked!"); // This should show up when you click
    const searchTerm = searchInput.value;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${searchTerm}&limit=12`;

    const response = await fetch(url);
    const result = await response.json();
    
    gifContainer.innerHTML = "";

    result.data.forEach(gif => {
        const imgUrl = gif.images.fixed_height.url;
        gifContainer.innerHTML += `
            <div class="col-md-3 mb-4">
                <img src="${imgUrl}" class="img-fluid rounded" style="width:100%; height:200px; object-fit:cover;">
            </div>`;
    });
}

fetchBtn.addEventListener("click", fetchGifs);