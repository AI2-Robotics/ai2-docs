import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightHeadingBadges from 'starlight-heading-badges';
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import { remarkHeadingId } from "remark-custom-heading-id";
import react from '@astrojs/react';


export default defineConfig({
	markdown: {
		remarkPlugins: [remarkHeadingId],
	},
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
			// defaultLocale: 'zh-cn',
			locales: {
				// 英文文档在 `src/content/docs/en/` 中。
				'en': {
					label: 'English',
					lang: 'en',
				},
				// 简体中文文档在 `src/content/docs/zh-cn/` 中。
				root: {
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
					label: 'AlphaBot 2',
					translations: {
						'zh-CN': 'AlphaBot 2',
					},
					badge: {
						text: {
							'zh-CN': '新',
							'en': 'New',
						},
						variant: "tip",
					},
					items: [
						'alphabot2/hardware/getting-started',
						'alphabot2/hardware/architecture',
						'alphabot2/hardware/operation-guide',
						'alphabot2/hardware/common-faults',
						'alphabot2/hardware/maintenance',
						'alphabot2/hardware/safety-regulations',
					],
				},
				{
					label: 'VR Teleoperation',
					translations: {
						'zh-CN': 'VR 遥操',
					},
					items: [
						'vr-teleoperation/getting-started', 'vr-teleoperation/introduction', 'vr-teleoperation/operation-guide', 'vr-teleoperation/common-faults', 'vr-teleoperation/maintenance', 'vr-teleoperation/safety-regulations',
					],
				},
				{
					label: 'Exoskeleton Teleoperation',
					translations: {
						'zh-CN': '外骨骼遥操',
					},
					items: [
						'exoskeleton-teleoperation/getting-started', 'exoskeleton-teleoperation/introduction', 'exoskeleton-teleoperation/operation-guide', 'exoskeleton-teleoperation/common-faults', 'exoskeleton-teleoperation/maintenance', 'exoskeleton-teleoperation/safety-regulations',
					],
				},
				{
					label: 'AlphaBotCore SDK',
					translations: {
						'zh-CN': 'AlphaBotCore SDK',
					},
					items: [
						'sdk/overview', {
							label: 'C++ API',
							collapsed: true,
							translations: {
								'zh-CN': 'C++ API',
							},
							items: [
								'sdk/c-plus-plus/quick-start',
								'sdk/c-plus-plus/arm-api',
								'sdk/c-plus-plus/chassis-api',
								'sdk/c-plus-plus/head-api',
								'sdk/c-plus-plus/torso-api',
								'sdk/c-plus-plus/sensor-api',
								'sdk/c-plus-plus/trajectory-api',
								'sdk/c-plus-plus/sensor-synchronizer-api',
								'sdk/c-plus-plus/sensor-emergency-stop-monitor-api',
								'sdk/c-plus-plus/kinematics-api',
								'sdk/c-plus-plus/data-structures',
								'sdk/c-plus-plus/examples',
							]
						},
						{
							label: 'Python API',
							collapsed: true,
							translations: {
								'zh-CN': 'Python API',
							},
							items: [
								'sdk/python/quick-start',
								'sdk/python/arm-api',
								'sdk/python/chassis-api',
								'sdk/python/head-api',
								'sdk/python/torso-api',
								'sdk/python/sensor-api',
								'sdk/python/sensor-emergency-stop-monitor-api',
								'sdk/python/kinematics-api',
								'sdk/python/data-structures',
								'sdk/python/examples',
							]
						},
					],
				},
				{
					label: 'Statement',
					translations: {
						'zh-CN': '声明',
					},
					items: [
						'statement/disclaimer', 
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
