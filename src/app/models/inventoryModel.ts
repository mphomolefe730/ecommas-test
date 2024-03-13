import { productModel } from "./productModel";

export interface inventoryModel{
    _id:string,
    items:{
        price:number,
        productId:productModel
        quantity:number
    }[],
    seller:string,
    status:string,
    total:number
}