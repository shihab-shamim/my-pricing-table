import { getBackgroundCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS } from '../../../bpl-tools/utils/getCSS';

export const DEFAULT_THEME_STYLES = {
	'demo-1': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardMargin: { top: '10px', right: '0px', bottom: '40px', left: '0px' },
		cardRadius: '0px',
		cardShadow: [],
		headerBg: '#53cfe9',
		titleColor: '#ffffff',
		titleTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 20, tablet: 20, mobile: 18 } },
		priceColor: '#ffffff',
		priceBg: '#20bada',
		priceTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 28, tablet: 28, mobile: 24 } },
		unitColor: '#ffffff',
		unitTypo: { fontFamily: 'Lato', fontWeight: '400', fontSize: { desktop: 12, tablet: 12, mobile: 12 } },
		featureColor: '#323232',
		featureTypo: { fontFamily: 'Lato', fontWeight: '400', fontSize: { desktop: 14, tablet: 14, mobile: 14 } },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#323232' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#000000' },
		btnTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 14, tablet: 14, mobile: 14 } },
		btnPadding: { top: '10px', right: '30px', bottom: '10px', left: '30px' },
		btnRadius: '0px'
	},
	'demo-2': {
		cardBg: { type: 'solid', color: '#f1f1f1' },
		cardPadding: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardMargin: { top: '0px', right: '24px', bottom: '60px', left: '24px' },
		cardRadius: '0px',
		cardShadow: [],
		headerBg: '#f53c25',
		titleColor: '#ffffff',
		titleTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 28, tablet: 24, mobile: 20 } },
		priceColor: '#000000',
		priceTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 69, tablet: 50, mobile: 38 } },
		unitColor: '#000000',
		unitTypo: { fontFamily: 'Rubik', fontWeight: '400', fontSize: { desktop: 18, tablet: 16, mobile: 14 } },
		featureColor: '#404040',
		featureTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 15, tablet: 14, mobile: 14 } },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#f53c25' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#a10903' },
		btnTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 25, tablet: 20, mobile: 18 } },
		btnPadding: { top: '10px', right: '24px', bottom: '10px', left: '24px' },
		btnRadius: '0px'
	},
	'demo-3': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardMargin: { top: '0px', right: '20px', bottom: '60px', left: '20px' },
		cardRadius: '0px',
		cardShadow: [{ hOffset: 0, vOffset: 0, blur: 15, spread: 0, color: 'rgba(0, 0, 0, 0.15)', inset: false }],
		headerBg: '#ffffff',
		titleColor: '#34ca95',
		titleTypo: { fontFamily: 'Poppins', fontWeight: '600', fontSize: { desktop: 35, tablet: 30, mobile: 24 } },
		priceColor: '#ffffff',
		priceBg: '#2cc550',
		priceTypo: { fontFamily: 'Poppins', fontWeight: '600', fontSize: { desktop: 45, tablet: 38, mobile: 30 } },
		unitColor: '#ffffff',
		unitTypo: { fontFamily: 'Poppins', fontWeight: '400', fontSize: { desktop: 16, tablet: 15, mobile: 14 } },
		featureColor: '#999999',
		featureTypo: { fontFamily: 'Poppins', fontWeight: '500', fontSize: { desktop: 17, tablet: 16, mobile: 14 } },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#2cc550' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#249d40' },
		btnTypo: { fontFamily: 'Poppins', fontWeight: '400', fontSize: { desktop: 22, tablet: 20, mobile: 18 } },
		btnPadding: { top: '7px', right: '30px', bottom: '7px', left: '30px' },
		btnRadius: '5px'
	},
	'demo-4': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '0px', right: '30px', bottom: '30px', left: '30px' },
		cardMargin: { top: '0px', right: '0px', bottom: '40px', left: '0px' },
		cardRadius: '20px',
		cardShadow: [{ hOffset: 0, vOffset: 0, blur: 15, spread: 0, color: 'rgba(0, 0, 0, 0.1)', inset: false }],
		headerBg: '',
		titleColor: '#383e4a',
		titleTypo: { fontFamily: 'Roboto', fontWeight: '700', fontSize: { desktop: 30, tablet: 26, mobile: 22 } },
		priceColor: '#383e4a',
		priceTypo: { fontFamily: 'Roboto', fontWeight: '700', fontSize: { desktop: 50, tablet: 42, mobile: 34 } },
		unitColor: '#383e4a',
		unitTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 20, tablet: 18, mobile: 16 } },
		featureColor: '#999999',
		featureTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 17, tablet: 16, mobile: 15 } },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#9fcd37' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#72bb43' },
		btnTypo: { fontFamily: 'Roboto', fontWeight: '700', fontSize: { desktop: 20, tablet: 18, mobile: 16 } },
		btnPadding: { top: '14px', right: '15px', bottom: '14px', left: '15px' },
		btnRadius: '6px'
	},
	'demo-5': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '20px', right: '0px', bottom: '35px', left: '0px' },
		cardMargin: { top: '0px', right: '10px', bottom: '30px', left: '10px' },
		cardRadius: '0px',
		cardShadow: [{ hOffset: 0, vOffset: 0, blur: 10, spread: -3, color: 'rgba(0, 0, 0, 0.3)', inset: false }],
		headerBg: '',
		titleColor: '#ffffff',
		titleTypo: { fontFamily: 'Roboto', fontWeight: '500', fontSize: { desktop: 35, tablet: 30, mobile: 24 } },
		priceColor: '#000000',
		priceTypo: { fontFamily: 'Roboto', fontWeight: '600', fontSize: { desktop: 40, tablet: 34, mobile: 28 } },
		unitColor: '#000000',
		unitTypo: { fontFamily: 'Roboto', fontWeight: '300', fontSize: { desktop: 30, tablet: 24, mobile: 20 } },
		featureColor: '#777777',
		featureTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 17, tablet: 16, mobile: 14 } },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#f89923' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#e07f0f' },
		btnTypo: { fontFamily: 'Roboto', fontWeight: '500', fontSize: { desktop: 22, tablet: 20, mobile: 18 } },
		btnPadding: { top: '8px', right: '6px', bottom: '8px', left: '6px' },
		btnRadius: '10px'
	}
};

