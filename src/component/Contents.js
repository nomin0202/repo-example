/* eslint-disable */
import React from 'react';
import '../App.css';
import '../css/Contents.css';
import { Typography, Box, Button } from '@mui/material';
import left from '../img/left.png';
import right from '../img/right.png';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
function Contents() {
    return (
        <div className='content'>
            <Typography
                sx={{
                    color: 'white',
                    letterSpacing: '7px',
                    fontSize: '35px',
                    fontFamily: 'futura !important',
                    marginTop: '130px',
                    textAlign: 'center', // 중앙 정렬
                }}>
                <span style={{ whiteSpace: 'nowrap' }}>CALIVERSE</span> {/* CALIVERSE는 한 줄로 유지 */}
                <span className='pioneer-text'>PIONEER NFT</span> {/* PIONEER NFT는 아래로 내려감 */}
            </Typography>
            <Typography sx={{
                color: '#9A9A9A',
                fontSize: '16px',
                letterSpacing: '0',
                fontWeight: '500',
                margin: '24px 20px 0 20px'
            }}>
                CALIVERSE Pioneer NFT는 칼리버스를 개척할 선구자와 크리에이터들을 지원하기 위한 NFT 입니다.
            </Typography>
            <div className='leftright'>
                <img src={left} className='imgs'/>
                <img src={right} className='imgs'/>
            </div>
            <div className='schedule'>
                <Typography sx={{ fontSize: '23px', fontWeight: '800', letterSpacing: '0.1em', marginTop: '96px', color: 'white' }}>
                    Minting Event Schedule
                </Typography>
                <div className='date'>
                    <Typography className='datetext' style={{ color: 'white' }}>시작 <span style={{ color: '#8E8E8E' }}>2024년 09월 23일 (월) 17:00 (KST)</span></Typography>
                    <Typography className='datetext' style={{ color: 'white' }}>종료 <span style={{ color: '#8E8E8E' }}>2024년 12월 23일 (월) 17:00 (KST)</span></Typography>
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
                    marginTop: '30px'
                }}>
                    민팅 준비중
                </Button>
            </div>
            <div className='box'>
                <Typography sx={{
                    color: 'white',
                    fontSize: '23px',
                    letterSpacing: '3px',
                    fontWeight: '600',
                    marginTop: '127px'
                }}>
                    CALIVERSE PIONEER NFT 민팅 참여방법
                </Typography>
                <div className="boxcontainer">
                    <div className='gadna'>
                        <Box className="boxes">
                            <div className='icon_text'>
                                <img className='icon' src={icon1} />
                                <div className='titledesc'>
                                    <div className='title'>
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontFamily: 'outfit !important',
                                            fontWeight: '600'
                                        }}>
                                            SIGN IN & VERIFY
                                        </Typography>
                                    </div>
                                    <div className='desc1'>
                                        <Typography >
                                            회원 가입 후  당첨된 지갑 주소를 연결해 주세요.
                                        </Typography>
                                    </div>
                                    <div className='desc2'>
                                        <Typography sx={{ fontSize: '11px' }}>
                                            민팅 시 가스비가 발생됩니다.  충분한 이더{"(ETH)"}를 넣은 후 민팅을 진행해 주세요.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box className="boxes">
                            <div className='icon_text'>
                                <img className='icon' src={icon2} />
                                <div className='titledesc'>
                                    <div className='title'>
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontFamily: 'outfit !important',
                                            fontWeight: '600'
                                        }}>
                                            CHECK & SCHEDULE
                                        </Typography>
                                    </div>
                                    <div className='desc1'>
                                        <Typography >
                                            Event Schedule을 확인해 주세요.
                                        </Typography>
                                    </div>
                                    <div className='desc2'>
                                        <Typography sx={{ fontSize: '11px' }}>
                                            민팅 기간이 지나면 민팅이 불가하니 유의해 주세요
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box className="boxes">
                            <div className='icon_text'>
                                <img className='icon' src={icon3} />
                                <div className='titledesc'>
                                    <div className='title'>
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontFamily: 'outfit !important',
                                            fontWeight: '600'
                                        }}>
                                            MINT
                                        </Typography>
                                    </div>
                                    <div className='desc1'>
                                        <Typography >
                                            {'<Mint>'} 버튼을 클릭 후 민팅을 진행해 주세요.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box className="boxes">
                            <div className='icon_text'>
                                <img className='icon' src={icon4} />
                                <div className='titledesc'>
                                    <div className='title'>
                                        <Typography sx={{
                                            fontSize: '20px',
                                            fontFamily: 'outfit !important',
                                            fontWeight: '600'
                                        }}>
                                            COMPLETE
                                        </Typography>
                                    </div>
                                    <div className='desc1'>
                                        <Typography >
                                            {"[My Inventory]"}에서 민팅된 NFT를 확인해 주세요.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className='dlrjs'>
                    <div className="module-border-wrap">
                        <div className="module">
                            <Typography sx={{ fontSize: '25px' }}>
                                참가자격
                            </Typography>
                            <Typography sx={{ fontSize: '16px', color: '#ffffff50' }}>
                                CALIVERSE Pioneer NFT 민팅 이벤트는 당첨자만 참여하실 수 있습니다.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contents;
