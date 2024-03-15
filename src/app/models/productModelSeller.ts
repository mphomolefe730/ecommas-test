import { userModel } from "./userModel";

export interface productModelSeller{
    name:string,
    _id:string,
    price:number,
    image:string,
    description:string,
    stock:number,
    seller:userModel["name"],
    categories:string[]
}