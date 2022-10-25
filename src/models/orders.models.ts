import {IDishes} from "./dishes.models";

export interface  IOrders  {
    id?: number
    telephone: string
    price: number
    order: IDishes
}