//ek div banao aur uspar jab mouse chale to picture pop ho jaye aur fir dafa ho jaaye.

//humara mouse jab chal raha hai, to kai baar chal raha hai jiske wajah se kai baar card create ho jaayega and wo hum nahi chahte.
//mouse jitni baar chal raha hai chale bas execution of function kam baar ho.

//throttling - kisi particular code ke no. of execution ko kam kar dena. 





const throttleFunction = (func , delay) =>{
let prev = 0;
return (...args) => {
    let now = new Date().getTime();
    if(now - prev > delay){
        prev = now;
        return func(...args);
     }
  };
};




document.querySelector('#center')
.addEventListener("mousemove", throttleFunction((dets) => {

     var div = document.createElement("div");

    div.classList.add('imagediv');
    div.style.left = dets.clientX+'px';
    div.style.top = dets.clientY+'px';


    var img = document.createElement("img");
    img.setAttribute("src" , "https://images.unsplash.com/photo-1698180596425-5322c69dd5d8?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    div.appendChild(img);


    document.body.appendChild(div);
    gsap.to(img,{
        y:"0",
        ease: Power1,
        duration: .6
    });

    gsap.to(img,{
        y:"100%",
        delay: .6,
        ease: Power2,
        
    });



    setTimeout(function(){
        div.remove();

    }, 2000)
    
   },400)
);



//haar baar ek div banao
//div ko absolute banao ek width and height do overflow hidden karo
//and div ke ander image banao and us image ko neeche push kardo 
//image ko animated way mein upar laao
