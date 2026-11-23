<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// 1. If an existing table ID is selected (backward compatibility)
$table_id = ! empty( $attributes['tableId'] ) ? absint( $attributes['tableId'] ) : 0;
if ( ! $table_id && ! empty( $attributes['id'] ) ) {
	$table_id = absint( $attributes['id'] );
}

if ( $table_id ) {
	echo BPPTPricingTable::bppt_bprincing_table( [ 'id' => $table_id ] );
	return;
}

// 2. Render from block.json attributes
$theme   = ! empty( $attributes['theme'] ) ? $attributes['theme'] : 'demo-1';
$tables  = ! empty( $attributes['tables'] ) && is_array( $attributes['tables'] ) ? $attributes['tables'] : [];
$columns = ! empty( $attributes['columns'] ) && is_array( $attributes['columns'] ) ? $attributes['columns'] : [
	'desktop' => ! empty( $attributes['columns'] ) && is_numeric( $attributes['columns'] ) ? (int) $attributes['columns'] : 3,
	'tablet'  => 2,
	'mobile'  => 1,
];
$col_gaps = ! empty( $attributes['columnGap'] ) && is_array( $attributes['columnGap'] ) ? $attributes['columnGap'] : [
	'desktop' => ! empty( $attributes['columnGap'] ) && is_string( $attributes['columnGap'] ) ? $attributes['columnGap'] : '20px',
	'tablet'  => '15px',
	'mobile'  => '10px',
];
$row_gaps = ! empty( $attributes['rowGap'] ) && is_array( $attributes['rowGap'] ) ? $attributes['rowGap'] : [
	'desktop' => ! empty( $attributes['rowGap'] ) && is_string( $attributes['rowGap'] ) ? $attributes['rowGap'] : '30px',
	'tablet'  => '20px',
	'mobile'  => '15px',
];
$unique_id = 'bppt-block-' . wp_unique_id();
$cols_class = sprintf( 'columns-%d columns-tablet-%d columns-mobile-%d', $columns['desktop'] ?? 3, $columns['tablet'] ?? 2, $columns['mobile'] ?? 1 );

if ( empty( $tables ) ) {
	return;
}

$wrapper_attributes = get_block_wrapper_attributes( [
	'class' => 'bppt-pricing-table-block bppt-theme-' . esc_attr( $theme ) . ' ' . $unique_id,
] );

