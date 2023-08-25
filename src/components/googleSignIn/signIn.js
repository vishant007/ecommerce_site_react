import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup, signOut } from 'firebase/auth';
import './signin.css';

function SignIn() {
	const [user, setUser] = useState(null);

	const handleClick = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setUser(user);
				localStorage.setItem('user', JSON.stringify(user));
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
				localStorage.removeItem('user');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	return (
		<div>
			{user ? (
				<div class='user-info'>
					<img
						src={user.photoURL}
						alt={user.displayName}
						style={{ width: '32px', height: '32px', borderRadius: '50%' }}
					/>
					<span>{user.displayName}</span>
					<button class='signout-button' onClick={handleSignOut}>
						Sign Out
					</button>
				</div>
			) : (
				<button class='signin-button' onClick={handleClick}>
					Sign In
				</button>
			)}
		</div>
	);
}

export default SignIn;
