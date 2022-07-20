var typed = new Typed(".auto-text", {
    strings :["Sameer Rao", "Front End Developer", "Sameer Rao"],
    typeSpeed : 100,
    backSpeed : 40,
});
var typeds = new Typed(".auto-text-2", {
    strings :["My Portfolio"],
    typeSpeed : 100,
    backSpeed : 40,
});
var typedss = new Typed(".auto-text-3", {
    strings :["Me, Myself I"],
    typeSpeed : 100,
    backSpeed : 40,
});
var typedsss = new Typed(".auto-text-4", {
    strings :["Skills and  Experience"],
    typeSpeed : 100,
    backSpeed : 40,
});
var typedssss = new Typed(".auto-text-5", {
    strings :["Contact Me"],
    typeSpeed : 100,
    backSpeed : 40,
});

function myFunction() {
    var x = document.querySelector(".main-menu");
    
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block"
  
    }
  }
  function myFunction2(){
    var y = document.querySelector(".main-menu")
    y.style.display = "none"
  }