export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,
	//
	components: false,
	//
	storybook: {
		addons: [
			"@storybook/addon-controls",
			"@storybook/addon-notes",
			"@storybook/addon-actions",
			"@storybook/addon-essentials",
			"@storybook/addon-links",
		],
	},
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ["~/plugins/stories.js"],
	//css: ["~/components/Button/button.css"],
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.(scss|css)$/,
	// 			use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
	// 		},
	// 	],
	// },
};
