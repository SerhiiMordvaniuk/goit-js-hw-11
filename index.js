(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const c=document.querySelector(".form"),a=document.querySelector(".input"),u=document.querySelector(".galleri-list");let i=null;const p="46809908-9f97c0ef37b027eaa1f813844";c.addEventListener("submit",o=>{o.preventDefault(),i=a.value,f(i),c.reset()});function f(o){fetch(`https://pixabay.com/api/?key=${p}&q=${o}`).then(e=>{if(!e.ok)throw new Error("error");return e.json()}).then(e=>{u.innerHTML=d(e.hits)}).catch(e=>console.log(e))}function d(o){return o.map(e=>`
            <li class="gallery-item">
            <img class="galerry-img" src="${e.webformatURL}" alt="${e.tags}" width="300"/>
            <p class="gallery-txt">Likes <span>${e.likes}</span></p>
            <p>Views<span>${e.views}</span></p>
            <p>Comments<span>${e.comments}</span></p>
            <p>Downloads<span>${e.downloads}</span></p>
            </li>
        `).join("")}
//# sourceMappingURL=index.js.map
