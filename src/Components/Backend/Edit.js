import { useBlockProps } from '@wordpress/block-editor';
import { withSelect, useSelect } from '@wordpress/data';
import { Placeholder, SelectControl, Button, Spinner } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import ClipBoard from './ClipBoard';
import { pricingTableIcon } from '../../utils/icons';

const Edit = props => {
	const { attributes, setAttributes, clientId, CPTType, currentPostId } = props;
	const { tableId } = attributes;
	const blockProps = useBlockProps({ className: 'bppt-pricing-table-editor-wrapper' });

	// Fetch existing tables from WordPress data store
	const { posts, isLoading } = useSelect(select => {
		const core = select('core');
		return {
			posts: core ? core.getEntityRecords('postType', 'bppt-pricing-table', { per_page: -1, status: 'publish' }) : null,
			isLoading: core ? core.isResolving('getEntityRecords', ['postType', 'bppt-pricing-table', { per_page: -1, status: 'publish' }]) : false
		};
	}, []);

	// Fallback to inline-localized window.bpptTables if available
	const tables = (posts && posts.length > 0)
		? posts.map(p => ({ id: p.id, title: p.title?.rendered || sprintf(__('Table #%d', 'bpricing'), p.id) }))
		: (window.bpptTables || []);

	const isEditingCPT = CPTType === 'bppt-pricing-table';
	const shortcode = currentPostId ? `[bp-table id=${currentPostId}]` : '';

	const tableOptions = [
		{ label: __('— Select a Pricing Table —', 'bpricing'), value: '' },
		...tables.map(t => ({
			label: t.title || sprintf(__('Table #%d', 'bpricing'), t.id),
			value: String(t.id)
		}))
	];

	const selectedTable = tables.find(t => String(t.id) === String(tableId));

	return (
		<div {...blockProps}>
			<Style attributes={attributes} clientId={clientId} />
			<Settings attributes={attributes} setAttributes={setAttributes} tables={tables} />

			{isEditingCPT && shortcode && <ClipBoard shortcode={shortcode} />}

			{tableId ? (
				<div className="bppt-table-preview-container">
					<div
						className="bppt-table-preview-badge"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '8px 14px',
							marginBottom: '14px',
							background: '#f0f6fc',
							border: '1px solid #c8d7e1',
							borderRadius: '4px',
							fontSize: '13px'
						}}
					>
						<span>
							<strong>{__('Pricing Table:', 'bpricing')}</strong>{' '}
							{selectedTable ? selectedTable.title : sprintf(__('Table #%s', 'bpricing'), tableId)}
						</span>
						<Button
							variant="secondary"
							isSmall
							onClick={() => setAttributes({ tableId: '' })}
						>
							{__('Change Table', 'bpricing')}
						</Button>
					</div>

					<ServerSideRender
						block="bppt/pricing-table"
						attributes={attributes}
					/>
				</div>
			) : (
				<Placeholder
					icon={pricingTableIcon}
					label={__('My Pricing Table', 'bpricing')}
					instructions={__('Select an existing pricing table to display, or create a new one.', 'bpricing')}
					className="bppt-placeholder"
				>
					{isLoading && !tables.length ? (
						<Spinner />
					) : tables.length > 0 ? (
						<div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', maxWidth: '400px' }}>
							<SelectControl
								value={tableId || ''}
								options={tableOptions}
								onChange={val => setAttributes({ tableId: val })}
								style={{ flex: 1 }}
							/>
						</div>
					) : (
						<div style={{ textAlign: 'center' }}>
							<p style={{ margin: '0 0 12px 0', color: '#646970' }}>
								{__('No pricing tables found.', 'bpricing')}
							</p>
							<Button
								variant="primary"
								href="post-new.php?post_type=bppt-pricing-table"
								target="_blank"
								rel="noopener noreferrer"
							>
								{__('Create Your First Pricing Table', 'bpricing')}
							</Button>
						</div>
					)}
				</Placeholder>
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
