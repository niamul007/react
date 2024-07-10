import React from 'react'
import { logicData } from './LogicData'
function Ahero(props) {
  return (
    <div className='main'>
      <div className="m-2">
        <div className="a-tag">
            <p className="tag-name">
            Commitment
            </p>
            <h1 className="sec-title">
            Your business goals
            are our top priority
            </h1>
        </div>
        <div className="logicBtn">
            <button className="l-btn">Expertise</button>
            <button className="l-btn" id='l-btn-2' >Innovation</button>
            <button className="l-btn">Accountability</button>
            <p className="logic-para">
                {props.para}
            </p>
        </div>
      </div>
      <div className="m-3">
        <div className="box">
            THERE WIIL BE FOUR BOX IN TOTAL
        </div>
        <div className="box">
            THERE WIIL BE FOUR BOX IN TOTAL
        </div>
        <div className="box">
            THERE WIIL BE FOUR BOX IN TOTAL
        </div>
        <div className="box">
            THERE WIIL BE FOUR BOX IN TOTAL
        </div>
      </div>
    </div>
  )
}

export default Ahero
