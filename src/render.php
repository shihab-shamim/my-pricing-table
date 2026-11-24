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
$styles_attr       = ! empty( $attributes['styles'] ) && is_array( $attributes['styles'] ) ? $attributes['styles'] : [];
$user_theme_styles = ! empty( $styles_attr[ $theme ] ) && is_array( $styles_attr[ $theme ] ) ? $styles_attr[ $theme ] : [];

$default_theme_styles = [
	'demo-1' => [
		'wrapBg'               => [ 'type' => 'solid', 'color' => '' ],
		'wrapPadding'          => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapMargin'           => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapRadius'           => '',
		'cardBg'               => [ 'type' => 'solid', 'color' => '#ffffff' ],
		'cardPadding'          => [ 'top' => '0px', 'right' => '0px', 'bottom' => '0px', 'left' => '0px' ],
		'cardMargin'           => [ 'top' => '10px', 'right' => '0px', 'bottom' => '40px', 'left' => '0px' ],
		'cardRadius'           => '0px',
		'cardShadow'           => [],
		'cardBorderStyle'      => 'none',
		'cardBorderWidth'      => '1px',
		'cardBorderColor'      => '#e0e0e0',
		'headerBg'             => '',
		'titleColor'           => '#ffffff',
		'titleAlign'           => 'default',
		'titleTypo'            => [ 'fontFamily' => 'Lato', 'fontWeight' => '700', 'fontSize' => [ 'desktop' => 20, 'tablet' => 20, 'mobile' => 18 ] ],
		'priceColor'           => '#ffffff',
		'priceBg'              => '#20bada',
		'priceTypo'            => [ 'fontFamily' => 'Lato', 'fontWeight' => '700', 'fontSize' => [ 'desktop' => 28, 'tablet' => 28, 'mobile' => 24 ] ],
		'unitColor'            => '#ffffff',
		'unitTypo'             => [ 'fontFamily' => 'Lato', 'fontWeight' => '400', 'fontSize' => [ 'desktop' => 12, 'tablet' => 12, 'mobile' => 12 ] ],
		'featureColor'         => '#323232',
		'featureDisabledColor' => '#aaaaaa',
		'featureTypo'          => [ 'fontFamily' => 'Lato', 'fontWeight' => '400', 'fontSize' => [ 'desktop' => 14, 'tablet' => 14, 'mobile' => 14 ] ],
		'badgeColors'          => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#ff8800' ],
		'badgeHoverColors'     => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#e07700' ],
		'badgeColor'           => '#ffffff',
		'badgeBg'              => '#ff8800',
		'badgeHoverColor'      => '#ffffff',
		'badgeHoverBg'         => '#e07700',
		'badgeRadius'          => '3px',
		'btnColors'            => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#323232' ],
		'btnHoverColors'       => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#000000' ],
		'btnTypo'              => [ 'fontFamily' => 'Lato', 'fontWeight' => '700', 'fontSize' => [ 'desktop' => 14, 'tablet' => 14, 'mobile' => 14 ] ],
		'btnPadding'           => [ 'top' => '10px', 'right' => '30px', 'bottom' => '10px', 'left' => '30px' ],
		'btnRadius'            => '0px',
		'btnBorderStyle'       => 'none',
		'btnBorderWidth'       => '1px',
		'btnBorderColor'       => '#323232',
		'btnShadow'            => [],
	],
	'demo-2' => [
		'wrapBg'               => [ 'type' => 'solid', 'color' => '' ],
		'wrapPadding'          => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapMargin'           => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapRadius'           => '',
		'cardBg'               => [ 'type' => 'solid', 'color' => '#f1f1f1' ],
		'cardPadding'          => [ 'top' => '0px', 'right' => '0px', 'bottom' => '0px', 'left' => '0px' ],
		'cardMargin'           => [ 'top' => '0px', 'right' => '24px', 'bottom' => '60px', 'left' => '24px' ],
		'cardRadius'           => '0px',
		'cardShadow'           => [],
		'cardBorderStyle'      => 'none',
		'cardBorderWidth'      => '1px',
		'cardBorderColor'      => '#e0e0e0',
		'headerBg'             => '',
		'titleColor'           => '#ffffff',
		'titleAlign'           => 'default',
		'titleTypo'            => [ 'fontFamily' => 'Rubik', 'fontWeight' => '500', 'fontSize' => [ 'desktop' => 28, 'tablet' => 24, 'mobile' => 20 ] ],
		'priceColor'           => '#000000',
		'priceTypo'            => [ 'fontFamily' => 'Rubik', 'fontWeight' => '500', 'fontSize' => [ 'desktop' => 69, 'tablet' => 50, 'mobile' => 38 ] ],
		'unitColor'            => '#000000',
		'unitTypo'             => [ 'fontFamily' => 'Rubik', 'fontWeight' => '400', 'fontSize' => [ 'desktop' => 18, 'tablet' => 16, 'mobile' => 14 ] ],
		'featureColor'         => '#404040',
		'featureDisabledColor' => '#aaaaaa',
		'featureTypo'          => [ 'fontFamily' => 'Rubik', 'fontWeight' => '500', 'fontSize' => [ 'desktop' => 15, 'tablet' => 14, 'mobile' => 14 ] ],
		'badgeColors'          => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#ff8800' ],
		'badgeHoverColors'     => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#e07700' ],
		'badgeColor'           => '#ffffff',
		'badgeBg'              => '#ff8800',
		'badgeHoverColor'      => '#ffffff',
		'badgeHoverBg'         => '#e07700',
		'badgeRadius'          => '3px',
		'btnColors'            => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#f53c25' ],
		'btnHoverColors'       => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#a10903' ],
		'btnTypo'              => [ 'fontFamily' => 'Rubik', 'fontWeight' => '500', 'fontSize' => [ 'desktop' => 25, 'tablet' => 20, 'mobile' => 18 ] ],
		'btnPadding'           => [ 'top' => '10px', 'right' => '24px', 'bottom' => '10px', 'left' => '24px' ],
		'btnRadius'            => '0px',
		'btnBorderStyle'       => 'none',
		'btnBorderWidth'       => '1px',
		'btnBorderColor'       => '#f53c25',
		'btnShadow'            => [],
	],
	'demo-3' => [
		'wrapBg'               => [ 'type' => 'solid', 'color' => '' ],
		'wrapPadding'          => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapMargin'           => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapRadius'           => '',
		'cardBg'               => [ 'type' => 'solid', 'color' => '#ffffff' ],
		'cardPadding'          => [ 'top' => '0px', 'right' => '0px', 'bottom' => '0px', 'left' => '0px' ],
		'cardMargin'           => [ 'top' => '0px', 'right' => '20px', 'bottom' => '60px', 'left' => '20px' ],
		'cardRadius'           => '0px',
		'cardShadow'           => [ [ 'hOffset' => 0, 'vOffset' => 0, 'blur' => 15, 'spread' => 0, 'color' => 'rgba(0, 0, 0, 0.15)', 'inset' => false ] ],
		'cardBorderStyle'      => 'none',
		'cardBorderWidth'      => '1px',
		'cardBorderColor'      => '#e0e0e0',
		'headerBg'             => '',
		'titleColor'           => '#34ca95',
		'titleAlign'           => 'default',
		'titleTypo'            => [ 'fontFamily' => 'Poppins', 'fontWeight' => '600', 'fontSize' => [ 'desktop' => 35, 'tablet' => 30, 'mobile' => 24 ] ],
		'priceColor'           => '#ffffff',
		'priceBg'              => '#2cc550',
		'priceTypo'            => [ 'fontFamily' => 'Poppins', 'fontWeight' => '600', 'fontSize' => [ 'desktop' => 45, 'tablet' => 38, 'mobile' => 30 ] ],
		'unitColor'            => '#ffffff',
		'unitTypo'             => [ 'fontFamily' => 'Poppins', 'fontWeight' => '400', 'fontSize' => [ 'desktop' => 16, 'tablet' => 15, 'mobile' => 14 ] ],
		'featureColor'         => '#999999',
		'featureDisabledColor' => '#cccccc',
		'featureTypo'          => [ 'fontFamily' => 'Poppins', 'fontWeight' => '500', 'fontSize' => [ 'desktop' => 17, 'tablet' => 16, 'mobile' => 14 ] ],
		'badgeColors'          => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#ff8800' ],
		'badgeHoverColors'     => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#e07700' ],
		'badgeColor'           => '#ffffff',
		'badgeBg'              => '#ff8800',
		'badgeHoverColor'      => '#ffffff',
		'badgeHoverBg'         => '#e07700',
		'badgeRadius'          => '3px',
		'btnColors'            => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#2cc550' ],
		'btnHoverColors'       => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#249d40' ],
		'btnTypo'              => [ 'fontFamily' => 'Poppins', 'fontWeight' => '400', 'fontSize' => [ 'desktop' => 22, 'tablet' => 20, 'mobile' => 18 ] ],
		'btnPadding'           => [ 'top' => '7px', 'right' => '30px', 'bottom' => '7px', 'left' => '30px' ],
		'btnRadius'            => '5px',
		'btnBorderStyle'       => 'none',
		'btnBorderWidth'       => '1px',
		'btnBorderColor'       => '#2cc550',
		'btnShadow'            => [],
	],
	'demo-4' => [
		'wrapBg'               => [ 'type' => 'solid', 'color' => '' ],
		'wrapPadding'          => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapMargin'           => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapRadius'           => '',
		'cardBg'               => [ 'type' => 'solid', 'color' => '#ffffff' ],
		'cardPadding'          => [ 'top' => '0px', 'right' => '30px', 'bottom' => '30px', 'left' => '30px' ],
		'cardMargin'           => [ 'top' => '0px', 'right' => '0px', 'bottom' => '40px', 'left' => '0px' ],
		'cardRadius'           => '20px',
		'cardShadow'           => [ [ 'hOffset' => 0, 'vOffset' => 0, 'blur' => 15, 'spread' => 0, 'color' => 'rgba(0, 0, 0, 0.1)', 'inset' => false ] ],
		'cardBorderStyle'      => 'none',
		'cardBorderWidth'      => '1px',
		'cardBorderColor'      => '#e0e0e0',
		'headerBg'             => '',
		'titleColor'           => '#383e4a',
		'titleAlign'           => 'default',
		'titleTypo'            => [ 'fontFamily' => 'Roboto', 'fontWeight' => '700', 'fontSize' => [ 'desktop' => 30, 'tablet' => 26, 'mobile' => 22 ] ],
		'priceColor'           => '#383e4a',
		'priceTypo'            => [ 'fontFamily' => 'Roboto', 'fontWeight' => '700', 'fontSize' => [ 'desktop' => 50, 'tablet' => 42, 'mobile' => 34 ] ],
		'unitColor'            => '#383e4a',
		'unitTypo'             => [ 'fontFamily' => 'Roboto', 'fontWeight' => '400', 'fontSize' => [ 'desktop' => 20, 'tablet' => 18, 'mobile' => 16 ] ],
		'featureColor'         => '#999999',
		'featureDisabledColor' => '#525963',
		'featureTypo'          => [ 'fontFamily' => 'Roboto', 'fontWeight' => '400', 'fontSize' => [ 'desktop' => 17, 'tablet' => 16, 'mobile' => 15 ] ],
		'badgeColors'          => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#ff8800' ],
		'badgeHoverColors'     => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#e07700' ],
		'badgeColor'           => '#ffffff',
		'badgeBg'              => '#ff8800',
		'badgeHoverColor'      => '#ffffff',
		'badgeHoverBg'         => '#e07700',
		'badgeRadius'          => '3px',
		'btnColors'            => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#9fcd37' ],
		'btnHoverColors'       => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#72bb43' ],
		'btnTypo'              => [ 'fontFamily' => 'Roboto', 'fontWeight' => '700', 'fontSize' => [ 'desktop' => 20, 'tablet' => 18, 'mobile' => 16 ] ],
		'btnPadding'           => [ 'top' => '14px', 'right' => '15px', 'bottom' => '14px', 'left' => '15px' ],
		'btnRadius'            => '6px',
		'btnBorderStyle'       => 'none',
		'btnBorderWidth'       => '1px',
		'btnBorderColor'       => '#9fcd37',
		'btnShadow'            => [],
	],
	'demo-5' => [
		'wrapBg'               => [ 'type' => 'solid', 'color' => '' ],
		'wrapPadding'          => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapMargin'           => [ 'top' => '', 'right' => '', 'bottom' => '', 'left' => '' ],
		'wrapRadius'           => '',
		'cardBg'               => [ 'type' => 'solid', 'color' => '#ffffff' ],
		'cardPadding'          => [ 'top' => '20px', 'right' => '0px', 'bottom' => '35px', 'left' => '0px' ],
		'cardMargin'           => [ 'top' => '0px', 'right' => '10px', 'bottom' => '30px', 'left' => '10px' ],
		'cardRadius'           => '0px',
		'cardShadow'           => [ [ 'hOffset' => 0, 'vOffset' => 0, 'blur' => 10, 'spread' => -3, 'color' => 'rgba(0, 0, 0, 0.3)', 'inset' => false ] ],
		'cardBorderStyle'      => 'none',
		'cardBorderWidth'      => '1px',
		'cardBorderColor'      => '#e0e0e0',
		'headerBg'             => '',
		'titleColor'           => '#ffffff',
		'titleAlign'           => 'default',
		'titleTypo'            => [ 'fontFamily' => 'Roboto', 'fontWeight' => '500', 'fontSize' => [ 'desktop' => 35, 'tablet' => 30, 'mobile' => 24 ] ],
		'priceColor'           => '#000000',
		'priceTypo'            => [ 'fontFamily' => 'Roboto', 'fontWeight' => '600', 'fontSize' => [ 'desktop' => 40, 'tablet' => 34, 'mobile' => 28 ] ],
		'unitColor'            => '#000000',
		'unitTypo'             => [ 'fontFamily' => 'Roboto', 'fontWeight' => '300', 'fontSize' => [ 'desktop' => 30, 'tablet' => 24, 'mobile' => 20 ] ],
		'featureColor'         => '#777777',
		'featureDisabledColor' => '#aaaaaa',
		'featureTypo'          => [ 'fontFamily' => 'Roboto', 'fontWeight' => '400', 'fontSize' => [ 'desktop' => 17, 'tablet' => 16, 'mobile' => 14 ] ],
		'badgeColors'          => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#ff8800' ],
		'badgeHoverColors'     => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#e07700' ],
		'badgeColor'           => '#ffffff',
		'badgeBg'              => '#ff8800',
		'badgeHoverColor'      => '#ffffff',
		'badgeHoverBg'         => '#e07700',
		'badgeRadius'          => '3px',
		'btnColors'            => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#f89923' ],
		'btnHoverColors'       => [ 'color' => '#ffffff', 'bgType' => 'solid', 'bg' => '#e07f0f' ],
		'btnTypo'              => [ 'fontFamily' => 'Roboto', 'fontWeight' => '500', 'fontSize' => [ 'desktop' => 22, 'tablet' => 20, 'mobile' => 18 ] ],
		'btnPadding'           => [ 'top' => '8px', 'right' => '6px', 'bottom' => '8px', 'left' => '6px' ],
		'btnRadius'            => '10px',
		'btnBorderStyle'       => 'none',
		'btnBorderWidth'       => '1px',
		'btnBorderColor'       => '#f89923',
		'btnShadow'            => [],
	],
];

