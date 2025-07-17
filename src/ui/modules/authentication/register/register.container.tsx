import { RegisterView } from "./register.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/forms";
import { useState } from "react";

export const RegisterContainer = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFieldsType>();

	const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (
		formData
	) => {
		console.log("formData", formData);
	};

	return (
		<>
			<RegisterView
				form={{
					errors,
					control,
					register,
					handleSubmit,
					onSubmit,
					isLoading,
				}}
			/>
		</>
	);
};
