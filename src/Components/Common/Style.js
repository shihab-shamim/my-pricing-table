import { tabBreakpoint, mobileBreakpoint } from '../../../../bpl-tools/utils/data';
import { getMergedThemeStyle, generateThemeCSS } from '../../utils/themeStyles';

const Style = ({ attributes, clientId }) => {
	const { theme = 'demo-1', tables = [], columns, columnGap, rowGap, styles = {} } = attributes;

	const cols = typeof columns === 'object' && columns !== null
		? { desktop: 3, tablet: 2, mobile: 1, ...columns }
		: { desktop: typeof columns === 'number' ? columns : 3, tablet: 2, mobile: 1 };

	const colGaps = typeof columnGap === 'object' && columnGap !== null
		? { desktop: '20px', tablet: '15px', mobile: '10px', ...columnGap }
		: { desktop: columnGap || '20px', tablet: '15px', mobile: '10px' };

	const rowGaps = typeof rowGap === 'object' && rowGap !== null
		? { desktop: '30px', tablet: '20px', mobile: '15px', ...rowGap }
		: { desktop: rowGap || '30px', tablet: '20px', mobile: '15px' };

	const selector = clientId ? `.bppt-${clientId}` : '.bppt-pricing-table-editor-wrapper';
	const currentThemeStyle = getMergedThemeStyle(theme, styles);
	const customThemeCSS = generateThemeCSS(selector, theme, currentThemeStyle, tables, styles?.[theme]);

	return (
		<style dangerouslySetInnerHTML={{
			__html: `
				${customThemeCSS}

				${selector} .bppt_pricing,
				${selector} .bppt_container,
				${selector} .bppt_table3,
				${selector} .priceTableBGBefore,
				${selector} .priceTableGradient {
					display: grid !important;
					grid-template-columns: repeat(${cols.desktop || 3}, minmax(0, 1fr)) !important;
					gap: ${rowGaps.desktop || '30px'} ${colGaps.desktop || '20px'} !important;
					justify-content: stretch !important;
				}
				${selector} .bppt_pricing .plan,
				${selector} .bppt_pricing .plan-inner,
				${selector} .bppt_container .pricingTableTwo,
				${selector} .bppt_table3 .pricingTable,
				${selector} .priceTableBGBefore .pricingTableFour,
				${selector} .priceTableBGBefore .pricingTableFour .pricingContent,
				${selector} .priceTableGradient .pricingTable {
					width: 100% !important;
					max-width: 100% !important;
					min-width: 0 !important;
					margin-left: 0 !important;
					margin-right: 0 !important;
				}
				${selector} .bppt_pricing .plan-inner,
				${selector} .bppt_container .pricingTableTwo,
				${selector} .bppt_table3 .pricingTable,
				${selector} .priceTableBGBefore .pricingTableFour .pricingContent,
				${selector} .priceTableGradient .pricingTable {
					position: relative !important;
				}
				${tabBreakpoint} {
					${selector} .bppt_pricing,
					${selector} .bppt_container,
					${selector} .bppt_table3,
					${selector} .priceTableBGBefore,
					${selector} .priceTableGradient {
						grid-template-columns: repeat(${cols.tablet || 2}, minmax(0, 1fr)) !important;
						gap: ${rowGaps.tablet || '20px'} ${colGaps.tablet || '15px'} !important;
					}
				}
				${mobileBreakpoint} {
					${selector} .bppt_pricing,
					${selector} .bppt_container,
					${selector} .bppt_table3,
					${selector} .priceTableBGBefore,
					${selector} .priceTableGradient {
						grid-template-columns: repeat(${cols.mobile || 1}, minmax(0, 1fr)) !important;
						gap: ${rowGaps.mobile || '15px'} ${colGaps.mobile || '10px'} !important;
					}
				}
			`
		}} />
	);
};

export default Style;
