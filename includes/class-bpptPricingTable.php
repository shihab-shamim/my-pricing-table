<?php
if(!class_exists('BPPTPricingTable')) {
  class BPPTPricingTable {
    public function __construct() {
      add_action('plugins_loaded', [__CLASS__, "load_dependencies"]);
      add_action('init', [__CLASS__, 'bppt_register_block']);
      add_action('admin_enqueue_scripts', [__CLASS__, 'admin_enqueue_scripts']);
      add_action('admin_enqueue_scripts', [__CLASS__, 'bppt_admin_style']);
      add_action('wp_enqueue_scripts', [__CLASS__, 'bppt_register_assets']);
      add_action('enqueue_block_editor_assets', [__CLASS__, 'bppt_block_editor_assets']);
      add_shortcode('bp-table', [__CLASS__, 'bppt_bprincing_table']);
      if (is_admin()) {
        add_filter('post_row_actions', [__CLASS__, 'bppt_remove_row_actions'], 10, 2);
      }
      add_action('admin_head-post.php', [__CLASS__, 'bppt_hide_publishing_actions']);
      add_action('admin_head-post-new.php', [__CLASS__, 'bppt_hide_publishing_actions']);
      add_filter('post_updated_messages', [__CLASS__, 'bppt_updated_messages']);
      add_filter('gettext', [__CLASS__, 'bppt_change_publish_button'], 10, 2);
      add_filter('admin_footer_text', [__CLASS__, 'bppt_admin_footer']);
      add_filter('manage_bppt-pricing-table_posts_columns', [__CLASS__, 'bppt_columns_head_only_pricing'], 10);
      add_action('manage_bppt-pricing-table_posts_custom_column', [__CLASS__, 'bppt_columns_content_only_pricing'], 10, 2);
      add_action('edit_form_after_title', [__CLASS__, 'bppt_shortcode_area']);
      add_action('admin_notices', [__CLASS__, 'bppt_admin_notice']);
      add_action('plugin_loaded', [__CLASS__, 'bppt_textdomain']);

    }



    public static function load_dependencies() {
      require_once BPPT_PLUGIN_PATH . "includes/class-bpptCPT.php";

    }

    public static  function bppt_textdomain(){
      load_textdomain('bpricing', BPPT_PLUGIN_DIR . '/languages');
    }

    public static function  admin_enqueue_scripts($screen) {
        global $pagenow;
        if ('bppt-pricing-table_page_b-pricing-table-block' === $screen) {
            $asset_path = BPPT_PLUGIN_PATH . 'build/admin/dashboard.asset.php';
            $asset_file = file_exists( $asset_path ) ? include $asset_path : null;
            $deps       = ( is_array( $asset_file ) && ! empty( $asset_file['dependencies'] ) ) ? $asset_file['dependencies'] : [ 'react', 'react-dom' ];
            $ver        = ( is_array( $asset_file ) && ! empty( $asset_file['version'] ) ) ? $asset_file['version'] : BPPT_PLUGIN_VERSION;

            wp_enqueue_script('bppt-admin-script', BPPT_PLUGIN_DIR . 'build/admin/dashboard.js', $deps, $ver, true);
            wp_enqueue_style('bppt-dashboard-style', BPPT_PLUGIN_DIR . 'build/admin/dashboard.css', [], $ver);
        }
        //!Load CSS/JS for post type list or edit page
        if ('edit.php' === $pagenow || 'post.php' === $pagenow) {
            $post_asset_path = BPPT_PLUGIN_PATH . 'build/admin-post.asset.php';
            $post_asset      = file_exists( $post_asset_path ) ? include $post_asset_path : null;
            $post_deps       = ( is_array( $post_asset ) && ! empty( $post_asset['dependencies'] ) ) ? $post_asset['dependencies'] : [];
            $post_ver        = ( is_array( $post_asset ) && ! empty( $post_asset['version'] ) ) ? $post_asset['version'] : BPPT_PLUGIN_VERSION;

            wp_enqueue_style('bppt-admin-post-style', BPPT_PLUGIN_DIR . 'build/admin-post.css', [], $post_ver);
            wp_enqueue_script('bppt-admin-post-script', BPPT_PLUGIN_DIR . 'build/admin-post.js', $post_deps, $post_ver, true);
        }
    }

    public static function bppt_admin_style(){
      wp_register_style('bppt-custom-style', BPPT_PLUGIN_DIR . '/public/css/custom-style.css');
      wp_enqueue_style('bppt-custom-style');
    }

    public static function bppt_register_assets() {
      wp_register_style('google_font',     'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;600&family=Roboto:wght@400;500;700&family=Rubik:wght@400;500&display=swap', [], BPPT_PLUGIN_VERSION);
      wp_register_style('bppt_pt_style_1', BPPT_PLUGIN_DIR . 'public/css/pricing-table-1.css');
      wp_register_style('bppt_pt_style_2', BPPT_PLUGIN_DIR . 'public/css/pricing-table-2.css');
      wp_register_style('bppt_pt_style_3', BPPT_PLUGIN_DIR . 'public/css/pricing-table-3.css');
      wp_register_style('bppt_pt_style_4', BPPT_PLUGIN_DIR . 'public/css/pricing-table-4.css');
      wp_register_style('bppt_pt_style_5', BPPT_PLUGIN_DIR . 'public/css/pricing-table-5.css');
    }

    public static function bppt_register_block() {
      if (function_exists('register_block_type') && file_exists(BPPT_PLUGIN_PATH . 'build/block.json')) {
        register_block_type(BPPT_PLUGIN_PATH . 'build');
      }
    }

    public static function bppt_block_editor_assets() {
      self::bppt_register_assets();
      wp_enqueue_style('google_font');
      wp_enqueue_style('bppt_pt_style_1');
      wp_enqueue_style('bppt_pt_style_2');
      wp_enqueue_style('bppt_pt_style_3');
      wp_enqueue_style('bppt_pt_style_4');
      wp_enqueue_style('bppt_pt_style_5');

      $posts = get_posts([
        'post_type'   => 'bppt-pricing-table',
        'numberposts' => -1,
        'post_status' => 'any',
      ]);
      $tables = array_map(function ($p) {
        return [
          'id'    => $p->ID,
          'title' => $p->post_title ? $p->post_title : sprintf(__('Table #%d', 'bpricing'), $p->ID),
        ];
      }, $posts);

      wp_add_inline_script(
        'bppt-pricing-table-editor-script',
        'window.bpptTables = ' . wp_json_encode($tables) . ';',
        'before'
      );
    }

    public static function bppt_bprincing_table($atts){
      $a = shortcode_atts(array(
        'id' => null,
      ), $atts);
      ob_start(); ?>

      <?php
      // Pricing table meta data
      $pricing_metas = get_post_meta($a['id'], '_bpptable_', true);
      ?>

      <?php if (!empty($pricing_metas) && is_array($pricing_metas)):

        $myPricingMetas  = $pricing_metas['pricing_table'] ? $pricing_metas['pricing_table'] : array();

      ?>

        <?php if ($pricing_metas['pricing_demo'] === 'demo-1'):
          wp_enqueue_style('bppt_pt_style_1');
          wp_enqueue_style('google_font');
        ?>
          <div class="bppt_pricing">
            <?php

            foreach ($myPricingMetas as $pricing_meta):
              $color_scheme1 = $pricing_meta['plan_color_opt1'] ? $pricing_meta['plan_color_opt1'] : '';
            ?>
              <!--price tab-->
              <div class="plan <?php echo esc_attr($color_scheme1); ?>">
                <div class="plan-inner">

                  <?php if ($pricing_meta['plan_recommended'] === '1'): ?>
                    <div class="hot"><?php echo esc_html($pricing_meta['plan_recommded_text']); ?></div>
                  <?php endif; ?>

                  <div class="plan-entry-title">
                    <h3><?php echo esc_html($pricing_meta['plan_name']); ?></h3>
                    <div class="price"><?php echo esc_html($pricing_meta['plan_currency']); ?><?php echo esc_html($pricing_meta['plan_price']); ?><span>/<?php echo esc_html($pricing_meta['plan_price_unit']); ?></span>
                    </div>
                  </div>

                  <?php if (isset($pricing_meta['plan_features'])): ?>
                    <div class="plan-entry-content">
                      <ul>
                        <?php foreach ($pricing_meta['plan_features'] as $features_item): ?>
                          <li><?php echo esc_html($features_item['feat_item']); ?></li>
                        <?php endforeach; ?>
                      </ul>
                    </div>
                  <?php endif; ?>

                  <div class="bttn">
                    <a href="<?php echo esc_url($pricing_meta['plan_btn_link']); ?>"><?php echo esc_html($pricing_meta['plan_btn_text']); ?></a>
                  </div>

                </div>
              </div>
              <!-- end of price tab-->
            <?php endforeach; ?>


          </div>
        <?php endif; ?>

        <!-- Pricing table demo-2 -->
        <?php if ($pricing_metas['pricing_demo'] === 'demo-2'):
          wp_enqueue_style('bppt_pt_style_2'); ?>

          <div class="bppt_container">

            <?php foreach ($myPricingMetas as $pricing_meta):
              $color_scheme2 = $pricing_meta['plan_color_opt2'] ? $pricing_meta['plan_color_opt2'] : '';   ?>

              <div class="pricingTableTwo <?php echo esc_attr($color_scheme2); ?>">
                <div>
                  <div class="pricingTable-header">
                    <h3 class="title"><?php echo esc_html($pricing_meta['plan_name']); ?></h3>
                  </div>
                  <div class="price-value"><?php echo esc_html($pricing_meta['plan_currency']); ?><?php echo esc_html($pricing_meta['plan_price']); ?><span>/<?php echo esc_html($pricing_meta['plan_price_unit']); ?></span>
                  </div>

                  <?php if (!empty($pricing_meta['plan_features'])): ?>
                    <div class="pricing-content">
                      <ul>
                        <?php foreach ($pricing_meta['plan_features'] as $features_item): ?>
                          <li><?php echo esc_html($features_item['feat_item']); ?></li>
                        <?php endforeach; ?>
                      </ul>
                    </div>
                  <?php endif; ?>

                  <div class="pricingTable-signup">
                    <a href="<?php echo esc_url($pricing_meta['plan_btn_link']); ?>"><?php echo esc_html($pricing_meta['plan_btn_text']); ?></a>
                  </div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
        <!--End Pricing table demo-2 -->

        <!--Pricing table demo-3 -->
        <?php if ($pricing_metas['pricing_demo'] === 'demo-3'):
          wp_enqueue_style('bppt_pt_style_3'); ?>

          <div class="bppt_table3">
            <?php foreach ($myPricingMetas as $pricing_meta):
              $color_scheme3 = $pricing_meta['plan_color_opt3'] ? $pricing_meta['plan_color_opt3'] : '';
            ?>

              <div class="pricingTable">
                <div class="pricingTable-header">
                  <h3 class="title"><?php echo esc_html($pricing_meta['plan_name']); ?></h3>
                </div>

                <div class="price-value">
                  <span class="amount"><?php echo esc_html($pricing_meta['plan_currency']); ?><?php echo esc_html($pricing_meta['plan_price']); ?></span>
                  <span class="duration"><?php echo esc_html($pricing_meta['plan_price_unit']); ?></span>
                </div>

                <div class="pricing-content">
                  <ul>
                    <?php foreach ($pricing_meta['plan_features'] as $features_item): ?>
                      <li><?php echo esc_html($features_item['feat_item']); ?></li>
                    <?php endforeach; ?>
                  </ul>

                </div>

                <div class="pricingTable-signup-three">
                  <a href="<?php echo esc_url($pricing_meta['plan_btn_link']); ?>"><?php echo esc_html($pricing_meta['plan_btn_text']); ?></a>
                </div>
              </div>

            <?php endforeach; ?>
          </div>

        <?php endif; ?>
        <!--End Pricing table demo-3 -->


        <!--Pricing table demo-4 -->
        <div class='priceTableBGBefore columns-3 columns-tablet-2 columns-mobile-1'>

          <?php if ($pricing_metas['pricing_demo'] === 'demo-4'):
            wp_enqueue_style('bppt_pt_style_4'); ?>

            <?php foreach ($myPricingMetas as $pricing_meta):
              $color_scheme4 = $pricing_meta['plan_color_opt4'] ? $pricing_meta['plan_color_opt4'] : '';

            ?>
              <div class='pricingTableFour <?php echo esc_attr($color_scheme4); ?>'>
                <div class='pricingContent'>
                  <div>
                    <div class='pricingHeader'>
                      <h3 class='title'><?php echo esc_html($pricing_meta['plan_name']); ?></h3>
                    </div>
                    <?php if (!empty($pricing_meta['plan_features'])): ?>

                      <ul class='pricingFeatures'>
                        <?php foreach ($pricing_meta['plan_features'] as $features_item): ?>
                          <?php if ($features_item['feat_item_chk'] === '1'): ?>
                            <li><?php echo esc_html($features_item['feat_item']); ?></li>
                          <?php else: ?>
                            <li class='disable'><?php echo esc_html($features_item['feat_item']); ?></li>
                          <?php endif ?>
                        <?php endforeach; ?>
                      </ul>

                    <?php endif; ?>
                  </div>
                  <div>
                    <div class='pricingValue'><span class='amount'><?php echo wp_kses_post($pricing_meta['plan_currency']); ?><?php echo esc_html($pricing_meta['plan_price']); ?></span>
                      <span class='duration'><?php echo esc_html($pricing_meta['plan_price_unit']); ?></span>
                    </div>
                    <div class='pricingSignUp'>
                      <a href="<?php echo esc_url($pricing_meta['plan_btn_link']); ?>"><?php echo esc_html($pricing_meta['plan_btn_text']); ?></a>
                    </div>
                  </div>
                </div>
              </div><!-- Pricing Table -->
            <?php endforeach; ?>

          <?php endif; ?>
          <!--End Pricing table demo-4 -->

        </div>
        <!-- Pricing Table Container-->


        <div class='priceTableGradient columns-3 columns-tablet-2 columns-mobile-1'>
          <!--Pricing table demo-5 -->
          <?php if ($pricing_metas['pricing_demo'] === 'demo-5'):
            wp_enqueue_style('bppt_pt_style_5');
          ?>

            <?php foreach ($myPricingMetas as $pricing_meta):
              $color_scheme5 = $pricing_meta['plan_color_opt5'] ? $pricing_meta['plan_color_opt5'] : ''; ?>

              <div class='pricingTable <?php echo esc_attr($color_scheme5); ?>'>
                <div>
                  <div class='pricingHeader'>
                    <h3 class='title'><?php echo esc_html($pricing_meta['plan_name']); ?></h3>
                  </div>
                  <div class='pricingValue'>
                    <span class='amount'><?php echo esc_html($pricing_meta['plan_currency']); ?><?php echo esc_html($pricing_meta['plan_price']); ?></span>
                    <span class='duration'>/<?php echo esc_html($pricing_meta['plan_price_unit']); ?></span>
                  </div>

                  <?php if (!empty($pricing_meta['plan_features'])): ?>
                    <ul class='pricingFeatures'>

                      <?php foreach ($pricing_meta['plan_features'] as $features_item): ?>
                        <?php if ($features_item['feat_item_chk'] === '1'): ?>
                          <li><?php echo esc_html($features_item['feat_item']); ?></li>
                        <?php else: ?>
                          <li class='disable'><?php echo esc_html($features_item['feat_item']); ?></li>
                        <?php endif ?>
                      <?php endforeach; ?>

                    </ul>
                  <?php endif; ?>
                </div>

                <div class='pricingSignUp'>
                  <a href="<?php echo esc_url($pricing_meta['plan_btn_link']); ?>"><?php echo esc_html($pricing_meta['plan_btn_text']); ?></a>
                </div>
              </div>
            <?php endforeach; ?>

          <?php endif; ?>
          <!--End Pricing table demo-5 -->
        </div>

      <?php endif; ?>

      <?php
      return ob_get_clean();
    }

    public static function bppt_remove_row_actions($idtions){
      global $post;
      if ($post->post_type == 'bppt-pricing-table') {
        unset($idtions['view']);
        unset($idtions['inline hide-if-no-js']);
      }
      return $idtions;
    }

    // HIDE everything in PUBLISH metabox except Move to Trash & PUBLISH button
    public static function bppt_hide_publishing_actions(){
      $my_post_type = 'bppt-pricing-table';
      global $post;
      if ($post->post_type == $my_post_type) {
      ?>
        <style type="text/css">
          #misc-publishing-actions,
          #minor-publishing-actions {
            display: none;
          }
        </style>
      <?php
      }
    }

    public static function bppt_updated_messages($messages){
      $messages['bppt-pricing-table'][1] = __('Shortcode updated ', 'bpricing');
      return $messages;
    }

    public static function bppt_change_publish_button($translation, $text){
      if ('bppt-pricing-table' == get_post_type()) {
        if ($text == 'Publish') {
          return 'Save';
        }
      }

      return $translation;
    }

    public static function bppt_admin_footer($text){
      if ('bppt-pricing-table' == get_post_type()) {
        $url = 'https://wordpress.org/support/plugin/my-pricing-table/reviews/?filter=5#new-post';
        $text = sprintf(__('If you like <strong> My Pricing Table </strong> please leave us a <a href="%s" target="_blank">&#9733;&#9733;&#9733;&#9733;&#9733;</a> rating. Your Review is very important to us as it helps us to grow more. ', 'bpricing'), $url);
      }

      return $text;
    }

    //! CREATE TWO FUNCTIONS TO HANDLE THE COLUMN
    public static function bppt_columns_head_only_pricing($defaults){
      unset($defaults['date']);
      $defaults['shortCode'] = 'ShortCode';
      $defaults['date'] = 'Date';
      return $defaults;
    }

    public static function bppt_columns_content_only_pricing($column_name, $post_ID){
      if ($column_name == 'shortCode') {
        //! show content of 'directors_name' column
      //  echo '<input onClick="this.select();" value="[bp-table id=' . esc_attr($post_ID) . ']" >';
        echo '<div class="bpptAdminShortcode" id="bpptAdminShortcode-' . esc_attr( $post_ID ) . '">
          <input value="[bp-table id=' . esc_attr( $post_ID ) . ']" onclick="copybpptAdminShortcode(\'' . esc_attr( $post_ID ) . '\')">
            <span class="tooltip">' . esc_html__( 'Copy To Clipboard', 'bpricing' ) . '</span>
        </div>';

      }
    }

    public static function bppt_shortcode_area(){
      global $post;
      if ($post->post_type == 'bppt-pricing-table'): ?>
        <div class="shortcode_gen">
          <label for="bppt_shortcode"><?php esc_html_e('Copy this shortcode and paste it into your post, page, or text widget content', 'bpricing') ?>:</label>

          <span>
            <input type="text" id="bppt_shortcode" onfocus="this.select();" readonly="readonly" value="[bp-table id=<?php echo esc_attr($post->ID); ?>]" />
          </span>

        </div>
      <?php endif;
    }

    public static function bppt_admin_notice() {
      global $pagenow;
      if ($pagenow === 'plugins.php') {
        ?>
          <div class="notice notice-success is-dismissible">
            <h2><?php esc_html_e('Checking Notice', 'bpricing'); ?></h2>
          </div>
        <?php
      }
    }

    // redirected function
    public static function activation_redirect() {
      add_option('bppt_do_activation_redirect', true);
             if (is_plugin_active('b-pricing-table-pro/index.php')) {
          deactivate_plugins('b-pricing-table-pro/index.php');
       }
    }
    public static function do_redirect_to_dashboard() {
      if (get_option('bppt_do_activation_redirect')) {
          delete_option('bppt_do_activation_redirect');
          if (!is_network_admin() &&!isset($_GET['activate-multi'])) {
              wp_safe_redirect(admin_url('edit.php?post_type=bppt-pricing-table&page=b-pricing-table-block#/welcome'));
            exit;
          }
      }
    }
  }
}











    // public static function activation_redirect() {
    //   add_option('bppt_do_activation_redirect', true);
    //!ata korle my-pricing-table active thakele b-pricing-table ke  deactivate korbe
    //    if (is_plugin_active('b-pricing-table-pro/index.php')) {
    //       deactivate_plugins('b-pricing-table-pro/index.php');
    //    }
    // }
