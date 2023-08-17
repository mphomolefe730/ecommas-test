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
let totalprice:number = 0;
let deliveryPrice:number = 50;

//place for products to be placed
const productDOM = document.getElementById('productItemsDisplay');


/*------START OF ALL REGARDING PRODUCT DISPLAY------*/
class ShoreShowcaseProducts{
    createProduct(name,image, price, id, description): void{
        let itemcontainer:string ='';
        itemcontainer+= `
        <div class="item">
            <img src="${image}" class="product-image" alt="Product Image"/>
            <div class="ItemDescription">
                <h1 title="${name}" class="productname"> ${name} </h1>
                <p class="productdescription"> ${description} </p>
                <div class="productprice">
                    <div><span>R ${price}<br/>Rating</span></div>
                    <button class="purchase-btn" data-id="${id}">PURCHASE</button>
                </div>
            </div>
        </div>
        `;
        productDOM!.innerHTML+=itemcontainer;
        this.buyButton();
    }

    buyButton():void{
        //list all purchase button| is a Nodelist
        const purchaseBtn = document.querySelectorAll(".purchase-btn");

        purchaseBtn.forEach(button=>{
            let id = button.getAttribute('data-id');            //get the id(data-id) of each product
            let inCart = cart.some(item=> item === id);         //checks if id is in cart

            if (inCart){
                button.textContent="In Cart";                   //change text for purchase button
                button.setAttribute('disabled','disabled');     //makes the button inactive
                button.classList.remove('purchase-btn');
                button.classList.add('purchased');
            }
    
            button.addEventListener('click', () => {
                button.textContent="In Cart";
                button.setAttribute('disabled','disabled');
                button.classList.remove('purchase-btn');
                button.classList.add('purchased');

                //add product id to cart
                cart=[...cart,`${id}`];
                shopCart.createCartItem();
            })
        })
    }
}
/*------END OF ALL REGARDING PRODUCT DISPLAY------*/

/*------START OF ALL REGARDING CART------*/
class ShoreShowcaseCart{
    createCartItem(){
        const shoppingCartContainer = document.getElementById('cart-items');
        let variableHoldingPrice=0;
        let cartItemContainer:string;

        cart.forEach(productId=>{
            productList.filter(item=>item.id==productId).forEach(product=>{
                cartItemContainer+= 
                `<div id="cart-item-holder">
                    <div>
                        <p class="cartProductIndex">${cart.indexOf(product.id)}</p>
                    </div>
                    <div>
                        <h3 class="cartProductName">${product.name}</h3>
                        <div class="priceContainer">
                            <span class="cartProductPrice">R ${product.price}</span>
                            <span class="kill" data-id="${product.id}">remove</span>
                        </div>
                    </div>
                    <div class="quantity">
                        <input value="1" type="number" max="9" style="max-width: 30px;margin-left:50%;"/>
                    </div>
                </div>`;
                shoppingCartContainer!.innerHTML=cartItemContainer;
                this.removeCartItem();
                variableHoldingPrice=product.price;
            })
        });
        this.getPriceTotals(variableHoldingPrice);
    }

