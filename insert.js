import node from './node.js';

const insert = (value, bst) => {
  let BST = bst;
  const val = value;
  let prev = null;

  while (BST.left !== null && BST.right !== null) {
    prev = BST;
    if (val > BST.data) {
      BST = BST.right;
    } else {
      BST = BST.left;
    }
  }

  if (val > BST.data) {
    BST = BST.right;

    if (val > BST.data) {
      BST.right = node(val);
    } else {
      BST.left = node(val);
    }

    return;
  }

  if (val < BST.data) {
    BST = BST.left;

    if (val < BST.data) {
      BST.left = node(val);
    } else {
      BST.right = node(val);
    }
    return;
  }

  return;
};

export default insert;
