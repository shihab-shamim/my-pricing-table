import { __, sprintf } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	ToggleControl,
	CheckboxControl,
	Button,
	RangeControl,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { ItemsPanel, Device, Label, ColorControl } from '../../../../../bpl-tools/Components';
import { emUnit, perUnit, pxUnit } from '../../../../../bpl-tools/utils/options';

export const THEME_OPTIONS = [
	{ label: __('Theme 1 — Circular Price Badge', 'bpricing'), value: 'demo-1' },
	{ label: __('Theme 2 — Ribbon & Banner Style', 'bpricing'), value: 'demo-2' },
	{ label: __('Theme 3 — Gradient Bar Style', 'bpricing'), value: 'demo-3' },
	{ label: __('Theme 4 — Modern Card Shape', 'bpricing'), value: 'demo-4' },
	{ label: __('Theme 5 — Arrow Banner Gradient', 'bpricing'), value: 'demo-5' }
];

export const THEME_SCHEMES = {
	'demo-1': ['basic', 'standard', 'ultimite'],
	'demo-2': ['lemon', 'purple', 'pink', 'sky', 'red'],
	'demo-3': ['purple', 'pink'],
	'demo-4': ['purple', 'orange'],
	'demo-5': ['green', 'blue']
};

export const THEME_DEFAULT_SCHEMES = {
	'demo-1': ['default', 'standard', 'ultimite'],
	'demo-2': ['lemon', 'purple', 'pink', 'sky', 'red'],
	'demo-3': ['default', 'purple', 'pink'],
	'demo-4': ['default', 'purple', 'orange'],
	'demo-5': ['default', 'green', 'blue']
};

export const getEffectiveScheme = (theme, colorScheme, index) => {
	const validSchemes = THEME_SCHEMES[theme] || [];
	if (colorScheme && colorScheme !== 'default' && validSchemes.includes(colorScheme)) {
		return colorScheme;
	}
	const defaults = THEME_DEFAULT_SCHEMES[theme] || THEME_DEFAULT_SCHEMES['demo-1'];
	return defaults[index % defaults.length];
};

export const COLOR_SCHEMES = {
	'demo-1': [
		{ label: __('Auto / Default (By Column)', 'bpricing'), value: 'default' },
		{ label: __('Basic (Mint Green)', 'bpricing'), value: 'basic' },
		{ label: __('Standard (Ocean Blue)', 'bpricing'), value: 'standard' },
		{ label: __('Ultimate (Coral Pink)', 'bpricing'), value: 'ultimite' }
	],
	'demo-2': [
		{ label: __('Auto / Default (By Column)', 'bpricing'), value: 'default' },
		{ label: __('Lemon (Green)', 'bpricing'), value: 'lemon' },
		{ label: __('Purple', 'bpricing'), value: 'purple' },
		{ label: __('Pink', 'bpricing'), value: 'pink' },
		{ label: __('Sky (Sky Blue)', 'bpricing'), value: 'sky' },
		{ label: __('Crimson Red', 'bpricing'), value: 'red' }
	],
	'demo-3': [
		{ label: __('Auto / Default (By Column)', 'bpricing'), value: 'default' },
		{ label: __('Purple', 'bpricing'), value: 'purple' },
		{ label: __('Pink', 'bpricing'), value: 'pink' }
	],
	'demo-4': [
		{ label: __('Auto / Default (By Column)', 'bpricing'), value: 'default' },
		{ label: __('Purple', 'bpricing'), value: 'purple' },
		{ label: __('Orange', 'bpricing'), value: 'orange' }
	],
	'demo-5': [
		{ label: __('Auto / Default (By Column)', 'bpricing'), value: 'default' },
		{ label: __('Green', 'bpricing'), value: 'green' },
		{ label: __('Blue', 'bpricing'), value: 'blue' }
	]
};

