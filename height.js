const max = (x, y) => {
  let left = x;
  let right = y;

  return left > right ? left : right;
};

const heightRec = (node) => {
  const nd = node;

  if (nd === null) {
    return -1;
  }

  return max(height(nd.left), height(nd.right)) + 1;
};

/**
 * now do it with iteration ->
 *  since it's night i can't go on with this i have to look for my health
 *
 * algorithm
 *  use level order
 *  increment total height when level of n is finished
 *  that is when q is empty increment total height
 *  q first item is then used if it contain left then add to q together with right if it's not null's not null.
 *  repeat
 */

export default heightRec;
