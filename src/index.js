import HomeScreen from './homeScreen'
import ProfileScreen from './profileScreen'
import { parseRequestUrl } from './utils';
import PageNotFound from './notFound';

const routes ={
    '/':HomeScreen,
    'profile/:id':ProfileScreen
};
const router = () => {
    const request =parseRequestUrl();
    const parseUrl = 
    (request.resource ? `/${request.resource}`:'/') + 
    (request.id ? '/:id': '') + 
    (request.verb ?`/${request.verb}`:'');
    const screen =  routes[parseUrl]? routes[parseUrl]: PageNotFound;
    const main = document.querySelector('.photographer__list');
    main.innerHTML=screen.render();


};
window.addEventListener("load",router);
window.addEventListener("hashchange", router)

