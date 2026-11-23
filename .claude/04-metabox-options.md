# Metabox Options (CSF Configuration)

## Overview

**File:** `inc/metabox-options.php`  
**Framework:** Codestar Framework (CSF) v2.2.6  
**Meta Key:** `_bpptable_`  
**Post Type:** `bppt-pricing-table`

The metabox titled **"Pricing Table Settings"** appears on the edit screen for each pricing table post. It includes a "Restore" button for resetting to defaults.

## Field Structure

### 1. Info Notice

| Property | Value |
|---|---|
| Type | `notice` (info style) |
| Content | "Please, Click on the 'Add New Pricing Table' button to create new pricing table Items." |

### 2. Template Selector — `pricing_demo`

| Property | Value |
|---|---|
| **ID** | `pricing_demo` |
| **Type** | `image_select` |
| **Title** | "Choose Pricing Table Style" |
| **Default** | `demo-1` |

**Options (with preview images):**

| Value | Preview |
|---|---|
| `demo-1` | `public/img/demo-1.png` |
| `demo-2` | `public/img/demo-2.png` |
| `demo-3` | `public/img/demo-3.png` |
| `demo-4` | `public/img/demo-4.png` |
| `demo-5` | `public/img/demo-5.png` |

### 3. Pricing Table Group — `pricing_table`

A **repeatable group** field. Each group entry represents one pricing plan column.

**Group Settings:**
- **Button Title:** "Add New Pricing Table"
- **Accordion Title Prefix:** "Pricing Table :: "
- **Accordion Numbering:** Enabled

#### 3.1 Plan Name — `plan_name`

| Property | Value |
|---|---|
| Type | `text` |
| Title | "Plan Name" |
| Description | "Input Your Pricing Plan Name" |
| Default | "Basic Plan" |

#### 3.2 Plan Price — `plan_price`

| Property | Value |
|---|---|
| Type | `text` |
| Title | "Plan Price" |
| Description | "Set Your Plan Price" |
| Default | `22` |

#### 3.3 Currency — `plan_currency`

| Property | Value |
|---|---|
| Type | `button_set` |
| Title | "Currency" |
| Default | `$` |

**Options:** `$`, `¥`, `€`, `৳`, `﷼` (rial)

#### 3.4 Price Unit — `plan_price_unit`

| Property | Value |
|---|---|
| Type | `text` |
| Title | "Plan Price Unit Text" |
| Description | "Set Your Plan Price Unit" |
| Default | "Per Month" |

#### 3.5 Color Schemes (Template-Dependent)

Each template has its own color scheme `button_set` field, shown/hidden via CSF dependency:

| Field ID | Template | Options |
|---|---|---|
| `plan_color_opt1` | demo-1 | default, cyan, Blue, Red |
| `plan_color_opt2` | demo-2 | default, Pink, Purple, Sky blue, Lemon |
| `plan_color_opt3` | demo-3 | default, Purple, Pink |
| `plan_color_opt4` | demo-4 | default, Orange, Purple |
| `plan_color_opt5` | demo-5 | default, Green, Blue |

**Dependency:** Each color field only shows when `pricing_demo == demo-N`.

#### 3.6 Recommended Plan — `plan_recommended`

| Property | Value |
|---|---|
| Type | `switcher` |
| Title | "Recommended Plan" |
| Default | `false` |
| **Dependency** | Only shown for `demo-1` |

#### 3.7 Recommended Text — `plan_recommded_text`

| Property | Value |
|---|---|
| Type | `text` |
| Title | "Input Featured text" |
| Default | "Hot" |
| **Dependency** | Only shown when `plan_recommended` is `true` |

#### 3.8 Button Text — `plan_btn_text`

| Property | Value |
|---|---|
| Type | `text` |
| Title | "Plan Button Text" |
| Default | "Order Now" |

#### 3.9 Button Link — `plan_btn_link`

| Property | Value |
|---|---|
| Type | `text` |
| Title | "Plan Button Link" |
| **Dependency** | Only shown when `plan_btn_text` is not empty |

#### 3.10 Plan Features (Nested Group) — `plan_features`

A **nested repeatable group** inside each pricing plan.

**Group Settings:**
- **Button Title:** "Add Features"
- **Accordion Numbering:** Enabled

**Fields per feature:**

| Field ID | Type | Title | Notes |
|---|---|---|---|
| `feat_item_chk` | `checkbox` | "Enable/Disable" | Only shown for demo-4 and demo-5 |
| `feat_item` | `text` | "Item" | The feature text |

The checkbox controls whether a feature appears as enabled (✔) or disabled (✖/strikethrough) in templates 4 and 5.

## Data Flow

```
User fills metabox fields
        │
        ▼
CSF saves to wp_postmeta
  key: '_bpptable_'
  value: serialized array
        │
        ▼
Shortcode reads via get_post_meta($id, '_bpptable_', true)
        │
        ▼
Template renders based on $pricing_metas['pricing_demo']
Each plan from $pricing_metas['pricing_table'] array
```
