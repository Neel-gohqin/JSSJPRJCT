function sendmail() {
    var parm = {
        name: document.getElementById('Name').value,
        email: document.getElementById('Mail').value, // match with your template key
        phone: document.getElementById('phone').value,
        title: "CookCrZy",
        message: 'Order Has dilivered',
    };

    const serviceId = "service_n1kbssb";
    const templateId = "template_51pv37s";


  emailjs.send(serviceId, templateId, parm) 
  .then((res)=>{
    
    alert("mail sent successfully")
    console.log(document.getElementById("Name"))
  
    console.log(res)
  }
)
  .catch((error)=>{
    alert("mail not sent")
    console.log(error)
  }

  )
}
