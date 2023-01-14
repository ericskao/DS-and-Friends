

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

 // time: o((log N) + M) where m is sorting potions
 // space: o(1)
var successfulPairs = function(spells, potions, success) {
    // return number of successful pairs for each spell/potion index products
    potions = potions.sort((a,b) => a-b)
    return spells.map((spellStrength) => {
        let left = 0
        let right = potions.length
        while(left<right){
            let mid = Math.floor((left+right)/2)
            if(spellStrength * potions[mid] >= success){
                // go left
                right = mid
            } else {
                left = mid + 1
            }
        }
        return potions.length - left
    })
};