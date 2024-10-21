
import { valueCard } from './';


/**
 * function return the points of the player and show it
 * @param {String} card 
 * @param {Number} turn 
 * @param {Array<Number>} playersPoints 
 * @param {Array<Label>} pointsLabels 
 * @returns return the points of the player and show it
 */
export const acumulatePoints = ( card, turn, playersPoints, pointsLabels) => {
    playersPoints[turn] = playersPoints[turn] + valueCard(card);
    pointsLabels[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
}