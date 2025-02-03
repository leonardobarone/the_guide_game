function timeById(array, id) {
    const index = array.findIndex(item => item.id === id);


    const data = new Date();
    const giorno = data.getDate().toString().padStart(2, '0'); // Pad con zero se necessario
    const mese = (data.getMonth() + 1).toString().padStart(2, '0'); // Pad con zero e +1 perché parte da 0
    const anno = data.getFullYear();
    const ora = data.getHours().toString().padStart(2, '0');
    const minuti = data.getMinutes().toString().padStart(2, '0');
    const secondi = data.getSeconds().toString().padStart(2, '0');

    const dataOraStringa = `${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;
    console.log(dataOraStringa); // Output: "16/05/2024 10:30:00"
    
    if (index !== -1) {
        array[index].time = dataOraStringa;
    }
return array;
}

export default timeById;