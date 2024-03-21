import _ from 'underscore';
// Esta función crea un nuevo deck

/** 
 * @param {Array<string>} tiposDeCarta  Ej: ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales  Ej: ['A','J','Q','K'];
 * @returns {Array<String>}
 */



export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta && tiposDeCarta.length === 0) 
        throw new Error('Tipos de carta es obligatorio')

    if (!tiposEspeciales ) 
        throw new Error('Tipos de carta es obligatorio')
   

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;
