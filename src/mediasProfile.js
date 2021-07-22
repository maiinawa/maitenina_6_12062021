// const datas = require('./data/data.json');
// import  getParamValue from './params';
// const GalleryPreview = {
//     render : () => {

//         const {media} = datas;

//         const theID = getParamValue('profile_id')
//         const galleryWanted = media.filter(medias => medias.photographerId == theID)
//         return console.log(galleryWanted)

// //         return galleryWanted.map((item) =>
//                     `
//                 <div class="medias__container">
//                     <div class="select__container">
//                         <label>Trier par</label>
//                         <div class="select__choices" style="width:200px">
//                             <select>
//                             <option value="0">Popularité</option>
//                             <option value="1">Date</option>
//                             <option value="2">Titre</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="medias__mosaic">
                
//                     <article>
//                         <img>
//                         <div class="medias__caption">
//                             <h3></h3>
//                             <span></span>
//                         </div>
//                     </article>

//                 </div>
// `).join('')
//     }
// }
// export default GalleryPreview