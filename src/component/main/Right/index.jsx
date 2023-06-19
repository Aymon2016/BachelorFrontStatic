import React from 'react'
import MemberItem from './MemberItem'

const Member = () => {
    return (
        <div style={{
            width: '25%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'calc(100vh - 50px)',
            overflowX: 'auto'

        }}>
            <MemberItem />
            <MemberItem />
            <MemberItem />
            <MemberItem />
            <MemberItem />
        </div>
    )
}

export default Member