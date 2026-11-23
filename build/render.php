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
$styles_attr = ! empty( $attributes['styles'] ) && is_array( $attributes['styles'] ) ? $attributes['styles'] : [];
$theme_style = ! empty( $styles_attr[ $theme ] ) && is_array( $styles_attr[ $theme ] ) ? $styles_attr[ $theme ] : [];

if ( ! function_exists( 'bppt_get_box_css' ) ) {
	function bppt_get_box_css( $box ) {
		if ( empty( $box ) || ! is_array( $box ) ) {
			return '';
		}
		$top    = ! empty( $box['top'] ) ? $box['top'] : '0';
		$right  = ! empty( $box['right'] ) ? $box['right'] : '0';
		$bottom = ! empty( $box['bottom'] ) ? $box['bottom'] : '0';
		$left   = ! empty( $box['left'] ) ? $box['left'] : '0';
		return "{$top} {$right} {$bottom} {$left}";
	}
}

if ( ! function_exists( 'bppt_get_bg_css' ) ) {
	function bppt_get_bg_css( $bg ) {
		if ( empty( $bg ) ) {
			return '';
		}
		if ( is_string( $bg ) ) {
			return "background: {$bg} !important;";
		}
		if ( is_array( $bg ) ) {
			if ( ! empty( $bg['type'] ) && 'gradient' === $bg['type'] && ! empty( $bg['gradient'] ) ) {
				return 'background: ' . esc_attr( $bg['gradient'] ) . ' !important;';
			}
			if ( ! empty( $bg['color'] ) ) {
				return 'background: ' . esc_attr( $bg['color'] ) . ' !important;';
			}
		}
		return '';
	}
}

if ( ! function_exists( 'bppt_get_typo_css' ) ) {
	function bppt_get_typo_css( $typo, $device = 'desktop' ) {
		if ( empty( $typo ) || ! is_array( $typo ) ) {
			return '';
		}
		$css = '';
		if ( ! empty( $typo['fontFamily'] ) && 'Default' !== $typo['fontFamily'] ) {
			$css .= 'font-family: "' . esc_attr( $typo['fontFamily'] ) . '", sans-serif !important; ';
		}
		if ( ! empty( $typo['fontWeight'] ) ) {
			$css .= 'font-weight: ' . esc_attr( $typo['fontWeight'] ) . ' !important; ';
		}
		if ( ! empty( $typo['fontStyle'] ) ) {
			$css .= 'font-style: ' . esc_attr( $typo['fontStyle'] ) . ' !important; ';
		}
		if ( ! empty( $typo['textTransform'] ) ) {
			$css .= 'text-transform: ' . esc_attr( $typo['textTransform'] ) . ' !important; ';
		}
		if ( ! empty( $typo['lineHeight'] ) ) {
			$lh = is_numeric( $typo['lineHeight'] ) ? $typo['lineHeight'] . 'px' : $typo['lineHeight'];
			$css .= 'line-height: ' . esc_attr( $lh ) . ' !important; ';
		}
		if ( ! empty( $typo['letterSpace'] ) ) {
			$ls = is_numeric( $typo['letterSpace'] ) ? $typo['letterSpace'] . 'px' : $typo['letterSpace'];
			$css .= 'letter-spacing: ' . esc_attr( $ls ) . ' !important; ';
		}
		if ( ! empty( $typo['fontSize'] ) ) {
			$fs = is_array( $typo['fontSize'] ) ? ( $typo['fontSize'][$device] ?? $typo['fontSize']['desktop'] ?? '' ) : $typo['fontSize'];
			if ( ! empty( $fs ) ) {
				$fs = is_numeric( $fs ) ? $fs . 'px' : $fs;
				$css .= 'font-size: ' . esc_attr( $fs ) . ' !important; ';
			}
		}
		return $css;
	}
}

if ( ! function_exists( 'bppt_get_shadow_css' ) ) {
	function bppt_get_shadow_css( $shadows ) {
		if ( empty( $shadows ) || ! is_array( $shadows ) ) {
			return '';
		}
		$parts = [];
		foreach ( $shadows as $s ) {
			if ( ! is_array( $s ) ) {
				continue;
			}
			$h = ! empty( $s['hOffset'] ) ? $s['hOffset'] : '0px';
			$v = ! empty( $s['vOffset'] ) ? $s['vOffset'] : '0px';
			$b = ! empty( $s['blur'] ) ? $s['blur'] : '0px';
			$sp = ! empty( $s['spreed'] ) ? $s['spreed'] : '0px';
			$c = ! empty( $s['color'] ) ? $s['color'] : 'rgba(0,0,0,0.1)';
			$inset = ! empty( $s['isInset'] ) ? 'inset' : '';
			$parts[] = trim( "{$h} {$v} {$b} {$sp} {$c} {$inset}" );
		}
		return ! empty( $parts ) ? 'box-shadow: ' . implode( ', ', $parts ) . ' !important;' : '';
	}
}

$card_bg       = bppt_get_bg_css( $theme_style['cardBg'] ?? '' );
$card_pad      = bppt_get_box_css( $theme_style['cardPadding'] ?? [] );
$card_mar      = bppt_get_box_css( $theme_style['cardMargin'] ?? [] );
$card_radius   = ! empty( $theme_style['cardRadius'] ) ? $theme_style['cardRadius'] : '';
$card_shadow   = bppt_get_shadow_css( $theme_style['cardShadow'] ?? [] );

