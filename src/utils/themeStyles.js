import { getBackgroundCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS } from '../../../bpl-tools/utils/getCSS';

export const DEFAULT_THEME_STYLES = {
	'demo-1': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '0px', right: '0px', bottom: '30px', left: '0px' },
		cardMargin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardRadius: '8px',
		cardShadow: [{ hOffset: '0px', vOffset: '4px', blur: '15px', spreed: '0px', color: 'rgba(0, 0, 0, 0.08)', isInset: false }],
		headerBg: '#53cfe9',
		titleColor: '#ffffff',
		titleTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 20, tablet: 18, mobile: 18 }, textTransform: 'uppercase' },
		priceColor: '#ffffff',
		priceBg: '#20bada',
		priceTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 28, tablet: 26, mobile: 24 } },
		unitColor: '#ffffff',
		unitTypo: { fontFamily: 'Lato', fontWeight: '400', fontSize: { desktop: 12, tablet: 12, mobile: 12 } },
		featureColor: '#323232',
		featureTypo: { fontFamily: 'Lato', fontWeight: '400', fontSize: { desktop: 14, tablet: 14, mobile: 14 }, lineHeight: '36px' },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#20bada' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#1aa3c0' },
		btnTypo: { fontFamily: 'Lato', fontWeight: '700', fontSize: { desktop: 14, tablet: 14, mobile: 14 } },
		btnPadding: { top: '10px', right: '25px', bottom: '10px', left: '25px' },
		btnRadius: '25px'
	},
	'demo-2': {
		cardBg: { type: 'solid', color: '#f1f1f1' },
		cardPadding: { top: '0px', right: '0px', bottom: '30px', left: '0px' },
		cardMargin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardRadius: '4px',
		cardShadow: [{ hOffset: '0px', vOffset: '5px', blur: '20px', spreed: '0px', color: 'rgba(0, 0, 0, 0.1)', isInset: false }],
		headerBg: '#f53c25',
		titleColor: '#ffffff',
		titleTypo: { fontFamily: 'Rubik', fontWeight: '600', fontSize: { desktop: 26, tablet: 24, mobile: 22 }, textTransform: 'uppercase' },
		priceColor: '#000000',
		priceTypo: { fontFamily: 'Rubik', fontWeight: '500', fontSize: { desktop: 56, tablet: 48, mobile: 40 } },
		unitColor: '#666666',
		unitTypo: { fontFamily: 'Rubik', fontWeight: '400', fontSize: { desktop: 16, tablet: 15, mobile: 14 } },
		featureColor: '#444444',
		featureTypo: { fontFamily: 'Rubik', fontWeight: '400', fontSize: { desktop: 14, tablet: 14, mobile: 14 }, lineHeight: '38px' },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#f53c25' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#d92c16' },
		btnTypo: { fontFamily: 'Rubik', fontWeight: '600', fontSize: { desktop: 15, tablet: 14, mobile: 14 } },
		btnPadding: { top: '12px', right: '28px', bottom: '12px', left: '28px' },
		btnRadius: '4px'
	},
	'demo-3': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '0px', right: '0px', bottom: '30px', left: '0px' },
		cardMargin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardRadius: '6px',
		cardShadow: [{ hOffset: '0px', vOffset: '0px', blur: '18px', spreed: '0px', color: 'rgba(0, 0, 0, 0.12)', isInset: false }],
		headerBg: '#ffffff',
		titleColor: '#34ca95',
		titleTypo: { fontFamily: 'Poppins', fontWeight: '600', fontSize: { desktop: 28, tablet: 26, mobile: 24 } },
		priceColor: '#ffffff',
		priceBg: '#34ca95',
		priceTypo: { fontFamily: 'Poppins', fontWeight: '600', fontSize: { desktop: 42, tablet: 38, mobile: 34 } },
		unitColor: '#ffffff',
		unitTypo: { fontFamily: 'Poppins', fontWeight: '400', fontSize: { desktop: 16, tablet: 15, mobile: 14 } },
		featureColor: '#888888',
		featureTypo: { fontFamily: 'Poppins', fontWeight: '500', fontSize: { desktop: 15, tablet: 14, mobile: 14 }, lineHeight: '36px' },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#34ca95' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#28ab7c' },
		btnTypo: { fontFamily: 'Poppins', fontWeight: '600', fontSize: { desktop: 15, tablet: 14, mobile: 14 } },
		btnPadding: { top: '12px', right: '30px', bottom: '12px', left: '30px' },
		btnRadius: '25px'
	},
	'demo-4': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '30px', right: '25px', bottom: '30px', left: '25px' },
		cardMargin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardRadius: '12px',
		cardShadow: [{ hOffset: '0px', vOffset: '8px', blur: '24px', spreed: '0px', color: 'rgba(0, 0, 0, 0.08)', isInset: false }],
		headerBg: 'transparent',
		titleColor: '#222222',
		titleTypo: { fontFamily: 'Roboto', fontWeight: '700', fontSize: { desktop: 24, tablet: 22, mobile: 20 } },
		priceColor: '#222222',
		priceTypo: { fontFamily: 'Roboto', fontWeight: '800', fontSize: { desktop: 40, tablet: 36, mobile: 32 } },
		unitColor: '#666666',
		unitTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 15, tablet: 14, mobile: 14 } },
		featureColor: '#555555',
		featureTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 14, tablet: 14, mobile: 14 }, lineHeight: '34px' },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#8bc34a' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#7cb342' },
		btnTypo: { fontFamily: 'Roboto', fontWeight: '600', fontSize: { desktop: 15, tablet: 14, mobile: 14 } },
		btnPadding: { top: '12px', right: '30px', bottom: '12px', left: '30px' },
		btnRadius: '8px'
	},
	'demo-5': {
		cardBg: { type: 'solid', color: '#ffffff' },
		cardPadding: { top: '25px', right: '20px', bottom: '25px', left: '20px' },
		cardMargin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
		cardRadius: '10px',
		cardShadow: [{ hOffset: '0px', vOffset: '6px', blur: '20px', spreed: '0px', color: 'rgba(0, 0, 0, 0.09)', isInset: false }],
		headerBg: 'transparent',
		titleColor: '#222222',
		titleTypo: { fontFamily: 'Roboto', fontWeight: '700', fontSize: { desktop: 24, tablet: 22, mobile: 20 } },
		priceColor: '#ff5722',
		priceTypo: { fontFamily: 'Roboto', fontWeight: '800', fontSize: { desktop: 42, tablet: 38, mobile: 34 } },
		unitColor: '#777777',
		unitTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 15, tablet: 14, mobile: 14 } },
		featureColor: '#555555',
		featureTypo: { fontFamily: 'Roboto', fontWeight: '400', fontSize: { desktop: 14, tablet: 14, mobile: 14 }, lineHeight: '34px' },
		btnColors: { color: '#ffffff', bgType: 'solid', bg: '#ff5722' },
		btnHoverColors: { color: '#ffffff', bgType: 'solid', bg: '#e64a19' },
		btnTypo: { fontFamily: 'Roboto', fontWeight: '600', fontSize: { desktop: 15, tablet: 14, mobile: 14 } },
		btnPadding: { top: '12px', right: '28px', bottom: '12px', left: '28px' },
		btnRadius: '25px'
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

