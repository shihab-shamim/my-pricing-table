<?php

/**
 * Plugin Name:       My Pricing Table
 * Plugin URI:        https://wordpress.org/plugins/my-pricing-table
 * Description:       Make beautiful Pricing table with this plugin.
 * Version:           2.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            bPlugins
 * Author URI:        http://abuhayatpolash.com
 * Text Domain:       bpricing
 */

//  Initialize Plugin
define('BPPT_PLUGIN_DIR', plugin_dir_url(__FILE__));
define('BPPT_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('BPPT_PLUGIN_VERSION', '2.0.0');

// Option panel
require_once 'inc/csf/csf-config.php';
require_once 'inc/metabox-options.php';

//admin file includes
require_once BPPT_PLUGIN_PATH . '/includes/class-bpptPricingTable.php';
new BPPTPricingTable();

// Redirect to Dashboard After Activation
register_activation_hook(__FILE__, ['BPPTPricingTable', 'activation_redirect']);
add_action('admin_init', ['BPPTPricingTable', 'do_redirect_to_dashboard']);
