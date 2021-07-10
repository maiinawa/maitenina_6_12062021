const datas = require('./data/data.json');

const HomeScreen = {
    render: () => {
        const {photographers} = datas
        return photographers.map((item) =>
            `<article class="photographer__card">
                <a href="./src/pages/profilepage.html">
                <div class="photographer__id">
                    <img src="/src/medias/Photographers_ID_Photos/${item.portrait}">
                    <h2>${item.name}</h2>
                </div>
                <div class="photographer__detail">
                    <h3>${item.city}, ${item.country}</h3>
                    <p>${item.tagline}</p>
                    <p>${item.price}€/jour</p>
                </div>
                </a>
                <div class="photographer__tags container__tags">
                </div>
            </article>`).join('')
    }
}
export default HomeScreen