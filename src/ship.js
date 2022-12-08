const Ship = (length) => {
  let hits = 0;
  let shipArr = new Array(length);
  for (let i = 0; i < shipArr.length; i += 1) {
    shipArr[i] = undefined;
  }
  const hit = (cords) => {
    shipArr[cords] = 'X';
    return shipArr;
  };

  return { length, shipArr, hit, hits };
};

/* const shipTwo = Ship(8);

shipTwo.hit(2);
console.log(shipTwo);
console.log(shipTwo.shipArr.length);
console.log(typeof shipTwo.hits); */

export { Ship };
