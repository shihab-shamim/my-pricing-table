# Codestar Framework (CSF) Integration

## Overview

The plugin embeds the **Codestar Framework v2.2.6**, a WordPress options framework for creating admin option panels, metaboxes, and other UI components.

**Location:** `inc/csf/`  
**Bootstrap:** `inc/csf/csf-config.php` → loads `classes/setup.class.php`

## How It's Used

The plugin uses CSF **exclusively for metabox options** on the `bppt-pricing-table` custom post type. The metabox is configured in `inc/metabox-options.php` using CSF's API:

```php
CSF::createMetabox('_bpptable_', [
    'title'        => 'Pricing Table Settings',
    'post_type'    => 'bppt-pricing-table',
    'show_restore' => true,
]);

CSF::createSection('_bpptable_', [
    'fields' => [ /* field definitions */ ]
]);
```

## CSF Field Types Used

| CSF Field Type | Used For |
|---|---|
| `notice` | Info message in metabox |
| `image_select` | Template picker (5 visual options) |
| `group` | Repeatable pricing plan entries |
| `text` | Plan name, price, price unit, button text, button link, feature items |
| `button_set` | Currency selector, color scheme selectors |
| `switcher` | Recommended plan toggle |
| `checkbox` | Feature enable/disable (templates 4 & 5) |
| `subheading` | "Plan Features" section header |

## CSF Features Leveraged

### Field Dependencies

CSF's dependency system is used extensively to show/hide fields based on template selection:

```php
'dependency' => array('pricing_demo', '==', 'demo-1', 'all')
```

This shows `plan_color_opt1` only when Template 1 is selected.

Nested dependencies:
```php
'dependency' => array('plan_recommended', '==', 'true')
```

Shows the recommended text field only when the switcher is on.

### Grouped/Repeatable Fields

Two levels of repeatable groups:
1. **Pricing Table group** — Each entry = one plan column
2. **Plan Features group** (nested) — Each entry = one feature line item

### Accordion Display

Both groups use accordion display with:
- Auto-numbering (`accordion_title_number`)
- Custom prefix ("Pricing Table :: ")

## CSF Directory Structure

```
inc/csf/
├── csf-config.php          # Entry point
├── index.php               # Security blank
│
├── classes/                 # Core PHP classes
│   ├── setup.class.php      # Main setup, CSF static class
│   ├── abstract.class.php   # Base abstract class
│   ├── admin-options.class.php
│   ├── metabox-options.class.php   # ← Used by this plugin
│   ├── shortcode-options.class.php
│   ├── customize-options.class.php
│   ├── taxonomy-options.class.php
│   ├── comment-options.class.php
│   ├── nav-menu-options.class.php
│   ├── profile-options.class.php
│   ├── widget-options.class.php
│   └── fields.class.php
│
├── fields/                  # 40+ individual field renderers
│   ├── accordion/
│   ├── background/
│   ├── backup/
│   ├── border/
│   ├── button_set/          # ← Used
│   ├── checkbox/            # ← Used
│   ├── color/
│   ├── group/               # ← Used
│   ├── heading/
│   ├── icon/
│   ├── image_select/        # ← Used
│   ├── notice/              # ← Used
│   ├── repeater/
│   ├── select/
│   ├── slider/
│   ├── subheading/          # ← Used
│   ├── switcher/            # ← Used
│   ├── text/                # ← Used
│   ├── textarea/
│   ├── typography/          # (includes Google Fonts database)
│   └── ... (many more)
│
├── functions/               # Utility functions
│   ├── actions.php          # AJAX save actions
│   ├── customize.php        # Customizer integration
│   ├── helpers.php          # Misc helpers
│   ├── sanitize.php         # Data sanitization
│   ├── validate.php         # Validation rules
│   └── walker.php           # Nav menu walker
│
├── assets/
│   ├── css/                 # Compiled CSS (style.css, style.min.css, RTL)
│   ├── scss/partials/       # SCSS source (13 partials)
│   ├── js/                  # JS (main.js, plugins.js, gutenberg.js)
│   └── images/              # Logo SVGs, checkerboard pattern
│
├── views/                   # Admin welcome/about pages
│   ├── welcome.php
│   ├── about.php
│   ├── header.php
│   ├── footer.php
│   ├── quickstart.php
│   ├── documentation.php
│   ├── free-vs-premium.php
│   ├── relnotes.php
│   └── support.php
│
├── samples/                 # Demo configurations
│   ├── admin-options.php
│   ├── metabox-options.php
│   ├── shortcode-options.php
│   └── ... (8 sample files)
│
└── languages/               # Translations (20+ languages)
    ├── default.pot
    ├── ar.po/mo
    ├── bn_BD.po/mo
    ├── de_DE.po/mo
    ├── es_ES.po/mo
    ├── fr_FR.po/mo
    └── ... (many more)
```

## CSF Welcome Page

CSF includes its own welcome/about page system (accessible under Tools → Codestar Framework when the framework is used as a standalone plugin). In this embedded usage, it provides:

- **About page** — Framework info and version
- **Quick Start** — Getting started guide
- **Documentation** — Links to docs
- **Free vs Premium** — Feature comparison table
- **Support** — Support info
- **Release Notes** — Full changelog from v1.0 to v2.2.6
- **Demo Mode** — Can activate/deactivate sample configurations

## Internationalization

CSF ships with translations for 20+ languages including:
Arabic, Azerbaijani, Bengali, German, Spanish, French, Hindi, Indonesian, Italian, Japanese, Korean, Nepali, Dutch, Polish, Portuguese, Russian, Thai, Turkish, Vietnamese, Chinese (Simplified).

The plugin's own text domain is `bpricing`, used for all user-facing strings in the metabox and admin.
