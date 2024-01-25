const key = "W_INMxItvk3N0Pv90HHeIe1mdpcBRwQVbaYeOhWHGLY";

const formEl = document.querySelector("form");
const inputEl = document.querySelector("#search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector("#show-more-button");

let inputdata = "";
let page = 1

async function searchImages(event) {
    console.log("userInput=",inputEl.value);
    event.preventDefault()

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputEl.value}&client_id=${key}`

    const response= await fetch(url);
    const data = await response.json()
console.log(data);
    const results = data.results
    console.log(results);

    if(page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) =>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)
    })
    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
    // const btn = document.createElement("button");
    // btn.innerText = "Show More"
    // searchResults.appendChild(btn);
    // btn.addEventListener("click", (e)=>showMorefunc(e))
    }

    showMore.addEventListener("click", ()=>{
        searchImages();
    })

    // function showMorefunc(e){
    //     e.preventDefault();
    //     page++;
    //     console.log(page);
    //     searchImages();
    
