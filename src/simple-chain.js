const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    this.arr = this.arr ?? [];
    return this.arr.length;
  },

  addLink(value) {
    this.arr = this.arr ?? [];
    this.arr.push(value);
    return this;
  },

  removeLink(position) {
    this.arr = this.arr ?? [];
    if (!Number.isInteger(position) || --position < 0 || position >= this.arr.length) {
      delete this.arr;
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position, 1);
    return this;
  },

  reverseChain() {
    this.arr = this.arr ?? [];
    this.arr.reverse();
    return this;
  },

  finishChain() {
    this.arr = this.arr ?? [];
    const str = this.arr.map((value) => `( ${value} )`).join('~~');
    delete this.arr;
    return str;
  },
};

module.exports = {
  chainMaker,
};
