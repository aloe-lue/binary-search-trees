// only works with sorted array
const removeDuplicate = (array) => {
  let arr = array;

  let i = 1;
  return arr.filter((item) => {
    if (item === arr[i]) {
      i++;
      return;
    }

    if (item !== arr[i]) {
      i++;
      return item;
    }
  });
};

export default removeDuplicate;
