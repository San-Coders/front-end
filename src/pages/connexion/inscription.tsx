// Component:
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Register() {
	return (
		<>
			<Seo
				title="Inscription sur San Coders"
				description="Page de d'inscription"
			/>
			<Layout>
				<RegisterContainer />
			</Layout>
		</>
	);
}
