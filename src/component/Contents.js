/* eslint-disable */
import React from 'react';
import '../App.css';
import '../css/Contents.css';
import { Box, Button } from '@mui/material';
import left from '../img/left.png';
import right from '../img/right.png';
import left_mobile from '../img/left_mobile.png';
import right_mobile from '../img/right_mobile.png';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
function Contents() {
    return (
        <div className='content'>
            <p className='maintitle'>
                <span style={{ whiteSpace: 'nowrap' }}>CALIVERSE</span> {/* CALIVERSE는 한 줄로 유지 */}
                <span className='pioneer-text'>PIONEER NFT</span> {/* PIONEER NFT는 아래로 내려감 */}
            </p>

            <div className="maindesc1">
                <p> CALIVERSE Pioneer NFT는 칼리버스를 개척할 </p>
                <p style={{ marginLeft: '4px' }}> 선구자와 크리에이터들을 지원하기 위한 NFT 입니다.</p>
            </div>
            <div className="maindesc2">
                <p>
                    CALIVERSE Pioneer Collective is an NFT collection designed to 
                    support and empower pioneers and creators of CALIVERSE. Holding a 
                    CALIVERSE Pioneer Collective NFT doesn't just grant access to this 
                    brand-new universe; it offers an exclusive sneak peek at the exciting 
                    lineup of future services.
                </p>
            </div>
            <div className='leftright'>
                <img src={left} className='imgs' />
                <img src={right} className='imgs' />
            </div>
            <div className='schedule'>
                <p className='schedule_title'>
                    MINTING EVENT SCHEDULE
                </p>
                <div className='date'>
                    <p className='datetext' >시작 <span style={{ color: '#8E8E8E' }}>2024년 09월 23일 (월) 17:00 (KST)</span></p>
                    <p className='datetext' >종료 <span style={{ color: '#8E8E8E' }}>2024년 12월 23일 (월) 17:00 (KST)</span></p>
                </div>
                <Button sx={{
                    width: 293,
                    height: 58,
                    color: '#22EE9F',
                    border: '1px solid #22EEBD',
                    background: 'rgba(0, 0, 0, 0.30)',
                    boxShadow: '4px 4px 8px -1px rgba(0,0,0,0.25)',
                    color: '#22ee9f',
                    fontSize: 20,
                    fontWeight: '800',
                    fontFamily: 'Pretendard !important'
                }}>
                    민팅 준비중
                </Button>
            </div>
            <div className='box'>
                <div className='qkdqjq_box'>
                    <p className='qkdqjq'>
                        <span>CALIVERSE PIONEER NFT</span>
                        <span className='pioneer-text'>민팅 참여방법</span>
                    </p>
                </div>
                <div className="boxcontainer">
                    <div className='gadna'>
                        <Box className="boxes">
                            <div className='icon_text'>
                                <img className='icon' src={icon1} />
                                <div className='titledesc'>
                                    <div className='title'>
                                        <p>
                                            SIGN IN & VERIFY
                                        </p>
                                    </div>
                                    <div className='desc_'>
                                        <div className='desc1'>
                                            <p >
                                                회원 가입 후  당첨된 지갑 주소를 연결해 주세요.
                                            </p>
                                        </div>
                                        <div className='desc2'>
                                            <p>
                                                민팅 시 가스비가 발생됩니다.  충분한 이더{"(ETH)"}를 넣은 후 민팅을 진행해 주세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box className="boxes">
                            <div className='icon_text'>
                                <img className='icon' src={icon2} />
                                <div className='titledesc'>
                                    <div className='title'>
                                        <p>
                                            CHECK & SCHEDULE
                                        </p>
                                    </div>
                                    <div className='desc_'>
                                        <div className='desc1'>
                                            <p >
                                                Event Schedule을 확인해 주세요.
                                            </p>
                                        </div>
                                        <div className='desc2'>
                                            <p>
                                                민팅 기간이 지나면 민팅이 불가하니 유의해 주세요
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box className="boxes">
                            <div className='icon_text'>
                                <img className='icon' src={icon3} />
                                <div className='titledesc'>
                                    <div className='title'>
                                        <p>
                                            MINT
                                        </p>
                                    </div>
                                    <div className='desc_'>
                                        <div className='desc1'>
                                            <p >
                                                {'<Mint>'} 버튼을 클릭 후 민팅을 진행해 주세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box className="boxes">
                            <div className='icon_text'>
                                <img className='icon' src={icon4} />
                                <div className='titledesc'>
                                    <div className='title'>
                                        <p>
                                            COMPLETE
                                        </p>
                                    </div>
                                    <div className='desc_'>
                                        <div className='desc1'>
                                            <p >
                                                {"[My Inventory]"}에서 민팅된 NFT를 확인해 주세요.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className='dlrjs'>
                    <div className="module-border-wrap">
                        <div className="module">
                            <p style={{ fontSize: '25px', fontWeight: '600' }}>
                                참가자격
                            </p>
                            <p style={{ fontSize: '16px', color: '#ffffff70', fontWeight: '600', marginTop: '10px' }}>
                                CALIVERSE Pioneer NFT 민팅 이벤트는 당첨자만 참여하실 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contents;
