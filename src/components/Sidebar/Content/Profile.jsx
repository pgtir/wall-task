import React from 'react'
import dp from '../images/Dp.png'


const Profile = () => {
  return (
    <div className='profile'>
      <div className="image-area">
        <div className="img-box">
          <img src={dp} alt="profile picture" />
        </div>
        <div className="img-text">LVL 2</div>
      </div>
      <div className="name-area">
        <div className="name">dingaling.eth</div>
        <div className="subtitle">0xadgf....jkld</div>
      </div>
    </div>
  )
}

export default Profile