    removeCartItem():void{
        const purchasedBtn = document.querySelectorAll('.purchased');
        const cartProductIndex = document.querySelectorAll('.cartProductIndex');
        let removeCartItemButtons = document.querySelectorAll('.kill');
    
        removeCartItemButtons.forEach(killBtn=>killBtn.addEventListener('click', ()=>{
            cart = cart.filter(product=>product!=killBtn.getAttribute('data-id'));          //get remove btn id and filter cart to show elements that doesnt have it and updates cart to that
            //scan all button id elements and if id==killedId | remove class, disable and add purchase-btn class and purchase as text
            purchasedBtn.forEach(button=>{
                let checkId = button.getAttribute('data-id')== killBtn.getAttribute('data-id');
                if (checkId){
                    button.removeAttribute('class');
                    button.removeAttribute('disabled');
                    button.classList.add('purchase-btn');
                    button.textContent='PURCHASE';
                    //filter by product id, get price and remove from totalprice
                    productList.filter(productid=>{
                        if (productid.id==killBtn.getAttribute('data-id')){
                            this.getPriceTotals(-Math.abs(productid.price));
                        };
                    });
                }
            });
            killBtn.parentElement?.parentElement?.parentElement?.remove() //if selected element has parent parent, remove it)
            //get the index of the removedd item
            let indexOfKillNode = killBtn.parentElement?.parentNode?.parentNode?.childNodes[1].textContent;
            //search each cart item and if its index is high that removed it, subtract 1 unit from it
            cartProductIndex.forEach(item=>{
                if (Number(item.textContent)>=Number(indexOfKillNode)){
                    item.innerHTML=String(Number(item.textContent)-1);
                    //console.log('working')
                }
            })
        }));
        
    };
    getPriceTotals(price:number){
        totalprice+=price;

        let SubTotalDom = document.querySelector('#sub-total-price');
        let deliveryPriceDom = document.querySelector('#delivery-price');
        let totalPriceDom = document.querySelector('#total-price');

        if (totalprice<500){
            SubTotalDom!.innerHTML=`<span>R ${totalprice}</span>`
            if (totalprice==0){
                deliveryPriceDom!.innerHTML= `R 0`;
                totalPriceDom!.innerHTML=`R 0`;
            }
            else {deliveryPriceDom!.innerHTML=`R ${deliveryPrice}`;
                totalPriceDom!.innerHTML=`R ${totalprice+deliveryPrice}`;
            };
        }else{
            SubTotalDom!.innerHTML=`R ${totalprice}`
            deliveryPriceDom!.innerHTML=`FREE`
            totalPriceDom!.innerHTML=`R ${totalprice}`
        };
        document.getElementById('cartItemAmount')!.innerHTML=`${cart.length-1}`;
    };
}
/*------END OF ALL REGARDING CART------*/

// function loadBannerAds(){
//     let currentDay:any = new Date();
//     //convert into seconds and those seconds - dont go above 15sec
//     let seconds = Math.floor(((currentDay/(1000))%60)%15);
    
//     const bannerCotainer = document.getElementById('bannerAds');//where they'll be loaded
//     // console.log(seconds);
    
//     if(seconds == 0)bannerCotainer!.innerHTML=`<img class="bannerImg" src="${bannerImages[0].image}"/>`; //add 1st image to banner
//     if(seconds == 4)bannerCotainer!.innerHTML=`<img class="bannerImg" src="${bannerImages[1].image}"/>`; //add 2nd image to banner
//     if(seconds == 9)bannerCotainer!.innerHTML=`<img class="bannerImg" src="${bannerImages[2].image}"/>`; //add 3 image to banner
// };