$theme_defaults = $default_theme_styles[ $theme ] ?? $default_theme_styles['demo-1'];
$theme_style    = array_merge( $theme_defaults, $user_theme_styles );

// Color scheme mapper for each theme
if ( ! function_exists( 'bppt_get_effective_scheme' ) ) {
	function bppt_get_effective_scheme( $theme, $scheme, $index ) {
		$schemes = [
			'demo-1' => [ 'basic', 'standard', 'ultimite' ],
			'demo-2' => [ 'lemon', 'purple', 'pink', 'sky', 'red' ],
			'demo-3' => [ 'purple', 'pink' ],
			'demo-4' => [ 'purple', 'orange' ],
			'demo-5' => [ 'green', 'blue' ],
		];
		$defaults = [
			'demo-1' => [ 'default', 'standard', 'ultimite' ],
			'demo-2' => [ 'lemon', 'purple', 'pink', 'sky', 'red' ],
			'demo-3' => [ 'default', 'purple', 'pink' ],
			'demo-4' => [ 'default', 'purple', 'orange' ],
			'demo-5' => [ 'default', 'green', 'blue' ],
		];
		$valid = $schemes[ $theme ] ?? [];
		if ( ! empty( $scheme ) && 'default' !== $scheme && in_array( $scheme, $valid, true ) ) {
			return $scheme;
		}
		$def = $defaults[ $theme ] ?? $defaults['demo-1'];
		return $def[ $index % count( $def ) ];
	}
}