export const getMergedThemeStyle = (theme = 'demo-1', styles = {}) => {
	const defaultForTheme = DEFAULT_THEME_STYLES[theme] || DEFAULT_THEME_STYLES['demo-1'];
	const currentThemeStyles = styles?.[theme] || {};

	return {
		...defaultForTheme,
		...currentThemeStyles,
		cardBg: currentThemeStyles.cardBg || defaultForTheme.cardBg,
		cardPadding: { ...defaultForTheme.cardPadding, ...(currentThemeStyles.cardPadding || {}) },
		cardMargin: { ...defaultForTheme.cardMargin, ...(currentThemeStyles.cardMargin || {}) },
		cardShadow: currentThemeStyles.cardShadow || defaultForTheme.cardShadow,
		titleTypo: { ...defaultForTheme.titleTypo, ...(currentThemeStyles.titleTypo || {}) },
		priceTypo: { ...defaultForTheme.priceTypo, ...(currentThemeStyles.priceTypo || {}) },
		unitTypo: { ...defaultForTheme.unitTypo, ...(currentThemeStyles.unitTypo || {}) },
		featureTypo: { ...defaultForTheme.featureTypo, ...(currentThemeStyles.featureTypo || {}) },
		btnColors: { ...defaultForTheme.btnColors, ...(currentThemeStyles.btnColors || {}) },
		btnHoverColors: { ...defaultForTheme.btnHoverColors, ...(currentThemeStyles.btnHoverColors || {}) },
		btnTypo: { ...defaultForTheme.btnTypo, ...(currentThemeStyles.btnTypo || {}) },
		btnPadding: { ...defaultForTheme.btnPadding, ...(currentThemeStyles.btnPadding || {}) }
	};
};

const safeBg = bg => {
	if (!bg) return '';
	if (typeof bg === 'string') return `background: ${bg} !important;`;
	if (bg.type === 'solid' && bg.color) return `background: ${bg.color} !important;`;
	const css = getBackgroundCSS(bg);
	return css ? `${css} !important;` : '';
};

const safeBox = (prop, box) => {
	if (!box) return '';
	const css = getBoxCSS(box);
	return css ? `${prop}: ${css} !important;` : '';
};

const safeShadow = shadow => {
	if (!shadow || !shadow.length) return '';
	const css = getMultiShadowCSS(shadow);
	return css ? `box-shadow: ${css} !important;` : '';
};

