

/**
 * function to create a new card and show it
 * @param {String} card 
 * @param {Number} turn 
 * @param {DivHtml} divPlayersCards 
 * @returns {void} show the card in the screen
 */

export const createCard = (card, turn, divPlayersCards) => {    
    const imgCard = document.createElement('img');    
        imgCard.src =`../../assets/cards/${ card }.png`;//add image
        imgCard.classList.add('card');//add css
        divPlayersCards[turn].append(imgCard); 
}