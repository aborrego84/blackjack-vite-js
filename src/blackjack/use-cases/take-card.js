

/**
 *  function to take a card from the deck
 * @param {Array<String>} deck 
 * @returns {String} return a card from the deck
 */

export const takeCard = (deck) => {
    if(!deck || deck.length === 0){
        throw 'There are no cards in deck';
    }
    return deck.pop();        
}