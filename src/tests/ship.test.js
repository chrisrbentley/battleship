/* eslint-disable */
import { Ship } from '../ship';

test('Factory function to create ship object with correct array length.', () => {
  expect(Ship(3).shipArr).toHaveLength(3);
});

test('should mark correct coordinate on ship array and increase hit total', () => {
  expect(Ship(3).hit(2)).toStrictEqual({
    hits: 1,
    shipArr: [undefined, undefined, 'X'],
    sunk: false,
  });
});

test('ship should be sunk if hits < length', () => {
  expect(Ship(1).hit(0)).toStrictEqual({ hits: 1, shipArr: ['X'], sunk: true });
});
