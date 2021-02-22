import curry from "./curry/index";
import equal from "./equal";
import F from "./F";
import has from "./has";
import isNil from "./isNil";
import or from "./or";
/**
 * Compara se o valor é do mesmo tipo da classe
 *
 * @name is
 * @function
 * @access public
 * @param {*} klass Classe a ser comparado
 * @param {*} target Objeto a ser comparado
 * @return {Boolean} Retorna verdadeiro se tipo for igual
 */
const is = (Klass, target) => {
    if (isNil(target))
        return F();
    if (has('f/is', target))
        return target['f/is'](Klass);
    return or(equal(target.constructor, Klass), target instanceof Klass);
};
export default curry(is);
