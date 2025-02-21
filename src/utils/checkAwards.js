function checkAwards(array, id, boolean) {
    // Filtra gli oggetti con game === 1
    let oggettiConGame1;
    if (boolean) {
      oggettiConGame1 = array.filter(oggetto => oggetto.card === id);
    } else {
      oggettiConGame1 = array.filter(oggetto => oggetto.place === id);
    } 

  
    // Se non ci sono oggetti con game === 1, restituisci false
    if (oggettiConGame1.length === 0) {
      return false;
    }
  
    // Conta quanti oggetti hanno unblocked === true
    let countUnblockedTrue = 0;
    for (const oggetto of oggettiConGame1) {
      if (oggetto.unblocked === true) {
        countUnblockedTrue++;
      }
    }

  
  
    // Verifica se tutti tranne uno hanno unblocked === true
    return countUnblockedTrue === oggettiConGame1.length || countUnblockedTrue === oggettiConGame1.length - 1;
  }

export default checkAwards;
