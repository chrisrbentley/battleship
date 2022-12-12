const Ship = (length) => {
  let hits = 0;
  let sunk = false;
  // const shipArr = new Array(length); // if breaks later, use let

  // shipArr.fill(`Ship ${length}`);

  const isSunk = () => {
    if (hits >= length) {
      sunk = true;
    }
    return sunk;
  };

  const hit = () => {
    // cords ^
    // shipArr[cords] = 'X';
    hits += 1;
    isSunk();
    return { hits, sunk }; // shipArr maybe
  };

  return {
    // length, // same as hits
    // shipArr, ***
    hit,
    sunk, // maybe don't need this
    // hits, // maybe does not need to be exposed. (???)
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Ship };
