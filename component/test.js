
// dfs Map 
const dfsMap = (tree,childKey, process) => {
    return tree.map(node => {
        const processedNode = process(node);
        if(Array.isArray(processedNode[childKey])) {
            return {...processedNode, [childKey]: dfsMap(processedNode[childKey], childKey, process)}
        }
        return processedNode;
    })
}

const removeTreeItem = (tree, nodeId) => {
    return dfsMap(tree, 'rules', (node) => {
    if(Array.isArray(node.rules)) {
        const idx = node.rules.findIndex(rule => rule.id === nodeId);
        if(idx !== -1) {
            node.rules.splice(idx, 1);
        }
        if(node.rules.length === 1) {
            const result =  { ...node.rules[0], ...node };
            delete result.condition;
            delete result.rules;
            return result
        }
    }
    return node;
})
}

console.log(removeTreeItem(data, "2tky4k4vzcy000"))
