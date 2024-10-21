
/**
 * function to return the result of the game (win, draw, lose)
 * @param {Array<Number>} playersPoints 
 * @returns {Alert} return the result of the game
 */

export const whoWin = (playersPoints) => {
      const [points, computerPoints] = playersPoints;
      setTimeout(() => {
          const message = (computerPoints === points) ? 'Draw' 
                  : (points > 21) ? 'You lose' 
                  : (computerPoints > 21) ? 'You win' 
                  : (points > computerPoints) ? 'You win' : 'You lose';

      alert(message);
      }, 100 );
  }