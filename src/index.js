import HomeScreen from './homeScreen'
import ProfileScreen from './profileScreen'
import likeCount from './likeCount'


const main = document.querySelector('.photographer__list');
const mainProfile = document.querySelector('.profile-page__wrapper')
const heart = document.getElementsByClassName('.fa-heart')


const routerHomeScreen = () => {
    if(main){
        main.innerHTML=HomeScreen.render();
    }
};
const routerProfileScreen = () => {
    if(mainProfile){
        mainProfile.innerHTML=ProfileScreen.render();

    }
}

window.addEventListener("DOMContentLoaded",routerHomeScreen);
window.addEventListener("DOMContentLoaded",routerProfileScreen);
heart.forEach((item)=>item.addEventListener("click",likeCount));
