const levelOrder = (BST) => {
  let bst = BST;
  let arr = [];
  let q = [];
  q.push(bst);

  if (q[0].left !== null) {
    q.push(q[0].left);
  }
  if (q[0].right !== null) {
    q.push(q[0].right);
  }
  arr.push(q.shift().data);

  while (q.length !== 0) {
    if (q[0].left !== null) {
      q.push(q[0].left);
    }
    if (q[0].right !== null) {
      q.push(q[0].right);
    }
    arr.push(q.shift().data);
  }

  return arr;
};

export default levelOrder;
