//your JS code here. If required.

let text = document.getElementById("text");
let delay = document.getElementById("delay");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

btn.addEventListener("click", async function (e) {
  e.preventDefault();

  output.textContent = ""; 

  let message = text.value;
  let time = Number(delay.value);


  await wait(time);


  output.textContent = message;
});
