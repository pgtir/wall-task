import React from 'react'
import Tweet from '../images/Tweet.png'
import Social from '../images/Social Icons.png'

const SocialMedia = () => {
  return (
    <div className='social-media'>
        <div className="tweet">
            <img src={Tweet} alt="twitter icon" />
            <span className="username">@dingalingts</span>
        </div>
        <img className='browse-icon' src={Social} alt="Browser icon" />
    </div>
  )
}

export default SocialMedia