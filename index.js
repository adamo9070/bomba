function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
function toggle() {
  if ((document.getElementById("image").style.display = "none")) {
    document.getElementById("image").style.display = "block";
    setTimeout(off, 3000);
  }
  function off() {
    document.getElementById("image").style.display = "none";
  }
  //if (document.getElementById("image").style.display == "none") {
  //  document.getElementById("image").style.display = "block";
  //}
  //else {
  //  setTimeout(function () {
  //    document.getElementById("image").style.display = "none";
  //  }, 10000);
  //}
  //else {
  //  document.getElementById("image").style.display = "none";
  //}

  var audio = document.getElementById("audio");
  audio.play();
}