export const generateThemeCSS = (selector, theme = 'demo-1', st = {}, tables = []) => {
	let fontImports = '';
	const typos = [st.titleTypo, st.priceTypo, st.unitTypo, st.featureTypo, st.btnTypo];
	typos.forEach(t => {
		if (t?.fontFamily && t.fontFamily !== 'Default') {
			const link = getTypoCSS('', t)?.googleFontLink;
			if (link && !fontImports.includes(link)) {
				fontImports += `${link}\n`;
			}
		}
	});

	let specificCSS = '';

	// 1. Global styles from Style tab (only applied if user set them)
	switch (theme) {
		case 'demo-1': {
			const card = `${selector} .bppt_pricing .plan-inner`;
			const title = `${selector} .bppt_pricing .plan-entry-title > h3`;
			const price = `${selector} .bppt_pricing .plan-entry-title .price`;
			const unit = `${selector} .bppt_pricing .price span`;
			const feat = `${selector} .bppt_pricing .plan-entry-content ul li`;
			const btn = `${selector} .bppt_pricing .bttn a`;
			const btnHov = `${selector} .bppt_pricing .bttn a:hover`;

			specificCSS += `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeShadow(st.cardShadow)}
				}
				${st.headerBg ? `
					${selector} .bppt_pricing .plan:not(.basic):not(.standard):not(.ultimite) .plan-entry-title,
					${selector} .bppt_pricing .plan.default .plan-entry-title {
						background: ${st.headerBg} !important;
					}
					${selector} .bppt_pricing .plan:not(.basic):not(.standard):not(.ultimite) .plan-entry-title > h3,
					${selector} .bppt_pricing .plan.default .plan-entry-title > h3 {
						background: ${st.headerBg} !important;
					}
				` : ''}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
				}
				${st.titleTypo?.fontFamily ? getTypoCSS(title, st.titleTypo)?.styles || '' : ''}
				${st.priceColor ? `${price} { color: ${st.priceColor} !important; }` : ''}
				${st.priceBg ? `
					${selector} .bppt_pricing .plan:not(.basic):not(.standard):not(.ultimite) .price,
					${selector} .bppt_pricing .plan.default .price {
						background: ${st.priceBg} !important;
					}
				` : ''}
				${st.priceTypo?.fontFamily ? getTypoCSS(price, st.priceTypo)?.styles || '' : ''}
				${st.unitColor ? `${unit} { color: ${st.unitColor} !important; }` : ''}
				${st.unitTypo?.fontFamily ? getTypoCSS(unit, st.unitTypo)?.styles || '' : ''}
				${st.featureColor ? `${feat} { color: ${st.featureColor} !important; }` : ''}
				${st.featureTypo?.fontFamily ? getTypoCSS(feat, st.featureTypo)?.styles || '' : ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${st.btnColors?.bg ? `background: ${st.btnColors.bg} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
					${st.btnHoverColors?.bg ? `background: ${st.btnHoverColors.bg} !important;` : ''}
				}
			`;
			break;
		}

		case 'demo-2': {
			const card = `${selector} .bppt_container .pricingTableTwo`;
			const title = `${selector} .bppt_container .pricingTableTwo .title`;
			const price = `${selector} .bppt_container .pricingTableTwo .price-value`;
			const unit = `${selector} .bppt_container .pricingTableTwo .price-value > span`;
			const feat = `${selector} .bppt_container .pricingTableTwo .pricing-content ul li`;
			const btn = `${selector} .bppt_container .pricingTableTwo .pricingTable-signup a`;
			const btnHov = `${selector} .bppt_container .pricingTableTwo .pricingTable-signup a:hover`;

			specificCSS += `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeShadow(st.cardShadow)}
				}
				${st.headerBg ? `
					${selector} .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon) .pricingTable-header,
					${selector} .bppt_container .pricingTableTwo.default .pricingTable-header {
						background: ${st.headerBg} !important;
					}
				` : ''}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
				}
				${st.titleTypo?.fontFamily ? getTypoCSS(title, st.titleTypo)?.styles || '' : ''}
				${st.priceColor ? `${price} { color: ${st.priceColor} !important; }` : ''}
				${st.priceTypo?.fontFamily ? getTypoCSS(price, st.priceTypo)?.styles || '' : ''}
				${st.unitColor ? `${unit} { color: ${st.unitColor} !important; }` : ''}
				${st.unitTypo?.fontFamily ? getTypoCSS(unit, st.unitTypo)?.styles || '' : ''}
				${st.featureColor ? `${feat} { color: ${st.featureColor} !important; }` : ''}
				${st.featureTypo?.fontFamily ? getTypoCSS(feat, st.featureTypo)?.styles || '' : ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${st.btnColors?.bg ? `
					${selector} .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon) .pricingTable-signup a,
					${selector} .bppt_container .pricingTableTwo.default .pricingTable-signup a {
						background: ${st.btnColors.bg} !important;
					}
				` : ''}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
				}
				${st.btnHoverColors?.bg ? `
					${selector} .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon) .pricingTable-signup a:hover,
					${selector} .bppt_container .pricingTableTwo.default .pricingTable-signup a:hover {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : ''}
			`;
			break;
		}

		case 'demo-3': {
			const card = `${selector} .bppt_table3 .pricingTable`;
			const title = `${selector} .bppt_table3 .pricingTable .title`;
			const price = `${selector} .bppt_table3 .pricingTable .price-value .amount`;
			const unit = `${selector} .bppt_table3 .pricingTable .price-value .duration`;
			const feat = `${selector} .bppt_table3 .pricingTable .pricing-content ul li`;
			const btn = `${selector} .bppt_table3 .pricingTable .pricingTable-signup-three a`;
			const btnHov = `${selector} .bppt_table3 .pricingTable .pricingTable-signup-three a:hover`;

			specificCSS += `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeShadow(st.cardShadow)}
				}
				${st.headerBg ? `${selector} .bppt_table3 .pricingTable .pricingTable-header { background: ${st.headerBg} !important; }` : ''}
				${st.titleColor ? `
					${selector} .bppt_table3 .pricingTable:not(.purple):not(.pink) .title,
					${selector} .bppt_table3 .pricingTable.default .title {
						color: ${st.titleColor} !important;
					}
				` : ''}
				${st.titleTypo?.fontFamily ? getTypoCSS(title, st.titleTypo)?.styles || '' : ''}
				${st.priceBg ? `
					${selector} .bppt_table3 .pricingTable:not(.purple):not(.pink) .price-value,
					${selector} .bppt_table3 .pricingTable.default .price-value {
						background: ${st.priceBg} !important;
					}
				` : ''}
				${st.priceColor ? `${price} { color: ${st.priceColor} !important; }` : ''}
				${st.priceTypo?.fontFamily ? getTypoCSS(price, st.priceTypo)?.styles || '' : ''}
				${st.unitColor ? `${unit} { color: ${st.unitColor} !important; }` : ''}
				${st.unitTypo?.fontFamily ? getTypoCSS(unit, st.unitTypo)?.styles || '' : ''}
				${st.featureColor ? `${feat} { color: ${st.featureColor} !important; }` : ''}
				${st.featureTypo?.fontFamily ? getTypoCSS(feat, st.featureTypo)?.styles || '' : ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${st.btnColors?.bg ? `
					${selector} .bppt_table3 .pricingTable:not(.purple):not(.pink) .pricingTable-signup-three a,
					${selector} .bppt_table3 .pricingTable.default .pricingTable-signup-three a {
						background: ${st.btnColors.bg} !important;
					}
				` : ''}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
				}
				${st.btnHoverColors?.bg ? `
					${selector} .bppt_table3 .pricingTable:not(.purple):not(.pink) .pricingTable-signup-three a:hover,
					${selector} .bppt_table3 .pricingTable.default .pricingTable-signup-three a:hover {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : ''}
			`;
			break;
		}

		case 'demo-4': {
			const card = `${selector} .priceTableBGBefore .pricingTableFour`;
			const content = `${selector} .priceTableBGBefore .pricingTableFour .pricingContent`;
			const title = `${selector} .priceTableBGBefore .pricingTableFour .pricingHeader .title`;
			const price = `${selector} .priceTableBGBefore .pricingTableFour .pricingValue .amount`;
			const unit = `${selector} .priceTableBGBefore .pricingTableFour .pricingValue .duration`;
			const feat = `${selector} .priceTableBGBefore .pricingTableFour .pricingFeatures li`;
			const btn = `${selector} .priceTableBGBefore .pricingTableFour .pricingSignUp a`;
			const btnHov = `${selector} .priceTableBGBefore .pricingTableFour .pricingSignUp a:hover`;

			specificCSS += `
				${card} {
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${safeShadow(st.cardShadow)}
				}
				${content} {
					${safeBg(st.cardBg)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
				}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
				}
				${st.titleTypo?.fontFamily ? getTypoCSS(title, st.titleTypo)?.styles || '' : ''}
				${st.priceColor ? `${price} { color: ${st.priceColor} !important; }` : ''}
				${st.priceTypo?.fontFamily ? getTypoCSS(price, st.priceTypo)?.styles || '' : ''}
				${st.unitColor ? `${unit} { color: ${st.unitColor} !important; }` : ''}
				${st.unitTypo?.fontFamily ? getTypoCSS(unit, st.unitTypo)?.styles || '' : ''}
				${st.featureColor ? `${feat} { color: ${st.featureColor} !important; }` : ''}
				${st.featureTypo?.fontFamily ? getTypoCSS(feat, st.featureTypo)?.styles || '' : ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${st.btnColors?.bg ? `
					${selector} .priceTableBGBefore .pricingTableFour:not(.purple):not(.orange) .pricingSignUp a,
					${selector} .priceTableBGBefore .pricingTableFour.default .pricingSignUp a {
						background: ${st.btnColors.bg} !important;
					}
				` : ''}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
				}
				${st.btnHoverColors?.bg ? `
					${selector} .priceTableBGBefore .pricingTableFour:not(.purple):not(.orange) .pricingSignUp a:hover,
					${selector} .priceTableBGBefore .pricingTableFour.default .pricingSignUp a:hover {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : ''}
			`;
			break;
		}

		case 'demo-5':
		default: {
			const card = `${selector} .priceTableGradient .pricingTable`;
			const title = `${selector} .priceTableGradient .pricingTable .pricingHeader .title`;
			const price = `${selector} .priceTableGradient .pricingTable .pricingValue .amount`;
			const unit = `${selector} .priceTableGradient .pricingTable .pricingValue .duration`;
			const feat = `${selector} .priceTableGradient .pricingTable .pricingFeatures li`;
			const btn = `${selector} .priceTableGradient .pricingTable .pricingSignUp a`;
			const btnHov = `${selector} .priceTableGradient .pricingTable .pricingSignUp a:hover`;

			specificCSS += `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeShadow(st.cardShadow)}
				}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
				}
				${st.titleTypo?.fontFamily ? getTypoCSS(title, st.titleTypo)?.styles || '' : ''}
				${st.priceColor ? `${price} { color: ${st.priceColor} !important; }` : ''}
				${st.priceTypo?.fontFamily ? getTypoCSS(price, st.priceTypo)?.styles || '' : ''}
				${st.unitColor ? `${unit} { color: ${st.unitColor} !important; }` : ''}
				${st.unitTypo?.fontFamily ? getTypoCSS(unit, st.unitTypo)?.styles || '' : ''}
				${st.featureColor ? `${feat} { color: ${st.featureColor} !important; }` : ''}
				${st.featureTypo?.fontFamily ? getTypoCSS(feat, st.featureTypo)?.styles || '' : ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${st.btnColors?.bg ? `
					${selector} .priceTableGradient .pricingTable:not(.green):not(.blue) .pricingSignUp a,
					${selector} .priceTableGradient .pricingTable.default .pricingSignUp a {
						background: ${st.btnColors.bg} !important;
					}
				` : ''}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
				}
				${st.btnHoverColors?.bg ? `
					${selector} .priceTableGradient .pricingTable:not(.green):not(.blue) .pricingSignUp a:hover,
					${selector} .priceTableGradient .pricingTable.default .pricingSignUp a:hover {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : ''}
			`;
			break;
		}
	}

	// 2. Individual Column Custom Colors from ItemsPanel (takes highest precedence)
	tables.forEach((tbl, i) => {
		const planSl = `${selector} .bppt-plan-${i}`;

		switch (theme) {
			case 'demo-1': {
				if (tbl.headerBg) {
					specificCSS += `
						${planSl} .plan-entry-title,
						${planSl} .plan-entry-title > h3,
						${planSl} .price {
							background: ${tbl.headerBg} !important;
						}
					`;
				}
				if (tbl.priceBg) {
					specificCSS += `
						${planSl} .price {
							background: ${tbl.priceBg} !important;
						}
					`;
				}
				if (tbl.cardBg) {
					specificCSS += `
						${planSl} .plan-inner {
							background: ${tbl.cardBg} !important;
						}
					`;
				}
				if (tbl.btnBg) {
					specificCSS += `
						${planSl} .bttn a {
							background: ${tbl.btnBg} !important;
						}
					`;
				}
				if (tbl.btnColor) {
					specificCSS += `
						${planSl} .bttn a {
							color: ${tbl.btnColor} !important;
						}
					`;
				}
				break;
			}

			case 'demo-2': {
				if (tbl.headerBg) {
					specificCSS += `
						${planSl} .pricingTable-header {
							background: ${tbl.headerBg} !important;
						}
						${planSl} .pricing-content {
							border-color: ${tbl.headerBg} !important;
						}
						${planSl} .pricing-content li:before {
							background: ${tbl.headerBg} !important;
						}
					`;
				}
				if (tbl.btnBg) {
					specificCSS += `
						${planSl} .pricingTable-signup a {
							background: ${tbl.btnBg} !important;
						}
					`;
				}
				if (tbl.btnColor) {
					specificCSS += `
						${planSl} .pricingTable-signup a {
							color: ${tbl.btnColor} !important;
						}
					`;
				}
				if (tbl.cardBg) {
					specificCSS += `
						${planSl} {
							background-color: ${tbl.cardBg} !important;
						}
					`;
				}
				break;
			}

			case 'demo-3': {
				if (tbl.headerBg) {
					specificCSS += `
						${planSl} .title {
							color: ${tbl.headerBg} !important;
						}
						${planSl} .price-value,
						${planSl} .pricingTable-signup-three a {
							background: ${tbl.headerBg} !important;
						}
					`;
				}
				if (tbl.priceBg) {
					specificCSS += `
						${planSl} .price-value {
							background: ${tbl.priceBg} !important;
						}
					`;
				}
				if (tbl.btnBg) {
					specificCSS += `
						${planSl} .pricingTable-signup-three a {
							background: ${tbl.btnBg} !important;
						}
					`;
				}
				if (tbl.btnColor) {
					specificCSS += `
						${planSl} .pricingTable-signup-three a {
							color: ${tbl.btnColor} !important;
						}
					`;
				}
				if (tbl.cardBg) {
					specificCSS += `
						${planSl} {
							background-color: ${tbl.cardBg} !important;
						}
					`;
				}
				break;
			}

			case 'demo-4': {
				if (tbl.headerBg) {
					specificCSS += `
						${planSl} .pricingHeader .title {
							color: ${tbl.headerBg} !important;
						}
						${planSl} .pricingSignUp a {
							background: ${tbl.headerBg} !important;
						}
					`;
				}
				if (tbl.btnBg) {
					specificCSS += `
						${planSl} .pricingSignUp a {
							background: ${tbl.btnBg} !important;
						}
					`;
				}
				if (tbl.btnColor) {
					specificCSS += `
						${planSl} .pricingSignUp a {
							color: ${tbl.btnColor} !important;
						}
					`;
				}
				if (tbl.cardBg) {
					specificCSS += `
						${planSl} .pricingContent {
							background: ${tbl.cardBg} !important;
						}
					`;
				}
				break;
			}

			case 'demo-5':
			default: {
				if (tbl.headerBg) {
					specificCSS += `
						${planSl} .pricingHeader .title,
						${planSl} .pricingValue .amount {
							color: ${tbl.headerBg} !important;
						}
						${planSl} .pricingSignUp a {
							background: ${tbl.headerBg} !important;
						}
					`;
				}
				if (tbl.btnBg) {
					specificCSS += `
						${planSl} .pricingSignUp a {
							background: ${tbl.btnBg} !important;
						}
					`;
				}
				if (tbl.btnColor) {
					specificCSS += `
						${planSl} .pricingSignUp a {
							color: ${tbl.btnColor} !important;
						}
					`;
				}
				if (tbl.cardBg) {
					specificCSS += `
						${planSl} {
							background-color: ${tbl.cardBg} !important;
						}
					`;
				}
				break;
			}
		}
	});

	return `${fontImports}\n${specificCSS}`;
};
