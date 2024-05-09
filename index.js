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