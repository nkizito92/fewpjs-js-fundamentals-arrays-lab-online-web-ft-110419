// Write your solution here!
const append = ["Milo", "Otis", "Garfield"];

append.push('Odie');

const prepend = [...append.slice(0, 4)];
prepend.pop('Odie');

prepend.unshift('Odie');

const removeLast = [...prepend.splice(1, 2, 'Milo', 'Otis')]

const removeFirst =[...prepend.splice(1, 2, 'Milo', 'Otis')]