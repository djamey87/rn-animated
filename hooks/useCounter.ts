import { useState } from "react";

interface Props {
  initialValue?: number;
  step?: number;
}

function useCounter(
  initialValue = 0,
  step = 1
): [number, () => void, () => void] {
  const [count, setCount] = useState(initialValue);

  const increment = (): void => {
    setCount(count + step);
  };

  function decrement() {
    setCount(count - step);
  }

  return [count, increment, decrement];
}

export default useCounter;
