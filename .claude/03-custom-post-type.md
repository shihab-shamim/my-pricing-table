# Custom Post Type — `bppt-pricing-table`

## Registration

**File:** `includes/class-bpptCPT.php` → `BPPTAdmin::register_cpt()`  
**Hook:** `init`

### Post Type Arguments

| Parameter | Value |
|---|---|
| **Post Type Slug** | `bppt-pricing-table` |
| **Public** | `false` (not publicly queryable) |
| **Show UI** | `true` (visible in admin) |
| **Menu Icon** | `dashicons-list-view` |
| **Menu Position** | 20 |
| **Supports** | `['title']` only (no editor, no thumbnail) |
| **Has Archive** | `false` |
| **Hierarchical** | `false` |
| **Capability Type** | `post` |
| **Rewrite Slug** | `my-pricing-table` |

### Labels

| Key | Value |
|---|---|
| `name` | Pricing Table |
| `add_new` | Add New Pricing Table |
| `edit_item` | Edit Pricing Table |
| `view_item` | View Pricing Table |
| `all_items` | All Pricing Tables |
| `not_found` | Sorry, we couldn't find the Feed you are looking for. |

### Legacy Compatibility

The CPT label changes to **"Pricing Table - Lagacy"** (sic) when the `b-pricing-table` or `b-pricing-table-pro` plugin is also active and has an active licence. This prevents naming conflicts with the newer block-based pricing table plugin from the same author.

## Admin Submenu

**Method:** `BPPTAdmin::pricing_table_admin()`  
**Hook:** `admin_menu`

Adds a submenu page under the CPT:

| Parameter | Value |
|---|---|
| **Parent Slug** | `edit.php?post_type=bppt-pricing-table` |
| **Page Title** | Help - bPlugins |
| **Menu Title** | Help And Demo |
| **Capability** | `manage_options` |
| **Menu Slug** | `b-pricing-table-block` |
| **Callback** | `bppt_render_dashboard_page()` |

### Dashboard Page Render

The callback outputs a single `<div id='bpptDashboard'>` element with a `data-info` attribute containing JSON-encoded configuration:

```php
[
    'version'   => BPPT_PLUGIN_VERSION,  // '1.0.1'
    'isPremium' => false,
    'adminUrl'  => admin_url(),
]
```

This div is hydrated by the React dashboard app (`build/admin/dashboard.js`).

## Admin Column Customization

**File:** `includes/class-bpptPricingTable.php`

### ShortCode Column

A custom "ShortCode" column is added to the CPT post list table:

- **Hook:** `manage_bppt-pricing-table_posts_columns` → adds `shortCode` column
- **Hook:** `manage_bppt-pricing-table_posts_custom_column` → renders clickable shortcode input with copy tooltip

Each row shows: `[bp-table id=XX]` as a styled clickable input that copies to clipboard on click.

### Row Actions Cleanup

- **Removes:** "View" and "Quick Edit" row actions (since posts aren't publicly viewable)
- **Hook:** `post_row_actions`

### Publishing Metabox

- Hides `#misc-publishing-actions` and `#minor-publishing-actions` via inline CSS
- Changes "Publish" button text to **"Save"**
- Shows custom updated message: "Shortcode updated"

### Shortcode Display (Editor)

After the post title in the editor, displays a styled block:
> "Copy this shortcode and paste it into your post, page, or text widget content"
> `[bp-table id=XX]` (read-only, selects-on-focus)

### Admin Footer

When viewing the CPT, replaces the default WordPress admin footer with a review request linking to the plugin's WordPress.org review page.

### Admin Notice

Displays a "Checking Notice" success notice on the `plugins.php` page. (This appears to be a development placeholder.)
