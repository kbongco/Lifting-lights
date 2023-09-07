const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const redButton = document.querySelectorAll('.red-card button');
const blueButton = document.querySelectorAll('.blue-card button');
const yellowButton = document.querySelectorAll('.yellow-card button')
console.log(blueButton);

// function redLightedRed() {
//   const redCard = document.getElementsByClassName('red-cards');
//   for (let i = 0; i < redCard.length; i++) {
//     redCard[i].addEventListener('click', () => {
//       console.log('test')
//       document.querySelector('.circle-one').style.background = 'red';
//     })
//   }
// }
function redLighted(id) {
  console.log('this works')
}

function lightUpLights() {
  const whiteCard = document.getElementsByClassName('white-card');
  for (let i = 0; i < whiteCard.length; i++){
    whiteCard[i].addEventListener('click', () => {
      document.querySelector('.circle-one').style.background = 'white';
    })
  }
}

function createModalLink() {
  const modalContainerLinks = document.getElementsByClassName('modal-link-container');
  for (let i = 0; i < modalContainerLinks.length; i++){
    const modalLink = document.createElement('a');
    modalLink.setAttribute('href', '#');
    console.log(modalLink);
    modalLink.appendChild(document.createTextNode('Card Information'));
    modalLink.classList.add('trigger');
    console.log(modalLink);
    modalLink.style.color = 'white';
    modalLink.style.textDecoration = 'none';
    modalContainerLinks[i].appendChild(modalLink);
  }
}

function resetAllLights() {
  const headRefResetContainer = document.querySelector('.head-ref-reset');
  const resetButton = document.createElement('button');
  resetButton.appendChild(document.createTextNode('Reset Lights'));
  resetButton.addEventListener('click', () => {
    document.querySelector('.circle-one').style.background = 'grey';
  })
  headRefResetContainer.appendChild(resetButton);
}

function showModal() {
  modal.classList.toggle("show-modal");
}

// redLightedRed();
createModalLink();
lightUpLights();
resetAllLights();
trigger.addEventListener('click', showModal);
redLighted(id);