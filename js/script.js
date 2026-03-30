// 1. Select DOM elements
const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

// 2. Your Giphy API Key
const myKey = "mIsfeDvpmNbAsYkTfCo4dLEtBlrgztAC";

// 3. The Asynchronous Function to fetch data
async function fetchGifs() {
    // Get the value from the search bar
    const searchTerm = searchInput.value;

    // Safety check: Don't fetch if the input is empty
    if (!searchTerm) {
        alert("Please enter a search term first!");
        return;
    }

    // Build the API URL (Template Literal)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${searchTerm}&limit=12`;

    try {
        // Fetch the data
        const response = await fetch(url);
        
        // Parse the response into JSON
        const result = await response.json();

        // Clear the container before showing new results
        gifContainer.innerHTML = "";

        // Loop through the array of gif objects (result.data)
        result.data.forEach(gif => {
            // Get the fixed_height URL for a consistent grid look
            const imgUrl = gif.images.fixed_height.url;

            // Create the HTML string for each image using Bootstrap columns
            const gifHTML = `
                <div class="col-md-3 mb-4">
                    <img src="${imgUrl}" class="img-fluid rounded shadow-sm" style="width: 100%; height: 200px; object-fit: cover;">
                </div>
            `;

            // Add the new image to the container
            gifContainer.innerHTML += gifHTML;
        });
        
    } catch (error) {
        console.error("Error fetching data from Giphy:", error);
    }
}

// 4. Attach Event Listener to the Button
fetchBtn.addEventListener("click", fetchGifs);
