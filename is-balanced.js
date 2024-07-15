
const isBalanced = (node) => {
  let tree = node;

  if (tree === null) {
    return 0;
  };

  let leftHeight = isBalanced(tree.left);
  if (leftHeight === -1) {
    return -1;
  }

  let rightHeight = isBalanced(tree.right);
  if (rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) === -1) {
    return -1;
  }

  return Math.max(leftHeight - rightHeight) + 1;
};

export default isBalanced;
