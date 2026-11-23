import { useBlockProps } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import ServerSideRender from '@wordpress/server-side-render';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import Theme from './Theme';
import ClipBoard from './ClipBoard';

const Edit = props => {
	const { attributes, setAttributes, clientId, CPTType, currentPostId } = props;
	const { tableId, theme = 'demo-1' } = attributes;
	const blockProps = useBlockProps({
		className: `bppt-pricing-table-editor-wrapper bppt-theme-${theme} bppt-${clientId}`
	});

	const isEditingCPT = CPTType === 'bppt-pricing-table';
	const shortcode = currentPostId ? `[bp-table id=${currentPostId}]` : '';

	return (
		<div {...blockProps}>
			<Style attributes={attributes} clientId={clientId} />
			<Settings attributes={attributes} setAttributes={setAttributes} />

			{isEditingCPT && shortcode && <ClipBoard shortcode={shortcode} />}

			{tableId ? (
				<ServerSideRender
					block="bppt/pricing-table"
					attributes={attributes}
				/>
			) : (
				<Theme attributes={attributes} />
			)}
		</div>
	);
};

export default withSelect(select => {
	const editor = select('core/editor');
	return {
		CPTType: editor?.getCurrentPostType?.(),
		currentPostId: editor?.getCurrentPostId?.()
	};
})(Edit);
