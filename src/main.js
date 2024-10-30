
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const gallery = document.querySelector(".galleri-list")
let search = null;
const API_KEY = "46809908-9f97c0ef37b027eaa1f813844";



form.addEventListener("submit", (event) => {
    event.preventDefault()
    search = input.value
    searchImage(search)
    form.reset()
});



function searchImage(q) {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${q}`)
        .then(response => {
            if (!response.ok) {
            throw new Error("error")
            }
            return response.json()
        })
        .then(data => {
            gallery.innerHTML = createGallery(data.hits)
        })
        .catch(error => console.log(error))
        }


function createGallery(arr) {
    return arr.map(item => 
        `
            <li class="gallery-item">
            <img class="galerry-img" src="${item.webformatURL}" alt="${item.tags}" width="300"/>
            <p class="gallery-txt">Likes <span>${item.likes}</span></p>
            <p>Views<span>${item.views}</span></p>
            <p>Comments<span>${item.comments}</span></p>
            <p>Downloads<span>${item.downloads}</span></p>
            </li>
        `
    ).join("")
}



