import { Strategy as LocalStrategy } from "passport-local";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { Strategy as FacebookStrategy } from "passport-facebook";

import { User } from "../models/user";

export function configurePassportSession(passport) {
	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((user, done) => {
		// User.findById(user, done);
		done(null, user);
	});
}

export function localAuthentication(passport) {
	// CONFIGURE AUTHENTICATION
	passport.use(
		"local",
		new LocalStrategy(
			{
				usernameField: "email",
				passwordField: "password"
			},
			async (username, password, done) => {
				let user = await User.findOne({ email: username });
				if (!user) return done(null, false);
				let passwordsMatch = await user.isPasswordValid(password);
				if (passwordsMatch) return done(null, user);
				else return done(null, false);
			}
		)
	);
}

export function googleAuthentication(passport) {
	passport.use(
		"google",
		new GoogleStrategy(
			{
				clientID:
					"1082904668838-topbr433ohjdd43f2n4efoi3ujrul1a2.apps.googleusercontent.com",
				clientSecret: "9ValY4dt8IxcUDoYUK5kNxrx",
				callbackURL: "http://localhost:8080/login/google/return",
				userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
			},
			async (token, tokenSecret, profile, done) => {
				console.log(arguments);
				let user = await User.findOne({ googleId: profile.id });
				if (!user) {
					user = await User.create({
						name: profile.displayName,
						email: profile.emails[0].value,
						googleId: profile.id,
						token
					});
				}

				done(null, user);
			}
		)
	);
}
