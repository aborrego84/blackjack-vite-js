

/**
 * function to get the value of the card
 * @param {String} card 
 * @returns {Number} return the value of the card
 */

export const valueCard = ( card ) => {
    if(!card) throw new Error ('Card is required');
    const value = card.substr(0, card.length - 1);// cut last character
    return ( !isNaN( value ) ) ? value * 1 
            : (value === 'A') ? 11 : 10;
}