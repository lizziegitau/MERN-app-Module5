const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Function to handle login
const login = async (req, res) => {
  const { firstName, lastName, password } = req.body

  // Check if firstname, lastname and password are provided
  if (!firstName ||!lastName || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    // Find the user in the database by their firstname and lastname
    const foundUser = await User.findOne({ firstName, lastName }).exec()

    // If the user is not found, return unauthorized error
    if (!foundUser) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    // Compare the provided password with the hashed password in the database
    const match = await bcrypt.compare(password, foundUser.password)

    // If the password doesn't match, return unauthorized error
    if (!match) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    // Generate an access token containing the user information (firstName, and lastName) valid for 15 minutes
    const accessToken = jwt.sign(
      {
        UserInfo: {
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15m' }
    )

    // Generate a refresh token (valid for 7 days)
    const refreshToken = jwt.sign(
      { firstName: foundUser.firstName },
      { lastName: foundUser.lastName },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    )

    // Set the refresh token as an HttpOnly secure cookie
    res.cookie('jwt', refreshToken, {
      httpOnly: true, // The cookie is accessible only by the web server
      secure: true, // The cookie is transmitted over HTTPS
      sameSite: 'None', // The cookie is allowed to be sent across sites (for cross-site requests)
      maxAge: 7 * 24 * 60 * 60 * 1000, // The cookie expiry, set to match the refresh token's expiry
    })

    // Send the access token in the response
    res.json({ accessToken })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Refresh function to handle the refresh token verification
const refresh = (req, res) => {
    const cookies = req.cookies
  
    //Checks if the cookie named jwt(containing the refresh token) exists
    if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })
  
    const refreshToken = cookies.jwt
  
    //Verification of the refresh token
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Forbidden' })
  
        const foundUser = await User.findOne({ username: decoded.username }).exec()
  
        if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })
  
        const accessToken = jwt.sign(
          {
            UserInfo: {
              firstName: foundUser.firstName,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '15m' }
        )
  
        res.json({ accessToken })
      }
    )
  }
  
  // Function to handle logout of user
  const logout = (req, res) => {
    const cookies = req.cookies

    //Checks if cookie exists
    if (!cookies?.jwt) return res.sendStatus(204)

    //Clears cookies for logout
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' })
  }
  
  module.exports = {
    login,
    refresh,
    logout,
  }