export const generateThemeCSS = (selector, theme = 'demo-1', st = {}) => {
	let fontImports = '';
	const typos = [st.titleTypo, st.priceTypo, st.unitTypo, st.featureTypo, st.btnTypo];
	typos.forEach(t => {
		const link = getTypoCSS('', t)?.googleFontLink;
		if (link && !fontImports.includes(link)) {
			fontImports += `${link}\n`;
		}
	});

	let specificCSS = '';

	switch (theme) {
		case 'demo-1': {
			const card = `${selector} .bppt_pricing .plan-inner`;
			const header = `${selector} .bppt_pricing .plan-entry-title`;
			const title = `${selector} .bppt_pricing .plan-entry-title > h3`;
			const price = `${selector} .bppt_pricing .plan-entry-title .price`;
			const unit = `${selector} .bppt_pricing .price span`;
			const feat = `${selector} .bppt_pricing .plan-entry-content ul li`;
			const btn = `${selector} .bppt_pricing .bttn a`;
			const btnHov = `${selector} .bppt_pricing .bttn a:hover`;

			specificCSS = `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeShadow(st.cardShadow)}
				}
				${header} {
					${st.headerBg ? `background: ${st.headerBg} !important;` : ''}
				}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
					${st.headerBg ? `background: ${st.headerBg} !important;` : ''}
				}
				${getTypoCSS(title, st.titleTypo)?.styles || ''}
				${price} {
					${st.priceColor ? `color: ${st.priceColor} !important;` : ''}
					${st.priceBg ? `background: ${st.priceBg} !important;` : ''}
				}
				${getTypoCSS(price, st.priceTypo)?.styles || ''}
				${unit} {
					${st.unitColor ? `color: ${st.unitColor} !important;` : ''}
				}
				${getTypoCSS(unit, st.unitTypo)?.styles || ''}
				${feat} {
					${st.featureColor ? `color: ${st.featureColor} !important;` : ''}
				}
				${getTypoCSS(feat, st.featureTypo)?.styles || ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${st.btnColors?.bg ? `background: ${st.btnColors.bg} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${getTypoCSS(btn, st.btnTypo)?.styles || ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
					${st.btnHoverColors?.bg ? `background: ${st.btnHoverColors.bg} !important;` : ''}
				}
			`;
			break;
		}

		case 'demo-2': {
			const card = `${selector} .bppt_container .pricingTableTwo`;
			const header = `${selector} .bppt_container .pricingTableTwo .pricingTable-header`;
			const title = `${selector} .bppt_container .pricingTableTwo .title`;
			const price = `${selector} .bppt_container .pricingTableTwo .price-value`;
			const unit = `${selector} .bppt_container .pricingTableTwo .price-value > span`;
			const feat = `${selector} .bppt_container .pricingTableTwo .pricing-content ul li`;
			const btn = `${selector} .bppt_container .pricingTableTwo .pricingTable-signup a`;
			const btnHov = `${selector} .bppt_container .pricingTableTwo .pricingTable-signup a:hover`;

			specificCSS = `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeShadow(st.cardShadow)}
				}
				${header} {
					${st.headerBg ? `background: ${st.headerBg} !important;` : ''}
				}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
				}
				${getTypoCSS(title, st.titleTypo)?.styles || ''}
				${price} {
					${st.priceColor ? `color: ${st.priceColor} !important;` : ''}
				}
				${getTypoCSS(price, st.priceTypo)?.styles || ''}
				${unit} {
					${st.unitColor ? `color: ${st.unitColor} !important;` : ''}
				}
				${getTypoCSS(unit, st.unitTypo)?.styles || ''}
				${feat} {
					${st.featureColor ? `color: ${st.featureColor} !important;` : ''}
				}
				${getTypoCSS(feat, st.featureTypo)?.styles || ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${st.btnColors?.bg ? `background: ${st.btnColors.bg} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${getTypoCSS(btn, st.btnTypo)?.styles || ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
					${st.btnHoverColors?.bg ? `background: ${st.btnHoverColors.bg} !important;` : ''}
				}
			`;
			break;
		}

		case 'demo-3': {
			const card = `${selector} .bppt_table3 .pricingTable`;
			const header = `${selector} .bppt_table3 .pricingTable .pricingTable-header`;
			const title = `${selector} .bppt_table3 .pricingTable .title`;
			const priceBar = `${selector} .bppt_table3 .pricingTable .price-value`;
			const price = `${selector} .bppt_table3 .pricingTable .price-value .amount`;
			const unit = `${selector} .bppt_table3 .pricingTable .price-value .duration`;
			const feat = `${selector} .bppt_table3 .pricingTable .pricing-content ul li`;
			const btn = `${selector} .bppt_table3 .pricingTable .pricingTable-signup-three a`;
			const btnHov = `${selector} .bppt_table3 .pricingTable .pricingTable-signup-three a:hover`;

			specificCSS = `
				${card} {
					${safeBg(st.cardBg)}
					${safeBox('padding', st.cardPadding)}
					${safeBox('margin', st.cardMargin)}
					${st.cardRadius ? `border-radius: ${st.cardRadius} !important;` : ''}
					${safeShadow(st.cardShadow)}
				}
				${header} {
					${st.headerBg ? `background: ${st.headerBg} !important;` : ''}
				}
				${title} {
					${st.titleColor ? `color: ${st.titleColor} !important;` : ''}
				}
				${getTypoCSS(title, st.titleTypo)?.styles || ''}
				${priceBar} {
					${st.priceBg ? `background: ${st.priceBg} !important;` : ''}
				}
				${price} {
					${st.priceColor ? `color: ${st.priceColor} !important;` : ''}
				}
				${getTypoCSS(price, st.priceTypo)?.styles || ''}
				${unit} {
					${st.unitColor ? `color: ${st.unitColor} !important;` : ''}
				}
				${getTypoCSS(unit, st.unitTypo)?.styles || ''}
				${feat} {
					${st.featureColor ? `color: ${st.featureColor} !important;` : ''}
				}
				${getTypoCSS(feat, st.featureTypo)?.styles || ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${st.btnColors?.bg ? `background: ${st.btnColors.bg} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${getTypoCSS(btn, st.btnTypo)?.styles || ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
					${st.btnHoverColors?.bg ? `background: ${st.btnHoverColors.bg} !important;` : ''}
				}
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

			specificCSS = `
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
				${getTypoCSS(title, st.titleTypo)?.styles || ''}
				${price} {
					${st.priceColor ? `color: ${st.priceColor} !important;` : ''}
				}
				${getTypoCSS(price, st.priceTypo)?.styles || ''}
				${unit} {
					${st.unitColor ? `color: ${st.unitColor} !important;` : ''}
				}
				${getTypoCSS(unit, st.unitTypo)?.styles || ''}
				${feat} {
					${st.featureColor ? `color: ${st.featureColor} !important;` : ''}
				}
				${getTypoCSS(feat, st.featureTypo)?.styles || ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${st.btnColors?.bg ? `background: ${st.btnColors.bg} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${getTypoCSS(btn, st.btnTypo)?.styles || ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
					${st.btnHoverColors?.bg ? `background: ${st.btnHoverColors.bg} !important;` : ''}
				}
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

			specificCSS = `
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
				${getTypoCSS(title, st.titleTypo)?.styles || ''}
				${price} {
					${st.priceColor ? `color: ${st.priceColor} !important;` : ''}
				}
				${getTypoCSS(price, st.priceTypo)?.styles || ''}
				${unit} {
					${st.unitColor ? `color: ${st.unitColor} !important;` : ''}
				}
				${getTypoCSS(unit, st.unitTypo)?.styles || ''}
				${feat} {
					${st.featureColor ? `color: ${st.featureColor} !important;` : ''}
				}
				${getTypoCSS(feat, st.featureTypo)?.styles || ''}
				${btn} {
					${st.btnColors?.color ? `color: ${st.btnColors.color} !important;` : ''}
					${st.btnColors?.bg ? `background: ${st.btnColors.bg} !important;` : ''}
					${safeBox('padding', st.btnPadding)}
					${st.btnRadius ? `border-radius: ${st.btnRadius} !important;` : ''}
				}
				${getTypoCSS(btn, st.btnTypo)?.styles || ''}
				${btnHov} {
					${st.btnHoverColors?.color ? `color: ${st.btnHoverColors.color} !important;` : ''}
					${st.btnHoverColors?.bg ? `background: ${st.btnHoverColors.bg} !important;` : ''}
				}
			`;
			break;
		}
	}

	return `${fontImports}\n${specificCSS}`;
};
