import React from 'react';
import './visitorCard.css';
import {IVisitors} from "../../../../models/visitors.model";

const VisitorCard = ({review,photo,fullName,id}:IVisitors) => {
    return (
        <div className='visitor-card-wrapper'>
                <h1>{fullName}</h1>
                <img src={'./img/' + photo} alt=""/>
                <p>{review}</p>
        </div>
    );
};

export default VisitorCard;