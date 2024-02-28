import { useState, useEffect } from 'react';

function useVariableInterval(callback: () => void, intervals: number[]) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      callback();
      setIndex((prevIndex) => (prevIndex + 1) % intervals.length);
    }, intervals[index]);

    return () => clearInterval(id);
  }, [callback, intervals, index]);

  return intervals[index];
}

export default useVariableInterval;
