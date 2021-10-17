const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};
const refs = {
   startBtn: document.querySelector(`button[data-action="start"]`),
   stopBtn: document.querySelector(`button[data-action="stop"]`),
   body: document.querySelector(`body`),
};
let intervalId = 0;


function makeColor() {
   refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function startChange() {
   intervalId = setInterval(makeColor, 1500);
   refs.startBtn.disabled = "true";
}
    
function stopChange() {
   clearInterval(intervalId);
   refs.startBtn.disabled = "";
}
refs.startBtn.addEventListener("click", startChange);
refs.stopBtn.addEventListener("click", stopChange);

refs.startBtn.setAttribute("style", "font-size: 20px; color: green; padding: 10px;margin-right:10px");
refs.stopBtn.setAttribute("style", "font-size: 20px; color: red; padding: 10px");
