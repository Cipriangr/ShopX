function openLogin(){
  document.getElementById("loginform").style.display = "flex";
  
}  

function closeLogin(e){
  document.getElementById("loginform").style.display = "none";
  
}  


$('.search-toggle').on('click', function(){
  $('.search-field').toggleClass('show-search')
})  

$('.search-mobile-btn').on('click', function(){
  $('.search-field-medium').toggleClass('show-search')
})  



document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    document.getElementById("loginform").style.display = "none";
  }  

};  

const cards = [
  {
    image: './img/layer1.png',
    title: 'Statistics table',
    price: '$759.35'
  },
  {
    image: './img/layer2.png',
    title: 'Pen',
    price: '$759.55'
  },
  {
    image: './img/layer3.png',
    title: 'Keyboard',
    price: '$129.55'
  },
  {
    image: './img/layer4.png',
    title: 'Clock',
    price: '$299.99'
  },
  {
    image: './img/layer5.png',
    title: 'Interactive Display',
    price: '$600.95'
  },
  {
    image: './img/layer6.png',
    title: 'Tory Desk Calendar',
    price: '$330.99'
  },
  {
    image: './img/layer7.png',
    title: 'Something nice',
    price: '$759.55'
  },
  {
    image: './img/layer6.png',
    title: 'Something cool too',
    price: '$900.22'
  }
]



const cardsContent = document.querySelector('#cards-content');
const searchInput = document.querySelector('#custom-search');


function renderCards(data){
  let cardElements = '';
  if(data && data.length>0){
    data.forEach(card =>{
      const html = `
      <div class="col-md-3 mb-4">
        <div class="card mb-3 h-100">
          <div class="hover">
              <span class="addtocart">
                <img class="cart-item" src="img/plus.png" alt="#">
              </span>
              <span class="addtowishlist">
                <img src="img/heartred.png" alt="#">
              </span>
          </div>
          <img src="${card.image}" class="card-img-top" alt="#">
          <div class="card-body">
            <h4 class="card-title">${card.title}</h4>
            <p class="card-text">${card.price}</p> 
          </div>
        </div>
      </div>
      `;
      cardElements += html;
    })
  }
  cardsContent.innerHTML = cardElements
};

renderCards(cards)

let filteredCards = []; 

searchInput.addEventListener('keyup', (e)=>{
  if(e.target.value.length >1){
    filteredCards = cards.filter( card => card.title.toLowerCase().includes(e.target.value.toLowerCase()) || card.price.toLowerCase().includes(e.target.value.toLowerCase()));
    renderCards(filteredCards)
  }else{
    renderCards(cards)
  }
});


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
        const wishcontent = document.getElementById('wish-area');
        const wishcart = document.getElementById('wishlist-content');
        const noitem = document.getElementById('no-item')
        wishcart.appendChild(wishItem)

        //remove item on click trash icon
        wishItem.querySelector('.wish-item-remove').addEventListener('click', (e) =>{
          const theLI = e.target.parentNode.parentNode
          theLI.remove()
        })  


          if(wishcart.children.length >=4){
            noitem.style.display = 'none';
          }  
        // const wishcontent = document.getElementById('wish-area');  
        // const wishcart = document.getElementById('wishlist-content');
        // if(wishcart.children.length <=2){
        //   wishcontent.style.display = 'none' ;  
        //   console.log(wishcart.children.length)
        // }
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
        const noitemCart = document.getElementById('no-item-cart')
        const info= document.getElementById('info-price')
        if(cart.children.length >=3){
          noitemCart.style.display = "none"
          info.style.display = "flex";
          
        }  
        if(cart.children.length <3){
          console.log(info)
        
        }  
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
    const totalPrice = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
      totalPrice.push(parseFloat(item.textContent));
    })  
    const totalMoney = totalPrice.reduce(function(totalPrice,item){
      totalPrice +=item;
      
      return totalPrice;
    }, 0)  
    const FinalMoney = totalMoney.toFixed(2)
    document.getElementById('total-price').textContent = FinalMoney;
    document.getElementById('items-number').textContent = totalPrice.length;
  }  
  
  
  
  //update price
  function updatePrice(){
    const items = document.querySelectorAll('.cart-item-price');
    const totalPrice = [];
    items.forEach(function(item){
      totalPrice.push(parseFloat(item.textContent));
    })  
    const totalMoney = totalPrice.reduce(function(totalPrice,item){
      totalPrice +=item;
      
      return totalPrice;
    }, 0)  
    const FinalMoney = totalMoney.toFixed(2)
    document.getElementById('total-price').textContent = FinalMoney;
    document.getElementById('items-number').textContent = totalPrice.length;
  }  
  
  
  //delete items
  
  function deleteItems(){
    
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

// var test1 = {
//   name: 'test',  
//   age: '12'
// }
// var test2 = test1;



// if(test2 == test1){
//   console.log(test2)  
// }else{
//   console.log('eroare')  
// }
// Setup
// Setup



// function phoneticLookup(val) {
//   var result = "";  

//   // Only change code below this line
//   var lookup = {
//       "alpha": "Adams",  
//       "bravo": "Boston",
//       "charlie":"Chicago",
//       "delta": "Denver",
//       "echo":"Easy",
//       "foxtrot":"Frank"
//   }
//   result = lookup[val]
//   // Only change code above this line
//   return result;
// }

// console.log(phoneticLookup("charlie"));


//object exercise
// var contacts = [
//   {
//       "firstName": "Akira",  
//       "lastName": "Laine",
//       "number": "0543236543",
//       "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//       "firstName": "Harry",  
//       "lastName": "Potter",
//       "number": "0994372684",
//       "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//       "firstName": "Sherlock",  
//       "lastName": "Holmes",
//       "number": "0487345643",
//       "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//       "firstName": "Kristian",  
//       "lastName": "Vos",
//       "number": "unknown",
//       "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];


// function lookUpProfile(name, prop) {
//   for (let x = 0; x < contacts.length; x++) {
//     if (contacts[x].firstName === name) {
//       if (contacts[x].hasOwnProperty(prop)) {
//         return contacts[x][prop];  
//       }
//       else{
//         return "No such property";  
//       }
//     }else{
//       return "No such contact";  
//     }
//   }
// }

// lookUpProfile("Akira");

// lookUpProfile("Akira", "likes");

