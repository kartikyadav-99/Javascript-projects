//sabse pehle ye pata karo ke mouse rectangle par aaya nad move hua ya nahi

//ab ye calculate karo ke hum center se left par hai ya center se right par hai.

//ab ye calculate karo ke hum center ke kitna left par hai, jitna left par hai utni intensity se color lagao.


var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
    var rectanglelocation = rect.getBoundingClientRect();
  var insiderectval = details.clientX - rectanglelocation.left;




  if (insiderectval < rectanglelocation.width / 2){
var redcolor = gsap.utils.mapRange(
    0,rectanglelocation.width / 2, 255, 0, insiderectval);

    gsap.to(rect, {
        backgroundColor:`rgb(${redcolor}, 0, 0)`,
        ease: Power4,
        duration: 1
    });

  } else {
    var bluecolor = gsap.utils.mapRange(
        rectanglelocation.width / 2, rectanglelocation.width ,0,255, insiderectval);
    
        gsap.to(rect, {
            backgroundColor:`rgb(0, 0, ${bluecolor})`,
            ease: Power4,
        });
    
  }

});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white",
    });
});
