import { RegisterView } from "./register.view";
import { RegisterFormFieldsType } from "@/types/forms";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useToggle } from "@/hooks/use-toggle";

import { CreateUser } from "@/api/authentication";

export const RegisterContainer = () => {
	const { value: isLoading, setValue: setIsLoading } = useToggle({
		initial: false,
	});

	const {
		handleSubmit,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFieldsType>();

	const handleCreateUserAuthentication = async ({
		email,
		password,
		how_did_hear,
	}: RegisterFormFieldsType) => {
		const { error, data } = await CreateUser(email, password);
		if (error) {
			setIsLoading(false);
			toast.error(error.message);
			return;
		}
		// @TODO: Create user doccument
		toast.success("Bienvenue dans la communauté");
		setIsLoading(false);
		reset();
	};

	const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (
		formData
	) => {
		setIsLoading(true);

		const { password } = formData;

		if (password.length <= 5) {
			setError("password", {
				type: "manual",
				message:
					"Ton mot de passe doit comporter au minimum 6 caractères",
			});
			return;
		}

		handleCreateUserAuthentication(formData);
	};

	return (
		<RegisterView
			form={{
				errors,
				register,
				handleSubmit,
				onSubmit,
				isLoading,
			}}
		/>
	);
};
