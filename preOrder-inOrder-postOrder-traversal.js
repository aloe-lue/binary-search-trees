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

export { preOrder, inOrder, postOrder };
