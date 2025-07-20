import { useEffect, useState } from "react";
import { LoginView } from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFieldsType } from "@/types/forms";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";

export const LoginContainer = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
			} else {
			}
		});
	}, []);
	const {
		handleSubmit,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<LoginFormFieldsType>();

	const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
		setIsLoading(true);
		console.log("formData", formData);
	};

	return (
		<>
			<LoginView
				form={{
					errors,
					register,
					handleSubmit,
					onSubmit,
					isLoading,
				}}
			/>
		</>
	);
};