class FloatingButton{
    actionButton():void{
        let popOptions = document.getElementById('actionButtionAdditions');
        let moreCloseBTN = document.getElementById('actionButton');
        let addMoreProducts = document.getElementById('addMoreProducts');

        moreCloseBTN?.addEventListener('click',()=>{
            popOptions?.classList.toggle('Invisible');
            if (popOptions?.classList.contains('Invisible')){
                moreCloseBTN!.innerText='MORE';
            }else{
                moreCloseBTN!.innerText='CLOSE';
                addMoreProducts?.addEventListener('click',()=>{
                    document.body.innerHTML+=`
                    <div id="blackBG">
                        <div id="whiteContainer">
                            <input id="newProductImage" style="height: 200px;" type="file" accept="image/*"/>
                            <div style="display:flex; width: 100%;flex-wrap: wrap;">

                                <input id="newProductName" type="text" placeholder="Product Name" style="width:100%"/>
                                <textarea id="NewProductDescription" style="border-radius: 10px;width:100%;margin:5px 0px; min-height: 200px;"></textarea>

                                <div style="margin: 5px 0px; display: grid; grid-template-columns: repeat(2, 1fr); gap:10px; width: 100%;">
                                    <input id="newProductPrice" type="number" placeholder="Product Price"/>
                                    <input id="newProductId" type="text" placeholder="Product ID"/>
                                </div>
                                <div style="margin: 5px 0px; display: grid; grid-template-columns: repeat(2, 1fr); gap:10px; width: 100%;">
                                    <button id="cancelProduct" type="reset" style="border-radius: 5px;width: 100%; border: 0;color: white;background-color: black;height: 50px;">CANCEL</button>
                                    <button id="submitProduct" type="submit" style="border-radius: 5px;width: 100%; border: 0;background-color: orange;height: 50px;">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    setTimeout(this.addProductMenu,500);
                })
            }
        });
    }

    addProductMenu():void{
        const submitBTN = document.getElementById('submitProduct');
        const cancelBTN = document.getElementById('cancelProduct');
        const wholePopUpMenu = document.getElementById('blackBG');
            

        cancelBTN?.addEventListener('click', () => {;
            wholePopUpMenu!.remove();
            firstLoad.buyButton();  //reload the buy buttons
            Float.actionButton();   //reload the float button
        });
        submitBTN?.addEventListener('click',Float.submitProduct)
    }

    submitProduct(){
        let productDOM = document.getElementById('productItemsDisplay');
        const wholePopUpMenu = document.getElementById('blackBG');
        const NewProductImg = document.getElementById('newProductImage');
        const NewProductName = <HTMLInputElement>document.getElementById('newProductName');
        const NewProductDescription = <HTMLInputElement>document.getElementById('NewProductDescription');
        const NewProductPrice = <HTMLInputElement>document.getElementById('newProductPrice');
        const NewProductID = <HTMLInputElement>document.getElementById('newProductId');

        let imgUrl = NewProductImg?.addEventListener('load',()=>{
            console.log('function active');
            const reader = new FileReader;
            return reader.result;
        })
        console.log(imgUrl);
        
        let stringForProduct ={
            name: NewProductName.value,
            Description: NewProductDescription.value,
            price: Number(NewProductPrice.value),
            id: NewProductID.value,
            img: String(imgUrl),
        };
        firstLoad.createProduct(stringForProduct.name,productList[0].img,stringForProduct.price,stringForProduct.id,stringForProduct.Description);
            
        // const ValidImg = (NewProductImg?.value)? false : true;
        const ValidName = (NewProductName?.value)? true: false;
        const ValidDes = (NewProductDescription?.value)? true: false;
        const ValidPrice = (NewProductPrice?.value)? true: false;
        const ValidID = (NewProductID?.value)? true: false;
        console.log(stringForProduct);
        console.log('button clicked')
        if (ValidName && ValidDes && ValidPrice && ValidID){
            console.log('product pass');
            productList.push(stringForProduct);
            //firstLoad.createProduct(stringForProduct.name, stringForProduct.img, stringForProduct.price, stringForProduct.id, stringForProduct.Description);
            productDOM!.innerHTML+=`
            <div class="item">
                <img src="${stringForProduct.img}" class="product-image" alt="Product Image"/>
                <div class="ItemDescription">
                    <h1 title="${stringForProduct.name}" class="productname"> ${stringForProduct.name} </h1>
                    <p class="productdescription"> ${stringForProduct.Description} </p>
                    <div class="productprice">
                        <div><span>R ${stringForProduct.price}<br/>Rating</span></div>
                        <button class="purchase-btn" data-id="${stringForProduct.id}">PURCHASE</button>
                    </div>
                </div>
            </div>
            `;
            wholePopUpMenu!.remove();
            firstLoad.buyButton();  //reload the buy buttons
            Float.actionButton();   //reload the float button
        } else{
            alert('Some fields are empty');
        }
    }
}

//create an object for Start Product & Cart
let firstLoad = new ShoreShowcaseProducts();
let shopCart = new ShoreShowcaseCart();
let Float = new FloatingButton();

//loads all start products
productList.forEach(item=>{
    firstLoad.createProduct(item.name, item.img, item.price, item.id, item.Description);
})

Float.actionButton();

//control for cart menu appearing and disappearing
document.getElementById('cartImage')!.addEventListener('click',()=>{
    document.getElementById('shopping-cart')!.style.display="block";
});
document.getElementById('axis')!.addEventListener('click',()=>{
    document.getElementById('shopping-cart')!.style.display="none";
});