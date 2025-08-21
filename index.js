import{a as f,S as p,i}from"./assets/vendor-ChKhXQjG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="51902075-56e09341b6a8d3328bcbea73a",h="https://pixabay.com/api/";function g(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:o}).then(e=>e.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>`).join("");u.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){u.innerHTML=""}function w(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async s=>{s.preventDefault();const o=l.elements["search-text"].value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}L(),w(),s.target.reset(),g(o).then(e=>{if(c(),!e.hits.length){i.info({title:"No results",message:"Sorry, no images match your search. Please try again!",position:"topRight"});return}b(e.hits)}).catch(e=>{c(),i.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
