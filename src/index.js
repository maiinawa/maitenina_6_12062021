import HomeScreen from './homeScreen'
import MediaEngine from './mediasRendeeer';
import ProfileScreen from './profileScreen'


export const main = document.querySelector('.photographer__list');
const mainProfile = document.querySelector('.profile-page__wrapper')


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
const routerMedia = () => {
        mainProfile.innerHTML=MediaEngine.render();
    }

window.addEventListener("DOMContentLoaded",routerHomeScreen);

window.addEventListener("DOMContentLoaded",routerProfileScreen);
window.addEventListener("DOMContentLoaded",routerMedia);


