# Admin Dashboard (React Application)

## Overview

The admin dashboard is a **React single-page application** rendered inside the WordPress admin. It provides an informational hub with welcome content, demo galleries, and a pricing/upsell page for the premium version.

## Entry Point

**File:** `inc/admin/dashboard.js`

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const dashboardEl = document.getElementById('bpptDashboard');
    const info = JSON.parse(dashboardEl.dataset.info);
    createRoot(dashboardEl).render(<App {...dashboardInfo(info)} />);
});
```

**Flow:**
1. Waits for DOM ready
2. Finds the `#bpptDashboard` div (rendered by PHP)
3. Parses the `data-info` JSON attribute
4. Calls `dashboardInfo(info)` to build the full config object
5. Renders the React `<App>` component into the div

## Routing — App.js

**File:** `inc/admin/Components/App.js`  
**Router:** `HashRouter` (uses `#/path` URLs)

### Routes

| Path | Component | Access |
|---|---|---|
| `/` | Redirect → `/welcome` | All |
| `/welcome` | `Welcome` | All |
| `/filter-demos` | `FilterDemos` (from bpl-tools) | All |
| `/pricing` | `Pricing` (from bpl-tools) | Free only |
| `*` | Redirect → `/welcome` | All (fallback) |

### Conditional Routing

- The `/pricing` route is only rendered when `!isPremium`
- The filter-demos page shows a "Buy Now" button for free users, linking to `#/pricing`

## Layout — Layout.js

**File:** `inc/admin/Components/Layout.js`

### Navigation

| Label | Hash Path |
|---|---|
| Welcome | `/welcome` |
| Demos | `/filter-demos` |
| Pricing | `/pricing` |

- Navigation links for `/purchase`, `/pricing`, and `/feature-comparison` are **hidden** for premium users
- Uses `useLocation()` to highlight the active nav link with class `active`
- Wraps content in a `Header` component from bpl-tools

### Structure

```
<div class="bPlDashboard">
    <Header>
        <nav class="bPlDashboardNav">
            [Welcome] [Demos] [Pricing]
        </nav>
    </Header>
    <main class="bPlDashboardMain">
        <div class="bPlDashboardContainer">
            <Outlet />  ← Route content renders here
        </div>
    </main>
</div>
```

## Welcome Page — Welcome.js

**File:** `inc/admin/Components/Welcome.js`

Renders two sections:
1. **Overview** — Plugin overview/banner from bpl-tools, with a "Buy Now" button (free only)
2. **Changelog** — Version history list from `changelogs` data

## Data Configuration — data.js

**File:** `inc/admin/utils/data.js`

### dashboardInfo(info)

Builds the full dashboard configuration object from the PHP-provided info:

| Property | Source/Value |
|---|---|
| `name` | "Pricing Table Block" (+ " Pro" for premium) |
| `slug` | `'my-pricing-table'` |
| `logo` | WordPress.org plugin icon URL |
| `banner` | WordPress.org plugin banner URL |
| `version` | From PHP |
| `isPremium` | From PHP (currently `false`) |
| `pages.org` | WordPress.org plugin page URL |
| `freemius` | Product ID: 19836, Plan ID: 32912 |

### changelogs

```javascript
[
    { version: '1.0.1', list: ['updated codestar framework'] },
    { version: '1.0.0', list: ['Initial Release'] }
]
```

### pricingInfo

Defines the premium upgrade pricing page:

**Billing Cycles:** Lifetime only (monthly/annual commented out)

| Plan | Sites | Lifetime Price |
|---|---|---|
| Single Site | 1 | $29.99 |
| 3 Sites | 3 | $59.99 (Featured — "Best Value") |
| Unlimited Sites | Unlimited | $199.99 |

**Features Listed:**
- Universal Shortcodes (all page builders)
- Powerful Gutenberg Block
- 5 Built-in templates
- Responsive Design
- Preferred colors
- Custom currency symbol

### filterDemoInfo

Defines the demo gallery with filterable categories:

**Categories:** All, Default, Horizontal, Minimal, Dark, Switchable, Dark Minimalist

**Demos (8 items):**
1. Default Pricing Table Basic Style
2. Default Pricing Table Standard Style
3. Default Pricing Table Ultimate Style
4. Horizontal Pricing Table Style
5. Minimal Pricing Table Style
6. Dark Pricing Table Style
7. Switchable Pricing Table Style
8. DarkMinimalist Pricing Table Style

Each demo has a screenshot URL from `templates.bplugins.com`.

## Admin Styles — dashboard.scss

**File:** `inc/admin/dashboard.scss`

Imports shared styles from `bpl-tools/Admin/style.scss`, then adds custom overrides:
- Dashboard box background: `#fbfbfb`
- Filter demo modal border-radius: `8px`
- Filter item image: `contain` fit, `8px` border-radius
- Overview banner: full-width, auto-height, `aliceblue` background

## Post List/Edit Scripts

### post.js

**File:** `inc/admin/post.js`

Provides a global `copybpptAdminShortcode(id)` function for the CPT post list table:

1. Selects the shortcode input text
2. Copies to clipboard via `document.execCommand('copy')`
3. Shows "Copied Successfully!" tooltip for 1.5 seconds
4. Uses `wp.i18n.__()` for translatable strings

### post.scss

**File:** `inc/admin/post.scss`

Styles the shortcode copy button/tooltip:
- Blue background (`#146EF5`) input with white text
- Hover-revealed tooltip with arrow pseudo-element
- Smooth opacity transition

## Script Enqueuing

**Method:** `BPPTPricingTable::admin_enqueue_scripts()`

| Screen | Assets Loaded |
|---|---|
| `bppt-pricing-table_page_my-pricing-table` | `dashboard.js` (deps: react, react-dom, wp-components) + `dashboard.css` |
| `edit.php` or `post.php` | `admin-post.js` + `admin-post.css` |
| All admin pages | `custom-style.css` (shortcode generator styles) |

## External Dependencies (bpl-tools)

The dashboard imports shared components from `../../../../bpl-tools/`:

| Import | From |
|---|---|
| `FilterDemos` | `bpl-tools/Admin/Demos` |
| `Pricing` | `bpl-tools/Admin/Pricing` |
| `Header` | `bpl-tools/Admin/Header/` |
| `Overview` | `bpl-tools/Admin/Overview` |
| `Changelog` | `bpl-tools/Admin` |
| `Button` | `bpl-tools/Components` |
| SCSS styles | `bpl-tools/Admin/style.scss` |

> **Note:** `bpl-tools` is a shared library used across multiple bPlugins products. It's referenced via relative paths, suggesting it lives as a sibling directory to the plugin in the development environment.
