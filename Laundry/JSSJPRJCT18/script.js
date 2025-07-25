//BOOK NOW BUTTON
let Sbtn = document.querySelector(".SeconeInner button");
Sbtn.addEventListener("click", () => {
  window.scrollTo({ top: 700, behavior: "smooth" });
  // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

const input1Fld = document.getElementById("USerId");
let DisplayItemAddcart = document.getElementById("DisplayItemAddcart");
let UserAcCollection = document.querySelector(".UserAcCollection");
let CartList = DisplayItemAddcart.querySelector("ul");

let popup = document.createElement("span");
popup.classList.add("popUp");
popup.innerText = "Add the items to the cart to Book";
popup.style.opacity = "0";
UserAcCollection.style.paddingBottom = "12px";

input1Fld.addEventListener("click", () => {
  if (!DisplayItemAddcart.contains(CartList)) {
    if (!DisplayItemAddcart.contains(popup)) {
      UserAcCollection.appendChild(popup);

      requestAnimationFrame(() => {
        popup.style.transition = "opacity 0.6s ease";
        UserAcCollection.style.paddingBottom = "0px";
        popup.style.opacity = "1";
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
CartList = DisplayItemAddcart.querySelector("ol");
let PriceShowFtbar = document.querySelector(".PriceShowFtbar .Pricetag");
PriceShowFtbar.innerText = "$0.00";
let pc = 0;

Items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (UserAcCollection.contains(popup)) {
      UserAcCollection.removeChild(popup);
      UserAcCollection.style.paddingBottom = "12px";
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

    if (CartList.children.length >= 6) {
      alert("You cant Add more Than 6 Items");
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
    ListService.innerHTML = `<span>${selectedServices.ServiceName} </span>  <span>${selectedServices.ServicePrice}</span>`;
    CartList.appendChild(ListService);

    UserAcCollection.style.paddingBottom = "12px";
  });
});

// let itemStatus = document.querySelector('.services span')
let ItemCurrent_Status = document.querySelectorAll(".btnPlz img");
let defaultImg = "assets/PLZuzzu.png";

ItemCurrent_Status.forEach((crrntSts, index) => {
  crrntSts.addEventListener("click", () => {
    if (crrntSts.src.includes("PLZuzzu.png")) {
      crrntSts.src = "assets/miNUZ.png";
    } else {
      crrntSts.src = "assets/PLZuzzu.png";
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

      if(CartList.children.length===0){
        //remove all again reset the elements '
        CartList.remove();
        //Create again the default 
        DisplayItemAddcart.innerHTML=`<img src="assets/icons8.png" alt="reset" width='50' height='50' /> 
        <span> No Items Added</span>
        <span> Add Items From The Service bar Showing Left  </span>`
     pc=0;
      PriceShowFtbar.innerText = `$0.00`;
      }
  
    }
  });


});
