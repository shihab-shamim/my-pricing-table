<?php
if (! class_exists('BPPTAdmin')) {
    class BPPTAdmin
    {
        public function __construct()
        {
          add_action('init', [__CLASS__, "register_cpt"]);
          add_action('admin_menu', [__CLASS__, 'pricing_table_admin']);
        }

        public static function register_cpt() {
            $isPricingTableActiveLicence = true;
            if(function_exists("bptb_fs") && bptb_fs()->can_use_premium_code()) {
                $isPricingTableActiveLicence = false;
            }

            $labels = [
                'name'           => __('Pricing Table', 'bpricing'),
                'menu_name'      => ((is_plugin_active("b-pricing-table/index.php") || is_plugin_active("b-pricing-table-pro/index.php") ) && $isPricingTableActiveLicence) ? __('Pricing Table - Lagacy', 'bpricing')  :  __('Pricing Table', 'bpricing'),
                'name_admin_bar' => __('Pricing Table', 'bpricing'),
                'add_new'        => __('Add New Pricing Table', 'bpricing'),
                'add_new_item'   => __('Add New Pricing Table ', 'bpricing'),
                'new_item'       => __('New Pricing Table ', 'bpricing'),
                'edit_item'      => __('Edit Pricing Table ', 'bpricing'),
                'view_item'      => __('View Pricing Table ', 'bpricing'),
                // 'all_items'      => is_plugin_active('b-pricing-table-pro/index.php') ?__('My Pricing Table - Legacy', 'bpricing')  :__('All Pricing Tables', 'bpricing'),
                'all_items'      => __('All Pricing Tables', 'bpricing'),
                'not_found'      => __('Sorry, we couldn\'t find the Feed you are looking for.', 'bpricing'),
            ];
            $args = [
                'labels'          => $labels,
                'description'     => __('Pricing Table Options.', 'bpricing'),
                'public'          => false,
                'show_ui'         => true,
                // 'show_in_menu'    => is_plugin_active('b-pricing-table-pro/index.php')? 'edit.php?post_type=bptb' : true,
                'show_in_menu'    => true,
                'menu_icon'       => 'dashicons-list-view',
                'query_var'       => true,
                'rewrite'         => ['slug' => 'my-pricing-table'],
                'capability_type' => 'post',
                'has_archive'     => false,
                'hierarchical'    => false,
                'menu_position'   => 20,
                'supports'        => ['title'],
                'show_in_rest'    => true,
            ];
            register_post_type('bppt-pricing-table', $args);
        }

        public static function pricing_table_admin() {
            add_submenu_page(
                'edit.php?post_type=bppt-pricing-table', //aey slug name ta index.php aer menu aer slug ta hobe
                __('Help - bPlugins', 'bpricing'),
                __('Help And Demo', 'bpricing'),
                'manage_options',
                'my-pricing-table',
                [__CLASS__, 'bppt_render_dashboard_page']
            );
        }

        public static function bppt_render_dashboard_page(){
          ?>
          <div id='bpptDashboard' data-info='<?php echo esc_attr( wp_json_encode( [
                        'version' => BPPT_PLUGIN_VERSION,
                        'isPremium' => false,
                        'adminUrl' => admin_url(),
                    ] ) ); ?>'></div>
          <?php
        }
    }
    new BPPTAdmin();
}
