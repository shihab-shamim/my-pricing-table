import { getBackgroundCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS } from '../../../bpl-tools/utils/getCSS';

export const DEFAULT_THEME_STYLES = {
	'demo-1': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardMargin: { top: '10px', right: '0px', bottom: '40px', left: '0px' },
		cardRadius: '0px',
		cardShadow: [],
		cardBorderStyle: 'none',
		cardBorderWidth: '1px',
		cardBorderColor: '#e0e0e0',
		headerBg: '',
		titleColor: '#ffffff',
		titleAlign: 'default',
		titleTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 20, tablet: 20, mobile: 18 } },
		priceColor: '#ffffff',
		priceBg: '#20bada',
		priceTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 28, tablet: 28, mobile: 24 } },
		unitColor: '#ffffff',
		unitTypo: { fontFamily: 'Lato', fontWeight: '400', fontSize: { desktop: 12, tablet: 12, mobile: 12 } },
		featureColor: '#323232',
		featureDisabledColor: '#aaaaaa',
		featureTypo: { fontFamily: 'Lato', fontWeight: '400', fontSize: { desktop: 14, tablet: 14, mobile: 14 } },
		badgeColors: { color: '#ffffff', bgType: 'solid', bg: '#ff8800' },
		badgeHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#e07700' },
		badgeColor: '#ffffff',
		badgeBg: '#ff8800',
		badgeHoverColor: '#ffffff',
		badgeHoverBg: '#e07700',
		badgeRadius: '3px',
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#323232' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#000000' },
		btnTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 14, tablet: 14, mobile: 14 } },
		btnPadding: { top: '10px', right: '30px', bottom: '10px', left: '30px' },
		btnRadius: '0px',
		btnBorderStyle: 'none',
		btnBorderWidth: '1px',
		btnBorderColor: '#323232',
		btnShadow: []
	},
	'demo-2': {
		cardBg: { type: 'solid', color: '#f1f1f1' },
		cardPadding: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardMargin: { top: '0px', right: '24px', bottom: '60px', left: '24px' },
		cardRadius: '0px',
		cardShadow: [],
		cardBorderStyle: 'none',
		cardBorderWidth: '1px',
		cardBorderColor: '#e0e0e0',
		headerBg: '',
		titleColor: '#ffffff',
		titleAlign: 'default',
		titleTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 28, tablet: 24, mobile: 20 } },
		priceColor: '#000000',
		priceTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 69, tablet: 50, mobile: 38 } },
		unitColor: '#000000',
		unitTypo: { fontFamily: 'Rubik', fontWeight: '400', fontSize: { desktop: 18, tablet: 16, mobile: 14 } },
		featureColor: '#404040',
		featureDisabledColor: '#aaaaaa',
		featureTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 15, tablet: 14, mobile: 14 } },
		badgeColors: { color: '#ffffff', bgType: 'solid', bg: '#ff8800' },
		badgeHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#e07700' },
		badgeColor: '#ffffff',
		badgeBg: '#ff8800',
		badgeHoverColor: '#ffffff',
		badgeHoverBg: '#e07700',
		badgeRadius: '3px',
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#f53c25' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#a10903' },
		btnTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 25, tablet: 20, mobile: 18 } },
		btnPadding: { top: '10px', right: '24px', bottom: '10px', left: '24px' },
		btnRadius: '0px',
		btnBorderStyle: 'none',
		btnBorderWidth: '1px',
		btnBorderColor: '#f53c25',
		btnShadow: []
	},
	'demo-3': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardMargin: { top: '0px', right: '20px', bottom: '60px', left: '20px' },
		cardRadius: '0px',
		cardShadow: [{ hOffset: 0, vOffset: 0, blur: 15, spread: 0, color: 'rgba(0, 0, 0, 0.15)', inset: false }],
		cardBorderStyle: 'none',
		cardBorderWidth: '1px',
		cardBorderColor: '#e0e0e0',
		headerBg: '',
		titleColor: '#34ca95',
		titleAlign: 'default',
		titleTypo: { fontFamily: 'Poppins', fontWeight: '600', fontSize: { desktop: 35, tablet: 30, mobile: 24 } },
		priceColor: '#ffffff',
		priceBg: '#2cc550',
		priceTypo: { fontFamily: 'Poppins', fontWeight: '600', fontSize: { desktop: 45, tablet: 38, mobile: 30 } },
		unitColor: '#ffffff',
		unitTypo: { fontFamily: 'Poppins', fontWeight: '400', fontSize: { desktop: 16, tablet: 15, mobile: 14 } },
		featureColor: '#999999',
		featureDisabledColor: '#cccccc',
		featureTypo: { fontFamily: 'Poppins', fontWeight: '500', fontSize: { desktop: 17, tablet: 16, mobile: 14 } },
		badgeColors: { color: '#ffffff', bgType: 'solid', bg: '#ff8800' },
		badgeHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#e07700' },
		badgeColor: '#ffffff',
		badgeBg: '#ff8800',
		badgeHoverColor: '#ffffff',
		badgeHoverBg: '#e07700',
		badgeRadius: '3px',
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#2cc550' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#249d40' },
		btnTypo: { fontFamily: 'Poppins', fontWeight: '400', fontSize: { desktop: 22, tablet: 20, mobile: 18 } },
		btnPadding: { top: '7px', right: '30px', bottom: '7px', left: '30px' },
		btnRadius: '5px',
		btnBorderStyle: 'none',
		btnBorderWidth: '1px',
		btnBorderColor: '#2cc550',
		btnShadow: []
	},
	'demo-4': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '0px', right: '30px', bottom: '30px', left: '30px' },
		cardMargin: { top: '0px', right: '0px', bottom: '40px', left: '0px' },
		cardRadius: '20px',
		cardShadow: [{ hOffset: 0, vOffset: 0, blur: 15, spread: 0, color: 'rgba(0, 0, 0, 0.1)', inset: false }],
		cardBorderStyle: 'none',
		cardBorderWidth: '1px',
		cardBorderColor: '#e0e0e0',
		headerBg: '',
		titleColor: '#383e4a',
		titleAlign: 'default',
		titleTypo: { fontFamily: 'Roboto', fontWeight: '700', fontSize: { desktop: 30, tablet: 26, mobile: 22 } },
		priceColor: '#383e4a',
		priceTypo: { fontFamily: 'Roboto', fontWeight: '700', fontSize: { desktop: 50, tablet: 42, mobile: 34 } },
		unitColor: '#383e4a',
		unitTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 20, tablet: 18, mobile: 16 } },
		featureColor: '#999999',
		featureDisabledColor: '#525963',
		featureTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 17, tablet: 16, mobile: 15 } },
		badgeColors: { color: '#ffffff', bgType: 'solid', bg: '#ff8800' },
		badgeHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#e07700' },
		badgeColor: '#ffffff',
		badgeBg: '#ff8800',
		badgeHoverColor: '#ffffff',
		badgeHoverBg: '#e07700',
		badgeRadius: '3px',
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#9fcd37' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#72bb43' },
		btnTypo: { fontFamily: 'Roboto', fontWeight: '700', fontSize: { desktop: 20, tablet: 18, mobile: 16 } },
		btnPadding: { top: '14px', right: '15px', bottom: '14px', left: '15px' },
		btnRadius: '6px',
		btnBorderStyle: 'none',
		btnBorderWidth: '1px',
		btnBorderColor: '#9fcd37',
		btnShadow: []
	},
	'demo-5': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '20px', right: '0px', bottom: '35px', left: '0px' },
		cardMargin: { top: '0px', right: '10px', bottom: '30px', left: '10px' },
		cardRadius: '0px',
		cardShadow: [{ hOffset: 0, vOffset: 0, blur: 10, spread: -3, color: 'rgba(0, 0, 0, 0.3)', inset: false }],
		cardBorderStyle: 'none',
		cardBorderWidth: '1px',
		cardBorderColor: '#e0e0e0',
		headerBg: '',
		titleColor: '#ffffff',
		titleAlign: 'default',
		titleTypo: { fontFamily: 'Roboto', fontWeight: '500', fontSize: { desktop: 35, tablet: 30, mobile: 24 } },
		priceColor: '#000000',
		priceTypo: { fontFamily: 'Roboto', fontWeight: '600', fontSize: { desktop: 40, tablet: 34, mobile: 28 } },
		unitColor: '#000000',
		unitTypo: { fontFamily: 'Roboto', fontWeight: '300', fontSize: { desktop: 30, tablet: 24, mobile: 20 } },
		featureColor: '#777777',
		featureDisabledColor: '#aaaaaa',
		featureTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 17, tablet: 16, mobile: 14 } },
		badgeColors: { color: '#ffffff', bgType: 'solid', bg: '#ff8800' },
		badgeHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#e07700' },
		badgeColor: '#ffffff',
		badgeBg: '#ff8800',
		badgeHoverColor: '#ffffff',
		badgeHoverBg: '#e07700',
		badgeRadius: '3px',
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#f89923' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#e07f0f' },
		btnTypo: { fontFamily: 'Roboto', fontWeight: '500', fontSize: { desktop: 22, tablet: 20, mobile: 18 } },
		btnPadding: { top: '8px', right: '6px', bottom: '8px', left: '6px' },
		btnRadius: '10px',
		btnBorderStyle: 'none',
		btnBorderWidth: '1px',
		btnBorderColor: '#f89923',
		btnShadow: []
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
		cardRadius: currentThemeStyles.cardRadius ?? defaultForTheme.cardRadius,
		cardShadow: currentThemeStyles.cardShadow || defaultForTheme.cardShadow,
		cardBorderStyle: currentThemeStyles.cardBorderStyle ?? defaultForTheme.cardBorderStyle,
		cardBorderWidth: currentThemeStyles.cardBorderWidth ?? defaultForTheme.cardBorderWidth,
		cardBorderColor: currentThemeStyles.cardBorderColor ?? defaultForTheme.cardBorderColor,
		headerBg: currentThemeStyles.headerBg ?? defaultForTheme.headerBg,
		titleColor: currentThemeStyles.titleColor ?? defaultForTheme.titleColor,
		titleAlign: currentThemeStyles.titleAlign ?? defaultForTheme.titleAlign,
		titleTypo: { ...defaultForTheme.titleTypo, ...(currentThemeStyles.titleTypo || {}) },
		priceColor: currentThemeStyles.priceColor ?? defaultForTheme.priceColor,
		priceBg: currentThemeStyles.priceBg ?? defaultForTheme.priceBg,
		priceTypo: { ...defaultForTheme.priceTypo, ...(currentThemeStyles.priceTypo || {}) },
		unitColor: currentThemeStyles.unitColor ?? defaultForTheme.unitColor,
		unitTypo: { ...defaultForTheme.unitTypo, ...(currentThemeStyles.unitTypo || {}) },
		featureColor: currentThemeStyles.featureColor ?? defaultForTheme.featureColor,
		featureDisabledColor: currentThemeStyles.featureDisabledColor ?? defaultForTheme.featureDisabledColor,
		featureTypo: { ...defaultForTheme.featureTypo, ...(currentThemeStyles.featureTypo || {}) },
		badgeColors: currentThemeStyles.badgeColors || {
			color: currentThemeStyles.badgeColor || defaultForTheme.badgeColor || '#ffffff',
			bgType: 'solid',
			bg: currentThemeStyles.badgeBg || defaultForTheme.badgeBg || '#ff8800'
		},
		badgeHoverColors: currentThemeStyles.badgeHoverColors || {
			color: currentThemeStyles.badgeHoverColor || defaultForTheme.badgeHoverColor || '#ffffff',
			bgType: 'solid',
			bg: currentThemeStyles.badgeHoverBg || defaultForTheme.badgeHoverBg || '#e07700'
		},
		badgeColor: currentThemeStyles.badgeColors?.color || currentThemeStyles.badgeColor || defaultForTheme.badgeColor || '#ffffff',
		badgeBg: (currentThemeStyles.badgeColors?.bgType === 'gradient' && currentThemeStyles.badgeColors?.gradient)
			? currentThemeStyles.badgeColors.gradient
			: (currentThemeStyles.badgeColors?.bg || currentThemeStyles.badgeBg || defaultForTheme.badgeBg || '#ff8800'),
		badgeHoverColor: currentThemeStyles.badgeHoverColors?.color || currentThemeStyles.badgeHoverColor || defaultForTheme.badgeHoverColor || '#ffffff',
		badgeHoverBg: (currentThemeStyles.badgeHoverColors?.bgType === 'gradient' && currentThemeStyles.badgeHoverColors?.gradient)
			? currentThemeStyles.badgeHoverColors.gradient
			: (currentThemeStyles.badgeHoverColors?.bg || currentThemeStyles.badgeHoverBg || defaultForTheme.badgeHoverBg || '#e07700'),
		badgeRadius: currentThemeStyles.badgeRadius ?? defaultForTheme.badgeRadius,
		btnColors: { ...defaultForTheme.btnColors, ...(currentThemeStyles.btnColors || {}) },
		btnHoverColors: { ...defaultForTheme.btnHoverColors, ...(currentThemeStyles.btnHoverColors || {}) },
		btnTypo: { ...defaultForTheme.btnTypo, ...(currentThemeStyles.btnTypo || {}) },
		btnPadding: { ...defaultForTheme.btnPadding, ...(currentThemeStyles.btnPadding || {}) },
		btnRadius: currentThemeStyles.btnRadius ?? defaultForTheme.btnRadius,
		btnBorderStyle: currentThemeStyles.btnBorderStyle ?? defaultForTheme.btnBorderStyle,
		btnBorderWidth: currentThemeStyles.btnBorderWidth ?? defaultForTheme.btnBorderWidth,
		btnBorderColor: currentThemeStyles.btnBorderColor ?? defaultForTheme.btnBorderColor,
		btnShadow: currentThemeStyles.btnShadow || defaultForTheme.btnShadow
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

