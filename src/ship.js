const Ship = (length) => {
  let hits = 0;
  let sunk = false;

  const isSunk = () => {
    if (hits >= length) {
      sunk = true;
    }
    return sunk;
  };

  const hit = () => {
    hits += 1;
    isSunk();
    return { hits, sunk }; // shipArr maybe
  };

  return {
    hit,
    sunk, // maybe don't need this
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Ship };
