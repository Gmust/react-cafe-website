import React from 'react';
import './filterBtn.css'
import {motion} from "framer-motion";
import {setSelectedType} from "../../../../store/dishesSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {useLoadDishes} from "../../../../hooks/loadDishes";

type TFilterProps = {
    id: number,
    type: string
}

const FilterButton = ({type,id}: TFilterProps) => {

    const {selectedType} = useAppSelector(state => state.dishes)
    useLoadDishes(selectedType.type)
    const dispatch = useAppDispatch();

    return (
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={() => {
                dispatch(setSelectedType({id, type}))
            }}
            onDoubleClick={()=>      dispatch(setSelectedType({id: 0, type: ''})) }
            className={selectedType.id === id ? 'selected-type-button-style' : 'type-button-style'}
        >{type}</motion.button>
    );
};

export default FilterButton;