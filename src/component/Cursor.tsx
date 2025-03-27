/* eslint-disable */
// import '../App.css';
// import ttt from '../css/Test.module.css';
// // import sss from '../css/Contents.module.css';
// import left from '../img/left.png';
// import right from '../img/right.png';
// import left_mobile from '../img/left_mobile.png';
// import right_mobile from '../img/right_mobile.png';
// // import Boxcontainer from './Box_container';
// "use client"

// import { frame, motion, useSpring } from "motion/react"
// import { RefObject, useEffect, useRef } from "react"

// export default function Test() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // 부드러운 움직임을 위한 spring 효과 적용
//   const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
//   const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });
//   const cursorSize = 15;
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouseX.set(e.clientX - cursorSize / 2);
//       mouseY.set(e.clientY - cursorSize / 2);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   return (<>
//     <motion.div
//       style={{
//         position: "fixed",
//         width: `${cursorSize}px`,
//         height: `${cursorSize}px`,
//         backgroundColor: "red",
//         borderRadius: "50%",
//         pointerEvents: "none",
//         translateX: smoothX,
//         translateY: smoothY,
//         transform: "translate(-50%, -50%)", // 중앙 정렬 적용!
//       }}
//     />
//     <motion.img
//       src={left}
//       className={ttt.imgs}
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }} // 1초 동안 애니메이션
//       alt="left image"
//     />
//     <motion.img
//       src={right}
//       className={ttt.imgs}
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }} // 1초 동안 애니메이션
//       alt="right image"
//     />
//     <img
//       src={left_mobile}
//       className={ttt.imgs_mo}
//     />
//     <img
//       src={right_mobile}
//       className={ttt.imgs_mo}
//     />
//   </>
//   );
// }

import { frame, motion, useSpring } from "framer-motion";
import React, { RefObject, useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{
        width: 50,
        height: 50,
        backgroundColor: "#ffffff50",
        borderRadius: "50%",
        position: "fixed",
        x,
        y,
      }}
    />
  );
}

const spring = { damping: 20, stiffness: 100, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        y.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}
