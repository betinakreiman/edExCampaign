var goal = 40000;
var amount = 20000;

function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var startingAmount = 0;
  var id = setInterval(frame, 10);
  var max = Math.round(100 * amount / goal);
  var increment = amount / max;
  
  function frame() {
    if (width >= max) {
      clearInterval(id);
      var number = width.toString() + "%";
      document.getElementById("text").innerHTML = number;
      document.getElementById("money").innerHTML = moneyString(amount);
    } else {
      width++;
      elem.style.width = width + '%';
      var number = width.toString() + "%";
      document.getElementById("text").innerHTML = number;
      startingAmount = startingAmount + increment;
      document.getElementById("money").innerHTML = moneyString(startingAmount);
    }

    
    // document.getElementById("money").innerHTML = moneyString(amount);

  }
}

function moneyString(m) {
  var str = "";
  var max = m.toString().length + 1;
  for (let i = 1; i < max; i++) {
    str = str.concat((m%10).toString());
    m = Math.round(m / 10);
    
    if (i % 3 == 0) {
      str = str.concat(",");
    }
  }
  
  if (max == 4) {
    str = str.substring(0, str.length - 1)
  }
  str = str.concat("$");
  str = str.split("").reverse().join("");
  return str;
  
}