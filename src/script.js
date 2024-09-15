setInterval(() => {
  document.querySelector("#bgVideo").style.display = "none";
  document.querySelector("#allBody").style.display = "block"
}, 8000);


let btnclick1 = document.getElementById('clickingBtn1');
let btnclick2 = document.getElementById('clickingBtn2');
let btnclick3 = document.getElementById('clickingBtn3');
let btnclick4 = document.getElementById('clickingBtn4');
let btnclick5 = document.getElementById('clickingBtn5');

let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');
let page5 = document.getElementById('page5');

let condition = 1;

btnclick1.addEventListener("click", function(){
   if (condition === 1) {
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
   }
})

btnclick2.addEventListener("click", function(){
  if (condition === 1) {
   page1.style.display = "none";
   page2.style.display = "block";
   page3.style.display = "none";
   page4.style.display = "none";
   page5.style.display = "none";
  }
})

btnclick3.addEventListener("click", function(){
  if (condition === 1) {
   page1.style.display = "none";
   page2.style.display = "none";
   page3.style.display = "block";
   page4.style.display = "none";
   page5.style.display = "none";
  }
})

btnclick4.addEventListener("click", function(){
  if (condition === 1) {
   page1.style.display = "none";
   page2.style.display = "none";
   page3.style.display = "none";
   page4.style.display = "block";
   page5.style.display = "none";
  }
})

btnclick5.addEventListener("click", function(){
  if (condition === 1) {
   page1.style.display = "none";
   page2.style.display = "none";
   page3.style.display = "none";
   page4.style.display = "none";
   page5.style.display = "block";
  }
})
  