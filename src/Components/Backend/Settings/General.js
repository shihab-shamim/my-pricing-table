import { __, sprintf } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	CheckboxControl,
	Button
} from '@wordpress/components';
import { ItemsPanel } from '../../../../../bpl-tools/Components';

export const THEME_OPTIONS = [
	{ label: __('Theme 1 — Circular Price Badge', 'bpricing'), value: 'demo-1' },
	{ label: __('Theme 2 — Ribbon & Banner Style', 'bpricing'), value: 'demo-2' },
	{ label: __('Theme 3 — Gradient Bar Style', 'bpricing'), value: 'demo-3' },
	{ label: __('Theme 4 — Modern Card Shape', 'bpricing'), value: 'demo-4' },
	{ label: __('Theme 5 — Arrow Banner Gradient', 'bpricing'), value: 'demo-5' }
];

export const COLOR_SCHEMES = {
	'demo-1': [
		{ label: __('Default (Teal/Cyan)', 'bpricing'), value: 'default' },
		{ label: __('Basic (Mint Green)', 'bpricing'), value: 'basic' },
		{ label: __('Standard (Ocean Blue)', 'bpricing'), value: 'standard' },
		{ label: __('Ultimate (Coral Pink)', 'bpricing'), value: 'ultimite' }
	],
	'demo-2': [
		{ label: __('Default (Crimson Red)', 'bpricing'), value: 'default' },
		{ label: __('Pink', 'bpricing'), value: 'pink' },
		{ label: __('Purple', 'bpricing'), value: 'purple' },
		{ label: __('Sky', 'bpricing'), value: 'sky' },
		{ label: __('Lemon', 'bpricing'), value: 'lemon' }
	],
	'demo-3': [
		{ label: __('Default (Emerald Green)', 'bpricing'), value: 'default' },
		{ label: __('Purple', 'bpricing'), value: 'purple' },
		{ label: __('Pink', 'bpricing'), value: 'pink' }
	],
	'demo-4': [
		{ label: __('Default (Fresh Lime)', 'bpricing'), value: 'default' },
		{ label: __('Orange', 'bpricing'), value: 'orange' },
		{ label: __('Purple', 'bpricing'), value: 'purple' }
	],
	'demo-5': [
		{ label: __('Default (Warm Orange)', 'bpricing'), value: 'default' },
		{ label: __('Green', 'bpricing'), value: 'green' },
		{ label: __('Blue', 'bpricing'), value: 'blue' }
	]
};

const PlanItemSettings = ({ attributes, setAttributes, arrKey = 'tables', index }) => {
	const items = attributes?.[arrKey] || [];
	const currentPlan = items[index] || {};
	const { theme = 'demo-1' } = attributes;
	const currentSchemes = COLOR_SCHEMES[theme] || COLOR_SCHEMES['demo-1'];

	const updatePlan = (key, value) => {
		const nextTables = items.map((tbl, idx) => {
			if (idx === index) {
				return { ...tbl, [key]: value };
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
				value={currentPlan.colorScheme || 'default'}
				options={currentSchemes}
				onChange={val => updatePlan('colorScheme', val)}
			/>

			<ToggleControl
				label={__('Featured / Hot Plan', 'bpricing')}
				checked={Boolean(currentPlan.isFeatured)}
				onChange={val => updatePlan('isFeatured', val)}
			/>

			{currentPlan.isFeatured && (
				<TextControl
					label={__('Badge Text', 'bpricing')}
					value={currentPlan.badge || ''}
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
	const { theme = 'demo-1', tables = [] } = attributes;

	return (
		<>
			<PanelBody title={__('Select Theme', 'bpricing')} initialOpen={true}>
				<SelectControl
					label={__('Theme Design', 'bpricing')}
					value={theme}
					options={THEME_OPTIONS}
					onChange={val => setAttributes({ theme: val })}
					help={__('Choose one of the 5 built-in pricing table designs.', 'bpricing')}
				/>
			</PanelBody>

			<PanelBody title={__('Pricing Columns / Plans', 'bpricing')} initialOpen={true}>
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
