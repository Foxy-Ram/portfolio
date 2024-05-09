function continuousTypeWriter(text, speed) {
    let i = 0;
    const titleElement = document.getElementById("dot_typing_for_title");

    function type() {
      if (i < text.length) {
        titleElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(disappear, speed * 2);
      }
    }

    function disappear() {
      if (i > 0) {
        titleElement.innerHTML = text.substring(0, i - 1);
        i--;
        setTimeout(disappear, speed / 2);
      } else {
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Text for the title
  const titleText = "...";

  // Call the continuousTypeWriter function
  continuousTypeWriter(titleText, 200);



//Custom Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function(e){
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  /* cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`; */

  cursorOutline.animate({ left:`${posX}px`, top: `${posY}px`},
  
                        {duration:1000,fill:"forwards"});

})
