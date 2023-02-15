import React from 'react'
import './progressFeature.css'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ProgressFeature = () => {

    const percentage = 66;
    return (
        <>
            <div className="feature-box">
                <div className="feature-top">
                    <h3>Total Revenue </h3>
                    <BiDotsVerticalRounded />
                </div>
                <div className="feature-content">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} />

                </div>
                <div className="feature-box-title">
                    <h2>Rs: 500</h2>
                    <span>Today's total sales</span>
                </div>
            </div>
        </>
    )
}

export default ProgressFeature