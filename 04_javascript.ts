const item1 = ["air force 1", "white shoes",1200, "shoes"];
const item2 = ["jordan 13", "blue, white and black shoes",8000, "shoes"];
const item3 = ["JBL bt500", "wireless bluetooth earphones", 800, "electronics"];
const item4 = ["shield rollon", "dry sport shield rollon", 20, "skin and beauty"];
const item5 = ["vaseline", "vaseline tab, kid size", 25, "skin and beauty"];
const item6 = ["Casio Calculator", "Casio traditional blue calculator", 600, "electronics"];

let productList = [item1, item2,item3, item4,item5, item6,item1, item2,item3, item4,item5, item6];

let removeCartItemButtons = document.getElementsByClassName('kill');
console.log(removeCartItemButtons);

document.getElementById('productItemsDisplay')!.innerHTML=init();

function init():string{
    let pageForItems:string = '';
    for(let i=0; i<productList.length;i++){
        pageForItems+=(createItem(i));
    }                                               //function to initialise the page of items
    removeCartItem();                               //function to remove from cart
    return pageForItems;
};

function createItem(indexOfProduct:number):string{
    let itemcontainer:string = '<div class="item">';
    itemcontainer+='<img id="product-image"/>'
    itemcontainer+=createItemDescription(indexOfProduct);
    itemcontainer+='</div>'; 

    return itemcontainer;
};

function createItemDescription(indexOfProduct):string{
    let itemDescriptionContainer:string = '<div class="ItemDescription">';//div
    itemDescriptionContainer+=`<h2 id="productname[i]"> ${productList[indexOfProduct][0]} </h2>`;
    //name is the 1st element in productlist array
    itemDescriptionContainer+=`<p id="productdescription"> ${productList[indexOfProduct][1]} </p>`;//description
    itemDescriptionContainer+=`<p id="productprice[i]"> ${productList[indexOfProduct][2]} <button id="purchase-btn">PURCHASE</button> </p>`;//price
    itemDescriptionContainer+='</div>';//div

    return itemDescriptionContainer;
};

function removeCartItem():void{
    for(let i=0; i<removeCartItemButtons.length;i++){ //loop over the buttons
        let button = removeCartItemButtons[i];//button of selected loop element
        button.addEventListener('click', ()=>{
            button.parentElement?.remove(); //if slected loop element has a parent, remove it
        })
    }
};