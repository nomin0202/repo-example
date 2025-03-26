/* eslint-disable */
import React from 'react';
import '../App.css';
import ttt from '../css/Test.module.css';
// import sss from '../css/Contents.module.css';
import left from '../img/left.png';
import right from '../img/right.png';
import left_mobile from '../img/left_mobile.png';
import right_mobile from '../img/right_mobile.png';
// import Boxcontainer from './Box_container';
import { motion } from 'motion/react';
export default function Test() {
  return (
    <div>
      <motion.img
        src={left}
        className={ttt.imgs}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }} // 1초 동안 애니메이션
        alt="left image"
      />
      <motion.img
        src={right}
        className={ttt.imgs}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }} // 1초 동안 애니메이션
        alt="right image"
      />
      <img
        src={left_mobile}
        className={ttt.imgs_mo}
      />
      <img
        src={right_mobile}
        className={ttt.imgs_mo}
      />
    </div>
  );
}
