var productList = [{ name: "Nike Air Force 1", Description: "The radiance lives on in the\nNike Air Force 1 '07, the basketball original that puts a fresh spin on what you know \nbest: durably stitched overlays, clean finishes and the perfect amount of flash to make \nyou shine.", price: 2199, id: "peoirj", img: "./src/images/air-force-1.webp" },
    { name: "Air Jordan 13 Retro", Description: "The Air Jordan 13 Retro brings back the memorable \ngame shoe that Michael Jordan wore during the '97-98 season, all the way to his 6th \nchampionship title. All the classic details are there like the quilted overlay, iconic \nsculpted midsole and holographic eye.", price: 3765, id: "djhgs", img: "./src/images/air-jordan-13-retro.webp" },
    { name: "JBL TUNE500BT", Description: "The JBL TUNE500BT headphones let you stream powerful sound \nwith no strings attached for up to 16 hours of pure pleasure. Easy to use and equipped with \n32mm JBL drivers and JBL Pure Bass sound, these headphones provide easy access to great sound \nevery time. And if a call comes in while you are watching a video on another device, the JBL \nTUNE500BT seamlessly switches to your mobile. Bluetooth enabled and designed to be comfortable, \nthe JBL TUNE500BT headphones also allow you to connect to Siri or Google Now without using your \nmobile device. Available in 4 fresh colors and foldable for easy portability, the JBL TUNE500BT \nheadphones are a grab \u2018n go solution that help you to inject music into every aspect of your busy \nlife.", price: 720, id: "2j2h2t", img: "./src/images/jbl-500-bt.webp" },
    { name: "Shield Roll On 50ml Ladies", Description: "Make Shield Women Sensitive Antiperspirant \nRoll-On the cornerstone of your daily routine for up to 48 hours of protection against sweat \nand body odour.", price: 20, id: "sdj283", img: "./src/images/shield-roll-on.webp" },
    { name: "Vaseline® MEN SPF 10 Even Tone Body Lotion", Description: "Vaseline\u00AE MEN SPF 10 Even Tone Body \nLotion protects your skin from sun damage and helps to even skin tone. ", price: 72, id: "2ieudhv",
        img: "./src/images/vaseline-cream.webp" },
    { name: "Standard Scientific Calculators fx-350CW", Description: "High-definition & 4-gradation display, \nthe current input location is displayed in a darker color. Simple cursor-based operations and a key layout\nthat follows the natural flow of use.", price: 72, id: "sbhdv2t6", img: "./src/images/casio-calculator.webp" },];
var removeCartItemButtons = document.getElementsByClassName('kill');
var productDOM = document.getElementById('productItemsDisplay');
//document.getElementById('productItemsDisplay')!.innerHTML=productItemDisplayContectMaker();
var cart = ["peoirj"];
console.log(removeCartItemButtons);
loadProducts();
setTimeout(buyButton, 2000);
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
    var buttons = document.querySelectorAll(".purchase-btn");
    buttons.forEach(function (button) {
        var id = button.getAttribute('data-id'); //get the id(data-id) of each product
        var inCart = cart.some(function (item) { return item === id; }); //checks if id is in cart
        if (inCart) {
            button.textContent = "In Cart"; //change text for purchase button
            button.setAttribute('disabled', 'disabled'); //makes the button inactive
        }
        button.addEventListener('click', function () {
            button.textContent = "In Cart";
            button.setAttribute('disabled', 'disabled');
        });
    });
    console.log(buttons);
}
function createCartItem() {
    var cartItemContainer = "<div id=\"cart-item-holder\">"; //div
    cartItemContainer += "<div class=\"quantity\"><p>1</p></div>"; //quantity
    cartItemContainer += "<div class=\"name\"><p>object one</p></div>"; //name
    cartItemContainer += "<div class=\"kill\"><button>remove</button></div>"; //remove button
    cartItemContainer += "</div>"; //closing tag
    return cartItemContainer;
}
function removeCartItem() {
    var _loop_1 = function (i) {
        var button = removeCartItemButtons[i]; //button of selected loop element
        button.addEventListener('click', function () {
            var _a;
            (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove(); //if selected loop element has a parent, remove it
        });
    };
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        _loop_1(i);
    }
}
;
