$( document ).ready(function() {
    let cartDisplay;

    cartDisplay = window.localStorage.getItem('cartQty');
    $('#cartNumber').empty();
    $('#cartNumber').append(cartDisplay);

});