

var prevScrollpos = window.scrollY;  // Track scroll position

window.onscroll = function() {
  var currentScrollPos = window.scrollY;  // Get the current scroll position
  
  // Handling navigation visibility and styles based on scroll position
  if (currentScrollPos < 400) {
    document.getElementById("navhad").style.top = "-130px";
    document.getElementById("useruc").style.display = "none";
    document.getElementById("navhad").style.background = "black";
    document.getElementById("navlis").style.display = "flex";
    document.getElementById("navhad").style.backdropFilter = "blur(10px)";
  } else {
    document.getElementById("navhad").style.top = "0px";
    document.getElementById("navhad").style.backdropFilter = "blur(12px)";
    document.getElementById("navlis").style.display = "none";
    document.getElementById("navhad").style.background = "transparent";
    document.getElementById("useruc").style.display = "block";
  }

  if (currentScrollPos <1625) {
    document.getElementById("allhead").style.opacity = "0";  // Faded out
  } else {
    document.getElementById("allhead").style.opacity = "1";  // Fully visible
  }

  prevScrollpos = currentScrollPos;
};


  
///On window Load | Window Reload 
window.onload = function() {

  let namesheadnme =  document.getElementById("nameheadFname");
    namesheadnme.style.opacity="1";


  let nameheadLnm =document.getElementById("nameheadLnm");
    nameheadLnm.style.opacity="1";
  

  let nameft= document.querySelector(".linksacc h2");
    nameft.classList.remove('showh2lnk')
    nameft.classList.add('h2up')

  let licksal = document.querySelector('.linksacc .linkaccll');
    licksal.style.opacity ='1';
    

  let efctprojct = document.getElementById('pjbxa'); 
  efctprojct.classList.add('pjbx'); 
  efctprojct.classList.remove('pjbxHidden');  
}








