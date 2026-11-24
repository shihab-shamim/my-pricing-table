const slug = 'my-pricing-table';

export const dashboardInfo = (info) => {
	const { version, hasPro, adminUrl } = info;

	return {
		name: `My Pricing Table`,
		displayName: `My Pricing Table - Create Responsive Pricing Tables`,
		description: 'A lightweight WordPress plugin that helps you create and embed beautiful, responsive pricing tables in minutes.',
		slug,
		version,
		isPremium:true,
		hasPro,
		adminUrl,
		displayOurPlugins: true,
		media: {
			logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
			banner: `https://ps.w.org/my-pricing-table/assets/icon.svg?rev=3623305`,
			thumbnail: `https://ps.w.org/my-pricing-table/assets/icon.svg?rev=3623305`,
		},
		logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
		banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			landing: `https://pricing-table.bplugins.com/`,
			docs: `https://bplugins.com/support/`,
			pricing: `https://bplugins.com/products/${slug}/pricing`,
		},
		startButton: {
			label: 'Add New Table',
			url: `post-new.php?post_type=bppt-pricing-table`
		},
		freemius: {
			product_id: 19836,
			plan_id: 32912,
			public_key: 'pk_a175d9d65767cc56ca88c39e031a9'
		}
	};
};

export const changelogs = [
	{
		version: '2.0.0',
		type: 'update',
		list: [
			'Major update: Added powerful Gutenberg Block for Pricing Tables',
			'5 professionally designed responsive themes (Circular Badge, Ribbon Banner, Gradient Bar, Modern Card, Arrow Banner)',
			'Added container background, padding, margin, and border-radius controls',
			'Custom color overrides for headers, cards, buttons, and badges',
			'Responsive column controls for desktop, tablet, and mobile',
			'Modern React admin dashboard with live demo preview'
		]
	},
	{
		version: '1.0.1',
		type: 'update',
		list: [
			'updated codestar framework'
		]
	},
	{
		version: '1.0.0',
		type: 'new',
		list: [
			'Initial Release'
		]
	}
];

export const welcomeInfo = (adminUrl) => ({
	keywords: ['5 Templates', 'Responsive', 'Color Schemes', 'Shortcode Ready'],
	keywordsLabel: 'Features',
	gettingStarted: {
		tabs: [
			{
				key: 'shortcode',
				label: 'ShortCode',
				steps: [
					{
						num: 1,
						title: 'Create a Pricing Table',
						body: 'Go to <strong>Pricing Table › Add New</strong> to configure your pricing plans and features.',
						link: { url: `${adminUrl}post-new.php?post_type=bppt-pricing-table`, label: 'Add New' }
					},
					{
						num: 2,
						title: 'Choose Style & Colors',
						body: 'Select from 5 responsive templates, set currency symbols, plan prices, and feature items.'
					},
					{
						num: 3,
						title: 'Copy Shortcode',
						body: 'Publish the table and copy the generated shortcode: <code>[bp-table id=POST_ID]</code>.',
						link: { url: `${adminUrl}edit.php?post_type=bppt-pricing-table`, label: 'View All Tables' }
					},
					{
						num: 4,
						title: 'Paste Anywhere',
						body: 'Paste your shortcode into any post, page, widget, or page builder (Gutenberg, Elementor, etc.).'
					}
				]
			}
		]
	},
	changelogs,
	changelogsLimit: 5,
	changelogsReadMoreLabel: 'View on WordPress.org',
	proFeatures: [
		'5 professionally designed responsive templates',
		'Multiple color schemes per template',
		'Multi-currency support ($, ¥, €, ৳, ﷼)',
		'Featured / Recommended badge for hot plans',
		'Enable / disable feature items with checkmarks and crosses',
		'Custom call-to-action button labels and links',
		'Universal shortcodes compatible with all page builders',
		'Priority customer support and regular updates',
	]
});

export const demoInfo = {
	allInOneLabel: 'Live Demo Site',
	allInOneLink: 'https://pricing-table.bplugins.com',
	demos: [
		{
			title: 'Pricing Templates',
			children: [
				{
					title: 'Pricing Table Preview Style 1',
					type: 'image',
					url: 'https://pricing-table.bplugins.com/wp-content/uploads/2021/06/style-1.png'
				},
				{
					title: 'Pricing Table Preview Style 3',
					type: 'image',
					url: 'https://pricing-table.bplugins.com/wp-content/uploads/2021/06/style-3.png'
				},
				{
					title: 'Pricing Table Preview Style 4',
					type: 'image',
					url: 'https://pricing-table.bplugins.com/wp-content/uploads/2021/06/style-4.png'
				},
				{
					title: 'Pricing Table Preview Style 5',
					type: 'image',
					url: 'https://pricing-table.bplugins.com/wp-content/uploads/2021/06/style-5.png'
				}
			]
		},
		{
			title: 'Admin Settings',
			children: [
				{
					title: 'Add New Pricing Table',
					type: 'image',
					url: 'https://pricing-table.bplugins.com/wp-content/uploads/2021/06/pricing-dashboard.png'
				},
				{
					title: 'Pricing Table Settings',
					type: 'image',
					url: 'https://pricing-table.bplugins.com/wp-content/uploads/2021/06/pricing-settings.png'
				}
			]
		}
	]
};

export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
	pluginId: 19836,
	planId: 32912,
	licenses: [1, 3, null],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		selected: 3
	}
};
