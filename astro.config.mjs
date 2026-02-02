import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightHeadingBadges from 'starlight-heading-badges';
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import react from '@astrojs/react';


export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: { 'en': 'AI² Robotics', 'zh-CN': '智平方' },
			logo: {
				light: './src/assets/logo.png',
				dark: './src/assets/logo-white.png',
				replacesTitle: true,
			},
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://' }],
			components: {
				// 重写默认的 `SocialIcons` 组件。
				SocialIcons: './src/components/NavLink.astro',
				PageFrame: './src/components/CustomFooter.astro',
			},
			defaultLocale: 'en',
			locales: {
				// 英文文档在 `src/content/docs/en/` 中。
				en: {
					label: 'English',
				},
				// 简体中文文档在 `src/content/docs/zh-cn/` 中。
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			sidebar: [
				{
					label: 'Start Here',
					translations: {
						'zh-CN': '从这里开始',
					},
					items: [
						'start/product-introduction', 'start/getting-started',
					],
				},
				{
					label: 'AlphaBot2 Hardware',
					translations: {
						'zh-CN': 'AlphaBot2 硬件',
					},
					badge: {
						text: {
							'zh-CN': '新',
							'en': 'New',
						},
						variant:"tip",
					},
					items: [
						'alphabot2-hardware/architecture', 'alphabot2-hardware/specifications', 'alphabot2-hardware/interfaces', 'alphabot2-hardware/maintenance',
					],
				},
				{
					label: 'AlphaBot SDK',
					translations: {
						'zh-CN': 'AlphaBot SDK',
					},
					items: [
						'sdk/overview', 'sdk/c-plus-plus-api', 'sdk/python-api',
					],
				},
			],
			customCss: [
				// 你的自定义 CSS 文件的相对路径
				'./src/styles/custom.css',
			],
			plugins: [
				starlightImageZoom(),
				starlightHeadingBadges(),
				viewTransitions(),
			],
		}),
	],
});
