import { roleModel } from "./roleModel";

export interface userModel {
    hashedPassword: string,
    profileImage:string,
    name:string,
    surname:string,
    email:string,
    number:number,
    role:roleModel,
    verified:boolean
}