ob_start();
?>
<div <?php echo $wrapper_attributes; ?>>
	<style>
		.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_container,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_table3,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient {
			display: grid !important;
			grid-template-columns: repeat(<?php echo max( 1, (int)( $columns['desktop'] ?? 3 ) ); ?>, minmax(0, 1fr)) !important;
			gap: <?php echo esc_attr( $row_gaps['desktop'] ?? '30px' ); ?> <?php echo esc_attr( $col_gaps['desktop'] ?? '20px' ); ?> !important;
			justify-content: stretch !important;
		}
		.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-inner,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingContent,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable {
			width: 100% !important;
			max-width: 100% !important;
			min-width: 0 !important;
			margin-left: 0 !important;
			margin-right: 0 !important;
		}
		@media only screen and (max-width: 1024px) {
			.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing,
			.<?php echo esc_attr( $unique_id ); ?> .bppt_container,
			.<?php echo esc_attr( $unique_id ); ?> .bppt_table3,
			.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore,
			.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient {
				grid-template-columns: repeat(<?php echo max( 1, (int)( $columns['tablet'] ?? 2 ) ); ?>, minmax(0, 1fr)) !important;
				gap: <?php echo esc_attr( $row_gaps['tablet'] ?? '20px' ); ?> <?php echo esc_attr( $col_gaps['tablet'] ?? '15px' ); ?> !important;
			}
		}
		@media only screen and (max-width: 640px) {
			.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing,
			.<?php echo esc_attr( $unique_id ); ?> .bppt_container,
			.<?php echo esc_attr( $unique_id ); ?> .bppt_table3,
			.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore,
			.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient {
				grid-template-columns: repeat(<?php echo max( 1, (int)( $columns['mobile'] ?? 1 ) ); ?>, minmax(0, 1fr)) !important;
				gap: <?php echo esc_attr( $row_gaps['mobile'] ?? '15px' ); ?> <?php echo esc_attr( $col_gaps['mobile'] ?? '10px' ); ?> !important;
			}
		}
	</style>
	<?php
	switch ( $theme ) {
		case 'demo-1':
			wp_enqueue_style( 'bppt_pt_style_1' );
			wp_enqueue_style( 'google_font' );
			?>
			<div class="bppt_pricing">
				<?php foreach ( $tables as $tbl ) :
					$scheme = ! empty( $tbl['colorScheme'] ) && 'default' !== $tbl['colorScheme'] ? $tbl['colorScheme'] : '';
				?>
					<div class="plan <?php echo esc_attr( $scheme ); ?>">
						<div class="plan-inner">
							<?php if ( ! empty( $tbl['isFeatured'] ) && ! empty( $tbl['badge'] ) ) : ?>
								<div class="hot"><?php echo esc_html( $tbl['badge'] ); ?></div>
							<?php endif; ?>
							<div class="plan-entry-title">
								<h3><?php echo esc_html( $tbl['name'] ?? '' ); ?></h3>
								<div class="price">
									<?php echo esc_html( $tbl['currency'] ?? '$' ); ?><?php echo esc_html( $tbl['price'] ?? '0' ); ?><span>/<?php echo esc_html( $tbl['unit'] ?? 'month' ); ?></span>
								</div>
							</div>
							<?php if ( ! empty( $tbl['features'] ) ) : ?>
								<div class="plan-entry-content">
									<ul>
										<?php foreach ( $tbl['features'] as $feat ) : ?>
											<li><?php echo esc_html( $feat['text'] ?? '' ); ?></li>
										<?php endforeach; ?>
									</ul>
								</div>
							<?php endif; ?>
							<div class="bttn">
								<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<?php
			break;

		case 'demo-2':
			wp_enqueue_style( 'bppt_pt_style_2' );
			?>
			<div class="bppt_container">
				<?php foreach ( $tables as $tbl ) :
					$scheme = ! empty( $tbl['colorScheme'] ) && 'default' !== $tbl['colorScheme'] ? $tbl['colorScheme'] : '';
				?>
					<div class="pricingTableTwo <?php echo esc_attr( $scheme ); ?>">
						<div>
							<div class="pricingTable-header">
								<h3 class="title"><?php echo esc_html( $tbl['name'] ?? '' ); ?></h3>
							</div>
							<div class="price-value">
								<?php echo esc_html( $tbl['currency'] ?? '$' ); ?><?php echo esc_html( $tbl['price'] ?? '0' ); ?><span>/<?php echo esc_html( $tbl['unit'] ?? 'month' ); ?></span>
							</div>
							<?php if ( ! empty( $tbl['features'] ) ) : ?>
								<div class="pricing-content">
									<ul>
										<?php foreach ( $tbl['features'] as $feat ) : ?>
											<li><?php echo esc_html( $feat['text'] ?? '' ); ?></li>
										<?php endforeach; ?>
									</ul>
								</div>
							<?php endif; ?>
							<div class="pricingTable-signup">
								<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<?php
			break;

		case 'demo-3':
			wp_enqueue_style( 'bppt_pt_style_3' );
			?>
			<div class="bppt_table3">
				<?php foreach ( $tables as $tbl ) :
					$scheme = ! empty( $tbl['colorScheme'] ) && 'default' !== $tbl['colorScheme'] ? $tbl['colorScheme'] : '';
				?>
					<div class="pricingTable <?php echo esc_attr( $scheme ); ?>">
						<div class="pricingTable-header">
							<h3 class="title"><?php echo esc_html( $tbl['name'] ?? '' ); ?></h3>
						</div>
						<div class="price-value">
							<span class="amount"><?php echo esc_html( $tbl['currency'] ?? '$' ); ?><?php echo esc_html( $tbl['price'] ?? '0' ); ?></span>
							<span class="duration">/<?php echo esc_html( $tbl['unit'] ?? 'month' ); ?></span>
						</div>
						<?php if ( ! empty( $tbl['features'] ) ) : ?>
							<div class="pricing-content">
								<ul>
									<?php foreach ( $tbl['features'] as $feat ) : ?>
										<li><?php echo esc_html( $feat['text'] ?? '' ); ?></li>
									<?php endforeach; ?>
								</ul>
							</div>
						<?php endif; ?>
						<div class="pricingTable-signup-three">
							<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<?php
			break;

		case 'demo-4':
			wp_enqueue_style( 'bppt_pt_style_4' );
			$col_count  = count( $tables );
			$cols_class = 'columns-' . min( 6, max( 1, $col_count ) ) . ' columns-tablet-2 columns-mobile-1';
			?>
			<div class="priceTableBGBefore <?php echo esc_attr( $cols_class ); ?>">
				<?php foreach ( $tables as $tbl ) :
					$scheme = ! empty( $tbl['colorScheme'] ) && 'default' !== $tbl['colorScheme'] ? $tbl['colorScheme'] : '';
				?>
					<div class="pricingTableFour <?php echo esc_attr( $scheme ); ?>">
						<div class="pricingContent">
							<div>
								<div class="pricingHeader">
									<h3 class="title"><?php echo esc_html( $tbl['name'] ?? '' ); ?></h3>
								</div>
								<?php if ( ! empty( $tbl['features'] ) ) : ?>
									<ul class="pricingFeatures">
										<?php foreach ( $tbl['features'] as $feat ) :
											$is_dis = isset( $feat['enabled'] ) && false === $feat['enabled'];
										?>
											<li class="<?php echo $is_dis ? 'disable' : ''; ?>"><?php echo esc_html( $feat['text'] ?? '' ); ?></li>
										<?php endforeach; ?>
									</ul>
								<?php endif; ?>
							</div>
							<div>
								<div class="pricingValue">
									<span class="amount"><?php echo esc_html( $tbl['currency'] ?? '$' ); ?><?php echo esc_html( $tbl['price'] ?? '0' ); ?></span>
									<span class="duration"><?php echo esc_html( $tbl['unit'] ?? 'month' ); ?></span>
								</div>
								<div class="pricingSignUp">
									<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
								</div>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<?php
			break;

		case 'demo-5':
		default:
			wp_enqueue_style( 'bppt_pt_style_5' );
			$col_count  = count( $tables );
			$cols_class = 'columns-' . min( 6, max( 1, $col_count ) ) . ' columns-tablet-2 columns-mobile-1';
			?>
			<div class="priceTableGradient <?php echo esc_attr( $cols_class ); ?>">
				<?php foreach ( $tables as $tbl ) :
					$scheme = ! empty( $tbl['colorScheme'] ) && 'default' !== $tbl['colorScheme'] ? $tbl['colorScheme'] : '';
				?>
					<div class="pricingTable <?php echo esc_attr( $scheme ); ?>">
						<div>
							<div class="pricingHeader">
								<h3 class="title"><?php echo esc_html( $tbl['name'] ?? '' ); ?></h3>
							</div>
							<div class="pricingValue">
								<span class="amount"><?php echo esc_html( $tbl['currency'] ?? '$' ); ?><?php echo esc_html( $tbl['price'] ?? '0' ); ?></span>
								<span class="duration">/<?php echo esc_html( $tbl['unit'] ?? 'month' ); ?></span>
							</div>
							<?php if ( ! empty( $tbl['features'] ) ) : ?>
								<ul class="pricingFeatures">
									<?php foreach ( $tbl['features'] as $feat ) :
										$is_dis = isset( $feat['enabled'] ) && false === $feat['enabled'];
									?>
										<li class="<?php echo $is_dis ? 'disable' : ''; ?>"><?php echo esc_html( $feat['text'] ?? '' ); ?></li>
									<?php endforeach; ?>
								</ul>
							<?php endif; ?>
						</div>
						<div class="pricingSignUp">
							<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<?php
			break;
	}
	?>
</div>
<?php
echo ob_get_clean();
