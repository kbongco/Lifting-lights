function redLightedRed() {
  const redCard = document.getElementsByClassName('red-cards');
  for (let i = 0; i < redCard.length; i++) {
    redCard[i].addEventListener('click', () => {
      console.log('test')
      document.querySelector('.circle-one').style.background = 'red';
    })
  }
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
    modalLink.setAttribute('href', 'http://google.com');
    modalLink.appendChild(document.createTextNode('Card Information'));
    modalLink.style.color = 'white';
    modalLink.style.textDecoration = 'none';
    modalContainerLinks[i].appendChild(modalLink);
  }
}

function resetAllLights() {
  const headRefResetContainer = document.querySelector('.head-ref-reset');
  const resetButton = document.createElement('button');
  headRefResetContainer.appendChild(resetButton);
}

redLightedRed();
createModalLink();
lightUpLights();
resetAllLights();