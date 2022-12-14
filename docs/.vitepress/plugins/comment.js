import { useRoute } from "vitepress";
import { watch, createApp } from "vue";
import commentConfig from "../config/comment.config";

let isMounted = false;
let Gitalk = null;
const containerId = "comment-container";
let back2Top = null;

export default ({ app, router }) => ({
	methods: {
		unmountComment() {
			this.$nextTick(() => {
				const footer = document.querySelector(".VPDoc .VPDocFooter");
				if (!footer) return;
				const container = document.getElementById(containerId);
				if (!container) return;
				container.remove();
			});
		},
		mountComment() {
			const commentComponent = app._context.components.Comment;
			const docData = router.route.data || {};
			const { frontmatter, title, relativePath } = docData || {};
			const { layout = "doc", comment = true } = frontmatter;
			const enable = layout === "doc" && comment;
			if (!commentComponent || !enable) {
				this.unmountComment();
				return;
			}

			// mount comment component
			this.$nextTick(() => {
				const footer = document.querySelector(".VPDoc .VPDocFooter");
				if (!footer) return;
				const container = document.getElementById(containerId);
				if (container) container.innerHTML = "";
				const commentBlock = container ?? document.createElement("DIV");
				commentBlock.id = containerId;
				footer.appendChild(commentBlock);
				createApp(commentComponent).mount(commentBlock);
				const renderGitalk = () => {
					const gk = new Gitalk(
						commentConfig({ window, frontmatter, title, relativePath })
					);
					gk.render(containerId);
					console.info(`render gitalk for ${title}.`);
				};
				if (Gitalk) {
					renderGitalk();
					return;
				}
				import("gitalk").then((m) => {
					Gitalk = m.default;
					renderGitalk();
				});
			});
		},
	},
	updated() {
		if (isMounted) return;
	},

	mounted() {
		if (isMounted) return;
		isMounted = true;
		this.mountComment();
		const route = useRoute();
		watch(
			() => route.path,
			() => {
				this.mountComment();
			}
		);
	},
});
