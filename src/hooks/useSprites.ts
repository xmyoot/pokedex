import { useEffect, useState } from 'react';
import axios from 'axios';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

function useSprite(url: string) {
  const [images, setImages] = useState<
    [string | StaticImport, string | StaticImport]
  >(['null', 'null']);

  useEffect(() => {
    const getSprite = async () => {
      try {
        const response = await axios.get(url);
        setImages([
          response.data.sprites.front_default,
          response.data.sprites.back_default,
        ]);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    getSprite();
  }, [url]);

  return images;
}

export default useSprite;
