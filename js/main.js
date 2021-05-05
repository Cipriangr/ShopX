
function openLogin(){
  document.getElementById("loginform").style.display = "flex";
  
}

function closeLogin(e){
  document.getElementById("loginform").style.display = "none";

}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    document.getElementById("loginform").style.display = "none";
  }

};


(function(){
  const wishBtn = document.querySelectorAll('.addtowishlist');
  wishBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
      // console.log(event.target);
      if(event.target.parentElement.classList){
        let fullPath = event.target.parentElement.parentElement.nextElementSibling.src;
        let pos = fullPath.indexOf('img')+3;
        let partPath = fullPath.slice(pos);
        const wish ={};
        wish.img = `img-cart${partPath}`
        let name = event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].textContent;
        wish.name= name;
        
        const wishItem = document.createElement("li");
        wishItem.classList.add('wish-item');
        wishItem.innerHTML = `<span class="wish-product-img"><img src="${wish.img}" alt=""></span>
        <div class="item-content"
        <span class="cart-item-name">${wish.name}</span>
      </div> 
      <span class="wish-item-remove" id="wish-item-remove"><img src="img-cart/trash-icon.png"></span>
        `;
        const wishcart = document.getElementById('wishlist-content');
        wishcart.appendChild(wishItem)

        //remove item on click trash icon
        wishItem.querySelector('.wish-item-remove').addEventListener('click', (e) =>{
          const theLI = e.target.parentNode.parentNode
          theLI.remove()
        })

      }
    })
  })

  const cardBtn= document.querySelectorAll('.addtocart');
  cardBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
      // console.log(event.target);
      if(event.target.parentElement.classList.contains('addtocart')){
        let fullPath = event.target.parentElement.parentElement.nextElementSibling.src
        let pos = fullPath.indexOf('img')+3;
        let partPath = fullPath.slice(pos);
        
        const item = {};
        item.img = `img-cart${partPath}`
        let name = event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].textContent;
        item.name = name;
        let price = event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].textContent
        let finalPrice = price.slice(1).trim();
        item.price = finalPrice;
      
        // console.log(item)
        const cartItem = document.createElement("li");
        cartItem.classList.add('the-item');
        cartItem.innerHTML= `
        <span class="cart-product-photo"><img src="${item.img}" alt=""></span>
        <div class="item-content"
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">${item.price}</span>
        </div> 
        <span class="cart-item-remove" id="cart-item-remove"><img src="img-cart/trash-icon.png"></span>
        `;
        //select cart
        const cart = document.getElementById('cart-content');
        const total = document.querySelector('.total-price');

        cart.insertBefore(cartItem, total);
        //remove item on click trash icon
        cartItem.querySelector(".cart-item-remove").addEventListener("click", (e) => {
          const theLI = e.target.parentNode.parentNode;
          theLI.parentNode.removeChild(theLI);
        });
        
        showTotals();
      }
    });
  });


  function deletelement(){
    const removelist = document.querySelector("#cart-item-remove").parentNode;
    const finalremove = removelist.remove()
    console.log(removelist);

  }
  
  //Show total price
  function showTotals(){
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
      total.push(parseFloat(item.textContent));
    })
    const totalMoney = total.reduce(function(total,item){
      total +=item;

      return total;
    }, 0)
    const FinalMoney = totalMoney.toFixed(2)
    document.getElementById('total-price').textContent = FinalMoney;
    document.getElementById('items-number').textContent = total.length;
  }


    //update price
    function updatePrice(){
      const total = [];
      const items = document.querySelectorAll('.cart-item-price');
      items.forEach(function(item){
        total.push(parseFloat(item.textContent));
      })
      const totalMoney = total.reduce(function(total,item){
        total +=item;
  
        return total;
      }, 0)
      const FinalMoney = totalMoney.toFixed(2)
      document.getElementById('total-price').textContent = FinalMoney;
      document.getElementById('items-number').textContent = total.length;
    }
  


})();

$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});



// var x;
// x = 10;
// function test()
// {
//     var x;
//     if (x > 20) {
//         x = 50;
//     }
  
//     console.log(x);
// }
  
// test();

// var a = 10;
// (function() {
//   var a = 15;
//   window.x = function() {
//     alert(a);
//   }
// })();
// x();