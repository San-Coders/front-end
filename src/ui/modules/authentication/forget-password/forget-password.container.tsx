import { useState } from "react";
import { ForgetPasswordView } from "./forget-password.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldsType } from "@/types/forms";

export const ForgetPasswordContainer = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		handleSubmit,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<ForgetPasswordFormFieldsType>();

	const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (
		formData
	) => {
		setIsLoading(true);
		console.log("formData", formData);
	};

	return (
		<>
			<ForgetPasswordView
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
