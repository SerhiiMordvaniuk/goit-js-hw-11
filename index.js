(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const i=document.querySelector(".form"),l=document.querySelector(".input"),u=document.querySelector(".galleri-list");let c=null;const d="46809908-9f97c0ef37b027eaa1f813844";i.addEventListener("submit",r=>{r.preventDefault(),c=l.value,p(c),i.reset()});function p(r){fetch(`https://pixabay.com/api/?key=${d}&q=${r}`).then(e=>{if(!e.ok)throw new Error("error");return e.json()}).then(e=>{u.innerHTML=f(e.hits)}).catch(e=>console.log(e))}function f(r){return r.map(e=>`
            <li class="gallery-item">
                <img class="galerry-img" src="${e.webformatURL}" alt="${e.tags}" width="360"/>
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
        `).join("")}
//# sourceMappingURL=index.js.map
