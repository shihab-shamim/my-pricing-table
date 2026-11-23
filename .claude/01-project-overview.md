# Project Overview — My Pricing Table

## Plugin Identity

| Field | Value |
|---|---|
| **Plugin Name** | My Pricing Table |
| **Version** | 1.0.1 |
| **Slug** | `my-pricing-table` |
| **Text Domain** | `bpricing` |
| **Author** | bPlugins (Abu Hayat Polash) |
| **License** | GPLv2 or later |
| **WordPress Requires** | 5.2+ |
| **PHP Requires** | 7.2+ |
| **Tested Up To** | WP 6.8 |
| **Plugin URI** | https://wordpress.org/plugins/my-pricing-table |
| **Live Demo** | https://pricing-table.bplugins.com |

## What It Does

A lightweight WordPress plugin that lets users **create and embed responsive pricing tables** via shortcodes. Users configure pricing plans through a custom post type editor backed by the Codestar Framework (CSF), select from 5 built-in visual templates, choose color schemes, and paste the generated `[bp-table id=XX]` shortcode anywhere.

## Key Features

1. **5 Built-in Templates** — Each with unique CSS design (card-based, ribbon, gradient, modern card, arrow-banner)
2. **Color Scheme Selector** — Each template offers its own palette of 2–4 color schemes
3. **Custom Currency Symbols** — `$`, `¥`, `€`, `৳`, `﷼`
4. **Custom CTA (Call-to-Action)** — Configurable button text and link per plan
5. **Feature List Management** — Repeatable group field for adding unlimited feature items
6. **Recommended/Featured Badge** — Toggle "Hot"/"Featured" label on a plan (Template 1)
7. **Enable/Disable Features** — Checkmark or strikethrough for each feature (Templates 4 & 5)
8. **Shortcode System** — `[bp-table id=XX]` with copy-to-clipboard in admin
9. **React Admin Dashboard** — Welcome page, demos gallery, and pricing/upsell page
10. **Activation Redirect** — Automatically navigates to the dashboard after plugin activation
11. **Responsive Design** — All templates include media queries for mobile, tablet, and desktop

## Plugin Constants

Defined in `pricing-table.php`:

| Constant | Value |
|---|---|
| `BPPT_PLUGIN_DIR` | Plugin URL base (for enqueueing assets) |
| `BPPT_PLUGIN_PATH` | Filesystem path to plugin root |
| `BPPT_PLUGIN_VERSION` | `'1.0.1'` |

## Freemius Integration (Planned)

The `data.js` file contains Freemius product data:
- **Product ID**: 19836
- **Plan ID**: 32912
- **Public Key**: `pk_a175d9d65767cc56ca88c39e031a9`

This suggests a future premium version with checkout powered by Freemius, though the current release is free-only.

## Changelog

| Version | Changes |
|---|---|
| 1.0.1 | Updated Codestar Framework |
| 1.0.0 | Initial Release |
