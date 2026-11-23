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
					gap: ${rGap} ${cGap} !important;
				}
				${selector} .bppt_pricing .plan,
				${selector} .bppt_container .pricingTableTwo,
				${selector} .bppt_table3 .pricingTable,
				${selector} .priceTableBGBefore .pricingTableFour,
				${selector} .priceTableGradient .pricingTable {
					width: calc(${100 / (cols.desktop || 3)}% - ${cGap}) !important;
				}
				${tabBreakpoint} {
					${selector} .bppt_pricing .plan,
					${selector} .bppt_container .pricingTableTwo,
					${selector} .bppt_table3 .pricingTable,
					${selector} .priceTableBGBefore .pricingTableFour,
					${selector} .priceTableGradient .pricingTable {
						width: calc(${100 / (cols.tablet || 2)}% - ${cGap}) !important;
					}
				}
				${mobileBreakpoint} {
					${selector} .bppt_pricing .plan,
					${selector} .bppt_container .pricingTableTwo,
					${selector} .bppt_table3 .pricingTable,
					${selector} .priceTableBGBefore .pricingTableFour,
					${selector} .priceTableGradient .pricingTable {
						width: calc(${100 / (cols.mobile || 1)}% - ${cGap}) !important;
					}
				}
			`
		}} />
	);
};

export default Style;
