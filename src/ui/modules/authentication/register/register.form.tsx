import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
	form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
	const { onSubmit, errors, isLoading, register, handleSubmit } = form;

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="pt-8 pb-5 space-y-4"
			>
				<Input
					isLoading={isLoading}
					placeholder="johndoe@gmail.com"
					type="email"
					register={register} // UseFormRegister<FormValues> - UseFormRegister<FormValues>
					errors={errors}
					errorMsg="Merci de spécifié un email valide"
					id={"email"}
				/>

				<Input
					isLoading={isLoading}
					placeholder="Entrer votre mot de passe ici"
					type="password"
					register={register}
					errors={errors}
					errorMsg="Merci de spécifié un mot de passe"
					id={"password"}
				/>

				<Input
					isLoading={isLoading}
					placeholder="Comment nous as-tu connus ?"
					register={register}
					errors={errors}
					errorMsg="Merci de spécifié un email valide"
					id={"how_did_hear"}
				/>
				<Button isLoading={isLoading} type="submit" fullWith>
					S'inscrire
				</Button>
			</form>
		</>
	);
};
