gsap.to("#box1", { 
    opacity:1 ,// Make the box disappear
    x: 1000,     // Move 100 pixels to the right
    y: 50 ,    // Move 200 pixels down
    duration: 2,   // Animation duration in seconds
    delay: 1,    // Delay before the animation starts
    rotate:360,  // Rotate 360 degrees
    backgroundColor: "blue", // Change background color to blue(It's important to note that hyphenated-names become CamelCaseNames. So instead of "font-size", you'd use "fontSize". "background-color" will be "backgroundColor".)
    //Units GSAP has sensible defaults for units. If you want to set the x property, you can say x: 24 instead of x: "24px" because GSAP uses pixels as the default unit for x. If you want to specify a particular unit you can append the unit value on the end and wrap the value in a string.
    //gsap.to(HTMLelement, {
    //rotation: 360 // default deg
    //rotation: "1.25rad" // use radians instead
    //x: 24 // using px
    //x: "20vw" // use viewport widths instead
  repeat:2,      // Repeat the animation 2 times  + original play
   rotationX: 500, //you can animate 3D properties like rotationX, rotationY, rotationZ (identical to regular rotation),
   borderRadius:"50%",
});
    
 gsap.from("#box2", {     // From method it will take the animation final to initial
    opacity:1 ,// Make the box disappear
    x: 1000,
    y: 50 ,   
    duration: 2,  
    delay: 1,  
    rotate:360,  
    backgroundColor: "blue",
    repeat:-1,     // Infinite Repeats
    yoyo:true ,       // yo yo will reverse the animation on each repeat
  // writing out the transform string
  // transform: "translate(-50%,-50%)"
    xPercent: -50,
    yPercent: -50,  

    

 });
gsap.to("#navbar h2",{
    opacity:1,
    y:10,
    duration:1,
    delay:0.5,
    stagger:1,   // Stagger will apply delay between each element
    
})
let tl = gsap.timeline() //  Timeline will hep to chain multiple animaitons you will observe after the animation of box3 remaining animations will start performing
tl.to("#box3",{
    opacity:1,
    x:300,
    duration:1,
}).to("#box2",{
    opacity:0.5,
    y:100,
})
//Basics Done Lets Move to the Advanced part from page 2 you can see differrent effects 
gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    }
});

//now we can use it like this:
//gsap.effects.fade(".box");

document.querySelectorAll(".box").forEach(function(box) {
  box.addEventListener("mouseenter", function() {
    gsap.effects.fade(this);
  });
});
var degrees = 10;
var tween = gsap.to(".arrow", {
  duration: 4,
  rotation: 360,
  modifiers: {
    rotation: gsap.utils.unitize(function(rotation) {
      //snap to 45 degree increments
      return Math.round(rotation / degrees) * degrees;   
    })
  },
 // in GSAP 3 you can do this instead:
 // snap: {rotation: degrees},
 ease: "none",
 repeat: -1,
})
rotation()