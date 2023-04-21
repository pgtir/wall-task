import React from 'react'

const chipData = [
  {
    name: "Art",
    percent: "12%",
    focus: true
  },
  {
    name: "Utility",
    percent: "12%",
    focus: true
  },
  {
    name: "PFP",
    percent: "12%",
    focus: false
  },
  {
    name: "Metaverse",
    percent: "12%",
    focus: false
  },
  {
    name: "Gaming",
    percent: "12%",
    focus: false
  },
  {
    name: "PFP",
    percent: "12%",
    focus: false
  },
  {
    name: "ens",
    percent: "12%",
    focus: false
  },
]

const PercentChips = () => {
  return (
    <div className='chips'>
      {
        chipData.map((chip) => (
          <span className={chip.focus ? "chip focus" : "chip"}>
            {chip.name} {chip.percent}
          </span>
        ))
      }
    </div>
  )
}

export default PercentChips