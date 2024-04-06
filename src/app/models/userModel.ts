import { roleModel } from "./roleModel";

export interface userModel {
    businessName:string,
    businessDescription: string,
    hashedPassword: string,
    profileImage:string,
    name:string,
    surname:string,
    email:string,
    number:number,
    role:roleModel
}
