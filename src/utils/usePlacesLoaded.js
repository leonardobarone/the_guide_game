import { useEffect, useState } from 'react';

const usePlacesLoaded = (places) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const images = [];

    places.forEach(place => {
      images.push(place.imgVisible, place.imgHidden, place.imgBorder);
    });

    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      if (img.complete) {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoading(true);
        }
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoading(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          // Anche in caso di errore, lo contiamo per non bloccare il caricamento.
          if (loadedCount === images.length) {
            setLoading(true);
          }
        };
      }
    });

  }, [places]);

  return loading;
};

export default usePlacesLoaded;