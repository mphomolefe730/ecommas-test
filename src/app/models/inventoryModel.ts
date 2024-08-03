import { productModel } from "./productModel";

export interface inventoryModel{
    _id:string|null,
    items:{
        price:number,
        productId:productModel
        quantity:number
    }[],
    seller:string,
    status:string,
    total:number,
    user:string
    chat:{
        chat:string,
        sender:string
    }[]
}