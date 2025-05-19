//BOOK NOW BUTTON
let Sbtn = document.querySelector(".SeconeInner button");
Sbtn.addEventListener("click", () => {
  window.scrollTo({ top: 700, behavior: "smooth" });
  // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

const input1Fld = document.getElementById("USerId");
let DisplayItemAddcart = document.getElementById("DisplayItemsAdd");



input1Fld.addEventListener('click', () => {

    DisplayItemAddcart.removeChild(DisplayItemAddcart.querySelector("img")) //remove image
    DisplayItemAddcart.querySelectorAll("span").forEach(span =>{        
    DisplayItemAddcart.removeChild(span)
        //getting all span and remove
     })
    let listItem = DisplayItemAddcart.document.createElemt('ul');
});


 

// let arr = [ 1, 2,3,4,5,6,7,8,9,10,11];
//  arr.filter((n)=>{
//     if(n>8){
//         return true
//     }
//     return false
// }),
// console.log(arr);
