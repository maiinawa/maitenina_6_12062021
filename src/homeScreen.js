const datas = require('./data/data.json');
console.log(datas)
const HomeScreen = {
    render: () => {
        const {photographers} = datas
        const tags = (tags)=>{
            return`${tags.map((item)=>{return `<a class="tags" href="index.html"><span>${item}</span></a>`}).join('')}`
        }
        
        return photographers.map((item) =>
            `<article class="photographer__card">
                <a class="profile__link" href="./profile.html?profile_id=${item.id}">
                <div class="photographer__id">
                    <img src='./medias/photographers_id_photos/${item.portrait}'>
                    <h2>${item.name}</h2>
                </div>
                <div class="photographer__detail">
                    <h3>${item.city}, ${item.country}</h3>
                    <p>${item.tagline}</p>
                    <p>${item.price}€/jour</p>
                </div>
                </a>
                <div class="photographer__tags container__tags">
                    ${tags(item.tags)}
                </div>
            </article>`).join('')

    }
}

// const tags = (tags)=>{
//     return`${tags.map((item)=>{return `<a class="tags" href="index.html"><span>${item}</span></a>`}).join('')}`
// }
export default HomeScreen