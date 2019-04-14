import findBy from '../src/js/app';

const info = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

test('search on name', () => {
  const finder = findBy('name', 'урон');
  const recieved = info.filter(finder);
  const expected = [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }];
  expect(recieved).toEqual(expected);
});

test('search on type', () => {
  const finder = findBy('type', 'help');
  const recieved = info.filter(finder);
  const expected = [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }];
  expect(recieved).toEqual(expected);
});

test('search on wrong name', () => {
  const finder = findBy('defence', '10');
  const recieved = info.filter(finder);
  const expected = [];
  expect(recieved).toEqual(expected);
});

test('search on non exist parameter', () => {
  const finder = findBy('name', 'zombie');
  const recieved = info.filter(finder);
  const expected = [];
  expect(recieved).toEqual(expected);
});

test('search on two parameters', () => {
  const finder = findBy('name', 'маг');
  const info1 = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'маг', type: 'character', description: 'Еще один Персонаж, обладающий магическими способностями' },
  ];
  const recieved = info1.filter(finder);
  const expected = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'маг', type: 'character', description: 'Еще один Персонаж, обладающий магическими способностями' },
  ];
  expect(recieved).toEqual(expected);
});
