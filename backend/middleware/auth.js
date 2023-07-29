const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/user')

//object for JWT strategy
const jwtOptions = {
  //extract JWT from Authorization header as Bearer Token
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //verify with key
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
}

passport.use(
  //set up new strategy to use jwtOptios
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await User.findById(jwtPayload.userId)
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    } catch (error) {
      return done(error, false)
    }
  })
)

module.exports = passport