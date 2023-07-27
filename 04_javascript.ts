let productList = [{ name: "Nike Air Force 1", Description: `The radiance lives on in the
Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know 
best: durably stitched overlays, clean finishes and the perfect amount of flash to make 
you shine.`, price: 2_199, id: "peoirj", img:`./src/images/air-force-1.webp`},

{name: "Air Jordan 13 Retro", Description: `The Air Jordan 13 Retro brings back the memorable 
game shoe that Michael Jordan wore during the '97-98 season, all the way to his 6th 
championship title. All the classic details are there like the quilted overlay, iconic 
sculpted midsole and holographic eye.`,price: 3_765, id: "djhgs",img:`./src/images/air-jordan-13-retro.webp`},

{name: "JBL TUNE500BT", Description: `The JBL TUNE500BT headphones let you stream powerful sound 
with no strings attached for up to 16 hours of pure pleasure. Easy to use and equipped with 
32mm JBL drivers and JBL Pure Bass sound, these headphones provide easy access to great sound 
every time. And if a call comes in while you are watching a video on another device, the JBL 
TUNE500BT seamlessly switches to your mobile. Bluetooth enabled and designed to be comfortable, 
the JBL TUNE500BT headphones also allow you to connect to Siri or Google Now without using your 
mobile device. Available in 4 fresh colors and foldable for easy portability, the JBL TUNE500BT 
headphones are a grab ‘n go solution that help you to inject music into every aspect of your busy 
life.`,price: 720, id: "2j2h2t", img:`./src/images/jbl-500-bt.webp`},

{name: "Shield Roll On 50ml Ladies", Description: `Make Shield Women Sensitive Antiperspirant 
Roll-On the cornerstone of your daily routine for up to 48 hours of protection against sweat 
and body odour.`,price: 20, id: "sdj283",img:`./src/images/shield-roll-on.webp`},

{name: "Vaseline® MEN SPF 10 Even Tone Body Lotion", Description: `Vaseline® MEN SPF 10 Even Tone Body 
Lotion protects your skin from sun damage and helps to even skin tone. `,price: 72, id: "2ieudhv",
img:`./src/images/vaseline-cream.webp`},

{name: `Standard Scientific Calculators fx-350CW`, Description: `High-definition & 4-gradation display, 
the current input location is displayed in a darker color. Simple cursor-based operations and a key layout
that follows the natural flow of use.`,price: 72, id: "sbhdv2t6", img:`./src/images/casio-calculator.webp`},];

let bannerImages=[{image:`./src/images/banner/01-Shop-Products-Banner-Design.jpg`},
{image:`./src/images/banner/02-Shop-Products-Banner-Design.jpg`},
{image:`./src/images/banner/03-Shop-Products-Banner-Design.jpg`},];

let cart=[""];

const productDOM = document.getElementById('productItemsDisplay');


//loads products on the page
loadProducts();
//detects product purchase button 2seconds after loading page
setTimeout(buyButton,1000);
//loadsbannerads
setInterval(loadBannerAds,1000);
setInterval(removeCartItem,1000);

function loadProducts():void{                            //function to initialise the page of items
    let pageForItems:string = '';
    for(let i=0; i<productList.length;i++){
        pageForItems+=(createItem(i));
    }                                               
    productDOM!.innerHTML=pageForItems;
};

function createItem(indexOfProduct:number):string{
    let itemcontainer:string = '<div class="item">';
    itemcontainer+=`<img src="${productList[indexOfProduct].img}" class="product-image" alt="Product Image"/>`;
    itemcontainer+=createItemDescription(indexOfProduct);
    itemcontainer+='</div>'; 

    return itemcontainer;
};

function createItemDescription(indexOfProduct):string{
    let itemDescriptionContainer:string = '<div class="ItemDescription">';//div
    itemDescriptionContainer+=`<h1 title="${productList[indexOfProduct].name}" class="productname"> ${productList[indexOfProduct].name} </h1>`;
    //name is the 1st element in productlist array
    itemDescriptionContainer+=`<p class="productdescription"> ${productList[indexOfProduct].Description} </p>`;//description
    
    let priceAndPurchase =`<div class="productprice">
    <div><span>R ${productList[indexOfProduct].price}<br/>Rating</span></div>
    <button class="purchase-btn" data-id="${productList[indexOfProduct].id}">PURCHASE</button>
    </div>`
    
    itemDescriptionContainer+=priceAndPurchase;
    itemDescriptionContainer+='</div>';//div

    return itemDescriptionContainer;
};

