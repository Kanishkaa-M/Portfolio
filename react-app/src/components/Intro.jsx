import React from 'react'
import './Intro.scss' 

export default function Intro() {
  return (
    <div className="frame">
      <div className="circle"></div>
      <div className="line left"></div>
      <div className="line right"></div>
      <div className="bracket left"></div>
      <div className="bracket right"></div>
      <div className="small top"><span className="first-letter">K</span>anishkaa</div>
      <div className="small bottom"> <span className="first-letter">M</span>aheshkumar</div>
      <div className="hide top"></div>
      <div className="hide bottom"></div>
    </div>
  )
}