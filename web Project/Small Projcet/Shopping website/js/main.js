/*          <div class="card">
                <div class="card-img">
                    <img src="https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC1200%20004-1.jpg" alt="Product 1">
                </div>
                <div class="card-content">
                    <h2>Red Chief</h2>
                    <p>₹ 3795</p>
                    <p>Red Chief Genuine Leather Mid Ankle Lace Up Casual Shoes For Men |RC1200 004</p>
                    <button>Add to Cart</button>
                </div>
            </div>
*/



function element(ele){

   for (let i = 0; i < ele; i++) {

    let addCard = document.getElementById("addCard");


    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img");

    let img = document.createElement("img");
    img.src = "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC1200%20004-1.jpg";
    img.title = "Casual Shoes";

    cardImg.appendChild(img);
    card.appendChild(cardImg);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");

    let h2 = document.createElement("h2");
    h2.innerText = "Red Chief";

    let h3 = document.createElement("h3");
    h3.innerHTML = "₹ 3795 <span><strike> ₹ 4995</strike></span>";

    let p = document.createElement("p");
    p.innerText = "Red Chief Genuine Leather Mid Ankle Lace Up Casual Shoes For Men |RC1200 004";

    let button = document.createElement("button");
    button.innerText = "Add to Cart";

    cardContent.appendChild(h2);
    cardContent.appendChild(h3);
    cardContent.appendChild(p);
    cardContent.appendChild(button);

    card.appendChild(cardContent);



    addCard.appendChild(card);

};

}


element(100);