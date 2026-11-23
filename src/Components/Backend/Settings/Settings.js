import { __, sprintf } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	CheckboxControl,
	Button,
	TabPanel
} from '@wordpress/components';
import { useState } from 'react';

const THEME_OPTIONS = [
	{ label: __('Theme 1 — Circular Price Badge', 'bpricing'), value: 'demo-1' },
	{ label: __('Theme 2 — Ribbon & Banner Style', 'bpricing'), value: 'demo-2' },
	{ label: __('Theme 3 — Gradient Bar Style', 'bpricing'), value: 'demo-3' },
	{ label: __('Theme 4 — Modern Card Shape', 'bpricing'), value: 'demo-4' },
	{ label: __('Theme 5 — Arrow Banner Gradient', 'bpricing'), value: 'demo-5' }
];

const COLOR_SCHEMES = {
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

const Settings = ({ attributes, setAttributes }) => {
	const { theme = 'demo-1', tables = [] } = attributes;
	const [activePlan, setActivePlan] = useState(0);

	const tabs = [
		{ name: 'general', title: __('General', 'bpricing'), className: 'bppt-tab-general' },
		{ name: 'style', title: __('Style', 'bpricing'), className: 'bppt-tab-style' }
	];

	// Update one property of the active plan
	const updateCurrentPlan = (key, value) => {
		const nextTables = tables.map((tbl, idx) => {
			if (idx === activePlan) {
				return { ...tbl, [key]: value };
			}
			return tbl;
		});
		setAttributes({ tables: nextTables });
	};

	// Add a new plan column
	const addPlan = () => {
		const newPlan = {
			name: sprintf(__('Plan %d', 'bpricing'), tables.length + 1),
			price: '29',
			currency: '$',
			unit: 'month',
			badge: '',
			isFeatured: false,
			colorScheme: 'default',
			btnText: __('Choose Plan', 'bpricing'),
			btnLink: '#',
			features: [
				{ text: 'Feature 1', enabled: true },
				{ text: 'Feature 2', enabled: true },
				{ text: 'Feature 3', enabled: true }
			]
		};
		setAttributes({ tables: [...tables, newPlan] });
		setActivePlan(tables.length);
	};

	// Remove current plan
	const removePlan = idx => {
		if (tables.length <= 1) return;
		const nextTables = tables.filter((_, i) => i !== idx);
		setAttributes({ tables: nextTables });
		setActivePlan(Math.max(0, idx - 1));
	};

	// Feature operations
	const updateFeature = (fIndex, key, value) => {
		const current = tables[activePlan] || {};
		const features = [...(current.features || [])];
		features[fIndex] = { ...features[fIndex], [key]: value };
		updateCurrentPlan('features', features);
	};

	const addFeature = () => {
		const current = tables[activePlan] || {};
		const features = [...(current.features || []), { text: __('New Feature', 'bpricing'), enabled: true }];
		updateCurrentPlan('features', features);
	};

	const removeFeature = fIndex => {
		const current = tables[activePlan] || {};
		const features = (current.features || []).filter((_, i) => i !== fIndex);
		updateCurrentPlan('features', features);
	};

	const currentPlan = tables[activePlan] || tables[0] || {};
	const currentSchemes = COLOR_SCHEMES[theme] || COLOR_SCHEMES['demo-1'];

	return (
		<InspectorControls>
			<div className="bppt-inspector-controls" style={{ padding: '4px' }}>
				<TabPanel className="bppt-settings-tab-panel" tabs={tabs}>
					{tab => {
						if (tab.name === 'general') {
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
										<div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
											{tables.map((t, i) => (
												<Button
													key={i}
													isSmall
													variant={activePlan === i ? 'primary' : 'secondary'}
													onClick={() => setActivePlan(i)}
												>
													{t.name || sprintf(__('Column %d', 'bpricing'), i + 1)}
												</Button>
											))}
											<Button isSmall variant="tertiary" onClick={addPlan}>
												{__('+ Add Column', 'bpricing')}
											</Button>
										</div>

										<div style={{ padding: '12px', background: '#f6f7f7', borderRadius: '4px', marginBottom: '14px' }}>
											<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
												<strong>{sprintf(__('Editing: %s', 'bpricing'), currentPlan.name || '')}</strong>
												{tables.length > 1 && (
													<Button isDestructive isSmall variant="link" onClick={() => removePlan(activePlan)}>
														{__('Delete Column', 'bpricing')}
													</Button>
												)}
											</div>

											<TextControl
												label={__('Plan Name', 'bpricing')}
												value={currentPlan.name || ''}
												onChange={val => updateCurrentPlan('name', val)}
											/>

											<div style={{ display: 'flex', gap: '8px' }}>
												<div style={{ flex: 1 }}>
													<TextControl
														label={__('Currency', 'bpricing')}
														value={currentPlan.currency || '$'}
														onChange={val => updateCurrentPlan('currency', val)}
													/>
												</div>
												<div style={{ flex: 2 }}>
													<TextControl
														label={__('Price', 'bpricing')}
														value={currentPlan.price || ''}
														onChange={val => updateCurrentPlan('price', val)}
													/>
												</div>
											</div>

											<TextControl
												label={__('Billing Period / Unit', 'bpricing')}
												value={currentPlan.unit || ''}
												onChange={val => updateCurrentPlan('unit', val)}
												help={__('e.g. month, year', 'bpricing')}
											/>

											<SelectControl
												label={__('Color Scheme', 'bpricing')}
												value={currentPlan.colorScheme || 'default'}
												options={currentSchemes}
												onChange={val => updateCurrentPlan('colorScheme', val)}
											/>

											<ToggleControl
												label={__('Featured / Hot Plan', 'bpricing')}
												checked={Boolean(currentPlan.isFeatured)}
												onChange={val => updateCurrentPlan('isFeatured', val)}
											/>

											{currentPlan.isFeatured && (
												<TextControl
													label={__('Badge Text', 'bpricing')}
													value={currentPlan.badge || ''}
													onChange={val => updateCurrentPlan('badge', val)}
													help={__('e.g. "Hot", "Popular", "Best Value"', 'bpricing')}
												/>
											)}

											<TextControl
												label={__('Button Text', 'bpricing')}
												value={currentPlan.btnText || ''}
												onChange={val => updateCurrentPlan('btnText', val)}
											/>

											<TextControl
												label={__('Button URL', 'bpricing')}
												value={currentPlan.btnLink || ''}
												onChange={val => updateCurrentPlan('btnLink', val)}
											/>
										</div>

										<div style={{ marginTop: '16px' }}>
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
									</PanelBody>
								</>
							);
						}

						if (tab.name === 'style') {
							return (
								<PanelBody title={__('Theme & Layout Style', 'bpricing')} initialOpen={true}>
									<p style={{ fontSize: '13px', color: '#646970', lineHeight: '1.5' }}>
										{__('Each theme has its own responsive styling (CSS). You can adjust individual plan colors using the "Color Scheme" setting under the General tab.', 'bpricing')}
									</p>
									<div style={{ marginTop: '14px', padding: '10px', background: '#f0f6fc', borderRadius: '4px', fontSize: '12px' }}>
										<strong>{__('Active Theme:', 'bpricing')}</strong>{' '}
										{THEME_OPTIONS.find(o => o.value === theme)?.label}
									</div>
								</PanelBody>
							);
						}

						return null;
					}}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Settings;
