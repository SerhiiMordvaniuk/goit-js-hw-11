import{i as u,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function d(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=d(r);fetch(r.href,t)}})();function p(s){return s.map(e=>`
            <li class="gallery-item">
                <a href="${e.largeImageURL}">
                <img class="galerry-img" src="${e.webformatURL}" alt="${e.tags}" width="360"/>
                </a>
                <div class="galerry-txt">
                    <div class="item-txt">
                        <p>Likes</p>
                        <span class="item-span">${e.likes}</span>
                    </div>
                    <div class="item-txt">
                        <p>Views</p>
                        <span class="item-span">${e.views}</span>
                    </div>
                    <div class="item-txt">
                        <p>Comments</p>
                        <span class="item-span">${e.comments}</span>
                    </div>
                    <div class="item-txt">
                        <p>Downloads</p>
                        <span class="item-span">${e.downloads}</span>
                    </div>
                </div>
            </li>
        `).join("")}const f="46809908-9f97c0ef37b027eaa1f813844",l=document.querySelector(".loader"),n=document.querySelector(".gallery-list");function g(s){l.classList.remove("loader-unvisible"),n.innerHTML="",fetch(`https://pixabay.com/api/?key=${f}&q=${s}`).then(e=>{if(l.classList.add("loader-unvisible"),e.ok)return e.json();throw new Error("error")}).then(e=>{e.hits.length==0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"}),n.innerHTML=p(e.hits),new m(".gallery-item a",{disableScroll:!1,overlayOpacity:.9,disableRightClick:!0})}).catch(e=>console.log(e))}const c=document.querySelector(".form"),y=document.querySelector(".input");let i=null;c.addEventListener("submit",s=>{s.preventDefault(),i=y.value,i.trim()===""?u.error({message:"Enter your query",position:"center",color:"#ca0000",messageColor:"white",close:!1,timeout:1e3,progressBar:!1,iconColor:"white",con:!1}):g(i),c.reset()});
//# sourceMappingURL=index.js.map
