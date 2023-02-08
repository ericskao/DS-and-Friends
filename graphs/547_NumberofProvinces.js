// 547. Number of Provinces

// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// Example 1:
// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2

// Example 2:
// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

// Constraints:
// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]

/**
 * @param {number[][]} isConnected
 * @return {number}
 */


// disjoint set
// keep track of all root nodes in a root array
// when we union the set, each time we find connected cities, set the root values for connected cities as val of lesser city
// return number of distinct values in root array
const findCircleNumSet = (isConnected) => {
    // going through each 'city' row, make a disjoint set with the value being root parent value
    let rootArr = [...Array(isConnected.length).keys()] // each city index has itself as root initially
    // all these values should be filled with root nodes by end of iteration
    for(let i = 0; i<isConnected.length; i++){
        for(let j = 0; j<isConnected.length; j++){
            if(isConnected[i][j] === 1 && i !== j && rootArr[i] !== rootArr[j]){ // if they are connected and each other's root nodes are not equal, need to set same root for both
                // use lower index as root
                let min = rootArr[i] > rootArr[j] ? rootArr[j] : rootArr[i]
                let max = rootArr[i] > rootArr[j] ? rootArr[i] : rootArr[j]
                let rootVal = rootArr[min]
                // need to check if any other indexes have max as their value, and change it to min
                for(let k = 0; k<rootArr.length; k++){
                    if(rootArr[k] === max){
                        rootArr[k] = rootVal
                    }
                }
            }
        }
    }
    // check how many distinct values there are in rootArr
    return new Set(rootArr).size
}

// use DFS where we follow along the node and change each to visited (visited array with city index)
// each time we see a city we have not visited, dfs into all the connected cities (only incrementing provinces once on initial dfs in first loop)
var findCircleNum = function(isConnected) {
    let n = isConnected.length
    let visited = Array(n).fill(0)
    let provinces = 0
    const dfs = (cityIndex) => {
        visited[cityIndex] = 1
        let cityRow = isConnected[cityIndex]
        for(let j = 0; j<cityRow.length; j++){
            if(cityRow[j] === 1 && j !== cityIndex && !visited[j]){
                dfs(j)
            }
        }
    }
    for(let i = 0; i<n; i++){
        if(!visited[i]){ // if not visited
            // dfs and mark all connected cities as visited
            provinces++
            dfs(i)
        }
    }
    return provinces
};

