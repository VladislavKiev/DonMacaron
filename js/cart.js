var cart = {}; 

function init() {
    
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    
    console.log(data);
    var out='';
    for (var key in data) {
        out +='<div class="cart">';
        out += '<img src="img/prod/'+data[key].img+'" alt="">';
        out +='<p class="name">'+data[key].name+'</p>';
        out +='<p class="description">'+data[key].description+'</p>'
        out +='<div class="cost">'+data[key].cost+'</div>';
        // out +=`<div class="description>"${data[key].description}</div>`;
        out +='<button class="add-to-cart">Купить</button>';
        out +='</div>';
        
        
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function addToCart() {
    
    var id = $(this).attr('data-id');
    // console.log(id);
    if (cart[id]==undefined) {
        cart[id] = 1; 
    }
    else {
        cart[id]++; 
    }
    showMiniCart();
}

function showMiniCart() {
   
    var out="";
    for (var key in cart) {
        out += key +' --- '+ cart[key]+'<br>';
    }
    $('.mini-cart').html(out);
}

$(document).ready(function () {
    init();

});
