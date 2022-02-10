var txt = prompt("write something")
var i = 0;
var speed = 20;
function typeWriter() {
    document.getElementById("output").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
