function reduce(arr, reduceCallback, initialValue) {
    if (!Array.isArray(arr) || !arr.length ||
        typeof reduceCallback !== 'function') {
        return [];
    } else {
        let hasInitialValue = initialValue !== undefined;
        let value = hasInitialValue ? initialValue : arr[0];
        for (let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
            value = reduceCallback(value, arr[i], i, arr);
        }
        return value;
    }
}
reduce([1, 2, 3], function(pre, cur, index, arr) {
    return pre + cur;
}, initialValue);