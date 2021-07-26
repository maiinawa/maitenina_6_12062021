const datas = require('./data/data.json');

function Videos()
{
    this.type = type
}
function Image()
{
    this.type = type
}

class Photo {
    photo = {}
    constructor(photo) {
        this.photo = photo
    }
    render () {
        console.log("to do afficher une photo " + JSON.stringify(this.photo))
    }
}
class Video {
    video = {}
    constructor(video) {
        this.video = video
    }
    render () {
        console.log("to do afficher une video " + JSON.stringify(this.video))
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
    render: () => {
        const {media} = datas
        console.log('ibvdfi')
        return media.map((item) => {
            const mediaFactory = new MediaFactory()
            mediaFactory.getMedias(item)
        })
    }
}
export default MediaEngine