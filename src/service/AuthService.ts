import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const AuthService = {
	loginWithGoogle: async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		try {
			const userCred = await firebase.auth().signInWithPopup(provider);
			return {
				user: userCred.user,
			};
		} catch (e: any) {
			return {
				error: e.message,
			};
		}
	},
	logout: async () => {
		await firebase.auth().signOut();
	},

	createUserWithEmailAndPassword: async (email: string, password: string) => {
		try {
			const userCred = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			await userCred.user?.sendEmailVerification({
				url: "http://localhost:3000",
			});
			return {
				user: userCred.user,
			};
		} catch (e: any) {
			return {
				error: e.message,
			};
		}
	},
	signInUserWithEmailAndPassword: async (email: string, password: string) => {
		try {
			const userCred = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			return {
				user: userCred.user,
			};
		} catch (e: any) {
			return {
				error: e.message,
			};
		}
	},
	resetPassword: async (email: string) => {
		try {
			await firebase
				.auth()
				.sendPasswordResetEmail(email, { url: "http://localhost:3000/login" });
		} catch (e: any) {
			return e.message;
		}
	},

	deleteAccount: async () => {
		try {
			await firebase.auth().currentUser?.delete();
		} catch (e: any) {
			return e.message;
		}
	},
	updatePassword: async (newPassword: string) => {
		try {
			await firebase.auth().currentUser?.updatePassword(newPassword);
			return "Update successfully";
		} catch (e: any) {
			return e.message;
		}
	},
};