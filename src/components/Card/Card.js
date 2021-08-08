import React from 'react';
import './Card.scss';
import Row from '../Row/Row';

import { FaPlay } from 'react-icons/fa';

function Card(props) {
    
    return ( 
        <div className="card">
            <div className="card-head">
                <span className="card-head__title"> {props.kind} </span>
                <div className="card-head__btn">
                    <FaPlay className="btn btn-play" />
                </div>
            </div>
            <div className="card-body">

                {/* Row */}
                {props.song.map((song, index) => {
                    return <Row src={song.src} name={song.name} single={song.single} vip={song.vip} num={index} key={index}></Row>
                })}

            </div>
            <div className="card-btn">
                <button className="btn btn-card">Xem tất cả</button>
            </div>
        </div>


    )
}

export default Card;