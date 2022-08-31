// import React, { useState, useEffect } from 'react';

// type DebounseType = {
//   value: number[];
//   delay: number;
// };

// const useDebounce = (props: DebounseType) => {
//   const delay = props.delay;
//   const [debouncedValue, setDebouncedValue] = useState(props.value);

//   useEffect(
//     () => {
//       const handler = setTimeout(() => {
//         setDebouncedValue(props.value);
//       }, delay);
//       return () => {
//         clearTimeout(handler);
//       };
//     },
//     [props]
//   );

//   return debouncedValue;
// };

// export default useDebounce;

import { useState, useEffect } from 'react';

export default function useDebounce(value: number[], delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay || 500);
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay],
  );

  return debouncedValue;
}
