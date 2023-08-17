var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var productList = [{ name: "Nike Air Force 1", Description: "The radiance lives on in the\nNike Air Force 1 '07, the basketball original that puts a fresh spin on what you know \nbest: durably stitched overlays, clean finishes and the perfect amount of flash to make \nyou shine.", price: 2199, id: "peoirj", img: "./src/images/air-force-1.webp" },
    { name: "Air Jordan 13 Retro", Description: "The Air Jordan 13 Retro brings back the memorable \ngame shoe that Michael Jordan wore during the '97-98 season, all the way to his 6th \nchampionship title. All the classic details are there like the quilted overlay, iconic \nsculpted midsole and holographic eye.", price: 3765, id: "djhgs", img: "./src/images/air-jordan-13-retro.webp" },
    { name: "JBL TUNE500BT", Description: "The JBL TUNE500BT headphones let you stream powerful sound \nwith no strings attached for up to 16 hours of pure pleasure. Easy to use and equipped with \n32mm JBL drivers and JBL Pure Bass sound, these headphones provide easy access to great sound \nevery time. And if a call comes in while you are watching a video on another device, the JBL \nTUNE500BT seamlessly switches to your mobile. Bluetooth enabled and designed to be comfortable, \nthe JBL TUNE500BT headphones also allow you to connect to Siri or Google Now without using your \nmobile device. Available in 4 fresh colors and foldable for easy portability, the JBL TUNE500BT \nheadphones are a grab \u2018n go solution that help you to inject music into every aspect of your busy \nlife.", price: 720, id: "2j2h2t", img: "./src/images/jbl-500-bt.webp" },
    { name: "Shield Roll On 50ml Ladies", Description: "Make Shield Women Sensitive Antiperspirant \nRoll-On the cornerstone of your daily routine for up to 48 hours of protection against sweat \nand body odour.", price: 20, id: "sdj283", img: "./src/images/shield-roll-on.webp" },
    { name: "Vaseline® MEN SPF 10 Even Tone Body Lotion", Description: "Vaseline\u00AE MEN SPF 10 Even Tone Body \nLotion protects your skin from sun damage and helps to even skin tone. ", price: 72, id: "2ieudhv",
        img: "./src/images/vaseline-cream.webp" },
    { name: "Standard Scientific Calculators fx-350CW", Description: "High-definition & 4-gradation display, \nthe current input location is displayed in a darker color. Simple cursor-based operations and a key layout\nthat follows the natural flow of use.", price: 72, id: "sbhdv2t6", img: "./src/images/casio-calculator.webp" },];
var bannerImages = [{ image: "./src/images/banner/01-Shop-Products-Banner-Design.jpg" },
    { image: "./src/images/banner/02-Shop-Products-Banner-Design.jpg" },
    { image: "./src/images/banner/03-Shop-Products-Banner-Design.jpg" },];
