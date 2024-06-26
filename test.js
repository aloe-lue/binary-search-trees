import mergeSort from './merge-sort.js';
import removeDuplicate from './rm-duplicate.js';
import node from './node.js';
import tree from './tree.js';
import buildTree from './build-tree.js';
import prettyPrint from './pretty-print.js';

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortTestArray = mergeSort(testArray, 0, testArray.length - 1);
const rmDpSortedTestArray = removeDuplicate(sortTestArray);
const buildSortedRemovedDuplicateArray = buildTree(
  rmDpSortedTestArray,
  0,
  rmDpSortedTestArray.length - 1,
);

const sampleArr = [1, 2, 3, 4];

console.log(prettyPrint(buildSortedRemovedDuplicateArray));
