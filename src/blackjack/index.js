import _ from 'underscore';
// import { createDeck as createNewDeck } from './use-cases/create-deck.js'; we can use 
//  import { createDeck } from './use-cases/create-deck.js';
//  import { takeCard } from './use-cases/take-card.js';
//  import { valueCard } from './use-cases/value-card.js';

import { createDeck, takeCard, valueCard, acumulatePoints, whoWin, computerTurn, createCard } from './use-cases/index.js';



//setupCounter(document.querySelector('#counter'))
/**
 * 2C = Two of Clubs(trebols)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */
const myModule = (() => {
  let deck           = [],
      playersPoints   = [];
  const types        = ['C', 'D', 'H', 'S'],
        specials     = ['A', 'J', 'Q', 'K'];



  //reference of html
  const btnGiveCard     = document.querySelector('#btnGiveCard'),
        btnNewGame      = document.querySelector('#btnNewGame'),
        btnIStay        = document.querySelector('#btnIStay'),
        pointsLabels    = document.querySelectorAll('small'),
        divPlayersCards = document.querySelectorAll(".divCards");
      

  //functions 
  const initGame = (numPlayers = 2) => {
      deck = createDeck(types, specials);
      playersPoints = [];
      for( let i = 0; i < numPlayers; i++ ){
          playersPoints.push(0);
      }
      pointsLabels.forEach(el => el.innerText = 0);
      divPlayersCards.forEach( el => el.innerHTML = '' );
      btnGiveCard.disabled = false;
      btnIStay.disabled = false;       
      // pointsLabels[0].innerText = 0;
      // pointsLabels[1].innerText = 0;
      //console.log({ divPlayersCards });
  }

  

  

  // const valueCard = ( card ) => {
  //     const value = card.substr(0, card.length - 1);// cut last letter
  //     console.log({ value }); 
  //     let points = 0;
  //     if ( isNaN( value ) ) {
          //Not a number
  //         if( value === 'A'){
  //             points = 11;
  //         } else {
  //             points = 10;
  //         }

  //     } else {
          //but in js can do that
  //         points = value * 1; //convert to number
          //with casting
          //points += Number( value );
  //     }
  //     return points;
  // }
  //let me try to reduce
  
  //0 = player, 1 = computer
  

  


  
  
  //const value = valueCard(takeCard());
  //valueCard1('10D');
  //valueCard('10D');

  //Events
  btnGiveCard.addEventListener('click', () => {
      let card= takeCard(deck);
      let playerPoint = 0;
      setTimeout(() => {
        playerPoint = acumulatePoints(card, 0, playersPoints, pointsLabels);//write points in html
        createCard(card, 0, divPlayersCards);//write image in html
        
        if( playerPoint > 21 ){
            btnGiveCard.disabled = true;
            btnIStay.disabled = true;
            pointsLabels[0].innerText = playerPoint +' ' + computerTurn(playerPoint, deck, playersPoints,divPlayersCards, pointsLabels);
        } else if( playerPoint === 21 ){
            btnGiveCard.disabled = true;
            btnIStay.disabled = true;
            pointsLabels[0].innerText = '21, Great!!! ' + computerTurn( playerPoint, deck, playersPoints,divPlayersCards, pointsLabels );
        }  
      }, 100);
    });
  btnIStay.addEventListener('click', () => {
      btnGiveCard.disabled = true;
      btnIStay.disabled = true;
      pointsLabels[0].innerText = playersPoints[0] + ' ' + computerTurn( playersPoints[0], deck, playersPoints,divPlayersCards, pointsLabels );
  });
  btnNewGame.addEventListener('click', () => {   
      
      initGame();
      

  });
  return {
      newGame: initGame
  };
})();

