import mergeSort from './merge-sort.js';
import removeDuplicate from './rm-duplicate.js';

// returns an array of random numbers
const randomNumbers = (num) => {
  const random = () => parseInt(Math.random() * num);
  let array = [];
  // assign each random
  for (let i = 0; i < num; i++) {
    array[i] = random();
  }

  return removeDuplicate(mergeSort(array, 0, array.length - 1));
};

export default randomNumbers;
