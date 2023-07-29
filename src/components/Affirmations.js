import React, { useState } from 'react'
import affirmationsData from '../data/affirmationsData'

const Affirmations = () => {
  const [randomAffirmation, setRandomAffirmation] = useState('')

  const getRandomAffirmation = () => {
    //Use the floor and random methods to generate a random affirmation
    const randomIndex = Math.floor(Math.random() * affirmationsData.length)
    return affirmationsData[randomIndex]
  }

  //Handles the click of the new affirmation button by calling the getRandomAffirmation function
  const handleNewQuoteClick = () => {
    const affirmation = getRandomAffirmation()
    setRandomAffirmation(affirmation)
  }

  return (
    <body>
      <div className="container">
        <h2 className="title">Affirmation Generator</h2>
        <div className="main-area">
          <div className="text-area">
            <span className="quote">{randomAffirmation && randomAffirmation.text}</span>
          </div>

          <div className="button-area">
            <button id="new-quote" onClick={handleNewQuoteClick}>
              New Affirmation
            </button>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Affirmations
