import { AppLinks, FooterLinks } from "@/types/app-links";
import { RiGithubFill, RiLinkedinFill, RiSlackFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
	{
		label: "Accueil",
		baseUrl: "/",
		type: "internal",
	},
	{
		label: "Projets",
		baseUrl: "/projects",
		type: "internal",
	},
	{
		label: "San Coders",
		baseUrl: "/design-system",
		type: "internal",
	},
	{
		label: "Formations",
		baseUrl: "https://google.com",
		type: "external",
	},
];
const footerUserLinks: AppLinks[] = [
	{
		label: "Mon espace",
		baseUrl: "/profil",
		type: "internal",
	},
	{
		label: "Connexion",
		baseUrl: "/connexion",
		type: "internal",
	},
	{
		label: "Inscription",
		baseUrl: "/connexion/inscription",
		type: "internal",
	},
	{
		label: "Mot de passe oublié",
		baseUrl: "/connexion/mot-de-passe-perdu",
		type: "internal",
	},
];
const footerInformationLinks: AppLinks[] = [
	{
		label: "CGU",
		baseUrl: "/cgu",
		type: "internal",
	},
	{
		label: "Confidentialité",
		baseUrl: "/confidentiality",
		type: "internal",
	},
	{
		label: "A props",
		baseUrl: "/about",
		type: "internal",
	},
	{
		label: "Contact",
		baseUrl: "/contact",
		type: "internal",
	},
];

export const footerSocialMediaLinks: AppLinks[] = [
	{
		label: "Github",
		baseUrl: "https://github.sloudy.com",
		type: "external",
		icon: RiGithubFill,
	},
	{
		label: "Linkdin",
		baseUrl: "https://linkdin.sloudy.com",
		type: "external",
		icon: RiLinkedinFill,
	},
	{
		label: "Slack",
		baseUrl: "https://web.sloudy.com/slack",
		type: "external",
		icon: RiSlackFill,
	},
];

export const footerLinks: FooterLinks[] = [
	{
		label: "App",
		links: footerApplicationLinks,
	},
	{
		label: "Utilisateurs",
		links: footerUserLinks,
	},
	{
		label: "Informations",
		links: footerInformationLinks,
	},
	{
		label: "Réseaux",
		links: footerSocialMediaLinks,
	},
];
