const findBy = (name, value) => function (el) {
  return el[name] === value;
};

export default findBy;
