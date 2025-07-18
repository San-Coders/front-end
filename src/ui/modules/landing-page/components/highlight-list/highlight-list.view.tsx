import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

export const HighlightListView = () => {
	return (
		<Container className="py-24 space-y-10">
			<div className="flex justify-center gap-24">
				<div className="w-[520px] h-[350px] relative mt-10">
					<Image
						fill
						src={"assets/svg/cake.svg"}
						alt={"Illustration d'un gateau ..."}
					></Image>
				</div>
				<div className="max-w-md space-y-7">
					<Typography variant="h3" component="h2">
						De novice à développeur en un clin d'oeil !
					</Typography>
					<div className="space-y-3">
						<ListPoint>Progresse rapidement.</ListPoint>
						<ListPoint>Inspire-toi.</ListPoint>
						<ListPoint>Gagne de l'assurance.</ListPoint>
					</div>
					<div className="relative inline-block">
						<Button
							baseUrl="/#"
							icon={{ icon: RiArrowRightLine }}
							iconPosition="right"
						>
							Let's go
						</Button>
						<Image
							width={25}
							height={27}
							src={"/assets/svg/cursor.svg"}
							alt="Image d'un curseur"
							className="absolute -bottom-5 right-7"
						></Image>
					</div>
				</div>
			</div>
			<div className="flex flex-row-reverse justify-center gap-24">
				<div className="w-[520px] h-[350px] relative mt-10">
					<Image
						fill
						src={"assets/svg/top.svg"}
						alt={"Illustration d'un gateau ..."}
					></Image>
				</div>
				<div className="max-w-md space-y-7">
					<Typography variant="h3" component="h2">
						Booste ta carrière de développeur !
					</Typography>
					<div className="space-y-3">
						<ListPoint>
							Partage tes projets, obtiens des feedbacks.
						</ListPoint>
						<ListPoint>
							Connecte-toi, élargis ton réseau pro !
						</ListPoint>
						<ListPoint>
							Reste inspiré, motivé avec notre communauté.
						</ListPoint>
					</div>
					<div className="relative inline-block">
						<Button
							baseUrl="/#"
							icon={{ icon: RiArrowRightLine }}
							iconPosition="right"
							variant="secondary"
						>
							Démarrer
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
};

interface Props {
	children: React.ReactNode;
}

const ListPoint = ({ children }: Props) => {
	return (
		<div className="flex items-start gap-2">
			<RiCheckboxCircleLine size={24} className="mt-0.5 text-secondary" />
			<Typography variant="body-lg" component="span">
				{children}
			</Typography>
		</div>
	);
};
