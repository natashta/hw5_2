import findBy from '../src/js/app';

const info = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
]

const typeFinder = findBy('type', 'attack');

test('search on name', () => {
  const finder = findBy('name', 'урон');
  const expected = [{name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса',
  }];
  expect(info.filter(finder)).toEqual(expected);
});

test('search on type', () => {
  const finder = findBy('type', 'help');
  const expected = [{name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса',
  }];
  expect(info.filter(finder)).toEqual(expected);
});

test('search on wrong name', () => {
  const finder = findBy('name', 'zombie');
  const expected = [];
  expect(info.filter(finder)).toEqual(expected);
});
