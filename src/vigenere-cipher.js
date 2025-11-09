const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.reverse = !direct;
  }

  encrypt(str, key, mul = 1) {
    if (str === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    key = key.toUpperCase().split('').map((char) => char.charCodeAt(0) - 65);
    let p = -1
    const arr = str.toUpperCase().split('').map((char) => {
      let code = char.charCodeAt(0) - 65;
      if (code < 0 || code > 25) return char;
      p++;
      if (p === key.length) p = 0;
      code += key[p] * mul
      code = code < 0 ? code + 26 : code % 26;
      return String.fromCharCode(code + 65);
    });
    if (this.reverse) arr.reverse();
    return arr.join('');
  }

  decrypt(str, key) {
    return this.encrypt(str, key, -1);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
