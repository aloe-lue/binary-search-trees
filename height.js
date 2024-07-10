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

const height = (node) => {
  let nd = node;
  let totalHeight = -1;

  if (nd === null) {
    return totalHeight++;
  }

  let q = [];
  q.push(nd);

  while (1 == 1) {
    let nodeCount = q.length;

    if (nodeCount === 0) {
      return totalHeight;
    }
    totalHeight++;

    while (nodeCount > 0) {
      let front = q.shift();

      if (front.left !== null) q.push(front.left);
      if (front.right !== null) q.push(front.right);
      nodeCount--;
    }
  }

  return totalHeight;
};

export default height;
