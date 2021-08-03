class Photo {
    photo = {}
    constructor(photo) {
        this.photo = photo
    }
    render () {
        const test = this.photo
        const container = document.querySelector('.medias__mosaic')
        if (container){
            container.insertAdjacentHTML('afterbegin',`<article>
                <img src="./medias/ID${test.photographerId}/${test.image}">
                <div class="medias__caption">
                    <h3>${test.title}</h3>
                    <div class="ratings">
                        <span>${test.likes}</span>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </article>`);
        }
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
        if (container){
            container.insertAdjacentHTML('afterbegin',`<article>
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