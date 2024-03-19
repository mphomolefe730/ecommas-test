export interface cartModel{
    _id:string,
    userId:string,
    items:{
        productId:{
            _id:string,
            name:string, 
            price:number,
            image:string,
            description:string,
            seller:string
        },
        quantity:number,
        price:number
    }[]
}