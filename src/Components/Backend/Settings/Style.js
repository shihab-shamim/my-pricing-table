import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { THEME_OPTIONS } from './General';

const Style = ({ attributes }) => {
	const { theme = 'demo-1' } = attributes;

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
};

export default Style;
