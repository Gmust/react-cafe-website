import React, {useState} from 'react';
import './dishCard.css';
import {motion} from "framer-motion";
import {setSelectedDish} from "../../../store/dishesSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {IDishes} from "../../../models/dishes.models";
import {setIsCardSelected} from "../../../store/viewSlice";


const DishCard = ({...item}: IDishes) => {


    const dispatch = useAppDispatch();
    const [myStyle, setMyStyle] = useState<boolean>(false);
    const {isCardSelected} = useAppSelector(state => state.view)
    const handleClick = (id: number) => {
        dispatch(setSelectedDish(item))

        setMyStyle(prevState => ({
            // @ts-ignore
            ...myStyle,
            // @ts-ignore
            [id]: !prevState[id]
        }))
        dispatch(setIsCardSelected(!isCardSelected))
    }


    return (
        <motion.div key={item.id}
                    onClick={() => {
                        handleClick(item.id);
                    }}
                    whileHover={{
                        scale: 1.2
                    }}
                    animate={// @ts-ignore
                        myStyle[`${item.id}`] ? {
                            scale: 1.1
                        } : {}
                    }
                    className={// @ts-ignore
                        myStyle[`${item.id}`] ? 'dishes-wrapper-opened-style' : 'dishes-wrapper'}
        >
            <h2>{item.dish.name}</h2>
            <img src={item.dish.img}/>
            {// @ts-ignore
                myStyle[`${item.id}`]
                    ?
                    <div>
                        <br/>
                        <p>{item.dish.description}</p>
                        <br/>
                        <span className='card-footer-style'>
                             <h3> Price: {item.dish.price} $ <motion.button
                             onClick={(e)=> e.stopPropagation()}
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.9 }}
                             >Buy</motion.button>   </h3>
                        </span>
                    </div>
                    : null}
        </motion.div>
    );
};

export default DishCard;