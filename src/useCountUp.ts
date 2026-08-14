// Add this hook if you want number counting animation
// import { useState, useEffect } from 'react';

// const useCountUp = (target: number, duration: number = 2000) => {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     let startTime: number;
//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       setCount(Math.floor(progress * target));
//       if (progress < 1) requestAnimationFrame(animate);
//     };
//     requestAnimationFrame(animate);
//   }, [target, duration]);
  
//   return count;
// };