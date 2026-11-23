# Shortcode & Frontend Templates

## Shortcode

**Tag:** `[bp-table id=XX]`  
**Handler:** `BPPTPricingTable::bppt_bprincing_table()`  
**File:** `includes/class-bpptPricingTable.php` (line 64–301)

### How It Works

1. Parses the `id` attribute from the shortcode
2. Retrieves meta data: `get_post_meta($id, '_bpptable_', true)`
3. Checks which template is selected via `$pricing_metas['pricing_demo']`
4. Conditionally enqueues the matching template CSS (only loaded when shortcode is used)
5. Loops through `$pricing_metas['pricing_table']` array to render each plan
6. Uses `ob_start()` / `ob_get_clean()` for output buffering

### Security

All output is escaped:
- `esc_html()` for text content
- `esc_attr()` for HTML attributes (CSS classes)
- `esc_url()` for button links
- `wp_kses_post()` for currency in template 4 (allows basic HTML)

---

## Template 1 — Card with Circular Price Badge (`demo-1`)

**CSS File:** `public/css/pricing-table-1.css`  
**Container Class:** `.bppt_pricing`  
**Font:** Lato (Google Fonts, enqueued)  
**Layout:** Flexbox, horizontal wrapping, centered

### Visual Structure

```
┌─────────────────────┐
│  [HOT] badge (opt.)  │
│  ┌─────────────────┐ │
│  │   Plan Name     │ │  ← colored header bar
│  │  ┌───────────┐  │ │
│  │  │  $22      │  │ │  ← circular price badge overlapping
│  │  │  /month   │  │ │
│  │  └───────────┘  │ │
│  └─────────────────┘ │
│  Feature 1            │
│  ──────────────────── │
│  Feature 2            │
│  ──────────────────── │
│  Feature 3            │
│                       │
│    [ ORDER NOW ]      │  ← dark CTA button
└─────────────────────┘
```

### Color Schemes

| Class | Header | Price Badge |
|---|---|---|
| (default) | `#53cfe9` / `#20bada` | `#20bada` |
| `.basic` | `#75ddd9` / `#44cbc6` | `#44cbc6` |
| `.standard` | `#4484c1` / `#3772aa` | `#3772aa` |
| `.ultimite` | `#f75c70` / `#dd4b5e` | `#dd4b5e` |

### Special Features

- **"Hot" badge** — Absolute positioned orange (`#f80`) badge, shown when `plan_recommended` is enabled
- Customizable recommended text (default: "Hot")

---

## Template 2 — Ribbon/Banner Style (`demo-2`)

**CSS File:** `public/css/pricing-table-2.css`  
**Container Class:** `.bppt_container`  
**Font:** Rubik  
**Layout:** Flexbox, 280px per card, responsive (3-col on desktop)

### Visual Structure

```
     ┌── ribbon fold ──┐
┌────┤   PLAN NAME     ├────┐
│    └── ribbon fold ──┘    │
│                           │
│        $22                │
│      ────────             │
│        /month             │
│                           │
│  ● Feature 1             │  ← colored dots
│  ● Feature 2             │
│  ● Feature 3             │
│                           │
│    ┌── fold ──┐          │
│    │ ORDER NOW│          │  ← ribbon-style CTA
│    └── fold ──┘          │
└───────────────────────────┘
```

### Color Schemes

| Class | Primary Color |
|---|---|
| (default) | `#f53c25` (Red) |
| `.pink` | `#f50057` |
| `.purple` | `#8e44ad` |
| `.sky` | `#2bcbba` |
| `.lemon` | `#4cd137` |

### CSS Tricks

- Uses `clip-path: polygon()` for the header ribbon shape
- CSS pseudo-elements (`:before`/`:after`) for 3D fold effects on header and CTA button
- Colored borders on the content area matching the scheme
- Responsive: 3 columns ≥922px, single column ≤576px

---

## Template 3 — Gradient Bar (`demo-3`)

**CSS File:** `public/css/pricing-table-3.css`  
**Container Class:** `.bppt_table3`  
**Font:** Poppins  
**Layout:** Flexbox, `calc(100%/3 - 40px)` per card, min-width 300px

### Visual Structure