var cart = [""];
var totalprice = 0;
var deliveryPrice = 50;
//place for products to be placed
var productDOM = document.getElementById('productItemsDisplay');
/*------START OF ALL REGARDING PRODUCT DISPLAY------*/
var ShoreShowcaseProducts = /** @class */ (function () {
    function ShoreShowcaseProducts() {
    }
    ShoreShowcaseProducts.prototype.createProduct = function (name, image, price, id, description) {
        var itemcontainer = '';
        itemcontainer += "\n        <div class=\"item\">\n            <img src=\"".concat(image, "\" class=\"product-image\" alt=\"Product Image\"/>\n            <div class=\"ItemDescription\">\n                <h1 title=\"").concat(name, "\" class=\"productname\"> ").concat(name, " </h1>\n                <p class=\"productdescription\"> ").concat(description, " </p>\n                <div class=\"productprice\">\n                    <div><span>R ").concat(price, "<br/>Rating</span></div>\n                    <button class=\"purchase-btn\" data-id=\"").concat(id, "\">PURCHASE</button>\n                </div>\n            </div>\n        </div>\n        ");
        productDOM.innerHTML += itemcontainer;
        this.buyButton();
    };
    ShoreShowcaseProducts.prototype.buyButton = function () {
        //list all purchase button| is a Nodelist
        var purchaseBtn = document.querySelectorAll(".purchase-btn");
        purchaseBtn.forEach(function (button) {
            var id = button.getAttribute('data-id'); //get the id(data-id) of each product
            var inCart = cart.some(function (item) { return item === id; }); //checks if id is in cart
            if (inCart) {
                button.textContent = "In Cart"; //change text for purchase button
                button.setAttribute('disabled', 'disabled'); //makes the button inactive
                button.classList.remove('purchase-btn');
                button.classList.add('purchased');
            }
            button.addEventListener('click', function () {
                button.textContent = "In Cart";
                button.setAttribute('disabled', 'disabled');
                button.classList.remove('purchase-btn');
                button.classList.add('purchased');
                //add product id to cart
                cart = __spreadArray(__spreadArray([], cart, true), ["".concat(id)], false);
                shopCart.createCartItem();
            });
        });
    };
    return ShoreShowcaseProducts;
}());
/*------END OF ALL REGARDING PRODUCT DISPLAY------*/
/*------START OF ALL REGARDING CART------*/
var ShoreShowcaseCart = /** @class */ (function () {
    function ShoreShowcaseCart() {
    }
    ShoreShowcaseCart.prototype.createCartItem = function () {
        var _this = this;
        var shoppingCartContainer = document.getElementById('cart-items');
        var variableHoldingPrice = 0;
        var cartItemContainer;
        cart.forEach(function (productId) {
            productList.filter(function (item) { return item.id == productId; }).forEach(function (product) {
                cartItemContainer +=
                    "<div id=\"cart-item-holder\">\n                    <div>\n                        <p class=\"cartProductIndex\">".concat(cart.indexOf(product.id), "</p>\n                    </div>\n                    <div>\n                        <h3 class=\"cartProductName\">").concat(product.name, "</h3>\n                        <div class=\"priceContainer\">\n                            <span class=\"cartProductPrice\">R ").concat(product.price, "</span>\n                            <span class=\"kill\" data-id=\"").concat(product.id, "\">remove</span>\n                        </div>\n                    </div>\n                    <div class=\"quantity\">\n                        <input value=\"1\" type=\"number\" max=\"9\" style=\"max-width: 30px;margin-left:50%;\"/>\n                    </div>\n                </div>");
                shoppingCartContainer.innerHTML = cartItemContainer;
                _this.removeCartItem();
                variableHoldingPrice = product.price;
            });
        });
        this.getPriceTotals(variableHoldingPrice);
    };
    ShoreShowcaseCart.prototype.removeCartItem = function () {
        var _this = this;
        var purchasedBtn = document.querySelectorAll('.purchased');
        var cartProductIndex = document.querySelectorAll('.cartProductIndex');
        var removeCartItemButtons = document.querySelectorAll('.kill');
        removeCartItemButtons.forEach(function (killBtn) { return killBtn.addEventListener('click', function () {
            var _a, _b, _c, _d, _e, _f;
            cart = cart.filter(function (product) { return product != killBtn.getAttribute('data-id'); }); //get remove btn id and filter cart to show elements that doesnt have it and updates cart to that
            //scan all button id elements and if id==killedId | remove class, disable and add purchase-btn class and purchase as text
            purchasedBtn.forEach(function (button) {
                var checkId = button.getAttribute('data-id') == killBtn.getAttribute('data-id');
                if (checkId) {
                    button.removeAttribute('class');
                    button.removeAttribute('disabled');
                    button.classList.add('purchase-btn');
                    button.textContent = 'PURCHASE';
                    //filter by product id, get price and remove from totalprice
                    productList.filter(function (productid) {
                        if (productid.id == killBtn.getAttribute('data-id')) {
                            _this.getPriceTotals(-Math.abs(productid.price));
                        }
                        ;
                    });
                }
            });
            (_c = (_b = (_a = killBtn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.remove(); //if selected element has parent parent, remove it)
            //get the index of the removedd item
            var indexOfKillNode = (_f = (_e = (_d = killBtn.parentElement) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.childNodes[1].textContent;
            //search each cart item and if its index is high that removed it, subtract 1 unit from it
            cartProductIndex.forEach(function (item) {
                if (Number(item.textContent) >= Number(indexOfKillNode)) {
                    item.innerHTML = String(Number(item.textContent) - 1);
                    //console.log('working')
                }
            });
        }); });
    };
    ;
    ShoreShowcaseCart.prototype.getPriceTotals = function (price) {
        totalprice += price;
        var SubTotalDom = document.querySelector('#sub-total-price');
        var deliveryPriceDom = document.querySelector('#delivery-price');
        var totalPriceDom = document.querySelector('#total-price');
        if (totalprice < 500) {
            SubTotalDom.innerHTML = "<span>R ".concat(totalprice, "</span>");
            if (totalprice == 0) {
                deliveryPriceDom.innerHTML = "R 0";
                totalPriceDom.innerHTML = "R 0";
            }
            else {
                deliveryPriceDom.innerHTML = "R ".concat(deliveryPrice);
                totalPriceDom.innerHTML = "R ".concat(totalprice + deliveryPrice);
            }
            ;
        }
        else {
            SubTotalDom.innerHTML = "R ".concat(totalprice);
            deliveryPriceDom.innerHTML = "FREE";
            totalPriceDom.innerHTML = "R ".concat(totalprice);
        }
        ;
        document.getElementById('cartItemAmount').innerHTML = "".concat(cart.length - 1);
    };
    ;
    return ShoreShowcaseCart;
}());
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
var FloatingButton = /** @class */ (function () {
    function FloatingButton() {
    }
    FloatingButton.prototype.actionButton = function () {
        var _this = this;
        var popOptions = document.getElementById('actionButtionAdditions');
        var moreCloseBTN = document.getElementById('actionButton');
        var addMoreProducts = document.getElementById('addMoreProducts');
        moreCloseBTN === null || moreCloseBTN === void 0 ? void 0 : moreCloseBTN.addEventListener('click', function () {
            popOptions === null || popOptions === void 0 ? void 0 : popOptions.classList.toggle('Invisible');
            if (popOptions === null || popOptions === void 0 ? void 0 : popOptions.classList.contains('Invisible')) {
                moreCloseBTN.innerText = 'MORE';
            }
            else {
                moreCloseBTN.innerText = 'CLOSE';
                addMoreProducts === null || addMoreProducts === void 0 ? void 0 : addMoreProducts.addEventListener('click', function () {
                    document.body.innerHTML += "\n                    <div id=\"blackBG\">\n                        <div id=\"whiteContainer\">\n                            <input id=\"newProductImage\" style=\"height: 200px;\" type=\"file\" accept=\"image/*\"/>\n                            <div style=\"display:flex; width: 100%;flex-wrap: wrap;\">\n\n                                <input id=\"newProductName\" type=\"text\" placeholder=\"Product Name\" style=\"width:100%\"/>\n                                <textarea id=\"NewProductDescription\" style=\"border-radius: 10px;width:100%;margin:5px 0px; min-height: 200px;\"></textarea>\n\n                                <div style=\"margin: 5px 0px; display: grid; grid-template-columns: repeat(2, 1fr); gap:10px; width: 100%;\">\n                                    <input id=\"newProductPrice\" type=\"number\" placeholder=\"Product Price\"/>\n                                    <input id=\"newProductId\" type=\"text\" placeholder=\"Product ID\"/>\n                                </div>\n                                <div style=\"margin: 5px 0px; display: grid; grid-template-columns: repeat(2, 1fr); gap:10px; width: 100%;\">\n                                    <button id=\"cancelProduct\" type=\"reset\" style=\"border-radius: 5px;width: 100%; border: 0;color: white;background-color: black;height: 50px;\">CANCEL</button>\n                                    <button id=\"submitProduct\" type=\"submit\" style=\"border-radius: 5px;width: 100%; border: 0;background-color: orange;height: 50px;\">SUBMIT</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>";
                    setTimeout(_this.addProductMenu, 500);
                });
            }
        });
    };
    FloatingButton.prototype.addProductMenu = function () {
        var submitBTN = document.getElementById('submitProduct');
        var cancelBTN = document.getElementById('cancelProduct');
        var wholePopUpMenu = document.getElementById('blackBG');
        cancelBTN === null || cancelBTN === void 0 ? void 0 : cancelBTN.addEventListener('click', function () {
            ;
            wholePopUpMenu.remove();
            firstLoad.buyButton(); //reload the buy buttons
            Float.actionButton(); //reload the float button
        });
        submitBTN === null || submitBTN === void 0 ? void 0 : submitBTN.addEventListener('click', Float.submitProduct);
    };
    FloatingButton.prototype.submitProduct = function () {
        var productDOM = document.getElementById('productItemsDisplay');
        var wholePopUpMenu = document.getElementById('blackBG');
        var NewProductImg = document.getElementById('newProductImage');
        var NewProductName = document.getElementById('newProductName');
        var NewProductDescription = document.getElementById('NewProductDescription');
        var NewProductPrice = document.getElementById('newProductPrice');
        var NewProductID = document.getElementById('newProductId');
        var imgUrl = NewProductImg === null || NewProductImg === void 0 ? void 0 : NewProductImg.addEventListener('load', function () {
            console.log('function active');
            var reader = new FileReader;
            return reader.result;
        });
        console.log(imgUrl);
        var stringForProduct = {
            name: NewProductName.value,
            Description: NewProductDescription.value,
            price: Number(NewProductPrice.value),
            id: NewProductID.value,
            img: String(imgUrl),
        };
        firstLoad.createProduct(stringForProduct.name, productList[0].img, stringForProduct.price, stringForProduct.id, stringForProduct.Description);
        // const ValidImg = (NewProductImg?.value)? false : true;
        var ValidName = (NewProductName === null || NewProductName === void 0 ? void 0 : NewProductName.value) ? true : false;
        var ValidDes = (NewProductDescription === null || NewProductDescription === void 0 ? void 0 : NewProductDescription.value) ? true : false;
        var ValidPrice = (NewProductPrice === null || NewProductPrice === void 0 ? void 0 : NewProductPrice.value) ? true : false;
        var ValidID = (NewProductID === null || NewProductID === void 0 ? void 0 : NewProductID.value) ? true : false;
        console.log(stringForProduct);
        console.log('button clicked');
        if (ValidName && ValidDes && ValidPrice && ValidID) {
            console.log('product pass');
            productList.push(stringForProduct);
            //firstLoad.createProduct(stringForProduct.name, stringForProduct.img, stringForProduct.price, stringForProduct.id, stringForProduct.Description);
            productDOM.innerHTML += "\n            <div class=\"item\">\n                <img src=\"".concat(stringForProduct.img, "\" class=\"product-image\" alt=\"Product Image\"/>\n                <div class=\"ItemDescription\">\n                    <h1 title=\"").concat(stringForProduct.name, "\" class=\"productname\"> ").concat(stringForProduct.name, " </h1>\n                    <p class=\"productdescription\"> ").concat(stringForProduct.Description, " </p>\n                    <div class=\"productprice\">\n                        <div><span>R ").concat(stringForProduct.price, "<br/>Rating</span></div>\n                        <button class=\"purchase-btn\" data-id=\"").concat(stringForProduct.id, "\">PURCHASE</button>\n                    </div>\n                </div>\n            </div>\n            ");
            wholePopUpMenu.remove();
            firstLoad.buyButton(); //reload the buy buttons
            Float.actionButton(); //reload the float button
        }
        else {
            alert('Some fields are empty');
        }
    };
    return FloatingButton;
}());
//create an object for Start Product & Cart
var firstLoad = new ShoreShowcaseProducts();
var shopCart = new ShoreShowcaseCart();
var Float = new FloatingButton();
//loads all start products
productList.forEach(function (item) {
    firstLoad.createProduct(item.name, item.img, item.price, item.id, item.Description);
});
Float.actionButton();
//control for cart menu appearing and disappearing
document.getElementById('cartImage').addEventListener('click', function () {
    document.getElementById('shopping-cart').style.display = "block";
});
document.getElementById('axis').addEventListener('click', function () {
    document.getElementById('shopping-cart').style.display = "none";
});
