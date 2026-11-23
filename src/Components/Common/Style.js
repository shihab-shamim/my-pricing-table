import { tabBreakpoint, mobileBreakpoint } from '../../../../bpl-tools/utils/data';

const Style = ({ attributes, clientId }) => {
	const { columns, columnGap = '20px', rowGap = '30px' } = attributes;

	const cols = typeof columns === 'object' && columns !== null
		? { desktop: 3, tablet: 2, mobile: 1, ...columns }
		: { desktop: typeof columns === 'number' ? columns : 3, tablet: 2, mobile: 1 };

	const selector = clientId ? `.bppt-${clientId}` : '.bppt-pricing-table-editor-wrapper';
	const cGap = columnGap || '20px';
	const rGap = rowGap || '30px';

	return (
		<style dangerouslySetInnerHTML={{
			__html: `
				${selector} .bppt_pricing,
				${selector} .bppt_container,
				${selector} .bppt_table3,
				${selector} .priceTableBGBefore,
				${selector} .priceTableGradient {
					display: grid !important;
					grid-template-columns: repeat(${cols.desktop || 3}, minmax(0, 1fr)) !important;
					gap: ${rGap} ${cGap} !important;
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
				${tabBreakpoint} {
					${selector} .bppt_pricing,
					${selector} .bppt_container,
					${selector} .bppt_table3,
					${selector} .priceTableBGBefore,
					${selector} .priceTableGradient {
						grid-template-columns: repeat(${cols.tablet || 2}, minmax(0, 1fr)) !important;
					}
				}
				${mobileBreakpoint} {
					${selector} .bppt_pricing,
					${selector} .bppt_container,
					${selector} .bppt_table3,
					${selector} .priceTableBGBefore,
					${selector} .priceTableGradient {
						grid-template-columns: repeat(${cols.mobile || 1}, minmax(0, 1fr)) !important;
					}
				}
			`
		}} />
	);
};

export default Style;
