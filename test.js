import binarySearchTree from './binary-search-tree.js';
import prettyPrint from './pretty-print.js';
import randomNumbers from './random-numbers.js';

const bst = binarySearchTree();
let arrOfRandomNum = randomNumbers(100);
let tree = bst.buildTree(arrOfRandomNum, 0, arrOfRandomNum.length - 1);

const giveOneHundoOfArrNum = () => {
  let arr = randomNumbers(100);

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    bst.insert(tree, element);
  }

  return arr;
};

let newTree = null;

console.log(
  '\n confirm that the tree is balanced \n',
  bst.isBalanced(tree) !== -1,

  '\n',
  '\n print out element in pre in and post orders',
  bst.preOrder(tree),
  bst.inOrder(tree),
  bst.postOrder(tree),
  '\n',

  '\n unbalanced the tree by giving several numbers\n',
  giveOneHundoOfArrNum(),
  '\n',

  '\n confirm that the tree is unbalanced\n',
  bst.isBalanced(tree) !== -1,

  '\n',

  `\n balance the tree by calling rebalance`,
  (newTree = bst.rebalance(tree)),
  '\n',

  `\n confirm that the tree is balanced \n`,
  bst.isBalanced(newTree) !== -1,
  '\n',

  `\n print all items in pre in and post order`,
  bst.preOrder(tree),
  bst.inOrder(tree),
  bst.postOrder(tree),
);
