import { BreadCrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface Props {
	children?: React.ReactNode;
	isBreadCrumbs?: boolean;
}

export const Layout = ({ children, isBreadCrumbs = true }: Props) => {
	return (
		<>
			<Navigation />
			{isBreadCrumbs && <BreadCrumbs />}
			{children}
			<Footer />
		</>
	);
};
