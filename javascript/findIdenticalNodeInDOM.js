// dfs because we pop from right to left
const findCorrespondingNodeDfs = (rootA, rootB, target) => {
  let stack = [[rootA, rootB]]
  while(stack.length > 0){
    let [poppedA, poppedB] = stack.pop()
    if(poppedA === target){
      return poppedB
    }
    for(let i = 0; i<poppedA.children.length; i++){
      stack.push([poppedA.children[i], poppedB.children[i]])
    }
  }
}

// bfs
const findCorrespondingNodeBfs = (rootA, rootB, target) => {
  let queueA = [rootA]
  let queueB = [rootB]
  while(queueA.length > 0){
    let poppedA = queueA.shift()
    let poppedB = queueB.shift()
    if(poppedA === target) return poppedB
    queueA.push(...poppedA.children)
    queueB.push(...poppedB.children)
  }
}

// treewalker method
const findCorrespondingNode = (rootA, rootB, target) => {
  const treeWalkerA = document.createTreeWalker(rootA, NodeFilter.SHOW_ALL) // treewalker takes node, and filter type
  const treeWalkerB = document.createTreeWalker(rootB, NodeFilter.SHOW_ALL)
  // starting from rootA, walk through all nodes
  let currentNodes = [treeWalkerA.currentNode, treeWalkerB.currentNode] // currentNode is not a function
  while(currentNodes[0] !== target){
    currentNodes = [treeWalkerA.nextNode(), treeWalkerB.nextNode()]
  }
  return currentNodes[1]
}