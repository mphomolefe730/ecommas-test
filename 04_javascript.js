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
//price for total less than R500
var deliveryPrice = 50;
var productDOM = document.getElementById('productItemsDisplay');
//loads products on the page
loadProducts();
//detects product purchase button 2seconds after loading page
setTimeout(buyButton, 1000);
//loadsbannerads
setInterval(loadBannerAds, 1000);
// setInterval(removeCartItem,1000);
function loadProducts() {
    var pageForItems = '';
    for (var i = 0; i < productList.length; i++) {
        pageForItems += (createItem(i));
    }
    productDOM.innerHTML = pageForItems;
}
;
function createItem(indexOfProduct) {
    var itemcontainer = '<div class="item">';
    itemcontainer += "<img src=\"".concat(productList[indexOfProduct].img, "\" class=\"product-image\" alt=\"Product Image\"/>");
    itemcontainer += createItemDescription(indexOfProduct);
    itemcontainer += '</div>';
    return itemcontainer;
}
;
function createItemDescription(indexOfProduct) {
    var itemDescriptionContainer = '<div class="ItemDescription">'; //div
    itemDescriptionContainer += "<h1 title=\"".concat(productList[indexOfProduct].name, "\" class=\"productname\"> ").concat(productList[indexOfProduct].name, " </h1>");
    //name is the 1st element in productlist array
    itemDescriptionContainer += "<p class=\"productdescription\"> ".concat(productList[indexOfProduct].Description, " </p>"); //description
    var priceAndPurchase = "<div class=\"productprice\">\n    <div><span>R ".concat(productList[indexOfProduct].price, "<br/>Rating</span></div>\n    <button class=\"purchase-btn\" data-id=\"").concat(productList[indexOfProduct].id, "\">PURCHASE</button>\n    </div>");
    itemDescriptionContainer += priceAndPurchase;
    itemDescriptionContainer += '</div>'; //div
    return itemDescriptionContainer;
}
;
function buyButton() {
    //list all purchase button| is a Nodelist
    var purchaseBtn = document.querySelectorAll(".purchase-btn");
    purchaseBtn.forEach(function (button) {
        var id = button.getAttribute('data-id'); //get the id(data-id) of each product
        var inCart = cart.some(function (item) { return item === id; }); //checks if id is in cart
        if (inCart) {
            button.textContent = "In Cart"; //change text for purchase button
            button.setAttribute('disabled', 'disabled'); //makes the button inactive
            button.classList.add('purchased');
            createCartItem();
        }
        button.addEventListener('click', function () {
            //change context of click button and disable button
            button.textContent = "In Cart";
            button.setAttribute('disabled', 'disabled');
            button.classList.add('puchased');
            //add product id to cart
            cart = __spreadArray(__spreadArray([], cart, true), ["".concat(id)], false);
            // ClickedproductAssest = productList.filter(items=>items.id==button.getAttribute('data-id'));
            createCartItem();
            removeCartItem();
        });
    });
}
function createCartItem() {
    var shoppingCartContainer = document.getElementById('cart-items');
    shoppingCartContainer.innerText = '';
    var variableHoldingPrice = 0;
    var cartItemContainer;
    //get id name in cart and search for item from object"productlist"
    cart.forEach(function (productId) {
        /*filer productlist to only show elements that have ids corresponding with cart*/
        productList.filter(function (item) { return item.id == productId; }).forEach(function (product) {
            /*for each item enter infomation to HTML template and save in variable*/
            cartItemContainer +=
                "<div id=\"cart-item-holder\">\n                <div>\n                    <p>".concat(cart.indexOf(product.id), "</p>\n                </div>\n                <div>\n                    <h3 class=\"cartProductName\">").concat(product.name, "</h3>\n                    <div class=\"priceContainer\">\n                        <span class=\"cartProductPrice\">R ").concat(product.price, "</span>\n                        <span class=\"kill\" data-id=\"").concat(product.id, "\">remove</span>\n                    </div>\n                </div>\n                <div class=\"quantity\">\n                    <input value=\"1\" type=\"number\" max=\"9\" style=\"max-width: 30px;margin-left:50%;\"/>\n                </div>\n            </div>");
            variableHoldingPrice = product.price;
            shoppingCartContainer.innerHTML = cartItemContainer;
        });
    });
    getPriceTotals(variableHoldingPrice);
}
function removeCartItem() {
    //list all purchase button| is a Nodelist
    var purchaseBtn = document.querySelectorAll(".purchase-btn");
    var removeCartItemButtons = document.querySelectorAll('.kill');
    removeCartItemButtons.forEach(function (killBtn) { return killBtn.addEventListener('click', function () {
        var _a, _b, _c;
        //get remove btn id and filter cart to show elements that doesnt have it and updates cart to that
        cart = cart.filter(function (product) { return product != killBtn.getAttribute('data-id'); });
        //scan all button id elements and if id==killedId | remove class, disable and add purchase-btn class and purchase as text
        purchaseBtn.forEach(function (button) {
            var checkId = button.getAttribute('data-id') == killBtn.getAttribute('data-id');
            if (checkId) {
                button.removeAttribute('class');
                button.removeAttribute('disabled');
                button.classList.add('purchase-btn');
                button.textContent = 'PURCHASE';
                //filter by product id, get price and remove from totalprice
                productList.filter(function (productid) {
                    if (productid.id == killBtn.getAttribute('data-id')) {
                        getPriceTotals(-Math.abs(productid.price));
                    }
                    ;
                });
            }
        });
        // console.log(cart)
        (_c = (_b = (_a = killBtn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.remove(); //if selected element has parent parent, remove it)
    }); });
}
;
function loadBannerAds() {
    var currentDay = new Date();
    //convert into seconds and those seconds - dont go above 15sec
    var seconds = Math.floor(((currentDay / (1000)) % 60) % 15);
    var bannerCotainer = document.getElementById('bannerAds'); //where they'll be loaded
    // console.log(seconds);
    if (seconds == 0)
        bannerCotainer.innerHTML = "<img class=\"bannerImg\" src=\"".concat(bannerImages[0].image, "\"/>"); //add 1st image to banner
    if (seconds == 4)
        bannerCotainer.innerHTML = "<img class=\"bannerImg\" src=\"".concat(bannerImages[1].image, "\"/>"); //add 2nd image to banner
    if (seconds == 9)
        bannerCotainer.innerHTML = "<img class=\"bannerImg\" src=\"".concat(bannerImages[2].image, "\"/>"); //add 3 image to banner
}
;
function getPriceTotals(price) {
    totalprice += price;
    var SubTotalDom = document.querySelector('#sub-total-price');
    var deliveryPriceDom = document.querySelector('#delivery-price');
    var totalPriceDom = document.querySelector('#total-price');
    if (totalprice < 500) {
        SubTotalDom.innerHTML = "R ".concat(totalprice);
        if (totalprice == 0) {
            deliveryPriceDom.innerHTML = "0";
            totalPriceDom.innerHTML = "0";
        }
        else {
            deliveryPriceDom.innerHTML = "".concat(deliveryPrice);
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
}
;
//control for cart menu appearing and disappearing
document.getElementById('cartImage').addEventListener('click', function () {
    document.getElementById('shopping-cart').style.display = "block";
});
document.getElementById('axis').addEventListener('click', function () {
    document.getElementById('shopping-cart').style.display = "none";
});
