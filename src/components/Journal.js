import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Journal = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [entries, setEntries] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAddEntry = async () => {
    if (title.trim() !== '' && text.trim() !== '') {
      const url = 'https://module5-backend-hpov.vercel.app/';
      try {
        const response = await axios.post(`${url}journal`, { title, text });
        const newEntry = response.data;
        setEntries((prevEntries) => [...prevEntries, newEntry]);
        setTitle('');
        setText('');
      } catch (error) {
        alert('Error adding entry. Please try again later.');
      }
    } else {
      alert('Title and text are required.');
    }
  };

  const handleDeleteEntry = async (index) => {
    const url = 'https://module5-backend-hpov.vercel.app/';
    const entryId = entries[index]._id; // Get the ID of the journal entry at the specified index
    try {
      await axios.delete(`${url}journal/${entryId}`);
      const updatedEntries = [...entries];
      updatedEntries.splice(index, 1);
      setEntries(updatedEntries);
    } catch (error) {
      alert('Error deleting journal entry. Please try again later.');
    }
  };

  useEffect(() => {
    const axiosInterceptor = axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('accessToken'); // Assuming your JWT token is stored in localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Clean up the interceptor when the component is unmounted
    return () => {
      axios.interceptors.request.eject(axiosInterceptor);
    };
  }, []);

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
  );
};

export default Journal;
