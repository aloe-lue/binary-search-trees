// implement a recursive insertion method for binary search tree

import node from './node.js';

const insert = (value, BST) => {
  let val = value;
  let bst = BST;

  if (bst === null) {
    let Node = node(val);
    bst = Node;
  }

  if (val > bst.data) {
    bst.right = insert(val, bst.right);
  }
  if (val < bst.data) {
    bst.left = insert(val, bst.left);
  }

  return bst;
};

export default insert;
