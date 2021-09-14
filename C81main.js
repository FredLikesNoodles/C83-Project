canvas = document.getElementById("mycanvas");
 ctx= canvas.getContext("2d");
  color = "red";
 width=3;
 var lpx, lpy;
 old_width = screen.width;
 old_height = screen.height;
 new_width = old_width - 70;
 new_height = old_height - 300;
 if (old_width < 992 ){
 document.getElementById("mycanvas").width=new_width;
 document.getElementById("mycanvas").height=new_height;
 document.body.style.overflow="hidden";

 }
 var mouseEvent = "empty";
 var lpx, lpy;
 canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e){
    mouseEvent = "mouseDown";
 }
 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e){
     mouseEvent = "mouseUp";
 }
 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e){
     mouseEvent = "mouseLeave";
 }
 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
    color = document.getElementById("color_input").value;
    width = document.getElementById("width_input").value;
    cpx = e.clientX - canvas.offsetLeft;
     cpy = e.clientY - canvas.offsetTop;
     
     if(mouseEvent == "mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width;
         ctx.moveTo(lpx, lpy);
         ctx.lineTo(cpx, cpy);
         ctx.stroke();
     }
     lpx = cpx;
     lpy = cpy;
 }
 canvas.addEventListener("touchstart", my_touchstart);
 function my_touchstart(e){
    color = document.getElementById("color_input").value;
    width = document.getElementById("width_input").value;
    lpx=e.touches[0].clientX-canvas.offsetLeft;
    lpy=e.touches[0].clientY-canvas.offsetTop;
 }
 canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e){
     cpx = e.touches[0].clientX - canvas.offsetLeft;
     cpy = e.touches[0].clientY - canvas.offsetTop;
     
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width;
         ctx.moveTo(lpx, lpy);
         ctx.lineTo(cpx, cpy);
         ctx.stroke();
     
     lpx = cpx;
     lpy = cpy;
 }