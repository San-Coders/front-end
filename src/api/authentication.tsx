import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { todo } from "node:test";

export const CreateUser = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return { data: userCredential.user };
	} catch (error) {
		const firebaseError = error as FirebaseError;
		// @TODO: Format error
		return {
			error: {
				code: firebaseError.code,
				message: firebaseError.message,
			},
		};
	}
};