// Helper functions for CSS generation
if ( ! function_exists( 'bppt_get_bg_css' ) ) {
	function bppt_get_bg_css( $bg ) {
		if ( empty( $bg ) ) {
			return '';
		}
		if ( is_string( $bg ) ) {
			return 'background: ' . esc_attr( $bg ) . ' !important;';
		}
		if ( is_array( $bg ) && ! empty( $bg['color'] ) ) {
			return 'background: ' . esc_attr( $bg['color'] ) . ' !important;';
		}
		if ( is_array( $bg ) && ! empty( $bg['type'] ) && 'gradient' === $bg['type'] && ! empty( $bg['gradient'] ) ) {
			return 'background: ' . esc_attr( $bg['gradient'] ) . ' !important;';
		}
		return '';
	}
}

if ( ! function_exists( 'bppt_get_box_css' ) ) {
	function bppt_get_box_css( $box ) {
		if ( empty( $box ) || ! is_array( $box ) ) {
			return '';
		}
		$t = ! empty( $box['top'] ) ? $box['top'] : '0px';
		$r = ! empty( $box['right'] ) ? $box['right'] : '0px';
		$b = ! empty( $box['bottom'] ) ? $box['bottom'] : '0px';
		$l = ! empty( $box['left'] ) ? $box['left'] : '0px';
		return "{$t} {$r} {$b} {$l}";
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

if ( ! function_exists( 'bppt_get_responsive_typo_css' ) ) {
	function bppt_get_responsive_typo_css( $typo, $device = 'desktop' ) {
		if ( empty( $typo ) || ! is_array( $typo ) || empty( $typo['fontSize'] ) ) {
			return '';
		}
		$fs = is_array( $typo['fontSize'] ) ? ( $typo['fontSize'][$device] ?? '' ) : ( 'desktop' === $device ? $typo['fontSize'] : '' );
		if ( empty( $fs ) ) {
			return '';
		}
		$fs = is_numeric( $fs ) ? $fs . 'px' : $fs;
		return 'font-size: ' . esc_attr( $fs ) . ' !important; ';
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
			$h     = ! empty( $s['hOffset'] ) ? $s['hOffset'] : '0px';
			$v     = ! empty( $s['vOffset'] ) ? $s['vOffset'] : '0px';
			$b     = ! empty( $s['blur'] ) ? $s['blur'] : '0px';
			$sp    = ! empty( $s['spread'] ) ? $s['spread'] : ( ! empty( $s['spreed'] ) ? $s['spreed'] : '0px' );
			$c     = ! empty( $s['color'] ) ? $s['color'] : 'rgba(0,0,0,0.1)';
			$inset = ! empty( $s['inset'] ) || ! empty( $s['isInset'] ) ? 'inset' : '';
			$parts[] = trim( "{$h} {$v} {$b} {$sp} {$c} {$inset}" );
		}
		return ! empty( $parts ) ? 'box-shadow: ' . implode( ', ', $parts ) . ' !important;' : '';
	}
}

if ( ! function_exists( 'bppt_get_border_css' ) ) {
	function bppt_get_border_css( $style, $width, $color ) {
		if ( empty( $style ) || 'none' === $style ) {
			return '';
		}
		$w = ! empty( $width ) ? $width : '1px';
		$c = ! empty( $color ) ? $color : '#e0e0e0';
		return 'border: ' . esc_attr( $w ) . ' ' . esc_attr( $style ) . ' ' . esc_attr( $c ) . ' !important;';
	}
}

$has_wrap_pad = ! empty( $theme_style['wrapPadding'] ) && is_array( $theme_style['wrapPadding'] ) && count( array_filter( $theme_style['wrapPadding'], function( $v ) { return '' !== $v && null !== $v; } ) ) > 0;
$has_wrap_mar = ! empty( $theme_style['wrapMargin'] ) && is_array( $theme_style['wrapMargin'] ) && count( array_filter( $theme_style['wrapMargin'], function( $v ) { return '' !== $v && null !== $v; } ) ) > 0;
$wrap_pad     = $has_wrap_pad ? bppt_get_box_css( $theme_style['wrapPadding'] ) : '';
$wrap_mar     = $has_wrap_mar ? bppt_get_box_css( $theme_style['wrapMargin'] ) : '';
$wrap_radius  = ! empty( $theme_style['wrapRadius'] ) && '0px' !== $theme_style['wrapRadius'] && '0' !== $theme_style['wrapRadius'] ? $theme_style['wrapRadius'] : '';
$wrap_bg      = bppt_get_bg_css( $theme_style['wrapBg'] ?? '' );

$card_bg       = bppt_get_bg_css( $theme_style['cardBg'] ?? '' );
$card_pad      = bppt_get_box_css( $theme_style['cardPadding'] ?? [] );
$card_mar      = bppt_get_box_css( $theme_style['cardMargin'] ?? [] );
$card_radius   = ! empty( $theme_style['cardRadius'] ) ? $theme_style['cardRadius'] : '';
$card_shadow   = bppt_get_shadow_css( $theme_style['cardShadow'] ?? [] );
$card_border   = bppt_get_border_css( $theme_style['cardBorderStyle'] ?? '', $theme_style['cardBorderWidth'] ?? '', $theme_style['cardBorderColor'] ?? '' );

$header_bg     = ! empty( $theme_style['headerBg'] ) ? 'background: ' . esc_attr( $theme_style['headerBg'] ) . ' !important;' : '';
$title_color   = ! empty( $theme_style['titleColor'] ) ? 'color: ' . esc_attr( $theme_style['titleColor'] ) . ' !important;' : '';
$title_align   = ! empty( $theme_style['titleAlign'] ) && 'default' !== $theme_style['titleAlign'] ? 'text-align: ' . esc_attr( $theme_style['titleAlign'] ) . ' !important;' : '';
$title_typo    = bppt_get_typo_css( $theme_style['titleTypo'] ?? [] );

$price_color   = ! empty( $theme_style['priceColor'] ) ? 'color: ' . esc_attr( $theme_style['priceColor'] ) . ' !important;' : '';
$price_bg      = ! empty( $theme_style['priceBg'] ) ? 'background: ' . esc_attr( $theme_style['priceBg'] ) . ' !important;' : '';
$price_typo    = bppt_get_typo_css( $theme_style['priceTypo'] ?? [] );

$unit_color    = ! empty( $theme_style['unitColor'] ) ? 'color: ' . esc_attr( $theme_style['unitColor'] ) . ' !important;' : '';
$unit_typo     = bppt_get_typo_css( $theme_style['unitTypo'] ?? [] );

$feat_color    = ! empty( $theme_style['featureColor'] ) ? 'color: ' . esc_attr( $theme_style['featureColor'] ) . ' !important;' : '';
$feat_dis_col  = ! empty( $theme_style['featureDisabledColor'] ) ? 'color: ' . esc_attr( $theme_style['featureDisabledColor'] ) . ' !important;' : '';
$feat_typo     = bppt_get_typo_css( $theme_style['featureTypo'] ?? [] );

$badge_color     = ! empty( $theme_style['badgeColors']['color'] ) ? $theme_style['badgeColors']['color'] : ( ! empty( $theme_style['badgeColor'] ) ? $theme_style['badgeColor'] : '' );
$badge_bg        = ( ! empty( $theme_style['badgeColors']['bgType'] ) && 'gradient' === $theme_style['badgeColors']['bgType'] && ! empty( $theme_style['badgeColors']['gradient'] ) )
	? $theme_style['badgeColors']['gradient']
	: ( ! empty( $theme_style['badgeColors']['bg'] ) ? $theme_style['badgeColors']['bg'] : ( ! empty( $theme_style['badgeBg'] ) ? $theme_style['badgeBg'] : '' ) );
$badge_hov_color = ! empty( $theme_style['badgeHoverColors']['color'] ) ? $theme_style['badgeHoverColors']['color'] : ( ! empty( $theme_style['badgeHoverColor'] ) ? $theme_style['badgeHoverColor'] : '' );
$badge_hov_bg    = ( ! empty( $theme_style['badgeHoverColors']['bgType'] ) && 'gradient' === $theme_style['badgeHoverColors']['bgType'] && ! empty( $theme_style['badgeHoverColors']['gradient'] ) )
	? $theme_style['badgeHoverColors']['gradient']
	: ( ! empty( $theme_style['badgeHoverColors']['bg'] ) ? $theme_style['badgeHoverColors']['bg'] : ( ! empty( $theme_style['badgeHoverBg'] ) ? $theme_style['badgeHoverBg'] : '' ) );
$badge_radius    = ! empty( $theme_style['badgeRadius'] ) ? $theme_style['badgeRadius'] : '';

$btn_color     = ! empty( $theme_style['btnColors']['color'] ) ? 'color: ' . esc_attr( $theme_style['btnColors']['color'] ) . ' !important;' : '';
$btn_bg        = ! empty( $theme_style['btnColors']['bg'] ) ? 'background: ' . esc_attr( $theme_style['btnColors']['bg'] ) . ' !important;' : '';
$btn_hov_color = ! empty( $theme_style['btnHoverColors']['color'] ) ? 'color: ' . esc_attr( $theme_style['btnHoverColors']['color'] ) . ' !important;' : '';
$btn_hov_bg    = ! empty( $theme_style['btnHoverColors']['bg'] ) ? 'background: ' . esc_attr( $theme_style['btnHoverColors']['bg'] ) . ' !important;' : '';
$btn_typo      = bppt_get_typo_css( $theme_style['btnTypo'] ?? [] );
$btn_pad       = bppt_get_box_css( $theme_style['btnPadding'] ?? [] );
$btn_radius    = ! empty( $theme_style['btnRadius'] ) ? $theme_style['btnRadius'] : '';
$btn_border    = bppt_get_border_css( $theme_style['btnBorderStyle'] ?? '', $theme_style['btnBorderWidth'] ?? '', $theme_style['btnBorderColor'] ?? '' );
$btn_shadow    = bppt_get_shadow_css( $theme_style['btnShadow'] ?? [] );

$has_custom_btn_bg     = ! empty( $user_theme_styles['btnColors']['bg'] );
$has_custom_btn_hov_bg = ! empty( $user_theme_styles['btnHoverColors']['bg'] );
$has_custom_title_col  = ! empty( $user_theme_styles['titleColor'] );
$has_custom_price_bg   = ! empty( $user_theme_styles['priceBg'] );

$unique_id  = 'bppt-block-' . wp_unique_id();
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
		<?php if ( $wrap_bg || $wrap_pad || $wrap_mar || $wrap_radius ) : ?>
		.<?php echo esc_attr( $unique_id ); ?> {
			<?php echo $wrap_bg; ?>
			<?php if ( $wrap_pad ) : ?>padding: <?php echo esc_attr( $wrap_pad ); ?> !important;<?php endif; ?>
			<?php if ( $wrap_mar ) : ?>margin: <?php echo esc_attr( $wrap_mar ); ?> !important;<?php endif; ?>
			<?php if ( $wrap_radius ) : ?>border-radius: <?php echo esc_attr( $wrap_radius ); ?> !important;<?php endif; ?>
		}
		<?php if ( $wrap_bg ) : ?>
		.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_container,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_table3,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient {
			background: transparent !important;
		}
		<?php endif; ?>
		<?php endif; ?>
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
		.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-inner,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingContent,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable {
			position: relative !important;
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
			<?php
			$tab_title_fs = bppt_get_responsive_typo_css( $theme_style['titleTypo'] ?? [], 'tablet' );
			$tab_price_fs = bppt_get_responsive_typo_css( $theme_style['priceTypo'] ?? [], 'tablet' );
			$tab_unit_fs  = bppt_get_responsive_typo_css( $theme_style['unitTypo'] ?? [], 'tablet' );
			$tab_feat_fs  = bppt_get_responsive_typo_css( $theme_style['featureTypo'] ?? [], 'tablet' );
			$tab_btn_fs   = bppt_get_responsive_typo_css( $theme_style['btnTypo'] ?? [], 'tablet' );
			if ( $tab_title_fs ) {
				echo ".{$unique_id} h3, .{$unique_id} .title { {$tab_title_fs} }\n";
			}
			if ( $tab_price_fs ) {
				echo ".{$unique_id} .price, .{$unique_id} .price-value, .{$unique_id} .amount { {$tab_price_fs} }\n";
			}
			if ( $tab_unit_fs ) {
				echo ".{$unique_id} .price span, .{$unique_id} .price-value span, .{$unique_id} .duration { {$tab_unit_fs} }\n";
			}
			if ( $tab_feat_fs ) {
				echo ".{$unique_id} li { {$tab_feat_fs} }\n";
			}
			if ( $tab_btn_fs ) {
				echo ".{$unique_id} a { {$tab_btn_fs} }\n";
			}
			?>
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
			<?php
			$mob_title_fs = bppt_get_responsive_typo_css( $theme_style['titleTypo'] ?? [], 'mobile' );
			$mob_price_fs = bppt_get_responsive_typo_css( $theme_style['priceTypo'] ?? [], 'mobile' );
			$mob_unit_fs  = bppt_get_responsive_typo_css( $theme_style['unitTypo'] ?? [], 'mobile' );
			$mob_feat_fs  = bppt_get_responsive_typo_css( $theme_style['featureTypo'] ?? [], 'mobile' );
			$mob_btn_fs   = bppt_get_responsive_typo_css( $theme_style['btnTypo'] ?? [], 'mobile' );
			if ( $mob_title_fs ) {
				echo ".{$unique_id} h3, .{$unique_id} .title { {$mob_title_fs} }\n";
			}
			if ( $mob_price_fs ) {
				echo ".{$unique_id} .price, .{$unique_id} .price-value, .{$unique_id} .amount { {$mob_price_fs} }\n";
			}
			if ( $mob_unit_fs ) {
				echo ".{$unique_id} .price span, .{$unique_id} .price-value span, .{$unique_id} .duration { {$mob_unit_fs} }\n";
			}
			if ( $mob_feat_fs ) {
				echo ".{$unique_id} li { {$mob_feat_fs} }\n";
			}
			if ( $mob_btn_fs ) {
				echo ".{$unique_id} a { {$mob_btn_fs} }\n";
			}
			?>
		}

		<?php if ( $badge_color || $badge_bg || $badge_radius ) : ?>
		.<?php echo esc_attr( $unique_id ); ?> .hot {
			<?php if ( $badge_color ) : ?>color: <?php echo esc_attr( $badge_color ); ?> !important;<?php endif; ?>
			<?php if ( $badge_bg ) : ?>background: <?php echo esc_attr( $badge_bg ); ?> !important;<?php endif; ?>
			<?php if ( $badge_radius ) : ?>border-radius: <?php echo esc_attr( $badge_radius ); ?> !important;<?php endif; ?>
		}
		<?php endif; ?>

		<?php if ( $badge_hov_color || $badge_hov_bg ) : ?>
		.<?php echo esc_attr( $unique_id ); ?> .hot:hover,
		.<?php echo esc_attr( $unique_id ); ?> .plan:hover .hot,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan:hover .hot,
		.<?php echo esc_attr( $unique_id ); ?> .pricingTableTwo:hover .hot,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo:hover .hot,
		.<?php echo esc_attr( $unique_id ); ?> .pricingTable:hover .hot,
		.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable:hover .hot,
		.<?php echo esc_attr( $unique_id ); ?> .pricingTableFour:hover .hot,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour:hover .hot,
		.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable:hover .hot {
			<?php if ( $badge_hov_color ) : ?>color: <?php echo esc_attr( $badge_hov_color ); ?> !important;<?php endif; ?>
			<?php if ( $badge_hov_bg ) : ?>background: <?php echo esc_attr( $badge_hov_bg ); ?> !important;<?php endif; ?>
		}
		<?php endif; ?>

		<?php if ( $feat_dis_col ) : ?>
		.<?php echo esc_attr( $unique_id ); ?> li.disable {
			<?php echo $feat_dis_col; ?>
		}
		.<?php echo esc_attr( $unique_id ); ?> li.disable:before {
			<?php echo $feat_dis_col; ?>
		}
		<?php endif; ?>

		<?php
		switch ( $theme ) {
			case 'demo-1':
				?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-inner {
					<?php echo $card_bg; ?>
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
					<?php echo $card_border; ?>
					<?php echo $card_shadow; ?>
				}
				<?php if ( $header_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan:not(.basic):not(.standard):not(.ultimite) .plan-entry-title,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan.default .plan-entry-title,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan:not(.basic):not(.standard):not(.ultimite) .plan-entry-title > h3,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan.default .plan-entry-title > h3 {
					<?php echo $header_bg; ?>
				}
				<?php endif; ?>
				<?php if ( $title_color || $title_align || $title_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-entry-title > h3 {
					<?php echo $title_color; ?>
					<?php echo $title_align; ?>
					<?php echo $title_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $price_color || $price_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-entry-title .price {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $price_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan:not(.basic):not(.standard):not(.ultimite) .price,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan.default .price {
					<?php echo $price_bg; ?>
				}
				<?php endif; ?>
				<?php if ( $unit_color || $unit_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .price span {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $feat_color || $feat_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .plan-entry-content ul li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $btn_color || $btn_bg || $btn_pad || $btn_radius || $btn_border || $btn_shadow || $btn_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .bttn a {
					<?php echo $btn_color; ?>
					<?php echo $btn_bg; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_border; ?>
					<?php echo $btn_shadow; ?>
					<?php echo $btn_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $btn_hov_color || $btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_pricing .bttn a:hover {
					<?php echo $btn_hov_color; ?>
					<?php echo $btn_hov_bg; ?>
				}
				<?php endif; ?>
				<?php
				break;

			case 'demo-2':
				?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo {
					<?php echo $card_bg; ?>
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
					<?php echo $card_border; ?>
					<?php echo $card_shadow; ?>
				}
				<?php if ( $header_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon):not(.red) .pricingTable-header,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.default .pricingTable-header {
					<?php echo $header_bg; ?>
				}
				<?php endif; ?>
				<?php if ( $title_color || $title_align || $title_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .title {
					<?php echo $title_color; ?>
					<?php echo $title_align; ?>
					<?php echo $title_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $price_color || $price_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .price-value {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $unit_color || $unit_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .price-value > span {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $feat_color || $feat_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricing-content ul li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $btn_color || $btn_pad || $btn_radius || $btn_border || $btn_shadow || $btn_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricingTable-signup a {
					<?php echo $btn_color; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_border; ?>
					<?php echo $btn_shadow; ?>
					<?php echo $btn_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_btn_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricingTable-signup a {
					<?php echo $btn_bg; ?>
				}
				<?php elseif ( ! empty( $theme_style['btnColors']['bg'] ) ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon):not(.red) .pricingTable-signup a,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.default .pricingTable-signup a {
					background: <?php echo esc_attr( $theme_style['btnColors']['bg'] ); ?>;
				}
				<?php endif; ?>
				<?php if ( $btn_hov_color ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricingTable-signup a:hover {
					<?php echo $btn_hov_color; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo .pricingTable-signup a:hover {
					<?php echo $btn_hov_bg; ?>
				}
				<?php elseif ( $btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo:not(.pink):not(.purple):not(.sky):not(.lemon):not(.red) .pricingTable-signup a:hover,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.default .pricingTable-signup a:hover {
					<?php echo $btn_hov_bg; ?>
				}
				<?php endif; ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red:before,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red:after {
					background: linear-gradient(to left bottom, #a10903 45%, transparent 50%) !important;
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red .pricingTable-header {
					background: #f53c25 !important;
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red .pricing-content {
					border-color: #f53c25 !important;
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red .pricing-content li:before,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red .pricingTable-signup a {
					background: #f53c25 !important;
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red .pricingTable-signup a:before,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red .pricingTable-signup a:after {
					background: linear-gradient(to left bottom, #a10903 48%, transparent 50%) !important;
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_container .pricingTableTwo.red .pricingTable-signup a:hover {
					background: #a10903 !important;
				}
				<?php
				break;

			case 'demo-3':
				?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-header,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricing-content {
					<?php echo $card_bg; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable {
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
					<?php echo $card_border; ?>
					<?php echo $card_shadow; ?>
				}
				<?php if ( $header_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-header {
					<?php echo $header_bg; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_title_col ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .title {
					<?php echo $title_color; ?>
				}
				<?php elseif ( $title_color ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable:not(.purple):not(.pink) .title,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable.default .title {
					<?php echo $title_color; ?>
				}
				<?php endif; ?>
				<?php if ( $title_align || $title_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .title {
					<?php echo $title_align; ?>
					<?php echo $title_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_price_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .price-value {
					<?php echo $price_bg; ?>
				}
				<?php elseif ( $price_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable:not(.purple):not(.pink) .price-value,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable.default .price-value {
					<?php echo $price_bg; ?>
				}
				<?php endif; ?>
				<?php if ( $price_color || $price_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .price-value .amount {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $unit_color || $unit_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .price-value .duration {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $feat_color || $feat_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricing-content ul li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $btn_color || $btn_pad || $btn_radius || $btn_border || $btn_shadow || $btn_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-signup-three a {
					<?php echo $btn_color; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_border; ?>
					<?php echo $btn_shadow; ?>
					<?php echo $btn_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_btn_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-signup-three a {
					<?php echo $btn_bg; ?>
				}
				<?php elseif ( ! empty( $theme_style['btnColors']['bg'] ) ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable:not(.purple):not(.pink) .pricingTable-signup-three a,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable.default .pricingTable-signup-three a {
					background: <?php echo esc_attr( $theme_style['btnColors']['bg'] ); ?>;
				}
				<?php endif; ?>
				<?php if ( $btn_hov_color ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-signup-three a:hover {
					<?php echo $btn_hov_color; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable .pricingTable-signup-three a:hover {
					<?php echo $btn_hov_bg; ?>
				}
				<?php elseif ( $btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable:not(.purple):not(.pink) .pricingTable-signup-three a:hover,
				.<?php echo esc_attr( $unique_id ); ?> .bppt_table3 .pricingTable.default .pricingTable-signup-three a:hover {
					<?php echo $btn_hov_bg; ?>
				}
				<?php endif; ?>
				<?php
				break;

			case 'demo-4':
				?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour {
					<?php if ( $card_pad ) : ?>padding: <?php echo esc_attr( $card_pad ); ?> !important;<?php endif; ?>
					<?php if ( $card_mar ) : ?>margin: <?php echo esc_attr( $card_mar ); ?> !important;<?php endif; ?>
				}
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingContent {
					<?php echo $card_bg; ?>
					<?php if ( $card_radius ) : ?>border-radius: <?php echo esc_attr( $card_radius ); ?> !important;<?php endif; ?>
					<?php echo $card_border; ?>
					<?php echo $card_shadow; ?>
				}
				<?php if ( $title_color || $title_align || $title_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingHeader .title {
					<?php echo $title_color; ?>
					<?php echo $title_align; ?>
					<?php echo $title_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $price_color || $price_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingValue .amount {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $unit_color || $unit_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingValue .duration {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $feat_color || $feat_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingFeatures li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $btn_color || $btn_pad || $btn_radius || $btn_border || $btn_shadow || $btn_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingSignUp a {
					<?php echo $btn_color; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_border; ?>
					<?php echo $btn_shadow; ?>
					<?php echo $btn_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_btn_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingSignUp a {
					<?php echo $btn_bg; ?>
				}
				<?php elseif ( ! empty( $theme_style['btnColors']['bg'] ) ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour:not(.purple):not(.orange) .pricingSignUp a,
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour.default .pricingSignUp a {
					background: <?php echo esc_attr( $theme_style['btnColors']['bg'] ); ?>;
				}
				<?php endif; ?>
				<?php if ( $btn_hov_color ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingSignUp a:hover {
					<?php echo $btn_hov_color; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour .pricingSignUp a:hover {
					<?php echo $btn_hov_bg; ?>
				}
				<?php elseif ( $btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour:not(.purple):not(.orange) .pricingSignUp a:hover,
				.<?php echo esc_attr( $unique_id ); ?> .priceTableBGBefore .pricingTableFour.default .pricingSignUp a:hover {
					<?php echo $btn_hov_bg; ?>
				}
				<?php endif; ?>
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
					<?php echo $card_border; ?>
					<?php echo $card_shadow; ?>
				}
				<?php if ( $title_color || $title_align || $title_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingHeader .title {
					<?php echo $title_color; ?>
					<?php echo $title_align; ?>
					<?php echo $title_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $price_color || $price_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingValue .amount {
					<?php echo $price_color; ?>
					<?php echo $price_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $unit_color || $unit_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingValue .duration {
					<?php echo $unit_color; ?>
					<?php echo $unit_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $feat_color || $feat_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingFeatures li {
					<?php echo $feat_color; ?>
					<?php echo $feat_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $btn_color || $btn_pad || $btn_radius || $btn_border || $btn_shadow || $btn_typo ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingSignUp a {
					<?php echo $btn_color; ?>
					<?php if ( $btn_pad ) : ?>padding: <?php echo esc_attr( $btn_pad ); ?> !important;<?php endif; ?>
					<?php if ( $btn_radius ) : ?>border-radius: <?php echo esc_attr( $btn_radius ); ?> !important;<?php endif; ?>
					<?php echo $btn_border; ?>
					<?php echo $btn_shadow; ?>
					<?php echo $btn_typo; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_btn_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingSignUp a {
					<?php echo $btn_bg; ?>
				}
				<?php elseif ( ! empty( $theme_style['btnColors']['bg'] ) ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable:not(.green):not(.blue) .pricingSignUp a,
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable.default .pricingSignUp a {
					background: <?php echo esc_attr( $theme_style['btnColors']['bg'] ); ?>;
				}
				<?php endif; ?>
				<?php if ( $btn_hov_color ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingSignUp a:hover {
					<?php echo $btn_hov_color; ?>
				}
				<?php endif; ?>
				<?php if ( $has_custom_btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable .pricingSignUp a:hover {
					<?php echo $btn_hov_bg; ?>
				}
				<?php elseif ( $btn_hov_bg ) : ?>
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable:not(.green):not(.blue) .pricingSignUp a:hover,
				.<?php echo esc_attr( $unique_id ); ?> .priceTableGradient .pricingTable.default .pricingSignUp a:hover {
					<?php echo $btn_hov_bg; ?>
				}
				<?php endif; ?>
				<?php
				break;
		}

		// Individual Column Custom Styles
		foreach ( $tables as $i => $tbl ) {
			$plan_sl = '.' . esc_attr( $unique_id ) . ' .bppt-plan-' . $i . ':not(#_)';
			$h_bg    = ! empty( $tbl['headerBg'] ) ? esc_attr( is_array( $tbl['headerBg'] ) ? ( $tbl['headerBg']['color'] ?? ( $tbl['headerBg']['bg'] ?? '' ) ) : $tbl['headerBg'] ) : '';
			$p_bg    = ! empty( $tbl['priceBg'] ) ? esc_attr( is_array( $tbl['priceBg'] ) ? ( $tbl['priceBg']['color'] ?? ( $tbl['priceBg']['bg'] ?? '' ) ) : $tbl['priceBg'] ) : '';
			$b_bg    = ! empty( $tbl['btnBg'] ) ? esc_attr( is_array( $tbl['btnBg'] ) ? ( $tbl['btnBg']['color'] ?? ( $tbl['btnBg']['bg'] ?? '' ) ) : $tbl['btnBg'] ) : '';
			$b_col   = ! empty( $tbl['btnColor'] ) ? esc_attr( is_array( $tbl['btnColor'] ) ? ( $tbl['btnColor']['color'] ?? '' ) : $tbl['btnColor'] ) : '';
			$c_bg    = ! empty( $tbl['cardBg'] ) ? esc_attr( is_array( $tbl['cardBg'] ) ? ( $tbl['cardBg']['color'] ?? ( $tbl['cardBg']['bg'] ?? '' ) ) : $tbl['cardBg'] ) : '';

			switch ( $theme ) {
				case 'demo-1':
					$card_sl = '.' . esc_attr( $unique_id ) . ' .bppt_pricing .plan.bppt-plan-' . $i . ':not(#_)';
					if ( $h_bg ) {
						echo "{$card_sl} .plan-entry-title, {$card_sl} .plan-entry-title > h3, {$card_sl} .price, {$plan_sl} .plan-entry-title, {$plan_sl} .plan-entry-title > h3, {$plan_sl} .price { background: {$h_bg} !important; }\n";
						echo "{$card_sl} .bttn a, {$plan_sl} .bttn a { background: {$h_bg} !important; }\n";
					}
					if ( $p_bg ) {
						echo "{$card_sl} .price, {$plan_sl} .price { background: {$p_bg} !important; }\n";
					}
					if ( $b_bg ) {
						echo "{$card_sl} .bttn a, {$plan_sl} .bttn a { background: {$b_bg} !important; }\n";
					}
					if ( $b_col ) {
						echo "{$card_sl} .bttn a, {$card_sl} .bttn a:hover, {$plan_sl} .bttn a, {$plan_sl} .bttn a:hover { color: {$b_col} !important; }\n";
					}
					if ( $c_bg ) {
						echo "{$card_sl}, {$card_sl} .plan-inner, {$plan_sl}, {$plan_sl} .plan-inner { background: {$c_bg} !important; background-color: {$c_bg} !important; }\n";
					}
					break;

				case 'demo-2':
					$card_sl = '.' . esc_attr( $unique_id ) . ' .bppt_container .pricingTableTwo.bppt-plan-' . $i . ':not(#_)';
					if ( $h_bg ) {
						echo "{$card_sl} .pricingTable-header, {$plan_sl} .pricingTable-header { background: {$h_bg} !important; }\n";
						echo "{$card_sl} .pricing-content, {$plan_sl} .pricing-content { border-color: {$h_bg} !important; }\n";
						echo "{$card_sl} .pricing-content li:before, {$plan_sl} .pricing-content li:before { background: {$h_bg} !important; }\n";
						echo "{$card_sl} .pricingTable-signup a, {$plan_sl} .pricingTable-signup a { background: {$h_bg} !important; }\n";
						echo "{$card_sl}:before, {$card_sl}:after, {$plan_sl}:before, {$plan_sl}:after { background: linear-gradient(to left bottom, {$h_bg} 45%, transparent 50%) !important; }\n";
						echo "{$card_sl} .pricingTable-signup a:before, {$card_sl} .pricingTable-signup a:after, {$plan_sl} .pricingTable-signup a:before, {$plan_sl} .pricingTable-signup a:after { background: linear-gradient(to left bottom, {$h_bg} 48%, transparent 50%) !important; }\n";
					}
					if ( $b_bg ) {
						echo "{$card_sl} .pricingTable-signup a, {$plan_sl} .pricingTable-signup a { background: {$b_bg} !important; }\n";
						echo "{$card_sl} .pricingTable-signup a:before, {$card_sl} .pricingTable-signup a:after, {$plan_sl} .pricingTable-signup a:before, {$plan_sl} .pricingTable-signup a:after { background: linear-gradient(to left bottom, {$b_bg} 48%, transparent 50%) !important; }\n";
					}
					if ( $b_col ) {
						echo "{$card_sl} .pricingTable-signup a, {$card_sl} .pricingTable-signup a:hover, {$plan_sl} .pricingTable-signup a, {$plan_sl} .pricingTable-signup a:hover { color: {$b_col} !important; }\n";
					}
					if ( $c_bg ) {
						echo "{$card_sl}, {$plan_sl} { background: {$c_bg} !important; background-color: {$c_bg} !important; }\n";
					}
					break;

				case 'demo-3':
					$card_sl = '.' . esc_attr( $unique_id ) . ' .bppt_table3 .pricingTable.bppt-plan-' . $i . ':not(#_)';
					if ( $h_bg ) {
						echo "{$card_sl} .title, {$plan_sl} .title { color: {$h_bg} !important; }\n";
						echo "{$card_sl} .price-value, {$card_sl} .pricingTable-signup-three a, {$plan_sl} .price-value, {$plan_sl} .pricingTable-signup-three a { background: {$h_bg} !important; }\n";
					}
					if ( $p_bg ) {
						echo "{$card_sl} .price-value, {$plan_sl} .price-value { background: {$p_bg} !important; }\n";
					}
					if ( $b_bg ) {
						echo "{$card_sl} .pricingTable-signup-three a, {$plan_sl} .pricingTable-signup-three a { background: {$b_bg} !important; }\n";
					}
					if ( $b_col ) {
						echo "{$card_sl} .pricingTable-signup-three a, {$card_sl} .pricingTable-signup-three a:hover, {$plan_sl} .pricingTable-signup-three a, {$plan_sl} .pricingTable-signup-three a:hover { color: {$b_col} !important; }\n";
					}
					if ( $c_bg ) {
						echo "{$card_sl}, {$card_sl} .pricingTable-header, {$card_sl} .pricing-content, {$plan_sl}, {$plan_sl} .pricingTable-header, {$plan_sl} .pricing-content { background: {$c_bg} !important; background-color: {$c_bg} !important; }\n";
					}
					break;

				case 'demo-4':
					$card_sl = '.' . esc_attr( $unique_id ) . ' .priceTableBGBefore .pricingTableFour.bppt-plan-' . $i . ':not(#_)';
					if ( $h_bg ) {
						echo "{$card_sl}:before, {$plan_sl}:before { background: {$h_bg} !important; }\n";
						echo "{$card_sl} .pricingHeader .title, {$plan_sl} .pricingHeader .title { color: {$h_bg} !important; }\n";
						echo "{$card_sl} .pricingFeatures li:before, {$plan_sl} .pricingFeatures li:before { color: {$h_bg} !important; }\n";
						echo "{$card_sl} .pricingSignUp a, {$plan_sl} .pricingSignUp a { background: {$h_bg} !important; }\n";
					}
					if ( $b_bg ) {
						echo "{$card_sl} .pricingSignUp a, {$plan_sl} .pricingSignUp a { background: {$b_bg} !important; }\n";
					}
					if ( $b_col ) {
						echo "{$card_sl} .pricingSignUp a, {$card_sl} .pricingSignUp a:hover, {$plan_sl} .pricingSignUp a, {$plan_sl} .pricingSignUp a:hover { color: {$b_col} !important; }\n";
					}
					if ( $c_bg ) {
						echo "{$card_sl} .pricingContent, {$plan_sl} .pricingContent { background: {$c_bg} !important; background-color: {$c_bg} !important; }\n";
					}
					break;

				case 'demo-5':
				default:
					$card_sl = '.' . esc_attr( $unique_id ) . ' .priceTableGradient .pricingTable.bppt-plan-' . $i . ':not(#_)';
					if ( $h_bg ) {
						echo "{$card_sl} .pricingHeader, {$plan_sl} .pricingHeader { background: {$h_bg} !important; }\n";
						echo "{$card_sl} .pricingFeatures li:before, {$plan_sl} .pricingFeatures li:before { background: {$h_bg} !important; }\n";
						echo "{$card_sl} .pricingSignUp a, {$plan_sl} .pricingSignUp a { background: {$h_bg} !important; }\n";
					}
					if ( $b_bg ) {
						echo "{$card_sl} .pricingSignUp a, {$plan_sl} .pricingSignUp a { background: {$b_bg} !important; }\n";
					}
					if ( $b_col ) {
						echo "{$card_sl} .pricingSignUp a, {$card_sl} .pricingSignUp a:hover, {$plan_sl} .pricingSignUp a, {$plan_sl} .pricingSignUp a:hover { color: {$b_col} !important; }\n";
					}
					if ( $c_bg ) {
						echo "{$card_sl}, {$plan_sl} { background: {$c_bg} !important; background-color: {$c_bg} !important; }\n";
					}
					break;
			}
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
				<?php foreach ( $tables as $i => $tbl ) :
					$scheme     = bppt_get_effective_scheme( 'demo-1', $tbl['colorScheme'] ?? '', $i );
					$btn_target = ! empty( $tbl['btnNewTab'] ) ? ' target="_blank" rel="noopener noreferrer"' : '';
				?>
					<div class="plan <?php echo esc_attr( trim( $scheme . ' bppt-plan-' . $i ) ); ?>">
						<div class="plan-inner">
							<?php if ( ! empty( $tbl['isFeatured'] ) ) : ?>
								<div class="hot"><?php echo esc_html( ! empty( $tbl['badge'] ) ? $tbl['badge'] : __( 'Hot', 'bpricing' ) ); ?></div>
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
										<?php foreach ( $tbl['features'] as $feat ) :
											$is_dis = isset( $feat['enabled'] ) && false === $feat['enabled'];
										?>
											<li class="<?php echo $is_dis ? 'disable' : ''; ?>"><?php echo esc_html( $feat['text'] ?? '' ); ?></li>
										<?php endforeach; ?>
									</ul>
								</div>
							<?php endif; ?>
							<div class="bttn">
								<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"<?php echo $btn_target; ?>><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
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
				<?php foreach ( $tables as $i => $tbl ) :
					$scheme     = bppt_get_effective_scheme( 'demo-2', $tbl['colorScheme'] ?? '', $i );
					$btn_target = ! empty( $tbl['btnNewTab'] ) ? ' target="_blank" rel="noopener noreferrer"' : '';
				?>
					<div class="pricingTableTwo <?php echo esc_attr( trim( $scheme . ' bppt-plan-' . $i ) ); ?>">
						<?php if ( ! empty( $tbl['isFeatured'] ) ) : ?>
							<div class="hot"><?php echo esc_html( ! empty( $tbl['badge'] ) ? $tbl['badge'] : __( 'Hot', 'bpricing' ) ); ?></div>
						<?php endif; ?>
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
										<?php foreach ( $tbl['features'] as $feat ) :
											$is_dis = isset( $feat['enabled'] ) && false === $feat['enabled'];
										?>
											<li class="<?php echo $is_dis ? 'disable' : ''; ?>"><?php echo esc_html( $feat['text'] ?? '' ); ?></li>
										<?php endforeach; ?>
									</ul>
								</div>
							<?php endif; ?>
							<div class="pricingTable-signup">
								<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"<?php echo $btn_target; ?>><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
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
				<?php foreach ( $tables as $i => $tbl ) :
					$scheme     = bppt_get_effective_scheme( 'demo-3', $tbl['colorScheme'] ?? '', $i );
					$btn_target = ! empty( $tbl['btnNewTab'] ) ? ' target="_blank" rel="noopener noreferrer"' : '';
				?>
					<div class="pricingTable <?php echo esc_attr( trim( $scheme . ' bppt-plan-' . $i ) ); ?>">
						<?php if ( ! empty( $tbl['isFeatured'] ) ) : ?>
							<div class="hot"><?php echo esc_html( ! empty( $tbl['badge'] ) ? $tbl['badge'] : __( 'Hot', 'bpricing' ) ); ?></div>
						<?php endif; ?>
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
									<?php foreach ( $tbl['features'] as $feat ) :
										$is_dis = isset( $feat['enabled'] ) && false === $feat['enabled'];
									?>
										<li class="<?php echo $is_dis ? 'disable' : ''; ?>"><?php echo esc_html( $feat['text'] ?? '' ); ?></li>
									<?php endforeach; ?>
								</ul>
							</div>
						<?php endif; ?>
						<div class="pricingTable-signup-three">
							<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"<?php echo $btn_target; ?>><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<?php
			break;

		case 'demo-4':
			wp_enqueue_style( 'bppt_pt_style_4' );
			$cols_class = 'columns-' . ( $columns['desktop'] ?? 3 ) . ' columns-tablet-' . ( $columns['tablet'] ?? 2 ) . ' columns-mobile-' . ( $columns['mobile'] ?? 1 );
			?>
			<div class="priceTableBGBefore <?php echo esc_attr( $cols_class ); ?>">
				<?php foreach ( $tables as $i => $tbl ) :
					$scheme     = bppt_get_effective_scheme( 'demo-4', $tbl['colorScheme'] ?? '', $i );
					$btn_target = ! empty( $tbl['btnNewTab'] ) ? ' target="_blank" rel="noopener noreferrer"' : '';
				?>
					<div class="pricingTableFour <?php echo esc_attr( trim( $scheme . ' bppt-plan-' . $i ) ); ?>">
						<div class="pricingContent">
							<?php if ( ! empty( $tbl['isFeatured'] ) ) : ?>
								<div class="hot"><?php echo esc_html( ! empty( $tbl['badge'] ) ? $tbl['badge'] : __( 'Hot', 'bpricing' ) ); ?></div>
							<?php endif; ?>
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
									<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"<?php echo $btn_target; ?>><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
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
			$cols_class = 'columns-' . ( $columns['desktop'] ?? 3 ) . ' columns-tablet-' . ( $columns['tablet'] ?? 2 ) . ' columns-mobile-' . ( $columns['mobile'] ?? 1 );
			?>
			<div class="priceTableGradient <?php echo esc_attr( $cols_class ); ?>">
				<?php foreach ( $tables as $i => $tbl ) :
					$scheme     = bppt_get_effective_scheme( 'demo-5', $tbl['colorScheme'] ?? '', $i );
					$btn_target = ! empty( $tbl['btnNewTab'] ) ? ' target="_blank" rel="noopener noreferrer"' : '';
				?>
					<div class="pricingTable <?php echo esc_attr( trim( $scheme . ' bppt-plan-' . $i ) ); ?>">
						<?php if ( ! empty( $tbl['isFeatured'] ) ) : ?>
							<div class="hot"><?php echo esc_html( ! empty( $tbl['badge'] ) ? $tbl['badge'] : __( 'Hot', 'bpricing' ) ); ?></div>
						<?php endif; ?>
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
							<a href="<?php echo esc_url( $tbl['btnLink'] ?? '#' ); ?>"<?php echo $btn_target; ?>><?php echo esc_html( $tbl['btnText'] ?? __( 'Choose Plan', 'bpricing' ) ); ?></a>
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
