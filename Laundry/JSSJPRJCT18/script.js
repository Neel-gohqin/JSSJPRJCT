  //BOOK NOW BUTTON
  let Sbtn = document.querySelector(".SeconeInner button");
  Sbtn.addEventListener("click", () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
    // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });

  const input1Fld = document.getElementById("USerId");
  let DisplayItemAddcart = document.getElementById("DisplayItemAddcart");
  let UserAcCollection = document.querySelector(".UserAcCollection");

  let popup = document.createElement("span");
  popup.classList.add("popUp");
  popup.innerText = "Add the items to the cart to Book";
  popup.style.opacity = "0";
  UserAcCollection.style.paddingBottom = "12px";

  let CartList = DisplayItemAddcart.querySelector("ul");
  CartList = document.createElement("ul");



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
  let Items = document.querySelectorAll(".servicesL img");

  Items.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (UserAcCollection.contains(popup)) {
        UserAcCollection.removeChild(popup);
        UserAcCollection.style.paddingBottom = "12px";
      }
      document.querySelectorAll('.DisplayServices span, .DisplayServices img').forEach(el => el.remove());
      
      if (!CartList) {
        CartList.classList.add("CartList");
        DisplayItemAddcart.appendChild(CartList);
      }

        
      let selectedServices = ServicesList[index];
      let ListService = document.createElement("li");
        ListService.innerHTML = `<span>${selectedServices.ServiceName} </span>  <span>${selectedServices.ServicePrice}</span>`;
        ListService.classList.add("ListLi_Service")
        CartList.appendChild(ListService);
    
      UserAcCollection.style.paddingBottom = "12px";
    });
  });
