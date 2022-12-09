const Ship = (length) => {
  let hits = 0;
  let sunk = false;
  const shipArr = new Array(length); // if breaks later, use let

  for (let i = 0; i < shipArr.length; i += 1) {
    shipArr[i] = undefined;
  }

  const hit = (cords) => {
    shipArr[cords] = 'X';
    hits += 1;
    return { shipArr, hits };
  };

  return {
    // length, // same as hits
    shipArr,
    hit,
    // hits, // maybe does not need to be exposed. (???)
  };
};

/* const shipOne = Ship(3);
console.log(shipOne); */

export { Ship };
