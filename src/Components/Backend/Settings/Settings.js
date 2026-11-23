import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

import General from './General';
import Style from './Style';

const Settings = ({ attributes, setAttributes }) => {
	const tabs = [
		{ name: 'general', title: __('General', 'bpricing'), className: 'bppt-tab-general' },
		{ name: 'style', title: __('Style', 'bpricing'), className: 'bppt-tab-style' }
	];

	return (
		<InspectorControls>
			<div className="bppt-inspector-controls" style={{ padding: '4px' }}>
				<TabPanel className="bppt-settings-tab-panel" tabs={tabs}>
					{tab => {
						if (tab.name === 'general') {
							return <General attributes={attributes} setAttributes={setAttributes} />;
						}

						if (tab.name === 'style') {
							return <Style attributes={attributes} setAttributes={setAttributes} />;
						}

						return null;
					}}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Settings;
