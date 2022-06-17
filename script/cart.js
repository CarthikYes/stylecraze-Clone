var parent = document.getElementById('medicine');

    var cart = JSON.parse(localStorage.getItem("cartData"))

    

    function showProducts() {

        cart.map(function (product) {

            var div = document.createElement("div");

            var img = document.createElement("img");



            img.src = product.prod_img;
            img.setAttribute("class","imgsize");


            var product_prize = document.createElement("p");

            product_prize.textContent = product.price;
            product_prize.style.fontSize = "20px"
            // product_prize.style.textAlign = "center"


            var product_name = document.createElement("p")

            product_name.textContent = product.name;
            product_name.style.fontSize = "15px"
            // product_name.style.textAlign = "center"

            var addtocart_btn = document.createElement("button");

            addtocart_btn.innerText = "Add to cart";

            addtocart_btn.onclick = function () {
                addtoCart(product);
            };

            div.append(img, product_name, product_prize)

            parent.append(div);

        });

        var num = document.createElement("h1");
        num.textContent = cart.length;

        var added = document.getElementById("add");
        added.append(num);

        var pr = document.getElementById("add_qunt");

        var total = 0;
        var total_pr = JSON.parse(localStorage.getItem("cartData"));

        total_pr.map(function (total_pr) {
            var curn="";
            for(var i=4;i<total_pr.price.length;i++){
                curn=curn+total_pr.price[i];
            }
            curn=+curn;
            total+=curn;
        });
        pr.append(total);
    }


    showProducts();