import { useEffect, useState } from 'react';

const useImagesLoaded = (imageSources = []) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imageSources.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedCount = 0;

    imageSources.forEach((src) => {
      if (!src) {
        loadedCount++;
        if (loadedCount === imageSources.length) {
          setLoaded(true);
        }
        return;
      }

      const img = new Image();
      img.src = src;

      const onLoadOrError = () => {
        loadedCount++;
        if (loadedCount === imageSources.length) {
          setLoaded(true);
        }
      };

      if (img.complete) {
        onLoadOrError();
      } else {
        img.onload = onLoadOrError;
        img.onerror = onLoadOrError;
      }
    });
  }, [imageSources]);

  return loaded;
};

export default useImagesLoaded;
