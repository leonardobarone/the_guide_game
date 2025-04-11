function halfById(array, id) {
    const index = array.findIndex(item => item.id === id);

    if (index !== -1) {
        array[index].half = true;
    }
return array;
}

export default halfById;