const safeBorder = (style, width, color) => {
	if (!style || style === 'none') return '';
	return `border: ${width || '1px'} ${style} ${color || '#e0e0e0'} !important;`;
};

export const generateThemeCSS = (selector, theme = 'demo-1', st = {}, tables = [], userStyles = {}) => {
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

	// Ensure all card containers have relative positioning for absolute badges
	specificCSS += `
		${selector} .bppt_pricing .plan-inner,
		${selector} .bppt_container .pricingTableTwo,
		${selector} .bppt_table3 .pricingTable,
		${selector} .priceTableBGBefore .pricingTableFour .pricingContent,
		${selector} .priceTableGradient .pricingTable {
			position: relative !important;
		}
	`;

	// Global Badge & Disabled feature styling across all themes
	const bColor = st.badgeColors?.color || st.badgeColor;
	const bBg = (st.badgeColors?.bgType === 'gradient' && st.badgeColors?.gradient)
		? st.badgeColors.gradient
		: (st.badgeColors?.bg || st.badgeBg);
	const bHovColor = st.badgeHoverColors?.color || st.badgeHoverColor;
	const bHovBg = (st.badgeHoverColors?.bgType === 'gradient' && st.badgeHoverColors?.gradient)
		? st.badgeHoverColors.gradient
		: (st.badgeHoverColors?.bg || st.badgeHoverBg);

	if (bColor || bBg || st.badgeRadius) {
		specificCSS += `
			${selector} .hot {
				${bColor ? `color: ${bColor} !important;` : ''}
				${bBg ? `background: ${bBg} !important;` : ''}
				${st.badgeRadius ? `border-radius: ${st.badgeRadius} !important;` : ''}
			}
		`;
	}

	if (bHovColor || bHovBg) {
		specificCSS += `
			${selector} .hot:hover,
			${selector} .plan:hover .hot,
			${selector} .bppt_pricing .plan:hover .hot,
			${selector} .pricingTableTwo:hover .hot,
			${selector} .bppt_container .pricingTableTwo:hover .hot,
			${selector} .pricingTable:hover .hot,
			${selector} .bppt_table3 .pricingTable:hover .hot,
			${selector} .pricingTableFour:hover .hot,
			${selector} .priceTableBGBefore .pricingTableFour:hover .hot,
			${selector} .priceTableGradient .pricingTable:hover .hot {
				${bHovColor ? `color: ${bHovColor} !important;` : ''}
				${bHovBg ? `background: ${bHovBg} !important;` : ''}
			}
		`;
	}

	if (st.featureDisabledColor) {
		specificCSS += `
			${selector} li.disable {
				color: ${st.featureDisabledColor} !important;
			}
			${selector} li.disable:before {
				color: ${st.featureDisabledColor} !important;
			}
		`;
	}

	// 1. Global styles from Style tab
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
					${safeBorder(st.cardBorderStyle, st.cardBorderWidth, st.cardBorderColor)}
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
					${st.titleAlign && st.titleAlign !== 'default' ? `text-align: ${st.titleAlign} !important;` : ''}
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
					${safeBorder(st.btnBorderStyle, st.btnBorderWidth, st.btnBorderColor)}
					${safeShadow(st.btnShadow)}
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

			const hasCustomBtnBg = Boolean(userStyles?.btnColors?.bg);
			const hasCustomBtnHovBg = Boolean(userStyles?.btnHoverColors?.bg);

			specificCSS += `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeBorder(st.cardBorderStyle, st.cardBorderWidth, st.cardBorderColor)}
					${safeShadow(st.cardShadow)}
				}
				${st.headerBg ? `
					${selector} .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon):not(.red) .pricingTable-header,
					${selector} .bppt_container .pricingTableTwo.default .pricingTable-header {
						background: ${st.headerBg} !important;
					}
				` : ''}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
					${st.titleAlign && st.titleAlign !== 'default' ? `text-align: ${st.titleAlign} !important;` : ''}
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
					${safeBorder(st.btnBorderStyle, st.btnBorderWidth, st.btnBorderColor)}
					${safeShadow(st.btnShadow)}
				}
				${hasCustomBtnBg ? `
					${btn} {
						background: ${st.btnColors.bg} !important;
					}
				` : (st.btnColors?.bg ? `
					${selector} .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon):not(.red) .pricingTable-signup a,
					${selector} .bppt_container .pricingTableTwo.default .pricingTable-signup a {
						background: ${st.btnColors.bg} !important;
					}
				` : '')}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
				}
				${hasCustomBtnHovBg ? `
					${btnHov} {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : (st.btnHoverColors?.bg ? `
					${selector} .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon):not(.red) .pricingTable-signup a:hover,
					${selector} .bppt_container .pricingTableTwo.default .pricingTable-signup a:hover {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : '')}
				${selector} .bppt_container .pricingTableTwo.red:before,
				${selector} .bppt_container .pricingTableTwo.red:after {
					background: linear-gradient(to left bottom, #a10903 45%, transparent 50%) !important;
				}
				${selector} .bppt_container .pricingTableTwo.red .pricingTable-header {
					background: #f53c25 !important;
				}
				${selector} .bppt_container .pricingTableTwo.red .pricing-content {
					border-color: #f53c25 !important;
				}
				${selector} .bppt_container .pricingTableTwo.red .pricing-content li:before,
				${selector} .bppt_container .pricingTableTwo.red .pricingTable-signup a {
					background: #f53c25 !important;
				}
				${selector} .bppt_container .pricingTableTwo.red .pricingTable-signup a:before,
				${selector} .bppt_container .pricingTableTwo.red .pricingTable-signup a:after {
					background: linear-gradient(to left bottom, #a10903 48%, transparent 50%) !important;
				}
				${selector} .bppt_container .pricingTableTwo.red .pricingTable-signup a:hover {
					background: #a10903 !important;
				}
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

			const hasCustomTitleColor = Boolean(userStyles?.titleColor);
			const hasCustomPriceBg = Boolean(userStyles?.priceBg);
			const hasCustomBtnBg = Boolean(userStyles?.btnColors?.bg);
			const hasCustomBtnHovBg = Boolean(userStyles?.btnHoverColors?.bg);

			specificCSS += `
				${card},
				${card} .pricingTable-header,
				${card} .pricing-content {
					${safeBg(st.cardBg)}
				}
				${card} {
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeBorder(st.cardBorderStyle, st.cardBorderWidth, st.cardBorderColor)}
					${safeShadow(st.cardShadow)}
				}
				${st.headerBg ? `${selector} .bppt_table3 .pricingTable .pricingTable-header { background: ${st.headerBg} !important; }` : ''}
				${hasCustomTitleColor ? `
					${title} {
						color: ${st.titleColor} !important;
					}
				` : (st.titleColor ? `
					${selector} .bppt_table3 .pricingTable:not(.purple):not(.pink) .title,
					${selector} .bppt_table3 .pricingTable.default .title {
						color: ${st.titleColor} !important;
					}
				` : '')}
				${title} {
					${st.titleAlign && st.titleAlign !== 'default' ? `text-align: ${st.titleAlign} !important;` : ''}
				}
				${st.titleTypo?.fontFamily ? getTypoCSS(title, st.titleTypo)?.styles || '' : ''}
				${hasCustomPriceBg ? `
					${selector} .bppt_table3 .pricingTable .price-value {
						background: ${st.priceBg} !important;
					}
				` : (st.priceBg ? `
					${selector} .bppt_table3 .pricingTable:not(.purple):not(.pink) .price-value,
					${selector} .bppt_table3 .pricingTable.default .price-value {
						background: ${st.priceBg} !important;
					}
				` : '')}
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
					${safeBorder(st.btnBorderStyle, st.btnBorderWidth, st.btnBorderColor)}
					${safeShadow(st.btnShadow)}
				}
				${hasCustomBtnBg ? `
					${btn} {
						background: ${st.btnColors.bg} !important;
					}
				` : (st.btnColors?.bg ? `
					${selector} .bppt_table3 .pricingTable:not(.purple):not(.pink) .pricingTable-signup-three a,
					${selector} .bppt_table3 .pricingTable.default .pricingTable-signup-three a {
						background: ${st.btnColors.bg} !important;
					}
				` : '')}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
				}
				${hasCustomBtnHovBg ? `
					${btnHov} {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : (st.btnHoverColors?.bg ? `
					${selector} .bppt_table3 .pricingTable:not(.purple):not(.pink) .pricingTable-signup-three a:hover,
					${selector} .bppt_table3 .pricingTable.default .pricingTable-signup-three a:hover {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : '')}
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

			const hasCustomBtnBg = Boolean(userStyles?.btnColors?.bg);
			const hasCustomBtnHovBg = Boolean(userStyles?.btnHoverColors?.bg);

			specificCSS += `
				${card} {
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
				}
				${content} {
					${safeBg(st.cardBg)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeBorder(st.cardBorderStyle, st.cardBorderWidth, st.cardBorderColor)}
					${safeShadow(st.cardShadow)}
				}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
					${st.titleAlign && st.titleAlign !== 'default' ? `text-align: ${st.titleAlign} !important;` : ''}
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
					${safeBorder(st.btnBorderStyle, st.btnBorderWidth, st.btnBorderColor)}
					${safeShadow(st.btnShadow)}
				}
				${hasCustomBtnBg ? `
					${btn} {
						background: ${st.btnColors.bg} !important;
					}
				` : (st.btnColors?.bg ? `
					${selector} .priceTableBGBefore .pricingTableFour:not(.purple):not(.orange) .pricingSignUp a,
					${selector} .priceTableBGBefore .pricingTableFour.default .pricingSignUp a {
						background: ${st.btnColors.bg} !important;
					}
				` : '')}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
				}
				${hasCustomBtnHovBg ? `
					${btnHov} {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : (st.btnHoverColors?.bg ? `
					${selector} .priceTableBGBefore .pricingTableFour:not(.purple):not(.orange) .pricingSignUp a:hover,
					${selector} .priceTableBGBefore .pricingTableFour.default .pricingSignUp a:hover {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : '')}
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

			const hasCustomBtnBg = Boolean(userStyles?.btnColors?.bg);
			const hasCustomBtnHovBg = Boolean(userStyles?.btnHoverColors?.bg);

			specificCSS += `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeBorder(st.cardBorderStyle, st.cardBorderWidth, st.cardBorderColor)}
					${safeShadow(st.cardShadow)}
				}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
					${st.titleAlign && st.titleAlign !== 'default' ? `text-align: ${st.titleAlign} !important;` : ''}
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
					${safeBorder(st.btnBorderStyle, st.btnBorderWidth, st.btnBorderColor)}
					${safeShadow(st.btnShadow)}
				}
				${hasCustomBtnBg ? `
					${btn} {
						background: ${st.btnColors.bg} !important;
					}
				` : (st.btnColors?.bg ? `
					${selector} .priceTableGradient .pricingTable:not(.green):not(.blue) .pricingSignUp a,
					${selector} .priceTableGradient .pricingTable.default .pricingSignUp a {
						background: ${st.btnColors.bg} !important;
					}
				` : '')}
				${st.btnTypo?.fontFamily ? getTypoCSS(btn, st.btnTypo)?.styles || '' : ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
				}
				${hasCustomBtnHovBg ? `
					${btnHov} {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : (st.btnHoverColors?.bg ? `
					${selector} .priceTableGradient .pricingTable:not(.green):not(.blue) .pricingSignUp a:hover,
					${selector} .priceTableGradient .pricingTable.default .pricingSignUp a:hover {
						background: ${st.btnHoverColors.bg} !important;
					}
				` : '')}
			`;
			break;
		}
	}

	// 2. Individual Column Custom Colors from ItemsPanel (takes highest precedence)
	tables.forEach((tbl, i) => {
		const planSl = `${selector} .bppt-plan-${i}`;
		const hBg = typeof tbl.headerBg === 'object' && tbl.headerBg !== null ? (tbl.headerBg.color || tbl.headerBg.bg || '') : (tbl.headerBg || '');
		const pBg = typeof tbl.priceBg === 'object' && tbl.priceBg !== null ? (tbl.priceBg.color || tbl.priceBg.bg || '') : (tbl.priceBg || '');
		const bBg = typeof tbl.btnBg === 'object' && tbl.btnBg !== null ? (tbl.btnBg.color || tbl.btnBg.bg || '') : (tbl.btnBg || '');
		const bCol = typeof tbl.btnColor === 'object' && tbl.btnColor !== null ? (tbl.btnColor.color || '') : (tbl.btnColor || '');
		const cBg = typeof tbl.cardBg === 'object' && tbl.cardBg !== null ? (tbl.cardBg.color || tbl.cardBg.bg || '') : (tbl.cardBg || '');

		switch (theme) {
			case 'demo-1': {
				const cardSl = `${selector} .bppt_pricing .plan.bppt-plan-${i}`;
				if (hBg) {
					specificCSS += `
						${cardSl} .plan-entry-title,
						${cardSl} .plan-entry-title > h3,
						${cardSl} .price,
						${planSl} .plan-entry-title,
						${planSl} .plan-entry-title > h3,
						${planSl} .price {
							background: ${hBg} !important;
						}
						${cardSl} .bttn a,
						${planSl} .bttn a {
							background: ${hBg} !important;
						}
					`;
				}
				if (pBg) {
					specificCSS += `
						${cardSl} .price,
						${planSl} .price {
							background: ${pBg} !important;
						}
					`;
				}
				if (bBg) {
					specificCSS += `
						${cardSl} .bttn a,
						${planSl} .bttn a {
							background: ${bBg} !important;
						}
					`;
				}
				if (bCol) {
					specificCSS += `
						${cardSl} .bttn a,
						${cardSl} .bttn a:hover,
						${planSl} .bttn a,
						${planSl} .bttn a:hover {
							color: ${bCol} !important;
						}
					`;
				}
				if (cBg) {
					specificCSS += `
						${cardSl},
						${cardSl} .plan-inner,
						${planSl},
						${planSl} .plan-inner {
							background: ${cBg} !important;
							background-color: ${cBg} !important;
						}
					`;
				}
				break;
			}

			case 'demo-2': {
				const cardSl = `${selector} .bppt_container .pricingTableTwo.bppt-plan-${i}`;
				if (hBg) {
					specificCSS += `
						${cardSl} .pricingTable-header,
						${planSl} .pricingTable-header {
							background: ${hBg} !important;
						}
						${cardSl} .pricing-content,
						${planSl} .pricing-content {
							border-color: ${hBg} !important;
						}
						${cardSl} .pricing-content li:before,
						${planSl} .pricing-content li:before {
							background: ${hBg} !important;
						}
						${cardSl} .pricingTable-signup a,
						${planSl} .pricingTable-signup a {
							background: ${hBg} !important;
						}
						${cardSl}:before,
						${cardSl}:after,
						${planSl}:before,
						${planSl}:after {
							background: linear-gradient(to left bottom, ${hBg} 45%, transparent 50%) !important;
						}
						${cardSl} .pricingTable-signup a:before,
						${cardSl} .pricingTable-signup a:after,
						${planSl} .pricingTable-signup a:before,
						${planSl} .pricingTable-signup a:after {
							background: linear-gradient(to left bottom, ${hBg} 48%, transparent 50%) !important;
						}
					`;
				}
				if (bBg) {
					specificCSS += `
						${cardSl} .pricingTable-signup a,
						${planSl} .pricingTable-signup a {
							background: ${bBg} !important;
						}
						${cardSl} .pricingTable-signup a:before,
						${cardSl} .pricingTable-signup a:after,
						${planSl} .pricingTable-signup a:before,
						${planSl} .pricingTable-signup a:after {
							background: linear-gradient(to left bottom, ${bBg} 48%, transparent 50%) !important;
						}
					`;
				}
				if (bCol) {
					specificCSS += `
						${cardSl} .pricingTable-signup a,
						${cardSl} .pricingTable-signup a:hover,
						${planSl} .pricingTable-signup a,
						${planSl} .pricingTable-signup a:hover {
							color: ${bCol} !important;
						}
					`;
				}
				if (cBg) {
					specificCSS += `
						${cardSl},
						${planSl} {
							background: ${cBg} !important;
							background-color: ${cBg} !important;
						}
					`;
				}
				break;
			}

			case 'demo-3': {
				const cardSl = `${selector} .bppt_table3 .pricingTable.bppt-plan-${i}`;
				if (hBg) {
					specificCSS += `
						${cardSl} .title,
						${planSl} .title {
							color: ${hBg} !important;
						}
						${cardSl} .price-value,
						${cardSl} .pricingTable-signup-three a,
						${planSl} .price-value,
						${planSl} .pricingTable-signup-three a {
							background: ${hBg} !important;
						}
					`;
				}
				if (pBg) {
					specificCSS += `
						${cardSl} .price-value,
						${planSl} .price-value {
							background: ${pBg} !important;
						}
					`;
				}
				if (bBg) {
					specificCSS += `
						${cardSl} .pricingTable-signup-three a,
						${planSl} .pricingTable-signup-three a {
							background: ${bBg} !important;
						}
					`;
				}
				if (bCol) {
					specificCSS += `
						${cardSl} .pricingTable-signup-three a,
						${cardSl} .pricingTable-signup-three a:hover,
						${planSl} .pricingTable-signup-three a,
						${planSl} .pricingTable-signup-three a:hover {
							color: ${bCol} !important;
						}
					`;
				}
				if (cBg) {
					specificCSS += `
						${cardSl},
						${cardSl} .pricingTable-header,
						${cardSl} .pricing-content,
						${planSl},
						${planSl} .pricingTable-header,
						${planSl} .pricing-content {
							background: ${cBg} !important;
							background-color: ${cBg} !important;
						}
					`;
				}
				break;
			}

			case 'demo-4': {
				const cardSl = `${selector} .priceTableBGBefore .pricingTableFour.bppt-plan-${i}`;
				if (hBg) {
					specificCSS += `
						${cardSl}:before,
						${planSl}:before {
							background: ${hBg} !important;
						}
						${cardSl} .pricingHeader .title,
						${planSl} .pricingHeader .title {
							color: ${hBg} !important;
						}
						${cardSl} .pricingFeatures li:before,
						${planSl} .pricingFeatures li:before {
							color: ${hBg} !important;
						}
						${cardSl} .pricingSignUp a,
						${planSl} .pricingSignUp a {
							background: ${hBg} !important;
						}
					`;
				}
				if (bBg) {
					specificCSS += `
						${cardSl} .pricingSignUp a,
						${planSl} .pricingSignUp a {
							background: ${bBg} !important;
						}
					`;
				}
				if (bCol) {
					specificCSS += `
						${cardSl} .pricingSignUp a,
						${cardSl} .pricingSignUp a:hover,
						${planSl} .pricingSignUp a,
						${planSl} .pricingSignUp a:hover {
							color: ${bCol} !important;
						}
					`;
				}
				if (cBg) {
					specificCSS += `
						${cardSl} .pricingContent,
						${planSl} .pricingContent {
							background: ${cBg} !important;
							background-color: ${cBg} !important;
						}
					`;
				}
				break;
			}

			case 'demo-5':
			default: {
				const cardSl = `${selector} .priceTableGradient .pricingTable.bppt-plan-${i}`;
				if (hBg) {
					specificCSS += `
						${cardSl} .pricingHeader,
						${planSl} .pricingHeader {
							background: ${hBg} !important;
						}
						${cardSl} .pricingFeatures li:before,
						${planSl} .pricingFeatures li:before {
							background: ${hBg} !important;
						}
						${cardSl} .pricingSignUp a,
						${planSl} .pricingSignUp a {
							background: ${hBg} !important;
						}
					`;
				}
				if (bBg) {
					specificCSS += `
						${cardSl} .pricingSignUp a,
						${planSl} .pricingSignUp a {
							background: ${bBg} !important;
						}
					`;
				}
				if (bCol) {
					specificCSS += `
						${cardSl} .pricingSignUp a,
						${cardSl} .pricingSignUp a:hover,
						${planSl} .pricingSignUp a,
						${planSl} .pricingSignUp a:hover {
							color: ${bCol} !important;
						}
					`;
				}
				if (cBg) {
					specificCSS += `
						${cardSl},
						${planSl} {
							background: ${cBg} !important;
							background-color: ${cBg} !important;
						}
					`;
				}
				break;
			}
		}
	});

	return `${fontImports}\n${specificCSS}`;
};
