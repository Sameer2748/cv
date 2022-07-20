console.log("hii bout.js");

function radius() {}

document.querySelector(".content-2").style.color = "#08fdd8";

console.log("content-2");

const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "C",
  "C++",
  "React",
  "Python",
  "Java",
  "git",
  "django",
  "Node.js",
  "OpenCV",
  "GCP",
  "MySQL",
  "jQuery",
];

if (screen.width <= 500) {
  var tagCloud = TagCloud(".content-2", myTags, {
    // radius in px
    radius: 160,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
  });
} else {
  var tagCloud = TagCloud(".content-2", myTags, {
    // radius in px
    radius: 300,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
  });
}

//To change the color of text randomly
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];

function myFunction() {
  var x = document.querySelector(".main-menu");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction2() {
  var y = document.querySelector(".main-menu");
  y.style.display = "none";
}
