/* eslint-disable */
import { Ship } from '../ship';

/* test('Factory function to create ship object with correct array length.', () => {
  expect(Ship(3)).toHaveProperty('shipArr');
}); */

test('Factory function to create ship object with correct array length.', () => {
  expect(Ship(3).shipArr).toHaveLength(3);
});

test('should mark hit coordinate (array index) with an X', () => {
  expect(Ship(3).hit(2)).toStrictEqual([undefined, undefined, 'X']);
});

/* test('hits() should add 1 to hits', () => {
  expect(Ship(3).hit(2)).toBe(Ship.hits + 1);
}); */