const PlanItemSettings = ({ attributes, setAttributes, arrKey = 'tables', index }) => {
	const items = attributes?.[arrKey] || [];
	const currentPlan = items[index] || {};
	const { theme = 'demo-1' } = attributes;
	const currentSchemes = COLOR_SCHEMES[theme] || COLOR_SCHEMES['demo-1'];
	const effectiveScheme = getEffectiveScheme(theme, currentPlan.colorScheme, index);

	const updatePlan = (key, value) => {
		const nextTables = items.map((tbl, idx) => {
			if (idx === index) {
				return { ...tbl, [key]: value };
			}
			return tbl;
		});
		setAttributes({ [arrKey]: nextTables });
	};

	const updatePlanFields = updates => {
		const nextTables = items.map((tbl, idx) => {
			if (idx === index) {
				return { ...tbl, ...updates };
			}
			return tbl;
		});
		setAttributes({ [arrKey]: nextTables });
	};

	const updateFeature = (fIndex, key, value) => {
		const features = [...(currentPlan.features || [])];
		features[fIndex] = { ...features[fIndex], [key]: value };
		updatePlan('features', features);
	};

	const addFeature = () => {
		const features = [...(currentPlan.features || []), { text: __('New Feature', 'bpricing'), enabled: true }];
		updatePlan('features', features);
	};

	const removeFeature = fIndex => {
		const features = (currentPlan.features || []).filter((_, i) => i !== fIndex);
		updatePlan('features', features);
	};

	return (
		<div className="bppt-plan-item-settings" style={{ padding: '6px 0' }}>
			<TextControl
				label={__('Plan Name', 'bpricing')}
				value={currentPlan.name || ''}
				onChange={val => updatePlan('name', val)}
			/>

			<div style={{ display: 'flex', gap: '8px' }}>
				<div style={{ flex: 1 }}>
					<TextControl
						label={__('Currency', 'bpricing')}
						value={currentPlan.currency || '$'}
						onChange={val => updatePlan('currency', val)}
					/>
				</div>
				<div style={{ flex: 2 }}>
					<TextControl
						label={__('Price', 'bpricing')}
						value={currentPlan.price || ''}
						onChange={val => updatePlan('price', val)}
					/>
				</div>
			</div>

			<TextControl
				label={__('Billing Period / Unit', 'bpricing')}
				value={currentPlan.unit || ''}
				onChange={val => updatePlan('unit', val)}
				help={__('e.g. month, year', 'bpricing')}
			/>

			<SelectControl
				label={__('Color Scheme', 'bpricing')}
				value={currentSchemes.some(s => s.value === currentPlan.colorScheme) ? currentPlan.colorScheme : 'default'}
				options={currentSchemes}
				onChange={val => updatePlan('colorScheme', val)}
				help={(!currentPlan.colorScheme || currentPlan.colorScheme === 'default') ? sprintf(__('Auto palette uses: %s', 'bpricing'), effectiveScheme) : undefined}
			/>

			<div style={{ marginTop: '12px', marginBottom: '14px', padding: '10px', background: '#ffffff', border: '1px solid #e2e4e7', borderRadius: '4px' }}>
				<div style={{ fontWeight: 600, fontSize: '12px', marginBottom: '8px', color: '#1e1e1e' }}>
					{__('Custom Column Colors (Optional Override)', 'bpricing')}
				</div>
				<ColorControl
					label={__('Header / Accent Color:', 'bpricing')}
					value={currentPlan.headerBg || ''}
					onChange={val => updatePlan('headerBg', val)}
				/>
				<div style={{ marginTop: '8px' }}>
					<ColorControl
						label={__('Button Background Color:', 'bpricing')}
						value={currentPlan.btnBg || ''}
						onChange={val => updatePlan('btnBg', val)}
					/>
				</div>
				<div style={{ marginTop: '8px' }}>
					<ColorControl
						label={__('Button Text Color:', 'bpricing')}
						value={currentPlan.btnColor || ''}
						onChange={val => updatePlan('btnColor', val)}
					/>
				</div>
				<div style={{ marginTop: '8px' }}>
					<ColorControl
						label={__('Card Background Color:', 'bpricing')}
						value={currentPlan.cardBg || ''}
						onChange={val => updatePlan('cardBg', val)}
					/>
				</div>
			</div>

			<ToggleControl
				label={__('Featured / Hot Plan', 'bpricing')}
				checked={Boolean(currentPlan.isFeatured)}
				onChange={val => {
					if (val && !currentPlan.badge) {
						updatePlanFields({ isFeatured: val, badge: __('Hot', 'bpricing') });
					} else {
						updatePlan('isFeatured', val);
					}
				}}
			/>

			{currentPlan.isFeatured && (
				<TextControl
					label={__('Badge Text', 'bpricing')}
					value={currentPlan.badge ?? 'Hot'}
					onChange={val => updatePlan('badge', val)}
					help={__('e.g. "Hot", "Popular", "Best Value"', 'bpricing')}
				/>
			)}

			<TextControl
				label={__('Button Text', 'bpricing')}
				value={currentPlan.btnText || ''}
				onChange={val => updatePlan('btnText', val)}
			/>

			<TextControl
				label={__('Button URL', 'bpricing')}
				value={currentPlan.btnLink || ''}
				onChange={val => updatePlan('btnLink', val)}
			/>

			<ToggleControl
				label={__('Open Link in New Tab', 'bpricing')}
				checked={Boolean(currentPlan.btnNewTab)}
				onChange={val => updatePlan('btnNewTab', val)}
			/>

			<div style={{ marginTop: '16px', borderTop: '1px solid #e0e0e0', paddingTop: '12px' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
					<h4 style={{ margin: 0, fontSize: '13px' }}>{__('Plan Features', 'bpricing')}</h4>
					<Button isSmall variant="secondary" onClick={addFeature}>
						{__('+ Add Feature', 'bpricing')}
					</Button>
				</div>

				{(currentPlan.features || []).map((feat, fIdx) => (
					<div
						key={fIdx}
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '6px',
							padding: '6px 8px',
							background: '#fff',
							border: '1px solid #e0e0e0',
							borderRadius: '4px',
							marginBottom: '6px'
						}}
					>
						<CheckboxControl
							checked={Boolean(feat.enabled !== false)}
							onChange={val => updateFeature(fIdx, 'enabled', val)}
							help=""
						/>
						<div style={{ flex: 1 }}>
							<TextControl
								value={feat.text || ''}
								onChange={val => updateFeature(fIdx, 'text', val)}
							/>
						</div>
						<Button
							isDestructive
							isSmall
							variant="link"
							onClick={() => removeFeature(fIdx)}
						>
							×
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

const General = ({ attributes, setAttributes }) => {
	const { theme = 'demo-1', tables = [], columns, columnGap, rowGap } = attributes;

	const device = useSelect(select => {
		return select('core/editor')?.getDeviceType()?.toLowerCase() || 'desktop';
	}, []);

	const columnsObj = typeof columns === 'object' && columns !== null
		? { desktop: 3, tablet: 2, mobile: 1, ...columns }
		: { desktop: typeof columns === 'number' ? columns : 3, tablet: 2, mobile: 1 };

	const columnGapObj = typeof columnGap === 'object' && columnGap !== null
		? { desktop: '20px', tablet: '15px', mobile: '10px', ...columnGap }
		: { desktop: columnGap || '20px', tablet: '15px', mobile: '10px' };

	const rowGapObj = typeof rowGap === 'object' && rowGap !== null
		? { desktop: '30px', tablet: '20px', mobile: '15px', ...rowGap }
		: { desktop: rowGap || '30px', tablet: '20px', mobile: '15px' };

	return (
		<>
			<PanelBody title={__('Select Theme', 'bpricing')} initialOpen={true}>
				<SelectControl
					label={__('Theme Design', 'bpricing')}
					value={theme}
					options={THEME_OPTIONS}
					onChange={val => {
						const targetDefaults = THEME_DEFAULT_SCHEMES[val] || THEME_DEFAULT_SCHEMES['demo-1'];
						const nextTables = (tables || []).map((t, i) => ({
							...t,
							colorScheme: targetDefaults[i % targetDefaults.length]
						}));
						setAttributes({ theme: val, tables: nextTables });
					}}
					help={__('Choose one of the 5 built-in pricing table designs.', 'bpricing')}
				/>
			</PanelBody>

			<PanelBody className="bPlPanelBody" title={__('Layout', 'bpricing')} initialOpen={true}>
				<PanelRow style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
					<Label className="mb5">{__('Columns:', 'bpricing')}</Label>
					<Device />
				</PanelRow>
				<RangeControl
					value={columnsObj[device] || 3}
					onChange={val => {
						setAttributes({
							columns: { ...columnsObj, [device]: val }
						});
					}}
					min={1}
					max={6}
					step={1}
					beforeIcon="grid-view"
				/>

				<PanelRow style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', marginBottom: '8px' }}>
					<Label className="mb5">{__('Column Gap:', 'bpricing')}</Label>
					<Device />
				</PanelRow>
				<UnitControl
					value={columnGapObj[device] || '20px'}
					onChange={val => {
						setAttributes({
							columnGap: { ...columnGapObj, [device]: val }
						});
					}}
					units={[pxUnit(), perUnit(), emUnit()]}
				/>

				<PanelRow style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', marginBottom: '8px' }}>
					<Label className="mb5">{__('Row Gap:', 'bpricing')}</Label>
					<Device />
				</PanelRow>
				<UnitControl
					value={rowGapObj[device] || '30px'}
					onChange={val => {
						setAttributes({
							rowGap: { ...rowGapObj, [device]: val }
						});
					}}
					units={[pxUnit(), perUnit(), emUnit()]}
				/>
			</PanelBody>

			<PanelBody title={__('Pricing Columns / Plans', 'bpricing')} initialOpen={false}>
				<ItemsPanel
					{...{ attributes, setAttributes }}
					arrKey="tables"
					newItem={{
						name: sprintf(__('Plan %d', 'bpricing'), (tables?.length || 0) + 1),
						price: '29',
						currency: '$',
						unit: 'month',
						badge: '',
						isFeatured: false,
						colorScheme: 'default',
						btnText: __('Choose Plan', 'bpricing'),
						btnLink: '#',
						features: [
							{ text: __('Feature 1', 'bpricing'), enabled: true },
							{ text: __('Feature 2', 'bpricing'), enabled: true },
							{ text: __('Feature 3', 'bpricing'), enabled: true }
						]
					}}
					ItemSettings={PlanItemSettings}
					itemLabel={__('Plan', 'bpricing')}
					title="name"
					design="sortable"
					minItem={1}
				/>
			</PanelBody>
		</>
	);
};

export default General;
