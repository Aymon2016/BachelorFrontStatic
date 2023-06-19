import React from 'react'
import img from '../../../../public/logo.png'
import './member.scss'
const MemberItem = () => {
    return (
        <div className='member'>
            <div className="imgdiv">
                <img src={img} alt='memberimg' />
            </div>
            <div className='details'>
                <h4>Aymon</h4>
                <p>Each mill:  40</p>
                <p>Status: Good</p>
            </div>
        </div>
    )
}

export default MemberItem