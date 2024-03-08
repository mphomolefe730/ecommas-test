import { categoryModel } from "./categoryModel";
import { userModel } from "./userModel";

export interface productModel{
    name:string,
    id:string,
    price:number,
    image:string,
    description:string,
    stock:number,
    seller:userModel["name"],
    categories:categoryModel['_id'][]
}