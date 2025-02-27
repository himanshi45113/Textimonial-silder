const testimonials = [ {
    name: "Samanatha Roberts",
    photoUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Apple's laptops are top-notch, ctivity. Thanks to Apple, I now have the best tool for all my digital needs"

},

{
    name:"Emily Parker",
    photoUrl:"https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"Apple's laptops are sleek, powerful, and innovative. I can't imagine my day without my Apple laptop by my side. The design is modern, the performance is top-notch, and the user experience is unmatched."

},
{
    name:"Alexa Johnoson",
    photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"I am beyond impressed with Apple's sleek and powerful laptop. The design is top-notch, and the performance is unmatched. I highly recommend Apple to anyone in need of a reliable and innovative computing device."
},

];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username")

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const { name, photoUrl, text} = testimonials[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++
    if (idx === testimonials.length){
        idx = 0;
    }
    
    setTimeout(()=>{
updateTestimonial()
    }, 5000)

}