//BOOK NOW BUTTON
let Sbtn = document.querySelector(".SeconeInner button");
Sbtn.addEventListener("click", () => {
  window.scrollTo({ top: 700, behavior: "smooth" });
  // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});


const input1Fld = document.getElementById("USerId");
let DisplayItemAddcart = document.getElementById("DisplayItemAddcart");
let UserAcCollection = document.querySelector('.UserAcCollection')
const CartList = UserAcCollection.querySelector('ul');

let popup = document.createElement('span')
  popup.classList.add("popUp")
  popup.innerText='Add the items to the cart to Book'
  popup.style.opacity='0'
  UserAcCollection.style.paddingBottom = '12px';

input1Fld.addEventListener('click', () => {

    if(CartList){
      return
   
    
    }
    else{

      UserAcCollection.appendChild(popup)
      
      requestAnimationFrame(()=>{
      popup.style.transition='opacity 0.4s ease'
      UserAcCollection.style.transition='padding-Bottom 0.4s ease'
      UserAcCollection.style.paddingBottom = '12px';
        popup.style.opacity='1' 

        
      })
    }
   
});


let Items = document.querySelectorAll('.servicesL img')

Items.forEach(Item => {
  Item.addEventListener('click', () => {
    if(UserAcCollection.contains(popup)){
     
      UserAcCollection.removeChild(popup)
      // DisplayItemAddcart.removeChild(DisplayItemAddcart.querySelector("img")) //remove image
      // DisplayItemAddcart.querySelectorAll("span").forEach(span =>{        
      // DisplayItemAddcart.removeChild(span)})
    
     return true
   
    }
    else{

    console.log('dsd yyy')
     

  }
      
  });
});

    


