/* eslint-disable */
import React from 'react';
import '../App.css';
import '../css/Box_container.css';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import Box from '@mui/material/Box';
function Box_container() {
    return (
        <>
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
                                            <br />민팅 시 가스비가 발생됩니다.  충분한 이더{"(ETH)"}를 넣은 후 민팅을 진행해<br />주세요.
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
                                        <p><br />
                                            민팅 기간이 지나면 민팅이 불가하니 유의해 주세요
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Box className="boxes">
                        <div className='icon_text'>
                            <img className='icon2' src={icon3} />
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
                            <img className='icon2' src={icon4} />
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
        </>
    );
}
export default Box_container;