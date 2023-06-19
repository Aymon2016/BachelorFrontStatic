import React, { Fragment } from 'react'
import NoticeSlide from './NoticeSlide'
import Graph from './Graph'

const Databody = () => {
    return (
        <div style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        }}
        >
            <NoticeSlide />
            <Graph />
        </div>
    )
}

export default Databody