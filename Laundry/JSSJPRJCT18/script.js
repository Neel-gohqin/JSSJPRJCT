//BOOK NOW BUTTON
let Sbtn = document.querySelector(".SeconeInner button");
Sbtn.addEventListener("click", () => {
  window.scrollTo({ top: 700, behavior: "smooth" });
  // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});


const input1Fld = document.getElementById("USerId");
let DisplayItemAddcart = document.getElementById("DisplayItemAddcart");
let Sec2Right = document.querySelector('.Sec2Right')
const CartList = Sec2Right.querySelector('ul'); 
let popup = document.createElement('span')

input1Fld.addEventListener('click', () => {

    if(CartList){
       DisplayItemAddcart.removeChild(DisplayItemAddcart.querySelector("img")) //remove image
       DisplayItemAddcart.querySelectorAll("span").forEach(span =>{        
       DisplayItemAddcart.removeChild(span)  
      })
    }
    else{
      popup.innerText='Add items'
      popup.classList.add("popUp")
      Sec2Right.appendChild(popup)
    }
   
});


let Fn = ()=>{
  const listNg_Items = document.createElement('ul')
} 
 

