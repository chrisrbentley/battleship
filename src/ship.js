const Ship = (length) => {
  let hits = 0;
  let sunk = false;
  const shipArr = new Array(length); // if breaks later, use let

  for (let i = 0; i < shipArr.length; i += 1) {
    shipArr[i] = undefined;
  }

  const isSunk = () => {
    if (hits >= length) {
      sunk = true;
      console.log('Ship is sunk');
    }
    return sunk;
  };

  const hit = (cords) => {
    shipArr[cords] = 'X';
    hits += 1;
    isSunk();
    return { shipArr, hits, sunk };
  };

  return {
    // length, // same as hits
    shipArr,
    hit,
    // hits, // maybe does not need to be exposed. (???)
  };
};

export { Ship };
