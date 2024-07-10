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

  /**
   *  todo: don't insert node when node already exists.
   * @param { tree.root } BST
   * @param { integer } value
   * @returns
   */
  const insert = (BST, value) => {
    let val = value;
    let bst = BST;

    if (bst === null) {
      bst = node(val);
      return bst;
    }

    if (val > bst.data) {
      bst.right = insert(bst.right, val);
    } else if (val < bst.data) {
      bst.left = insert(bst.left, val);
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
    } else if (node < bst.data) {
      bst.left = deleteItem(bst.left, node);
    } else {
      if (bst.right === null) {
        return bst.left;
      }
      if (bst.left === null) {
        return bst.right;
      } else {
        bst.data = bstMinimum(bst.right);

        bst.right = deleteItem(bst.right, bst.data);
      }
    }
    return bst;
  };

  const find = (BST, VALUE) => {
    let bst = BST,
      value = VALUE;

    if (bst === null || bst.data === value) {
      return bst;
    }

    if (value > bst.data) {
      return find(bst.right, value);
    }

    return find(bst.left, value);
  };

  const levelOrder = (BST, q = []) => {
    let bst = BST;
    let array = [];

    if (bst.left !== null) {
      q.push(bst.left);
    }

    if (bst.right !== null) {
      q.push(bst.right);
    }

    if (q.length === 0) {
      return [bst.data];
    }

    return array.concat(bst.data).concat(levelOrder(q.shift(), q));
  };

  const preOrder = (BST) => {
    let bst = BST;
    let array = [];

    if (bst === null) {
      return bst;
    }

    return array
      .concat(bst.data)
      .concat(preOrder(bst.left))
      .concat(preOrder(bst.right))
      .filter((item) => item !== null);
  };

  const inOrder = (BST) => {
    let bst = BST;
    let array = [];

    if (bst === null) {
      return bst;
    }

    return array
      .concat(inOrder(bst.left))
      .concat(bst.data)
      .concat(inOrder(bst.right))
      .filter((item) => item !== null);
  };

  const postOrder = (BST) => {
    let bst = BST;
    let array = [];

    if (bst === null) {
      return bst;
    }

    return array
      .concat(postOrder(bst.left))
      .concat(postOrder(bst.right))
      .concat(bst.data)
      .filter((item) => item !== null);
  };

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

  return {
    buildTree,
    insert,
    deleteItem,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    /**
     * depth,
     * isbalanced,
     * rebalance,
     */
  };
};

export default binarySearchTree;
