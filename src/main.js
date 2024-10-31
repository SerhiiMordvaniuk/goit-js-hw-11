"use strict"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const form = document.querySelector(".form");
const input = document.querySelector(".input");
const gallery = document.querySelector(".galleri-list")
let search = null;
const API_KEY = "46809908-9f97c0ef37b027eaa1f813844";
const loader = document.querySelector('.loader'); 

form.addEventListener("submit", (event) => {
    event.preventDefault()
    search = input.value
    if (search.trim() === "") {
        iziToast.error({
                message: 'Enter your query',
                position: 'topCenter',
                color: '#ca0000',
                messageColor: "white",
                close: false,
                timeout: 1000,
                progressBar: false,
                iconColor: "white",
                con: false,
            });

    }
    else {
        searchImage(search)
    }
    form.reset()
});



function searchImage(q) {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${q}`)
        .then(response => {
            loader.classList.add('show');

            if (!response.ok) {
            throw new Error("error")
            }
            return response.json()
        })
        .then(data => {
            if (data.hits.length == 0) {
                iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'center',
                color: '#ca0000',
                messageColor: "white",
                close: true,
                timeout: 2000,
                progressBar: true,
                iconColor: "white",
                icon: false,
                maxWidth: "300"
            });
            }
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



