import {useDishesQuery} from "../services/dishesApi";
import {useAppDispatch} from "./redux";
import {useEffect, useState} from "react";
import {setDishes} from "../store/dishesSlice";

export const useLoadDishes = (selectedType: string) => {
    const {data, error, isLoading, refetch} = useDishesQuery(selectedType ? selectedType : '');
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data && isLoading === false) {
            dispatch(setDishes(data))
        } else if (error) {
            alert(error)
        }
    }, [isLoading, error, data])

    return {
        error, isLoading, data, refetch
    }
};

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
