const product = [
    {
        id: 0,
        title: "Product 1",
        price: 30,
    },
    {
        id: 1,
        title: 'Product 2',
        price: 30,
    },
    {
        id: 2,
        title: 'Product 3',
        price: 60,
    },
    {
        id: 3,
        title: 'Product 4',
        price: 60,
    },

    {
        id: 4,
        title: 'Product 5',
        price: 60,
    },

    {
        id: 5,
        title: 'Product 6',
        price: 60,
    },
]

let cart = [];

let hoeveelheid = 0;

function addtocartID(ID){

    let huidigProduct = product[ID];

    if (product > 0)
    {
        cart.innerHTML = cart.title + "x" + hoeveelheid++
    }
    else
    {
        cart.push(huidigProduct);
    }
    displaycart();
}


function displaycart(){

    document.getElementById("count").innerHTML=cart.length;
    let htmlCart = document.getElementById("cart");
    htmlCart.innerHTML = "";
    if(cart.length > 0) {
        //createElement in je cart

        for(let i = 0; i < cart.length; i++){
            let htmlCartItem1 = document.createElement("p");
            htmlCartItem1.innerHTML = cart[i].title + "   =   " + cart[i].price + "€";

            htmlCart.appendChild(htmlCartItem1);
            htmlCartItem1.style.backgroundColor = "#FFF5EA";
            htmlCartItem1.style.height = "2rem";
            htmlCartItem1.style.borderRadius = "5px";
            htmlCartItem1.style.paddingTop = "0.8rem";
            htmlCartItem1.style.marginTop = "0.8rem";

        }

    }

    else
    {
        htmlCart.innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
}

