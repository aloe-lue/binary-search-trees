const height = (tree, number) => {
  let node = tree;
  let num = number;

  let q = [];
  let total = 0;
  if (node === null) total++;

  let encountered = false;

  q.push(node);

  while (1 === 1) {
    let nodeCount = q.length;

    if (nodeCount === 0) {
      return total++;
    }

    if (encountered) {
      total++;
    }

    while (nodeCount > 0) {
      let front = q.shift();

      if (front.data === num) {
        encountered = true;
      }

      if (front.left !== null) {
        q.push(front.left);
      }

      if (front.right !== null) {
        q.push(front.right);
      }
      nodeCount--;
    }
  }

  return total;
};

export default height;
