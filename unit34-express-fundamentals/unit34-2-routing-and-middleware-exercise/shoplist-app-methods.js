function addToArray(obj, arr) {
    arr.push(obj);
}




function createItemObj(name, price) {
    return {
        name,
        price,
    }
}




module.exports = {
    addToArray,
    createItemObj,
};