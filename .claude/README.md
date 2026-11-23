# My Pricing Table — Project Documentation Index

> **Auto-generated documentation** for the `my-pricing-table` WordPress plugin.  
> Every feature, file, and mechanism is documented across the files below.

## Documentation Files

| # | File | Contents |
|---|---|---|
| 1 | [01-project-overview.md](file:///d:/Local/plugins/app/public/wp-content/plugins/my-pricing-table/.claude/01-project-overview.md) | Plugin identity, features list, constants, Freemius config, changelog |
| 2 | [02-architecture.md](file:///d:/Local/plugins/app/public/wp-content/plugins/my-pricing-table/.claude/02-architecture.md) | Full directory tree, architectural flow diagram, tech stack, build system |
| 3 | [03-custom-post-type.md](file:///d:/Local/plugins/app/public/wp-content/plugins/my-pricing-table/.claude/03-custom-post-type.md) | CPT registration, admin submenu, column customization, row actions, publishing UI |
| 4 | [04-metabox-options.md](file:///d:/Local/plugins/app/public/wp-content/plugins/my-pricing-table/.claude/04-metabox-options.md) | CSF metabox field definitions, template selector, plan fields, features group, dependencies |
| 5 | [05-shortcode-and-templates.md](file:///d:/Local/plugins/app/public/wp-content/plugins/my-pricing-table/.claude/05-shortcode-and-templates.md) | Shortcode handler, all 5 templates with visual diagrams, color schemes, responsive CSS, asset registration |
| 6 | [06-admin-dashboard.md](file:///d:/Local/plugins/app/public/wp-content/plugins/my-pricing-table/.claude/06-admin-dashboard.md) | React app routing, components (App, Layout, Welcome), data.js config, pricing/demo gallery data, bpl-tools imports |
| 7 | [07-codestar-framework.md](file:///d:/Local/plugins/app/public/wp-content/plugins/my-pricing-table/.claude/07-codestar-framework.md) | CSF integration details, field types used, directory structure, welcome pages, i18n |
| 8 | [08-hooks-and-activation.md](file:///d:/Local/plugins/app/public/wp-content/plugins/my-pricing-table/.claude/08-hooks-and-activation.md) | Complete hooks/filters table, activation redirect flow, dependency loading, text domain |

## Quick Reference

### Key Files

| File | Purpose |
|---|---|
| `pricing-table.php` | Plugin entry point — constants, requires, activation hook |
| `includes/class-bpptCPT.php` | CPT registration + admin submenu |
| `includes/class-bpptPricingTable.php` | Main class — shortcode, enqueuing, admin UI hooks |
| `inc/metabox-options.php` | CSF metabox field configuration |
| `inc/admin/dashboard.js` | React dashboard entry point |
| `inc/admin/Components/App.js` | React Router + route definitions |
| `inc/admin/utils/data.js` | Dashboard config data, pricing info, demo gallery |

### Shortcode

```
[bp-table id=POST_ID]
```

### Custom Post Type

```
bppt-pricing-table
```

### Meta Key

```
_bpptable_
```

### Templates

| ID | Style | CSS File |
|---|---|---|
| `demo-1` | Card + circular price badge | `pricing-table-1.css` |
| `demo-2` | Ribbon/banner with folds | `pricing-table-2.css` |
| `demo-3` | Gradient bar | `pricing-table-3.css` |
| `demo-4` | Card with decorative shape | `pricing-table-4.css` |
| `demo-5` | Arrow banner gradient | `pricing-table-5.css` |
