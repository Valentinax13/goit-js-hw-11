/* empty css                      */import{S as y,i}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function f(n){const o=`https://pixabay.com/api/?key=47111557-92c37ade8bb97610ca7074a51&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`,r=await fetch(o);if(!r.ok)throw new Error("Failed to fetch images");return(await r.json()).hits}const m=new y(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function p(n){const s=document.querySelector(".gallery"),o=n.map(r=>`
    <div class="gallery-item">
      <a href="${r.largeImageURL}" data-caption="${r.tags}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" class="gallery-image" />
      </a>
      <div class="image-info">
        <p><strong>Likes:</strong> ${r.likes}</p>
        <p><strong>Views:</strong> ${r.views}</p>
        <p><strong>Comments:</strong> ${r.comments}</p>
        <p><strong>Downloads:</strong> ${r.downloads}</p>
      </div>
    </div>
  `).join("");s.innerHTML=o,m.refresh()}function g(){const n=document.querySelector(".gallery");n.innerHTML=""}const l=document.querySelector(".search-form"),d=document.querySelector(".loader-container"),u=document.querySelector(".loader");l.addEventListener("submit",async n=>{n.preventDefault();const s=l.elements.query.value.trim();if(!s){i.error({title:"Error",message:"Please enter a search query"});return}g(),h();try{const o=await f(s);if(c(),o.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(o)}catch(o){c(),i.error({title:"Error",message:o.message})}});function h(){u.style.display="block",d.style.display="flex"}function c(){u.style.display="none",d.style.display="none"}
//# sourceMappingURL=index.js.map
