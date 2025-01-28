  function unblockById(array, id) {
        const index = array.findIndex(item => item.id === id);

        if (index !== -1) {
            array[index].unblocked = true;
        }
    return array;
  }

  export default unblockById;