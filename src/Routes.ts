import {START_PAGE, BASKET_PAGE, MAIN_PAGE, ABOUT_PAGE, MENU_PAGE} from "./utils/consts";
import StartPage from "./component/startPage/StartPage";
import Basket from "./component/basket/Basket";
import MainPage from "./component/main/MainPage";
import About from "./component/about/About";
import Menu from "./component/menu/Menu";


export const routes = [
    {
        path: START_PAGE,
        Component: StartPage
    },
    {
        path: BASKET_PAGE,
        Component: Basket
    },
    {
        path: MAIN_PAGE,
        Component: MainPage
    },
    {
        path: ABOUT_PAGE,
        Component: About
    },
    {
        path: MENU_PAGE,
        Component: Menu
    }
]