import React from 'react';
import './filterBar.css';
import {useTypesQuery} from "../../../services/dishesApi";
import FilterButton from "./filterButton/FilterButton";
import {ITypes} from "../../../models/dishes.models";




const FilterBar = () => {

    const {data: types} = useTypesQuery();


    return (
        <div className='filter-wrapper'>
            {types?.map((type:ITypes)=>
                <FilterButton key={type.id} id={type.id} type={type.type}/>
            )}
        </div>
    );
};

export default FilterBar;