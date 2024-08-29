document.getElementById("contactForm").addEventListener("submit",function(e) {
    e.preventDefault(),e=new FormData(this),fetch("send_email.php", {
        method:"POST",body:e
    })
    .then(e=>e.text()).then(e=> {
        document.getElementById("confirmationMessage").style.display="block",document.getElementById("contactForm").reset()
    })
    .catch(e=>console.error("Erreur:",e))
});