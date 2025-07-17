import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export const CurentCourceCtaView = () => {
	return (
		<div className="bg-gray-300">
			<Container className="py-24 text-center">
				<Typography variant="h2" component="h2" className="mb-2.5">
					Formation React.js gratuite
				</Typography>
				<Typography variant="lead" component="h3" className="mb-5">
					Apprend à coder l'app des singes codeurs
				</Typography>
				<Typography
					variant="caption3"
					component="p"
					theme="gray"
					className="mb-16"
				>
					Si tu veux un CV plus sexy que ton ex, suis cette formation
					complète !
				</Typography>
				<a href="/#" target="_blank">
					<div className="relative bg-gray-400 rounded h-[626px]">
						<div className="flex flex-col items-center justify-center h-full gap-2 relative z-10  rounded bg-gray opacity-0 hover:opacity-95 text-white animate">
							<RiPlayCircleLine size={42} />
							<Typography
								variant="caption2"
								theme="white"
								className="uppercase"
								weight="medium"
							>
								Lire la formation
							</Typography>
						</div>
						<Image
							fill
							src={"/assets/images/course-cta.jpg"}
							alt={"Image Cta"}
							className="object-cover object-center rounded"
						></Image>
					</div>
				</a>
			</Container>
		</div>
	);
};
