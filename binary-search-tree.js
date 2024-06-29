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

  const bstMinimum = (node) => {
    let min = node.data;
    while (node.left !== null) {
      min = node.left.data;
      node = node.left;
    }
    return min;
  };

  const deleteItem = (bst, node) => {
    if (bst === null) {
      return bst;
    }

    if (node > bst.data) {
      bst.right = deleteItem(bst.right, node);
    }
    if (node < bst.data) {
      bst.left = deleteItem(bst.left, node);
    }

    if (bst.right === null) {
      return bst.left;
    }
    if (bst.left === null) {
      return bst.right;
    } else {
      bst.data = bstMinimum(bst.right);

      bst.right = deleteItem(bst.right, bst.data);
    }
    return bst;
  };

  return {
    buildTree,
    insert,
    deleteItem,
  };
};

export default binarySearchTree;
