var _a;
var productList = [{ name: "air force 1", Description: "white shoes", price: 1200, id: "peoirj" },
    { name: "jordan 13", Description: "blue, white and black shoes", price: 8000, id: "djhgs" },
    { name: "JBL bt500", Description: "wireless bluetooth earphones", price: 800, id: "2j2h2t" },
    { name: "shield rollon", Description: "dry sport shield rollon", price: 20, id: "sdj283" },
    { name: "vaseline", Description: "vaseline tab, kid size", price: 25, id: "2ieudhv" },
    { name: "air force 1", Description: "Casio Calculator", price: 600, id: "sbhdv2t6" },];
var removeCartItemButtons = document.getElementsByClassName('kill');
var addCartItemButtons = document.getElementsByClassName('purchase-btn');
console.log(removeCartItemButtons);
console.log(addCartItemButtons);
document.getElementById('productItemsDisplay').innerHTML = productItemDisplayContectMaker();
(_a = document.getElementById('purchase-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    console.log('clicked');
});
function productItemDisplayContectMaker() {
    var pageForItems = '';
    for (var i = 0; i < productList.length; i++) {
        pageForItems += (createItem(i));
    } //function to initialise the page of items
    return pageForItems;
}
;
function createItem(indexOfProduct) {
    var itemcontainer = '<div class="item">';
    itemcontainer += '<img id="product-image"/>';
    itemcontainer += createItemDescription(indexOfProduct);
    itemcontainer += '</div>';
    return itemcontainer;
}
;
function createItemDescription(indexOfProduct) {
    var itemDescriptionContainer = '<div class="ItemDescription">'; //div
    itemDescriptionContainer += "<h2 title=\"".concat(productList[indexOfProduct].name, "\" id=\"productname\"> ").concat(productList[indexOfProduct].name, " </h2>");
    //name is the 1st element in productlist array
    itemDescriptionContainer += "<p id=\"productdescription\"> ".concat(productList[indexOfProduct].Description, " </p>"); //description
    var priceAndPurchase = "<div id=\"productprice\">\n    <span> ".concat(productList[indexOfProduct].price, "</span>\n    <button id=\"purchase-btn\">PURCHASE</button>\n    </div>");
    itemDescriptionContainer += priceAndPurchase;
    itemDescriptionContainer += '</div>'; //div
    return itemDescriptionContainer;
}
;
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
