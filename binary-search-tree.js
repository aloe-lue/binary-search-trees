import node from './node.js';
import tree from './tree.js';

const binarySearchTree = () => {
  const buildTree = (array, start, end) => {
    if (start > end) return null;

    let mid = parseInt((start + end) / 2);
    const TREE = tree(array[mid]);

    TREE.setLeft(buildTree(array, start, mid - 1));
    TREE.setRight(buildTree(array, mid + 1, end));

    return TREE.root;
  };

  const insert = (value, bst) => {
    let BST = bst;
    const val = value;
    let prev = null;
    let Node = node(val);

    if (BST === null) {
      BST = node;
      return;
    }

    while (BST !== null) {
      prev = BST;
      if (val > BST.data) {
        BST = BST.right;
      } else if (val < BST.data) {
        BST = BST.left;
      }
    }

    if (val > prev.data) {
      prev.right = Node;
      return;
    }
    prev.left = Node;
    return;
  };

  return {
    buildTree,
    insert,
  };
};

export default binarySearchTree;
