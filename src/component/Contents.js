/* eslint-disable */
import React from 'react';
import '../App.css';
import sss from '../css/Contents.module.css';
import left from '../img/left.png';
import right from '../img/right.png';
import left_mobile from '../img/left_mobile.png';
import right_mobile from '../img/right_mobile.png';
import Boxcontainer from './Box_container';
import { motion } from 'motion/react';

function Contents() {
    return (
        <div className={sss.content}>
            <motion.p className={sss.maintitle}>
                <motion.span
                    style={{ whiteSpace: 'nowrap' }}  // CALIVERSE는 한 줄로 유지
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    CALIVERSE
                </motion.span>
                <motion.p
                    className={sss.pioneer_text}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    PIONEER NFT
                </motion.p>
                <motion.p
                    className={sss.mo_pioneer_text}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    PIONEER COLLECTIVE
                </motion.p>
            </motion.p>


            <div className={sss.maindesc1}>{/**/}
                <p> CALIVERSE Pioneer NFT는 칼리버스를 개척할 </p>
                <p style={{ marginLeft: '4px' }}> 선구자와 크리에이터들을 지원하기 위한 NFT 입니다.</p>
            </div>
            <div className={sss.maindesc2}>
                <p>
                    CALIVERSE Pioneer Collective is an NFT collection designed <br />
                    to support and empower pioneers and creators of <br />
                    CALIVERSE. Holding a CALIVERSE Pioneer Collective NFT<br />
                    doesn't just grant access to this brand-new universe; it offers <br />
                    an exclusive sneak peek at the exciting lineup of future <br />
                    services.
                </p>
            </div>
            <div className={sss.leftright}>
                <motion.img
                    src={left}
                    className={sss.imgs}
                    initial={{ opacity: 0.5, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }} // 1초 동안 애니메이션
                    alt="left image"
                />
                <motion.img
                    src={right}
                    className={sss.imgs}
                    initial={{ opacity: 0.5, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }} // 1초 동안 애니메이션
                    alt="right image"
                />
                <motion.img
                    src={left_mobile}
                    className={sss.imgs_mo}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }} // 1초 동안 애니메이션
                    alt="left image" />
                <motion.img
                    src={right_mobile}
                    className={sss.imgs_mo}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }} // 1초 동안 애니메이션
                    alt="right image" />
            </div>
            <div className={sss.schedule}>
                <p className={sss.schedule_title1}>
                    MINTING EVENT SCHEDULE
                </p>
                <p className={sss.schedule_title2}>
                    Minting Event Schedule
                </p>
                <div className={sss.date}>
                    <p className={sss.datetext} >시작 <span style={{ color: '#8E8E8E', padding: '6px' }}>2024년 9월 23일 (월) 17:00 (KST)</span></p>
                    <p className={sss.datetext} >종료 <span style={{ color: '#8E8E8E', padding: '5px' }}>2024년 12월 23일 (월) 17:00 (KST)</span></p>
                </div>
                <div className={sss.gradientbutton}>
                    <p style={{ marginLeft: '98px', padding: '0px' }}>민팅 준비중</p>
                </div>
            </div>
            <div className={sss.box}>
                <div className={sss.qkdqjq_box}>
                    <p className={sss.qkdqjq}>
                        <span>CALIVERSE PIONEER NFT <br className={sss.change2line} />민팅 참여방법</span>
                    </p>
                </div>
                <Boxcontainer />
                <div className={sss.dlrjs}>
                    <div className={sss.module_border_wrap}>
                        <div className={sss.module}>
                            <p className={sss.ckarkwkrur_title}>
                                참가자격
                            </p>
                            <p className={sss.module_text1}>
                                CALIVERSE Pioneer NFT 민팅 이벤트는 당첨자만 참여하실 수 있습니다.
                            </p>
                            <p className={sss.module_text2}>
                                These portraits encapsulate the spirit of those trailblazers who
                                constantly seek new possibilities, never content with the present.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contents;
