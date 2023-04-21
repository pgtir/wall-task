import React from 'react'
import './TopRow.css'
import Card from './Card/Card'
import data from './Card/data'

const TopRow = () => {
  return (
    <div className='top-row'>
    {
      data.map((card) => (
        <Card
        title= {card.title}
        subtitle= {card.subtitle}
        image= {card.image}
        info= {card.info}
        time= {card.time}
        amount1= {card.amount1}
        amount2= {card.amount2}
        color = {card.color}
        />
      ))
    }
    </div>
  )
}

export default TopRow