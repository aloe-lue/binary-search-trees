/**
 * @param { Object } BST
 * @returns Array
 */

const levelOrder = (BST) => {
  let bst = BST;
  let arr = [];
  let q = [];
  q.push(bst);

  while (q.length !== 0) {
    const frontQ = q.at(0);

    if (frontQ.left !== null) q.push(frontQ.left);
    if (frontQ.right !== null) q.push(frontQ.right);

    arr.push(q.shift().data);
  }

  return arr;
};

/**
 * ? the level order traverse the binary search tree while the callback function is provided with node
 * @param { Object } BST
 * @returns
 */

const queue = (BST) => {};

const levelOrderWithCb = (callback, BST) => {};

export { levelOrder, queue, levelOrderWithCb };
