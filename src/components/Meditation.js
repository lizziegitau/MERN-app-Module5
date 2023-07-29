import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Timer = ({ meditationId }) => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState(null)

  useEffect(() => {
    let intervalId

    //Checks if the timer is running
    if (isRunning) {
      //Set an interval that runs every second
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  //Starts the timer
  const handleStartClick = () => {
    setIsRunning(true)
  }

  //Stops the timer
  const handleStopClick = () => {
    setIsRunning(false)
  }

  //Resets the timer
  const handleResetClick = () => {
    setIsRunning(false)
    setSeconds(0)
  }

  //Formats the time to minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')

    return (
      <div className="time">
        <span className="minutes">{formattedMinutes}</span>:<span className="seconds">{formattedSeconds}</span>
      </div>
    )
  }

  const meditationExercises = [
    {
      id: 1,
      title: '4-4-4',
      description: 'Inhale for 4 seconds, hold the breath for 4 seconds, and then exhale for 4 seconds. Repeat the process for 5 minutes.'
    },
    {
      id: 2,
      title: '4-7-8',
      description: 'Inhale for 4 seconds, hold the breath for 7 seconds, and then exhale for 8 seconds. Repeat the process for 5 minutes.'
    },
    {
      id: 3,
      title: '10-1-10',
      description: 'Inhale for 10 seconds, hold the breath for 1 second, and then exhale for 10 seconds. Repeat the process for 5 minutes.'
    },
    {
      id: 4,
      title: '3-4-5',
      description: 'Inhale for 3 seconds, hold the breath for 4 seconds, and then exhale for 5 seconds. Repeat the process for 5 minutes.'
    },
    {
      id: 5,
      title: 'Gratitude Meditation',
      description: 'Focus on things you are grateful for in your life. Reflect on the positive aspects and people you are thankful for, cultivating feelings of gratitude.'
    },
    {
      id: 6,
      title: 'Nature Meditation',
      description: 'Sit outside in nature and be present with the sounds, sights, and sensations around you. Connect with the natural world and feel a sense of grounding.'
    },
    {
      id: 7,
      title: 'Visualization Meditation',
      description: 'Imagine yourself in a peaceful and serene place, such as a beach or forest. Use your senses to immerse yourself in the experience and feel the calmness.'
    },
    {
      id: 8,
      title: 'Walking Meditation',
      description: 'Go for a slow walk in a quiet area, paying attention to the sensations of each step. Be present in the moment and observe your surroundings mindfully.'
    },
    {
      id: 9,
      title: 'Body Movement Meditation',
      description: 'Engage in gentle yoga or tai chi, focusing on the movements and the connection between your mind and body.'
    },
    {
      id: 10,
      title: 'Mantra Meditation',
      description: 'Repeat a soothing word or phrase, such as "peace," "calm," or "relax," silently or out loud. Let the mantra anchor your mind and bring tranquility.'
    }
  ]

  //Handles the click of a meditation click
  const handleExerciseClick = (exerciseId) => {
    //Sets the selected exercise to its id
    setSelectedExercise(exerciseId)

    //Finds the selected exercise
    const selectedExercise = meditationExercises.find((exercise) => exercise.id === exerciseId)

    const url = 'https://module5-backend-hpov.vercel.app/'

    //Adds the selected exercise to the db
    axios.post(`${url}meditation`, selectedExercise)
      .then((response) => {
        alert('Exercise added to the database')
        console.log('Exercise added to the database:', response.data)
      })
      .catch((error) => {
        alert('Error adding exercise: ' + error.message)
        console.error('Error adding exercise:', error)
      })
  }

  return (
    <div className="meditation">
      <h2 className="med-title">Meditation Timer</h2>
      <div className="timer">{formatTime(seconds)}</div>
      <div>
        {isRunning ? (
          <button className="stop" onClick={handleStopClick}>Stop</button>
        ) : (
          <button className="start" onClick={handleStartClick}>Start</button>
        )}
        <button className="reset" onClick={handleResetClick}>Reset</button>
      </div>

      <div className="exercises">
        <h3 className="exercises-header">Example Meditation Exercises:</h3>
        <ul className="exercise">
          {meditationExercises.map((exercise) => (
            <li key={exercise.id}>
              <button className={`exercise-item ${selectedExercise === exercise.id ? 'selected' : ''}`} onClick={() => handleExerciseClick(exercise.id)}><strong>{exercise.title}</strong></button>
              <p>{exercise.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Timer
