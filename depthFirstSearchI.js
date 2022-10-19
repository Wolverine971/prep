dfsInOrder(){
    traversenOrder(this.root, []);


};

function dfsPostOrder(){
    traversePostOrder(this.root, []);

};

dfsPreOrder(){
    traversePreOrder(this.root, []);

};



traverseInOrder(node, list){
    console.log(node.value)
    if( node.left){
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if( node.right){
        traverseInOrder(node.right, list)
    }
    return list
};
