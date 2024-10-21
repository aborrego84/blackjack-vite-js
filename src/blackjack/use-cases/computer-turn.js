
import { takeCard,acumulatePoints,createCard,whoWin } from "./index.js";

/**
 * function to execute the turn of the computer
 * @use takeCard, acumulatePoints, create Card
 * @param {Number} points 
 * @param {Array<String>} deck 
 * @param {Array<Number>} playersPoints 
 * @param {DivHtml} divPlayersCards 
 * @param {Array<Label>} pointsLabels 
 * @callback whoWin
 * @returns {Alert} return the result of the game
 */
export const computerTurn = (points, deck, playersPoints,divPlayersCards, pointsLabels) => {
    let computerPoints = 0;
    
        do {
            const card= takeCard(deck);
            
            computerPoints = acumulatePoints(card, playersPoints.length - 1, playersPoints, pointsLabels);//computer
            createCard(card, playersPoints.length - 1, divPlayersCards);//computer
            
            if( points > 21){
                break;
            }
        } while( (computerPoints < 21) && ( computerPoints < points ) );    

    return whoWin( playersPoints );   

}