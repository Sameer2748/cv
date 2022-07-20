
// var scriptSrc = './js/index.js';
// if (screen.width <= 500)
//    scriptSrc = './js/index-412.js';
// else if (screen.width <= 1024)
//   scriptSrc = './js/index.js';


var loader = document.querySelector('#loader')
var a = document.querySelector('.link')
var navToggle = document.querySelector('#toggle')


console.log(a);

a.addEventListener("click", loading)


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


// ScrollReveal({ 
//     reset: true ,
//     distance: '60px',
//     duration: 1000,
//     delay: 400
// });

// ScrollReveal().reveal('.main-menu', { delay: 50, origin: 'left' });
// ScrollReveal().reveal('.text-box', { delay: 300, origin: 'top' , interval:200});
// ScrollReveal().reveal('.user-img', { delay: 500, origin: 'right' });
// ScrollReveal().reveal('.btn', { delay: 500, origin: 'bottom' });
// ScrollReveal().reveal('.scroll', { delay: 500, origin: 'right' });

// sphere



const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];
const myTaags =[
    'kalpana', 'CSS', 'HTML',
    'C', 'C++', 'sameer',
    'harish', 'Java', 'git',
    'django', 'manish.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];



if (screen.width <= 500) {

var tagCloud = TagCloud('.content', myTaags,{
    // radius in px
  radius: 160,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
})
}
else{
    var tagCloud = TagCloud('.content', myTaags,{
        // radius in px
      radius: 300,
    
      // animation speed
      // slow, normal, fast
      maxSpeed: 'fast',
      initSpeed: 'fast',
    
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      
      // interact with cursor move on mouse out
      keep: true
    })
}


var tagClouds = TagCloud('.content-2', myTags,{

  // radius in px
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];

document.querySelector('.content').style.color = "#08fdd8";

document.querySelector('.content-2').style.color = "#08fdd8"


function loading() {

    setTimeout(() => {
        loader.className += " active";
    }, 0);
    setTimeout(() => {
        loader.className -= " active"
    }, 1800);
    
}


function myFunction() {
    var x = document.querySelector(".main-menu");
    var z = document.querySelector(".closetoggle")
    
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block"
        z.style.visibility = "visible"

    }
  }
function myFunction2(){
    var y = document.querySelector(".main-menu")
    y.style.display = "none"
    z.style.visibility = "hidden"
}