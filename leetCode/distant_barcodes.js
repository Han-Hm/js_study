/**
 * In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].
 * Rearrange the barcodes so that no two adjacent barcodes are equal.  
 * You may return any answer, and it is guaranteed an answer exists.
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    const tempMap = {};
    barcodes.forEach(n => tempMap[n] = (tempMap[n] || 0) + 1);
    const sortedBarcodeCount = Object.keys(tempMap).sort((a, b) => tempMap[a] - tempMap[b]);
    
    let idx = 1;
    const retVal = [];
    for (let i = 0; i < sortedBarcodeCount.length; i++) {
        const key = sortedBarcodeCount[i];
        const count = tempMap[key];
        for (let j = 0; j < count; j++) {
			if (idx >= barcodes.length) {
                idx = 0;
            }
			retVal[idx] = key;
			idx += 2;
		}
    }
    
    return retVal;
};

const assert = require('assert');
assert.deepEqual(rearrangeBarcodes([1,1,1,2,2,2]), [2,1,2,1,2,1]);
assert.deepEqual(rearrangeBarcodes([1,1,1,1,2,2,3,3]), [1,3,1,3,2,1,2,1]);