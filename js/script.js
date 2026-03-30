// Use this exact key - carefully check for no extra spaces!
const myKey = "mlsfeDvpmNbAsYkTfCo4dLEtBIrgztAC";

async function fetchGifs() {
    const searchTerm = document.querySelector("#search-input").value;
    // We'll use the 'trending' endpoint just as a test if search fails
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${searchTerm}&limit=12&rating=g`;

    try {
        const response = await fetch(url);
        
        if (response.status === 401) {
            alert("API Key is still pending activation. Wait 60 seconds and try again!");
            return;
        }

        const result = await response.json();
        const gifContainer = document.querySelector("#gif-container");
        gifContainer.innerHTML = "";

        result.data.forEach(gif => {
            const imgUrl = gif.images.fixed_height.url;
            gifContainer.innerHTML += `
                <div class="col-md-3 mb-3">
                    <img src="${imgUrl}" class="img-fluid rounded" style="height:200px; width:100%; object-fit:cover;">
                </div>`;
        });
    } catch (err) {
        console.error("Fetch failed:", err);
    }
}

document.querySelector("#fetch-gif-btn").addEventListener("click", fetchGifs);