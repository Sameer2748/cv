var typeds = new Typed(".auto-text-2", {
    strings :["My Portfolio"],
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