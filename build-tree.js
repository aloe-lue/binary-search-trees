import tree from './tree.js';

const buildTree = (array, start, end) => {
  if (start > end) return null;

  let mid = parseInt((start + end) / 2);
  const TREE = tree(array[mid]);

  TREE.setLeft(buildTree(array, start, mid - 1));
  TREE.setRight(buildTree(array, mid + 1, end));

  return TREE.root;
};

export default buildTree;
