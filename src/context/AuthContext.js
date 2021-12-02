import React, { useState, useContext, useEffect, createContext } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthContext() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState();

	// signin
	const signin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				return user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.warn(`${errorCode}: ${errorMessage}`);
			});
	};

	// Handling user state change
	onAuthStateChanged(auth, (user) => {
		setUser(user);
		setLoading(false);
	});

	const value = {
		user,
		signin
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading ? (
				children
			) : (
				<Box
					sx={{
						width: '100%',
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						marginTop: '250px'
					}}
				>
					<CircularProgress color='secondary' />
				</Box>
			)}
		</AuthContext.Provider>
	);
}
