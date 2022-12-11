import { Ship } from './ship';

const Gameboard = () => {
  function createArray(length) {
    const arr = new Array(length || 0);
    let i = length;

    if (arguments.length > 1) {
      const args = Array.prototype.slice.call(arguments, 1);
      while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
  }

  const board = createArray(10, 10);

  return { board };
};

const gameboard = Gameboard();
console.log(gameboard);

// const test = createArray(10, 10);
// console.log(test);

// createArray(10, 10);

// eslint-disable-next-line import/prefer-default-export
export { Gameboard };
