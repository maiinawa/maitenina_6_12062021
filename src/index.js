import HomeScreen from './homeScreen'
import ProfileScreen from './profileScreen'

export const main = document.querySelector('.photographer__list');
const mainProfile = document.querySelector('.profile-page__wrapper')


const routerHomeScreen = () => {
    main.innerHTML=HomeScreen.render();
};

const routerProfileScreen = () => {
    mainProfile.innerHTML=ProfileScreen.render();
}
window.addEventListener("DOMContentLoaded",routerHomeScreen);

window.addEventListener("DOMContentLoaded",routerProfileScreen);

