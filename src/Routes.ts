import {START_PAGE, MAIN_PAGE, ABOUT_PAGE, MENU_PAGE,BOOKING_PAGE, CONTACTS_PAGE} from "./utils/consts";
import StartPage from "./component/startPage/StartPage";
import MainPage from "./component/main/MainPage";
import About from "./component/about/About";
import Menu from "./component/menu/Menu";
import Booking from "./component/booking/Booking";
import Contacts from "./component/contacts/Contacts";


export const routes = [
    {
        path: START_PAGE,
        Component: StartPage
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
    },
    {
        path: CONTACTS_PAGE,
        Component: Contacts
    },
    {
        path: BOOKING_PAGE,
        Component: Booking
    }
]