gsap.to("#box1", { 
    opacity:1 ,// Make the box disappear
    x: 1000,     // Move 100 pixels to the right
    y: 50 ,    // Move 200 pixels down
    duration: 2,   // Animation duration in seconds
    delay: 1,    // Delay before the animation starts
    rotate:360,  // Rotate 360 degrees
    backgroundColor: "blue", // Change background color to blue (must be double quotes and backgroundColor must be camel case)
    repeat:2,      // Repeat the animation 2 times  + original play
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
    yoyo:true   // yo yo will reverse the animation on each repeat
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