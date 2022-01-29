class Photo {
    photo = {}
    constructor(photo) {
        this.photo = photo
    }
    render () {
        const test = this.photo
        const container = document.querySelector('.medias__mosaic')
        const wrapper =  document.querySelector('.wrapper')

        if (container){

            //affiche les cartes images
            container.insertAdjacentHTML('afterbegin',`<article class="medias-card" onclick="openModalMedia()">
                <img src="./medias/ID${test.photographerId}/${test.image}" >
                <div class="medias__caption">
                    <h3>${test.title}</h3>
                    <div class="ratings ">
                        <span>${test.likes}</span>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </article>`);

            //affiche la modale
            document.querySelector('.medias-card').onclick=function openModalMedia(){
                console.log('modal image');
                const modalMedia = document.createElement('div')
                modalMedia.className="modale"
                wrapper.appendChild(modalMedia)
                modalMedia.insertAdjacentHTML('afterbegin',`
                    <div class="modale__medias">
                        <div class="modale__slider">
                            <i class="fas fa-times close-btn"></i>
                            <i class="fas fa-chevron-left arrow arrow-left"></i>
                            <div>
                                <img src="./medias/ID${test.photographerId}/${test.image}" >
                                <h3 class="modale__slider__title">${test.title}</h3>

                            </div>
                            <i class="fas fa-chevron-right arrow arrow-right"></i>
                        </div>

                    </div>
                `);

            }
        }
    }   
    modal (){

    }
}
class Video {
    video = {}
    constructor(video) {
        this.video = video
    }
    render () {
        const test = this.video
        const container = document.querySelector('.medias__mosaic')
        const wrapper =  document.querySelector('.wrapper')


        if (container){
            container.insertAdjacentHTML('afterbegin',`<article class="medias-card" onclick="openModalMedia()">
            <video src="./medias/ID${test.photographerId}/${test.video}" type="video/mp4">
            </video>
            <div class="medias__caption">
                <h3>${test.title}</h3>
                <div class="ratings">
                    <span>${test.likes}</span>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        </article>`);
        }    
            document.querySelector('.medias-card').onclick=function openModalMedia(){
                console.log('modal image');
                const modalMedia = document.createElement('div')
                modalMedia.className="modale"
                wrapper.appendChild(modalMedia)
                modalMedia.insertAdjacentHTML('afterbegin',`
                    <div class="modale__medias">
                        <div class="modale__slider">
                            <i class="fas fa-times close-btn"></i>
                            <i class="fas fa-chevron-left arrow arrow-left"></i>
                            <div>
                            <video controls>
                            <source src="./medias/ID${test.photographerId}/${test.video}" type="video/mp4">
                          </video>
                            <h3 class="modale__slider__title">${test.title}</h3>

                            </div>
                            <i class="fas fa-chevron-right arrow arrow-right"></i>
                        </div>

                    </div>
                `);

            }
    }
}

class MediaFactory {
    getMedias (media)  {
        if(media){
            if (media.image) {
                const photo = new Photo(media)
                return photo.render()
            }
            else if (media.video) {
                const video = new Video(media)
                return video.render()
            }
        }
    }
}
const MediaEngine = {
    render: (gallery) => {
        return gallery.map((item) => {
            const mediaFactory = new MediaFactory()
            mediaFactory.getMedias(item)

        })
    }
}

export default MediaEngine