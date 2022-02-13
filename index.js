let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => cats.push(name);

const destructivelyPrependCat = (name) => cats.unshift(name);

const destructivelyRemoveLastCat = (name) => cats.pop();

const destructivelyRemoveFirstCat = (name) => cats.shift();

const appendCat = (name) => [...cats, name];

const prependCat = (name) => [name, ...cats];

const removeLastCat = () =>
  cats.filter((cat, index) => (index == cats.length - 1 ? false : true));
const removeFirstCat = () =>
  cats.filter((cat, index) => (index != 0 ? true : false));

console.log(removeLastCat());
