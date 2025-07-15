import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: false,
	images: { unoptimized: true },
	output: "export",
	distDir: "out",
	eslint: {
		ignoreDuringBuilds: true,
	},

	// Your web app's Firebase configuration
	env: {
		API_KEY: "",
		AUTH_DOMAIN: "",
		PROJECT_ID: "",
		STORAGE_BUCKET: "",
		MESSAGING_SENDER_ID: "",
		APP_ID: "",
	},
};

export default nextConfig;
