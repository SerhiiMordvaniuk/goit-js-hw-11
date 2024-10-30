
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
                <img class="galerry-img" src="${item.webformatURL}" alt="${item.tags}" width="360"/>
                <div class="galerry-txt">
                    <div class="item-txt">
                        <p>Likes</p>
                        <span class="item-span">${item.likes}</span>
                    </div>
                    <div class="item-txt">
                        <p>Views</p>
                        <span class="item-span">${item.views}</span>
                    </div>
                    <div class="item-txt">
                        <p>Comments</p>
                        <span class="item-span">${item.comments}</span>
                    </div>
                    <div class="item-txt">
                        <p>Downloads</p>
                        <span class="item-span">${item.downloads}</span>
                    </div>
                </div>
            </li>
        `
    ).join("")
}



