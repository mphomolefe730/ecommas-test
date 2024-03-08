import { roleModel } from "./roleModel";

export interface userModel{
    name:string,
    surname:string,
    email:string,
    number:number,
    role:roleModel
}