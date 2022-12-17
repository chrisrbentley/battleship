/* eslint-disable */
import { Ship } from '../ship';

test('ship should be sunk if hits < length', () => {
  expect(Ship(1).hit()).toStrictEqual({
    hits: 1,
    sunk: true,
  });
});
