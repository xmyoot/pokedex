import { useState, useEffect } from 'react';

export default function useBlinkingState(
  initialState: boolean,
  interval: number,
) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prevState) => !prevState);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return state;
}