$header_bg     = ! empty( $theme_style['headerBg'] ) ? 'background: ' . esc_attr( $theme_style['headerBg'] ) . ' !important;' : '';
$title_color   = ! empty( $theme_style['titleColor'] ) ? 'color: ' . esc_attr( $theme_style['titleColor'] ) . ' !important;' : '';
$title_typo    = bppt_get_typo_css( $theme_style['titleTypo'] ?? [] );

$price_color   = ! empty( $theme_style['priceColor'] ) ? 'color: ' . esc_attr( $theme_style['priceColor'] ) . ' !important;' : '';
$price_bg      = ! empty( $theme_style['priceBg'] ) ? 'background: ' . esc_attr( $theme_style['priceBg'] ) . ' !important;' : '';
$price_typo    = bppt_get_typo_css( $theme_style['priceTypo'] ?? [] );

$unit_color    = ! empty( $theme_style['unitColor'] ) ? 'color: ' . esc_attr( $theme_style['unitColor'] ) . ' !important;' : '';
$unit_typo     = bppt_get_typo_css( $theme_style['unitTypo'] ?? [] );

$feat_color    = ! empty( $theme_style['featureColor'] ) ? 'color: ' . esc_attr( $theme_style['featureColor'] ) . ' !important;' : '';
$feat_typo     = bppt_get_typo_css( $theme_style['featureTypo'] ?? [] );

$btn_color     = ! empty( $theme_style['btnColors']['color'] ) ? 'color: ' . esc_attr( $theme_style['btnColors']['color'] ) . ' !important;' : '';
$btn_bg        = ! empty( $theme_style['btnColors']['bg'] ) ? 'background: ' . esc_attr( $theme_style['btnColors']['bg'] ) . ' !important;' : '';
$btn_hov_color = ! empty( $theme_style['btnHoverColors']['color'] ) ? 'color: ' . esc_attr( $theme_style['btnHoverColors']['color'] ) . ' !important;' : '';
$btn_hov_bg    = ! empty( $theme_style['btnHoverColors']['bg'] ) ? 'background: ' . esc_attr( $theme_style['btnHoverColors']['bg'] ) . ' !important;' : '';
$btn_typo      = bppt_get_typo_css( $theme_style['btnTypo'] ?? [] );
$btn_pad       = bppt_get_box_css( $theme_style['btnPadding'] ?? [] );
$btn_radius    = ! empty( $theme_style['btnRadius'] ) ? $theme_style['btnRadius'] : '';

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

		<?php
		switch ( $theme ) {
			case 'demo-1':
				?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-inner {
					<?php echo $card_bg; ?>
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
					<?php echo $card_shadow; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-entry-title {
					<?php echo $header_bg; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-entry-title > h3 {
					<?php echo $title_color; ?>
					<?php echo $header_bg; ?>
					<?php echo $title_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-entry-title .price {
					<?php echo $price_color; ?>
					<?php echo $price_bg; ?>
					<?php echo $price_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .price span {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-entry-content ul li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .bttn a {
					<?php echo $btn_color; ?>
					<?php echo $btn_bg; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .bttn a:hover {
					<?php echo $btn_hov_color; ?>
					<?php echo $btn_hov_bg; ?>
				}
				<?php
				break;

			case 'demo-2':
				?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo {
					<?php echo $card_bg; ?>
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
					<?php echo $card_shadow; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricingTable-header {
					<?php echo $header_bg; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .title {
					<?php echo $title_color; ?>
					<?php echo $title_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .price-value {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .price-value > span {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricing-content ul li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricingTable-signup a {
					<?php echo $btn_color; ?>
					<?php echo $btn_bg; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricingTable-signup a:hover {
					<?php echo $btn_hov_color; ?>
					<?php echo $btn_hov_bg; ?>
				}
				<?php
				break;

			case 'demo-3':
				?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable {
					<?php echo $card_bg; ?>
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
					<?php echo $card_shadow; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-header {
					<?php echo $header_bg; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .title {
					<?php echo $title_color; ?>
					<?php echo $title_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .price-value {
					<?php echo $price_bg; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .price-value .amount {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .price-value .duration {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricing-content ul li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-signup-three a {
					<?php echo $btn_color; ?>
					<?php echo $btn_bg; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-signup-three a:hover {
					<?php echo $btn_hov_color; ?>
					<?php echo $btn_hov_bg; ?>
				}
				<?php
				break;

			case 'demo-4':
				?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour {
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
					<?php echo $card_shadow; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingContent {
					<?php echo $card_bg; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingHeader .title {
					<?php echo $title_color; ?>
					<?php echo $title_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingValue .amount {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingValue .duration {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingFeatures li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingSignUp a {
					<?php echo $btn_color; ?>
					<?php echo $btn_bg; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingSignUp a:hover {
					<?php echo $btn_hov_color; ?>
					<?php echo $btn_hov_bg; ?>
				}
				<?php
				break;

			case 'demo-5':
			default:
				?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable {
					<?php echo $card_bg; ?>
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
					<?php echo $card_shadow; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingHeader .title {
					<?php echo $title_color; ?>
					<?php echo $title_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingValue .amount {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingValue .duration {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingFeatures li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingSignUp a {
					<?php echo $btn_color; ?>
					<?php echo $btn_bg; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_typo; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingSignUp a:hover {
					<?php echo $btn_hov_color; ?>
					<?php echo $btn_hov_bg; ?>
				}
				<?php
				break;
		}
		?>
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
