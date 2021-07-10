const regeneratorRuntime = require("regenerator-runtime");

(async function getDatas(){
    const medias =  await fetch('/data/data.json')
    .then(response => response.json())
    .then(json => json.media);

    const photographers = await fetch('/data/data.json')
    .then(response => response.json())
    .then(json => json.photographers);

    console.log(medias)
    console.log(photographers)




    const mainGrid = document.querySelector('.photographer__list');

    mainGrid.innerHTML=photographers.map(photographerTemplate).join('');



    function photographerTemplate(profile){
        return `<article class="photographer__card">
                    <a href="./profilepage.html">
                    <div class="photographer__id">
                        <img src="/medias/Photographers_ID_Photos/${profile.portrait}">
                        <h2>${profile.name}</h2>
                    </div>
                    <div class="photographer__detail">
                        <h3>${profile.city}, ${profile.country}</h3>
                        <p>${profile.tagline}</p>
                        <p>${profile.price}€/jour</p>
                    </div>
                    </a>
                    <div class="photographer__tags container__tags">
                        ${tags(profile.tags)}
                    </div>
                </article>`
    }

    function tags(tags){
        return`${tags.map((item)=>{return `<a class="tags" href="index.html"><span>${item}</span></a>`}).join('')}`
    }
     
    photographerTemplate(photographers);
})()


// emmener sur une autre page au clic
const handleClick = (e) => {
    alert("click")
    window.location = ('https://openclassrooms.com')
    console.log(window.location)
  }
document.getElementById("test").addEventListener('click',handleClick)

// export default function getDatas(){
//         const medias =  await fetch('/data/data.json')
//         .then(response => response.json())
//         .then(json => json.media);
    
//         const photographers = await fetch('/data/data.json')
//         .then(response => response.json())
//         .then(json => json.photographers);
    
//         console.log(medias)
//         console.log(photographers)
// }