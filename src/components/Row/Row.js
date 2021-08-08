import React, { useState } from 'react';
import './Row.scss';

import { TiMinus } from 'react-icons/ti';

function Row(props) {

    const songImage = props.vip === true ? 'song__image song__image--vip' : 'song__image'
    const songName = props.vip === true ? 'detail__name detail__name--vip' : 'detail__name'
    const songSingle = props.vip === true ? 'detail__single detail__single--vip' : 'detail__single'

    const vip = props.vip === true ? 'vip--show' : 'vip--hidden'

    return (
        <div className="row">
            <div className="row__rank">
                <span> {props.num + 1} </span>
            </div>
            <div className="row__status">
                <span><TiMinus /></span>
            </div>
            <div className="song">
                <img className={songImage} src={props.src} alt={props.name} />

                <div className="detail">
                    <div className='detail__name'>
                        <span className={songName}>{props.name}</span>
                        <span className={vip}>VIP</span>
                    </div>
                    <div className={songSingle}> {props.single} </div>
                </div>
            </div>
        </div>
    )
}

export default Row;
