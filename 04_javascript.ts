let productList = [{name: "air force 1", Description: "white shoes",price: 1200, id: "peoirj"},
{name: "jordan 13", Description: "blue, white and black shoes",price: 8000, id: "djhgs"},
{name: "JBL bt500", Description: "wireless bluetooth earphones",price: 800, id: "2j2h2t"},
{name: "shield rollon", Description: "dry sport shield rollon",price: 20, id: "sdj283"},
{name: "vaseline", Description: "vaseline tab, kid size",price: 25, id: "2ieudhv"},
{name: "Casio Calculator", Description: "Casio Calculator",price: 600, id: "sbhdv2t6"},];

let removeCartItemButtons = document.getElementsByClassName('kill');
const productDOM = document.getElementById('productItemsDisplay');
//document.getElementById('productItemsDisplay')!.innerHTML=productItemDisplayContectMaker();
let cart=["peoirj"];

console.log(removeCartItemButtons);

loadProducts();
setTimeout(buyButton,2000);

function loadProducts():void{                                          //function to initialise the page of items
    let pageForItems:string = '';
    for(let i=0; i<productList.length;i++){
        pageForItems+=(createItem(i));
    }                                               
    productDOM!.innerHTML=pageForItems;
};

function createItem(indexOfProduct:number):string{
    let itemcontainer:string = '<div class="item">';
    itemcontainer+='<img id="product-image" alt="Product Image"/>'
    itemcontainer+=createItemDescription(indexOfProduct);
    itemcontainer+='</div>'; 

    return itemcontainer;
};

function createItemDescription(indexOfProduct):string{
    let itemDescriptionContainer:string = '<div class="ItemDescription">';//div
    itemDescriptionContainer+=`<h2 title="${productList[indexOfProduct].name}" id="productname"> ${productList[indexOfProduct].name} </h2>`;
    //name is the 1st element in productlist array
    itemDescriptionContainer+=`<p id="productdescription"> ${productList[indexOfProduct].Description} </p>`;//description
    
    let priceAndPurchase =`<div id="productprice">
    <span> ${productList[indexOfProduct].price}</span>
    <button class="purchase-btn" data-id="${productList[indexOfProduct].id}">PURCHASE</button>
    </div>`
    
    itemDescriptionContainer+=priceAndPurchase;
    itemDescriptionContainer+='</div>';//div

    return itemDescriptionContainer;
};

function buyButton(){
    //list all purchase button| is a Nodelist
    const buttons = document.querySelectorAll(".purchase-btn");
    
    buttons.forEach(button=>{
        let id = button.getAttribute('data-id');            //get the id(data-id) of each product
        let inCart = cart.some(item=> item === id);         //checks if id is in cart

        if (inCart){
            button.textContent="In Cart";                   //change text for purchase button
            button.setAttribute('disabled','disabled');     //makes the button inactive
        }
        button.addEventListener('click', () => {
            button.textContent="In Cart";
            button.setAttribute('disabled','disabled');
        })
    })
    console.log(buttons);
}

function createCartItem():string{
    let cartItemContainer:string= `<div id="cart-item-holder">`;//div
    cartItemContainer+=`<div class="quantity"><p>1</p></div>`;//quantity
    cartItemContainer+=`<div class="name"><p>object one</p></div>`;//name
    cartItemContainer+=`<div class="kill"><button>remove</button></div>`;//remove button
    cartItemContainer+=`</div>`;//closing tag

    return cartItemContainer;
}

function removeCartItem():void{
    for(let i=0; i<removeCartItemButtons.length;i++){ //loop over the buttons
        let button = removeCartItemButtons[i];//button of selected loop element
        button.addEventListener('click', ()=>{
            button.parentElement?.remove(); //if selected loop element has a parent, remove it
        })
    }
};