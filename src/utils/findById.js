function findById(array, id) {
    const index = array.find(item => item.id === id);
return index;
}

export default findById;