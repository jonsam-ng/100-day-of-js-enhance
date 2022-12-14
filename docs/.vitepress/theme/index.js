import DefaultTheme from "vitepress/theme";
import Badge from "../components/Badge.vue";
import Badges from "../components/Badges.vue";
import Pdf from "../components/Pdf.vue";
import Qrcode from "../components/QrCode.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import zoomMixin from "../plugins/zoomMixin";
import qrcodeMixin from "../plugins/qrcode";
import RunCode from "../components/run-code/RunCode.vue";
import XMindViewer from "../components/XMindViewer.vue";
import BackToTop from "../components/BackToTop.vue";
import Comment from "../components/Comment.vue";
import Bilibili from "../components/Bilibili.vue";
import Xigua from "../components/Xigua.vue";
import { ExternalLinkIcon } from "../components/ExternalLinkIcon";
import IFrame from "../components/IFrame.vue";
import Background from "../components/Background.vue";
import Layout from "../components/Layout.vue";

import commentMixin from "../plugins/comment";
import back2topMixin from "../plugins/back2top";
import progressMixin from "../plugins/nprogress";
import globalMixin from "../plugins/global";
import { isFunction } from "../util";
import "@cloudgeek/vue3-video-player/dist/vue3-video-player.css";
import "./custom.styl";
import "./nprogress.styl";

/**
 * register global components
 * @note must provide Component's name
 */
const components = [
	Badge,
	Badges,
	Pdf,
	VideoPlayer,
	Qrcode,
	BackToTop,
	Comment,
	RunCode,
	XMindViewer,
	Bilibili,
	Xigua,
	ExternalLinkIcon,
	IFrame,
	Background,
];

// register global mixins
const mixins = [
	zoomMixin,
	qrcodeMixin,
	commentMixin,
	back2topMixin,
	progressMixin,
	globalMixin,
];

export default {
	...DefaultTheme,
	Layout,
	enhanceApp: async ({ app, router, siteData }) => {
		// install components
		components.forEach((component) => app.component(component.name, component));
		// install mixins
		mixins.forEach((mixin) =>
			app.mixin(isFunction(mixin) ? mixin({ app, router, siteData }) : mixin)
		);
	},
	setup() {},
};
