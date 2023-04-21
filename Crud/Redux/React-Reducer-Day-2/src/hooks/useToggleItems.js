// import { useState } from 'react';

// function useToggleItems(initialValue, initialIndex = 0) {
//   const [index, setIndex] = useState(initialIndex);
//   const toggleState = () => {
//     setIndex((index+1) % initialValue.length);
//   };
//   return [initialValue[index], toggleState];
// }

// export { useToggleItems };
import { useState } from "react";

function useToggleItems(initialValue, initialPosition = 0) {
  const [state, setState] = useState(initialValue[initialPosition]);
  const toggleState = () => {
    const currentIndex = initialValue.indexOf(state);
    const nextIndex = (currentIndex + 1) % initialValue.length;
    setState(initialValue[nextIndex]);
  };
  return [state, toggleState];
}
export { useToggleItems };