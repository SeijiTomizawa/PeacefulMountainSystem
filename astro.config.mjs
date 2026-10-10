import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://peacefulmountainsystem.com",
	output: "static",
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
	],
	devToolbar: { enabled: false },
	vite: {
		server: {
			hmr: {
				protocol: 'ws',
				host: 'localhost',
				clientPort: 4321,
			},
		},
	},
});
