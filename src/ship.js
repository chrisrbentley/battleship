const Ship = (length) => {
  let hits = 0;
  let sunk = false;

  const isSunk = () => {
    if (hits >= length) {
      sunk = true;
      console.log('sunk!!!');
    }
    return sunk;
  };

  const hit = () => {
    hits += 1;
    console.log('hit!!!');
    isSunk();
    return { hits, sunk }; // shipArr maybe
  };

  return {
    hit,
    hits,
    sunk, // maybe don't need this
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Ship };
