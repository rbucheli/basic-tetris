document.addEventListener("DOMConentLoaded", () => {
  const grid = document.querySelector(".grid")
  let squares = Array.from(document.querySelectorAll(".grid div"))
  const ScoreDisplay = document.querySelector("#score")
  const StartBtn = document.querySelector("#start-but")
  const width = 10;

  console.log(squares);
});


// console.log(squares) did not work for me. Why?

// let names = ['Rodrigo', 'Sweeney', 'Sookie']

// names.forEach(name => {
//   console.log(name + ' is the best!')
// })