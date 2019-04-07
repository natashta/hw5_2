export default function findBy(name, value) {
  return function (el) {
    return el[name] === value;
  };
}