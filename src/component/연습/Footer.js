import React from 'react';
import { getImageUrl } from './utils.js';
import '../css/Footer.css';
function Profile({imgId, name, profession, awards, discovery, imgsize = 70}) {
    return (
    <div className="profile">
      <h2>{name}</h2>
      <img 
        className='avatar'
        src={getImageUrl(imgId)}
        alt={name}
        width={imgsize}
        height={imgsize}
        />
        <ul>
            <li>
                <b>Profession: </b>{profession}
            </li>
            <li>
                <b>Awards: {awards.length} </b>
                {awards}
            </li>
            <li>
                <b>Discovered: </b>{discovery}
          </li>
        </ul>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
      imgId="szV5sdG"
      name = "Maria Skłodowska-Curie"
      profession="physicist and chemist"
      awards={[
        'Nobel Prize in Physics',
        'Nobel Prize in Chemistry',
        'Davy Medal',
        'Matteucci Medal'
      ]}
      discovery='polonium (chemical element)'
      />
      <Profile 
      imgId="YfeOqp2"
      name = "Katsuko Saruhashi"
      profession="geochemist"
      awards={[
        'Miyake Prize for geochemistry',
        'Tanaka Prize'
      ]}
      discovery='a method for measuring carbon dioxide in seawater'
      />
    </div>
  );
}
export default Footer;
