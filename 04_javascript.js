var item1 = ["air force 1", "white shoes", 1200, "shoes"];
var item2 = ["jordan 13", "blue, white and black shoes", 8000, "shoes"];
var item3 = ["JBL bt500", "wireless bluetooth earphones", 800, "electronics"];
var item4 = ["shield rollon", "dry sport shield rollon", 20, "skin and beauty"];
var item5 = ["vaseline", "vaseline tab, kid size", 25, "skin and beauty"];
var item6 = ["Casio Calculator", "Casio traditional blue calculator", 600, "electronics"];
var productList = [item1, item2, item3, item4, item5, item6, item1, item2, item3, item4, item5, item6];
document.getElementById('productItemsDisplay').innerHTML = init();
function init() {
    var pageForItems = '';
    for (var i = 0; i < productList.length; i++) {
        pageForItems += (createItem(i));
    }
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
    itemDescriptionContainer += "<h2 id=\"productname[i]\"> ".concat(productList[indexOfProduct][0], " </h2>");
    //name is the 1st element in productlist array
    itemDescriptionContainer += "<p id=\"productdescription\"> ".concat(productList[indexOfProduct][1], " </p>"); //description
    itemDescriptionContainer += "<p id=\"productprice[i]\"> ".concat(productList[indexOfProduct][2], " <button id=\"purchase-btn\">PURCHASE</button> </p>"); //price
    itemDescriptionContainer += '</div>'; //div
    return itemDescriptionContainer;
}
;
