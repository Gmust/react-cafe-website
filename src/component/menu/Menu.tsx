import React from 'react';
import './Menu.css'
import {IDishes} from "../../models/dishes.models";
import {useLoadDishes} from "../../hooks/react";
import {Preloader} from "../../assets/preloader/Preloader";
import {useAppSelector} from "../../hooks/redux";
import DishCard from "./dishCard/DishCard";
import FilterBar from "./FilterBar/FilterBar";

const Menu = () => {

    const {dishes, selectedType} = useAppSelector(state => state.dishes);
    const {isLoading} = useLoadDishes(selectedType.type);


    return (
        <>{isLoading ?
            <Preloader/>
            :
            <div
                className='menu-wrapper'>

                <div className='filter-style'>
                    <FilterBar/>
                </div>

                <div className='food-category'>
                    {dishes.map((item: IDishes) =>
                        <DishCard key={item.id} {...item}/>
                    )}
                </div>

            </div>
        }
        </>
    );
};

export default Menu;