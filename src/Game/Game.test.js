import Game from './Game';
const game = new Game();

test('Initiate 4*4 board', () => {
  const expected = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ];
  expect(game.initiateBoard(4,4)).toStrictEqual(expected);
});

test('Initiate 5*7 board', () => {
  const expected = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ];
  expect(game.initiateBoard(5,7)).toStrictEqual(expected);
});