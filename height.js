const max = (x, y) => {
  let left = x;
  let right = y;

  return left > right ? left : right;
};

const height = (node) => {
  const nd = node;

  if (nd === null) {
    return -1;
  }

  return max(height(nd.left), height(nd.right)) + 1;
};

export default height;
