// STEP 8: Store elements in variables
const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input"); // Step 10

// STEP 4 & 5: API Key and Endpoint setup
const myKey = "mIsfeDvpmNbAsYkTfCo4dLEtBlrgztAC";

// STEP 8: Attach async event listener
fetchBtn.addEventListener("click", async function() {
    // STEP 10: Get text from input field
    const searchTerm = searchInput.value;
    
    // STEP 5 & 10: Use string interpolation for the URL
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${searchTerm}&limit=12`;

    // STEP 7: Utilize the fetch method
    const response = await fetch(endpoint);
    const result = await response.json();
    
    // STEP 7: Store the data in an array called images
    const images = result.data;
    
    // Preview data in console
    console.log(images);

    // STEP 8: Clear container and iterate through images array
    gifContainer.innerHTML = "";

    images.forEach(gif => {
        // Grab the original image URL as requested in Step 7
        const imageUrl = gif.images.original.url;
        
        // STEP 8: Use += and the specific class "col-3 mb-3"
        gifContainer.innerHTML += `<img src="${imageUrl}" class="col-3 mb-3" style="height:200px; object-fit:cover;">`;
    });
});
