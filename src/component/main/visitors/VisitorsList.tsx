import React from 'react';
import './visitorsList.css';
import {visitors} from '../../../utils/persons/persons';
import {IVisitors} from "../../../models/visitors.model";
import VisitorCard from "./visitorCard/VisitorCard";

const VisitorsList = () => {

    return (
        <div className='visitors-wrapper'>
            {visitors.map(({id,review,photo,fullName}:IVisitors )=>
                <VisitorCard key={id} review={review} photo={photo} fullName={fullName}  id={id}/>
            )}
        </div>
    );
};

export default VisitorsList;