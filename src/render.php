<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$table_id = ! empty( $attributes['tableId'] ) ? absint( $attributes['tableId'] ) : 0;

if ( ! $table_id && ! empty( $attributes['id'] ) ) {
	$table_id = absint( $attributes['id'] );
}

if ( ! $table_id ) {
	if ( is_admin() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
		?>
		<div class="bppt-pricing-table-placeholder" style="padding: 30px; border: 2px dashed #c3c4c7; text-align: center; border-radius: 6px; background: #f6f7f7;">
			<p style="margin: 0; font-size: 15px; color: #50575e; font-weight: 500;">
				<?php esc_html_e( 'Please select a Pricing Table from the block settings.', 'bpricing' ); ?>
			</p>
		</div>
		<?php
	}
	return;
}

$content = BPPTPricingTable::bppt_bprincing_table( [ 'id' => $table_id ] );

$wrapper_attributes = get_block_wrapper_attributes( [
	'class' => 'bppt-pricing-table-block',
] );
?>
<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>
