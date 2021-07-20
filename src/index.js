import HomeScreen from './homeScreen'
import ProfileScreen from './profileScreen'

export const main = document.querySelector('.main__wrapper');


const routerHomeScreen = () => {
    main.innerHTML=HomeScreen.render();
    // const mainProfile = document.querySelector('.profile-page__wrapper');
    // mainProfile.innerHTML=ProfileScreen.render();
};

const routerProfileScreen = () => {
    main.innerHTML=ProfileScreen.render();
}
window.addEventListener("DOMContentLoaded",routerHomeScreen);
/////////////
const cardElement = document.querySelectorAll(".photographer__card")
console.log(cardElement)
/////////

cardElement.forEach((card) => card.addEventListener("click",()=>alert('djbsdnj')));

//trouver comment cibler le chargement d'une page précisement.
// window.addEventListener("click",routerProfileScreen);

