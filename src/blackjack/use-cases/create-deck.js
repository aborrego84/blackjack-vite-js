
import _ from 'underscore';
/**
 * functiion to create a new deck
 * @param {Array<String>} types Examples ['C', 'D', 'H', 'S'],
 * @param {Array<String>} specials Examples ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} return a new deck
 */
export const createDeck = (types, specials) => {
    
    if(!types || types.length === 0 ) throw new Error ('Card types is required');   
    if(!specials || specials.length === 0) throw new Error ('Card specials is required');
    let deck = [];
    for(let i = 2; i <= 10; i++){
        for(let type of types ){
            deck.push( i + type );
        }
    }
    for(let special of specials){
        for(let type of types){
            deck.push( special + type);
        }
    }    
    //console.log(deck);
    return _.shuffle(deck);//Shuffle deck, random order        
}