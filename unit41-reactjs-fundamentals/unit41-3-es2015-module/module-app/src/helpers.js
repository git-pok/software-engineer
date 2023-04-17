// Returns a randomly selected item from array of items.
function choice(arr) {
    const arrLen = arr.length; 
    const randIdx = Math.floor(Math.random() * arrLen);
    const randVal = arr[randIdx];
    return randVal;
}

// Removes the first matching item from
// items, if item exists, and returns it.
// Otherwise returns undefined.
function remove(items, item) {
    const itemIdx = items.indexOf(item);
    if ( itemIdx !== -1 ) return items.splice(itemIdx, 1);
}

export { choice, remove };