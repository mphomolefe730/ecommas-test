export interface inventoryModelToSend{
    user:string,
    items:{
        productId:string,
        quantity:number,
        price:number
    }[]
    total:number,
    status:string,
    chat?:{chat:string|null,user:string|null}[]
}