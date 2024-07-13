/**
 */

/**
 * -1 0 or 1 would be the expected return value isBalanced method to return true
 * but -2 or 2 would return false from isBalanced method
 * @param { Number } x
 * @param { Number } y
 * @returns less than 0 and greater than zero
 **/

const subtract = (x, y) => x - y;
const max = (x, y) => (x > y ? x : y);

const height = (tree) => {
  let root = tree;

  if (root === null) return -1;

  return max(height(root.left), height(root.right)) + 1;
};

const isBalanced = (tree) => {
  let root = tree;

  if (root === null) return false;

  let left = height(root.left);
  let right = height(root.right);

  const bol = (val) => val >= -1 && val <= 1;

  return bol(subtract(left, right));
};

export default isBalanced;
