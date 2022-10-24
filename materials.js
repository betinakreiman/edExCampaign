
function moveUp(i) {
  var id = ".box" + i.toString();
  gsap.to(id, { y: -10, duration: 0.75 });
}

function moveDown(i) {
  var id = ".box" + i.toString();
  gsap.to(id, { y: 1, duration: 0.75 });
}

