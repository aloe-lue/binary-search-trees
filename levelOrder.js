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

const levelOrderRec = (BST, q = []) => {
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

  return array.concat(bst.data).concat(levelOrderRec(q.shift(), q));
};

export { levelOrder, levelOrderRec };
