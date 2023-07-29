import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const Profile = () => {
  const { user, logoutUser } = useAuth()

  //Call the logoutUser function from context to handle user logout
  const handleLogout = () => {
    // Call the logoutUser function from the AuthContext
    logoutUser()
  }

  return (
    <div className="profile">
      <h1>Welcome {user.firstName}</h1>
      <div>
        <img src='img/profile.jpg' alt='' />
      </div>
      <nav className="profile-nav">
        <button>
          <Link to="/journal">
            <img src='img/journal.png' alt='' />
          </Link>
        </button>
        <button>
          <Link to="/meditation">
            <img src='img/meditation.jpg' alt='' />
          </Link>
        </button>
        <button>
          <Link to="/affirmation">
            <img src='img/affirmations.jpg' alt='' />
          </Link>
        </button>
        <button>
          <Link to="/hotline">
            <img src='img/hotline.png' alt='' />
          </Link>
        </button>
        <button
          onClick={handleLogout}
        >
          <Link to="/">
            <img src='img/progress.jpg' alt='' />
          </Link>
          <div className="alt">LOG OUT</div>
        </button>
      </nav>
    </div>
  )
}

export default Profile