```
┌───────────────────────┐
│                       │
│     Plan Name         │  ← colored text
│                       │
├───────────────────────┤
│    ████████████████   │  ← gradient bar (green→teal)
│      $22              │
│     Per Month         │
│    ████████████████   │
├───────────────────────┤
│                       │
│  Feature 1            │
│  Feature 2            │
│  Feature 3            │
│                       │
│   [ ORDER NOW ]       │  ← gradient button with shadow hover
└───────────────────────┘
```

### Color Schemes

| Class | Gradient | Title Color |
|---|---|---|
| (default) | `#2cc550` → `#35c296` | `#34ca95` |
| `.purple` | `#654caf` → `#945ad2` | `#945ad2` |
| `.pink` | `#ca3173` → `#d55a6f` | `#d55a6f` |

---

## Template 4 — Card with Background Shape (`demo-4`)

**CSS File:** `public/css/pricing-table-4.css`  
**Container Class:** `.priceTableBGBefore`  
**Font:** Roboto  
**Layout:** Flexbox, column-based (3-col desktop, 2-col tablet, 1-col mobile)

### Visual Structure

```
       ┌── decorative shape ──┐
┌──────┤                      │
│      └──────────────────────┘
│  ┌─────────────────────────┐
│  │      PLAN NAME          │
│  │                         │
│  │  ✔ Feature 1            │  ← checkmark for enabled
│  │  ✖ Feature 2            │  ← cross for disabled
│  │  ✔ Feature 3            │
│  │                         │
│  │        $22              │
│  │      Per Month          │
│  │                         │
│  │   [ ORDER NOW ]         │  ← gradient CTA
│  └─────────────────────────┘
└─────────────────────────────
```

### Color Schemes

| Class | Gradient |
|---|---|
| (default) | `#9fcd37` → `#72bb43` |
| `.orange` | `#f0891f` → `#da382a` |
| `.purple` | `#c95799` → `#9f54ab` |

### Special Features

- **Enable/Disable features** — Uses `feat_item_chk` checkbox; enabled = ✔ (green), disabled = ✖ (grey)
- CSS pseudo-element `::before` creates a rounded decorative background shape
- Box shadow with offset for 3D effect
- Responsive column classes: `columns-3`, `columns-tablet-2`, `columns-mobile-1`

---

## Template 5 — Arrow Banner Gradient (`demo-5`)

**CSS File:** `public/css/pricing-table-5.css`  
**Container Class:** `.priceTableGradient`  
**Font:** Roboto  
**Layout:** Flexbox, column-based with responsive breakpoints

### Visual Structure

```
┌───────────────────────┐
│                       │
│  ████████████▶        │  ← arrow-shaped gradient banner
│  │ PLAN NAME │        │
│  ████████████▶        │
│                       │
│    $22/month          │
│                       │
│  ──────────────────── │
│  ● Feature 1          │  ← colored circle checkmark
│  ● Feature 2          │
│  ✖ Feature 3          │  ← red circle cross (disabled)
│  ──────────────────── │
│                       │
│   [ ORDER NOW ]       │  ← rounded gradient button
└───────────────────────┘
```

### Color Schemes

| Class | Gradient | Checkmark Color |
|---|---|---|
| (default) | Orange `#f37a21`→`#f8931f` | `#f89923` |
| `.green` | Green `#8dc53c`→`#9bbf3b` | `#54a445` |
| `.blue` | Blue `#30a6cc`→`#4db5dc` | `#1098cc` |

### Special Features

- **Arrow banner** — Uses `clip-path: polygon()` for arrow/chevron shape
- Multi-stop gradients in the banner
- Enable/Disable features (same as template 4) with colored circle icons
- Disabled features get red (`#ed1925`) cross icons
- 6 column variants supported (1–6 columns)

---

## Asset Registration

**Method:** `BPPTPricingTable::bppt_register_assets()`  
**Hook:** `wp_enqueue_scripts`

All 5 template CSS files and the Google Font are **registered** (not enqueued) on every page. They are **only enqueued** when the specific template's shortcode is rendered. This ensures zero CSS overhead on pages without pricing tables.

| Handle | File |
|---|---|
| `google_font` | Google Fonts Lato (400,700) |
| `bppt_pt_style_1` | `public/css/pricing-table-1.css` |
| `bppt_pt_style_2` | `public/css/pricing-table-2.css` |
| `bppt_pt_style_3` | `public/css/pricing-table-3.css` |
| `bppt_pt_style_4` | `public/css/pricing-table-4.css` |
| `bppt_pt_style_5` | `public/css/pricing-table-5.css` |
