# WordPress Hooks, Filters & Activation

## Plugin Initialization

**File:** `pricing-table.php`

### Boot Sequence

1. Define constants (`BPPT_PLUGIN_DIR`, `BPPT_PLUGIN_PATH`, `BPPT_PLUGIN_VERSION`)
2. Require CSF config: `inc/csf/csf-config.php`
3. Require metabox options: `inc/metabox-options.php`
4. Require and instantiate main class: `new BPPTPricingTable()`
5. Register activation hook
6. Register admin_init redirect

## All Hooks & Filters

### Actions

| Hook | Callback | Class | Purpose |
|---|---|---|---|
| `plugins_loaded` | `load_dependencies` | BPPTPricingTable | Loads `class-bpptCPT.php` |
| `init` | `register_cpt` | BPPTAdmin | Registers `bppt-pricing-table` CPT |
| `admin_menu` | `pricing_table_admin` | BPPTAdmin | Adds "Help And Demo" submenu |
| `admin_enqueue_scripts` | `admin_enqueue_scripts` | BPPTPricingTable | Loads dashboard JS/CSS conditionally |
| `admin_enqueue_scripts` | `bppt_admin_style` | BPPTPricingTable | Loads `custom-style.css` globally |
| `wp_enqueue_scripts` | `bppt_register_assets` | BPPTPricingTable | Registers (not enqueues) frontend CSS |
| `admin_head-post.php` | `bppt_hide_publishing_actions` | BPPTPricingTable | Hides publish metabox extras |
| `admin_head-post-new.php` | `bppt_hide_publishing_actions` | BPPTPricingTable | Same for new posts |
| `edit_form_after_title` | `bppt_shortcode_area` | BPPTPricingTable | Shows shortcode after title |
| `admin_notices` | `bppt_admin_notice` | BPPTPricingTable | "Checking Notice" on plugins page |
| `plugin_loaded` | `bppt_textdomain` | BPPTPricingTable | Loads translations |
| `admin_init` | `do_redirect_to_dashboard` | BPPTPricingTable | Post-activation redirect |

### Filters

| Hook | Callback | Class | Purpose |
|---|---|---|---|
| `post_row_actions` | `bppt_remove_row_actions` | BPPTPricingTable | Removes View/Quick Edit |
| `post_updated_messages` | `bppt_updated_messages` | BPPTPricingTable | "Shortcode updated" message |
| `gettext` | `bppt_change_publish_button` | BPPTPricingTable | Changes "Publish" → "Save" |
| `admin_footer_text` | `bppt_admin_footer` | BPPTPricingTable | Review request in footer |
| `manage_bppt-pricing-table_posts_columns` | `bppt_columns_head_only_pricing` | BPPTPricingTable | Adds ShortCode column |

### Custom Column Action

| Hook | Callback | Purpose |
|---|---|---|
| `manage_bppt-pricing-table_posts_custom_column` | `bppt_columns_content_only_pricing` | Renders shortcode in column |

### Shortcode

| Tag | Callback | Class |
|---|---|---|
| `[bp-table]` | `bppt_bprincing_table` | BPPTPricingTable |

## Activation Redirect

**Hook:** `register_activation_hook`  
**Callback:** `BPPTPricingTable::activation_redirect()`

### How It Works

1. **On Activation:** Sets a transient option `bppt_do_activation_redirect = true`
2. **On Next Admin Load** (`admin_init`): Checks for the option
3. If found and not network admin/multi-activate:
   - Deletes the option
   - Redirects to: `edit.php?post_type=bppt-pricing-table&page=my-pricing-table#/welcome`
4. This takes the user directly to the React dashboard welcome page

### Legacy Plugin Deactivation

On activation, if `b-pricing-table-pro/index.php` is active, it is **deactivated**. This prevents conflicts with the pro version of the older pricing table plugin.

## Dependency Loading

**Method:** `BPPTPricingTable::load_dependencies()`  
**Hook:** `plugins_loaded`

Loads `includes/class-bpptCPT.php` which defines the `BPPTAdmin` class and immediately instantiates it. This two-step loading ensures:
1. CSF and metabox options are loaded first (from `pricing-table.php`)
2. The CPT is registered on `init` (from `class-bpptCPT.php`)
3. The main functionality hooks are set up (from `class-bpptPricingTable.php` constructor)

## Text Domain

**Domain:** `bpricing`  
**Hook:** `plugin_loaded`  
**Method:** `load_textdomain('bpricing', BPPT_PLUGIN_DIR . '/languages')`

> **Note:** The `languages` directory doesn't currently exist in the project. The text domain is used throughout the PHP code for `__()` and `esc_html__()` calls, making the plugin translation-ready.
