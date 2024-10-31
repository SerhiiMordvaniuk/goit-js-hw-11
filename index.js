import{i as c}from"./assets/vendor-17o45ynk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const a=document.querySelector(".form"),u=document.querySelector(".input"),p=document.querySelector(".galleri-list");let i=null;const d="46809908-9f97c0ef37b027eaa1f813844",m=document.querySelector(".loader");a.addEventListener("submit",s=>{s.preventDefault(),i=u.value,i.trim()===""?c.error({message:"Enter your query",position:"topCenter",color:"#ca0000",messageColor:"white",close:!1,timeout:1e3,progressBar:!1,iconColor:"white",con:!1}):f(i),a.reset()});function f(s){fetch(`https://pixabay.com/api/?key=${d}&q=${s}`).then(e=>{if(m.classList.add("show"),!e.ok)throw new Error("error");return e.json()}).then(e=>{e.hits.length==0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"#ca0000",messageColor:"white",close:!0,timeout:2e3,progressBar:!0,iconColor:"white",icon:!1,maxWidth:"300"}),p.innerHTML=g(e.hits)}).catch(e=>console.log(e))}function g(s){return s.map(e=>`
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
