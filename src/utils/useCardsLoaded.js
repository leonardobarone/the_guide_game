import { useEffect, useState } from 'react';

const useCardsLoaded = (cards) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!cards || cards.length === 0) return;

    const images = cards.map(card => card.img);
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
          if (loadedCount === images.length) {
            setLoading(true);
          }
        };
      }
    });
  }, [cards]);

  return loading;
};

export default useCardsLoaded;
