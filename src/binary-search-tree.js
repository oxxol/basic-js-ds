const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.rootTree

  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data)
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return hasNode(this.rootTree, data)
    function hasNode(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (node.data > data) {
        return hasNode(node.left, data)
      } else {
        return hasNode(node.right, data)
      }
    }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findNode(this.rootTree, data)
    function findNode(node, data) {
      if (node.data === data) {
        return node;
      }
      console.log(node.left)
      if (data > node.data && !node.right) {
        return null;
      }
      if (data < node.data && !node.left) {
        return null;
      }
      if (node.data > data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
  }


  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.root = removeNode(this.rootTree, data)
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        // let minFromRight = node.right;
        // while (minFromRight.left) {
        //   minFromRight = minFromRight.left
        // }
        // node.data = minFromRight.data;
        // node.right = removeNode(node.right, minFromRight.data)
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        node.data = maxFromLeft.data

        node.left = removeNode(node.left, maxFromLeft.data)
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchMin(this.rootTree)
    function searchMin(node) {
      if (!node) {
        return null
      }
      if (!node.left) {
        return node.data

      } else {
        return searchMin(node.left)
      }
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchMax(this.rootTree)
    function searchMax(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data
      } else {
        return searchMax(node.right)
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};