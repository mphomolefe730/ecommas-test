var productList = [{ name: "air force 1", Description: "white shoes", price: 1200, id: "peoirj" },
    { name: "jordan 13", Description: "blue, white and black shoes", price: 8000, id: "djhgs" },
    { name: "JBL bt500", Description: "wireless bluetooth earphones", price: 800, id: "2j2h2t" },
    { name: "shield rollon", Description: "dry sport shield rollon", price: 20, id: "sdj283" },
    { name: "vaseline", Description: "vaseline tab, kid size", price: 25, id: "2ieudhv" },
    { name: "Casio Calculator", Description: "Casio Calculator", price: 600, id: "sbhdv2t6" },];
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
    itemcontainer += '<img id="product-image" alt="Product Image"/>';
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
    var priceAndPurchase = "<div id=\"productprice\">\n    <span> ".concat(productList[indexOfProduct].price, "</span>\n    <button class=\"purchase-btn\" data-id=\"").concat(productList[indexOfProduct].id, "\">PURCHASE</button>\n    </div>");
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
