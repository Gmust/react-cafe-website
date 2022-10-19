import React from 'react';
import Map from './Map'
import Info from "./info/Info";
import './contacts.css';
import ContactForm from "./contactForm/ContactForm";


const Contacts = () => {

    return (
        <div className='contacts-wrapper'>

            <div className='map-wrapper'>
                <Map/>
            </div>

            <div className='info-wrapper'>
                <Info/>
            </div>

            <div className='form-wrapper'>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contacts;