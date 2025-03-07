import {
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
	setPersistence,
	browserSessionPersistence,
	signOut,
} from "firebase/auth";
import { firebaseAuth } from "./firebaseConfig";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Sign in with Google functionality
export const signInWithGoogle = async () => {
	try {
		return setPersistence(firebaseAuth, browserSessionPersistence).then(
			async () => {
				const result = await signInWithPopup(firebaseAuth, googleProvider);
				return {
					success: true,
					user: result.user,
					error: null,
				};
			}
		);
	} catch (error) {
		return {
			success: false,
			user: null,
			error: error.message,
		};
	}
};

// Sign out functionality
export const firebaseSignOut = async () => {
	try {
		await signOut(firebaseAuth);
		return { success: true };
	} catch (error) {
		return {
			success: false,
			error: error.message,
		};
	}
};

// Auth state observer
export const onAuthStateChanged = (callback) => {
	return firebaseAuth.onAuthStateChanged(callback);
};
