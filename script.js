const imgcolllec = [
  {
    src: "assets/lndryDry.jpg",
    id: "img0",
    class: "img0",
    serviceName: "Press On Here",
    Price: `$${380.01}`,
    serviceNo: "0",
  },

  {
    src: "assets/folding.jpg",
    id: "img1",
    class: "img1",
    serviceName: "Folding On Here",
    Price: `$${603.62}`,
    serviceNo: "1",
  },
  {
    src: "assets/woman-cleaning-sheepskin-with-whisk-broom.jpg",
    id: "img2",
    class: "img2",
    serviceName: "Cleaning wash On Here",

    Price: `$${550.02}`,
    serviceNo: "2",
  },
  {
    src: "assets/sweeping.jpg",
    id: "img3",
    class: "img3",
    serviceName: "Sweeping done Here",
    Price: `$${700.19}`,
    serviceNo: "3",
  },
  {
    src: "assets/press.jpg",
    id: "img4",
    class: "img4",
    serviceName: "Wash On Here",
    Price: `$${120.32}`,
    serviceNo: "4",
  },
];




let iggpdct = document.getElementById("iggpdct");
let iggpdctImg = document.createElement("img");
iggpdctImg.src = imgcolllec[0].src; // setting default image from arrray
iggpdct.appendChild(iggpdctImg);

let dfITPRICE = document.getElementById("TToalAmt");
dfITPRICE.innerText = "$0.00";
let totalPr = 0;

let serViceHead = document.getElementById("serviceheadr"); //getting DeFault headline Item
let servicepara = document.createElement("p"); //setting Default headline item
servicepara.innerText = imgcolllec[0].serviceName; //Default Text set
servicepara.style.fontSize = '1.3rem'; // Corrected font-size property
serViceHead.appendChild(servicepara);

let serVicePriceHd = document.getElementById("serVicePriceHd"); //getting default price head
let serviceparaPrice = document.createElement("p"); //setting Default headline item Price
serviceparaPrice.innerText = imgcolllec[0].Price; //Default Price
serVicePriceHd.appendChild(serviceparaPrice);






const check = () => {
  let addmsge = document.getElementsByClassName("aditm2")[0];
  let lisitint = document.getElementById("lisitint"); ///Getting List Box

  // Ensure a <p> element exists or create one
  let existMessage = document.querySelector(".aditm2 p");
  if (!existMessage) {
    existMessage = document.createElement("p");
  }
  if (lisitint.children.length === 0) {
    existMessage.innerText = "Please add Item First";
    existMessage.style.border = '1px solid #232';
    addmsge.appendChild(existMessage);
  } 
  else if(lisitint.children.length > 0){
    if (check2()) {

      existMessage.innerText = "Thnx for order";
      existMessage.style.border = '1px solid #232';
      existMessage.style.transition=('')

      dfITPRICE.innerText = "$0.00";
      
      addmsge.appendChild(existMessage);          
    } 
  }
};



const check2 = () => {
  const name = document.getElementById("spn").value.trim();
  const email = document.getElementById("spn2").value.trim();
  const phone = document.getElementById("spn3").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill out all fields.");
    return false;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return false;
  }
  
  return true;
};

















let bntsk1 = document.getElementById("btnsk1"); //SkiP Button element
let crntidx = 0; //set to default 0 index for skip button


bntsk1.addEventListener("click", () => {
  crntidx++; //on click its Increase

  //ifCurrent index is Bigger than the length then it should reset to the First image Otherwise it chanegeing the pictures based on Current index

  if (crntidx >= imgcolllec.length) {
    crntidx = 0; // Reset index to Default Image
    iggpdctImg.src = imgcolllec[0].src; // Setting Default image
    servicepara.innerText = imgcolllec[0].serviceName; // Setting Default service name
    serviceparaPrice.innerText = imgcolllec[0].Price; //setting default item price
  } else {
    iggpdctImg.src = imgcolllec[crntidx].src; // Change image
    servicepara.innerText = imgcolllec[crntidx].serviceName; // Update service name
    serviceparaPrice.innerText = imgcolllec[crntidx].Price; // Update service Price
  }
});









 
//Adding Items in Cart
let lisitint = document.getElementById("lisitint"); ///Getting List Box
let AddItmBttn = document.getElementById("btnAdItm");
let boxig = document.querySelector(".boxig");

AddItmBttn.addEventListener("click", () => {
  if (lisitint.children.length >= 5) {
    //It will Check First The List Size
    alert("You can't add more than 5 items!");
    return;
  }

  boxig.style.display = "none";
  lisitint.style.height = "120px";
  lisitint.style.padding = "1px";

  // Get the selected item
  let selectedItem = imgcolllec[crntidx];
  // Create a new row
  let newRow = document.createElement("li");
  newRow.classList.add("liDesgn");

  let serviceName = document.createElement("p");
  serviceName.innerText = selectedItem.serviceName;

  let price = document.createElement("p");
  price.innerText = selectedItem.Price;

  newRow.appendChild(serviceName);
  newRow.appendChild(price);
  lisitint.appendChild(newRow);

  // Check if the 'addmsge' element contains a <p> and remove it
  let addmsge = document.getElementsByClassName("aditm2")[0];
  let existingMessage = addmsge.querySelector("p");
  if (existingMessage) {
    addmsge.removeChild(existingMessage);
  } //else return from block

  let priceValue = parseFloat(selectedItem.Price.replace("$", ""));
  totalPr += priceValue;
  dfITPRICE.innerText = `$${totalPr.toFixed(2)}`;
});
