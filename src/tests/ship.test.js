/* eslint-disable */
import { Ship } from '../ship';

test('Factory function to create ship object with correct array length.', () => {
  expect(Ship(3).shipArr).toHaveLength(3);
});

/* test('should mark hit coordinate (array index) with an X', () => {
  expect(Ship(3).hit(2)).toStrictEqual([undefined, undefined, 'X']);
});

test('hit() should increase the number of hits in ship', () => {
  expect(Ship(3).hit(2)).toBe(1);
}); */

test('should mark correct coordinate on ship array and increase hit total', () => {
  expect(Ship(3).hit(2)).toStrictEqual({
    hits: 1,
    shipArr: [undefined, undefined, 'X'],
  });
});
