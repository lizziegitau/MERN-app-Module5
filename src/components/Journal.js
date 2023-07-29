import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Journal = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [entries, setEntries] = useState([])

  //Handle the title and text changes in the journal
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  //Handle the adding of a new journal entry
  const handleAddEntry = async () => {
    //Checks if the title and text are empty using trim method( used to remove any leading and trailing whitespace characters)
    if (title.trim() !== '' && text.trim() !== '') {

      const url = 'https://module5-backend-hpov.vercel.app/'

      try {
        //Add the new entry to the db
        const response = await axios.post(`${url}journal`, { title, text })
        const newEntry = response.data
        //Add the new entry to the array of entries
        setEntries((prevEntries) => [...prevEntries, newEntry])
        //Resets the title and text in the journal
        setTitle('')
        setText('')
      } catch (error) {
        alert('Error adding entry. Please try again later.')
      }
    } else {
      alert('Title and text are required.')
    }
  }

  //Handle the deleting of an entry
  const handleDeleteEntry = async (index) => {

    const url = 'https://module5-backend-hpov.vercel.app/'

    const entryId = entries[index]._id; // Get the ID of the journal entry at the specified index

    try {
      //Deletes the entry from the db
      await axios.delete(`${url}journal/${entryId}`)
      //Returns the other entries minus the deleted one using the splice method
      const updatedEntries = [...entries]
      updatedEntries.splice(index, 1)
      setEntries(updatedEntries)
    } catch (error) {
      alert('Error deleting journal entry. Please try again later.')
    }
  }

  //Set up an axios interceptor using the useEffect hook
  useEffect(() => {
    //Create a new interceptor to be triggered before any outgoing request is sent
    const axiosInterceptor = axios.interceptors.request.use((config) => {
      //Gets the accessToken from local storage
      const token = localStorage.getItem('accessToken') // Assuming your JWT token is stored in localStorage
      //If the token exists add it to the authorization header as a bearer token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    // Clean up the interceptor when the component is unmounted
    return () => {
      //Remove the interceptor using eject()
      axios.interceptors.request.eject(axiosInterceptor)
    }
  }, [])

  return (
    <div className="journal-container">
      <div className="side-panel">
        <h3>Previous Entries:</h3>
        {entries.length === 0 ? (
          <p>No previous entries.</p>
        ) : (
          <ul>
            {entries.map((item, index) => (
              <li key={index}>
                <button className="delete" onClick={() => handleDeleteEntry(index)}>Delete</button>
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="journal-content">
        <h2>My Journal</h2>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
        <textarea
          rows="5"
          cols="40"
          value={text}
          onChange={handleTextChange}
          placeholder="Write your journal text here..."
        />
        <button onClick={handleAddEntry}>Add Entry</button>
      </div>
    </div>
  )
}

export default Journal
