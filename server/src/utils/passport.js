const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { getUserByEmail,  getUserById } = require("../queries/userQueries");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await getUserByEmail(email);
        console.log("user matched: ", user)
        if (!user) {
          return done(null, false, { message: "Invalid email" });
        }
        const match = await bcrypt.compare(password, user.password);
        console.log("password match :", match)
        if (!match) {
          return done(null, false, { message: "Incorrect password" });
        }
        
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKeyProvider: (req, rawJwtToken, done) => {
    if (req.path.startsWith("/refresh")) {
      done(null, process.env.JWT_REFRESH_SECRET);
    } else {
      done(null, process.env.JWT_SECRET);
    }
  },
};
passport.use(
  new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
      const user = await getUserById(jwt_payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);
module.exports = passport;
