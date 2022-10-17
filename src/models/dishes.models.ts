export interface IDishes {
    id: number,
    type: string,
    dish: TDishes
}


export type TDishes = {
    name: string,
    price: number,
    img: string,
    description: string
}


export interface ITypes{
    id:number,
    type: string
}