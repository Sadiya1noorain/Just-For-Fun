// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const text = document.getElementById("text");
const yes = document.querySelector('.yes');
const move = document.querySelector('.no');

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.querySelector('.middle').style.backgroundColor = '#82A0AA';
  document.querySelector('.inner').style.display = 'none';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.querySelector('.middle').style.backgroundColor = '#fff';
  document.querySelector('.inner').style.display = 'contents';
  text.innerHTML = "Are you an Idiot? 🤔";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

move.addEventListener('mouseover', function () {
  modal.style.top = Math.random() * (window.innerHeight / 4) + "px";
  modal.style.left = Math.random() * (window.innerWidth / 4) + "px";
  document.querySelector('.middle').style.backgroundColor = '#82A0AA';
  // document.body.style.backgroundColor = 
});

move.addEventListener('touchstart', function () {
  modal.style.top = Math.random() * (screen.innerHeight / 4) + "px";
  modal.style.left = Math.random() * (screen.innerWidth / 4) + "px";
});

yes.addEventListener('click', function () {
  text.innerHTML = "I knew it!! 😎";
});

