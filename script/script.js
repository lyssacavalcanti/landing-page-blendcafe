const btn = document.getElementById("btn")
const nav = document.getElementById("nav")
const contactBlendCafe = "{{9797979797}}";
const userMessage = "{{ Olá! Gostaria de obter mais informações sobre a Blend Café, por favor. }}";


btn.addEventListener("click",() => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});

function getLinkWhastapp(number, message) {
    number = contactBlendCafe
    message = userMessage.split(' ').join('%20')
  
    return console.log('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
  }
  
  getLinkWhastapp()