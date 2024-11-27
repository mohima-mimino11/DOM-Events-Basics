// console.log('this is separate JS file');

//option 1: directly set on the html element
// <button onclick="console.log(66)">Another Button</button>

// option 2: add onclick function on the html element
// IMPORTANT: WE WILL USE THIS SOMETIMES
//  <button onclick="makeRed()">Make Red</button>
function makeRed(){
  document.body.style.backgroundColor = 'red';
}

// option 3;
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue; // don't call the function in this case

function makeBlue(){
  document.body.style.backgroundColor = 'blue';
}

//option 3: another

const purpleButton = document.getElementById('make-purple');
// console.log(purpleButton);
purpleButton.onclick = function makePurple(){
  document.body.style.backgroundColor = 'purple';
}

//option 4: 

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink )


function makePink(){
  document.body.style.backgroundColor = 'pink';
}

// option 4: another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click',function makeGreen(){
  document.body.style.backgroundColor = 'green';
})
// option 4: Final
// Important: We will use this sometimes
document.getElementById('make-goldenrod').addEventListener('click',function(){
  document.body.style.backgroundColor = 'goldenrod'
})