import { defineConfig } from "vitepress";
import AutoNavPlugin from "vitepress-auto-nav-sidebar";

/** see https://www.npmjs.com/package/vitepress-auto-nav-sidebar */
const { sidebar, nav } = AutoNavPlugin({
	ignoreFolders: ["node_modules", "assets", "public", ".vitepress", "utils"],
	ignoreFiles: ["index"],
	showSideIcon: true,
	showNavIcon: true,
	dirPrefix: "📂 ",
	filePrefix: "📃 ",
	isCollapse: true,
	collapsed: false,
});

const themeConfig = {
	logo: "/logo/favicon-16x16.png",
	siteTitle: "100 days of JavaScript",
	outline: [2, 4],
	nav: [
		...nav,
		{
			text: "⛓️ More",
			items: [
				{ text: "源码阅读", link: "https://source.jonsam.site" },
				{ text: "Fancy-DSA", link: "https://dsa.jonsam.site" },
				{ text: "氧气空间", link: "https://ox.jonsam.site" },
				{
					text: "深入学习设计模式",
					link: "http://docs.jonsam.site/project-5/",
				},
				{ text: "导航", link: "https://source.jonsam.site/nav" },
			],
		},
		{ text: "🏷️ Blog", link: "https://www.jonsam.site" },
	],
	sidebar,
	socialLinks: [
		{
			icon: "github",
			link: "https://github.com/jonsam-ng/100-day-of-js-enhance",
		},
	],
	footer: {
		message: "Released under the MIT License.",
		copyright: "Copyright © 2022-present, made by Jonsam NG with 💖",
	},
	editLink: false,
	// {
	// 	pattern:
	// 		"https://github.com/jonsam-ng/100-day-of-js-enhance/edit/master/docs/:path",
	// 	text: "Edit this page on GitHub",
	// },
	lastUpdatedText: "最近更新",
	docFooter: {},
	outlineTitle: "🔗 内容纲要：",
};

export default defineConfig({
	lang: "zh-CN",
	locales: {},
	title: "100 days of JavaScript",
	titleTemplate: false,
	description: "100 days to enhance your skills on JavaScript.",
	appearance: true,
	base: "/",
	lastUpdated: true,
	head: [
		["link", { rel: "shortcut icon", href: "/logo/favicon.ico", sizes: "any" }],
		["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		["meta", { name: "theme-color", content: "#579871" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		],
		["link", { rel: "manifest", href: "/manifest.json" }],
		["link", { rel: "apple-touch-icon", href: "/logo/apple-touch-icon.png" }],
		// [
		// 	"link",
		// 	{
		// 		rel: "mask-icon",
		// 		href: "/icons/safari-pinned-tab.svg",
		// 		color: "#3eaf7c",
		// 	},
		// ],
		// [
		//   "meta",
		//   {
		//     name: "msapplication-TileImage",
		//     content: "/icons/msapplication-icon-144x144.png",
		//   },
		// ],
		// ["meta", { name: "msapplication-TileColor", content: "#000000" }],
	],
	cleanUrls: "without-subfolders",
	markdown: {
		theme: "material-palenight",
		lineNumbers: true,
		headers: {
			level: [0, 0],
		},
	},
	themeConfig,
	pwa: {
		workboxOptions: {
			skipWaiting: true,
		},
	},
});