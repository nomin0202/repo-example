/* eslint-disable */
import React from 'react';
import '../App.css';
import '../css/Contents.css';
import left from '../img/left.png';
import right from '../img/right.png';
import Boxcontainer from './Box_container';
function Contents() {
    return (
        <div className='content'>
            <p className='maintitle'>
                <span style={{ whiteSpace: 'nowrap' }}>CALIVERSE</span> {/* CALIVERSE는 한 줄로 유지 */}
                <span className='pioneer-text'>PIONEER NFT</span> {/* PIONEER NFT는 아래로 내려감 */}
                <span className='mo-pioneer-text'>PIONEER COLLECTIVE</span> {/* 모바일에서 보여야 할 텍스트*/}
            </p>

            <div className="maindesc1">
                <p> CALIVERSE Pioneer NFT는 칼리버스를 개척할 </p>
                <p style={{ marginLeft: '4px' }}> 선구자와 크리에이터들을 지원하기 위한 NFT 입니다.</p>
            </div>
            <div className="maindesc2">
                <p>
                    CALIVERSE Pioneer Collective is an NFT collection designed <br/>
                    to support and empower pioneers and creators of <br/>
                    CALIVERSE. Holding a CALIVERSE Pioneer Collective NFT<br/> 
                    doesn't just grant access to this brand-new universe; it offers <br/>
                    an exclusive sneak peek at the exciting lineup of future <br/>
                    services.
                </p>
            </div>
            <div className='leftright'>
                <img src={left} className='imgs' />
                <img src={right} className='imgs' />
            </div>
            <div className='schedule'>
                <p className='schedule_title1'>
                    MINTING EVENT SCHEDULE
                </p>
                <p className='schedule_title2'>
                    Minting Event Schedule
                </p>
                <div className='date'>
                    <p className='datetext' >시작 <span style={{ color: '#8E8E8E' ,padding:'6px'}}>2024년 9월 23일 (월) 17:00 (KST)</span></p>
                    <p className='datetext' >종료 <span style={{ color: '#8E8E8E' ,padding:'5px'}}>2024년 12월 23일 (월) 17:00 (KST)</span></p>
                </div>
                <div className='gradientbutton'>
                    민팅 준비중
                </div>
            </div>
            <div className='box'>
                <div className='qkdqjq_box'>
                    <p className='qkdqjq'>
                        <span>CALIVERSE PIONEER NFT</span>
                        <span className='qkdqjq_second'>민팅 참여방법</span>
                    </p>
                </div>
                <Boxcontainer/>
                <div className='dlrjs'>
                    <div className="module-border-wrap">
                        <div className="module">
                            <p className='ckarkwkrur_title'>
                                참가자격
                            </p>
                            <p className='module_text1'>
                                CALIVERSE Pioneer NFT 민팅 이벤트는 당첨자만 참여하실 수 있습니다.
                            </p>
                            <p className='module_text2'>
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
