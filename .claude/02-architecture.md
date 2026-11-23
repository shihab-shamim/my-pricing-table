# Architecture & File Structure

## Directory Tree

```
my-pricing-table/
├── pricing-table.php              # Main plugin bootstrap (entry point)
├── package.json                   # NPM config (wp-scripts based)
├── webpack.config.js              # Custom Webpack config
├── .eslintrc.js                   # ESLint configuration
├── .gitignore                     # Git ignores node_modules & zip
├── readme.txt                     # WordPress.org readme
│
├── includes/                      # Core PHP classes
│   ├── class-bpptCPT.php          # Custom Post Type + Admin menu
│   └── class-bpptPricingTable.php # Main plugin class (shortcode, assets, admin UI)
│
├── inc/
│   ├── metabox-options.php        # CSF metabox field definitions
│   ├── admin/                     # React admin dashboard source
│   │   ├── dashboard.js           # Dashboard entry point
│   │   ├── dashboard.scss         # Dashboard styles
│   │   ├── post.js                # Post list/edit JS (copy shortcode)
│   │   ├── post.scss              # Post list/edit styles (shortcode tooltip)
│   │   ├── Components/
│   │   │   ├── App.js             # React Router app shell
│   │   │   ├── Layout.js          # Dashboard layout with nav
│   │   │   └── Welcome.js         # Welcome/overview page
│   │   ├── utils/
│   │   │   └── data.js            # Dashboard data, pricing info, demo gallery data
│   │   └── assets/
│   │       └── pricing-table-block.png  # Block preview image
│   │
│   └── csf/                       # Codestar Framework (embedded, v2.2.6)
│       ├── csf-config.php         # CSF bootstrap
│       ├── classes/               # CSF PHP classes (setup, fields, metabox, etc.)
│       ├── fields/                # Individual field type renderers (40+ types)
│       ├── functions/             # Helper functions (actions, sanitize, validate)
│       ├── assets/                # CSF CSS, JS, SCSS, images
│       ├── views/                 # CSF welcome/about pages
│       ├── samples/               # CSF sample configurations
│       └── languages/             # CSF translations (20+ languages)
│
├── public/                        # Frontend assets
│   ├── css/
│   │   ├── custom-style.css       # Shortcode generator & item checkbox styles
│   │   ├── pricing-table-1.css    # Template 1 (Lato, card with circular price badge)
│   │   ├── pricing-table-2.css    # Template 2 (Rubik, ribbon/banner style)
│   │   ├── pricing-table-3.css    # Template 3 (Poppins, gradient bar)
│   │   ├── pricing-table-4.css    # Template 4 (Roboto, card with background shape)
│   │   └── pricing-table-5.css    # Template 5 (Roboto, arrow banner gradient)
│   └── img/
│       ├── demo-1.png through demo-5.png  # Template preview images
│
├── build/                         # Compiled output (wp-scripts build)
│   ├── admin/
│   │   ├── dashboard.js           # Compiled React dashboard
│   │   ├── dashboard.css          # Compiled dashboard styles
│   │   └── dashboard.asset.php    # WP dependency manifest
│   ├── admin-post.js              # Compiled post.js
│   ├── admin-post.css             # Compiled post.scss
│   └── images/
│       └── support.d3257a73.png   # Hashed support image
│
└── node_modules/                  # NPM dependencies (gitignored)
```

## Architectural Flow

```
┌──────────────────────────────────────────────────────────────┐
│                     WordPress Core                           │
│  ┌────────┐   ┌──────────────────────────────────────────┐  │
│  │ init   │──▶│ register_cpt('bppt-pricing-table')       │  │
│  └────────┘   │        (class-bpptCPT.php)               │  │
│               └──────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────┐   ┌────────────────────────────────┐  │
│  │ admin_menu       │──▶│ Submenu "Help And Demo"         │  │
│  │                  │   │ Renders #bpptDashboard div       │  │
│  └──────────────────┘   └─────────────┬──────────────────┘  │
│                                       │                      │
│  ┌──────────────────┐                 ▼                      │
│  │ admin_enqueue    │   ┌────────────────────────────────┐  │
│  │ _scripts         │──▶│ React App (dashboard.js)        │  │
│  │                  │   │  └─ App.js (HashRouter)          │  │
│  └──────────────────┘   │     ├─ /welcome → Welcome.js    │  │
│                         │     ├─ /filter-demos → Demos     │  │
│                         │     └─ /pricing → Pricing        │  │
│                         └────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────┐   ┌────────────────────────────────┐  │
│  │ CSF Metabox      │──▶│ _bpptable_ meta fields         │  │
│  │ (metabox-options) │   │  ├─ pricing_demo (image_select)│  │
│  │                  │   │  └─ pricing_table (group)       │  │
│  └──────────────────┘   └────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────┐   ┌────────────────────────────────┐  │
│  │ [bp-table id=X]  │──▶│ bppt_bprincing_table()         │  │
│  │ Shortcode        │   │  ├─ Reads _bpptable_ meta      │  │
│  │                  │   │  ├─ Selects template (demo-1–5) │  │
│  └──────────────────┘   │  ├─ Enqueues per-template CSS   │  │
│                         │  └─ Outputs HTML via ob_start   │  │
│                         └────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Technology Stack

| Layer | Technology |
|---|---|
| **Backend** | PHP 7.2+ (WordPress Plugin API) |
| **Options Framework** | Codestar Framework (CSF) v2.2.6 (embedded) |
| **Frontend Admin** | React 18 + React Router v7 (HashRouter) |
| **Build Tool** | @wordpress/scripts (Webpack) |
| **Linting** | ESLint (eslint:recommended + plugin:react/recommended) |
| **Styling** | SCSS (admin), plain CSS (frontend templates) |
| **Dependencies** | react-hot-toast, react-router-dom |
| **External Tools** | bpl-tools (shared admin components, imported relatively from `../../../../bpl-tools/`) |

## Build System

**Webpack entry points** (from `webpack.config.js`):

| Entry | Source | Output |
|---|---|---|
| `admin/dashboard` | `./inc/admin/dashboard.js` | `build/admin/dashboard.js` + `.css` |
| `admin-post` | `./inc/admin/post.js` | `build/admin-post.js` + `.css` |

The RTL CSS plugin is explicitly filtered out. ESLint runs as a Webpack plugin.

**NPM Scripts:**
- `npm run build` — Production build
- `npm run start` — Development mode with watch
- `npm run plugin-zip` — Create distribution ZIP
- `npm run bundle` — Full build + i18n + gulp bundle + zip
