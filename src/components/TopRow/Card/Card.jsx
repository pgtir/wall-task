import React from 'react'
import Shape from './images/Shape.png'

const Card = (props) => {
  const {title, subtitle, image, info, time, amount1, amount2, color} = props;
  console.log(color)
  return (
    <div className='top-card'>
      <div className="overview">
        <img src={image}  />
        <div className="right">
          <span className='title'>{title}</span>
          <span style={{color: `${color}`}} className='subtitle'>{subtitle}</span>
        </div>
      </div>
      <div className="amount-info">
        <div className="info">
          <div className="username">{info}</div>
          <div className="num-area">
            <span className='amt1'>{amount1}</span>
            <img src={Shape} alt="" />
          </div>
        </div>
        <div className="info">
          <div className="time">{time}</div>
          <div className="amt2">{amount2}</div>
        </div>
      </div>
    </div>
  )
}

export default Card