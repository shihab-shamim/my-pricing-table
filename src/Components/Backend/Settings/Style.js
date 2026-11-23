import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';
import {
	Background,
	BoxControl,
	ColorControl,
	ColorsControl,
	Typography,
	ShadowControl
} from '../../../../../bpl-tools/Components';
import { pxUnit } from '../../../../../bpl-tools/utils/options';
import { THEME_OPTIONS } from './General';
import { DEFAULT_THEME_STYLES, getMergedThemeStyle } from '../../../utils/themeStyles';

const Style = ({ attributes, setAttributes }) => {
	const { theme = 'demo-1', styles = {} } = attributes;

	const currentThemeName = THEME_OPTIONS.find(o => o.value === theme)?.label || theme;
	const currentStyle = getMergedThemeStyle(theme, styles);
	const currentDefault = DEFAULT_THEME_STYLES[theme] || DEFAULT_THEME_STYLES['demo-1'];

	const updateStyle = (key, value) => {
		const themeStyles = styles?.[theme] || {};
		const nextStyles = {
			...styles,
			[theme]: {
				...themeStyles,
				[key]: value
			}
		};
		setAttributes({ styles: nextStyles });
	};

	const updateStyles = updates => {
		const themeStyles = styles?.[theme] || {};
		const nextStyles = {
			...styles,
			[theme]: {
				...themeStyles,
				...updates
			}
		};
		setAttributes({ styles: nextStyles });
	};

	return (
		<>
			<div style={{ margin: '10px 16px', padding: '10px', background: '#f0f6fc', border: '1px solid #c8d7e1', borderRadius: '4px', fontSize: '12px' }}>
				<strong>{__('Current Theme Styling:', 'bpricing')}</strong>{' '}
				<span style={{ color: '#007cba' }}>{currentThemeName}</span>
			</div>

			{/* Card / Table Container */}
			<PanelBody className="bPlPanelBody" title={__('Card / Container', 'bpricing')} initialOpen={true}>
				<Background
					label={__('Card Background:', 'bpricing')}
					value={currentStyle.cardBg}
					onChange={val => updateStyle('cardBg', val)}
					defaults={currentDefault.cardBg}
				/>

				<div style={{ marginTop: '16px' }}>
					<BoxControl
						label={__('Card Padding:', 'bpricing')}
						values={currentStyle.cardPadding}
						onChange={val => updateStyle('cardPadding', val)}
						resetValues={currentDefault.cardPadding}
					/>
				</div>

				<div style={{ marginTop: '16px' }}>
					<BoxControl
						label={__('Card Margin:', 'bpricing')}
						values={currentStyle.cardMargin}
						onChange={val => updateStyle('cardMargin', val)}
						resetValues={currentDefault.cardMargin}
					/>
				</div>

				<div style={{ marginTop: '16px' }}>
					<SelectControl
						label={__('Border Style:', 'bpricing')}
						value={currentStyle.cardBorderStyle || 'none'}
						options={[
							{ label: __('None', 'bpricing'), value: 'none' },
							{ label: __('Solid', 'bpricing'), value: 'solid' },
							{ label: __('Dashed', 'bpricing'), value: 'dashed' },
							{ label: __('Dotted', 'bpricing'), value: 'dotted' },
							{ label: __('Double', 'bpricing'), value: 'double' }
						]}
						onChange={val => updateStyle('cardBorderStyle', val)}
					/>
				</div>

				{currentStyle.cardBorderStyle && currentStyle.cardBorderStyle !== 'none' && (
					<>
						<PanelRow style={{ marginTop: '12px' }}>
							<UnitControl
								label={__('Border Width:', 'bpricing')}
								labelPosition="left"
								value={currentStyle.cardBorderWidth || '1px'}
								onChange={val => updateStyle('cardBorderWidth', val)}
								units={[pxUnit()]}
							/>
						</PanelRow>
						<div style={{ marginTop: '12px' }}>
							<ColorControl
								label={__('Border Color:', 'bpricing')}
								value={currentStyle.cardBorderColor || '#e0e0e0'}
								onChange={val => updateStyle('cardBorderColor', val)}
								defaultColor={currentDefault.cardBorderColor || '#e0e0e0'}
							/>
						</div>
					</>
				)}

				<PanelRow style={{ marginTop: '16px' }}>
					<UnitControl
						label={__('Border Radius:', 'bpricing')}
						labelPosition="left"
						value={currentStyle.cardRadius}
						onChange={val => updateStyle('cardRadius', val)}
					/>
				</PanelRow>

				<div style={{ marginTop: '16px' }}>
					<ShadowControl
						label={__('Card Shadow:', 'bpricing')}
						value={currentStyle.cardShadow}
						onChange={val => updateStyle('cardShadow', val)}
						defaults={currentDefault.cardShadow}
					/>
				</div>
			</PanelBody>

			{/* Header & Title */}
			<PanelBody className="bPlPanelBody" title={__('Header & Title', 'bpricing')} initialOpen={false}>
				<ColorControl
					label={__('Title Color:', 'bpricing')}
					value={currentStyle.titleColor}
					onChange={val => updateStyle('titleColor', val)}
					defaultColor={currentDefault.titleColor}
				/>

				<div style={{ marginTop: '14px' }}>
					<SelectControl
						label={__('Title Alignment:', 'bpricing')}
						value={currentStyle.titleAlign || 'default'}
						options={[
							{ label: __('Default', 'bpricing'), value: 'default' },
							{ label: __('Left', 'bpricing'), value: 'left' },
							{ label: __('Center', 'bpricing'), value: 'center' },
							{ label: __('Right', 'bpricing'), value: 'right' }
						]}
						onChange={val => updateStyle('titleAlign', val)}
					/>
				</div>

				<div style={{ marginTop: '14px' }}>
					<Typography
						label={__('Title Typography:', 'bpricing')}
						value={currentStyle.titleTypo}
						onChange={val => updateStyle('titleTypo', val)}
						defaults={currentDefault.titleTypo}
					/>
				</div>
			</PanelBody>

			{/* Price & Billing Period */}
			<PanelBody className="bPlPanelBody" title={__('Price & Period', 'bpricing')} initialOpen={false}>
				<ColorControl
					label={__('Price Color:', 'bpricing')}
					value={currentStyle.priceColor}
					onChange={val => updateStyle('priceColor', val)}
					defaultColor={currentDefault.priceColor}
				/>

				{(theme === 'demo-1' || theme === 'demo-3') && (
					<div style={{ marginTop: '14px' }}>
						<ColorControl
							label={__('Price Badge / Bar Background:', 'bpricing')}
							value={currentStyle.priceBg}
							onChange={val => updateStyle('priceBg', val)}
							defaultColor={currentDefault.priceBg}
						/>
					</div>
				)}

				<div style={{ marginTop: '14px' }}>
					<Typography
						label={__('Price Typography:', 'bpricing')}
						value={currentStyle.priceTypo}
						onChange={val => updateStyle('priceTypo', val)}
						defaults={currentDefault.priceTypo}
					/>
				</div>

				<div style={{ marginTop: '14px' }}>
					<ColorControl
						label={__('Period / Unit Color:', 'bpricing')}
						value={currentStyle.unitColor}
						onChange={val => updateStyle('unitColor', val)}
						defaultColor={currentDefault.unitColor}
					/>
				</div>

				<div style={{ marginTop: '14px' }}>
					<Typography
						label={__('Period / Unit Typography:', 'bpricing')}
						value={currentStyle.unitTypo}
						onChange={val => updateStyle('unitTypo', val)}
						defaults={currentDefault.unitTypo}
					/>
				</div>
			</PanelBody>

			{/* Features List */}
			<PanelBody className="bPlPanelBody" title={__('Features List', 'bpricing')} initialOpen={false}>
				<ColorControl
					label={__('Feature Text Color:', 'bpricing')}
					value={currentStyle.featureColor}
					onChange={val => updateStyle('featureColor', val)}
					defaultColor={currentDefault.featureColor}
				/>

				<div style={{ marginTop: '14px' }}>
					<ColorControl
						label={__('Disabled Feature Color:', 'bpricing')}
						value={currentStyle.featureDisabledColor}
						onChange={val => updateStyle('featureDisabledColor', val)}
						defaultColor={currentDefault.featureDisabledColor || '#aaaaaa'}
					/>
				</div>

				<div style={{ marginTop: '14px' }}>
					<Typography
						label={__('Feature Typography:', 'bpricing')}
						value={currentStyle.featureTypo}
						onChange={val => updateStyle('featureTypo', val)}
						defaults={currentDefault.featureTypo}
					/>
				</div>
			</PanelBody>

			{/* Featured Badge */}
			<PanelBody className="bPlPanelBody" title={__('Featured Badge', 'bpricing')} initialOpen={false}>
				<ColorsControl
					label={__('Badge Colors:', 'bpricing')}
					value={currentStyle.badgeColors}
					onChange={val => {
						const bgVal = val?.bgType === 'gradient' && val?.gradient ? val.gradient : val?.bg;
						updateStyles({
							badgeColors: val,
							badgeColor: val?.color || '',
							badgeBg: bgVal || ''
						});
					}}
					defaults={currentDefault.badgeColors}
				/>

				<div style={{ marginTop: '14px' }}>
					<ColorsControl
						label={__('Hover Colors:', 'bpricing')}
						value={currentStyle.badgeHoverColors}
						onChange={val => {
							const bgVal = val?.bgType === 'gradient' && val?.gradient ? val.gradient : val?.bg;
							updateStyles({
								badgeHoverColors: val,
								badgeHoverColor: val?.color || '',
								badgeHoverBg: bgVal || ''
							});
						}}
						defaults={currentDefault.badgeHoverColors}
					/>
				</div>

				<PanelRow style={{ marginTop: '16px' }}>
					<UnitControl
						label={__('Badge Border Radius:', 'bpricing')}
						labelPosition="left"
						value={currentStyle.badgeRadius || '3px'}
						onChange={val => updateStyle('badgeRadius', val)}
						units={[pxUnit()]}
					/>
				</PanelRow>
			</PanelBody>

			{/* Button */}
			<PanelBody className="bPlPanelBody" title={__('Button', 'bpricing')} initialOpen={false}>
				<ColorsControl
					label={__('Button Colors:', 'bpricing')}
					value={currentStyle.btnColors}
					onChange={val => updateStyle('btnColors', val)}
					defaults={currentDefault.btnColors}
				/>

				<div style={{ marginTop: '14px' }}>
					<ColorsControl
						label={__('Hover Colors:', 'bpricing')}
						value={currentStyle.btnHoverColors}
						onChange={val => updateStyle('btnHoverColors', val)}
						defaults={currentDefault.btnHoverColors}
					/>
				</div>

				<div style={{ marginTop: '14px' }}>
					<Typography
						label={__('Button Typography:', 'bpricing')}
						value={currentStyle.btnTypo}
						onChange={val => updateStyle('btnTypo', val)}
						defaults={currentDefault.btnTypo}
					/>
				</div>

				<div style={{ marginTop: '16px' }}>
					<BoxControl
						label={__('Button Padding:', 'bpricing')}
						values={currentStyle.btnPadding}
						onChange={val => updateStyle('btnPadding', val)}
						resetValues={currentDefault.btnPadding}
					/>
				</div>

				<div style={{ marginTop: '16px' }}>
					<SelectControl
						label={__('Button Border Style:', 'bpricing')}
						value={currentStyle.btnBorderStyle || 'none'}
						options={[
							{ label: __('None', 'bpricing'), value: 'none' },
							{ label: __('Solid', 'bpricing'), value: 'solid' },
							{ label: __('Dashed', 'bpricing'), value: 'dashed' },
							{ label: __('Dotted', 'bpricing'), value: 'dotted' },
							{ label: __('Double', 'bpricing'), value: 'double' }
						]}
						onChange={val => updateStyle('btnBorderStyle', val)}
					/>
				</div>

				{currentStyle.btnBorderStyle && currentStyle.btnBorderStyle !== 'none' && (
					<>
						<PanelRow style={{ marginTop: '12px' }}>
							<UnitControl
								label={__('Button Border Width:', 'bpricing')}
								labelPosition="left"
								value={currentStyle.btnBorderWidth || '1px'}
								onChange={val => updateStyle('btnBorderWidth', val)}
								units={[pxUnit()]}
							/>
						</PanelRow>
						<div style={{ marginTop: '12px' }}>
							<ColorControl
								label={__('Button Border Color:', 'bpricing')}
								value={currentStyle.btnBorderColor || '#323232'}
								onChange={val => updateStyle('btnBorderColor', val)}
								defaultColor={currentDefault.btnBorderColor || '#323232'}
							/>
						</div>
					</>
				)}

				<PanelRow style={{ marginTop: '16px' }}>
					<UnitControl
						label={__('Button Border Radius:', 'bpricing')}
						labelPosition="left"
						value={currentStyle.btnRadius}
						onChange={val => updateStyle('btnRadius', val)}
					/>
				</PanelRow>

				<div style={{ marginTop: '16px' }}>
					<ShadowControl
						label={__('Button Shadow:', 'bpricing')}
						value={currentStyle.btnShadow}
						onChange={val => updateStyle('btnShadow', val)}
						defaults={currentDefault.btnShadow || []}
					/>
				</div>
			</PanelBody>
		</>
	);
};

export default Style;