function buyButton(){
    //list all purchase button| is a Nodelist
    const purchaseBtn = document.querySelectorAll(".purchase-btn");
    
    purchaseBtn.forEach(button=>{
        let id = button.getAttribute('data-id');            //get the id(data-id) of each product
        let inCart = cart.some(item=> item === id);         //checks if id is in cart

        if (inCart){
            button.textContent="In Cart";                   //change text for purchase button
            button.setAttribute('disabled','disabled');     //makes the button inactive
            button.classList.add('purchased');
            createCartItem();
        }

        button.addEventListener('click', () => {
            //change context of click button and disable button
            button.textContent="In Cart";
            button.setAttribute('disabled','disabled');
            button.classList.add('puchased')
            //add product id to cart
            cart = [...cart,`${id}`];
            // ClickedproductAssest = productList.filter(items=>items.id==button.getAttribute('data-id'));
            createCartItem();
        })
    })
}

function createCartItem(){
    const shoppingCartContainer = document.getElementById('cart-items');
    shoppingCartContainer!.innerText='';
    let cartItemContainer:string;
    
    //get id name in cart and search for item from object"productlist"
    cart.forEach(productId=>{
        /*filer productlist to only show elements that have ids corresponding with cart*/
        productList.filter(item=>item.id==productId).forEach(product=>{
            /*for each item enter infomation to HTML template and save in variable*/
            //console.log(product);
            cartItemContainer+= 
            `<div id="cart-item-holder">
                <div>
                    <p>${cart.indexOf(product.id)}</p>
                </div>
                <div>
                    <h3 class="cartProductName">${product.name}</h3>
                    <div class="priceContainer">
                        <span class="cartProductPrice">R ${product.price}</span>
                        <span class="kill" data-id="${product.id}">remove</span>
                    </div>
                </div>
                <div class="quantity">
                    <p>1</p>
                </div>
            </div>`;
            
            shoppingCartContainer!.innerHTML=cartItemContainer;
            document.getElementById('cartItemAmount')!.innerHTML=`${cart.length-1}`;
        })
    });
}

function removeCartItem():void{
    //list all purchase button| is a Nodelist
    const purchaseBtn = document.querySelectorAll(".purchase-btn");
    let removeCartItemButtons = document.querySelectorAll('.kill');

    removeCartItemButtons.forEach(killBtn=>killBtn.addEventListener('click', ()=>{
        //get remove btn id and filter cart to show elements that doesnt have it and updates cart to that
        cart = cart.filter(product=>product!=killBtn.getAttribute('data-id'));
        //scan all button id elements and if id==killedId | remove class, disable and add purchase-btn class and purchase as text
        purchaseBtn.forEach(button=>{
            let checkId = button.getAttribute('data-id')==killBtn.getAttribute('data-id');
            if (checkId){
                button.removeAttribute('class');
                button.removeAttribute('disabled');
                button.classList.add('purchase-btn');
                button.textContent='PURCHASE';
            }
        });
        // console.log(cart)
        killBtn.parentElement?.parentElement?.parentElement?.remove() //if selected element has parent parent, remove it)
    }));
    
};

function loadBannerAds(){
    let currentDay:any = new Date();
    //convert into seconds and those seconds - dont go above 15sec
    let seconds = Math.floor(((currentDay/(1000))%60)%15);
    
    const bannerCotainer = document.getElementById('bannerAds');//where they'll be loaded
    // console.log(seconds);
    
    if(seconds == 0)bannerCotainer!.innerHTML=`<img class="bannerImg" src="${bannerImages[0].image}"/>`; //add 1st image to banner
    if(seconds == 4)bannerCotainer!.innerHTML=`<img class="bannerImg" src="${bannerImages[1].image}"/>`; //add 2nd image to banner
    if(seconds == 9)bannerCotainer!.innerHTML=`<img class="bannerImg" src="${bannerImages[2].image}"/>`; //add 3 image to banner
};

document.getElementById('cartImage')!.addEventListener('click',()=>{
    document.getElementById('shopping-cart')!.style.display="block";
});
document.getElementById('axis')!.addEventListener('click',()=>{
    document.getElementById('shopping-cart')!.style.display="none";
});