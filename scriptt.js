
function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const button = document.getElementById("change-text-btn");
  
 
  welcomeText.innerText = "JavaScript is Dynamic and Fun!";
  
 
  welcomeText.classList.add("pulse-animation");
  
  
  button.style.backgroundColor = getRandomColor();
}


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
