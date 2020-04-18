var button = document.querySelectorAll(".container button");
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  })
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  makeAnimation(event.key);
})

function makeAnimation(koi) {
  var activeKey = document.querySelector("." + koi);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}

function makeSound(key) {
  switch (key) {

    case "a":
    var a = new Audio("Sounds/ari.mp3");
    a.play();
    break;

    case "b":
    var b = new Audio("Sounds/checkIt.mp3");
    b.play();
    break;

    case "c":
    var c = new Audio("Sounds/congrats.mp3");
    c.play();
    break;

    case "d":
    var d = new Audio("Sounds/dadandan.mp3");
    d.play();
    break;

    case "e":
    var e = new Audio("Sounds/feintoDeshita.mp3");
    e.play();
    break;

    case "f":
    var f = new Audio("Sounds/fuck you.mp3");
    f.play();
    break;

    case "g":
    var g = new Audio("Sounds/goldExp.mp3");
    g.play();
    break;

    case "h":
    var h = new Audio("Sounds/hi.mp3");
    h.play();
    break;

    case "i":
    var i = new Audio("Sounds/itslike.mp3");
    i.play();
    break;

    case "j":
    var j = new Audio("Sounds/gudjob.mp3");
    j.play();
    break;

    case "k":
    var k = new Audio("Sounds/kimoi.mp3");
    k.play();
    break;

    case "l":
    var l = new Audio("Sounds/letme.mp3");
    l.play();
    break;

    case "m":
    var m = new Audio("Sounds/moanV.mp3");
    m.play();
    break;

    case "n":
    var n = new Audio("Sounds/nigga.mp3");
    n.play();
    break;

    case "o":
    var o = new Audio("Sounds/osuwari.mp3");
    o.play();
    break;

    case "p":
    var p = new Audio("Sounds/nyanya.mp3");
    p.play();
    break;

    case "q":
    var q = new Audio("Sounds/owo.mp3");
    q.play();
    break;

    case "r":
    var r = new Audio("Sounds/repeato.mp3");
    r.play();
    break;

    case "s":
    var s = new Audio("Sounds/sugoi.mp3");
    s.play();
    break;

    case "t":
    var t = new Audio("Sounds/tuturu.mp3");
    t.play();
    break;

    case "u":
    var u = new Audio("Sounds/urusaii.mp3");
    u.play();
    break;

    case "v":
    var v = new Audio("Sounds/wtf.mp3");
    v.play();
    break;

    case "w":
    var w = new Audio("Sounds/wow.mp3");
    w.play();
    break;

    case "x":
    var x = new Audio("Sounds/xmoan.mp3");
    x.play();
    break;

    case "y":
    var y = new Audio("Sounds/yoJosuke.mp3");
    y.play();
    break;


    case "z":
    var z = new Audio("Sounds/Zawarudo.mp3");
    z.play();
    break;

    default:
    var all = new Audio("Sounds/allkey.mp3");
    all.play();
  }
}
