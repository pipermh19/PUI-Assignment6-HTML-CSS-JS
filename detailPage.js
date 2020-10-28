$( document ).ready(function() {
    let glazeValue;
    let qty;
    let cartValue;
    let storageNum;
    let cartDisplay;


    cartDisplay = window.localStorage.getItem('cartQty');
    if (cartDisplay){
        cartValue = parseInt(cartDisplay);
    } else{
        cartValue = 0;
    }

    $('#cartNumber').empty();
    $('#cartNumber').append(cartDisplay);

    let productDetails = [
        {
            "description": "Cinnamon wrapped in our original smooth, tender dough.",
            "image": "images/original2.jpg",
            "key": "Plain"
        },
        {
            "description": "Cinnamon wrapped in our original smooth, tender dough. Smothered in our famous cream cheese frosting",
            "image": "images/vanillaCinRoll.jpg",
            "key": "Vanilla"
        },
        {
            "description": "Cinnamon wrapped in our original smooth, tender dough.Smothered in our famous chocolate cream cheese frosting",
            "image": "images/chocolateCinRol.jpg",
            "key": "Chocolate"
        },
    ]


// onchange of selector... grabs value
    $('select#glazeType').on('change', function() {
        glazeValue = this.value;
        for(let i=0; i<productDetails.length; i++) {
            if(productDetails[i].key == glazeValue) {
                $('.productVerbage').empty();
                $('.productVerbage').append(productDetails[i].description)
                $("img.productImage").attr('src' , productDetails[i].image);
            }
        }
    });

    $('select#pastryQty').on('change', function() {
        qty = parseInt(this.value);
    });

    $('#qtySubmitButton').on('click', function() {
        if(qty === undefined){
            $('#alertMessage').empty();
            $('.alert-danger').removeClass("none");
            $('#alertMessage').append("Please select a QTY to add")
            setInterval(function () {
                $('.alert').addClass("none")
            }, 5000);
        }
        else if (qty !== undefined) {
            $('#cartMessage').empty();
            if (glazeValue == undefined || glazeValue == "Plain") {
                glazeValue = 'no';
            }
            $('.alert-success').removeClass("none");
            $('#cartMessage').append("Success! " + qty + " cinnamon rolls with " + glazeValue + " frosting have been added to your cart")
            setInterval(function () {
                $('.alert').addClass("none")
            }, 5000);
        }
        cartValue += qty;
        storageNum = cartValue.toString();
        console.log("The Cart Value" + cartValue);
        window.localStorage.setItem('cartQty', storageNum);
        cartDisplay = window.localStorage.getItem('cartQty');
        $('#cartNumber').empty();
        $('#cartNumber').append(cartDisplay);
    });
});




