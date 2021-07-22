import  getParamValue from './params';
// import { main } from '.';

const datas = require('./data/data.json');
const ProfileScreen = {
    render : () => {
        // const profileWrap = document.createElement('div')
        // main.appendChild(profileWrap)
        const {photographers} = datas;

        const theID = getParamValue('profile_id')
        const profileWanted = photographers.filter(photographer => photographer.id == theID)
        console.log(profileWanted)
        const tags = (tags)=>{
            return`${tags.map((item)=>{return `<a class="tags" href="index.html"><span>${item}</span></a>`}).join('')}`
        }


        return profileWanted.map((item) =>
                    `<article class="profile-page__id__container">
                        <div class="profile-page__id">
                            <img src="./medias/photographers_id_photos/${item.portrait}">
                            <div class="text-content">
                                    <h1>${item.name}</h1>
                                    <div class="profile-page__id__detail">
                                        <h2>${item.city}, ${item.country}</h2>
                                        <p>${item.tagline}</p>
                                    </div>
                            </div>
                            <div id="test" class="contact">Contactez-moi</div>

                        </div>


                        <div class="container__tags profile-page__id__tags">
                        ${tags(item.tags)}
                        </div>
                </article>
                <div class="medias__container">
                    <div class="select__container">
                        <label>Trier par</label>
                        <div class="select__choices" style="width:200px">
                            <select>
                            <option value="0">Popularité</option>
                            <option value="1">Date</option>
                            <option value="2">Titre</option>
                            </select>
                        </div>
                    </div>
                </div>`).join('')
    }
}
export default ProfileScreen