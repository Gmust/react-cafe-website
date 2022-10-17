import {useDishesQuery} from "../services/dishesApi";
import {useAppDispatch, useAppSelector} from "./redux";
import {useEffect} from "react";
import {setDishes, setSelectedType} from "../store/dishesSlice";

export const useLoadDishes = (selectedType:string) => {
    const {data, error, isLoading,  refetch } = useDishesQuery(selectedType? selectedType: '');
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data && isLoading === false) {
            dispatch(setDishes(data))
        } else if (error) {
            alert(error)
        }
    }, [isLoading, error,data])

    return {
        error, isLoading, data, refetch
    }
}