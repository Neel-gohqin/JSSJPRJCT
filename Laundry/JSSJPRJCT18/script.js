//BOOK NOW BUTTON
let Sbtn = document.querySelector(".SeconeInner button");
Sbtn.addEventListener("click", () => {
  window.scrollTo({ top:590, behavior: "smooth" });
  // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

const input1Fld = document.querySelector(".USerId");
let DisplayItemAddcart = document.getElementById("DisplayItemAddcart");
let UserAcCollection = document.querySelector(".UserAcCollection");


let Sec2Right= document.querySelector('.Sec2Right')
let Sec2Left = document.querySelector('.Sec2Left')
Sec2Right.style.height='90vh'
Sec2Left.style.height='90vh'

let CartList = DisplayItemAddcart.querySelector("ol"); //Selecting Ol List By default
let popup = document.createElement("span");
let iglogo= document.createElement("img");
iglogo.classList.add("IGLOGO");
iglogo.src = "assets/icons8.png";

popup.classList.add("popUp");
popup.innerText = "Add the items to the cart to Book";
popup.style.opacity = "0";

// const fnpop = ()=>{
  // }
  input1Fld.addEventListener("click", () => {
    if (!DisplayItemAddcart.contains(CartList)) {
      if (!DisplayItemAddcart.contains(popup)) {
        popup.appendChild(iglogo);
        UserAcCollection.appendChild(popup);
        
        requestAnimationFrame(() => {
          Sec2Right.style.transition='height 0.4s ease'
          Sec2Right.style.height='92vh'
          Sec2Left.style.transition='height 0.4s ease'
          Sec2Left.style.height='92vh'
          popup.style.transition = "opacity 0.4s ease";
          popup.style.opacity = "1";
          UserAcCollection.style.paddingBottom = "2px";

          
      });
    }
  }
});


let ServicesList = [
  {
    ServiceName: "Dry Cleaing",
    ServicePrice: "$120.30",
  },
  {
    ServiceName: "Wash % Fold",
    ServicePrice: "$250.06",
  },
  {
    ServiceName: "Ironning",
    ServicePrice: "$450.58",
  },
  {
    ServiceName: "Stain Removal",
    ServicePrice: "$540.03",
  },
  {
    ServiceName: "Leather & Suit Cleaing",
    ServicePrice: "$120.03",
  },
  {
    ServiceName: "Wedding Dress Cleaing",
    ServicePrice: "$1320.39",
  },
];

// Select all service images
let Items = document.querySelectorAll(".services img");
let PriceShowFtbar = document.querySelector(".PriceShowFtbar .Pricetag");
PriceShowFtbar.innerText = "$0.00";
let pc = 0;

Items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (UserAcCollection.contains(popup)) {

      requestAnimationFrame(()=>{

        popup.style.transition = "opacity 0.4s ease";
        popup.style.opacity = "0";
        Sec2Right.style.transition='height 0.4s ease'
        Sec2Right.style.height='90vh'
        Sec2Left.style.transition='height 0.4s ease'
        Sec2Left.style.height='90vh'
        popup.style.transition = "opacity 0.4s ease";
        popup.style.opacity = "1";
      })
      UserAcCollection.removeChild(popup);
    }

    CartList = DisplayItemAddcart.querySelector("ol");
    if (!CartList) {
      document
        .querySelectorAll(".DisplayServices span, .DisplayServices img")
        .forEach((el) => el.remove());
      CartList = document.createElement("ol");
      CartList.classList.add("CartList");
      DisplayItemAddcart.appendChild(CartList);
    }

    if (CartList.children.length === 6) {
      alert("You cant Add more Than 4 Items");
      return;
    }

    let selectedServices = ServicesList[index];
    let TTprice = parseFloat(selectedServices.ServicePrice.replace("$", ""));
    pc += TTprice;
    PriceShowFtbar.innerText = `$${pc}`;
    PriceShowFtbar.innerText = `$${pc.toFixed(2)}`;

    let ListService = document.createElement("li");
    ListService.classList.add("ListLi_Service");
    ListService.setAttribute("data-index", index); // Creating data index for tracking index
    ListService.innerHTML = `<div><span>${selectedServices.ServiceName} </span>  <span>${selectedServices.ServicePrice}</span></div>`;
    CartList.appendChild(ListService); //appending the list in Ol

  });
});

// let itemStatus = document.querySelector('.services span')
let ItemCurrent_Status = document.querySelectorAll(".btnPlz img");
let adplzmz = document.querySelectorAll(".services span");

ItemCurrent_Status.forEach((crrntSts, index) => {
  crrntSts.addEventListener("click", () => {
    if (crrntSts.src.includes("PLZuzzu.png")) {
      crrntSts.src = "assets/miNUZ.png";
      adplzmz[index].style.color = "rgb(216, 81, 81)";
    } else {
      crrntSts.src = "assets/PLZuzzu.png";
      adplzmz[index].style.color = "#0d5b84";
      const itemIndexOn_Remove = index;
      const listItemsRemove = document.querySelectorAll("li");


      listItemsRemove.forEach((listItemsR) => {
        if (parseInt(listItemsR.getAttribute("data-index")) === itemIndexOn_Remove) {
          listItemsR.remove();
          selectedServices = ServicesList[index];
          TTprice = parseFloat(selectedServices.ServicePrice.replace("$", ""));
          pc -= TTprice;
          PriceShowFtbar.innerText = `$${pc.toFixed(2)}`;
        
        }
      });

      if (CartList.children.length === 0) {
        //remove all again reset the elements '
        CartList.remove();
        //Create again the default
        DisplayItemAddcart.innerHTML = `<img src="assets/icons8.png" alt="reset" width='50' height='50' /> 
        <span> No Items Added</span>
        <span> Add Items From The Service bar Showing Left  </span>`;
        pc = 0;
        PriceShowFtbar.innerText = `$0.00`;
      }
    }
  });
});

let OdrBtn = document.getElementById("Order_Button");
let UsrNidput = document.querySelector(".UsrNidF2");

OdrBtn.addEventListener("click", () => {
  if (UsrNidput.value.trim() === "") {
    alert("Please fill out all field ");
    return;
  }
  if (!DisplayItemAddcart.contains(CartList)) {
    alert("Please add items to the cart");
    return;
  }
  //Proceed Transaction
  
  if (!DisplayItemAddcart.contains(popup)) {
    popup.innerText = "Email has been sent succesfully";
    UserAcCollection.style.paddingBottom = "2px";
    popup.style.opacity = "0";
    UserAcCollection.appendChild(popup);

    requestAnimationFrame(() => {
      popup.style.color="green"
      popup.style.transition = "opacity 0.4s ease";
      popup.style.opacity = "1";
      UserAcCollection.style.paddingBottom = "4px";
       Sec2Right.style.transition='height 0.4s ease'
      Sec2Right.style.height='92vh'
        Sec2Left.style.transition='height 0.4s ease'
        Sec2Left.style.height='92vh'
        popup.style.transition = "opacity 0.4s ease";
        popup.style.opacity = "1";
        UserAcCollection.style.paddingBottom = "2px";
    });
  }
    


  setTimeout(()=>{

  window.location.reload()
      
    
  },2200)
});






