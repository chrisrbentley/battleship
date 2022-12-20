const Ship = (length) => {
  let hits = 0;
  let sunk = false;

  const isSunk = () => {
    if (hits >= length) {
      sunk = true;
    }
    console.log('sunk!!!');
    return sunk;
  };

  const hit = () => {
    hits += 1;
    console.log('hit!!!');
    isSunk();
    return { hits, sunk };
  };

  return {
    get hits() {
      return hits;
    },
    get sunk() {
      return sunk;
    },
    hit,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Ship };
