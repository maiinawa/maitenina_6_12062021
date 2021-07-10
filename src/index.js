import HomeScreen from './homeScreen'
const router = () => {
    const main = document.querySelector('.photographer__list');
    main.innerHTML=HomeScreen.render();
};
window.addEventListener("load",router)
