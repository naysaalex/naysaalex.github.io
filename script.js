var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
	this.classList.toggle("click");
	navlist.classList.toggle("open");
});

document.getElementById('button').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'none';
});


const bar = document.querySelector('.bar');
const arrowIcon = document.getElementById('arrow-icon');
// const accordian = document.getElementById('accordian');

// Add a click event listener to the bar
bar.addEventListener('click', function() {
  // Toggle the rotation class
  arrowIcon.classList.toggle('rotate');
  // accordian.classList.toggle('active')
});


const bar = document.querySelector('.bar');
const arrowIcon1 = document.getElementById('arrow-icon1');

// Add a click event listener to the bar
bar.addEventListener('click', function() {
  // Toggle the rotation class
  arrowIcon1.classList.toggle('rotate');
});


const bar = document.querySelector('.bar');
const arrowIcon2 = document.getElementById('arrow-icon2');

// Add a click event listener to the bar
bar.addEventListener('click', function() {
  // Toggle the rotation class
  arrowIcon2.classList.toggle('rotate');
});










