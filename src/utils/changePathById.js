function changePathById(array, id, string) {
    const index = array.findIndex(item => item.id === id);

    if (index !== -1) {
        array[index].path = string;
    }
return array;
}

export default changePathById;